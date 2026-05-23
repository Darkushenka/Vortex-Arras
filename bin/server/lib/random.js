/*jslint node: true */
"use strict";

require('seedrandom');
// Seed math
Math.seedrandom('' + Date.now());
exports.random = function (x) {
  return x * Math.random();
};
exports.randomAngle = function () {
  return Math.PI * 2 * Math.random();
};
exports.randomRange = function (min, max) {
  return Math.random() * (max - min) + min;
};
exports.irandom = function (i) {
  var max = Math.floor(i);
  return Math.floor(Math.random() * (max + 1)); //Inclusive
};
exports.irandomRange = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Inclusive
};
exports.gauss = function (mean, deviation) {
  var x1, x2, w;
  do {
    x1 = 2 * Math.random() - 1;
    x2 = 2 * Math.random() - 1;
    w = x1 * x1 + x2 * x2;
  } while (0 == w || w >= 1);
  w = Math.sqrt(-2 * Math.log(w) / w);
  return mean + deviation * x1 * w;
};
exports.gaussInverse = function (min, max, clustering) {
  var range = max - min;
  var output = exports.gauss(0, range / clustering);
  while (output < 0) {
    output += range;
  }
  while (output > range) {
    output -= range;
  }
  return output + min;
};
exports.gaussRing = function (radius, clustering) {
  var r = exports.random(Math.PI * 2);
  var d = exports.gauss(radius, radius * clustering);
  return {
    x: d * Math.cos(r),
    y: d * Math.sin(r)
  };
};
exports.chance = function (prob) {
  return exports.random(1) < prob;
};
exports.dice = function (sides) {
  return exports.random(sides) < 1;
};
exports.choose = function (arr) {
  return arr[exports.irandom(arr.length - 1)];
};
exports.chooseN = function (arr, n) {
  var o = [];
  for (var i = 0; i < n; i++) {
    o.push(arr.splice(exports.irandom(arr.length - 1), 1)[0]);
  }
  return o;
};
exports.chooseChance = function () {
  var totalProb = 0;
  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }
  arg.forEach(function (value) {
    totalProb += value;
  });
  var answer = exports.random(totalProb);
  for (var i = 0; i < arg.length; i++) {
    if (answer < arg[i]) return i;
    answer -= arg[i];
  }
};
exports.chooseBotName = function () {
  return exports.choose(['Alice', 'Bob', 'Carmen', 'David', 'Edith', 'Freddy', 'Gustav', 'Helga', 'Janet', 'Lorenzo', 'Mary', 'Nora', 'Olivia', 'Peter', 'Queen', 'Roger', 'Suzanne', 'Tommy', 'Ursula', 'Vincent', 'Wilhelm', 'Xerxes', 'Yvonne', 'Zachary', 'Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Hotel', 'India', 'Juliet', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-Ray', 'Yankee', 'Zulu']);
};
exports.chooseBossName = function (code, n) {
  switch (code) {
    case 'a':
      return exports.chooseN(['Archimedes', 'Akilina', 'Anastasios', 'Athena', 'Alkaios', 'Amyntas', 'Aniketos', 'Artemis', 'Anaxagoras', 'Apollon'], n);
    case 'castle':
      return exports.chooseN(['Berezhany', 'Lutsk', 'Dobromyl', 'Akkerman', 'Palanok', 'Zolochiv', 'Palanok', 'Mangup', 'Olseko', 'Brody', 'Isiaslav', 'Kaffa', 'Bilhorod'], n);
    default:
      return 'God';
  }
};