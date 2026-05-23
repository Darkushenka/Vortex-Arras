/* jslint node: true */

'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var cfg = require('../../../config.json');
exports.addArticle = function (string) {
  return /[aeiouAEIOU]/.test(string[0]) ? 'an ' + string : 'a ' + string;
};
exports.getDistance = function (p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};
exports.getDirection = function (p1, p2) {
  return Math.atan2(p2.y - p1.y, p2.x - p1.x);
};
exports.clamp = function (value, min, max) {
  return Math.min(Math.max(value, min), max);
};

/*exports.angleDifference = function(a1, a2) {
    let diff1 = a2 - a1;
    while (diff1 >= 2*Math.PI) {
        diff1 -= 2*Math.PI;
    }
    while (diff1 < 0) {
        diff1 += 2*Math.PI;
    }
    let diff2 = a1 - a2;
    while (diff2 >= 2*Math.PI) {
        diff2 -= 2*Math.PI;
    }
    while (diff2 < 0) {
        diff2 += 2*Math.PI;
    }

    if (Math.abs(diff1) <= Math.abs(diff2)) { return diff1; }
    if (Math.abs(diff2) <= Math.abs(diff1)) { return diff2; }
};*/
exports.angleDifference = function () {
  var mod = function mod(a, n) {
    return (a % n + n) % n;
  };
  return function (sourceA, targetA) {
    var a = targetA - sourceA;
    return mod(a + Math.PI, 2 * Math.PI) - Math.PI;
  };
}();
exports.loopSmooth = function (angle, desired, slowness) {
  return exports.angleDifference(angle, desired) / slowness;
};

/*exports.loopClamp = function(angle, min, max) {
    angle = angle % (Math.PI * 2);
    min = min % (Math.PI * 2); if (min < 0) min += Math.PI * 2;
    max = max % (Math.PI * 2); if (max < 0) max += Math.PI * 2;
    let a = (max - min) % (Math.PI * 2); if (a < 0) a += Math.PI * 2;
    if (angle - min > a) return max;
    if (angle - min < 0) return min;
    return angle;
};*/

/*exports.pointInArc = function(point, givenAngle, allowedDifference) {
    let len = Math.sqrt(point.x * point.x + point.y * point.y);
    let norm = { x: point.x / len, y: point.y / len, };
    let vect = { x: Math.cos(givenAngle), y: Math.sin(givenAngle), };
    let dot = norm.x * vect.x + norm.y * vect.y;
    let a1 = Math.atan2(point.y, point.x);
    let a2 = Math.acos(dot);
    let diff = exports.angleDifference(a1, a2);
};*/

/*exports.isInArc = function(angle, arc) {
    return exports.loopClamp(angle, arc[0], arc[1]) == angle;
};*/

exports.deepClone = function (obj) {
  var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakMap();
  var result;
  // Do not try to clone primitives or functions
  if (Object(obj) !== obj || obj instanceof Function) return obj;
  if (hash.has(obj)) return hash.get(obj); // Cyclic reference
  try {
    // Try to run constructor (without arguments, as we don't know them)
    result = new obj.constructor();
  } catch (e) {
    // Constructor failed, create object without running the constructor
    result = Object.create(Object.getPrototypeOf(obj));
  }
  // Optional: support for some standard constructors (extend as desired)
  if (obj instanceof Map) Array.from(obj, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      val = _ref2[1];
    return result.set(exports.deepClone(key, hash), exports.deepClone(val, hash));
  });else if (obj instanceof Set) Array.from(obj, function (key) {
    return result.add(exports.deepClone(key, hash));
  });
  // Register in hash    
  hash.set(obj, result);
  // Clone and assign enumerable own properties recursively
  return Object.assign.apply(Object, [result].concat(_toConsumableArray(Object.keys(obj).map(function (key) {
    return _defineProperty({}, key, exports.deepClone(obj[key], hash));
  }))));
};
exports.averageArray = function (arr) {
  if (!arr.length) return 0;
  var sum = arr.reduce(function (a, b) {
    return a + b;
  });
  return sum / arr.length;
};
exports.sumArray = function (arr) {
  if (!arr.length) return 0;
  var sum = arr.reduce(function (a, b) {
    return a + b;
  });
  return sum;
};
exports.signedSqrt = function (x) {
  return Math.sign(x) * Math.sqrt(Math.abs(x));
};
exports.getJackpot = function (x) {
  return x > 26300 * 1.5 ? Math.pow(x - 26300, 0.85) + 26300 : x / 1.5;
};
exports.serverStartTime = Date.now();
// Get a better logging function
exports.time = function () {
  return Date.now() - exports.serverStartTime;
};

// create a custom timestamp format for log statements
var SimpleNodeLogger = require('simple-node-logger'),
  logger = SimpleNodeLogger.createRollingFileLogger({
    logDirectory: __dirname + '/../../../logs',
    fileNamePattern: 'diep2-<DATE>.log',
    dateFormat: 'YYYY-MM-DD',
    level: 'warn'
  });
exports.log = function (text) {
  console.log('[' + (exports.time() / 1000).toFixed(3) + ']: ' + text);
  logger.info(text);
};
exports.warn = function (text) {
  console.log('[' + (exports.time() / 1000).toFixed(3) + ']: ' + '[WARNING] ' + text);
  logger.warn(text);
};
exports.error = function (text) {
  console.log(text);
  logger.error(text);
};
exports.remove = function (array, index) {
  // there is more than one object in the container
  if (index === array.length - 1) {
    // special case if the obj is the newest in the container
    return array.pop();
  } else {
    var o = array[index];
    array[index] = array.pop();
    return o;
  }
};