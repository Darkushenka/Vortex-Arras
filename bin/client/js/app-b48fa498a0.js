function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var app = function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var a = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
  }
  return r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function (t) {
      return e[t];
    }.bind(null, a));
    return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 1);
}([function (e, t, r) {
  "use strict";

  e.exports = {
    KEY_ESC: 27,
    KEY_ENTER: 13,
    KEY_CHAT: 13,
    KEY_FIREFOOD: 119,
    KEY_SPLIT: 32,
    KEY_LEFT: 65,
    KEY_UP: 87,
    KEY_RIGHT: 68,
    KEY_DOWN: 83,
    KEY_LEFT_ARROW: 37,
    KEY_UP_ARROW: 38,
    KEY_RIGHT_ARROW: 39,
    KEY_DOWN_ARROW: 40,
    KEY_AUTO_SPIN: 67,
    KEY_AUTO_FIRE: 69,
    KEY_OVER_RIDE: 82,
    KEY_UPGRADE_ATK: 49,
    KEY_UPGRADE_HTL: 50,
    KEY_UPGRADE_SPD: 51,
    KEY_UPGRADE_STR: 52,
    KEY_UPGRADE_PEN: 53,
    KEY_UPGRADE_DAM: 54,
    KEY_UPGRADE_RLD: 55,
    KEY_UPGRADE_MOB: 56,
    KEY_UPGRADE_RGN: 57,
    KEY_UPGRADE_SHI: 48,
    KEY_MOUSE_0: 32,
    KEY_MOUSE_1: 86,
    KEY_MOUSE_2: 16,
    KEY_CHOOSE_1: 89,
    KEY_CHOOSE_2: 72,
    KEY_CHOOSE_3: 85,
    KEY_CHOOSE_4: 74,
    KEY_CHOOSE_5: 73,
    KEY_CHOOSE_6: 75,
    KEY_CHOOSE_7: 79,
    KEY_CHOOSE_8: 76,
    KEY_LEVEL_UP: 78,
    KEY_TESTBED: 192,
    KEY_TELEPORT: 84,
    KEY_BASIC: 80,
    KEY_SPAWN_BOT: 66,
    KEY_SUICIDE: 79,
    KEY_FOV_INC: 187,
    KEY_FOV_DEC: 189,
    KEY_SIZE_INC: 191,
    KEY_SIZE_DEC: 190,
    KEY_IMMORTAL: 186,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    gameWidth: 0,
    gameHeight: 0,
    xoffset: -0,
    yoffset: -0,
    gameStart: !1,
    disconnected: !1,
    died: !1,
    kicked: !1,
    continuity: !1,
    startPingTime: 0,
    toggleMassState: 0,
    backgroundColor: "#f2fbff",
    lineColor: "#000000",
    chatOpen: !1,
    chatDraft: ""
  };
}, function (e, t, r) {
  "use strict";

  function n(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = function (e, t) {
        if (e) {
          if ("string" == typeof e) return a(e, t);
          var r = {}.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(e, t) : void 0;
        }
      }(e)) || t && e && "number" == typeof e.length) {
        r && (e = r);
        var _n = 0,
          o = function o() {};
        return {
          s: o,
          n: function n() {
            return _n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[_n++]
            };
          },
          e: function e(_e2) {
            throw _e2;
          },
          f: o
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var i,
      s = !0,
      c = !1;
    return {
      s: function s() {
        r = r.call(e);
      },
      n: function n() {
        var e = r.next();
        return s = e.done, e;
      },
      e: function e(_e3) {
        c = !0, i = _e3;
      },
      f: function f() {
        try {
          s || null == r["return"] || r["return"]();
        } finally {
          if (c) throw i;
        }
      }
    };
  }
  function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function o() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      a = r.toStringTag || "@@toStringTag";
    function s(r, n, a, o) {
      var s = n && n.prototype instanceof l ? n : l,
        u = Object.create(s.prototype);
      return _i(u, "_invoke", function (r, n, a) {
        var o,
          i,
          s,
          l = 0,
          u = a || [],
          d = !1,
          h = {
            p: 0,
            n: 0,
            v: e,
            a: g,
            f: g.bind(e, 4),
            d: function d(t, r) {
              return o = t, i = 0, s = e, h.n = r, c;
            }
          };
        function g(r, n) {
          for (i = r, s = n, t = 0; !d && l && !a && t < u.length; t++) {
            var a,
              o = u[t],
              g = h.p,
              f = o[2];
            r > 3 ? (a = f === n) && (s = o[(i = o[4]) ? 5 : (i = 3, 3)], o[4] = o[5] = e) : o[0] <= g && ((a = r < 2 && g < o[1]) ? (i = 0, h.v = n, h.n = o[1]) : g < f && (a = r < 3 || o[0] > n || n > f) && (o[4] = r, o[5] = n, h.n = f, i = 0));
          }
          if (a || r > 1) return c;
          throw d = !0, n;
        }
        return function (a, u, f) {
          if (l > 1) throw TypeError("Generator is already running");
          for (d && 1 === u && g(u, f), i = u, s = f; (t = i < 2 ? e : s) || !d;) {
            o || (i ? i < 3 ? (i > 1 && (h.n = -1), g(i, s)) : h.n = s : h.v = s);
            try {
              if (l = 2, o) {
                if (i || (a = "next"), t = o[a]) {
                  if (!(t = t.call(o, s))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  s = t.value, i < 2 && (i = 0);
                } else 1 === i && (t = o["return"]) && t.call(o), i < 2 && (s = TypeError("The iterator does not provide a '" + a + "' method"), i = 1);
                o = e;
              } else if ((t = (d = h.n < 0) ? s : r.call(n, h)) !== c) break;
            } catch (t) {
              o = e, i = 1, s = t;
            } finally {
              l = 1;
            }
          }
          return {
            value: t,
            done: d
          };
        };
      }(r, a, o), !0), u;
    }
    var c = {};
    function l() {}
    function u() {}
    function d() {}
    t = Object.getPrototypeOf;
    var h = [][n] ? t(t([][n]())) : (_i(t = {}, n, function () {
        return this;
      }), t),
      g = d.prototype = l.prototype = Object.create(h);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, _i(e, a, "GeneratorFunction")), e.prototype = Object.create(g), e;
    }
    return u.prototype = d, _i(g, "constructor", d), _i(d, "constructor", u), u.displayName = "GeneratorFunction", _i(d, a, "GeneratorFunction"), _i(g), _i(g, a, "Generator"), _i(g, n, function () {
      return this;
    }), _i(g, "toString", function () {
      return "[object Generator]";
    }), (o = function o() {
      return {
        w: s,
        m: f
      };
    })();
  }
  function _i(e, t, r, n) {
    var a = Object.defineProperty;
    try {
      a({}, "", {});
    } catch (e) {
      a = 0;
    }
    (_i = function i(e, t, r, n) {
      function o(t, r) {
        _i(e, t, function (e) {
          return this._invoke(t, r, e);
        });
      }
      t ? a ? a(e, t, {
        value: r,
        enumerable: !n,
        configurable: !n,
        writable: !n
      }) : e[t] = r : (o("next", 0), o("throw", 1), o("return", 2));
    })(e, t, r, n);
  }
  function s(e, t, r, n, a, o, i) {
    try {
      var s = e[o](i),
        c = s.value;
    } catch (e) {
      return void r(e);
    }
    s.done ? t(c) : Promise.resolve(c).then(n, a);
  }
  function c(e) {
    return function () {
      var t = this,
        r = arguments;
      return new Promise(function (n, a) {
        var o = e.apply(t, r);
        function i(e) {
          s(o, n, a, i, c, "next", e);
        }
        function c(e) {
          s(o, n, a, i, c, "throw", e);
        }
        i(void 0);
      });
    };
  }
  function l(e) {
    return (l = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }
  var u = r(0),
    d = r(2),
    h = {
      graphical: {
        screenshotMode: !1,
        borderChunk: 6,
        barChunk: 5,
        mininumBorderChunk: 3,
        deathBlurAmount: 3,
        darkBorders: !1,
        fancyAnimations: !0,
        colors: "normal",
        pointy: !0,
        fontSizeBoost: 1,
        neon: !1
      },
      gui: {
        expectedMaxSkillLevel: 9
      },
      lag: {
        unresponsive: !1,
        memory: 60
      }
    },
    g = {};
  d.pullJSON("color").then(function (e) {
    return g = e;
  });
  var f = function () {
    function e(e) {
      return e.toString(16);
    }
    function t(e) {
      return parseInt(e, 16);
    }
    return function (r, n) {
      var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5;
      if (1 === a) return n;
      if (0 === a) return r;
      for (var o = "#", i = 1; i <= 6; i += 2) {
        for (var s = t(n.substr(i, 2)), c = t(r.substr(i, 2)), l = e(Math.floor(c + (s - c) * a)); l.length < 2;) l = "0" + l;
        o += l;
      }
      return o;
    };
  }();
  function p(e) {
    switch (e) {
      case 0:
        return g.teal;
      case 1:
        return g.lgreen;
      case 2:
        return g.orange;
      case 3:
        return g.yellow;
      case 4:
        return g.lavender;
      case 5:
        return g.pink;
      case 6:
        return g.vlgrey;
      case 7:
        return g.lgrey;
      case 8:
        return g.guiwhite;
      case 9:
        return g.black;
      case 10:
        return g.blue;
      case 11:
        return g.green;
      case 12:
        return g.red;
      case 13:
        return g.gold;
      case 14:
        return g.purple;
      case 15:
        return g.magenta;
      case 16:
        return g.grey;
      case 17:
        return g.dgrey;
      case 18:
        return g.white;
      case 19:
        return g.guiblack;
      case 20:
        return "#73f8ff";
      case 21:
        return "#ff0000";
      case 22:
        return "#ff8000";
      case 23:
        return "#ffff00";
      case 24:
        return "#00fa00";
      case 25:
        return "#00ffff";
      case 26:
        return "#4A86E8";
      case 27:
        return "#0000FF";
      case 28:
        return "#9900FF";
      case 29:
        return "#F712F7";
      case 30:
        return "#FF007D";
      case 31:
        return "#EE5A25";
      case 32:
        return "#F9C80F";
      case 33:
        return "#87E70B";
      case 34:
        return "#5EEFCB";
      case 35:
        return "#40BAF4";
      case 36:
        return "#872BF8";
      case 37:
        return "#00FF00";
      case 38:
        return "#8AFF8C";
      case 39:
        return "#FF8D00";
      case 43:
        return "#7900FF";
      case 44:
        return "#B90C35";
      case 45:
        return "#EF1347";
      case 46:
        return "#351C75";
      case 47:
        return "#9900FF";
      case 48:
        return "#0D2700";
      case 49:
        return "#274E13";
      case 50:
        var t = performance.now() / 10 % 360;
        return "hsl(".concat(t, ", 100%, 50%)");
      case 51:
        var r = (Math.sin(performance.now() / 200) + 1) / 2;
        return "hsl(0, 0%, ".concat(100 * r, "%)");
      case 52:
        return "#ffeb69";
      case 53:
        return "#FF8AC0";
      case 100:
        return "#171717";
      case 101:
        return "#FF0000";
      case 102:
        return "#FF2600";
      case 103:
        return "#FF4300";
      case 104:
        return "#FF5700";
      case 105:
        return "#FF6A00";
      case 106:
        return "#FF9900";
      case 107:
        return "#FFA400";
      case 108:
        return "#FFCA00";
      case 109:
        return "#FFDD00";
      case 110:
        return "#FAE514";
      case 111:
        return "#FFFF00";
      case 112:
        return "#FAFF00";
      case 113:
      case 114:
        return "#DDFF00";
      case 115:
        return "#CAFF00";
      case 116:
        return "#00FF00";
      case 117:
        return "#00FF26";
      case 118:
      case 119:
        return "#00FF90";
      case 120:
        return "#00FFC0";
      case 121:
      case 122:
      case 123:
        return "#00FFE7";
      case 124:
      case 125:
      case 126:
        return "#00FFFF";
      case 127:
        return "#00F1FF";
      case 128:
        return "#00DDFF";
      case 129:
        return "#00D4FF";
      case 130:
        return "#00CAFF";
      case 131:
        return "#0097FF";
      case 132:
        return "#007DFF";
      case 133:
        return "#0073FF";
      case 134:
        return "#0060FF";
      case 135:
        return "#0057FF";
      case 136:
      case 137:
        return "#0000FF";
      case 138:
        return "#3A00FF";
      case 139:
        return "#6000FF";
      case 140:
      case 141:
        return "#7300FF";
      case 142:
        return "#8700FF";
      case 143:
        return "#B700FF";
      case 144:
        return "#CA03FF";
      case 145:
        return "#E700FF";
      case 146:
        return "#FF00FF";
      case 147:
        return "#FF00D4";
      case 148:
      case 149:
        return "#FF00AD";
      case 150:
        return "#FF006A";
      case 151:
        return "#FF0030";
      case 152:
        return "#F07A7A";
      case 153:
        return "#F4A779";
      case 154:
        return "#FBC87C";
      case 155:
        return "#F8F878";
      case 156:
        return "#BCF679";
      case 157:
        return "#7BF97B";
      case 158:
        return "#7AEEEE";
      case 159:
        return "#83AFF4";
      case 160:
        return "#7A7AF6";
      case 161:
        return "#C77BFA";
      case 162:
        return "#DB6FDB";
      case 163:
        return "#F378B4";
      default:
        return "#FF0000";
    }
  }
  function m(e) {
    var t = h.graphical.neon ? g.white : g.black;
    if (h.graphical.darkBorders) return t;
    var r = e;
    return "string" == typeof e && 0 === e.indexOf("hsl") && (r = function (e) {
      var t,
        r,
        n,
        a = e.match(/[\d.]+/g),
        o = parseFloat(a[0]) / 360,
        i = parseFloat(a[1]) / 100,
        s = parseFloat(a[2]) / 100;
      if (0 === i) t = r = n = s;else {
        var c = function c(e, t, r) {
            return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
          },
          l = s < .5 ? s * (1 + i) : s + i - s * i,
          u = 2 * s - l;
        t = c(u, l, o + 1 / 3), r = c(u, l, o), n = c(u, l, o - 1 / 3);
      }
      var d = function d(e) {
        var t = Math.round(255 * e).toString(16);
        return 1 === t.length ? "0" + t : t;
      };
      return "#".concat(d(t)).concat(d(r)).concat(d(n));
    }(e)), f(r, t, g.border);
  }
  function v(e, t) {
    switch (e) {
      case "bas1":
        return g.blue;
      case "bas2":
        return g.green;
      case "bas3":
        return g.red;
      case "bas4":
        return g.pink;
      default:
        return t ? g.white : g.lgrey;
    }
  }
  function y(e, t) {
    h.graphical.neon ? (e.fillStyle = m(t), e.strokeStyle = t) : (e.fillStyle = t, e.strokeStyle = m(t));
  }
  var w,
    k = [];
  function b(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k[e].color,
      r = k[e];
    return {
      time: 0,
      index: e,
      x: r.x,
      y: r.y,
      vx: 0,
      vy: 0,
      size: r.size,
      realSize: r.realSize,
      color: t,
      glow: r.glow,
      glowColor: r.glowColor,
      glowSize: r.glowSize,
      render: {
        status: {
          getFade: function getFade() {
            return 1;
          },
          getColor: function getColor() {
            return "#FFFFFF";
          },
          getBlend: function getBlend() {
            return 0;
          },
          health: {
            get: function get() {
              return 1;
            }
          },
          shield: {
            get: function get() {
              return 1;
            }
          }
        }
      },
      facing: r.facing,
      shape: r.shape,
      name: r.name,
      score: 0,
      tiggle: 0,
      layer: r.layer,
      guns: {
        length: r.guns.length,
        getPositions: function getPositions() {
          var e = [];
          return r.guns.forEach(function () {
            return e.push(0);
          }), e;
        },
        update: function update() {}
      },
      turrets: r.turrets.map(function (e) {
        var t = b(e.index);
        return t.realSize = t.realSize / t.size * r.size * e.sizeFactor, t.size = r.size * e.sizeFactor, t.angle = e.angle, t.offset = e.offset, t.direction = e.direction, t.facing = e.direction + e.angle, t;
      })
    };
  }
  d.pullJSON("mockups").then(function (e) {
    return k = e;
  }), u.clickables = {
    stat: (w = function () {
      function e() {
        var e = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
          },
          t = !1;
        return {
          set: function set(r, n, a, o) {
            e.x = r, e.y = n, e.w = a, e.h = o, t = !0;
          },
          check: function check(r) {
            var n = Math.round(r.x - e.x),
              a = Math.round(r.y - e.y);
            return t && n >= 0 && a >= 0 && n <= e.w && a <= e.h;
          },
          hide: function hide() {
            t = !1;
          }
        };
      }
      return function (t) {
        for (var r = [], n = 0; n < t; n++) r.push(e());
        return {
          place: function place(e) {
            var t;
            if (e >= r.length) throw console.log(e), console.log(r), new Error("Trying to reference a clickable outside a region!");
            for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
            (t = r[e]).set.apply(t, a);
          },
          hide: function hide() {
            r.forEach(function (e) {
              return e.hide();
            });
          },
          check: function check(e) {
            return r.findIndex(function (t) {
              return t.check(e);
            });
          }
        };
      };
    }())(10),
    upgrade: w(64),
    hover: w(1),
    skipUpgrades: w(1)
  }, u.statHover = !1, u.upgradeHover = !1;
  var E,
    S,
    x,
    _,
    M = {
      id: -1,
      x: u.screenWidth / 2,
      y: u.screenHeight / 2,
      vx: 0,
      vy: 0,
      renderx: u.screenWidth / 2,
      rendery: u.screenHeight / 2,
      renderv: 1,
      slip: 0,
      view: 1,
      time: 0,
      screenWidth: u.screenWidth,
      screenHeight: u.screenHeight,
      target: {
        x: u.screenWidth / 2,
        y: u.screenHeight / 2
      }
    },
    F = [],
    A = [],
    C = 0,
    K = [],
    O = [],
    P = {
      latency: 0,
      lag: 0,
      rendertime: 0,
      updatetime: 0,
      lastlag: 0,
      lastrender: 0,
      rendergap: 0,
      lastuplink: 0
    },
    I = 0,
    Y = 0,
    U = 0,
    T = {
      x: M.x,
      y: M.y
    },
    D = [["norm"]],
    H = {
      getStatNames: function getStatNames(e) {
        switch (e) {
          case 1:
            return ["Body Damage", "Max Health", "Bullet Speed", "Bullet Health", "Bullet Penetration", "Bullet Damage", "Engine Acceleration", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
          case 2:
            return ["Body Damage", "Max Health", "Drone Speed", "Drone Health", "Drone Penetration", "Drone Damage", "Respawn Rate", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
          case 3:
            return ["Body Damage", "Max Health", "Drone Speed", "Drone Health", "Drone Penetration", "Drone Damage", "Max Drone Count", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
          case 4:
            return ["Body Damage", "Max Health", "Swarm Speed", "Swarm Health", "Swarm Penetration", "Swarm Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
          case 5:
            return ["Body Damage", "Max Health", "Placement Speed", "Trap Health", "Trap Penetration", "Trap Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
          case 6:
            return ["Body Damage", "Max Health", "Weapon Speed", "Weapon Health", "Weapon Penetration", "Weapon Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
          default:
            return ["Body Damage", "Max Health", "Bullet Speed", "Bullet Health", "Bullet Penetration", "Bullet Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
        }
      },
      skills: [{
        amount: 0,
        color: "purple",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "pink",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "blue",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "lgreen",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "red",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "yellow",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "green",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "teal",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "gold",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "orange",
        cap: 1,
        softcap: 1
      }],
      points: 0,
      upgrades: [],
      playerid: -1,
      __s: (E = 0, S = 0, x = 0, _ = q(0, 10), {
        setScore: function setScore(e) {
          e ? (_.set(e), S > _.get() && (x = 0, S = 0)) : (_ = q(0, 10), x = 0);
        },
        update: function update() {
          E = Math.ceil(1.8 * Math.pow(x + 1, 1.8) - 2 * x + 1), _.get() - S >= E && (S += E, x += 1);
        },
        getProgress: function getProgress() {
          return E ? Math.min(1, Math.max(0, (_.get() - S) / E)) : 0;
        },
        getScore: function getScore() {
          return _.get();
        },
        getLevel: function getLevel() {
          return x;
        }
      }),
      type: 0,
      fps: 0,
      color: 0,
      accel: 0,
      topspeed: 1
    };
  u.clearUpgrades = function () {
    H.upgrades = [];
  };
  var R,
    W = (R = {}, {
      get: function get() {
        var e = [],
          t = 1;
        for (var r in R) if (R.hasOwnProperty(r)) {
          var n = R[r].publish();
          e.push(n), n.score > t && (t = n.score);
        }
        return e.sort(function (e, t) {
          return t.score - e.score;
        }), {
          data: e,
          max: t
        };
      },
      remove: function remove(e) {
        if (void 0 === R["_" + e]) return console.log("Warning: Asked to removed an unknown leaderboard entry."), -1;
        delete R["_" + e];
      },
      add: function add(e) {
        var t = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = 0,
            a = q(0, 10);
          return {
            update: function update(e, t) {
              n = e, a.set(t);
            },
            publish: function publish() {
              var o = k[n];
              return {
                image: b(n, r),
                position: o.position,
                barcolor: p(t),
                label: "" === e ? o.name : e + " - " + o.name,
                score: a.get()
              };
            }
          };
        }(e.name, e.barcolor, e.color);
        t.update(e.index, e.score), R["_" + e.id] = t;
      },
      update: function update(e) {
        if (void 0 === R["_" + e.id]) return console.log("Warning: Asked to update an unknown leaderboard entry."), -1;
        R["_" + e.id].update(e.index, e.score);
      },
      purge: function purge() {
        R = {};
      }
    }),
    B = function B() {
      return Math.max(u.screenWidth / M.renderv, u.screenHeight / M.renderv / 9 * 16);
    };
  u.target = T, u.player = M, u.canUpgrade = !1, u.canSkill = !1, u.message = "", u.time = 0, u.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  var L = "Unknown Server";
  window.onload = function () {
    switch (window.location.hostname) {
      case "139.162.69.30":
        L = "🇯🇵 arras-linode-tokyo";
        break;
      case "172.104.9.164":
        L = "🇺🇸 arras-linode-newark";
    }
    document.getElementById("serverName").innerHTML = '<h4 class="nopadding">' + L + "</h4>", d.retrieveFromLocalStorage("playerNameInput"), d.retrieveFromLocalStorage("playerKeyInput"), d.retrieveFromLocalStorage("optScreenshotMode"), d.retrieveFromLocalStorage("optPredictive"), d.retrieveFromLocalStorage("optFancy"), d.retrieveFromLocalStorage("optColors"), d.retrieveFromLocalStorage("optNoPointy"), d.retrieveFromLocalStorage("optBorders"), "" === document.getElementById("optColors").value && (document.getElementById("optColors").value = "normal"), "" === document.getElementById("optBorders").value && (document.getElementById("optBorders").value = "normal"), document.getElementById("startButton").onclick = function () {
      return ie();
    }, document.onkeydown = function (e) {
      (e.which || e.keyCode) !== u.KEY_ENTER || !u.dead && u.gameStart || ie();
    }, window.addEventListener("resize", function () {
      M.screenWidth = j.width = u.screenWidth = window.innerWidth, M.screenHeight = j.height = u.screenHeight = window.innerHeight;
    });
  };
  var N = r(3);
  window.canvas = new N();
  var j = window.canvas.cv,
    G = j.getContext("2d"),
    z = document.createElement("canvas").getContext("2d");
  function q(e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
      n = Date.now(),
      a = e,
      o = e;
    return {
      set: function set(t) {
        e !== t && (o = a, e = t, n = Date.now());
      },
      get: function get() {
        var i = (Date.now() - n) / 1e3;
        return a = i < t ? o + (e - o) * Math.pow(i / t, 1 / r) : e;
      }
    };
  }
  z.imageSmoothingEnabled = !1;
  var Z,
    V,
    J,
    X,
    $,
    Q = [],
    ee = 0,
    te = 0,
    re = (Z = [], {
      get: function get() {
        return Z.length ? Z.reduce(function (e, t) {
          return e + t;
        }) / Z.length : 0;
      },
      add: function add(e) {
        Z.push(e), Z.length > h.lag.memory && Z.splice(0, 1);
      }
    }),
    ne = function ne() {
      return Date.now() - ee - te;
    },
    ae = (M = {
      vx: 0,
      vy: 0,
      lastvx: 0,
      lastvy: 0,
      renderx: M.x,
      rendery: M.y,
      lastx: M.x,
      lasty: M.y,
      target: window.canvas.target,
      name: "",
      lastUpdate: 0,
      time: 0
    }, V = 0, J = 0, X = 0, $ = 0, {
      reset: function reset() {
        V = 0, J = 0;
      },
      get: function get() {
        return h.lag.unresponsive ? {
          x: 0,
          y: 0
        } : {
          x: V,
          y: J
        };
      },
      iterate: function iterate(e) {
        if (u.died || u.gameStart) return 0;
        var t = H.accel / H.topSpeed,
          r = Math.sqrt(e.x * e.x + e.y * e.y);
        X += H.accel * e.x / r, $ += H.accel * e.y / r;
        var n = Math.sqrt(X * X + $ * $);
        if (n > 0 && t) {
          var a = n / (t / 0 + 1);
          X = a * X / n, $ = a * $ / n;
        }
        V += X, J += $;
      }
    }),
    oe = function () {
      window.WebSocket = window.WebSocket || window.MozWebSocket;
      var e,
        t,
        n,
        a,
        o,
        i = r(4),
        s = (e = 0, t = [], o = {
          next: function next() {
            if (e >= t.length) throw console.log(t), new Error("Trying to crawl past the end of the provided data!");
            return t[e++];
          },
          set: function set(r) {
            t = r, e = 0;
          }
        }, {
          begin: function begin(e) {
            return o.set(e);
          },
          data: (a = function () {
            var e = function () {
              function e(e) {
                e.isUpdated = !0, (e.motion || e.position) && (e.motion -= .2 * e.position, e.position += e.motion, e.position < 0 && (e.position = 0, e.motion = -e.motion), e.motion > 0 && (e.motion *= .5));
              }
              return function (t) {
                for (var r = [], n = 0; n < t; n++) r.push({
                  motion: 0,
                  position: 0,
                  isUpdated: !0
                });
                return {
                  getPositions: function getPositions() {
                    return r.map(function (e) {
                      return e.position;
                    });
                  },
                  update: function update() {
                    return r.forEach(e);
                  },
                  fire: function fire(e, t) {
                    r[e].isUpdated && (r[e].motion += Math.sqrt(t) / 20), r[e].isUpdated = !1;
                  },
                  length: r.length
                };
              };
            }();
            function t() {
              var e = "normal",
                t = ne();
              return {
                set: function set(r) {
                  r === e && "injured" !== e || ("dying" !== e && (t = ne()), e = r);
                },
                getFade: function getFade() {
                  return "dying" === e || "killed" === e ? 1 - Math.min(1, (ne() - t) / 300) : 1;
                },
                getColor: function getColor() {
                  return "#FFFFFF";
                },
                getBlend: function getBlend() {
                  var r = "normal" === e || "dying" === e ? 0 : 1 - Math.min(1, (ne() - t) / 80);
                  return ne() - t > 500 && "injured" === e && (e = "normal"), r;
                }
              };
            }
            return function () {
              var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null == r.facing,
                i = o.next();
              if (1 & i) r.facing = o.next(), r.layer = o.next();else {
                r.interval = P.rendergap, r.id = o.next();
                var s = F.findIndex(function (e) {
                  return e.id === r.id;
                });
                if (-1 !== s && (r = F.splice(s, 1)[0]), (n = -1 === s) || (r.render.draws = !0, r.render.lastx = r.x, r.render.lasty = r.y, r.render.lastvx = r.vx, r.render.lastvy = r.vy, r.render.lastf = r.facing, r.render.lastRender = M.time), r.index = o.next(), r.x = o.next(), r.y = o.next(), r.vx = o.next(), r.vy = o.next(), r.size = o.next(), r.facing = o.next(), r.vfacing = o.next(), r.twiggle = o.next(), r.layer = o.next(), r.color = o.next(), n) r.health = o.next() / 255, r.shield = o.next() / 255;else {
                  var c = r.health,
                    l = r.shield;
                  r.health = o.next() / 255, r.shield = o.next() / 255, r.health < c || r.shield < l ? r.render.status.set("injured") : 1 !== r.render.status.getFade() && r.render.status.set("normal");
                }
                r.drawsHealth = !!(2 & i), 4 & i && (r.name = o.next(), r.score = o.next()), r.nameplate = 4 & i, n && (r.render = {
                  draws: !1,
                  expandsWithDeath: r.drawsHealth,
                  lastRender: M.time,
                  x: r.x,
                  y: r.y,
                  lastx: r.x - P.rendergap * h.roomSpeed * (1e3 / 30) * r.vx,
                  lasty: r.y - P.rendergap * h.roomSpeed * (1e3 / 30) * r.vy,
                  lastvx: r.vx,
                  lastvy: r.vy,
                  lastf: r.facing,
                  f: r.facing,
                  h: r.health,
                  s: r.shield,
                  interval: P.rendergap,
                  slip: 0,
                  status: t(),
                  health: q(r.health, .5, 5),
                  shield: q(r.shield, .5, 5)
                }), r.render.health.set(r.health), r.render.shield.set(r.shield), n || r.oldIndex === r.index || (n = !0), r.oldIndex = r.index;
              }
              var u = o.next();
              if (n) r.guns = e(u);else if (u !== r.guns.length) throw new Error("Mismatch between data gun number and remembered gun number!");
              for (var d = 0; d < u; d++) {
                var g = o.next(),
                  f = o.next();
                g > M.lastUpdate - P.rendergap && r.guns.fire(d, f);
              }
              var p = o.next();
              if (n) {
                r.turrets = [];
                for (var m = 0; m < p; m++) r.turrets.push(a());
              } else {
                if (r.turrets.length !== p) throw new Error("Mismatch between data turret number and remembered turret number!");
                r.turrets.forEach(function (e) {
                  e = a(e);
                });
              }
              return r;
            };
          }(), function () {
            for (var e = [], t = 0, r = o.next(); t < r; t++) e.push(a());
            F.forEach(function (t) {
              t.render.status.set(1 === t.health ? "dying" : "killed"), 0 !== t.render.status.getFade() && function (e, t, r) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                  a = B();
                return r += h.graphical.borderChunk, n ? (a *= 2, e > -u.screenWidth / a - r && e < u.screenWidth / a + r && t > -u.screenHeight / a - r && t < u.screenHeight / a + r) : e > -r && e < u.screenWidth / a + r && t > -r && t < u.screenHeight / a + r;
              }(t.render.x - M.renderx, t.render.y - M.rendery, t.size, !0) ? e.push(t) : null != t.render.textobjs && t.render.textobjs.forEach(function (e) {
                return e.remove();
              });
            }), (F = e).sort(function (e, t) {
              var r = e.layer - t.layer;
              if (r || (r = t.id - e.id), !r) throw new Error("tha fuq is up now");
              return r;
            });
          }),
          gui: function gui() {
            var e = o.next(),
              t = 256 & e,
              r = 128 & e,
              n = 64 & e,
              a = 32 & e,
              i = 16 & e,
              s = 8 & e,
              c = 4 & e,
              l = 2 & e;
            if (1 & e && (H.fps = o.next()), l && (H.type = o.next(), H.color = o.next(), H.playerid = o.next()), c && H.__s.setScore(o.next()), s && (H.points = o.next()), i) {
              H.upgrades = [];
              for (var u = 0, d = o.next(); u < d; u++) H.upgrades.push(o.next());
            }
            if (a) for (var h = 9; h >= 0; h--) H.skills[h].name = o.next(), H.skills[h].cap = o.next(), H.skills[h].softcap = o.next();
            if (n) {
              var g = parseInt(o.next(), 36).toString(16);
              g = "0000000000".substr(g.length) + g, H.skills[0].amount = parseInt(g.slice(0, 1), 16), H.skills[1].amount = parseInt(g.slice(1, 2), 16), H.skills[2].amount = parseInt(g.slice(2, 3), 16), H.skills[3].amount = parseInt(g.slice(3, 4), 16), H.skills[4].amount = parseInt(g.slice(4, 5), 16), H.skills[5].amount = parseInt(g.slice(5, 6), 16), H.skills[6].amount = parseInt(g.slice(6, 7), 16), H.skills[7].amount = parseInt(g.slice(7, 8), 16), H.skills[8].amount = parseInt(g.slice(8, 9), 16), H.skills[9].amount = parseInt(g.slice(9, 10), 16);
            }
            r && (H.accel = o.next()), t && (H.topspeed = o.next());
          },
          minimap: (n = function n() {
            var e = o.next(),
              t = o.next() * u.gameWidth / 255,
              r = o.next() * u.gameHeight / 255,
              n = o.next();
            switch (e) {
              case -1:
                var a = A.findIndex(function (e) {
                  return o = [t, r, n], (a = e)[0] === o[0] && a[1] === o[1] && a[2] === o[2];
                  var a, o;
                });
                -1 === a ? console.log("Warning: Remove request for a minimap node we were not aware of.") : A.splice(a, 1);
                break;
              case 1:
                A.push([t, r, n]);
                break;
              default:
                console.log("Unknown minimap update request.");
            }
          }, function () {
            for (var e = 0, t = o.next(); e < t; e++) n();
          }),
          leaderboard: function leaderboard() {
            var e = !1,
              t = o.next();
            if (-1 === t) W.purge();else for (var r = 0, n = t; r < n; r++) W.remove(o.next());
            for (var a = 0, i = o.next(); a < i; a++) {
              var s = o.next();
              if (s < 0) {
                var c = {
                  id: -s,
                  score: o.next(),
                  index: o.next(),
                  name: o.next(),
                  color: o.next(),
                  barcolor: o.next()
                };
                W.add(c);
              } else -1 === W.update({
                id: s,
                score: o.next(),
                index: o.next()
              }) && (e = !0);
            }
            return e;
          }
        });
      return function (e) {
        var t,
          r,
          n = "https:" === window.location.protocol ? "wss://" : "ws://",
          a = new WebSocket(n + window.location.hostname + ":" + e);
        return a.binaryType = "arraybuffer", a.open = !1, a.cmd = (t = !1, r = [!1, !1, !1, !1, !1, !1, !1, !1], {
          set: function set(e, n) {
            r[e] !== n && (r[e] = n, t = !0);
          },
          talk: function talk() {
            t = !1;
            for (var e = 0, n = 0; n < 8; n++) r[n] && (e += Math.pow(2, n));
            var o = B();
            a.talk("C", Math.round(window.canvas.target.x / o), Math.round(window.canvas.target.y / o), e);
          },
          check: function check() {
            return t;
          },
          getMotion: function getMotion() {
            return {
              x: r[3] - r[2],
              y: r[1] - r[0]
            };
          },
          teleport: function teleport(e, t) {
            var r = B();
            a.talk("T", Math.round(e / r), Math.round(t / r));
          }
        }), a.talk = function () {
          if (!a.open) return 1;
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          a.send(i.encode(t));
        }, a.onopen = function () {
          a.open = !0, u.message = "That token is invalid, expired, or already in use on this server. Please try another one!", a.talk("k", u.playerKey), console.log("Token submitted to the server for validation."), a.ping = function (e) {
            a.talk("p", e);
          }, a.commandCycle = setInterval(function () {
            a.cmd.check() && a.cmd.talk();
          });
        }, a.onmessage = function (e) {
          var t = i.decode(e.data);
          if (-1 === t) throw new Error("Malformed packet.");
          switch (t.splice(0, 1)[0]) {
            case "w":
              t[0] && (console.log("The server has welcomed us to the game room. Sending spawn request."), a.talk("s", u.playerName, 1), u.message = "");
              break;
            case "R":
              u.gameWidth = t[0], u.gameHeight = t[1], D = JSON.parse(t[2]), te = JSON.parse(t[3]), h.roomSpeed = t[4], console.log("Room data recieved. Commencing syncing process."), a.talk("S", ne());
              break;
            case "c":
              M.renderx = M.x = t[0], M.rendery = M.y = t[1], M.renderv = M.view = t[2], console.log("Camera moved!");
              break;
            case "S":
              var r = t[0],
                n = t[1],
                o = (ne() - r) / 2,
                c = ne() - o - n;
              if (Q.push({
                delta: c,
                latency: o
              }), Q.length < 10) setTimeout(function () {
                a.talk("S", ne());
              }, 10), u.message = "Syncing clocks, please do not tab away. " + Q.length + "/10...";else {
                Q.sort(function (e, t) {
                  return e.latency - t.latency;
                });
                var l = Q[Math.floor(Q.length / 2)].latency,
                  d = 0,
                  g = 0,
                  f = 0;
                Q.forEach(function (e) {
                  d += Math.pow(e.latency - l, 2);
                }), d = Math.sqrt(d / Q.length), Q.forEach(function (e) {
                  Math.abs(e.latency - l) < d && (g += e.delta, f++);
                }), ee = Math.round(g / f), console.log(Q), console.log("Syncing complete, calculated clock difference " + ee + "ms. Beginning game."), u.gameStart = !0, u.message = "";
              }
              break;
            case "m":
              K.push({
                text: t[0],
                status: 2,
                alpha: 0,
                time: Date.now()
              });
              break;
            case "H":
              var p = t[0] || "",
                m = t[1] || "";
              O.push({
                author: p,
                text: m,
                status: 2,
                alpha: 0,
                time: Date.now(),
                textobj: null,
                nameobj: null,
                len: null
              }), O.length > 8 && O.splice(0, O.length - 8);
              break;
            case "u":
              var v = t[0],
                y = t[1],
                w = t[2],
                k = t[3],
                b = t[4],
                E = t[5],
                S = t.slice(6);
              v > M.lastUpdate ? (re.add(ne() - v), M.time = v + re.get(), P.rendergap = v - M.lastUpdate, P.rendergap <= 0 && console.log("yo some bullshit is up wtf"), M.lastUpdate = v, s.begin(S), s.gui(), s.data(), M.lastx = M.x, M.lasty = M.y, M.lastvx = M.vx, M.lastvy = M.vy, M.x = y, M.y = w, M.vx = u.died ? 0 : b, M.vy = u.died ? 0 : E, isNaN(M.renderx) && (M.renderx = M.x), isNaN(M.rendery) && (M.rendery = M.y), ae.reset(), M.view = k, (isNaN(M.renderv) || 0 === M.renderv) && (M.renderv = 2e3), P.lastlag = P.lag, P.lastuplink = ne()) : console.log("Old data! Last given time: " + M.time + "; offered packet timestamp: " + v + "."), a.talk("d", Math.max(M.lastUpdate, v)), a.cmd.talk(), U++;
              break;
            case "b":
              s.begin(t), s.minimap(), s.leaderboard() && a.talk("z");
              break;
            case "p":
              P.latency = u.time - t[0];
              break;
            case "F":
              u.finalScore = q(0, 4), u.finalScore.set(t[0]), u.finalLifetime = q(0, 5), u.finalLifetime.set(t[1]), u.finalKills = [q(0, 3), q(0, 4.5), q(0, 2.5)], u.finalKills[0].set(t[2]), u.finalKills[1].set(t[3]), u.finalKills[2].set(t[4]), u.finalKillers = [];
              for (var x = 0; x < t[5]; x++) u.finalKillers.push(t[6 + x]);
              u.died = !0, window.onbeforeunload = function () {
                return !1;
              };
              break;
            case "K":
              window.onbeforeunload = function () {
                return !1;
              };
              break;
            default:
              throw new Error("Unknown message index.");
          }
        }, a.onclose = function () {
          a.open = !1, u.disconnected = !0, clearInterval(a.commandCycle), window.onbeforeunload = function () {
            return !1;
          }, console.log("Socket closed.");
        }, a.onerror = function (e) {
          console.log("WebSocket error: " + e), u.message = "Socket error. Maybe another server will work.";
        }, a;
      };
    }();
  function ie() {
    switch (d.submitToLocalStorage("optScreenshotMode"), h.graphical.screenshotMode = document.getElementById("optScreenshotMode").checked, d.submitToLocalStorage("optFancy"), h.graphical.pointy = !document.getElementById("optNoPointy").checked, d.submitToLocalStorage("optNoPointy"), h.graphical.fancyAnimations = !document.getElementById("optFancy").checked, d.submitToLocalStorage("optPredictive"), h.lag.unresponsive = document.getElementById("optPredictive").checked, d.submitToLocalStorage("optBorders"), document.getElementById("optBorders").value) {
      case "normal":
        h.graphical.darkBorders = h.graphical.neon = !1;
        break;
      case "dark":
        h.graphical.darkBorders = !0, h.graphical.neon = !1;
        break;
      case "glass":
        h.graphical.darkBorders = !1, h.graphical.neon = !0;
        break;
      case "neon":
        h.graphical.darkBorders = h.graphical.neon = !0;
    }
    d.submitToLocalStorage("optColors");
    var e = document.getElementById("optColors").value;
    g = g["" === e ? "normal" : e];
    var t = document.getElementById("playerNameInput"),
      r = document.getElementById("playerKeyInput");
    d.submitToLocalStorage("playerNameInput"), d.submitToLocalStorage("playerKeyInput"), u.playerName = M.name = t.value, u.playerKey = r.value.replace(/(<([^>]+)>)/gi, "").substring(0, 64), u.screenWidth = window.innerWidth, u.screenHeight = window.innerHeight, document.getElementById("startMenuWrapper").style.maxHeight = "0px", document.getElementById("gameAreaWrapper").style.opacity = 1, u.socket || (u.socket = oe(window.location.port || ("https:" === window.location.protocol ? 443 : 80))), u.animLoopHandle || Ee(), window.canvas.socket = u.socket, A = [], setInterval(function () {
      return ae.iterate(u.socket.cmd.getMotion());
    }, 1e3 / 30), document.getElementById("gameCanvas").focus(), window.onbeforeunload = function () {
      return !0;
    };
  }
  function se(e, t) {
    G.fillStyle = e, G.globalAlpha = t, G.fillRect(0, 0, u.screenWidth, u.screenHeight), G.globalAlpha = 1;
  }
  var ce,
    le,
    ue,
    de = (ce = document.createElement("div"), document.body.appendChild(ce), function (e, t) {
      var r,
        n,
        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return t += h.graphical.fontSizeBoost, ce.style.font = "bold " + t + "px Ubuntu", ce.style.padding = "0", ce.style.margin = "0", ce.style.position = "absolute", ce.style.visibility = "hidden", ce.innerHTML = e, r = ce.clientWidth, n = ce.clientHeight, a ? {
        width: r,
        height: n
      } : r;
    }),
    he = (le = function le() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = !0;
      return {
        update: function update(r) {
          var n = !1;
          if (null == e) n = !0;else switch (l(r) != l(e) && (n = !0), l(r)) {
            case "number":
            case "string":
              r !== e && (n = !0);
              break;
            case "object":
              if (Array.isArray(r)) {
                if (r.length !== e.length) n = !0;else for (var a = 0, o = r.length; a < o; a++) r[a] !== e[a] && (n = !0);
                break;
              }
            default:
              throw console.log(r), new Error("Unsupported type for a floppyvar!");
          }
          n && (t = !0, e = r);
        },
        publish: function publish() {
          return e;
        },
        check: function check() {
          return !!t && (t = !1, !0);
        }
      };
    }, ue = 0, function () {
      var e = document.createElement("canvas"),
        t = "textCanvasNo" + ue++;
      e.setAttribute("id", t);
      var r = e.getContext("2d");
      r.imageSmoothingEnabled = !1;
      var n = [le(""), le(0), le(0), le(1), le("#FF0000"), le("left")],
        a = (n.map(function (e) {
          return e.publish();
        }), 0),
        o = 0;
      return {
        draw: function draw(e, t, i, s, c) {
          var l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "left",
            u = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          if (s += h.graphical.fontSizeBoost, n[0].update(e), n[1].update(t), n[2].update(i), n[3].update(s), n[4].update(c), n[5].update(l), n.some(function (e) {
            return e.check();
          })) {
            var d = Math.max(3, s / 5),
              f = de(e, s - h.graphical.fontSizeBoost, !0);
            switch (r.canvas.height = f.height + 2 * d, r.canvas.width = f.width + 2 * d, l) {
              case "left":
              case "start":
                a = d;
                break;
              case "center":
                a = r.canvas.width / 2;
                break;
              case "right":
              case "end":
                a = r.canvas.width - d;
            }
            o = r.canvas.height / 2, r.lineWidth = d, r.font = "bold " + s + "px Ubuntu", r.textAlign = l, r.textBaseline = "middle", r.strokeStyle = g.black, r.fillStyle = c, r.lineCap = "round", r.lineJoin = "round", r.strokeText(e, a, o), r.fillText(e, a, o);
          }
          G.save(), G.imageSmoothingEnabled = !1, G.drawImage(r.canvas, t - a, i - o * (1.05 + .45 * !u)), G.restore();
        },
        remove: function remove() {
          var e = document.getElementById(t);
          null != e && e.parentNode.removeChild(e);
        }
      };
    });
  function ge(e, t, r, n) {
    var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    switch (a) {
      case !0:
        G.strokeRect(e, t, r, n);
        break;
      case !1:
        G.fillRect(e, t, r, n);
    }
  }
  function fe(e, t, r, n) {
    G.beginPath(), G.lineTo(Math.round(e) + .5, Math.round(t) + .5), G.lineTo(Math.round(r) + .5, Math.round(n) + .5), G.closePath(), G.stroke();
  }
  function pe(e, t, r, n, a) {
    G.beginPath(), G.lineTo(e, r), G.lineTo(t, r), G.lineWidth = n, G.strokeStyle = a, G.closePath(), G.stroke();
  }
  var me = function () {
    function e(e, t, r, n, a) {
      var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
        i = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (e.beginPath(), "string" == typeof a) {
        var s = new Path2D(a);
        return e.save(), e.translate(t, r), e.rotate(o), e.scale(n, n), e.lineWidth /= n, e.stroke(s), i && e.fill(s), void e.restore();
      }
      if (o += a % 2 ? 0 : Math.PI / a, a) {
        if (a < 0) {
          h.graphical.pointy && (e.lineJoin = "miter");
          var c = 1 - 6 / a / a;
          a = -a, e.moveTo(t + n * Math.cos(o), r + n * Math.sin(o));
          for (var l = 0; l < a; l++) {
            var u = (l + 1) / a * 2 * Math.PI,
              d = (l + .5) / a * 2 * Math.PI,
              g = {
                x: t + n * c * Math.cos(d + o),
                y: r + n * c * Math.sin(d + o)
              },
              f = {
                x: t + n * Math.cos(u + o),
                y: r + n * Math.sin(u + o)
              };
            e.quadraticCurveTo(g.x, g.y, f.x, f.y);
          }
        } else if (a > 0) for (var p = 0; p < a; p++) {
          var m = p / a * 2 * Math.PI,
            v = t + n * Math.cos(m + o),
            y = r + n * Math.sin(m + o);
          e.lineTo(v, y);
        }
      } else e.arc(t, r, n, 0, 2 * Math.PI);
      e.closePath(), e.stroke(), i && e.fill(), e.lineJoin = "round";
    }
    function t(e, t, r, n, a, o, i) {
      var s;
      s = o > 0 ? [a * o, a] : [a, -a * o];
      var c = [Math.atan2(s[0], n), Math.atan2(s[1], n)],
        l = [Math.sqrt(n * n + s[0] * s[0]), Math.sqrt(n * n + s[1] * s[1])];
      e.beginPath(), e.lineTo(t + l[0] * Math.cos(i + c[0]), r + l[0] * Math.sin(i + c[0])), e.lineTo(t + l[1] * Math.cos(i + Math.PI - c[1]), r + l[1] * Math.sin(i + Math.PI - c[1])), e.lineTo(t + l[1] * Math.cos(i + Math.PI + c[1]), r + l[1] * Math.sin(i + Math.PI + c[1])), e.lineTo(t + l[0] * Math.cos(i - c[0]), r + l[0] * Math.sin(i - c[0])), e.closePath(), e.stroke(), e.fill();
    }
    function r(e, t, r, n, a, o, i) {
      var s = e.lineWidth;
      if (e.save(), e.translate(t, r), e.rotate(i), e.scale(n, a), e.lineWidth = s / Math.sqrt(n * a), "string" == typeof o) {
        var c = new Path2D(o),
          l = new Path2D();
        l.addPath(c, new DOMMatrix([n, 0, 0, a, 0, 0])), e.scale(1 / n, 1 / a), e.lineWidth = s, e.stroke(l), e.fill(l);
      } else {
        var u = o % 2 ? 0 : Math.PI / o;
        if (e.beginPath(), o) {
          if (o < 0) {
            h.graphical.pointy && (e.lineJoin = "miter");
            var d = 1 - 6 / o / o;
            o = -o, e.moveTo(Math.cos(u), Math.sin(u));
            for (var g = 0; g < o; g++) {
              var f = (g + 1) / o * 2 * Math.PI,
                p = (g + .5) / o * 2 * Math.PI;
              e.quadraticCurveTo(d * Math.cos(p + u), d * Math.sin(p + u), Math.cos(f + u), Math.sin(f + u));
            }
          } else for (var m = 0; m < o; m++) {
            var v = m / o * 2 * Math.PI;
            e.lineTo(Math.cos(v + u), Math.sin(v + u));
          }
        } else e.arc(0, 0, 1, 0, 2 * Math.PI);
        e.closePath(), e.stroke(), e.fill();
      }
      e.restore();
    }
    return function (a, i, s, l) {
      var u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        d = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
        v = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        w = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        b = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        E = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : s.render,
        S = w || G,
        x = b ? 1 : E.status.getFade(),
        _ = u * l * s.size,
        M = k[s.index],
        F = a,
        A = i,
        C = !1 === b ? s : b;
      if (E.expandsWithDeath && (_ *= 1 + .5 * (1 - x)), h.graphical.fancyAnimations && w != z && 1 !== x && ((S = z).canvas.width = S.canvas.height = _ * M.position.axis + 20 * l, F = S.canvas.width / 2 - _ * M.position.axis * M.position.middle.x * Math.cos(d) / 4, A = S.canvas.height / 2 - _ * M.position.axis * M.position.middle.x * Math.sin(d) / 4), S.lineCap = "round", S.lineJoin = "round", M.glow) {
        S.save();
        var K = null != M.glowSize ? M.glowSize : 1,
          O = null != M.glowBrightness ? M.glowBrightness : 1,
          P = _ * (1 + .5 * K),
          I = null != M.glowColor ? p(M.glowColor) : g.white,
          Y = 255,
          U = 255,
          T = 255;
        if ("string" == typeof I) if ("#" === I[0]) 7 === I.length ? (Y = parseInt(I.slice(1, 3), 16), U = parseInt(I.slice(3, 5), 16), T = parseInt(I.slice(5, 7), 16)) : 4 === I.length && (Y = parseInt(I[1] + I[1], 16), U = parseInt(I[2] + I[2], 16), T = parseInt(I[3] + I[3], 16));else if (0 === I.indexOf("hsl")) {
          var D,
            H,
            R,
            W = I.match(/[\d.]+/g),
            B = parseFloat(W[0]) % 360 / 360,
            L = parseFloat(W[1]) / 100,
            N = parseFloat(W[2]) / 100,
            j = (1 - Math.abs(2 * N - 1)) * L,
            q = j * (1 - Math.abs(6 * B % 2 - 1)),
            Z = N - j / 2;
          B < 1 / 6 ? (D = j, H = q, R = 0) : B < 2 / 6 ? (D = q, H = j, R = 0) : B < .5 ? (D = 0, H = j, R = q) : B < 4 / 6 ? (D = 0, H = q, R = j) : B < 5 / 6 ? (D = q, H = 0, R = j) : (D = j, H = 0, R = q), Y = 255 * (D + Z) | 0, U = 255 * (H + Z) | 0, T = 255 * (R + Z) | 0;
        } else if (0 === I.indexOf("rgb")) {
          var V = I.match(/[\d.]+/g);
          Y = parseInt(V[0]), U = parseInt(V[1]), T = parseInt(V[2]);
        }
        isFinite(Y) || (Y = 255), isFinite(U) || (U = 255), isFinite(T) || (T = 255);
        var J = Math.max(0, Math.min(1, .7 * O)),
          X = Math.max(0, Math.min(1, .25 * O));
        S.globalCompositeOperation = "screen";
        var $ = S.createRadialGradient(F, A, 0, F, A, P);
        $.addColorStop(0, "rgba(".concat(Y, ",").concat(U, ",").concat(T, ",").concat(J, ")")), $.addColorStop(.4, "rgba(".concat(Y, ",").concat(U, ",").concat(T, ",").concat(X, ")")), $.addColorStop(1, "rgba(".concat(Y, ",").concat(U, ",").concat(T, ",0)")), S.fillStyle = $, S.beginPath(), S.arc(F, A, P, 0, 2 * Math.PI), S.fill(), S.restore();
      }
      if (C.turrets.length !== M.turrets.length) throw new Error("Mismatch turret number with mockup.");
      for (var Q = 0; Q < M.turrets.length; Q++) {
        var ee = M.turrets[Q];
        if (0 === ee.layer) {
          var te = ee.direction + ee.angle + d,
            re = ee.offset * _;
          me(F + re * Math.cos(te), A + re * Math.sin(te), ee, l, _ / l / ee.size * ee.sizeFactor, C.turrets[Q].facing + v * d, v, S, C.turrets[Q], E);
        }
      }
      if (C.guns.update(), S.lineWidth = Math.max(h.graphical.mininumBorderChunk, l * h.graphical.borderChunk), C.guns.length !== M.guns.length) throw new Error("Mismatch gun number with mockup.");
      for (var ne = C.guns.getPositions(), ae = 0; ae < M.guns.length; ae++) {
        var oe = M.guns[ae],
          ie = ne[ae] / (1 === oe.aspect ? 2 : 1),
          se = oe.offset * Math.cos(oe.direction + oe.angle + d) + (oe.length / 2 - ie) * Math.cos(oe.angle + d),
          ce = oe.offset * Math.sin(oe.direction + oe.angle + d) + (oe.length / 2 - ie) * Math.sin(oe.angle + d),
          le = F + _ * se,
          ue = A + _ * ce,
          de = _ * (oe.length / 2 - (1 === oe.aspect ? 2 * ie : 0)),
          he = oe.angle + d;
        if (oe.gradient && oe.gradient.length >= 2) {
          for (var ge = le - de * Math.cos(he), fe = ue - de * Math.sin(he), pe = le + de * Math.cos(he), ve = ue + de * Math.sin(he), ye = oe.gradient.map(function (e) {
              return f(p(e), E.status.getColor(), E.status.getBlend());
            }), we = S.createLinearGradient(ge, fe, pe, ve), ke = S.createLinearGradient(ge, fe, pe, ve), be = ye.length, Ee = 0; Ee < be; Ee++) {
            var Se = 1 === be ? 0 : Ee / (be - 1);
            h.graphical.neon ? (we.addColorStop(Se, m(ye[Ee])), ke.addColorStop(Se, ye[Ee])) : (we.addColorStop(Se, ye[Ee]), ke.addColorStop(Se, m(ye[Ee])));
          }
          S.fillStyle = we, S.strokeStyle = ke;
        } else {
          var xe = null != oe.color ? p(oe.color) : g.grey;
          y(S, f(xe, E.status.getColor(), E.status.getBlend()));
        }
        null != oe.shape ? r(S, le, ue, de, _ * oe.width / 2, oe.shape, he) : t(S, le, ue, de, _ * oe.width / 2, oe.aspect, he);
      }
      S.globalAlpha = 1;
      var _e = _ / M.size * M.realSize;
      if (M.image) {
        window._tankImageCache || (window._tankImageCache = {});
        var Me = window._tankImageCache[M.image];
        if (!Me) {
          Me = {
            ready: !1,
            frames: null,
            image: null,
            startTime: performance.now()
          }, window._tankImageCache[M.image] = Me;
          var Fe = /\.gif(\?|$)/i.test(M.image);
          if (Fe && "undefined" != typeof ImageDecoder) c(o().m(function e() {
            var t, r, n, a, i, s, c, l, u, d, h, g;
            return o().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  return e.p = 0, e.n = 1, fetch(M.image);
                case 1:
                  return t = e.v, e.n = 2, t.blob();
                case 2:
                  return r = e.v, n = new ImageDecoder({
                    data: r.stream(),
                    type: "image/gif"
                  }), e.n = 3, n.tracks.ready;
                case 3:
                  a = n.tracks.selectedTrack, i = a.frameCount, s = [], c = 0, l = 0;
                case 4:
                  if (!(l < i)) {
                    e.n = 8;
                    break;
                  }
                  return e.n = 5, n.decode({
                    frameIndex: l
                  });
                case 5:
                  return u = e.v, e.n = 6, createImageBitmap(u.image);
                case 6:
                  d = e.v, h = (u.image.duration || 1e5) / 1e3, (!isFinite(h) || h <= 0) && (h = 100), u.image.close(), s.push({
                    bitmap: d,
                    duration: h
                  }), c += h;
                case 7:
                  l++, e.n = 4;
                  break;
                case 8:
                  Me.frames = s, Me.totalDuration = c || 100, Me.ready = !0, e.n = 10;
                  break;
                case 9:
                  e.p = 9, e.v, (g = new Image()).onload = function () {
                    Me.image = g, Me.ready = !0;
                  }, g.src = M.image;
                case 10:
                  return e.a(2);
              }
            }, e, null, [[0, 9]]);
          }))();else {
            var Ae = new Image();
            Ae.onload = function () {
              Me.image = Ae, Me.ready = !0;
            }, Ae.src = M.image;
          }
        }
        var Ce = null;
        if (Me.ready) if (Me.frames && Me.frames.length > 0) {
          var Ke = (performance.now() - Me.startTime) % Me.totalDuration,
            Oe = 0;
          Ce = Me.frames[Me.frames.length - 1].bitmap;
          var Pe,
            Ie = n(Me.frames);
          try {
            for (Ie.s(); !(Pe = Ie.n()).done;) {
              var Ye = Pe.value;
              if (Ke < (Oe += Ye.duration)) {
                Ce = Ye.bitmap;
                break;
              }
            }
          } catch (e) {
            Ie.e(e);
          } finally {
            Ie.f();
          }
        } else Me.image && (Ce = Me.image);
        if (Ce) {
          var Ue = 2 * _e;
          S.save(), S.translate(F, A), S.rotate(d), S.drawImage(Ce, -_e, -_e, Ue, Ue), S.restore();
        } else y(S, f(p(s.color), E.status.getColor(), E.status.getBlend())), e(S, F, A, _e, M.shape, d);
      } else y(S, f(p(s.color), E.status.getColor(), E.status.getBlend())), e(S, F, A, _e, M.shape, d);
      if (C.turrets.length !== M.turrets.length) throw new Error("Mismatch turret number with mockup.");
      for (var Te = 0; Te < M.turrets.length; Te++) {
        var De = M.turrets[Te];
        if (1 === De.layer) {
          var He = De.direction + De.angle + d,
            Re = De.offset * _;
          me(F + Re * Math.cos(He), A + Re * Math.sin(He), De, l, _ / l / De.size * De.sizeFactor, C.turrets[Te].facing + v * d, v, S, C.turrets[Te], E);
        }
      }
      0 == w && S != G && (G.save(), G.globalAlpha = x, G.imageSmoothingEnabled = !1, G.filter = "blur(" + Math.round(h.graphical.deathBlurAmount - h.graphical.deathBlurAmount * x) + "px)", G.drawImage(S.canvas, a - F, i - A), G.restore());
    };
  }();
  window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {}, window.cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
  var ve,
    ye = function () {
      var e = q(0, .7, 1.5),
        t = q(0, 2, 3);
      function r() {
        var e = [];
        return function (t, r, n, a, o, i) {
          for (e.push(t); e.length > a;) e.splice(0, 1);
          var s = Math.min.apply(Math, e),
            c = Math.max.apply(Math, e),
            l = c - s;
          c > 0 && s < 0 && pe(r, r + a, n + o * c / l, 2, g.guiwhite), G.beginPath();
          var u = -1;
          e.forEach(function (e) {
            ++u ? G.lineTo(r + u, n + o * (c - e) / l) : G.moveTo(r, n + o * (c - e) / l);
          }), G.lineWidth = 1, G.strokeStyle = i, G.stroke();
        };
      }
      var n = function n() {
          var e = 0,
            t = 0;
          return {
            set: function set() {
              var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M.time,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P.rendergap;
              (e = Math.max(ne() - r - 80, -n)) > 150 && e < 1e3 && (e = 150), e > 1e3 && (e = 1e6 * Math.sin(e / 1e3 - 1) / e + 1e3), t = e / n, h.roomSpeed;
            },
            predict: function predict(r, n, a, o) {
              return e >= 0 ? function (e, t, r, n, a, o) {
                return t + (t - e) * o;
              }(r, n, 0, 0, 0, t) : function (e, t, r, n, a, o) {
                var i = Math.cos((1 + o) * Math.PI);
                return .5 * (((1 + o) * r + e) * (i + 1) + (-o * n + t) * (1 - i));
              }(r, n, a, o, 0, t);
            },
            predictFacing: function predictFacing(e, r) {
              return e + (1 + t) * (n = r - e + Math.PI, a = 2 * Math.PI, (n % a + a) % a - Math.PI);
              var n, a;
            },
            getPrediction: function getPrediction() {
              return e;
            }
          };
        },
        a = r(),
        o = r(),
        i = r(),
        s = function () {
          for (var e, t = [], r = 0; r < 2 * h.gui.expectedMaxSkillLevel; r++) t.push((e = r / h.gui.expectedMaxSkillLevel, Math.log(4 * e + 1) / Math.log(5)));
          return function (e) {
            return t[e];
          };
        }(),
        c = {
          skillNames: [he(), he(), he(), he(), he(), he(), he(), he(), he(), he()],
          skillKeys: [he(), he(), he(), he(), he(), he(), he(), he(), he(), he()],
          skillValues: [he(), he(), he(), he(), he(), he(), he(), he(), he(), he()],
          skillPoints: he(),
          score: he(),
          name: he(),
          "class": he(),
          debug: [he(), he(), he(), he(), he(), he(), he()],
          lbtitle: he(),
          leaderboard: [he(), he(), he(), he(), he(), he(), he(), he(), he(), he()],
          upgradeNames: Array(28).fill(0).map(function () {
            return he();
          }),
          upgradeKeys: Array(28).fill(0).map(function () {
            return he();
          }),
          skipUpgrades: he()
        };
      return function (r) {
        var l, m, y;
        Y++;
        var w = n();
        w.set();
        var E = {
          x: 0,
          y: 0
        };
        l = w.getPrediction(), M.renderx = w.predict(M.lastx, M.x, M.lastvx, M.vx) + E.x, M.rendery = w.predict(M.lasty, M.y, M.lastvy, M.vy) + E.y, m = r * M.renderx, y = r * M.rendery, se(g.white, 1), se(g.guiblack, .1);
        var S = D[0].length,
          x = D.length,
          _ = 0;
        D.forEach(function (e) {
          var t = 0;
          e.forEach(function (e) {
            var n = Math.max(0, r * t * u.gameWidth / S - m + u.screenWidth / 2),
              a = Math.max(0, r * _ * u.gameHeight / x - y + u.screenHeight / 2),
              o = Math.min(u.screenWidth, r * (t + 1) * u.gameWidth / S - m + u.screenWidth / 2),
              i = Math.min(u.screenHeight, r * (_ + 1) * u.gameHeight / x - y + u.screenHeight / 2);
            G.globalAlpha = 1, G.fillStyle = h.graphical.screenshotMode ? g.guiwhite : g.white, G.fillRect(n, a, o - n, i - a), G.globalAlpha = .3, G.fillStyle = h.graphical.screenshotMode ? g.guiwhite : v(e, !0), G.fillRect(n, a, o - n, i - a), t++;
          }), _++;
        }), G.lineWidth = 1, G.strokeStyle = h.graphical.screenshotMode ? g.guiwhite : g.guiblack, G.globalAlpha = .04, G.beginPath();
        for (var I = 30 * r, U = (u.screenWidth / 2 - m) % I; U < u.screenWidth; U += I) G.moveTo(U, 0), G.lineTo(U, u.screenHeight);
        for (var R = (u.screenHeight / 2 - y) % I; R < u.screenHeight; R += I) G.moveTo(0, R), G.lineTo(u.screenWidth, R);
        G.stroke(), G.globalAlpha = 1, F.forEach(function (e) {
          if (!e.render.draws) return 1;
          var t = n();
          1 === e.render.status.getFade() ? t.set() : t.set(e.render.lastRender, e.render.interval), e.render.x = t.predict(e.render.lastx, e.x, e.render.lastvx, e.vx), e.render.y = t.predict(e.render.lasty, e.y, e.render.lastvy, e.vy), e.render.f = e.id !== H.playerid || e.twiggle ? t.predictFacing(e.render.lastf, e.facing) : Math.atan2(T.y, T.x);
          var a = e.id === H.playerid ? 0 : r * e.render.x - m,
            o = e.id === H.playerid ? 0 : r * e.render.y - y;
          a += u.screenWidth / 2, o += u.screenHeight / 2, me(a, o, e, r, 1.1, e.render.f);
        }), h.graphical.screenshotMode || F.forEach(function (e) {
          var t = e.id === H.playerid ? 0 : r * e.render.x - m,
            n = e.id === H.playerid ? 0 : r * e.render.y - y;
          !function (e, t, r, n) {
            G.globalAlpha = Math.pow(r.render.status.getFade(), 2);
            var a = r.size * n,
              o = k[r.index],
              i = a / o.size * o.realSize;
            if (r.drawsHealth) {
              var s = r.render.health.get(),
                c = r.render.shield.get();
              if (s < 1 || c < 1) {
                var l = t + 1.1 * i + 15;
                pe(e - a, e + a, l, 3 + h.graphical.barChunk, g.black), pe(e - a, e - a + 2 * a * s, l, 3, g.lgreen), c && (G.globalAlpha = .3 + .3 * c, pe(e - a, e - a + 2 * a * c, l, 3, g.teal), G.globalAlpha = 1);
              }
            }
            if (r.nameplate && r.id !== H.playerid) if (null == r.render.textobjs && (r.render.textobjs = [he(), he()]), "\0" !== r.name) {
              var u = r.name,
                f = g.guiwhite;
              u && 8203 === u.charCodeAt(0) && (u = u.slice(1), f = g.black), r.render.textobjs[0].draw(u, e, t - i - 30, 16, f, "center"), r.render.textobjs[1].draw(d.handleLargeNumber(r.score, !0), e, t - i - 16, 8, g.guiwhite, "center");
            } else r.render.textobjs[0].draw("a spoopy 👻", e, t - i - 30, 16, g.lavender, "center"), r.render.textobjs[1].draw(d.handleLargeNumber(r.score, !0), e, t - i - 16, 8, g.lavender, "center");
          }(t += u.screenWidth / 2, n += u.screenHeight / 2, e, r);
        });
        var B = 200 / Math.max(u.screenWidth, 16 * u.screenHeight / 9);
        H.__s.update();
        for (var N = W.get(), j = N.max, z = u.screenWidth / 2, q = 20, Z = K.length - 1; Z >= 0; Z--) {
          var V = K[Z],
            J = V.text;
          null == V.textobj && (V.textobj = he()), null == V.len && (V.len = de(J, 14)), G.globalAlpha = .5 * V.alpha, pe(z - V.len / 2, z + V.len / 2, q + 9, 18, g.black), G.globalAlpha = Math.min(1, V.alpha), V.textobj.draw(J, z, q + 9, 14, g.guiwhite, "center", !0), q += 22, V.status > 1 && (q -= 22 * (1 - Math.sqrt(V.alpha))), V.status > 1 ? (V.status -= .05, V.alpha += .05) : 0 === Z && (K.length > 5 || Date.now() - V.time > 1e4) && (V.status -= .05, V.alpha -= .05, V.alpha <= 0 && (K[0].textobj.remove(), K.splice(0, 1)));
        }
        G.globalAlpha = 1;
        for (var X = u.screenHeight / 2, $ = O.length - 1; $ >= 0; $--) {
          var Q = O[$],
            ee = Q.author && 8203 === Q.author.charCodeAt(0) ? Q.author.slice(1) : Q.author,
            te = ee + ": ",
            ae = Q.text;
          null == Q.textobj && (Q.textobj = he()), null == Q.nameobj && (Q.nameobj = he()), null == Q.len && (Q.len = de(te, 19) + de(ae, 19));
          var oe = Math.max(0, Q.len + 24 - 40),
            ie = X + 20;
          G.globalAlpha = .5 * Q.alpha, G.fillStyle = g.black, oe <= 0 ? (G.beginPath(), G.arc(40, ie, 20, 0, 2 * Math.PI), G.closePath(), G.fill()) : (G.beginPath(), G.arc(40, ie, 20, Math.PI / 2, 3 * Math.PI / 2, !1), G.arc(40 + oe, ie, 20, -Math.PI / 2, Math.PI / 2, !1), G.closePath(), G.fill()), G.globalAlpha = Math.min(1, Q.alpha);
          var ce = 40 + oe / 2,
            le = Q.len,
            ue = ce - le / 2,
            ve = de(te, 19),
            ye = "Server" === ee ? g.blue : g.guiwhite;
          Q.nameobj.draw(te, ue + ve / 2, ie, 19, ye, "center", !0), Q.textobj.draw(ae, ue + ve + (le - ve) / 2, ie, 19, g.guiwhite, "center", !0), X += 48, Q.status > 1 ? (Q.status -= .05, Q.alpha += .05) : Date.now() - Q.time > 5e3 && (Q.status -= .05, Q.alpha -= .05, Q.alpha <= 0 && (O[$].textobj.remove(), O[$].nameobj && O[$].nameobj.remove(), O.splice($, 1)));
        }
        if (G.globalAlpha = 1, u.chatOpen) {
          var we = Math.min(500, 40 + de(">" + u.chatDraft, 22)),
            ke = u.screenHeight - 20 - 34 - 10;
          G.globalAlpha = .5, G.fillStyle = g.black, G.fillRect(20, ke, we + 20, 44), G.globalAlpha = 1, he().draw(">" + u.chatDraft, 30, ke + 22, 22, g.guiwhite, "left", !0);
        }
        u.canSkill = !!H.points, e.set(0 + (u.canSkill || u.died || u.statHover)), u.clickables.stat.hide();
        var be = B * u.screenWidth,
          Ee = be,
          Se = -20 - 2 * be + e.get() * (40 + 2 * be),
          xe = u.screenHeight - 20 - 15,
          _e = 11,
          Me = H.getStatNames(k[H.type].statnames || -1);
        H.skills.forEach(function (e) {
          _e--;
          var t = Me[_e - 1],
            r = e.amount,
            n = g[e.color],
            a = e.softcap,
            o = e.cap;
          if (a) {
            be = Ee;
            var i = h.gui.expectedMaxSkillLevel,
              l = a < o;
            if (a > i && (i = a), pe(Se + 7.5, Se - 7.5 + be * s(a), xe + 7.5, 12 + h.graphical.barChunk, g.black), pe(Se + 7.5, Se + 7.5 + (be - 35) * s(a), xe + 7.5, 12, g.grey), pe(Se + 7.5, Se + 7.5 + (be - 35) * s(r), xe + 7.5, 11.5, n), l) {
              G.lineWidth = 1, G.strokeStyle = g.grey;
              for (var d = a + 1; d < i; d++) fe(Se + (be - 35) * s(d), xe + 1.5, Se + (be - 35) * s(d), xe - 3 + 15);
            }
            G.strokeStyle = g.black, G.lineWidth = 1;
            for (var f = 1; f < r + 1; f++) fe(Se + (be - 35) * s(f), xe + 1.5, Se + (be - 35) * s(f), xe - 3 + 15);
            be = Ee * s(i);
            var p = r == o ? n : !H.points || a !== o && r == a ? g.grey : g.guiwhite;
            c.skillNames[_e - 1].draw(t, Math.round(Se + be / 2) + .5, xe + 7.5, 10, p, "center", !0), c.skillKeys[_e - 1].draw("[" + _e % 10 + "]", Math.round(Se + be - 3.75) - 1.5, xe + 7.5, 10, p, "right", !0), p === g.guiwhite && u.clickables.stat.place(_e - 1, Se, xe, be, 15), r && c.skillValues[_e - 1].draw(p === n ? "MAX" : "+" + r, Math.round(Se + be + 4) + .5, xe + 7.5, 10, n, "left", !0), xe -= 19;
          }
        }), u.clickables.hover.place(0, 0, xe, .8 * be, .8 * (u.screenHeight - xe)), 0 !== H.points && c.skillPoints.draw("x" + H.points, Math.round(Se + be - 2) + .5, Math.round(xe + 15 - 4) + .5, 20, g.guiwhite, "right");
        var Fe = 1.65 * B * u.screenWidth,
          Ae = 25,
          Ce = (u.screenWidth - Fe) / 2,
          Ke = u.screenHeight - 20 - Ae;
        G.lineWidth = 1, pe(Ce, Ce + Fe, Ke + Ae / 2, Ae - 3 + h.graphical.barChunk, g.black), pe(Ce, Ce + Fe, Ke + Ae / 2, Ae - 3, g.grey), pe(Ce, Ce + Fe * H.__s.getProgress(), Ke + Ae / 2, Ae - 3.5, g.gold), c["class"].draw("Level " + H.__s.getLevel() + " " + k[H.type].name, Ce + Fe / 2, Ke + Ae / 2, Ae - 4, g.guiwhite, "center", !0), pe(Ce + .1 * Fe, Ce + .9 * Fe, (Ke -= (Ae = 14) + 4) + Ae / 2, Ae - 3 + h.graphical.barChunk, g.black), pe(Ce + .1 * Fe, Ce + .9 * Fe, Ke + Ae / 2, Ae - 3, g.grey), pe(Ce + .1 * Fe, Ce + Fe * (.1 + .8 * (j ? Math.min(1, H.__s.getScore() / j) : 1)), Ke + Ae / 2, Ae - 3.5, g.green), c.score.draw("Score: " + d.handleLargeNumber(H.__s.getScore()), Ce + Fe / 2, Ke + Ae / 2, Ae - 2, g.guiwhite, "center", !0), G.lineWidth = 4;
        var Oe = "TOKEN_KYaPZYAL2vh1yvSYYeZyH6US5bTbOGl_TOKEN" === u.playerKey ? g.black : g.guiwhite;
        c.name.draw(M.name, Math.round(Ce + Fe / 2) + .5, Math.round(Ke - 10 - 4) + .5, 32, Oe, "center");
        var Pe = B * u.screenWidth,
          Ie = Pe,
          Ye = u.screenWidth - Pe - 20,
          Ue = u.screenHeight - Ie - 20;
        G.globalAlpha = .5;
        var Te = D[0].length,
          De = D.length,
          He = 0;
        D.forEach(function (e) {
          var t = 0;
          e.forEach(function (e) {
            G.fillStyle = v(e, !1), ge(Ye + t++ * Pe / Te, Ue + He * Ie / De, Pe / Te, Ie / De);
          }), He++;
        }), G.fillStyle = g.grey, ge(Ye, Ue, Pe, Ie), A.forEach(function (e) {
          17 === e[2] ? (G.fillStyle = f(p(e[2]), g.black, .5), G.globalAlpha = .8, ge(Ye + e[0] / u.gameWidth * Pe, Ue + e[1] / u.gameHeight * Ie, 1, 1)) : (G.strokeStyle = f(p(e[2]), g.black, .5), G.lineWidth = 1, G.globalAlpha = 1, ge(Ye + e[0] / u.gameWidth * Pe - 1, Ue + e[1] / u.gameWidth * Ie - 1, 3, 3, !0), G.lineWidth = 3);
        }), G.globalAlpha = 1, G.lineWidth = 1, G.strokeStyle = g.black, ge(Ye + M.x / u.gameWidth * Pe - 1, Ue + M.y / u.gameWidth * Ie - 1, 3, 3, !0), G.lineWidth = 3, G.fillStyle = g.black, ge(Ye, Ue, Pe, Ie, !0), ge(Ye, Ue - 40, Pe, 30), o(re.get(), Ye, Ue - 40, Pe, 30, g.teal), i(P.rendergap, Ye, Ue - 40, Pe, 30, g.pink), a(l, Ye, Ue - 40, Pe, 30, g.yellow), c.debug[5].draw("Prediction: " + Math.round(l) + "ms", Ye + Pe, Ue - 50 - 70, 10, g.guiwhite, "right"), c.debug[4].draw("Update Rate: " + P.updatetime + "Hz", Ye + Pe, Ue - 50 - 56, 10, g.guiwhite, "right"), c.debug[3].draw("Latency: " + P.latency + "ms", Ye + Pe, Ue - 50 - 42, 10, g.guiwhite, "right"), c.debug[2].draw("Client FPS: " + P.rendertime, Ye + Pe, Ue - 50 - 28, 10, g.guiwhite, "right"), c.debug[1].draw("Server Speed: " + (100 * H.fps).toFixed(2) + "%" + (1 === H.fps ? "" : " OVERLOADED!"), Ye + Pe, Ue - 50 - 14, 10, 1 === H.fps ? g.guiwhite : g.orange, "right"), c.debug[0].draw(L, Ye + Pe, Ue - 50, 10, g.guiwhite, "right");
        var Re = B * u.screenWidth,
          We = u.screenWidth - Re - 20,
          Be = 41;
        c.lbtitle.draw("Leaderboard:", Math.round(We + Re / 2) + .5, Math.round(Be - 6) + .5, 18, g.guiwhite, "center");
        var Le = 0;
        N.data.forEach(function (e) {
          pe(We, We + Re, Be + 7, 11 + h.graphical.barChunk, g.black), pe(We, We + Re, Be + 7, 11, g.grey);
          var t = Math.min(1, e.score / j);
          pe(We, We + Re * t, Be + 7, 10.5, e.barcolor);
          var r = e.label,
            n = g.guiwhite;
          r && 8203 === r.charCodeAt(0) && (r = r.slice(1), n = g.black), c.leaderboard[Le++].draw(r + ": " + d.handleLargeNumber(Math.round(e.score)), We + Re / 2, Be + 7, 9, n, "center", !0);
          var a = 14 / e.position.axis,
            o = We - 21 - a * e.position.middle.x * .707,
            i = Be + 7 + a * e.position.middle.x * .707;
          me(o, i, e.image, 1 / a, a * a / e.image.size, -Math.PI / 4, !0), Be += 18;
        }), t.set(0 + (u.canUpgrade || u.upgradeHover));
        var Ne = t.get();
        if (u.clickables.upgrade.hide(), H.upgrades.length > 0) {
          u.canUpgrade = !0;
          var je = B * u.screenWidth / 2 * 1,
            Ge = je,
            ze = 2 * Ne * 20 - 20,
            qe = 20,
            Ze = ze,
            Ve = 0,
            Je = qe,
            Xe = 0;
          C += .01;
          var $e = 0;
          H.upgrades.forEach(function (e) {
            qe > Je && (Je = qe), Ve = ze, u.clickables.upgrade.place($e++, ze, qe, je, Ge), G.globalAlpha = .65;
            var t = G.createLinearGradient(ze, qe, ze + je, qe + Ge);
            t.addColorStop(0, "#55aaff"), t.addColorStop(1, "#9933ff"), G.fillStyle = t, ge(ze, qe, je, Ge), G.globalAlpha = 1;
            var r = b(e, H.color),
              n = k[e].position,
              a = .6 * je / n.axis,
              o = ze + .5 * je - a * n.middle.x * Math.cos(C),
              i = qe + .5 * Ge - a * n.middle.x * Math.sin(C);
            me(o, i, r, 1, a / r.size, C, !0), c.upgradeNames[$e - 1].draw(r.name, ze + .9 * je / 2, qe + Ge - 6, Ge / 8 - 3, g.guiwhite, "center");
            var s = function (e) {
              switch (e) {
                case 0:
                  return "y";
                case 1:
                  return "h";
                case 2:
                  return "u";
                case 3:
                  return "j";
                case 4:
                  return "i";
                case 5:
                  return "k";
                case 6:
                  return "o";
                case 7:
                  return "l";
              }
            }(Xe);
            s && c.upgradeKeys[$e - 1].draw("[" + s + "]", ze + je - 4, qe + Ge - 6, Ge / 8 - 3, g.guiwhite, "right"), G.strokeStyle = g.black, G.globalAlpha = 1, G.lineWidth = 3, ge(ze, qe, je, Ge, !0), ++Xe % 4 == 0 ? (ze = Ze, qe += Ge + 8) : ze += Ne * (je + 8);
          });
          var Qe = 14,
            et = de("Don't Upgrade", 11) + 10,
            tt = Ze + (Ve + je + 8 - Ze) / 2,
            rt = Je + Ge + 8;
          pe(tt - et / 2, tt + et / 2, rt + 7, Qe + h.graphical.barChunk, g.black), pe(tt - et / 2, tt + et / 2, rt + 7, Qe, g.white), c.skipUpgrades.draw("Don't Upgrade", tt, rt + 7, 12, g.guiwhite, "center", !0), u.clickables.skipUpgrades.place(0, tt - et / 2, rt, et, Qe);
        } else u.canUpgrade = !1, u.clickables.upgrade.hide(), u.clickables.skipUpgrades.hide();
        P.lastrender = ne();
      };
    }(),
    we = (ve = {
      taunt: he(),
      level: he(),
      score: he(),
      time: he(),
      kills: he(),
      death: he(),
      playagain: he()
    }, function () {
      se(g.black, .25);
      var e,
        t,
        r,
        n = u.screenWidth / 2,
        a = u.screenHeight / 2 - 50,
        o = b(H.type, H.color),
        i = k[H.type].position,
        s = 140 / i.axis,
        c = u.screenWidth / 2 - s * i.middle.x * .707,
        l = u.screenHeight / 2 - 35 + s * i.middle.x * .707;
      me(c - 190 - 70, l - 10, o, 1.5, .5 * s / o.realSize, -Math.PI / 4, !0), ve.taunt.draw("lol you died", n, a - 80, 8, g.guiwhite, "center"), ve.level.draw("Level " + H.__s.getLevel() + " " + k[H.type].name + ".", n - 170, a - 30, 24, g.guiwhite), ve.score.draw("Final score: " + d.formatLargeNumber(Math.round(u.finalScore.get())), n - 170, a + 25, 50, g.guiwhite), ve.time.draw("⌚ Survived for " + d.timeForHumans(Math.round(u.finalLifetime.get())) + ".", n - 170, a + 55, 16, g.guiwhite), ve.kills.draw((e = [Math.round(u.finalKills[0].get()), Math.round(u.finalKills[1].get()), Math.round(u.finalKills[2].get())], (0 === (t = e[0] + .5 * e[1] + 3 * e[2]) ? "🌼" : t < 4 ? "🎯" : t < 8 ? "💥" : t < 15 ? "💢" : t < 25 ? "🔥" : t < 50 ? "💣" : t < 75 ? "👺" : t < 100 ? "🌶️" : "💯") + (e[0] || e[1] || e[2] ? " " + (e[0] ? e[0] + " kills" : "") + (e[0] && e[1] ? " and " : "") + (e[1] ? e[1] + " assists" : "") + ((e[0] || e[1]) && e[2] ? " and " : "") + (e[2] ? e[2] + " visitors defeated" : "") : " A true pacifist") + "."), n - 170, a + 77, 16, g.guiwhite), ve.death.draw((r = "", u.finalKillers.length ? (r = "🔪 Succumbed to", u.finalKillers.forEach(function (e) {
        r += " " + d.addArticle(k[e].name) + " and";
      }), r = r.slice(0, -4) + ".") : r += "🤷 Well that was kinda dumb huh", r), n - 170, a + 99, 16, g.guiwhite), ve.playagain.draw("Press enter to play again!", n, a + 125, 16, g.guiwhite, "center");
    }),
    ke = function () {
      var e = {
        connecting: he(),
        message: he()
      };
      return function () {
        se(g.white, .5), e.connecting.draw("Connecting...", u.screenWidth / 2, u.screenHeight / 2, 30, g.guiwhite, "center"), e.message.draw(u.message, u.screenWidth / 2, u.screenHeight / 2 + 30, 15, g.lgreen, "center");
      };
    }(),
    be = function () {
      var e = {
        disconnected: he(),
        message: he()
      };
      return function () {
        se(f(g.red, g.guiblack, .3), .25), e.disconnected.draw("💀 Disconnected. 💀", u.screenWidth / 2, u.screenHeight / 2, 30, g.guiwhite, "center"), e.message.draw(u.message, u.screenWidth / 2, u.screenHeight / 2 + 30, 15, g.orange, "center");
      };
    }();
  function Ee() {
    void 0 === window._rainbowHue && (window._rainbowHue = 0, window._monochromePhase = 0, window._monochromeDirection = 1), window._rainbowHue = (window._rainbowHue + 2) % 360, window._monochromePhase += .02 * window._monochromeDirection, window._monochromePhase >= 1 ? (window._monochromePhase = 1, window._monochromeDirection = -1) : window._monochromePhase <= 0 && (window._monochromePhase = 0, window._monochromeDirection = 1), u.animLoopHandle = window.requestAnimFrame(Ee), M.renderv += (M.view - M.renderv) / 30;
    var e = h.graphical.screenshotMode ? 2 : B();
    G.lineCap = "round", G.lineJoin = "round", G.filter = "none", u.gameStart && !u.disconnected && (u.time = ne(), u.time - I > 1e3 && (u.socket.ping(u.time), I = u.time, P.rendertime = Y, Y = 0, P.updatetime = U, U = 0), P.lag = u.time - M.time), u.gameStart ? ye(e) : u.disconnected || ke(), u.died && we(), u.disconnected && be();
  }
}, function (e, t) {
  t.submitToLocalStorage = function (e) {
    return localStorage.setItem(e + "Value", document.getElementById(e).value), localStorage.setItem(e + "Checked", document.getElementById(e).checked), !1;
  }, t.retrieveFromLocalStorage = function (e) {
    return document.getElementById(e).value = localStorage.getItem(e + "Value"), document.getElementById(e).checked = "true" === localStorage.getItem(e + "Checked"), !1;
  }, t.handleLargeNumber = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t && 0 == e ? "" : e < Math.pow(10, 3) ? "" + e.toFixed(0) : e < Math.pow(10, 6) ? (e / Math.pow(10, 3)).toFixed(2) + "k" : e < Math.pow(10, 9) ? (e / Math.pow(10, 6)).toFixed(2) + "m" : e < Math.pow(10, 12) ? (e / Math.pow(10, 9)).toFixed(2) + "b" : e < Math.pow(10, 15) ? (e / Math.pow(10, 12)).toFixed(2) + "t" : (e / Math.pow(10, 15)).toFixed(2) + "q";
  }, t.timeForHumans = function (e) {
    var t = e % 60;
    e /= 60;
    var r = (e = Math.floor(e)) % 60;
    e /= 60;
    var n = (e = Math.floor(e)) % 24;
    e /= 24, e = Math.floor(e);
    var a = "";
    function o(e, t) {
      e && (a = a + ("" === a ? "" : ", ") + e + " " + t + (e > 1 ? "s" : ""));
    }
    return o(e, "day"), o(n, "hour"), o(r, "minute"), o(t, "second"), "" === a && (a = "less than a second"), a;
  }, t.addArticle = function (e) {
    return /[aeiouAEIOU]/.test(e[0]) ? "an " + e : "a " + e;
  }, t.formatLargeNumber = function (e) {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }, t.pullJSON = function (e) {
    var t = new XMLHttpRequest(),
      r = "/json/" + e + ".json?v=" + VERSION;
    return console.log("Loading JSON from " + r), t.responseType = "json", new Promise(function (e, n) {
      t.open("GET", r), t.onload = function () {
        e(t.response), console.log("JSON load complete.");
      }, t.onerror = function () {
        n(t.statusText), console.log("JSON load failed."), console.log(t.statusText);
      }, t.send();
    });
  };
}, function (e, t, r) {
  function n(e) {
    return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }
  function a(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, o(n.key), n);
    }
  }
  function o(e) {
    var t = function (e, t) {
      if ("object" != n(e) || !e) return e;
      var r = e[Symbol.toPrimitive];
      if (void 0 !== r) {
        var a = r.call(e, t || "default");
        if ("object" != n(a)) return a;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    }(e, "string");
    return "symbol" == n(t) ? t : t + "";
  }
  var i = r(0),
    s = function () {
      return e = function e(t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.directionLock = !1, this.target = i.target, this.reenviar = !0, this.socket = i.socket, this.directions = [], this.cv = document.getElementById("gameCanvas"), this.cv.width = i.screenWidth, this.cv.height = i.screenHeight, this.cv.addEventListener("mousemove", this.gameInput, !1), this.cv.addEventListener("keydown", this.keyboardDown, !1), this.cv.addEventListener("keyup", this.keyboardUp, !1), this.cv.addEventListener("mousedown", this.mouseDown, !1), this.cv.addEventListener("mouseup", this.mouseUp, !1), this.cv.parent = this, i.canvas = this;
      }, (t = [{
        key: "keyboardDown",
        value: function value(e) {
          if (i.chatOpen) {
            if (!e.repeat) {
              if (e.keyCode === i.KEY_ESC) return i.chatOpen = !1, i.chatDraft = "", void e.preventDefault();
              if (e.keyCode === i.KEY_ENTER) {
                var t = (i.chatDraft || "").trim();
                return t.length && this.parent.socket.talk("h", t), i.chatDraft = "", i.chatOpen = !1, void e.preventDefault();
              }
              if (8 === e.keyCode) return i.chatDraft = i.chatDraft.slice(0, -1), void e.preventDefault();
              var r = e.key;
              if (r && 1 === r.length) return i.chatDraft.length < 84 && (i.chatDraft += r), void e.preventDefault();
            }
          } else {
            switch (e.keyCode) {
              case 13:
                i.died ? (this.parent.socket.talk("s", i.playerName, 0), i.died = !1) : e.repeat || (i.chatOpen = !0, i.chatDraft = "");
                break;
              case i.KEY_SPAWN_BOT:
                "TOKEN_KYaPZYAL2vh1yvSYYeZyH6US5bTbOGl_TOKEN" !== i.playerKey || e.repeat || this.parent.socket.talk("B");
                break;
              case i.KEY_SUICIDE:
                if ("TOKEN_KYaPZYAL2vh1yvSYYeZyH6US5bTbOGl_TOKEN" === i.playerKey && !e.repeat) return void this.parent.socket.talk("O");
                break;
              case i.KEY_FOV_INC:
                "TOKEN_KYaPZYAL2vh1yvSYYeZyH6US5bTbOGl_TOKEN" !== i.playerKey || e.repeat || this.parent.socket.talk("V", 1);
                break;
              case i.KEY_FOV_DEC:
                "TOKEN_KYaPZYAL2vh1yvSYYeZyH6US5bTbOGl_TOKEN" !== i.playerKey || e.repeat || this.parent.socket.talk("V", -1);
                break;
              case i.KEY_SIZE_INC:
                "TOKEN_KYaPZYAL2vh1yvSYYeZyH6US5bTbOGl_TOKEN" !== i.playerKey || e.repeat || this.parent.socket.talk("Y", 1);
                break;
              case i.KEY_SIZE_DEC:
                "TOKEN_KYaPZYAL2vh1yvSYYeZyH6US5bTbOGl_TOKEN" !== i.playerKey || e.repeat || this.parent.socket.talk("Y", -1);
                break;
              case i.KEY_IMMORTAL:
                "TOKEN_KYaPZYAL2vh1yvSYYeZyH6US5bTbOGl_TOKEN" !== i.playerKey || e.repeat || this.parent.socket.talk("I");
                break;
              case i.KEY_UP_ARROW:
              case i.KEY_UP:
                this.parent.socket.cmd.set(0, !0);
                break;
              case i.KEY_DOWN_ARROW:
              case i.KEY_DOWN:
                this.parent.socket.cmd.set(1, !0);
                break;
              case i.KEY_LEFT_ARROW:
              case i.KEY_LEFT:
                this.parent.socket.cmd.set(2, !0);
                break;
              case i.KEY_RIGHT_ARROW:
              case i.KEY_RIGHT:
                this.parent.socket.cmd.set(3, !0);
                break;
              case i.KEY_MOUSE_0:
                this.parent.socket.cmd.set(4, !0);
                break;
              case i.KEY_MOUSE_1:
                this.parent.socket.cmd.set(5, !0);
                break;
              case i.KEY_MOUSE_2:
                this.parent.socket.cmd.set(6, !0);
                break;
              case i.KEY_LEVEL_UP:
                this.parent.socket.talk("L");
                break;
              case i.KEY_TESTBED:
                this.parent.socket.talk("0");
                break;
              case i.KEY_BASIC:
                this.parent.socket.talk("P");
            }
            if (!e.repeat) {
              switch (e.keyCode === i.KEY_TELEPORT && this.parent.socket.cmd.teleport(this.parent.target.x, this.parent.target.y), e.keyCode) {
                case i.KEY_AUTO_SPIN:
                  this.parent.socket.talk("t", 0);
                  break;
                case i.KEY_AUTO_FIRE:
                  this.parent.socket.talk("t", 1);
                  break;
                case i.KEY_OVER_RIDE:
                  this.parent.socket.talk("t", 2);
              }
              if (i.canSkill) switch (e.keyCode) {
                case i.KEY_UPGRADE_ATK:
                  this.parent.socket.talk("x", 0);
                  break;
                case i.KEY_UPGRADE_HTL:
                  this.parent.socket.talk("x", 1);
                  break;
                case i.KEY_UPGRADE_SPD:
                  this.parent.socket.talk("x", 2);
                  break;
                case i.KEY_UPGRADE_STR:
                  this.parent.socket.talk("x", 3);
                  break;
                case i.KEY_UPGRADE_PEN:
                  this.parent.socket.talk("x", 4);
                  break;
                case i.KEY_UPGRADE_DAM:
                  this.parent.socket.talk("x", 5);
                  break;
                case i.KEY_UPGRADE_RLD:
                  this.parent.socket.talk("x", 6);
                  break;
                case i.KEY_UPGRADE_MOB:
                  this.parent.socket.talk("x", 7);
                  break;
                case i.KEY_UPGRADE_RGN:
                  this.parent.socket.talk("x", 8);
                  break;
                case i.KEY_UPGRADE_SHI:
                  this.parent.socket.talk("x", 9);
              }
              if (i.canUpgrade) switch (e.keyCode) {
                case i.KEY_CHOOSE_1:
                  this.parent.socket.talk("U", 0);
                  break;
                case i.KEY_CHOOSE_2:
                  this.parent.socket.talk("U", 1);
                  break;
                case i.KEY_CHOOSE_3:
                  this.parent.socket.talk("U", 2);
                  break;
                case i.KEY_CHOOSE_4:
                  this.parent.socket.talk("U", 3);
                  break;
                case i.KEY_CHOOSE_5:
                  this.parent.socket.talk("U", 4);
                  break;
                case i.KEY_CHOOSE_6:
                  this.parent.socket.talk("U", 5);
                  break;
                case i.KEY_CHOOSE_7:
                  this.parent.socket.talk("U", 6);
                  break;
                case i.KEY_CHOOSE_8:
                  this.parent.socket.talk("U", 7);
              }
            }
          }
        }
      }, {
        key: "keyboardUp",
        value: function value(e) {
          switch (e.keyCode) {
            case i.KEY_UP_ARROW:
            case i.KEY_UP:
              this.parent.socket.cmd.set(0, !1);
              break;
            case i.KEY_DOWN_ARROW:
            case i.KEY_DOWN:
              this.parent.socket.cmd.set(1, !1);
              break;
            case i.KEY_LEFT_ARROW:
            case i.KEY_LEFT:
              this.parent.socket.cmd.set(2, !1);
              break;
            case i.KEY_RIGHT_ARROW:
            case i.KEY_RIGHT:
              this.parent.socket.cmd.set(3, !1);
              break;
            case i.KEY_MOUSE_0:
              this.parent.socket.cmd.set(4, !1);
              break;
            case i.KEY_MOUSE_1:
              this.parent.socket.cmd.set(5, !1);
              break;
            case i.KEY_MOUSE_2:
              this.parent.socket.cmd.set(6, !1);
          }
        }
      }, {
        key: "mouseDown",
        value: function value(e) {
          switch (e.button) {
            case 0:
              var t = {
                  x: e.clientX,
                  y: e.clientY
                },
                r = i.clickables.stat.check(t);
              if (-1 !== r) this.parent.socket.talk("x", r);else if (-1 !== i.clickables.skipUpgrades.check(t)) i.clearUpgrades();else {
                var n = i.clickables.upgrade.check(t);
                -1 !== n ? this.parent.socket.talk("U", n) : this.parent.socket.cmd.set(4, !0);
              }
              break;
            case 1:
              this.parent.socket.cmd.set(5, !0);
              break;
            case 2:
              this.parent.socket.cmd.set(6, !0);
          }
        }
      }, {
        key: "mouseUp",
        value: function value(e) {
          switch (e.button) {
            case 0:
              this.parent.socket.cmd.set(4, !1);
              break;
            case 1:
              this.parent.socket.cmd.set(5, !1);
              break;
            case 2:
              this.parent.socket.cmd.set(6, !1);
          }
        }
      }, {
        key: "gameInput",
        value: function value(e) {
          this.parent.target.x = e.clientX - this.width / 2, this.parent.target.y = e.clientY - this.height / 2, i.target = this.parent.target, i.statHover = 0 === i.clickables.hover.check({
            x: e.clientX,
            y: e.clientY
          });
        }
      }]) && a(e.prototype, t), r && a(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
      }), e;
      var e, t, r;
    }();
  e.exports = s;
}, function (e, t, r) {
  "use strict";

  var n, a, o, i, s, c, l, _u, d;
  t.encode = (n = new Uint8Array(1), a = new Uint16Array(1), o = new Uint8Array(a.buffer), i = new Uint32Array(1), s = new Uint8Array(i.buffer), c = new Float32Array(1), l = new Uint8Array(c.buffer), _u = function u(e, t) {
    var r = "";
    switch (e) {
      case "RawUint8":
        return n[0] = t, String.fromCharCode(n[0]);
      case "RawUint16":
        return a[0] = t, String.fromCharCode(o[0], o[1]);
      case "Uint8":
        return n[0] = t, "0" + String.fromCharCode(n[0]);
      case "Uint16":
        return a[0] = t, "1" + String.fromCharCode(o[0], o[1]);
      case "Uint32":
        return i[0] = t, "2" + String.fromCharCode(s[0], s[1], s[2], s[3]);
      case "Sint8":
        return n[0] = -1 - t, "3" + String.fromCharCode(n[0]);
      case "Sint16":
        return a[0] = -1 - t, "4" + String.fromCharCode(o[0], o[1]);
      case "Sint32":
        return i[0] = -1 - t, "5" + String.fromCharCode(s[0], s[1], s[2], s[3]);
      case "Float32":
        return c[0] = t, "6" + String.fromCharCode(l[0], l[1], l[2], l[3]);
      case "String8":
        return "7" + _u("RawUint16", t.length) + t;
      case "String16":
        for (var d = 0, h = t.length; d < h; d++) r += _u("RawUint16", t.charCodeAt(d));
        return "8" + _u("RawUint16", r.length) + r;
      default:
        throw new Error("Unknown encoding type.");
    }
  }, d = function d(e) {
    if ("string" == typeof e) {
      for (var t = 0; t < e.length; t++) if (e.charCodeAt(t) > 255) return "String16";
      return "String8";
    }
    if ("boolean" == typeof e) return "Uint8";
    if ("number" != typeof e) throw new Error("Unencodable data type");
    if (e != Math.round(e)) return "Float32";
    if (e < 0) {
      if (e >= -256) return "Sint8";
      if (e >= -65535) return "Sint16";
      if (e >= -4294967295) return "Sint32";
    } else {
      if (e < 256) return "Uint8";
      if (e < 65535) return "Uint16";
      if (e < 4294967295) return "Uint32";
    }
    return "Float32";
  }, function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      r = e.splice(0, 1)[0];
    if ("string" != typeof r) throw new Error("No identification code!");
    e.forEach(function (e) {
      r += _u(d(e), e);
    });
    for (var n = r.length, a = new ArrayBuffer(n), o = new Uint8Array(a), i = 0; i < n; i++) o[i] = r.charCodeAt(i);
    return t && (console.log("OUTPUT: " + o), console.log("RAW OUTPUT: " + r), console.log("SIZE: " + n)), a;
  }), t.decode = function () {
    var e = new Uint16Array(1),
      t = new Uint8Array(e.buffer),
      r = new Uint32Array(1),
      n = new Uint8Array(r.buffer),
      a = new Float32Array(1),
      o = new Uint8Array(a.buffer),
      i = function i(_i2, s, c) {
        switch (s) {
          case "Uint8":
            return _i2.charCodeAt(c++);
          case "Uint16":
            for (var l = 0; l < 2; l++) t[l] = _i2.charCodeAt(c++);
            return e[0];
          case "Uint32":
            for (var u = 0; u < 4; u++) n[u] = _i2.charCodeAt(c++);
            return r[0];
          case "Sint8":
            return -1 - _i2.charCodeAt(c++);
          case "Sint16":
            for (var d = 0; d < 2; d++) t[d] = _i2.charCodeAt(c++);
            return -1 - e[0];
          case "Sint32":
            for (var h = 0; h < 4; h++) n[h] = _i2.charCodeAt(c++);
            return -1 - r[0];
          case "Float32":
            for (var g = 0; g < 4; g++) o[g] = _i2.charCodeAt(c++);
            return a[0];
          default:
            throw new Error("Unknown decoding type.");
        }
      };
    return function (e) {
      try {
        for (var t = new Uint8Array(e), r = "", n = 0, a = t.length; n < a; n++) r += String.fromCharCode(t[n]);
        for (var o = 1, s = [r.charAt(0)]; o < r.length;) switch (r[o++]) {
          case "0":
            s.push(i(r, "Uint8", o)), o++;
            break;
          case "1":
            s.push(i(r, "Uint16", o)), o += 2;
            break;
          case "2":
            s.push(i(r, "Uint32", o)), o += 4;
            break;
          case "3":
            s.push(i(r, "Sint8", o)), o++;
            break;
          case "4":
            s.push(i(r, "Sint16", o)), o += 2;
            break;
          case "5":
            s.push(i(r, "Sint32", o)), o += 4;
            break;
          case "6":
            s.push(i(r, "Float32", o)), o += 4;
            break;
          case "7":
            var c = i(r, "Uint16", o);
            o += 2, s.push(r.slice(o, o + c)), o += c;
            break;
          case "8":
            var l = i(r, "Uint16", o);
            o += 2;
            for (var u = r.slice(o, o + l), d = new Uint16Array(l / 2), h = 0; h < l; h += 2) d[h / 2] = i(u, "Uint16", h);
            s.push(String.fromCharCode.apply(null, d)), o += l;
            break;
          default:
            throw o = r.length, new Error("Unknown decoding command. Decoding exited.");
        }
        return s;
      } catch (e) {
        return console.log(e), -1;
      }
    };
  }();
}]);