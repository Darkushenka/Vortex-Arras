"use strict";

/*jslint esversion: 6*/
/*function checkEndian() {
    var arrayBuffer = new ArrayBuffer(2);
    var uint8Array = new Uint8Array(arrayBuffer);
    var uint16array = new Uint16Array(arrayBuffer);
    uint8Array[0] = 0xAA; // set first byte
    uint8Array[1] = 0xBB; // set second byte
    if(uint16array[0] === 0xBBAA) return 0;
    if(uint16array[0] === 0xAABB) return 1;
    else throw new Error("Something crazy just happened");
}
var isBigEndian = new Uint8Array(new Uint32Array([0x12345678]).buffer)[0] === 0x12;
var isLittleEndian = new Uint8Array(new Uint32Array([0x12345678]).buffer)[0] === 0x78;*/

exports.encode = function () {
  // unsigned 8-bit integer
  var arrUint8 = new Uint8Array(1);
  // unsigned 16-bit integer
  var arrUint16 = new Uint16Array(1);
  var charUint16 = new Uint8Array(arrUint16.buffer);
  // unsigned 32-bit integer
  var arrUint32 = new Uint32Array(1);
  var charUint32 = new Uint8Array(arrUint32.buffer);
  // 32-bit float
  var arrFloat32 = new Float32Array(1);
  var charFloat32 = new Uint8Array(arrFloat32.buffer);
  // build some useful internal functions
  var _typeEncoder = function typeEncoder(type, number) {
    var output = '';
    switch (type) {
      case 'RawUint8':
        arrUint8[0] = number;
        return String.fromCharCode(arrUint8[0]);
      case 'RawUint16':
        arrUint16[0] = number;
        return String.fromCharCode(charUint16[0], charUint16[1]);
      case 'Uint8':
        arrUint8[0] = number;
        return '0' + String.fromCharCode(arrUint8[0]);
      case 'Uint16':
        arrUint16[0] = number;
        return '1' + String.fromCharCode(charUint16[0], charUint16[1]);
      case 'Uint32':
        arrUint32[0] = number;
        return '2' + String.fromCharCode(charUint32[0], charUint32[1], charUint32[2], charUint32[3]);
      case 'Sint8':
        arrUint8[0] = -1 - number;
        return '3' + String.fromCharCode(arrUint8[0]);
      case 'Sint16':
        arrUint16[0] = -1 - number;
        return '4' + String.fromCharCode(charUint16[0], charUint16[1]);
      case 'Sint32':
        arrUint32[0] = -1 - number;
        return '5' + String.fromCharCode(charUint32[0], charUint32[1], charUint32[2], charUint32[3]);
      case 'Float32':
        arrFloat32[0] = number;
        return '6' + String.fromCharCode(charFloat32[0], charFloat32[1], charFloat32[2], charFloat32[3]);
      case 'String8':
        return '7' + _typeEncoder('RawUint16', number.length) + number;
      case 'String16':
        for (var i = 0, strLen = number.length; i < strLen; i++) {
          output += _typeEncoder('RawUint16', number.charCodeAt(i));
        }
        return '8' + _typeEncoder('RawUint16', output.length) + output;
      default:
        throw new Error('Unknown encoding type.');
    }
  };
  var findType = function findType(value) {
    if (typeof value === 'string') {
      for (var i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 255) return 'String16';
      }
      return 'String8';
    }
    if (typeof value === 'boolean') return 'Uint8';
    if (typeof value !== 'number') {
      console.log(value);
      throw new Error('Unencodable data type');
    }
    if (value != Math.round(value)) return 'Float32';
    if (value < 0) {
      if (value >= -256) return 'Sint8';
      if (value >= -65535) return 'Sint16';
      if (value >= -4294967295) return 'Sint32';
    } else {
      if (value < 256) return 'Uint8';
      if (value < 65535) return 'Uint16';
      if (value < 4294967295) return 'Uint32';
    }
    return 'Float32';
  };
  // build the function
  return function (arr) {
    var verbose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var output = arr.splice(0, 1)[0];
    if (typeof output !== 'string') throw new Error('No identification code!');
    arr.forEach(function (value) {
      output += _typeEncoder(findType(value), value);
    });
    var len = output.length;
    var buffer = new ArrayBuffer(len);
    var integerView = new Uint8Array(buffer);
    for (var i = 0; i < len; i++) {
      integerView[i] = output.charCodeAt(i);
    }
    if (verbose) {
      console.log('OUTPUT: ' + integerView);
      console.log('RAW OUTPUT: ' + output);
      console.log('SIZE: ' + len);
    }
    return buffer;
  };
}();
exports.decode = function () {
  // unsigned 8-bit integer (none needed)
  // unsigned 16-bit integer
  var arrUint16 = new Uint16Array(1);
  var charUint16 = new Uint8Array(arrUint16.buffer);
  // unsigned 32-bit integer
  var arrUint32 = new Uint32Array(1);
  var charUint32 = new Uint8Array(arrUint32.buffer);
  // 32-bit float
  var arrFloat32 = new Float32Array(1);
  var charFloat32 = new Uint8Array(arrFloat32.buffer);
  // build a useful internal function
  var typeDecoder = function typeDecoder(str, type, offset) {
    switch (type) {
      case 'Uint8':
        return str.charCodeAt(offset++);
      case 'Uint16':
        for (var i = 0; i < 2; i++) {
          charUint16[i] = str.charCodeAt(offset++);
        }
        return arrUint16[0];
      case 'Uint32':
        for (var _i = 0; _i < 4; _i++) {
          charUint32[_i] = str.charCodeAt(offset++);
        }
        return arrUint32[0];
      case 'Sint8':
        return -1 - str.charCodeAt(offset++);
      case 'Sint16':
        for (var _i2 = 0; _i2 < 2; _i2++) {
          charUint16[_i2] = str.charCodeAt(offset++);
        }
        return -1 - arrUint16[0];
      case 'Sint32':
        for (var _i3 = 0; _i3 < 4; _i3++) {
          charUint32[_i3] = str.charCodeAt(offset++);
        }
        return -1 - arrUint32[0];
      case 'Float32':
        for (var _i4 = 0; _i4 < 4; _i4++) {
          charFloat32[_i4] = str.charCodeAt(offset++);
        }
        return arrFloat32[0];
      default:
        throw new Error('Unknown decoding type.');
    }
  };
  // actually decode it 
  return function (raw) {
    try {
      var intView = new Uint8Array(raw);
      var str = '';
      for (var i = 0, len = intView.length; i < len; i++) {
        str += String.fromCharCode(intView[i]);
      }
      var offset = 1;
      var output = [str.charAt(0)];
      while (offset < str.length) {
        switch (str[offset++]) {
          case '0':
            output.push(typeDecoder(str, 'Uint8', offset));
            offset++;
            break;
          case '1':
            output.push(typeDecoder(str, 'Uint16', offset));
            offset += 2;
            break;
          case '2':
            output.push(typeDecoder(str, 'Uint32', offset));
            offset += 4;
            break;
          case '3':
            output.push(typeDecoder(str, 'Sint8', offset));
            offset++;
            break;
          case '4':
            output.push(typeDecoder(str, 'Sint16', offset));
            offset += 2;
            break;
          case '5':
            output.push(typeDecoder(str, 'Sint32', offset));
            offset += 4;
            break;
          case '6':
            output.push(typeDecoder(str, 'Float32', offset));
            offset += 4;
            break;
          case '7':
            {
              // String8
              var _len = typeDecoder(str, 'Uint16', offset);
              offset += 2;
              output.push(str.slice(offset, offset + _len));
              offset += _len;
            }
            break;
          case '8':
            {
              // String16
              var _len2 = typeDecoder(str, 'Uint16', offset);
              offset += 2;
              var arr = str.slice(offset, offset + _len2);
              var buf = new Uint16Array(_len2 / 2);
              for (var _i5 = 0; _i5 < _len2; _i5 += 2) {
                buf[_i5 / 2] = typeDecoder(arr, 'Uint16', _i5);
              }
              output.push(String.fromCharCode.apply(null, buf));
              offset += _len2;
            }
            break;
          default:
            offset = str.length;
            throw new Error('Unknown decoding command. Decoding exited.');
        }
      }
      return output;
    } catch (err) {
      console.log(err);
      return -1;
    }
  };
}();