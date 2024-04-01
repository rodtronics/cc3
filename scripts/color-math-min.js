!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.ColorMath = t())
    : (e.ColorMath = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
          for (var o in e)
            r.d(
              n,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 16))
    );
  })([
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(5)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function i(e) {
        return (i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var c = (function (e) {
        function t(e, r) {
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            u(this, i(t).call(this, "expr.".concat(e), r))
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && l(e, t);
          })(t, o["default"]),
          t
        );
      })();
      t.default = c;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.blendColors = function (e, t, r) {
          for (var n = f(r), o = e.rgba(), a = t.rgba(), u = [void 0, void 0, void 0, a[3] + o[3] * (1 - a[3])], i = 0; i < 3; i++) {
            var l = o[i] / 255,
              s = a[i] / 255,
              p = n(o[i], a[i]) / 255;
            u[3] && (p = (a[3] * s + o[3] * (l - a[3] * (l + s - p))) / u[3]), (u[i] = 255 * p);
          }
          return c(u);
        }),
        (t.cmyToCmykArray = s),
        (t.cmyToCmyk = function (e, t, r) {
          var n = s(e, t, r);
          return c(n, "cmyk");
        }),
        (t.inverseColor = function (e) {
          var t = m(e);
          return (t = (t = (t = t.set("rgb.r", 255 - e.get("rgb.r"))).set("rgb.g", 255 - e.get("rgb.g"))).set("rgb.b", 255 - e.get("rgb.b")));
        }),
        (t.colorArithmeticOp = function (e, t, r) {
          var n, o;
          v(e) ? ((n = e), (o = t)) : ((o = e), (n = t));
          return (n = (n = (n = (n = m(n)).set("rgb.r", r + o)).set("rgb.g", r + o)).set("rgb.b", r + o));
        }),
        (t.roundColorComps = p),
        (t.getColorSpaceParamsValidRanges = h),
        (t.isColor = v),
        (t.formatColor = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = (e = p(e)).hex(),
            n = e.hex("rgba"),
            o = e.alpha(),
            a = e.name(),
            u = 1 === o || isNaN(o) ? r : n;
          t && a !== r && (u += " (".concat(a, ")"));
          return u;
        }),
        (t.colorFromWavelength = function (e) {
          var t = 0,
            r = 0,
            n = 0,
            o = 1;
          e >= 380 && e < 440
            ? ((t = (-1 * (e - 440)) / 60), (r = 0), (n = 1))
            : e >= 440 && e < 490
            ? ((t = 0), (r = (e - 440) / 50), (n = 1))
            : e >= 490 && e < 510
            ? ((t = 0), (r = 1), (n = (-1 * (e - 510)) / 20))
            : e >= 510 && e < 580
            ? ((t = (e - 510) / 70), (r = 1), (n = 0))
            : e >= 580 && e < 645
            ? ((t = 1), (r = (-1 * (e - 645)) / 65), (n = 0))
            : e >= 645 && e <= 780 && ((t = 1), (r = 0), (n = 0));
          e > 780 || e < 380 ? (o = 0) : e > 700 ? (o = (780 - e) / 80) : e < 420 && (o = (e - 380) / 40);
          return c([t, r, n, o], "gl");
        }),
        (t.throwError = y),
        (t.getType = b),
        (t.forceType = d),
        (t.forceRange = function (e, t) {
          (b(e) === a.default.NumberArray && 2 === e.length) || y("operand is not valid numeric range", t);
          return e;
        }),
        (t.cloneValue = m),
        (t.forceNumInRange = function (e, t, r, n) {
          var o = Array.isArray(t) ? t[0] : t,
            u = Array.isArray(t) ? t[1] : r;
          n = Array.isArray(t) ? r : n;
          var i = d(e, a.default.Number, n);
          (i < o || i > u) && y("number in a range [".concat(o, "..").concat(u, "] is expected, you provided: ").concat(i), n);
          return i;
        }),
        (t.getObjKey = function (e, t) {
          for (var r in e) if ((!e.hasOwnProperty || r in e) && e[r] === t) return r;
        });
      var n = u(r(2)),
        o = u(r(3)),
        a = u(r(4));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r = [],
              n = !0,
              o = !1,
              a = void 0;
            try {
              for (var u, i = e[Symbol.iterator](); !(n = (u = i.next()).done) && (r.push(u.value), !t || r.length !== t); n = !0);
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                n || null == i.return || i.return();
              } finally {
                if (o) throw a;
              }
            }
            return r;
          })(e, t) ||
          (function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          })()
        );
      }
      var l,
        c = r(6),
        f =
          (((l = {})[o.default.None] = function (e) {
            return e;
          }),
          (l[o.default.Replace] = function (e, t) {
            return t;
          }),
          (l[o.default.Add] = function (e, t) {
            return Math.min(e + t, 255);
          }),
          (l[o.default.ColorBurn] = function (e, t) {
            return t <= 0 ? 0 : Math.max(255 - (255 * (255 - e)) / t, 0);
          }),
          (l[o.default.ColorDodge] = function (e, t) {
            return t >= 255 ? 255 : Math.min((255 * e) / (255 - t), 255);
          }),
          (l[o.default.Darken] = function (e, t) {
            return Math.min(e, t);
          }),
          (l[o.default.Difference] = function (e, t) {
            return Math.abs(e - t);
          }),
          (l[o.default.Divide] = function (e, t) {
            return Math.min((e / 255 / (t / 255)) * 255, 255);
          }),
          (l[o.default.Exclusion] = function (e, t) {
            return 255 - (((255 - e) * (255 - t)) / 255 + (e * t) / 255);
          }),
          (l[o.default.HardLight] = function (e, t) {
            return t < 128 ? (2 * e * t) / 255 : 255 - (2 * (255 - e) * (255 - t)) / 255;
          }),
          (l[o.default.Lighten] = function (e, t) {
            return Math.max(e, t);
          }),
          (l[o.default.LinearBurn] = function (e, t) {
            return Math.max(0, e + t - 255);
          }),
          (l[o.default.LinearDodge] = function (e, t) {
            return Math.min(e + t, 255);
          }),
          (l[o.default.Multiply] = function (e, t) {
            return (e * t) / 255;
          }),
          (l[o.default.Negate] = function (e, t) {
            return 255 - Math.abs(255 - e - t);
          }),
          (l[o.default.Overlay] = function (e, t) {
            return e < 128 ? (2 * e * t) / 255 : 255 - (2 * (255 - e) * (255 - t)) / 255;
          }),
          (l[o.default.Screen] = function (e, t) {
            return 255 - ((255 - e) * (255 - t)) / 255;
          }),
          (l[o.default.SoftLight] = function (e, t) {
            return e < 128 ? (64 + (t >> 1)) * e * (2 / 255) : 255 - (191 - (t >> 1)) * (255 - e) * (2 / 255);
          }),
          (l[o.default.Subtract] = function (e, t) {
            return Math.max(e - t, 0);
          }),
          function (e) {
            return l[e];
          });
      function s(e, t, r) {
        var n,
          o = 1;
        if (Array.isArray(e)) {
          var a = i(e, 3);
          (n = a[0]), (t = a[1]), (r = a[2]);
        } else n = e;
        return (
          n < o && (o = n),
          t < o && (o = t),
          r < o && (o = r),
          1 === o ? ((n = 0), (t = 0), (r = 0)) : ((n = (n - o) / (1 - o)), (t = (t - o) / (1 - o)), (r = (r - o) / (1 - o))),
          [n, t, r, o]
        );
      }
      function p(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rgb", r = h(t), n = e.get(t), o = 0; o < r.length; o++)
          r[o][1] - r[o][0] > 2 && (n[o] = Math.round(n[o]));
        var a = c(n, t);
        return (a = a.alpha(e.alpha()));
      }
      function h(e) {
        switch (e) {
          case "rgb":
            return [
              [0, 255],
              [0, 255],
              [0, 255],
            ];
          case "cmy":
            return [
              [0, 1],
              [0, 1],
              [0, 1],
            ];
          case "cmyk":
            return [
              [0, 1],
              [0, 1],
              [0, 1],
              [0, 1],
            ];
          case "hsl":
          case "hsv":
          case "hsi":
            return [
              [0, 360],
              [0, 1],
              [0, 1],
            ];
          case "lab":
            return [
              [0, 100],
              [-128, 127],
              [-128, 127],
            ];
          case "lch":
            return [
              [0, 100],
              [0, 140],
              [0, 360],
            ];
          case "hcl":
            return [
              [0, 360],
              [0, 140],
              [0, 100],
            ];
          default:
            throw new SyntaxError("unknown namespace: ".concat(e.toUpperCase(), "."));
        }
      }
      function v(e) {
        return e && Array.isArray(e._rgb) && 4 === e._rgb.length;
      }
      function y(e, t) {
        var r = t ? " (".concat(t, ")") : "";
        throw "Error".concat(r, ": ").concat(e, ".");
      }
      function b(e) {
        if ("number" == typeof e) return a.default.Number;
        if (v(e)) return a.default.Color;
        if (Array.isArray(e)) {
          if (e.length) {
            if (
              e.every(function (e) {
                return b(e) === a.default.Number;
              })
            )
              return a.default.NumberArray;
            if (
              e.every(function (e) {
                return b(e) === a.default.Color;
              })
            )
              return a.default.ColorArray;
          }
          return a.default.Array;
        }
        return e instanceof n.default ? a.default.ColorScale : void 0;
      }
      function d(e, t, r) {
        var n = b(e),
          o = Array.isArray(t) ? t : [t];
        if (
          o.every(function (e) {
            return (e & n) !== e;
          })
        ) {
          var u = o.map(function (e) {
              switch (e) {
                case a.default.Number:
                  return "a number";
                case a.default.Color:
                  return "a color";
                case a.default.ColorScale:
                  return "a color scale";
                case a.default.Array:
                  return "an array";
                case a.default.NumberArray:
                  return "a number array";
                case a.default.ColorArray:
                  return "a color array";
                default:
                  throw new Error("invalid value type");
              }
            }),
            i = u[0];
          u.length > 1 && (i = u.slice(0, -1).join(", ") + " or " + u.slice(-1)), y("value is not ".concat(i), r);
        }
        return e;
      }
      function m(e) {
        switch (b(e)) {
          case a.default.Color:
            return c(e.rgba());
          case a.default.ColorScale:
            return e.clone();
          case a.default.Array:
          case a.default.NumberArray:
          case a.default.ColorArray:
            return e.map(function (e) {
              return m(e);
            });
          default:
            return e;
        }
      }
    },
    function (e, t, r) {
      "use strict";
      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var o = r(6),
        a = (function () {
          function e(t, r, n) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.name = t.toLowerCase()),
              (this.params = r || []),
              (this.scaleParams = n || []);
          }
          var t, r, a;
          return (
            (t = e),
            (r = [
              {
                key: "toString",
                value: function () {
                  return "<colorScale.".concat(this.name, ">");
                },
              },
              {
                key: "clone",
                value: function () {
                  return new e(this.name, this.params.slice(0), this.scaleParams.slice(0));
                },
              },
              {
                key: "_getParamValue",
                value: function (e, t) {
                  for (var r = 0; r < e.length; r++) if (e[r].name === t) return e[r].value;
                },
              },
              {
                key: "_applyParams",
                value: function (e, t) {
                  for (var r = 0; r < t.length; r++) "colors" !== t[r].name && (e = e[t[r].name](t[r].value));
                },
              },
              {
                key: "getFn",
                value: function () {
                  var e = this._getParamValue(this.scaleParams, "colors"),
                    t = o[this.name],
                    r = e ? t(e) : t();
                  return this._applyParams(r, this.params), "scale" !== this.name && (r = r.scale()), this._applyParams(r, this.scaleParams), r;
                },
              },
            ]) && n(t.prototype, r),
            a && n(t, a),
            e
          );
        })();
      t.default = a;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      t.default = {
        None: 0,
        Replace: 1,
        Add: 2,
        ColorBurn: 3,
        ColorDodge: 4,
        Darken: 5,
        Difference: 6,
        Divide: 7,
        Exclusion: 8,
        HardLight: 9,
        Lighten: 10,
        LinearBurn: 11,
        LinearDodge: 12,
        Multiply: 13,
        Negate: 14,
        Overlay: 15,
        Screen: 16,
        SoftLight: 17,
        Subtract: 18,
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      t.default = { Number: 1, Color: 2, ColorScale: 4, Array: 8, NumberArray: 16, ColorArray: 32 };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n = i(r(20)),
        o = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
              }
          return (t.default = e), t;
        })(r(1)),
        a = i(r(12)),
        u = i(r(2));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      var c = (function () {
        function e(t, r) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.$type = t),
            r && (this.$loc = r instanceof a.default ? r : new a.default(r));
        }
        var t, r, i;
        return (
          (t = e),
          (r = [
            {
              key: "getDto",
              value: function () {
                var t = this,
                  r = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                  i = (0, n.default)(this, function (n) {
                    if (n !== t) {
                      if (n instanceof e) return n.getDto(r);
                      if (n instanceof a.default) return t.$loc.toString();
                      if (o.isColor(n)) return o.formatColor(n);
                      if (n instanceof u.default) return String(n);
                    }
                  });
                return r || delete i.$loc, i;
              },
            },
            {
              key: "evaluate",
              value: function (e) {
                var t = this._evaluateInternal(e);
                return (
                  null == t && o.throwError("evaluation of '".concat(this.$type, "' is not supported by '").concat(e.$type, "'"), this.$loc),
                  (this.$eval = t),
                  this.$eval
                );
              },
            },
            {
              key: "_evaluateInternal",
              value: function () {
                throw new Error("Not implemented");
              },
            },
          ]) && l(t.prototype, r),
          i && l(t, i),
          e
        );
      })();
      t.default = c;
    },
    function (e, t, r) {
      /**
       * chroma.js - JavaScript library for color conversions
       *
       * Copyright (c) 2011-2019, Gregor Aisch
       * All rights reserved.
       *
       * Redistribution and use in source and binary forms, with or without
       * modification, are permitted provided that the following conditions are met:
       *
       * 1. Redistributions of source code must retain the above copyright notice, this
       * list of conditions and the following disclaimer.
       *
       * 2. Redistributions in binary form must reproduce the above copyright notice,
       * this list of conditions and the following disclaimer in the documentation
       * and/or other materials provided with the distribution.
       *
       * 3. The name Gregor Aisch may not be used to endorse or promote products
       * derived from this software without specific prior written permission.
       *
       * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
       * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
       * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
       * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
       * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
       * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
       * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
       * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
       * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
       * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
       *
       * -------------------------------------------------------
       *
       * chroma.js includes colors from colorbrewer2.org, which are released under
       * the following license:
       *
       * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
       * and The Pennsylvania State University.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing,
       * software distributed under the License is distributed on an
       * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
       * either express or implied. See the License for the specific
       * language governing permissions and limitations under the License.
       *
       * ------------------------------------------------------
       *
       * Named colors are taken from X11 Color Names.
       * http://www.w3.org/TR/css3-color/#svg-color
       *
       * @preserve
       */
      e.exports = (function () {
        "use strict";
        for (
          var e = function (e, t, r) {
              return void 0 === t && (t = 0), void 0 === r && (r = 1), e < t ? t : e > r ? r : e;
            },
            t = {},
            r = 0,
            n = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"];
          r < n.length;
          r += 1
        ) {
          var o = n[r];
          t["[object " + o + "]"] = o.toLowerCase();
        }
        var a = function (e) {
            return t[Object.prototype.toString.call(e)] || "object";
          },
          u = Math.PI,
          i = {
            clip_rgb: function (t) {
              (t._clipped = !1), (t._unclipped = t.slice(0));
              for (var r = 0; r <= 3; r++)
                r < 3 ? ((t[r] < 0 || t[r] > 255) && (t._clipped = !0), (t[r] = e(t[r], 0, 255))) : 3 === r && (t[r] = e(t[r], 0, 1));
              return t;
            },
            limit: e,
            type: a,
            unpack: function (e, t) {
              return (
                void 0 === t && (t = null),
                e.length >= 3
                  ? Array.prototype.slice.call(e)
                  : "object" == a(e[0]) && t
                  ? t
                      .split("")
                      .filter(function (t) {
                        return void 0 !== e[0][t];
                      })
                      .map(function (t) {
                        return e[0][t];
                      })
                  : e[0]
              );
            },
            last: function (e) {
              if (e.length < 2) return null;
              var t = e.length - 1;
              return "string" == a(e[t]) ? e[t].toLowerCase() : null;
            },
            PI: u,
            TWOPI: 2 * u,
            PITHIRD: u / 3,
            DEG2RAD: u / 180,
            RAD2DEG: 180 / u,
          },
          l = { format: {}, autodetect: [] },
          c = i.last,
          f = i.clip_rgb,
          s = i.type,
          p = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = this;
            if ("object" === s(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
            var n = c(e),
              o = !1;
            if (!n) {
              (o = !0),
                l.sorted ||
                  ((l.autodetect = l.autodetect.sort(function (e, t) {
                    return t.p - e.p;
                  })),
                  (l.sorted = !0));
              for (var a = 0, u = l.autodetect; a < u.length; a += 1) {
                var i = u[a];
                if ((n = i.test.apply(i, e))) break;
              }
            }
            if (!l.format[n]) throw new Error("unknown format: " + e);
            var p = l.format[n].apply(null, o ? e : e.slice(0, -1));
            (r._rgb = f(p)), 3 === r._rgb.length && r._rgb.push(1);
          };
        p.prototype.toString = function () {
          return "function" == s(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]";
        };
        var h = p,
          v = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(v.Color, [null].concat(e)))();
          };
        (v.Color = h), (v.version = "2.0.4");
        var y = v,
          b = i.unpack,
          d = Math.max,
          m = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = b(e, "rgb"),
              n = r[0],
              o = r[1],
              a = r[2],
              u = 1 - d((n /= 255), d((o /= 255), (a /= 255))),
              i = u < 1 ? 1 / (1 - u) : 0,
              l = (1 - n - u) * i,
              c = (1 - o - u) * i,
              f = (1 - a - u) * i;
            return [l, c, f, u];
          },
          g = i.unpack,
          _ = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = (e = g(e, "cmyk"))[0],
              n = e[1],
              o = e[2],
              a = e[3],
              u = e.length > 4 ? e[4] : 1;
            return 1 === a
              ? [0, 0, 0, u]
              : [r >= 1 ? 0 : 255 * (1 - r) * (1 - a), n >= 1 ? 0 : 255 * (1 - n) * (1 - a), o >= 1 ? 0 : 255 * (1 - o) * (1 - a), u];
          },
          C = i.unpack,
          k = i.type;
        (h.prototype.cmyk = function () {
          return m(this._rgb);
        }),
          (y.cmyk = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["cmyk"])))();
          }),
          (l.format.cmyk = _),
          l.autodetect.push({
            p: 2,
            test: function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              if (((e = C(e, "cmyk")), "array" === k(e) && 4 === e.length)) return "cmyk";
            },
          });
        var w = i.unpack,
          O = i.last,
          S = function (e) {
            return Math.round(100 * e) / 100;
          },
          P = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = w(e, "hsla"),
              n = O(e) || "lsa";
            return (
              (r[0] = S(r[0] || 0)),
              (r[1] = S(100 * r[1]) + "%"),
              (r[2] = S(100 * r[2]) + "%"),
              "hsla" === n || (r.length > 3 && r[3] < 1) ? ((r[3] = r.length > 3 ? r[3] : 1), (n = "hsla")) : (r.length = 3),
              n + "(" + r.join(",") + ")"
            );
          },
          j = i.unpack,
          E = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = (e = j(e, "rgba"))[0],
              n = e[1],
              o = e[2];
            (r /= 255), (n /= 255), (o /= 255);
            var a,
              u,
              i = Math.min(r, n, o),
              l = Math.max(r, n, o),
              c = (l + i) / 2;
            return (
              l === i ? ((a = 0), (u = Number.NaN)) : (a = c < 0.5 ? (l - i) / (l + i) : (l - i) / (2 - l - i)),
              r == l ? (u = (n - o) / (l - i)) : n == l ? (u = 2 + (o - r) / (l - i)) : o == l && (u = 4 + (r - n) / (l - i)),
              (u *= 60) < 0 && (u += 360),
              e.length > 3 && void 0 !== e[3] ? [u, a, c, e[3]] : [u, a, c]
            );
          },
          M = i.unpack,
          x = i.last,
          A = Math.round,
          $ = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = M(e, "rgba"),
              n = x(e) || "rgb";
            return "hsl" == n.substr(0, 3)
              ? P(E(r), n)
              : ((r[0] = A(r[0])),
                (r[1] = A(r[1])),
                (r[2] = A(r[2])),
                ("rgba" === n || (r.length > 3 && r[3] < 1)) && ((r[3] = r.length > 3 ? r[3] : 1), (n = "rgba")),
                n + "(" + r.slice(0, "rgb" === n ? 3 : 4).join(",") + ")");
          },
          L = i.unpack,
          N = Math.round,
          B = function () {
            for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
            var n,
              o,
              a,
              u = (t = L(t, "hsl"))[0],
              i = t[1],
              l = t[2];
            if (0 === i) n = o = a = 255 * l;
            else {
              var c = [0, 0, 0],
                f = [0, 0, 0],
                s = l < 0.5 ? l * (1 + i) : l + i - l * i,
                p = 2 * l - s,
                h = u / 360;
              (c[0] = h + 1 / 3), (c[1] = h), (c[2] = h - 1 / 3);
              for (var v = 0; v < 3; v++)
                c[v] < 0 && (c[v] += 1),
                  c[v] > 1 && (c[v] -= 1),
                  6 * c[v] < 1
                    ? (f[v] = p + 6 * (s - p) * c[v])
                    : 2 * c[v] < 1
                    ? (f[v] = s)
                    : 3 * c[v] < 2
                    ? (f[v] = p + (s - p) * (2 / 3 - c[v]) * 6)
                    : (f[v] = p);
              (n = (e = [N(255 * f[0]), N(255 * f[1]), N(255 * f[2])])[0]), (o = e[1]), (a = e[2]);
            }
            return t.length > 3 ? [n, o, a, t[3]] : [n, o, a, 1];
          },
          I = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
          R = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
          T = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
          D = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
          H = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
          V = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
          U = Math.round,
          G = function (e) {
            var t;
            if (((e = e.toLowerCase().trim()), l.format.named))
              try {
                return l.format.named(e);
              } catch (e) {}
            if ((t = e.match(I))) {
              for (var r = t.slice(1, 4), n = 0; n < 3; n++) r[n] = +r[n];
              return (r[3] = 1), r;
            }
            if ((t = e.match(R))) {
              for (var o = t.slice(1, 5), a = 0; a < 4; a++) o[a] = +o[a];
              return o;
            }
            if ((t = e.match(T))) {
              for (var u = t.slice(1, 4), i = 0; i < 3; i++) u[i] = U(2.55 * u[i]);
              return (u[3] = 1), u;
            }
            if ((t = e.match(D))) {
              for (var c = t.slice(1, 5), f = 0; f < 3; f++) c[f] = U(2.55 * c[f]);
              return (c[3] = +c[3]), c;
            }
            if ((t = e.match(H))) {
              var s = t.slice(1, 4);
              (s[1] *= 0.01), (s[2] *= 0.01);
              var p = B(s);
              return (p[3] = 1), p;
            }
            if ((t = e.match(V))) {
              var h = t.slice(1, 4);
              (h[1] *= 0.01), (h[2] *= 0.01);
              var v = B(h);
              return (v[3] = +t[4]), v;
            }
          };
        G.test = function (e) {
          return I.test(e) || R.test(e) || T.test(e) || D.test(e) || H.test(e) || V.test(e);
        };
        var F = G,
          q = i.type;
        (h.prototype.css = function (e) {
          return $(this._rgb, e);
        }),
          (y.css = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["css"])))();
          }),
          (l.format.css = F),
          l.autodetect.push({
            p: 5,
            test: function (e) {
              for (var t = [], r = arguments.length - 1; r-- > 0; ) t[r] = arguments[r + 1];
              if (!t.length && "string" === q(e) && F.test(e)) return "css";
            },
          });
        var W = i.unpack;
        (l.format.gl = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r = W(e, "rgba");
          return (r[0] *= 255), (r[1] *= 255), (r[2] *= 255), r;
        }),
          (y.gl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["gl"])))();
          }),
          (h.prototype.gl = function () {
            var e = this._rgb;
            return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
          });
        var Y = i.unpack,
          z = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r,
              n = Y(e, "rgb"),
              o = n[0],
              a = n[1],
              u = n[2],
              i = Math.min(o, a, u),
              l = Math.max(o, a, u),
              c = l - i,
              f = (100 * c) / 255,
              s = (i / (255 - c)) * 100;
            return (
              0 === c
                ? (r = Number.NaN)
                : (o === l && (r = (a - u) / c), a === l && (r = 2 + (u - o) / c), u === l && (r = 4 + (o - a) / c), (r *= 60) < 0 && (r += 360)),
              [r, f, s]
            );
          },
          K = i.unpack,
          X = Math.floor,
          Z = function () {
            for (var e, t, r, n, o, a, u = [], i = arguments.length; i--; ) u[i] = arguments[i];
            var l,
              c,
              f,
              s = (u = K(u, "hcg"))[0],
              p = u[1],
              h = u[2];
            h *= 255;
            var v = 255 * p;
            if (0 === p) l = c = f = h;
            else {
              360 === s && (s = 0), s > 360 && (s -= 360), s < 0 && (s += 360);
              var y = X((s /= 60)),
                b = s - y,
                d = h * (1 - p),
                m = d + v * (1 - b),
                g = d + v * b,
                _ = d + v;
              switch (y) {
                case 0:
                  (l = (e = [_, g, d])[0]), (c = e[1]), (f = e[2]);
                  break;
                case 1:
                  (l = (t = [m, _, d])[0]), (c = t[1]), (f = t[2]);
                  break;
                case 2:
                  (l = (r = [d, _, g])[0]), (c = r[1]), (f = r[2]);
                  break;
                case 3:
                  (l = (n = [d, m, _])[0]), (c = n[1]), (f = n[2]);
                  break;
                case 4:
                  (l = (o = [g, d, _])[0]), (c = o[1]), (f = o[2]);
                  break;
                case 5:
                  (l = (a = [_, d, m])[0]), (c = a[1]), (f = a[2]);
              }
            }
            return [l, c, f, u.length > 3 ? u[3] : 1];
          },
          J = i.unpack,
          Q = i.type;
        (h.prototype.hcg = function () {
          return z(this._rgb);
        }),
          (y.hcg = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["hcg"])))();
          }),
          (l.format.hcg = Z),
          l.autodetect.push({
            p: 1,
            test: function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              if (((e = J(e, "hcg")), "array" === Q(e) && 3 === e.length)) return "hcg";
            },
          });
        var ee = i.unpack,
          te = i.last,
          re = Math.round,
          ne = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = ee(e, "rgba"),
              n = r[0],
              o = r[1],
              a = r[2],
              u = r[3],
              i = te(e) || "auto";
            void 0 === u && (u = 1), "auto" === i && (i = u < 1 ? "rgba" : "rgb");
            var l = ((n = re(n)) << 16) | ((o = re(o)) << 8) | (a = re(a)),
              c = "000000" + l.toString(16);
            c = c.substr(c.length - 6);
            var f = "0" + re(255 * u).toString(16);
            switch (((f = f.substr(f.length - 2)), i.toLowerCase())) {
              case "rgba":
                return "#" + c + f;
              case "argb":
                return "#" + f + c;
              default:
                return "#" + c;
            }
          },
          oe = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
          ae = /^#?([A-Fa-f0-9]{8})$/,
          ue = function (e) {
            if (e.match(oe)) {
              (4 !== e.length && 7 !== e.length) || (e = e.substr(1)), 3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
              var t = parseInt(e, 16);
              return [t >> 16, (t >> 8) & 255, 255 & t, 1];
            }
            if (e.match(ae)) {
              9 === e.length && (e = e.substr(1));
              var r = parseInt(e, 16);
              return [(r >> 24) & 255, (r >> 16) & 255, (r >> 8) & 255, Math.round(((255 & r) / 255) * 100) / 100];
            }
            throw new Error("unknown hex color: " + e);
          },
          ie = i.type;
        (h.prototype.hex = function (e) {
          return ne(this._rgb, e);
        }),
          (y.hex = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["hex"])))();
          }),
          (l.format.hex = ue),
          l.autodetect.push({
            p: 4,
            test: function (e) {
              for (var t = [], r = arguments.length - 1; r-- > 0; ) t[r] = arguments[r + 1];
              if (!t.length && "string" === ie(e) && [3, 4, 6, 7, 8, 9].includes(e.length)) return "hex";
            },
          });
        var le = i.unpack,
          ce = i.TWOPI,
          fe = Math.min,
          se = Math.sqrt,
          pe = Math.acos,
          he = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r,
              n = le(e, "rgb"),
              o = n[0],
              a = n[1],
              u = n[2],
              i = fe((o /= 255), (a /= 255), (u /= 255)),
              l = (o + a + u) / 3,
              c = l > 0 ? 1 - i / l : 0;
            return (
              0 === c
                ? (r = NaN)
                : ((r = (o - a + (o - u)) / 2), (r /= se((o - a) * (o - a) + (o - u) * (a - u))), (r = pe(r)), u > a && (r = ce - r), (r /= ce)),
              [360 * r, c, l]
            );
          },
          ve = i.unpack,
          ye = i.limit,
          be = i.TWOPI,
          de = i.PITHIRD,
          me = Math.cos,
          ge = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r,
              n,
              o,
              a = (e = ve(e, "hsi"))[0],
              u = e[1],
              i = e[2];
            return (
              isNaN(a) && (a = 0),
              isNaN(u) && (u = 0),
              a > 360 && (a -= 360),
              a < 0 && (a += 360),
              (a /= 360) < 1 / 3
                ? (n = 1 - ((o = (1 - u) / 3) + (r = (1 + (u * me(be * a)) / me(de - be * a)) / 3)))
                : a < 2 / 3
                ? (o = 1 - ((r = (1 - u) / 3) + (n = (1 + (u * me(be * (a -= 1 / 3))) / me(de - be * a)) / 3)))
                : (r = 1 - ((n = (1 - u) / 3) + (o = (1 + (u * me(be * (a -= 2 / 3))) / me(de - be * a)) / 3))),
              [255 * (r = ye(i * r * 3)), 255 * (n = ye(i * n * 3)), 255 * (o = ye(i * o * 3)), e.length > 3 ? e[3] : 1]
            );
          },
          _e = i.unpack,
          Ce = i.type;
        (h.prototype.hsi = function () {
          return he(this._rgb);
        }),
          (y.hsi = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["hsi"])))();
          }),
          (l.format.hsi = ge),
          l.autodetect.push({
            p: 2,
            test: function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              if (((e = _e(e, "hsi")), "array" === Ce(e) && 3 === e.length)) return "hsi";
            },
          });
        var ke = i.unpack,
          we = i.type;
        (h.prototype.hsl = function () {
          return E(this._rgb);
        }),
          (y.hsl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["hsl"])))();
          }),
          (l.format.hsl = B),
          l.autodetect.push({
            p: 2,
            test: function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              if (((e = ke(e, "hsl")), "array" === we(e) && 3 === e.length)) return "hsl";
            },
          });
        var Oe = i.unpack,
          Se = Math.min,
          Pe = Math.max,
          je = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r,
              n,
              o,
              a = (e = Oe(e, "rgb"))[0],
              u = e[1],
              i = e[2],
              l = Se(a, u, i),
              c = Pe(a, u, i),
              f = c - l;
            return (
              (o = c / 255),
              0 === c
                ? ((r = Number.NaN), (n = 0))
                : ((n = f / c), a === c && (r = (u - i) / f), u === c && (r = 2 + (i - a) / f), i === c && (r = 4 + (a - u) / f), (r *= 60) < 0 && (r += 360)),
              [r, n, o]
            );
          },
          Ee = i.unpack,
          Me = Math.floor,
          xe = function () {
            for (var e, t, r, n, o, a, u = [], i = arguments.length; i--; ) u[i] = arguments[i];
            var l,
              c,
              f,
              s = (u = Ee(u, "hsv"))[0],
              p = u[1],
              h = u[2];
            if (((h *= 255), 0 === p)) l = c = f = h;
            else {
              360 === s && (s = 0), s > 360 && (s -= 360), s < 0 && (s += 360);
              var v = Me((s /= 60)),
                y = s - v,
                b = h * (1 - p),
                d = h * (1 - p * y),
                m = h * (1 - p * (1 - y));
              switch (v) {
                case 0:
                  (l = (e = [h, m, b])[0]), (c = e[1]), (f = e[2]);
                  break;
                case 1:
                  (l = (t = [d, h, b])[0]), (c = t[1]), (f = t[2]);
                  break;
                case 2:
                  (l = (r = [b, h, m])[0]), (c = r[1]), (f = r[2]);
                  break;
                case 3:
                  (l = (n = [b, d, h])[0]), (c = n[1]), (f = n[2]);
                  break;
                case 4:
                  (l = (o = [m, b, h])[0]), (c = o[1]), (f = o[2]);
                  break;
                case 5:
                  (l = (a = [h, b, d])[0]), (c = a[1]), (f = a[2]);
              }
            }
            return [l, c, f, u.length > 3 ? u[3] : 1];
          },
          Ae = i.unpack,
          $e = i.type;
        (h.prototype.hsv = function () {
          return je(this._rgb);
        }),
          (y.hsv = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["hsv"])))();
          }),
          (l.format.hsv = xe),
          l.autodetect.push({
            p: 2,
            test: function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              if (((e = Ae(e, "hsv")), "array" === $e(e) && 3 === e.length)) return "hsv";
            },
          });
        var Le = 18,
          Ne = 0.95047,
          Be = 1,
          Ie = 1.08883,
          Re = 0.137931034,
          Te = 0.206896552,
          De = 0.12841855,
          He = 0.008856452,
          Ve = i.unpack,
          Ue = Math.pow,
          Ge = function (e) {
            return (e /= 255) <= 0.04045 ? e / 12.92 : Ue((e + 0.055) / 1.055, 2.4);
          },
          Fe = function (e) {
            return e > He ? Ue(e, 1 / 3) : e / De + Re;
          },
          qe = function (e, t, r) {
            return (
              (e = Ge(e)),
              (t = Ge(t)),
              (r = Ge(r)),
              [
                Fe((0.4124564 * e + 0.3575761 * t + 0.1804375 * r) / Ne),
                Fe((0.2126729 * e + 0.7151522 * t + 0.072175 * r) / Be),
                Fe((0.0193339 * e + 0.119192 * t + 0.9503041 * r) / Ie),
              ]
            );
          },
          We = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = Ve(e, "rgb"),
              n = r[0],
              o = r[1],
              a = r[2],
              u = qe(n, o, a),
              i = u[0],
              l = u[1],
              c = u[2],
              f = 116 * l - 16;
            return [f < 0 ? 0 : f, 500 * (i - l), 200 * (l - c)];
          },
          Ye = i.unpack,
          ze = Math.pow,
          Ke = function (e) {
            return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * ze(e, 1 / 2.4) - 0.055);
          },
          Xe = function (e) {
            return e > Te ? e * e * e : De * (e - Re);
          },
          Ze = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r,
              n,
              o,
              a = (e = Ye(e, "lab"))[0],
              u = e[1],
              i = e[2];
            return (
              (n = (a + 16) / 116),
              (r = isNaN(u) ? n : n + u / 500),
              (o = isNaN(i) ? n : n - i / 200),
              (n = Be * Xe(n)),
              (r = Ne * Xe(r)),
              (o = Ie * Xe(o)),
              [
                Ke(3.2404542 * r - 1.5371385 * n - 0.4985314 * o),
                Ke(-0.969266 * r + 1.8760108 * n + 0.041556 * o),
                Ke(0.0556434 * r - 0.2040259 * n + 1.0572252 * o),
                e.length > 3 ? e[3] : 1,
              ]
            );
          },
          Je = i.unpack,
          Qe = i.type;
        (h.prototype.lab = function () {
          return We(this._rgb);
        }),
          (y.lab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["lab"])))();
          }),
          (l.format.lab = Ze),
          l.autodetect.push({
            p: 2,
            test: function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              if (((e = Je(e, "lab")), "array" === Qe(e) && 3 === e.length)) return "lab";
            },
          });
        var et = i.unpack,
          tt = i.RAD2DEG,
          rt = Math.sqrt,
          nt = Math.atan2,
          ot = Math.round,
          at = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = et(e, "lab"),
              n = r[0],
              o = r[1],
              a = r[2],
              u = rt(o * o + a * a),
              i = (nt(a, o) * tt + 360) % 360;
            return 0 === ot(1e4 * u) && (i = Number.NaN), [n, u, i];
          },
          ut = i.unpack,
          it = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = ut(e, "rgb"),
              n = r[0],
              o = r[1],
              a = r[2],
              u = We(n, o, a),
              i = u[0],
              l = u[1],
              c = u[2];
            return at(i, l, c);
          },
          lt = i.unpack,
          ct = i.DEG2RAD,
          ft = Math.sin,
          st = Math.cos,
          pt = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = lt(e, "lch"),
              n = r[0],
              o = r[1],
              a = r[2];
            return isNaN(a) && (a = 0), [n, st((a *= ct)) * o, ft(a) * o];
          },
          ht = i.unpack,
          vt = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = (e = ht(e, "lch"))[0],
              n = e[1],
              o = e[2],
              a = pt(r, n, o),
              u = a[0],
              i = a[1],
              l = a[2],
              c = Ze(u, i, l),
              f = c[0],
              s = c[1],
              p = c[2];
            return [f, s, p, e.length > 3 ? e[3] : 1];
          },
          yt = i.unpack,
          bt = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = yt(e, "hcl").reverse();
            return vt.apply(void 0, r);
          },
          dt = i.unpack,
          mt = i.type;
        (h.prototype.lch = function () {
          return it(this._rgb);
        }),
          (h.prototype.hcl = function () {
            return it(this._rgb).reverse();
          }),
          (y.lch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["lch"])))();
          }),
          (y.hcl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["hcl"])))();
          }),
          (l.format.lch = vt),
          (l.format.hcl = bt),
          ["lch", "hcl"].forEach(function (e) {
            return l.autodetect.push({
              p: 2,
              test: function () {
                for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
                if (((t = dt(t, e)), "array" === mt(t) && 3 === t.length)) return e;
              },
            });
          });
        var gt = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflower: "#6495ed",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            laserlemon: "#ffff54",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrod: "#fafad2",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            maroon2: "#7f0000",
            maroon3: "#b03060",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            purple2: "#7f007f",
            purple3: "#a020f0",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32",
          },
          _t = i.type;
        (h.prototype.name = function () {
          for (var e = ne(this._rgb, "rgb"), t = 0, r = Object.keys(gt); t < r.length; t += 1) {
            var n = r[t];
            if (gt[n] === e) return n.toLowerCase();
          }
          return e;
        }),
          (l.format.named = function (e) {
            if (((e = e.toLowerCase()), gt[e])) return ue(gt[e]);
            throw new Error("unknown color name: " + e);
          }),
          l.autodetect.push({
            p: 5,
            test: function (e) {
              for (var t = [], r = arguments.length - 1; r-- > 0; ) t[r] = arguments[r + 1];
              if (!t.length && "string" === _t(e) && gt[e.toLowerCase()]) return "named";
            },
          });
        var Ct = i.unpack,
          kt = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = Ct(e, "rgb"),
              n = r[0],
              o = r[1],
              a = r[2];
            return (n << 16) + (o << 8) + a;
          },
          wt = i.type,
          Ot = function (e) {
            if ("number" == wt(e) && e >= 0 && e <= 16777215) return [e >> 16, (e >> 8) & 255, 255 & e, 1];
            throw new Error("unknown num color: " + e);
          },
          St = i.type;
        (h.prototype.num = function () {
          return kt(this._rgb);
        }),
          (y.num = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["num"])))();
          }),
          (l.format.num = Ot),
          l.autodetect.push({
            p: 5,
            test: function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              if (1 === e.length && "number" === St(e[0]) && e[0] >= 0 && e[0] <= 16777215) return "num";
            },
          });
        var Pt = i.unpack,
          jt = i.type,
          Et = Math.round;
        (h.prototype.rgb = function (e) {
          return void 0 === e && (e = !0), !1 === e ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Et);
        }),
          (h.prototype.rgba = function (e) {
            return (
              void 0 === e && (e = !0),
              this._rgb.slice(0, 4).map(function (t, r) {
                return r < 3 ? (!1 === e ? t : Et(t)) : t;
              })
            );
          }),
          (y.rgb = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["rgb"])))();
          }),
          (l.format.rgb = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = Pt(e, "rgba");
            return void 0 === r[3] && (r[3] = 1), r;
          }),
          l.autodetect.push({
            p: 3,
            test: function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              if (((e = Pt(e, "rgba")), "array" === jt(e) && (3 === e.length || (4 === e.length && "number" == jt(e[3]) && e[3] >= 0 && e[3] <= 1))))
                return "rgb";
            },
          });
        var Mt = Math.log,
          xt = function (e) {
            var t,
              r,
              n,
              o = e / 100;
            return (
              o < 66
                ? ((t = 255),
                  (r = -155.25485562709179 - 0.44596950469579133 * (r = o - 2) + 104.49216199393888 * Mt(r)),
                  (n = o < 20 ? 0 : 0.8274096064007395 * (n = o - 10) - 254.76935184120902 + 115.67994401066147 * Mt(n)))
                : ((t = 351.97690566805693 + 0.114206453784165 * (t = o - 55) - 40.25366309332127 * Mt(t)),
                  (r = 325.4494125711974 + 0.07943456536662342 * (r = o - 50) - 28.0852963507957 * Mt(r)),
                  (n = 255)),
              [t, r, n, 1]
            );
          },
          At = i.unpack,
          $t = Math.round,
          Lt = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            for (var r, n = At(e, "rgb"), o = n[0], a = n[2], u = 1e3, i = 4e4, l = 0.4; i - u > l; ) {
              var c = xt((r = 0.5 * (i + u)));
              c[2] / c[0] >= a / o ? (i = r) : (u = r);
            }
            return $t(r);
          };
        (h.prototype.temp =
          h.prototype.kelvin =
          h.prototype.temperature =
            function () {
              return Lt(this._rgb);
            }),
          (y.temp =
            y.kelvin =
            y.temperature =
              function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(h, [null].concat(e, ["temp"])))();
              }),
          (l.format.temp = l.format.kelvin = l.format.temperature = xt);
        var Nt = i.type;
        (h.prototype.alpha = function (e, t) {
          return (
            void 0 === t && (t = !1),
            void 0 !== e && "number" === Nt(e) ? (t ? ((this._rgb[3] = e), this) : new h([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")) : this._rgb[3]
          );
        }),
          (h.prototype.clipped = function () {
            return this._rgb._clipped || !1;
          }),
          (h.prototype.darken = function (e) {
            void 0 === e && (e = 1);
            var t = this.lab();
            return (t[0] -= Le * e), new h(t, "lab").alpha(this.alpha(), !0);
          }),
          (h.prototype.brighten = function (e) {
            return void 0 === e && (e = 1), this.darken(-e);
          }),
          (h.prototype.darker = h.prototype.darken),
          (h.prototype.brighter = h.prototype.brighten),
          (h.prototype.get = function (e) {
            var t = e.split("."),
              r = t[0],
              n = t[1],
              o = this[r]();
            if (n) {
              var a = r.indexOf(n);
              if (a > -1) return o[a];
              throw new Error("unknown channel " + n + " in mode " + r);
            }
            return o;
          });
        var Bt = i.type,
          It = Math.pow;
        h.prototype.luminance = function (e) {
          if (void 0 !== e && "number" === Bt(e)) {
            if (0 === e) return new h([0, 0, 0, this._rgb[3]], "rgb");
            if (1 === e) return new h([255, 255, 255, this._rgb[3]], "rgb");
            var t = this.luminance(),
              r = 20,
              n = function (t, o) {
                var a = t.interpolate(o, 0.5, "rgb"),
                  u = a.luminance();
                return Math.abs(e - u) < 1e-7 || !r-- ? a : u > e ? n(t, a) : n(a, o);
              },
              o = (t > e ? n(new h([0, 0, 0]), this) : n(this, new h([255, 255, 255]))).rgb();
            return new h(o.concat([this._rgb[3]]));
          }
          return Rt.apply(void 0, this._rgb.slice(0, 3));
        };
        var Rt = function (e, t, r) {
            return 0.2126 * (e = Tt(e)) + 0.7152 * (t = Tt(t)) + 0.0722 * (r = Tt(r));
          },
          Tt = function (e) {
            return (e /= 255) <= 0.03928 ? e / 12.92 : It((e + 0.055) / 1.055, 2.4);
          },
          Dt = {},
          Ht = i.type,
          Vt = function (e, t, r) {
            void 0 === r && (r = 0.5);
            for (var n = [], o = arguments.length - 3; o-- > 0; ) n[o] = arguments[o + 3];
            var a = n[0] || "lrgb";
            if ((Dt[a] || n.length || (a = Object.keys(Dt)[0]), !Dt[a])) throw new Error("interpolation mode " + a + " is not defined");
            return "object" !== Ht(e) && (e = new h(e)), "object" !== Ht(t) && (t = new h(t)), Dt[a](e, t, r).alpha(e.alpha() + r * (t.alpha() - e.alpha()));
          };
        (h.prototype.mix = h.prototype.interpolate =
          function (e, t) {
            void 0 === t && (t = 0.5);
            for (var r = [], n = arguments.length - 2; n-- > 0; ) r[n] = arguments[n + 2];
            return Vt.apply(void 0, [this, e, t].concat(r));
          }),
          (h.prototype.premultiply = function (e) {
            void 0 === e && (e = !1);
            var t = this._rgb,
              r = t[3];
            return e ? ((this._rgb = [t[0] * r, t[1] * r, t[2] * r, r]), this) : new h([t[0] * r, t[1] * r, t[2] * r, r], "rgb");
          }),
          (h.prototype.saturate = function (e) {
            void 0 === e && (e = 1);
            var t = this.lch();
            return (t[1] += Le * e), t[1] < 0 && (t[1] = 0), new h(t, "lch").alpha(this.alpha(), !0);
          }),
          (h.prototype.desaturate = function (e) {
            return void 0 === e && (e = 1), this.saturate(-e);
          });
        var Ut = i.type;
        (h.prototype.set = function (e, t, r) {
          void 0 === r && (r = !1);
          var n = e.split("."),
            o = n[0],
            a = n[1],
            u = this[o]();
          if (a) {
            var i = o.indexOf(a);
            if (i > -1) {
              if ("string" == Ut(t))
                switch (t.charAt(0)) {
                  case "+":
                  case "-":
                    u[i] += +t;
                    break;
                  case "*":
                    u[i] *= +t.substr(1);
                    break;
                  case "/":
                    u[i] /= +t.substr(1);
                    break;
                  default:
                    u[i] = +t;
                }
              else {
                if ("number" !== Ut(t)) throw new Error("unsupported value for Color.set");
                u[i] = t;
              }
              var l = new h(u, o);
              return r ? ((this._rgb = l._rgb), this) : l;
            }
            throw new Error("unknown channel " + a + " in mode " + o);
          }
          return u;
        }),
          (Dt.rgb = function (e, t, r) {
            var n = e._rgb,
              o = t._rgb;
            return new h(n[0] + r * (o[0] - n[0]), n[1] + r * (o[1] - n[1]), n[2] + r * (o[2] - n[2]), "rgb");
          });
        var Gt = Math.sqrt,
          Ft = Math.pow;
        (Dt.lrgb = function (e, t, r) {
          var n = e._rgb,
            o = n[0],
            a = n[1],
            u = n[2],
            i = t._rgb,
            l = i[0],
            c = i[1],
            f = i[2];
          return new h(Gt(Ft(o, 2) * (1 - r) + Ft(l, 2) * r), Gt(Ft(a, 2) * (1 - r) + Ft(c, 2) * r), Gt(Ft(u, 2) * (1 - r) + Ft(f, 2) * r), "rgb");
        }),
          (Dt.lab = function (e, t, r) {
            var n = e.lab(),
              o = t.lab();
            return new h(n[0] + r * (o[0] - n[0]), n[1] + r * (o[1] - n[1]), n[2] + r * (o[2] - n[2]), "lab");
          });
        var qt = function (e, t, r, n) {
            var o, a, u, i, l, c, f, s, p, v, y, b;
            return (
              "hsl" === n
                ? ((u = e.hsl()), (i = t.hsl()))
                : "hsv" === n
                ? ((u = e.hsv()), (i = t.hsv()))
                : "hcg" === n
                ? ((u = e.hcg()), (i = t.hcg()))
                : "hsi" === n
                ? ((u = e.hsi()), (i = t.hsi()))
                : ("lch" !== n && "hcl" !== n) || ((n = "hcl"), (u = e.hcl()), (i = t.hcl())),
              "h" === n.substr(0, 1) && ((l = (o = u)[0]), (f = o[1]), (p = o[2]), (c = (a = i)[0]), (s = a[1]), (v = a[2])),
              isNaN(l) || isNaN(c)
                ? isNaN(l)
                  ? isNaN(c)
                    ? (b = Number.NaN)
                    : ((b = c), (1 != p && 0 != p) || "hsv" == n || (y = s))
                  : ((b = l), (1 != v && 0 != v) || "hsv" == n || (y = f))
                : (b = l + r * (c > l && c - l > 180 ? c - (l + 360) : c < l && l - c > 180 ? c + 360 - l : c - l)),
              void 0 === y && (y = f + r * (s - f)),
              new h([b, y, p + r * (v - p)], n)
            );
          },
          Wt = function (e, t, r) {
            return qt(e, t, r, "lch");
          };
        (Dt.lch = Wt),
          (Dt.hcl = Wt),
          (Dt.num = function (e, t, r) {
            var n = e.num(),
              o = t.num();
            return new h(n + r * (o - n), "num");
          }),
          (Dt.hcg = function (e, t, r) {
            return qt(e, t, r, "hcg");
          }),
          (Dt.hsi = function (e, t, r) {
            return qt(e, t, r, "hsi");
          }),
          (Dt.hsl = function (e, t, r) {
            return qt(e, t, r, "hsl");
          }),
          (Dt.hsv = function (e, t, r) {
            return qt(e, t, r, "hsv");
          });
        var Yt = i.clip_rgb,
          zt = Math.pow,
          Kt = Math.sqrt,
          Xt = Math.PI,
          Zt = Math.cos,
          Jt = Math.sin,
          Qt = Math.atan2,
          er = function (e) {
            for (var t = 1 / e.length, r = [0, 0, 0, 0], n = 0, o = e; n < o.length; n += 1) {
              var a = o[n]._rgb;
              (r[0] += zt(a[0], 2) * t), (r[1] += zt(a[1], 2) * t), (r[2] += zt(a[2], 2) * t), (r[3] += a[3] * t);
            }
            return (r[0] = Kt(r[0])), (r[1] = Kt(r[1])), (r[2] = Kt(r[2])), r[3] > 0.9999999 && (r[3] = 1), new h(Yt(r));
          },
          tr = i.type,
          rr = Math.pow,
          nr = function (e) {
            var t = "rgb",
              r = y("#ccc"),
              n = 0,
              o = [0, 1],
              a = [],
              u = [0, 0],
              i = !1,
              l = [],
              c = !1,
              f = 0,
              s = 1,
              p = !1,
              h = {},
              v = !0,
              b = 1,
              d = function (e) {
                if (
                  ((e = e || ["#fff", "#000"]) && "string" === tr(e) && y.brewer && y.brewer[e.toLowerCase()] && (e = y.brewer[e.toLowerCase()]),
                  "array" === tr(e))
                ) {
                  1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0));
                  for (var t = 0; t < e.length; t++) e[t] = y(e[t]);
                  a.length = 0;
                  for (var r = 0; r < e.length; r++) a.push(r / (e.length - 1));
                }
                return _(), (l = e);
              },
              m = function (e) {
                return e;
              },
              g = function (e, n) {
                var o, c;
                if ((null == n && (n = !1), isNaN(e) || null === e)) return r;
                (c = n
                  ? e
                  : i && i.length > 2
                  ? (function (e) {
                      if (null != i) {
                        for (var t = i.length - 1, r = 0; r < t && e >= i[r]; ) r++;
                        return r - 1;
                      }
                      return 0;
                    })(e) /
                    (i.length - 2)
                  : s !== f
                  ? (e - f) / (s - f)
                  : 1),
                  n || (c = m(c)),
                  1 !== b && (c = rr(c, b)),
                  (c = u[0] + c * (1 - u[0] - u[1])),
                  (c = Math.min(1, Math.max(0, c)));
                var p = Math.floor(1e4 * c);
                if (v && h[p]) o = h[p];
                else {
                  if ("array" === tr(l))
                    for (var d = 0; d < a.length; d++) {
                      var g = a[d];
                      if (c <= g) {
                        o = l[d];
                        break;
                      }
                      if (c >= g && d === a.length - 1) {
                        o = l[d];
                        break;
                      }
                      if (c > g && c < a[d + 1]) {
                        (c = (c - g) / (a[d + 1] - g)), (o = y.interpolate(l[d], l[d + 1], c, t));
                        break;
                      }
                    }
                  else "function" === tr(l) && (o = l(c));
                  v && (h[p] = o);
                }
                return o;
              },
              _ = function () {
                return (h = {});
              };
            d(e);
            var C = function (e) {
              var t = y(g(e));
              return c && t[c] ? t[c]() : t;
            };
            return (
              (C.classes = function (e) {
                if (null != e) {
                  if ("array" === tr(e)) (i = e), (o = [e[0], e[e.length - 1]]);
                  else {
                    var t = y.analyze(o);
                    i = 0 === e ? [t.min, t.max] : y.limits(t, "e", e);
                  }
                  return C;
                }
                return i;
              }),
              (C.domain = function (e) {
                if (!arguments.length) return o;
                (f = e[0]), (s = e[e.length - 1]), (a = []);
                var t = l.length;
                if (e.length === t && f !== s)
                  for (var r = 0, n = Array.from(e); r < n.length; r += 1) {
                    var u = n[r];
                    a.push((u - f) / (s - f));
                  }
                else for (var i = 0; i < t; i++) a.push(i / (t - 1));
                return (o = [f, s]), C;
              }),
              (C.mode = function (e) {
                return arguments.length ? ((t = e), _(), C) : t;
              }),
              (C.range = function (e, t) {
                return d(e), C;
              }),
              (C.out = function (e) {
                return (c = e), C;
              }),
              (C.spread = function (e) {
                return arguments.length ? ((n = e), C) : n;
              }),
              (C.correctLightness = function (e) {
                return (
                  null == e && (e = !0),
                  (p = e),
                  _(),
                  (m = p
                    ? function (e) {
                        for (
                          var t = g(0, !0).lab()[0],
                            r = g(1, !0).lab()[0],
                            n = t > r,
                            o = g(e, !0).lab()[0],
                            a = t + (r - t) * e,
                            u = o - a,
                            i = 0,
                            l = 1,
                            c = 20;
                          Math.abs(u) > 0.01 && c-- > 0;

                        )
                          n && (u *= -1), u < 0 ? ((i = e), (e += 0.5 * (l - e))) : ((l = e), (e += 0.5 * (i - e))), (o = g(e, !0).lab()[0]), (u = o - a);
                        return e;
                      }
                    : function (e) {
                        return e;
                      }),
                  C
                );
              }),
              (C.padding = function (e) {
                return null != e ? ("number" === tr(e) && (e = [e, e]), (u = e), C) : u;
              }),
              (C.colors = function (t, r) {
                arguments.length < 2 && (r = "hex");
                var n = [];
                if (0 === arguments.length) n = l.slice(0);
                else if (1 === t) n = [C(0.5)];
                else if (t > 1) {
                  var a = o[0],
                    u = o[1] - a;
                  n = or(0, t, !1).map(function (e) {
                    return C(a + (e / (t - 1)) * u);
                  });
                } else {
                  e = [];
                  var c = [];
                  if (i && i.length > 2) for (var f = 1, s = i.length, p = 1 <= s; p ? f < s : f > s; p ? f++ : f--) c.push(0.5 * (i[f - 1] + i[f]));
                  else c = o;
                  n = c.map(function (e) {
                    return C(e);
                  });
                }
                return (
                  y[r] &&
                    (n = n.map(function (e) {
                      return e[r]();
                    })),
                  n
                );
              }),
              (C.cache = function (e) {
                return null != e ? ((v = e), C) : v;
              }),
              (C.gamma = function (e) {
                return null != e ? ((b = e), C) : b;
              }),
              (C.nodata = function (e) {
                return null != e ? ((r = y(e)), C) : r;
              }),
              C
            );
          };
        function or(e, t, r) {
          for (var n = [], o = e < t, a = r ? (o ? t + 1 : t - 1) : t, u = e; o ? u < a : u > a; o ? u++ : u--) n.push(u);
          return n;
        }
        var ar = function (e) {
            var t, r, n, o, a, u, i;
            if (
              2 ===
              (e = e.map(function (e) {
                return new h(e);
              })).length
            )
              (t = e.map(function (e) {
                return e.lab();
              })),
                (a = t[0]),
                (u = t[1]),
                (o = function (e) {
                  var t = [0, 1, 2].map(function (t) {
                    return a[t] + e * (u[t] - a[t]);
                  });
                  return new h(t, "lab");
                });
            else if (3 === e.length)
              (r = e.map(function (e) {
                return e.lab();
              })),
                (a = r[0]),
                (u = r[1]),
                (i = r[2]),
                (o = function (e) {
                  var t = [0, 1, 2].map(function (t) {
                    return (1 - e) * (1 - e) * a[t] + 2 * (1 - e) * e * u[t] + e * e * i[t];
                  });
                  return new h(t, "lab");
                });
            else if (4 === e.length) {
              var l;
              (n = e.map(function (e) {
                return e.lab();
              })),
                (a = n[0]),
                (u = n[1]),
                (i = n[2]),
                (l = n[3]),
                (o = function (e) {
                  var t = [0, 1, 2].map(function (t) {
                    return (1 - e) * (1 - e) * (1 - e) * a[t] + 3 * (1 - e) * (1 - e) * e * u[t] + 3 * (1 - e) * e * e * i[t] + e * e * e * l[t];
                  });
                  return new h(t, "lab");
                });
            } else if (5 === e.length) {
              var c = ar(e.slice(0, 3)),
                f = ar(e.slice(2, 5));
              o = function (e) {
                return e < 0.5 ? c(2 * e) : f(2 * (e - 0.5));
              };
            }
            return o;
          },
          ur = function (e, t, r) {
            if (!ur[r]) throw new Error("unknown blend mode " + r);
            return ur[r](e, t);
          },
          ir = function (e) {
            return function (t, r) {
              var n = y(r).rgb(),
                o = y(t).rgb();
              return y.rgb(e(n, o));
            };
          },
          lr = function (e) {
            return function (t, r) {
              var n = [];
              return (n[0] = e(t[0], r[0])), (n[1] = e(t[1], r[1])), (n[2] = e(t[2], r[2])), n;
            };
          };
        (ur.normal = ir(
          lr(function (e) {
            return e;
          })
        )),
          (ur.multiply = ir(
            lr(function (e, t) {
              return (e * t) / 255;
            })
          )),
          (ur.screen = ir(
            lr(function (e, t) {
              return 255 * (1 - (1 - e / 255) * (1 - t / 255));
            })
          )),
          (ur.overlay = ir(
            lr(function (e, t) {
              return t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
            })
          )),
          (ur.darken = ir(
            lr(function (e, t) {
              return e > t ? t : e;
            })
          )),
          (ur.lighten = ir(
            lr(function (e, t) {
              return e > t ? e : t;
            })
          )),
          (ur.dodge = ir(
            lr(function (e, t) {
              return 255 === e ? 255 : (e = ((t / 255) * 255) / (1 - e / 255)) > 255 ? 255 : e;
            })
          )),
          (ur.burn = ir(
            lr(function (e, t) {
              return 255 * (1 - (1 - t / 255) / (e / 255));
            })
          ));
        for (
          var cr = ur,
            fr = i.type,
            sr = i.clip_rgb,
            pr = i.TWOPI,
            hr = Math.pow,
            vr = Math.sin,
            yr = Math.cos,
            br = Math.floor,
            dr = Math.random,
            mr = Math.log,
            gr = Math.pow,
            _r = Math.floor,
            Cr = Math.abs,
            kr = function (e, t) {
              void 0 === t && (t = null);
              var r = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 };
              return (
                "object" === a(e) && (e = Object.values(e)),
                e.forEach(function (e) {
                  t && "object" === a(e) && (e = e[t]),
                    null == e || isNaN(e) || (r.values.push(e), (r.sum += e), e < r.min && (r.min = e), e > r.max && (r.max = e), (r.count += 1));
                }),
                (r.domain = [r.min, r.max]),
                (r.limits = function (e, t) {
                  return wr(r, e, t);
                }),
                r
              );
            },
            wr = function (e, t, r) {
              void 0 === t && (t = "equal"), void 0 === r && (r = 7), "array" == a(e) && (e = kr(e));
              var n = e.min,
                o = e.max,
                u = e.values.sort(function (e, t) {
                  return e - t;
                });
              if (1 === r) return [n, o];
              var i = [];
              if (("c" === t.substr(0, 1) && (i.push(n), i.push(o)), "e" === t.substr(0, 1))) {
                i.push(n);
                for (var l = 1; l < r; l++) i.push(n + (l / r) * (o - n));
                i.push(o);
              } else if ("l" === t.substr(0, 1)) {
                if (n <= 0) throw new Error("Logarithmic scales are only possible for values > 0");
                var c = Math.LOG10E * mr(n),
                  f = Math.LOG10E * mr(o);
                i.push(n);
                for (var s = 1; s < r; s++) i.push(gr(10, c + (s / r) * (f - c)));
                i.push(o);
              } else if ("q" === t.substr(0, 1)) {
                i.push(n);
                for (var p = 1; p < r; p++) {
                  var h = ((u.length - 1) * p) / r,
                    v = _r(h);
                  if (v === h) i.push(u[v]);
                  else {
                    var y = h - v;
                    i.push(u[v] * (1 - y) + u[v + 1] * y);
                  }
                }
                i.push(o);
              } else if ("k" === t.substr(0, 1)) {
                var b,
                  d = u.length,
                  m = new Array(d),
                  g = new Array(r),
                  _ = !0,
                  C = 0,
                  k = null;
                (k = []).push(n);
                for (var w = 1; w < r; w++) k.push(n + (w / r) * (o - n));
                for (k.push(o); _; ) {
                  for (var O = 0; O < r; O++) g[O] = 0;
                  for (var S = 0; S < d; S++)
                    for (var P = u[S], j = Number.MAX_VALUE, E = void 0, M = 0; M < r; M++) {
                      var x = Cr(k[M] - P);
                      x < j && ((j = x), (E = M)), g[E]++, (m[S] = E);
                    }
                  for (var A = new Array(r), $ = 0; $ < r; $++) A[$] = null;
                  for (var L = 0; L < d; L++) null === A[(b = m[L])] ? (A[b] = u[L]) : (A[b] += u[L]);
                  for (var N = 0; N < r; N++) A[N] *= 1 / g[N];
                  _ = !1;
                  for (var B = 0; B < r; B++)
                    if (A[B] !== k[B]) {
                      _ = !0;
                      break;
                    }
                  (k = A), ++C > 200 && (_ = !1);
                }
                for (var I = {}, R = 0; R < r; R++) I[R] = [];
                for (var T = 0; T < d; T++) I[(b = m[T])].push(u[T]);
                for (var D = [], H = 0; H < r; H++) D.push(I[H][0]), D.push(I[H][I[H].length - 1]);
                (D = D.sort(function (e, t) {
                  return e - t;
                })),
                  i.push(D[0]);
                for (var V = 1; V < D.length; V += 2) {
                  var U = D[V];
                  isNaN(U) || -1 !== i.indexOf(U) || i.push(U);
                }
              }
              return i;
            },
            Or = { analyze: kr, limits: wr },
            Sr = Math.sqrt,
            Pr = Math.atan2,
            jr = Math.abs,
            Er = Math.cos,
            Mr = Math.PI,
            xr = {
              cool: function () {
                return nr([y.hsl(180, 1, 0.9), y.hsl(250, 0.7, 0.4)]);
              },
              hot: function () {
                return nr(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
              },
            },
            Ar = {
              OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
              PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
              BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
              Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
              BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
              YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
              YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
              Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
              RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
              Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
              YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
              Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
              GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
              Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
              YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
              PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
              Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
              PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
              Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
              Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
              RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
              RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
              PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
              PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
              RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
              BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
              RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
              PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
              Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
              Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
              Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
              Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
              Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
              Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
              Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
              Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"],
            },
            $r = 0,
            Lr = Object.keys(Ar);
          $r < Lr.length;
          $r += 1
        ) {
          var Nr = Lr[$r];
          Ar[Nr.toLowerCase()] = Ar[Nr];
        }
        var Br = Ar;
        return (
          (y.average = function (e, t) {
            void 0 === t && (t = "lrgb");
            var r = e.length;
            if (
              ((e = e.map(function (e) {
                return new h(e);
              })),
              "lrgb" === t)
            )
              return er(e);
            for (var n = e.shift(), o = n.get(t), a = [], u = 0, i = 0, l = 0; l < o.length; l++)
              if (((o[l] = o[l] || 0), a.push(isNaN(o[l]) ? 0 : 1), "h" === t.charAt(l) && !isNaN(o[l]))) {
                var c = (o[l] / 180) * Xt;
                (u += Zt(c)), (i += Jt(c));
              }
            var f = n.alpha();
            e.forEach(function (e) {
              var r = e.get(t);
              f += e.alpha();
              for (var n = 0; n < o.length; n++)
                if (!isNaN(r[n]))
                  if ((a[n]++, "h" === t.charAt(n))) {
                    var l = (r[n] / 180) * Xt;
                    (u += Zt(l)), (i += Jt(l));
                  } else o[n] += r[n];
            });
            for (var s = 0; s < o.length; s++)
              if ("h" === t.charAt(s)) {
                for (var p = (Qt(i / a[s], u / a[s]) / Xt) * 180; p < 0; ) p += 360;
                for (; p >= 360; ) p -= 360;
                o[s] = p;
              } else o[s] = o[s] / a[s];
            return (f /= r), new h(o, t).alpha(f > 0.99999 ? 1 : f, !0);
          }),
          (y.bezier = function (e) {
            var t = ar(e);
            return (
              (t.scale = function () {
                return nr(t);
              }),
              t
            );
          }),
          (y.blend = cr),
          (y.cubehelix = function (e, t, r, n, o) {
            void 0 === e && (e = 300), void 0 === t && (t = -1.5), void 0 === r && (r = 1), void 0 === n && (n = 1), void 0 === o && (o = [0, 1]);
            var a,
              u = 0;
            "array" === fr(o) ? (a = o[1] - o[0]) : ((a = 0), (o = [o, o]));
            var i = function (i) {
              var l = pr * ((e + 120) / 360 + t * i),
                c = hr(o[0] + a * i, n),
                f = ((0 !== u ? r[0] + i * u : r) * c * (1 - c)) / 2,
                s = yr(l),
                p = vr(l);
              return y(sr([255 * (c + f * (-0.14861 * s + 1.78277 * p)), 255 * (c + f * (-0.29227 * s - 0.90649 * p)), 255 * (c + f * (1.97294 * s)), 1]));
            };
            return (
              (i.start = function (t) {
                return null == t ? e : ((e = t), i);
              }),
              (i.rotations = function (e) {
                return null == e ? t : ((t = e), i);
              }),
              (i.gamma = function (e) {
                return null == e ? n : ((n = e), i);
              }),
              (i.hue = function (e) {
                return null == e ? r : ("array" === fr((r = e)) ? 0 == (u = r[1] - r[0]) && (r = r[1]) : (u = 0), i);
              }),
              (i.lightness = function (e) {
                return null == e ? o : ("array" === fr(e) ? ((o = e), (a = e[1] - e[0])) : ((o = [e, e]), (a = 0)), i);
              }),
              (i.scale = function () {
                return y.scale(i);
              }),
              i.hue(r),
              i
            );
          }),
          (y.mix = y.interpolate = Vt),
          (y.random = function () {
            for (var e = "#", t = 0; t < 6; t++) e += "0123456789abcdef".charAt(br(16 * dr()));
            return new h(e, "hex");
          }),
          (y.scale = nr),
          (y.analyze = Or.analyze),
          (y.contrast = function (e, t) {
            (e = new h(e)), (t = new h(t));
            var r = e.luminance(),
              n = t.luminance();
            return r > n ? (r + 0.05) / (n + 0.05) : (n + 0.05) / (r + 0.05);
          }),
          (y.deltaE = function (e, t, r, n) {
            void 0 === r && (r = 1), void 0 === n && (n = 1), (e = new h(e)), (t = new h(t));
            for (
              var o = Array.from(e.lab()),
                a = o[0],
                u = o[1],
                i = o[2],
                l = Array.from(t.lab()),
                c = l[0],
                f = l[1],
                s = l[2],
                p = Sr(u * u + i * i),
                v = Sr(f * f + s * s),
                y = a < 16 ? 0.511 : (0.040975 * a) / (1 + 0.01765 * a),
                b = (0.0638 * p) / (1 + 0.0131 * p) + 0.638,
                d = p < 1e-6 ? 0 : (180 * Pr(i, u)) / Mr;
              d < 0;

            )
              d += 360;
            for (; d >= 360; ) d -= 360;
            var m = d >= 164 && d <= 345 ? 0.56 + jr(0.2 * Er((Mr * (d + 168)) / 180)) : 0.36 + jr(0.4 * Er((Mr * (d + 35)) / 180)),
              g = p * p * p * p,
              _ = Sr(g / (g + 1900)),
              C = b * (_ * m + 1 - _),
              k = p - v,
              w = u - f,
              O = i - s,
              S = (a - c) / (r * y),
              P = k / (n * b);
            return Sr(S * S + P * P + (w * w + O * O - k * k) / (C * C));
          }),
          (y.distance = function (e, t, r) {
            void 0 === r && (r = "lab"), (e = new h(e)), (t = new h(t));
            var n = e.get(r),
              o = t.get(r),
              a = 0;
            for (var u in n) {
              var i = (n[u] || 0) - (o[u] || 0);
              a += i * i;
            }
            return Math.sqrt(a);
          }),
          (y.limits = Or.limits),
          (y.valid = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            try {
              return new (Function.prototype.bind.apply(h, [null].concat(e)))(), !0;
            } catch (e) {
              return !1;
            }
          }),
          (y.scales = xr),
          (y.colors = gt),
          (y.brewer = Br),
          y
        );
      })();
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
      var Utils = _interopRequireWildcard(__webpack_require__(1)),
        _ValueType = _interopRequireDefault(__webpack_require__(4)),
        _nodes = __webpack_require__(8);
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
              n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
            }
        return (t.default = e), t;
      }
      function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
      }
      var EvaluatorBase = (function () {
        function EvaluatorBase(e) {
          if ((_classCallCheck(this, EvaluatorBase), this.constructor === EvaluatorBase)) throw new Error("Can't instantiate abstract class");
          this.$type = "evaluator.".concat(e);
        }
        return (
          _createClass(EvaluatorBase, [
            {
              key: "evalProgram",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalStatement",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalParentheses",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalNumberLiteral",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalPercent",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalArrayLiteral",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalArrayElement",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorNameLiteral",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorHexLiteral",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorByNumber",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorByTemperature",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorByWavelength",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorBySpaceParams",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalRandomColor",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalScale",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalBezier",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalCubehelix",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalBrewerConst",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalParam",
              value: function (e) {
                var t = this,
                  r = e.obj.evaluate(this.core),
                  n = Utils.getType(r),
                  o = [];
                switch (n) {
                  case _ValueType.default.Color:
                    o = this._getColorParamDefs();
                    break;
                  case _ValueType.default.ColorScale:
                    o = this._getColorScaleParamDefs(r.name);
                }
                return (
                  !o.length &&
                    n & _ValueType.default.Array &&
                    o.push({
                      re: /^\d+$/i,
                      get: function (e) {
                        return t.evalArrayElement(e);
                      },
                    }),
                  this._manageParam(e, o)
                );
              },
            },
            {
              key: "evalManageColorNumber",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorTemperature",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorLuminance",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorAlpha",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompRgbR",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompRgbG",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompRgbB",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompCmykC",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompCmykM",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompCmykY",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompCmykK",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompHslH",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompHslS",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompHslL",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompHsvH",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompHsvS",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompHsvV",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompHsiH",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompHsiS",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompHsiI",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompLabL",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompLabA",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompLabB",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompLchL",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompLchC",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalManageColorCompLchH",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalSetColorScalePadding",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalSetScaleDomain",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalSetCubehelixStart",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalSetCubehelixRotations",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalSetCubehelixHue",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalSetCubehelixGamma",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalSetCubehelixLightness",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalUnaryOperation",
              value: function (e) {
                switch (e.operator) {
                  case "-":
                    return this.evalUnaryMinus(e);
                  case "~":
                    return this.evalColorInverse(e);
                  case "+":
                    return this.evalCorrectLightness(e);
                  default:
                    throw "invalid operator: ".concat(e.operator);
                }
              },
            },
            {
              key: "evalUnaryMinus",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorInverse",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalCorrectLightness",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalBinaryOperation",
              value: function (e) {
                var t = e.left.evaluate(this.core),
                  r = e.right.evaluate(this.core),
                  n = [t, r].every(function (e) {
                    return Utils.getType(e) === _ValueType.default.Number;
                  }),
                  o = [t, r].every(function (e) {
                    return Utils.getType(e) === _ValueType.default.Color;
                  }),
                  a = Utils.getType(t) === _ValueType.default.Color && Utils.getType(r) === _ValueType.default.Number,
                  u = Utils.getType(t) === _ValueType.default.Number && Utils.getType(r) === _ValueType.default.Color;
                switch (e.operator) {
                  case "+":
                    if (n) return this.evalNumbersAddition(e);
                    if (o) return this.evalAddBlend(e);
                    if (a || u) return this.evalColorAndNumberAddition(e);
                    break;
                  case "-":
                    if (n) return this.evalNumbersSubtraction(e);
                    if (o) return this.evalSubtractBlend(e);
                    if (a) return this.evalColorAndNumberSubtraction(e);
                    break;
                  case "*":
                    if (n) return this.evalNumbersMultiplication(e);
                    if (o) return this.evalMultiplyBlend(e);
                    if (a || u) return this.evalColorAndNumberMultiplication(e);
                    break;
                  case "/":
                    if (n) return this.evalNumbersDivision(e);
                    if (o) return this.evalDivideBlend(e);
                    if (a) return this.evalColorAndNumberDivision(e);
                    break;
                  case "^":
                    if (n) return this.evalNumberPower(e);
                    break;
                  case "%%":
                    if (o) return this.evalColorsContrast(e);
                    break;
                  case "|":
                    if (o) return this.evalColorsMix(e);
                    break;
                  case "->":
                    if (Utils.getType(t) === _ValueType.default.ColorScale && Utils.getType(r) === _ValueType.default.Number)
                      return this.evalColorsFromScaleProduction(e);
                    break;
                  case "<<":
                    if (a) return this.evalColorDesaturate(e);
                    if (o) return this.evalColorBurnBlend(e);
                    break;
                  case ">>":
                    if (a) return this.evalColorSaturate(e);
                    if (o) return this.evalColorDodgeBlend(e);
                    break;
                  case "<<<":
                    if (a) return this.evalColorDarken(e);
                    if (o) return this.evalDarkenBlend(e);
                    break;
                  case ">>>":
                    if (a) return this.evalColorLighten(e);
                    if (o) return this.evalLightenBlend(e);
                    break;
                  case "!*":
                    if (o) return this.evalScreenBlend(e);
                    break;
                  case "**":
                    if (o) return this.evalOverlayBlend(e);
                    break;
                  case "<*":
                    if (o) return this.evalHardLightBlend(e);
                    break;
                  case "*>":
                    if (o) return this.evalSoftLightBlend(e);
                    break;
                  case "^*":
                    if (o) return this.evalDifferenceBlend(e);
                    break;
                  case "^^":
                    if (o) return this.evalExclusionBlend(e);
                    break;
                  case "!^":
                    if (o) return this.evalNegateBlend(e);
                    break;
                  default:
                    Utils.throwError("invalid operator '".concat(e.operator, "'"));
                }
                Utils.throwError(
                  "".concat(Utils.getObjKey(_ValueType.default, Utils.getType(t)), " ") +
                    "and ".concat(Utils.getObjKey(_ValueType.default, Utils.getType(r)), " ") +
                    "is invalid operand types or sequence for operator '".concat(e.operator, "'"),
                  e.$loc
                );
              },
            },
            {
              key: "evalNumbersAddition",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalNumbersSubtraction",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalNumbersMultiplication",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalNumbersDivision",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorAndNumberAddition",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorAndNumberSubtraction",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorAndNumberMultiplication",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorAndNumberDivision",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalNumberPower",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorsContrast",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorsMix",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorsFromScaleProduction",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorDesaturate",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorSaturate",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorDarken",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorLighten",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalAddBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalSubtractBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalMultiplyBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalDivideBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorBurnBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalColorDodgeBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalDarkenBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalLightenBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalScreenBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalOverlayBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalHardLightBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalSoftLightBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalDifferenceBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalExclusionBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalNegateBlend",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalGetVar",
              value: function () {
                notImpl();
              },
            },
            {
              key: "evalSetVar",
              value: function () {
                notImpl();
              },
            },
            {
              key: "_getNumberArithmeticFunc",
              value: function _getNumberArithmeticFunc(operator) {
                return (
                  ["+", "-", "*", "/"].includes(operator) || Utils.throwError("invalid arithmetic operator provided: '".concat(operator, "'")),
                  eval("(function(a, b) { return a ".concat(operator, " b; })"))
                );
              },
            },
            {
              key: "_manageParam",
              value: function (e, t) {
                for (var r = void 0 === e.value ? "get" : e.operator ? "relative set" : "set", n = 0; n < t.length; n++) {
                  var o = t[n];
                  if (e.name.match(o.re)) {
                    var a = o.manage;
                    if ((a || ((a = void 0 === e.value ? o.get : o.set), e.operator && (a = o.setRel)), a)) {
                      var u = a.call(o, e);
                      return (
                        void 0 === u &&
                          Utils.throwError(
                            "operation '".concat(r, "' for parameter '").concat(e.name, "' is not supported by '").concat(this.$type, "'"),
                            e.$loc
                          ),
                        u
                      );
                    }
                    Utils.throwError("operation '".concat(r, "' is not supported for parameter '").concat(e.name, "'"), e.$loc);
                    break;
                  }
                }
                Utils.throwError("unknown parameter name '".concat(e.name, "'"), e.$loc);
              },
            },
            {
              key: "_getColorParamDefs",
              value: function () {
                var e = this;
                return [
                  {
                    re: /^(number|num|n)$/i,
                    manage: function (t) {
                      return e.evalManageColorNumber(t);
                    },
                  },
                  {
                    re: /^(temperature|temp|t)$/i,
                    manage: function (t) {
                      return e.evalManageColorTemperature(t);
                    },
                  },
                  {
                    re: /^((rgb|cmyk|hsl|hsv|hsi|lab|lch|hcl)\.)?(luminance|lum)$/i,
                    manage: function (t) {
                      return (
                        void 0 === t.value && t.name.match(/\./) && Utils.throwError("color space should not be specified when retrieving luminance", t.$loc),
                        e.evalManageColorLuminance(t)
                      );
                    },
                  },
                  {
                    re: /^(alpha|a)$/i,
                    manage: function (t) {
                      return e.evalManageColorAlpha(t);
                    },
                  },
                  {
                    re: /^(rgb\.)?(red|r)$/i,
                    manage: function (t) {
                      return e.evalManageColorCompRgbR(t);
                    },
                  },
                  {
                    re: /^(rgb\.)?(green|g)$/i,
                    manage: function (t) {
                      return e.evalManageColorCompRgbG(t);
                    },
                  },
                  {
                    re: /^(rgb\.)?(blue|b)$/i,
                    manage: function (t) {
                      return e.evalManageColorCompRgbB(t);
                    },
                  },
                  {
                    re: /^(cmyk\.)?(cyan|c)$/i,
                    manage: function (t) {
                      return e.evalManageColorCompCmykC(t);
                    },
                  },
                  {
                    re: /^(cmyk\.)?(magenta|mag|m)$/i,
                    manage: function (t) {
                      return e.evalManageColorCompCmykM(t);
                    },
                  },
                  {
                    re: /^(cmyk\.)?(yellow|yel|y)$/i,
                    manage: function (t) {
                      return e.evalManageColorCompCmykY(t);
                    },
                  },
                  {
                    re: /^(cmyk\.)?(key|k)$/i,
                    manage: function (t) {
                      return e.evalManageColorCompCmykK(t);
                    },
                  },
                  {
                    re: /^((hsl|hsv|hsi|lch|hcl)\.)?(hue|h)$/i,
                    manage: function (t) {
                      return t.name.match(/hsv/i)
                        ? e.evalManageColorCompHsvH(t)
                        : t.name.match(/hsi/i)
                        ? e.evalManageColorCompHsiH(t)
                        : t.name.match(/lch|hcl/i)
                        ? e.evalManageColorCompLchH(t)
                        : e.evalManageColorCompHslH(t);
                    },
                  },
                  {
                    re: /^((hsl|hsv|hsi)\.)?(saturation|sat|s)$/i,
                    manage: function (t) {
                      return t.name.match(/hsv/i)
                        ? e.evalManageColorCompHsvS(t)
                        : t.name.match(/hsi/i)
                        ? e.evalManageColorCompHsiS(t)
                        : e.evalManageColorCompHslS(t);
                    },
                  },
                  {
                    re: /^((hsl|lab|lch|hcl)\.)?(lightness|ltns|lt|l)$/i,
                    manage: function (t) {
                      return t.name.match(/lab/i)
                        ? e.evalManageColorCompLabL(t)
                        : t.name.match(/lch|hcl/i)
                        ? e.evalManageColorCompLchL(t)
                        : e.evalManageColorCompHslL(t);
                    },
                  },
                  {
                    re: /^(hsv\.)?(value|val|v)$/i,
                    manage: function (t) {
                      return e.evalManageColorCompHsvV(t);
                    },
                  },
                  {
                    re: /^(hsi\.)?(intensity|int|i)$/i,
                    manage: function (t) {
                      return e.evalManageColorCompHsiI(t);
                    },
                  },
                  {
                    re: /^lab\.a$/i,
                    manage: function (t) {
                      return e.evalManageColorCompLabA(t);
                    },
                  },
                  {
                    re: /^lab\.b$/i,
                    manage: function (t) {
                      return e.evalManageColorCompLabB(t);
                    },
                  },
                  {
                    re: /^((((lch|hcl)\.)?(chroma|chr|ch))|lch\.c|hcl\.c)$/i,
                    manage: function (t) {
                      return e.evalManageColorCompLchC(t);
                    },
                  },
                ];
              },
            },
            {
              key: "_getColorScaleParamDefs",
              value: function (e) {
                var t = this,
                  r = [
                    {
                      re: /^(padding|pad|p)$/i,
                      set: function (e) {
                        return t.evalSetColorScalePadding(e);
                      },
                    },
                  ];
                return (
                  "scale" === e &&
                    r.push.apply(r, [
                      {
                        re: /^(domain|dom|d)$/i,
                        set: function (e) {
                          return t.evalSetScaleDomain(e);
                        },
                      },
                    ]),
                  "cubehelix" === e &&
                    r.push.apply(r, [
                      {
                        re: /^(start|s)$/i,
                        set: function (e) {
                          return t.evalSetCubehelixStart(e);
                        },
                      },
                      {
                        re: /^(rotations|rot|r)$/i,
                        set: function (e) {
                          return t.evalSetCubehelixRotations(e);
                        },
                      },
                      {
                        re: /^(hue|h)$/i,
                        set: function (e) {
                          return t.evalSetCubehelixHue(e);
                        },
                      },
                      {
                        re: /^(gamma|g)$/i,
                        set: function (e) {
                          return t.evalSetCubehelixGamma(e);
                        },
                      },
                      {
                        re: /^(lightness|lt|l)$/i,
                        set: function (e) {
                          return t.evalSetCubehelixLightness(e);
                        },
                      },
                    ]),
                  r
                );
              },
            },
            {
              key: "_unwrapParens",
              value: function (e) {
                for (; e instanceof _nodes.ParenthesesExpr; ) e = e.expr;
                return e;
              },
            },
            {
              key: "core",
              get: function () {
                throw new Error("Core evaluator should be returned in a derived class");
              },
            },
          ]),
          EvaluatorBase
        );
      })();
      function notImpl() {
        throw new Error("Not implemented");
      }
      exports.default = EvaluatorBase;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ArrayLiteralExpr", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, "BezierExpr", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "BinaryExpr", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "BrewerConstExpr", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "ColorByNumberExpr", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "ColorBySpaceParams", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "ColorByTemperatureExpr", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "ColorByWavelengthExpr", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "ColorHexLiteralExpr", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "ColorNameLiteralExpr", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, "CubehelixExpr", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, "Expr", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(t, "GetParamExpr", {
          enumerable: !0,
          get: function () {
            return y.default;
          },
        }),
        Object.defineProperty(t, "GetVarExpr", {
          enumerable: !0,
          get: function () {
            return b.default;
          },
        }),
        Object.defineProperty(t, "Loc", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, "LocPos", {
          enumerable: !0,
          get: function () {
            return m.default;
          },
        }),
        Object.defineProperty(t, "Node", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, "NumberLiteralExpr", {
          enumerable: !0,
          get: function () {
            return _.default;
          },
        }),
        Object.defineProperty(t, "OperationExpr", {
          enumerable: !0,
          get: function () {
            return C.default;
          },
        }),
        Object.defineProperty(t, "ParamExpr", {
          enumerable: !0,
          get: function () {
            return k.default;
          },
        }),
        Object.defineProperty(t, "ParenthesesExpr", {
          enumerable: !0,
          get: function () {
            return w.default;
          },
        }),
        Object.defineProperty(t, "PercentExpr", {
          enumerable: !0,
          get: function () {
            return O.default;
          },
        }),
        Object.defineProperty(t, "Program", {
          enumerable: !0,
          get: function () {
            return S.default;
          },
        }),
        Object.defineProperty(t, "RandomColorExpr", {
          enumerable: !0,
          get: function () {
            return P.default;
          },
        }),
        Object.defineProperty(t, "ScaleExpr", {
          enumerable: !0,
          get: function () {
            return j.default;
          },
        }),
        Object.defineProperty(t, "SetParamExpr", {
          enumerable: !0,
          get: function () {
            return E.default;
          },
        }),
        Object.defineProperty(t, "SetVarExpr", {
          enumerable: !0,
          get: function () {
            return M.default;
          },
        }),
        Object.defineProperty(t, "Statement", {
          enumerable: !0,
          get: function () {
            return x.default;
          },
        }),
        Object.defineProperty(t, "UnaryExpr", {
          enumerable: !0,
          get: function () {
            return A.default;
          },
        });
      var n = $(r(19)),
        o = $(r(22)),
        a = $(r(23)),
        u = $(r(24)),
        i = $(r(25)),
        l = $(r(26)),
        c = $(r(27)),
        f = $(r(28)),
        s = $(r(29)),
        p = $(r(30)),
        h = $(r(31)),
        v = $(r(0)),
        y = $(r(32)),
        b = $(r(33)),
        d = $(r(12)),
        m = $(r(13)),
        g = $(r(5)),
        _ = $(r(34)),
        C = $(r(9)),
        k = $(r(10)),
        w = $(r(35)),
        O = $(r(36)),
        S = $(r(37)),
        P = $(r(38)),
        j = $(r(39)),
        E = $(r(40)),
        M = $(r(41)),
        x = $(r(42)),
        A = $(r(43));
      function $(e) {
        return e && e.__esModule ? e : { default: e };
      }
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function i(e) {
        return (i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var c = (function (e) {
        function t(e, r, n, o) {
          var a;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((a = u(this, i(t).call(this, "operation.".concat(e), o))).operator = r),
            (a.options = n),
            a
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && l(e, t);
          })(t, o["default"]),
          t
        );
      })();
      t.default = c;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r, n, o, a, u) {
          var c;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((c = i(this, l(t).call(this, e, u))).obj = r),
            (c.name = n),
            (c.value = o),
            (c.operator = a),
            c
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalParam(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(13)) && n.__esModule ? n : { default: n };
      function a(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      var u = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.start = new o.default(t.first_line, t.first_column, t.range[0])),
            (this.end = new o.default(t.last_line, t.last_column, t.range[1]));
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: "toString",
              value: function () {
                return "".concat(this.start, "..").concat(this.end);
              },
            },
          ]) && a(t.prototype, r),
          n && a(t, n),
          e
        );
      })();
      t.default = u;
    },
    function (e, t, r) {
      "use strict";
      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var o = (function () {
        function e(t, r, n) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.ln = t),
            (this.col = r),
            (this.i = n);
        }
        var t, r, o;
        return (
          (t = e),
          (r = [
            {
              key: "toString",
              value: function () {
                return "".concat(this.ln, ":").concat(this.col, ",").concat(this.i);
              },
            },
          ]) && n(t.prototype, r),
          o && n(t, o),
          e
        );
      })();
      t.default = o;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n = l(r(7)),
        o = l(r(2)),
        a = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
              }
          return (t.default = e), t;
        })(r(1)),
        u = l(r(4)),
        i = l(r(3));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var v = r(6),
        y = 0,
        b = 1,
        d = 2,
        m = (function (e) {
          function t() {
            var e, r, n, o;
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              })(this, t),
              (e = (function (e, t) {
                return !t || ("object" !== c(t) && "function" != typeof t) ? p(e) : t;
              })(this, s(t).call(this, "core"))),
              (r = p(e)),
              (n = "_varsDict"),
              (o = Object.create(null)),
              n in r ? Object.defineProperty(r, n, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (r[n] = o),
              e
            );
          }
          var r, l, m;
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
              (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && h(e, t);
            })(t, n["default"]),
            (r = t),
            (m = [
              {
                key: "_getBrewerConstsDict",
                value: function () {
                  var e = this._brewerConstsDict;
                  if (!e) {
                    for (var t in ((e = Object.create(null)), v.brewer)) t in v.brewer && (e[t.toLowerCase()] = v.brewer[t]);
                    this._brewerConstsDict = e;
                  }
                  return e;
                },
              },
              {
                key: "instance",
                get: function () {
                  return this._instance || (this._instance = new t());
                },
              },
            ]),
            (l = [
              {
                key: "evalProgram",
                value: function (e) {
                  var t = this,
                    r = e.statements.map(function (e) {
                      return e.evaluate(t);
                    }),
                    n = r[r.length - 1];
                  return this._manageVar(y, "$", n), n;
                },
              },
              {
                key: "evalStatement",
                value: function (e) {
                  return e.expr.evaluate(this);
                },
              },
              {
                key: "evalParentheses",
                value: function (e) {
                  var t = e.expr.evaluate(this);
                  return (t = a.cloneValue(t));
                },
              },
              {
                key: "evalNumberLiteral",
                value: function (e) {
                  var t = e.value.replace(/^0o/, "");
                  return t !== e.value ? parseInt(t, 8) : Number(e.value);
                },
              },
              {
                key: "evalPercent",
                value: function (e) {
                  return a.forceNumInRange(e.value.evaluate(this), -100, 100, e.value.$loc) / 100;
                },
              },
              {
                key: "evalArrayLiteral",
                value: function (e) {
                  var t = this;
                  return e.value.map(function (e) {
                    return e.evaluate(t);
                  });
                },
              },
              {
                key: "evalArrayElement",
                value: function (e) {
                  var t = a.forceType(e.obj.evaluate(this), u.default.Array, e.obj.$loc);
                  return t[a.forceNumInRange(+e.name, 0, t.length - 1, e.$loc)];
                },
              },
              {
                key: "evalColorNameLiteral",
                value: function (e) {
                  return v(e.value);
                },
              },
              {
                key: "evalColorHexLiteral",
                value: function (e) {
                  return v(e.value);
                },
              },
              {
                key: "evalColorByNumber",
                value: function (e) {
                  var t = a.forceNumInRange(e.value.evaluate(this), 0, 16777215, e.value.$loc);
                  return v(t);
                },
              },
              {
                key: "evalColorByTemperature",
                value: function (e) {
                  var t = a.forceNumInRange(e.value.evaluate(this), 0, 2e5, e.value.$loc);
                  return v.temperature(t);
                },
              },
              {
                key: "evalColorByWavelength",
                value: function (e) {
                  var t = a.forceNumInRange(e.value.evaluate(this), 350, 780, e.value.$loc);
                  return a.colorFromWavelength(t);
                },
              },
              {
                key: "evalColorBySpaceParams",
                value: function (e) {
                  var t,
                    r = this,
                    n = e.space,
                    o = e.params.slice(0),
                    u = e.params.map(function (e) {
                      return e.evaluate(r);
                    }),
                    i = null;
                  "argb" === n ? ((t = u.shift()), (i = o.shift()), (n = "rgb")) : u.length > ("cmyk" === n ? 4 : 3) && ((t = u.pop()), (i = o.pop()));
                  var l = a.getColorSpaceParamsValidRanges(n);
                  u.length !== l.length && a.throwError("invalid number of params for color space ".concat(e.space.toUpperCase()), e.$loc);
                  for (var c = 0; c < u.length; c++) a.forceNumInRange(u[c], l[c], o[c].$loc);
                  "cmy" === n && ((u = a.cmyToCmykArray(u)), (n = "cmyk"));
                  var f = v(u, n);
                  return null != t && (f = f.alpha(a.forceNumInRange(t, 0, 1, i.$loc))), f;
                },
              },
              {
                key: "evalRandomColor",
                value: function () {
                  return v.random();
                },
              },
              {
                key: "evalScale",
                value: function (e) {
                  var t = this,
                    r = Array.isArray(e.colors)
                      ? e.colors.map(function (e) {
                          return a.forceType(e.evaluate(t), u.default.Color, e.$loc);
                        })
                      : a.forceType(e.colors.evaluate(this), u.default.ColorArray, e.colors.$loc);
                  r && r.length < 2 && a.throwError("two or more colors are required for interpolation");
                  var n = [{ name: "colors", value: r }];
                  if (void 0 !== e.domain) {
                    var i = e.domain.map(function (e) {
                      return a.forceType(e.evaluate(t), u.default.Number, e.$loc);
                    });
                    n.push({ name: "domain", value: i });
                  }
                  return void 0 !== e.mode && n.push({ name: "mode", value: e.mode }), new o.default("scale", void 0, n);
                },
              },
              {
                key: "evalBezier",
                value: function (e) {
                  var t = a.forceType(e.colors.evaluate(this), u.default.ColorArray, e.colors.$loc);
                  (t.length < 2 || t.length > 5) &&
                    a.throwError("bezier interpolate supports from ".concat(2, " to ").concat(5, " colors, you provided: ").concat(t.length));
                  var r = [{ name: "colors", value: t }];
                  return new o.default("bezier", void 0, r);
                },
              },
              {
                key: "evalCubehelix",
                value: function () {
                  return new o.default("cubehelix");
                },
              },
              {
                key: "evalBrewerConst",
                value: function (e) {
                  return t._getBrewerConstsDict()[e.name.toLowerCase()].map(function (e) {
                    return v(e);
                  });
                },
              },
              {
                key: "evalUnaryMinus",
                value: function (e) {
                  var t = a.forceType(e.value.evaluate(this), u.default.Number, e.value.$loc);
                  return (t = -t);
                },
              },
              {
                key: "evalColorInverse",
                value: function (e) {
                  var t = a.forceType(e.value.evaluate(this), u.default.Color, e.value.$loc);
                  return (t = a.inverseColor(t));
                },
              },
              {
                key: "evalCorrectLightness",
                value: function (e) {
                  var t = a.forceType(e.value.evaluate(this), u.default.ColorScale, e.value.$loc);
                  return (t = t.clone()).scaleParams.push({ name: "correctLightness" }), t;
                },
              },
              {
                key: "evalNumbersAddition",
                value: function (e) {
                  return this._numbersArithmeticOp(e);
                },
              },
              {
                key: "evalNumbersSubtraction",
                value: function (e) {
                  return this._numbersArithmeticOp(e);
                },
              },
              {
                key: "evalNumbersMultiplication",
                value: function (e) {
                  return this._numbersArithmeticOp(e);
                },
              },
              {
                key: "evalNumbersDivision",
                value: function (e) {
                  return this._numbersArithmeticOp(e);
                },
              },
              {
                key: "evalColorAndNumberAddition",
                value: function (e) {
                  return this._colorArithmeticOp(e);
                },
              },
              {
                key: "evalColorAndNumberSubtraction",
                value: function (e) {
                  return this._colorArithmeticOp(e);
                },
              },
              {
                key: "evalColorAndNumberMultiplication",
                value: function (e) {
                  return this._colorArithmeticOp(e);
                },
              },
              {
                key: "evalColorAndNumberDivision",
                value: function (e) {
                  return this._colorArithmeticOp(e);
                },
              },
              {
                key: "evalNumberPower",
                value: function (e) {
                  var t = e.left.evaluate(this),
                    r = e.right.evaluate(this);
                  return Math.pow(t, r);
                },
              },
              {
                key: "evalColorsContrast",
                value: function (e) {
                  var t = e.left.evaluate(this),
                    r = e.right.evaluate(this);
                  return v.contrast(t, r);
                },
              },
              {
                key: "evalColorsMix",
                value: function (e) {
                  var t = e.left.evaluate(this),
                    r = e.right.evaluate(this),
                    n = (e.options || {}).ratio,
                    o = n ? a.forceType(n.evaluate(this), u.default.Number, n.$loc) : void 0,
                    i = (e.options || {}).mode || "rgb";
                  return v.mix(t, r, o, i);
                },
              },
              {
                key: "evalColorsFromScaleProduction",
                value: function (e) {
                  var t = e.left.evaluate(this),
                    r = a.forceNumInRange(e.right.evaluate(this), 2, 65535, e.right.$loc);
                  return t
                    .getFn()
                    .colors(r)
                    .map(function (e) {
                      return v(e);
                    });
                },
              },
              {
                key: "evalColorDesaturate",
                value: function (e) {
                  return this._adjustColorCompOp(e, "lch.c", !1);
                },
              },
              {
                key: "evalColorSaturate",
                value: function (e) {
                  return this._adjustColorCompOp(e, "lch.c", !0);
                },
              },
              {
                key: "evalColorDarken",
                value: function (e) {
                  return this._adjustColorCompOp(e, "lab.l", !1);
                },
              },
              {
                key: "evalColorLighten",
                value: function (e) {
                  return this._adjustColorCompOp(e, "lab.l", !0);
                },
              },
              {
                key: "evalAddBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.Add);
                },
              },
              {
                key: "evalSubtractBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.Subtract);
                },
              },
              {
                key: "evalMultiplyBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.Multiply);
                },
              },
              {
                key: "evalDivideBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.Divide);
                },
              },
              {
                key: "evalColorBurnBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.ColorBurn);
                },
              },
              {
                key: "evalColorDodgeBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.ColorDodge);
                },
              },
              {
                key: "evalDarkenBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.Darken);
                },
              },
              {
                key: "evalLightenBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.Lighten);
                },
              },
              {
                key: "evalScreenBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.Screen);
                },
              },
              {
                key: "evalOverlayBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.Overlay);
                },
              },
              {
                key: "evalHardLightBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.HardLight);
                },
              },
              {
                key: "evalSoftLightBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.SoftLight);
                },
              },
              {
                key: "evalDifferenceBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.Difference);
                },
              },
              {
                key: "evalExclusionBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.Exclusion);
                },
              },
              {
                key: "evalNegateBlend",
                value: function (e) {
                  return this._blendColorsOp(e, i.default.Negate);
                },
              },
              {
                key: "evalManageColorNumber",
                value: function (e) {
                  var t = e.obj.evaluate(this),
                    r = Number("0x".concat(t.hex().replace(/^#/, "")));
                  if (void 0 === e.value) return r;
                  var n = a.forceNumInRange(e.value.evaluate(this), 0, 16777215, e.value.$loc);
                  e.operator && (n = Math.max(Math.min(this._getNumberArithmeticFunc(e.operator)(r, n), 16777215), 0));
                  var o = v(n);
                  return (o = o.alpha(t.alpha()));
                },
              },
              {
                key: "evalManageColorTemperature",
                value: function (e) {
                  var t = e.obj.evaluate(this).temperature();
                  if (void 0 === e.value) return t;
                  var r = a.forceType(e.value.evaluate(this), u.default.Number, e.value.$loc);
                  return e.operator && (r = this._getNumberArithmeticFunc(e.operator)(t, r)), v.temperature(r);
                },
              },
              {
                key: "evalManageColorLuminance",
                value: function (e) {
                  var t = a.cloneValue(e.obj.evaluate(this)),
                    r = t.luminance();
                  if (void 0 === e.value) return r;
                  var n = a.forceNumInRange(e.value.evaluate(this), 0, 1, e.value.$loc);
                  e.operator && (n = this._getNumberArithmeticFunc(e.operator)(r, n));
                  var o = e.name.match(/^((\w+)\.)?\w+/i)[2] || void 0;
                  return t.luminance(n, o), t;
                },
              },
              {
                key: "evalManageColorAlpha",
                value: function (e) {
                  var t = a.cloneValue(e.obj.evaluate(this)),
                    r = t.alpha();
                  if (void 0 === e.value) return r;
                  var n = ["*", "/"].includes(e.operator)
                    ? a.forceType(e.value.evaluate(this), u.default.Number, e.value.$loc)
                    : a.forceNumInRange(e.value.evaluate(this), 0, 1, e.value.$loc);
                  return e.operator && (n = this._getNumberArithmeticFunc(e.operator)(r, n)), (t = t.alpha(n));
                },
              },
              {
                key: "manageColorCompOp",
                value: function (e, t) {
                  var r = a.cloneValue(e.obj.evaluate(this)),
                    n = r.get(t);
                  if (void 0 === e.value) return n;
                  var o = t.split("."),
                    u = a.getColorSpaceParamsValidRanges(o[0])[o[0].indexOf(o[1])],
                    i = a.forceNumInRange(e.value.evaluate(this), u, e.value.$loc);
                  return e.operator && (i = this._getNumberArithmeticFunc(e.operator)(n, i)), (r = r.set(t, i));
                },
              },
              {
                key: "evalManageColorCompRgbR",
                value: function (e) {
                  return this.manageColorCompOp(e, "rgb.r");
                },
              },
              {
                key: "evalManageColorCompRgbG",
                value: function (e) {
                  return this.manageColorCompOp(e, "rgb.g");
                },
              },
              {
                key: "evalManageColorCompRgbB",
                value: function (e) {
                  return this.manageColorCompOp(e, "rgb.b");
                },
              },
              {
                key: "evalManageColorCompCmykC",
                value: function (e) {
                  return this.manageColorCompOp(e, "cmyk.c");
                },
              },
              {
                key: "evalManageColorCompCmykM",
                value: function (e) {
                  return this.manageColorCompOp(e, "cmyk.m");
                },
              },
              {
                key: "evalManageColorCompCmykY",
                value: function (e) {
                  return this.manageColorCompOp(e, "cmyk.y");
                },
              },
              {
                key: "evalManageColorCompCmykK",
                value: function (e) {
                  return this.manageColorCompOp(e, "cmyk.k");
                },
              },
              {
                key: "evalManageColorCompHslH",
                value: function (e) {
                  return this.manageColorCompOp(e, "hsl.h");
                },
              },
              {
                key: "evalManageColorCompHslS",
                value: function (e) {
                  return this.manageColorCompOp(e, "hsl.s");
                },
              },
              {
                key: "evalManageColorCompHslL",
                value: function (e) {
                  return this.manageColorCompOp(e, "hsl.l");
                },
              },
              {
                key: "evalManageColorCompHsvH",
                value: function (e) {
                  return this.manageColorCompOp(e, "hsv.h");
                },
              },
              {
                key: "evalManageColorCompHsvS",
                value: function (e) {
                  return this.manageColorCompOp(e, "hsv.s");
                },
              },
              {
                key: "evalManageColorCompHsvV",
                value: function (e) {
                  return this.manageColorCompOp(e, "hsv.v");
                },
              },
              {
                key: "evalManageColorCompHsiH",
                value: function (e) {
                  return this.manageColorCompOp(e, "hsi.h");
                },
              },
              {
                key: "evalManageColorCompHsiS",
                value: function (e) {
                  return this.manageColorCompOp(e, "hsi.s");
                },
              },
              {
                key: "evalManageColorCompHsiI",
                value: function (e) {
                  return this.manageColorCompOp(e, "hsi.i");
                },
              },
              {
                key: "evalManageColorCompLabL",
                value: function (e) {
                  return this.manageColorCompOp(e, "lab.l");
                },
              },
              {
                key: "evalManageColorCompLabA",
                value: function (e) {
                  return this.manageColorCompOp(e, "lab.a");
                },
              },
              {
                key: "evalManageColorCompLabB",
                value: function (e) {
                  return this.manageColorCompOp(e, "lab.b");
                },
              },
              {
                key: "evalManageColorCompLchL",
                value: function (e) {
                  return this.manageColorCompOp(e, "lch.l");
                },
              },
              {
                key: "evalManageColorCompLchC",
                value: function (e) {
                  return this.manageColorCompOp(e, "lch.c");
                },
              },
              {
                key: "evalManageColorCompLchH",
                value: function (e) {
                  return this.manageColorCompOp(e, "lch.h");
                },
              },
              {
                key: "evalSetColorScalePadding",
                value: function (e) {
                  var t = e.value.evaluate(this);
                  return (
                    (t = Array.isArray(t) ? a.forceRange(t, e.value.$loc) : a.forceType(t, u.default.Number, e.value.$loc)),
                    this._addColorScaleParam(e, !0, "padding", t)
                  );
                },
              },
              {
                key: "evalSetScaleDomain",
                value: function (e) {
                  var t = a.forceType(e.value.evaluate(this), u.default.NumberArray, e.value.$loc);
                  return t.length < 2 && a.throwError("'domain' parameter should contain at least two elements"), this._addColorScaleParam(e, !0, "domain", t);
                },
              },
              {
                key: "evalSetCubehelixStart",
                value: function (e) {
                  var t = a.forceNumInRange(e.value.evaluate(this), 0, 360, e.value.$loc);
                  return this._addColorScaleParam(e, !1, "start", t);
                },
              },
              {
                key: "evalSetCubehelixRotations",
                value: function (e) {
                  var t = a.forceType(e.value.evaluate(this), u.default.Number, e.value.$loc);
                  return this._addColorScaleParam(e, !1, "rotations", t);
                },
              },
              {
                key: "evalSetCubehelixHue",
                value: function (e) {
                  var t = e.value.evaluate(this);
                  return (
                    (t = Array.isArray(t) ? a.forceRange(t, e.value.$loc) : a.forceType(t, u.default.Number, e.value.$loc)),
                    this._addColorScaleParam(e, !1, "hue", t)
                  );
                },
              },
              {
                key: "evalSetCubehelixGamma",
                value: function (e) {
                  var t = a.forceType(e.value.evaluate(this), u.default.Number, e.value.$loc);
                  return this._addColorScaleParam(e, !1, "gamma", t);
                },
              },
              {
                key: "evalSetCubehelixLightness",
                value: function (e) {
                  var t = a.forceRange(e.value.evaluate(this), e.value.$loc);
                  return t[0] === t[1] && a.throwError("empty 'lightness' range"), this._addColorScaleParam(e, !1, "lightness", t);
                },
              },
              {
                key: "evalGetVar",
                value: function (e) {
                  return this._manageVar(b, e.name);
                },
              },
              {
                key: "evalSetVar",
                value: function (e) {
                  var t = e.value.evaluate(this);
                  return this._manageVar(y, e.name, t), t;
                },
              },
              {
                key: "_manageVar",
                value: function (e, t, r) {
                  var n = t.replace(/^\$/, "").toLowerCase() || "$",
                    o = this._varsDict;
                  switch (e) {
                    case y:
                      (o[n] = r), void 0 === r && a.throwError("cannot assign undefined value to variable ".concat(t));
                      break;
                    case b:
                      void 0 === (r = o[n]) && a.throwError("variable ".concat(t, " is not defined"));
                      break;
                    case d:
                      (r = o[n]), delete o[n];
                  }
                  return r;
                },
              },
              {
                key: "_numbersArithmeticOp",
                value: function (e) {
                  var t = e.left.evaluate(this),
                    r = e.right.evaluate(this);
                  return this._getNumberArithmeticFunc(e.operator)(t, r);
                },
              },
              {
                key: "_blendColorsOp",
                value: function (e, t) {
                  var r = e.left.evaluate(this),
                    n = e.right.evaluate(this);
                  return a.blendColors(r, n, t);
                },
              },
              {
                key: "_colorArithmeticOp",
                value: function (e) {
                  var t = e.left.evaluate(this),
                    r = e.right.evaluate(this);
                  return a.colorArithmeticOp(t, r, e.operator);
                },
              },
              {
                key: "_adjustColorCompOp",
                value: function (e, t, r) {
                  var n = e.left.evaluate(this),
                    o = a.forceNumInRange(e.right.evaluate(this), 0, 1, e.right.$loc);
                  return a.cloneValue(n).set(t, "*".concat(r ? 1 + o : 1 - o));
                },
              },
              {
                key: "_addColorScaleParam",
                value: function (e, t, r, n) {
                  for (var o = a.cloneValue(e.obj.evaluate(this)), u = t ? o.scaleParams : o.params, i = 0; i < u.length; i++)
                    if (u[i].name === r) {
                      u.splice(i, 1);
                      break;
                    }
                  return u.push({ name: r, value: n }), o;
                },
              },
              {
                key: "core",
                get: function () {
                  return this;
                },
              },
            ]) && f(r.prototype, l),
            m && f(r, m),
            t
          );
        })();
      t.default = m;
    },
    function (e, t) {
      var r,
        n,
        o = (e.exports = {});
      function a() {
        throw new Error("setTimeout has not been defined");
      }
      function u() {
        throw new Error("clearTimeout has not been defined");
      }
      function i(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === a || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          r = "function" == typeof setTimeout ? setTimeout : a;
        } catch (e) {
          r = a;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : u;
        } catch (e) {
          n = u;
        }
      })();
      var l,
        c = [],
        f = !1,
        s = -1;
      function p() {
        f && l && ((f = !1), l.length ? (c = l.concat(c)) : (s = -1), c.length && h());
      }
      function h() {
        if (!f) {
          var e = i(p);
          f = !0;
          for (var t = c.length; t; ) {
            for (l = c, c = []; ++s < t; ) l && l[s].run();
            (s = -1), (t = c.length);
          }
          (l = null),
            (f = !1),
            (function (e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === u || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
              try {
                n(e);
              } catch (t) {
                try {
                  return n.call(null, e);
                } catch (t) {
                  return n.call(this, e);
                }
              }
            })(e);
        }
      }
      function v(e, t) {
        (this.fun = e), (this.array = t);
      }
      function y() {}
      (o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        c.push(new v(e, t)), 1 !== c.length || f || i(h);
      }),
        (v.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = y),
        (o.addListener = y),
        (o.once = y),
        (o.off = y),
        (o.removeListener = y),
        (o.removeAllListeners = y),
        (o.emit = y),
        (o.prependListener = y),
        (o.prependOnceListener = y),
        (o.listeners = function (e) {
          return [];
        }),
        (o.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function () {
          return "/";
        }),
        (o.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function () {
          return 0;
        });
    },
    function (e, t, r) {
      e.exports = r(17);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.evaluate = function (e, t) {
          var r, n, a;
          t = Object.assign({ evaluator: o.CoreEvaluator.instance, withAst: !1, astWithLocs: !1 }, t);
          try {
            (r = u.parse(e)), (n = r.evaluate(t.evaluator));
          } catch (e) {
            a = e.message || String(e);
          }
          return {
            withAst: t.withAst,
            astWithLocs: t.astWithLocs,
            evaluator: t.evaluator.$type,
            expr: e,
            program: r,
            result: null != a ? null : n,
            resultStr: null != a ? null : p(n),
            astStr: null == a && t.withAst && r ? JSON.stringify(r.getDto(t.astWithLocs), null, "  ") : null,
            error: null != a ? a : null,
          };
        }),
        Object.defineProperty(t, "ColorScale", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "ValueType", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "BlendMode", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        (t.Nodes = t.Evaluators = t.Utils = void 0);
      var n = s(r(1));
      t.Utils = n;
      var o = s(r(18));
      t.Evaluators = o;
      var a = s(r(8));
      t.Nodes = a;
      var u = s(r(45)),
        i = f(r(2)),
        l = f(r(4)),
        c = f(r(3));
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
              n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
            }
        return (t.default = e), t;
      }
      function p(e) {
        if (n.isColor(e)) return n.formatColor(e);
        if ("number" == typeof e) return e % 1 == 0 ? String(e) : e.toFixed(4).replace(/0+$/, "");
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) {
          for (var t = "[", r = 0; r < e.length; r++) t += p(e[r]) + (r < e.length - 1 ? ", " : "");
          return (t += "]");
        }
        return e instanceof i.default ? String(e) : JSON.stringify(e, null, "  ");
      }
      u.parser.yy = a;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "EvaluatorBase", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, "CoreEvaluator", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "LessEvaluator", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        });
      var n = u(r(7)),
        o = u(r(14)),
        a = u(r(44));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = i(this, l(t).call(this, "arrayLiteral", r))).value = e),
            n
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalArrayLiteral(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      (function (e, r) {
        var n = 200,
          o = "__lodash_hash_undefined__",
          a = 9007199254740991,
          u = "[object Arguments]",
          i = "[object Boolean]",
          l = "[object Date]",
          c = "[object Function]",
          f = "[object GeneratorFunction]",
          s = "[object Map]",
          p = "[object Number]",
          h = "[object Object]",
          v = "[object RegExp]",
          y = "[object Set]",
          b = "[object String]",
          d = "[object Symbol]",
          m = "[object ArrayBuffer]",
          g = "[object DataView]",
          _ = "[object Float32Array]",
          C = "[object Float64Array]",
          k = "[object Int8Array]",
          w = "[object Int16Array]",
          O = "[object Int32Array]",
          S = "[object Uint8Array]",
          P = "[object Uint8ClampedArray]",
          j = "[object Uint16Array]",
          E = "[object Uint32Array]",
          M = /\w*$/,
          x = /^\[object .+?Constructor\]$/,
          A = /^(?:0|[1-9]\d*)$/,
          $ = {};
        ($[u] =
          $["[object Array]"] =
          $[m] =
          $[g] =
          $[i] =
          $[l] =
          $[_] =
          $[C] =
          $[k] =
          $[w] =
          $[O] =
          $[s] =
          $[p] =
          $[h] =
          $[v] =
          $[y] =
          $[b] =
          $[d] =
          $[S] =
          $[P] =
          $[j] =
          $[E] =
            !0),
          ($["[object Error]"] = $[c] = $["[object WeakMap]"] = !1);
        var L = "object" == typeof e && e && e.Object === Object && e,
          N = "object" == typeof self && self && self.Object === Object && self,
          B = L || N || Function("return this")(),
          I = t && !t.nodeType && t,
          R = I && "object" == typeof r && r && !r.nodeType && r,
          T = R && R.exports === I;
        function D(e, t) {
          return e.set(t[0], t[1]), e;
        }
        function H(e, t) {
          return e.add(t), e;
        }
        function V(e, t, r, n) {
          var o = -1,
            a = e ? e.length : 0;
          for (n && a && (r = e[++o]); ++o < a; ) r = t(r, e[o], o, e);
          return r;
        }
        function U(e) {
          var t = !1;
          if (null != e && "function" != typeof e.toString)
            try {
              t = !!(e + "");
            } catch (e) {}
          return t;
        }
        function G(e) {
          var t = -1,
            r = Array(e.size);
          return (
            e.forEach(function (e, n) {
              r[++t] = [n, e];
            }),
            r
          );
        }
        function F(e, t) {
          return function (r) {
            return e(t(r));
          };
        }
        function q(e) {
          var t = -1,
            r = Array(e.size);
          return (
            e.forEach(function (e) {
              r[++t] = e;
            }),
            r
          );
        }
        var W,
          Y = Array.prototype,
          z = Function.prototype,
          K = Object.prototype,
          X = B["__core-js_shared__"],
          Z = (W = /[^.]+$/.exec((X && X.keys && X.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + W : "",
          J = z.toString,
          Q = K.hasOwnProperty,
          ee = K.toString,
          te = RegExp(
            "^" +
              J.call(Q)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
              "$"
          ),
          re = T ? B.Buffer : void 0,
          ne = B.Symbol,
          oe = B.Uint8Array,
          ae = F(Object.getPrototypeOf, Object),
          ue = Object.create,
          ie = K.propertyIsEnumerable,
          le = Y.splice,
          ce = Object.getOwnPropertySymbols,
          fe = re ? re.isBuffer : void 0,
          se = F(Object.keys, Object),
          pe = Re(B, "DataView"),
          he = Re(B, "Map"),
          ve = Re(B, "Promise"),
          ye = Re(B, "Set"),
          be = Re(B, "WeakMap"),
          de = Re(Object, "create"),
          me = Ue(pe),
          ge = Ue(he),
          _e = Ue(ve),
          Ce = Ue(ye),
          ke = Ue(be),
          we = ne ? ne.prototype : void 0,
          Oe = we ? we.valueOf : void 0;
        function Se(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function Pe(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function je(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function Ee(e) {
          this.__data__ = new Pe(e);
        }
        function Me(e, t) {
          var r =
              Fe(e) ||
              (function (e) {
                return (
                  (function (e) {
                    return (
                      (function (e) {
                        return !!e && "object" == typeof e;
                      })(e) && qe(e)
                    );
                  })(e) &&
                  Q.call(e, "callee") &&
                  (!ie.call(e, "callee") || ee.call(e) == u)
                );
              })(e)
                ? (function (e, t) {
                    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                    return n;
                  })(e.length, String)
                : [],
            n = r.length,
            o = !!n;
          for (var a in e) (!t && !Q.call(e, a)) || (o && ("length" == a || He(a, n))) || r.push(a);
          return r;
        }
        function xe(e, t, r) {
          var n = e[t];
          (Q.call(e, t) && Ge(n, r) && (void 0 !== r || t in e)) || (e[t] = r);
        }
        function Ae(e, t) {
          for (var r = e.length; r--; ) if (Ge(e[r][0], t)) return r;
          return -1;
        }
        function $e(e, t, r, n, o, a, x) {
          var A;
          if ((n && (A = a ? n(e, o, a, x) : n(e)), void 0 !== A)) return A;
          if (!ze(e)) return e;
          var L = Fe(e);
          if (L) {
            if (
              ((A = (function (e) {
                var t = e.length,
                  r = e.constructor(t);
                t && "string" == typeof e[0] && Q.call(e, "index") && ((r.index = e.index), (r.input = e.input));
                return r;
              })(e)),
              !t)
            )
              return (function (e, t) {
                var r = -1,
                  n = e.length;
                t || (t = Array(n));
                for (; ++r < n; ) t[r] = e[r];
                return t;
              })(e, A);
          } else {
            var N = De(e),
              B = N == c || N == f;
            if (We(e))
              return (function (e, t) {
                if (t) return e.slice();
                var r = new e.constructor(e.length);
                return e.copy(r), r;
              })(e, t);
            if (N == h || N == u || (B && !a)) {
              if (U(e)) return a ? e : {};
              if (
                ((A = (function (e) {
                  return "function" != typeof e.constructor || Ve(e) ? {} : ((t = ae(e)), ze(t) ? ue(t) : {});
                  var t;
                })(B ? {} : e)),
                !t)
              )
                return (function (e, t) {
                  return Be(e, Te(e), t);
                })(
                  e,
                  (function (e, t) {
                    return e && Be(t, Ke(t), e);
                  })(A, e)
                );
            } else {
              if (!$[N]) return a ? e : {};
              A = (function (e, t, r, n) {
                var o = e.constructor;
                switch (t) {
                  case m:
                    return Ne(e);
                  case i:
                  case l:
                    return new o(+e);
                  case g:
                    return (function (e, t) {
                      var r = t ? Ne(e.buffer) : e.buffer;
                      return new e.constructor(r, e.byteOffset, e.byteLength);
                    })(e, n);
                  case _:
                  case C:
                  case k:
                  case w:
                  case O:
                  case S:
                  case P:
                  case j:
                  case E:
                    return (function (e, t) {
                      var r = t ? Ne(e.buffer) : e.buffer;
                      return new e.constructor(r, e.byteOffset, e.length);
                    })(e, n);
                  case s:
                    return (function (e, t, r) {
                      return V(t ? r(G(e), !0) : G(e), D, new e.constructor());
                    })(e, n, r);
                  case p:
                  case b:
                    return new o(e);
                  case v:
                    return ((c = new (u = e).constructor(u.source, M.exec(u))).lastIndex = u.lastIndex), c;
                  case y:
                    return (function (e, t, r) {
                      return V(t ? r(q(e), !0) : q(e), H, new e.constructor());
                    })(e, n, r);
                  case d:
                    return (a = e), Oe ? Object(Oe.call(a)) : {};
                }
                var a;
                var u, c;
              })(e, N, $e, t);
            }
          }
          x || (x = new Ee());
          var I = x.get(e);
          if (I) return I;
          if ((x.set(e, A), !L))
            var R = r
              ? (function (e) {
                  return (function (e, t, r) {
                    var n = t(e);
                    return Fe(e)
                      ? n
                      : (function (e, t) {
                          for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
                          return e;
                        })(n, r(e));
                  })(e, Ke, Te);
                })(e)
              : Ke(e);
          return (
            (function (e, t) {
              for (var r = -1, n = e ? e.length : 0; ++r < n && !1 !== t(e[r], r, e); );
            })(R || e, function (o, a) {
              R && (o = e[(a = o)]), xe(A, a, $e(o, t, r, n, a, e, x));
            }),
            A
          );
        }
        function Le(e) {
          return !(!ze(e) || ((t = e), Z && Z in t)) && (Ye(e) || U(e) ? te : x).test(Ue(e));
          var t;
        }
        function Ne(e) {
          var t = new e.constructor(e.byteLength);
          return new oe(t).set(new oe(e)), t;
        }
        function Be(e, t, r, n) {
          r || (r = {});
          for (var o = -1, a = t.length; ++o < a; ) {
            var u = t[o],
              i = n ? n(r[u], e[u], u, r, e) : void 0;
            xe(r, u, void 0 === i ? e[u] : i);
          }
          return r;
        }
        function Ie(e, t) {
          var r,
            n,
            o = e.__data__;
          return ("string" == (n = typeof (r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r)
            ? o["string" == typeof t ? "string" : "hash"]
            : o.map;
        }
        function Re(e, t) {
          var r = (function (e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return Le(r) ? r : void 0;
        }
        (Se.prototype.clear = function () {
          this.__data__ = de ? de(null) : {};
        }),
          (Se.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (Se.prototype.get = function (e) {
            var t = this.__data__;
            if (de) {
              var r = t[e];
              return r === o ? void 0 : r;
            }
            return Q.call(t, e) ? t[e] : void 0;
          }),
          (Se.prototype.has = function (e) {
            var t = this.__data__;
            return de ? void 0 !== t[e] : Q.call(t, e);
          }),
          (Se.prototype.set = function (e, t) {
            return (this.__data__[e] = de && void 0 === t ? o : t), this;
          }),
          (Pe.prototype.clear = function () {
            this.__data__ = [];
          }),
          (Pe.prototype.delete = function (e) {
            var t = this.__data__,
              r = Ae(t, e);
            return !(r < 0) && (r == t.length - 1 ? t.pop() : le.call(t, r, 1), !0);
          }),
          (Pe.prototype.get = function (e) {
            var t = this.__data__,
              r = Ae(t, e);
            return r < 0 ? void 0 : t[r][1];
          }),
          (Pe.prototype.has = function (e) {
            return Ae(this.__data__, e) > -1;
          }),
          (Pe.prototype.set = function (e, t) {
            var r = this.__data__,
              n = Ae(r, e);
            return n < 0 ? r.push([e, t]) : (r[n][1] = t), this;
          }),
          (je.prototype.clear = function () {
            this.__data__ = { hash: new Se(), map: new (he || Pe)(), string: new Se() };
          }),
          (je.prototype.delete = function (e) {
            return Ie(this, e).delete(e);
          }),
          (je.prototype.get = function (e) {
            return Ie(this, e).get(e);
          }),
          (je.prototype.has = function (e) {
            return Ie(this, e).has(e);
          }),
          (je.prototype.set = function (e, t) {
            return Ie(this, e).set(e, t), this;
          }),
          (Ee.prototype.clear = function () {
            this.__data__ = new Pe();
          }),
          (Ee.prototype.delete = function (e) {
            return this.__data__.delete(e);
          }),
          (Ee.prototype.get = function (e) {
            return this.__data__.get(e);
          }),
          (Ee.prototype.has = function (e) {
            return this.__data__.has(e);
          }),
          (Ee.prototype.set = function (e, t) {
            var r = this.__data__;
            if (r instanceof Pe) {
              var o = r.__data__;
              if (!he || o.length < n - 1) return o.push([e, t]), this;
              r = this.__data__ = new je(o);
            }
            return r.set(e, t), this;
          });
        var Te = ce
            ? F(ce, Object)
            : function () {
                return [];
              },
          De = function (e) {
            return ee.call(e);
          };
        function He(e, t) {
          return !!(t = null == t ? a : t) && ("number" == typeof e || A.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function Ve(e) {
          var t = e && e.constructor;
          return e === (("function" == typeof t && t.prototype) || K);
        }
        function Ue(e) {
          if (null != e) {
            try {
              return J.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        }
        function Ge(e, t) {
          return e === t || (e != e && t != t);
        }
        ((pe && De(new pe(new ArrayBuffer(1))) != g) ||
          (he && De(new he()) != s) ||
          (ve && "[object Promise]" != De(ve.resolve())) ||
          (ye && De(new ye()) != y) ||
          (be && "[object WeakMap]" != De(new be()))) &&
          (De = function (e) {
            var t = ee.call(e),
              r = t == h ? e.constructor : void 0,
              n = r ? Ue(r) : void 0;
            if (n)
              switch (n) {
                case me:
                  return g;
                case ge:
                  return s;
                case _e:
                  return "[object Promise]";
                case Ce:
                  return y;
                case ke:
                  return "[object WeakMap]";
              }
            return t;
          });
        var Fe = Array.isArray;
        function qe(e) {
          return (
            null != e &&
            (function (e) {
              return "number" == typeof e && e > -1 && e % 1 == 0 && e <= a;
            })(e.length) &&
            !Ye(e)
          );
        }
        var We =
          fe ||
          function () {
            return !1;
          };
        function Ye(e) {
          var t = ze(e) ? ee.call(e) : "";
          return t == c || t == f;
        }
        function ze(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function Ke(e) {
          return qe(e)
            ? Me(e)
            : (function (e) {
                if (!Ve(e)) return se(e);
                var t = [];
                for (var r in Object(e)) Q.call(e, r) && "constructor" != r && t.push(r);
                return t;
              })(e);
        }
        r.exports = function (e, t) {
          return $e(e, !0, !0, t);
        };
      }).call(this, r(21), r(11)(e));
    },
    function (e, t) {
      var r;
      r = (function () {
        return this;
      })();
      try {
        r = r || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (r = window);
      }
      e.exports = r;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = i(this, l(t).call(this, "bezier", r))).colors = e),
            n
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalBezier(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(9)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r, n, o, a) {
          var u;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((u = i(this, l(t).call(this, "binary", n, o, a))).left = e),
            (u.right = r),
            u
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalBinaryOperation(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = i(this, l(t).call(this, "brewerConst", r))).name = e),
            n
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalBrewerConst(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = i(this, l(t).call(this, "colorByNumber", r))).value = e),
            n
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalColorByNumber(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r, n) {
          var o;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((o = i(this, l(t).call(this, "colorBySpaceParams", n))).space = e),
            (o.params = r),
            o
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalColorBySpaceParams(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = i(this, l(t).call(this, "colorByTemperature", r))).value = e),
            n
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalColorByTemperature(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = i(this, l(t).call(this, "colorByWavelength", r))).value = e),
            n
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalColorByWavelength(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = i(this, l(t).call(this, "colorHexLiteral", r))).value = e),
            n
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalColorHexLiteral(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = i(this, l(t).call(this, "colorNameLiteral", r))).value = e),
            n
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalColorNameLiteral(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e) {
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            i(this, l(t).call(this, "cubehelix", e))
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalCubehelix(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(10)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function i(e) {
        return (i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var c = (function (e) {
        function t(e, r, n) {
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            u(this, i(t).call(this, "getParam", e, r, void 0, void 0, n))
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && l(e, t);
          })(t, o["default"]),
          t
        );
      })();
      t.default = c;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = i(this, l(t).call(this, "getVar", r))).name = e),
            n
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalGetVar(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = i(this, l(t).call(this, "numberLiteral", r))).value = e),
            n
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalNumberLiteral(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = i(this, l(t).call(this, "parentheses", r))).expr = e),
            n
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalParentheses(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = i(this, l(t).call(this, "percent", r))).value = e),
            n
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalPercent(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(5)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e, t, r) {
        return (l =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)); );
                  return e;
                })(e, t);
                if (n) {
                  var o = Object.getOwnPropertyDescriptor(n, t);
                  return o.get ? o.get.call(r) : o.value;
                }
              })(e, t, r || e);
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var s = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = i(this, c(t).call(this, "program", r))).statements = e),
            n
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && f(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "getDto",
              value: function () {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                  r = l(c(t.prototype), "getDto", this).call(this, e);
                return delete r.$eval, r;
              },
            },
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalProgram(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = s;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e) {
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            i(this, l(t).call(this, "randomColor", e))
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalRandomColor(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r, n, o) {
          var a;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((a = i(this, l(t).call(this, "scale", o))).colors = e),
            (a.domain = r),
            (a.mode = n),
            a
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalScale(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(10)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function i(e) {
        return (i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var c = (function (e) {
        function t(e, r, n, o, a) {
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            u(this, i(t).call(this, "setParam", e, r, n, o, a))
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && l(e, t);
          })(t, o["default"]),
          t
        );
      })();
      t.default = c;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(0)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r, n) {
          var o;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((o = i(this, l(t).call(this, "setVar", n))).name = e),
            (o.value = r),
            o
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalSetVar(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(5)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e, t, r) {
        return (l =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)); );
                  return e;
                })(e, t);
                if (n) {
                  var o = Object.getOwnPropertyDescriptor(n, t);
                  return o.get ? o.get.call(r) : o.value;
                }
              })(e, t, r || e);
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var s = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = i(this, c(t).call(this, "statement", r))).expr = e),
            n
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && f(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "getDto",
              value: function () {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                  r = l(c(t.prototype), "getDto", this).call(this, e);
                return delete r.$eval, r;
              },
            },
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalStatement(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = s;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n,
        o = (n = r(9)) && n.__esModule ? n : { default: n };
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function (e) {
        function t(e, r, n, o) {
          var a;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((a = i(this, l(t).call(this, "unary", r, n, o))).value = e),
            a
          );
        }
        var r, n, a;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
          })(t, o["default"]),
          (r = t),
          (n = [
            {
              key: "_evaluateInternal",
              value: function (e) {
                return e.evalUnaryOperation(this);
              },
            },
          ]) && u(r.prototype, n),
          a && u(r, a),
          t
        );
      })();
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var n = l(r(7)),
        o = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
              }
          return (t.default = e), t;
        })(r(1)),
        a = l(r(3)),
        u = r(8),
        i = l(r(14));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function s(e, t) {
        return !t || ("object" !== c(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var v = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            s(this, p(t).call(this, "less"))
          );
        }
        var r, l, c;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && h(e, t);
          })(t, n["default"]),
          (r = t),
          (l = [
            {
              key: "evalProgram",
              value: function (e) {
                var t = this;
                return (
                  this.core.evalProgram(e),
                  e.statements.length > 1
                    ? e.statements
                        .map(function (e) {
                          return "".concat(e.evaluate(t), ";");
                        })
                        .join("\n")
                    : e.statements[0].evaluate(this)
                );
              },
            },
            {
              key: "evalStatement",
              value: function (e) {
                return e.expr.evaluate(this);
              },
            },
            {
              key: "evalParentheses",
              value: function (e) {
                return "(".concat(e.expr.evaluate(this), ")");
              },
            },
            {
              key: "evalNumberLiteral",
              value: function (e) {
                var t = this.core.evalNumberLiteral(e);
                return t % 1 == 0 ? t : t.toFixed(8).replace(/0+$/, "");
              },
            },
            {
              key: "evalPercent",
              value: function (e) {
                return "".concat(e.value.evaluate(this), "%");
              },
            },
            {
              key: "evalArrayLiteral",
              value: function (e) {
                var t = this;
                return e.value
                  .map(function (e) {
                    return e.evaluate(t);
                  })
                  .join(" ");
              },
            },
            {
              key: "evalArrayElement",
              value: function (e) {
                return "extract(".concat(this._unwrapParens(e.obj).evaluate(this), ", ").concat(e.name + 1, ")");
              },
            },
            {
              key: "evalColorNameLiteral",
              value: function (e) {
                return e.value;
              },
            },
            {
              key: "evalColorHexLiteral",
              value: function (e) {
                return (e.value.match(/^#/) ? "" : "#") + e.value;
              },
            },
            {
              key: "evalColorByNumber",
              value: function (e) {
                o.throwError("defining color by number is not supported by LESS", e.$loc);
              },
            },
            {
              key: "evalColorByTemperature",
              value: function (e) {
                o.throwError("defining color by temperature is not supported by LESS", e.$loc);
              },
            },
            {
              key: "evalColorByWavelength",
              value: function (e) {
                o.throwError("defining color by wavelength is not supported by LESS", e.$loc);
              },
            },
            {
              key: "evalColorBySpaceParams",
              value: function (e) {
                var t = this,
                  r = e.params.map(function (e) {
                    return e.evaluate(t);
                  }),
                  n = r.length > ("cmyk" === e.space ? 4 : 3),
                  o = void 0;
                switch (e.space) {
                  case "argb":
                    o = "".concat(e.space, "(").concat(r.join(", "), ")");
                    break;
                  case "rgb":
                  case "hsl":
                  case "hsv":
                    o = "".concat(e.space + (n ? "a" : ""), "(").concat(r.join(", "), ")");
                    break;
                  default:
                    this._unspColorSpace(e.space, e.$loc);
                }
                return o;
              },
            },
            {
              key: "evalRandomColor",
              value: function () {
                return '~"#`(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)`"';
              },
            },
            {
              key: "evalScale",
              value: function (e) {
                this._unspColorScale(e.$loc);
              },
            },
            {
              key: "evalBezier",
              value: function (e) {
                this._unspColorScale(e.$loc);
              },
            },
            {
              key: "evalCubehelix",
              value: function (e) {
                this._unspColorScale(e.$loc);
              },
            },
            {
              key: "evalBrewerConst",
              value: function (e) {
                return this.core
                  .evalBrewerConst(e)
                  .map(function (e) {
                    return e.hex();
                  })
                  .join(" ");
              },
            },
            {
              key: "evalUnaryMinus",
              value: function (e) {
                return "-".concat(e.value.evaluate(this));
              },
            },
            {
              key: "evalColorInverse",
              value: function (e) {
                return "(#fff - ".concat(e.value.evaluate(this), ")");
              },
            },
            {
              key: "evalCorrectLightness",
              value: function (e) {
                this._unspColorScale(e.$loc);
              },
            },
            {
              key: "evalNumbersAddition",
              value: function (e) {
                return this._arithmeticOp(e);
              },
            },
            {
              key: "evalNumbersSubtraction",
              value: function (e) {
                return this._arithmeticOp(e);
              },
            },
            {
              key: "evalNumbersMultiplication",
              value: function (e) {
                return this._arithmeticOp(e);
              },
            },
            {
              key: "evalNumbersDivision",
              value: function (e) {
                return this._arithmeticOp(e);
              },
            },
            {
              key: "evalColorAndNumberAddition",
              value: function (e) {
                return this._arithmeticOp(e);
              },
            },
            {
              key: "evalColorAndNumberSubtraction",
              value: function (e) {
                return this._arithmeticOp(e);
              },
            },
            {
              key: "evalColorAndNumberMultiplication",
              value: function (e) {
                return this._arithmeticOp(e);
              },
            },
            {
              key: "evalColorAndNumberDivision",
              value: function (e) {
                return this._arithmeticOp(e);
              },
            },
            {
              key: "evalNumberPower",
              value: function (e) {
                var t = this._unwrapParens(e.left).evaluate(this),
                  r = this._unwrapParens(e.right).evaluate(this);
                return "pow(".concat(t, ", ").concat(r, ")");
              },
            },
            {
              key: "evalColorsContrast",
              value: function (e) {
                o.throwError("calculating numeric contrast value is not supported by LESS", e.$loc);
              },
            },
            {
              key: "evalColorsMix",
              value: function (e) {
                var t = [this._unwrapParens(e.left).evaluate(this), this._unwrapParens(e.right).evaluate(this)],
                  r = (e.options || {}).ratio;
                r && t.push(this._toPercentage(r));
                var n = (e.options || {}).mode;
                n && "rgb" !== n && o.throwError("LESS supports mixing colors only in RGB color space", e.$loc);
                var a = "mix",
                  u = e.left.evaluate(this.core).hex("rgba").toLowerCase();
                return (
                  "#ffffffff" === u ? (t.shift(), (a = "tint")) : "#000000ff" === u && (t.shift(), (a = "shade")), "".concat(a, "(").concat(t.join(", "), ")")
                );
              },
            },
            {
              key: "evalColorsFromScaleProduction",
              value: function (e) {
                this._unspColorScale(e.$loc);
              },
            },
            {
              key: "evalColorDesaturate",
              value: function (e) {
                return this._funcOp(e.left, e.right, "desaturate", !0, !0);
              },
            },
            {
              key: "evalColorSaturate",
              value: function (e) {
                return this._funcOp(e.left, e.right, "saturate", !0, !0);
              },
            },
            {
              key: "evalColorDarken",
              value: function (e) {
                return this._funcOp(e.left, e.right, "darken", !0, !0);
              },
            },
            {
              key: "evalColorLighten",
              value: function (e) {
                return this._funcOp(e.left, e.right, "lighten", !0, !0);
              },
            },
            {
              key: "evalAddBlend",
              value: function (e) {
                return this._arithmeticOp(e);
              },
            },
            {
              key: "evalSubtractBlend",
              value: function (e) {
                return this._arithmeticOp(e);
              },
            },
            {
              key: "evalMultiplyBlend",
              value: function (e) {
                return this._funcOp(e.left, e.right, "multiply");
              },
            },
            {
              key: "evalDivideBlend",
              value: function (e) {
                return this._arithmeticOp(e);
              },
            },
            {
              key: "evalColorBurnBlend",
              value: function (e) {
                return this._unspColorBlend(a.default.ColorBurn, e.$loc);
              },
            },
            {
              key: "evalColorDodgeBlend",
              value: function (e) {
                return this._unspColorBlend(a.default.ColorDodge, e.$loc);
              },
            },
            {
              key: "evalDarkenBlend",
              value: function (e) {
                return this._unspColorBlend(a.default.Darken, e.$loc);
              },
            },
            {
              key: "evalLightenBlend",
              value: function (e) {
                return this._unspColorBlend(a.default.Lighten, e.$loc);
              },
            },
            {
              key: "evalScreenBlend",
              value: function (e) {
                return this._funcOp(e.left, e.right, "screen");
              },
            },
            {
              key: "evalOverlayBlend",
              value: function (e) {
                return this._funcOp(e.left, e.right, "overlay");
              },
            },
            {
              key: "evalHardLightBlend",
              value: function (e) {
                return this._funcOp(e.left, e.right, "hardlight");
              },
            },
            {
              key: "evalSoftLightBlend",
              value: function (e) {
                return this._funcOp(e.left, e.right, "softlight");
              },
            },
            {
              key: "evalDifferenceBlend",
              value: function (e) {
                return this._funcOp(e.left, e.right, "difference");
              },
            },
            {
              key: "evalExclusionBlend",
              value: function (e) {
                return this._funcOp(e.left, e.right, "exclusion");
              },
            },
            {
              key: "evalNegateBlend",
              value: function (e) {
                return this._funcOp(e.left, e.right, "negation");
              },
            },
            {
              key: "evalManageColorNumber",
              value: function (e) {
                o.throwError("defining color by number is not supported by LESS", e.$loc);
              },
            },
            {
              key: "evalManageColorTemperature",
              value: function (e) {
                o.throwError("defining color by temperature is not supported by LESS", e.$loc);
              },
            },
            {
              key: "evalManageColorLuminance",
              value: function (e) {
                var t = void 0;
                return (
                  void 0 === e.value
                    ? (t = "luma(".concat(this._unwrapParens(e.obj).evaluate(this), ")"))
                    : o.throwError("setting luminance is not supported by LESS", e.$loc),
                  t
                );
              },
            },
            {
              key: "evalManageColorAlpha",
              value: function (e) {
                var t = void 0;
                return (
                  void 0 === e.value
                    ? (t = "alpha(".concat(this._unwrapParens(e.obj).evaluate(this), ")"))
                    : "+" === e.operator
                    ? (t = this._funcOp(e.obj, e.value, "fadein", !0))
                    : "-" === e.operator
                    ? (t = this._funcOp(e.obj, e.value, "fadeout", !0))
                    : e.operator
                    ? o.throwError("assignment operator '".concat(e.operator, "=' for alpha channel is not supported by LESS"), e.$loc)
                    : (t = this._funcOp(e.obj, e.value, "fade", !0)),
                  t
                );
              },
            },
            {
              key: "evalManageColorCompRgbR",
              value: function (e) {
                return this._getColorCompOp(e, "rgb", "red");
              },
            },
            {
              key: "evalManageColorCompRgbG",
              value: function (e) {
                return this._getColorCompOp(e, "rgb", "green");
              },
            },
            {
              key: "evalManageColorCompRgbB",
              value: function (e) {
                return this._getColorCompOp(e, "rgb", "blue");
              },
            },
            {
              key: "evalManageColorCompCmykC",
              value: function (e) {
                this._unspColorSpace("cmyk", e.$loc);
              },
            },
            {
              key: "evalManageColorCompCmykM",
              value: function (e) {
                this._unspColorSpace("cmyk", e.$loc);
              },
            },
            {
              key: "evalManageColorCompCmykY",
              value: function (e) {
                this._unspColorSpace("cmyk", e.$loc);
              },
            },
            {
              key: "evalManageColorCompCmykK",
              value: function (e) {
                this._unspColorSpace("cmyk", e.$loc);
              },
            },
            {
              key: "evalManageColorCompHslH",
              value: function (e) {
                return this._getColorCompOp(e, "hsl", "hue");
              },
            },
            {
              key: "evalManageColorCompHslS",
              value: function (e) {
                return this._getColorCompOp(e, "hsl", "saturation");
              },
            },
            {
              key: "evalManageColorCompHslL",
              value: function (e) {
                return this._getColorCompOp(e, "hsl", "lightness");
              },
            },
            {
              key: "evalManageColorCompHsvH",
              value: function (e) {
                return this._getColorCompOp(e, "hsv", "hsvhue");
              },
            },
            {
              key: "evalManageColorCompHsvS",
              value: function (e) {
                return this._getColorCompOp(e, "hsv", "hsvsaturation");
              },
            },
            {
              key: "evalManageColorCompHsvV",
              value: function (e) {
                return this._getColorCompOp(e, "hsv", "hsvvalue");
              },
            },
            {
              key: "evalManageColorCompHsiH",
              value: function (e) {
                this._unspColorSpace("hsi", e.$loc);
              },
            },
            {
              key: "evalManageColorCompHsiS",
              value: function (e) {
                this._unspColorSpace("hsi", e.$loc);
              },
            },
            {
              key: "evalManageColorCompHsiI",
              value: function (e) {
                this._unspColorSpace("hsi", e.$loc);
              },
            },
            {
              key: "evalManageColorCompLabL",
              value: function (e) {
                this._unspColorSpace("lab", e.$loc);
              },
            },
            {
              key: "evalManageColorCompLabA",
              value: function (e) {
                this._unspColorSpace("lab", e.$loc);
              },
            },
            {
              key: "evalManageColorCompLabB",
              value: function (e) {
                this._unspColorSpace("lab", e.$loc);
              },
            },
            {
              key: "evalManageColorCompLchL",
              value: function (e) {
                this._unspColorSpace("lch", e.$loc);
              },
            },
            {
              key: "evalManageColorCompLchC",
              value: function (e) {
                this._unspColorSpace("lch", e.$loc);
              },
            },
            {
              key: "evalManageColorCompLchH",
              value: function (e) {
                this._unspColorSpace("lch", e.$loc);
              },
            },
            {
              key: "evalSetColorScalePadding",
              value: function (e) {
                this._unspColorScale(e.$loc);
              },
            },
            {
              key: "evalSetScaleDomain",
              value: function (e) {
                this._unspColorScale(e.$loc);
              },
            },
            {
              key: "evalSetCubehelixStart",
              value: function (e) {
                this._unspColorScale(e.$loc);
              },
            },
            {
              key: "evalSetCubehelixRotations",
              value: function (e) {
                this._unspColorScale(e.$loc);
              },
            },
            {
              key: "evalSetCubehelixHue",
              value: function (e) {
                this._unspColorScale(e.$loc);
              },
            },
            {
              key: "evalSetCubehelixGamma",
              value: function (e) {
                this._unspColorScale(e.$loc);
              },
            },
            {
              key: "evalSetCubehelixLightness",
              value: function (e) {
                this._unspColorScale(e.$loc);
              },
            },
            {
              key: "evalGetVar",
              value: function (e) {
                return "@".concat(e.name.replace(/^\$/, ""));
              },
            },
            {
              key: "evalSetVar",
              value: function (e) {
                return "@".concat(e.name.replace(/^\$/, ""), ": ").concat(e.value.evaluate(this));
              },
            },
            {
              key: "_arithmeticOp",
              value: function (e) {
                var t = e.left.evaluate(this),
                  r = e.right.evaluate(this);
                return "".concat(t, " ").concat(e.operator, " ").concat(r);
              },
            },
            {
              key: "_toPercentage",
              value: function (e) {
                var t = e.evaluate(this);
                return e instanceof u.PercentExpr
                  ? t
                  : e instanceof u.NumberLiteralExpr
                  ? 100 * this.core.evalNumberLiteral(e) + "%"
                  : "percentage(".concat(t, ")");
              },
            },
            {
              key: "_funcOp",
              value: function (e, t, r) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                  o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                  a = [this._unwrapParens(e).evaluate(this), n ? this._toPercentage(t) : t.evaluate(this)];
                o && a.push("relative");
                var u = "".concat(r, "(").concat(a.join(", "), ")");
                return u;
              },
            },
            {
              key: "_getColorCompOp",
              value: function (e, t, r) {
                if (void 0 === e.value) return "".concat(r, "(").concat(e.obj.evaluate(this), ")");
                o.throwError("setting components in ".concat(t.toUpperCase(), " color space is not supported by LESS"), e.$loc);
              },
            },
            {
              key: "_unspColorScale",
              value: function (e) {
                o.throwError("color scales are not supported by LESS", e);
              },
            },
            {
              key: "_unspColorSpace",
              value: function (e, t) {
                o.throwError("color space '".concat(e.toUpperCase(), "' is not supported by LESS"), t);
              },
            },
            {
              key: "_unspColorBlend",
              value: function (e, t) {
                o.throwError("'".concat(o.getObjKey(a.default, e), "' blending function is not supported by LESS"), t);
              },
            },
            {
              key: "core",
              get: function () {
                return i.default.instance;
              },
            },
          ]) && f(r.prototype, l),
          c && f(r, c),
          t
        );
      })();
      t.default = v;
    },
    function (e, t, r) {
      (function (e, n) {
        var o = (function () {
          var e = function (e, t, r, n) {
              for (r = r || {}, n = e.length; n--; r[e[n]] = t);
              return r;
            },
            t = [1, 28],
            r = [1, 30],
            n = [1, 31],
            o = [1, 32],
            a = [1, 33],
            u = [1, 34],
            i = [1, 35],
            l = [1, 36],
            c = [1, 37],
            f = [1, 26],
            s = [1, 27],
            p = [1, 29],
            h = [1, 16],
            v = [1, 17],
            y = [1, 18],
            b = [1, 19],
            d = [1, 20],
            m = [1, 21],
            g = [1, 22],
            _ = [1, 14],
            C = [1, 8],
            k = [1, 9],
            w = [1, 10],
            O = [1, 11],
            S = [1, 12],
            P = [1, 13],
            j = [1, 10, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 32, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 53, 54, 55],
            E = [1, 41],
            M = [1, 43],
            x = [1, 42],
            A = [1, 44],
            $ = [1, 45],
            L = [1, 46],
            N = [1, 47],
            B = [1, 48],
            I = [1, 49],
            R = [1, 50],
            T = [1, 51],
            D = [1, 52],
            H = [1, 53],
            V = [1, 54],
            U = [1, 55],
            G = [1, 56],
            F = [1, 57],
            q = [1, 58],
            W = [1, 59],
            Y = [1, 60],
            z = [7, 8, 27, 33, 47, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74],
            K = [2, 41],
            X = [1, 63],
            Z = [
              7, 8, 10, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 27, 29, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 47, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
              65, 66, 67, 68, 69, 70, 71, 72, 74,
            ],
            J = [2, 39],
            Q = [10, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 32, 35, 36, 37, 38, 39, 40, 41, 42],
            ee = [2, 19],
            te = [
              7, 8, 10, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 27, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 47, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
              66, 67, 68, 69, 70, 71, 72, 74,
            ],
            re = [7, 8, 27, 33, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 74],
            ne = [1, 117],
            oe = [7, 8, 27, 33, 53, 55, 59, 74],
            ae = [7, 8, 27, 33, 53, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 74],
            ue = [7, 8, 27, 33, 74],
            ie = [1, 128],
            le = [10, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42],
            ce = [1, 132],
            fe = {
              trace: function () {},
              yy: {},
              symbols_: {
                error: 2,
                program: 3,
                statements: 4,
                statement: 5,
                expr: 6,
                EOF: 7,
                ";": 8,
                number: 9,
                NUMBER: 10,
                exprList: 11,
                expr2: 12,
                array: 13,
                colorSpace2: 14,
                CSPACE_RGB: 15,
                CSPACE_CMYK: 16,
                CSPACE_HSL: 17,
                CSPACE_HSV: 18,
                CSPACE_HSI: 19,
                CSPACE_CIELAB: 20,
                CSPACE_CIELCH: 21,
                CSPACE_CIEHCL: 22,
                colorSpace: 23,
                CSPACE_ARGB: 24,
                CSPACE_CMY: 25,
                colorSpaceParamsList1: 26,
                ",": 27,
                colorWithStop: 28,
                ":": 29,
                colorsWithStopsList: 30,
                colorsWithStops: 31,
                "(": 32,
                ")": 33,
                "%": 34,
                COLOR_NAME: 35,
                COLOR_HEX: 36,
                COLOR_RANDOM: 37,
                COLOR_NUMBER: 38,
                COLOR_TEMPERATURE: 39,
                COLOR_WAVELENGTH: 40,
                BREWER_CONST: 41,
                VARIABLE: 42,
                exprWParen: 43,
                SCALE: 44,
                SCALE_BEZIER: 45,
                SCALE_CUBEHELIX: 46,
                PARAM: 47,
                "=": 48,
                "+=": 49,
                "-=": 50,
                "*=": 51,
                "/=": 52,
                "-": 53,
                "~": 54,
                "+": 55,
                "*": 56,
                "/": 57,
                "^": 58,
                "%%": 59,
                "<<": 60,
                ">>": 61,
                "<<<": 62,
                ">>>": 63,
                "!*": 64,
                "**": 65,
                "<*": 66,
                "*>": 67,
                "^*": 68,
                "^^": 69,
                "!^": 70,
                "->": 71,
                "|": 72,
                "{": 73,
                "}": 74,
                $accept: 0,
                $end: 1,
              },
              terminals_: {
                2: "error",
                7: "EOF",
                8: ";",
                10: "NUMBER",
                15: "CSPACE_RGB",
                16: "CSPACE_CMYK",
                17: "CSPACE_HSL",
                18: "CSPACE_HSV",
                19: "CSPACE_HSI",
                20: "CSPACE_CIELAB",
                21: "CSPACE_CIELCH",
                22: "CSPACE_CIEHCL",
                24: "CSPACE_ARGB",
                25: "CSPACE_CMY",
                27: ",",
                29: ":",
                32: "(",
                33: ")",
                34: "%",
                35: "COLOR_NAME",
                36: "COLOR_HEX",
                37: "COLOR_RANDOM",
                38: "COLOR_NUMBER",
                39: "COLOR_TEMPERATURE",
                40: "COLOR_WAVELENGTH",
                41: "BREWER_CONST",
                42: "VARIABLE",
                44: "SCALE",
                45: "SCALE_BEZIER",
                46: "SCALE_CUBEHELIX",
                47: "PARAM",
                48: "=",
                49: "+=",
                50: "-=",
                51: "*=",
                52: "/=",
                53: "-",
                54: "~",
                55: "+",
                56: "*",
                57: "/",
                58: "^",
                59: "%%",
                60: "<<",
                61: ">>",
                62: "<<<",
                63: ">>>",
                64: "!*",
                65: "**",
                66: "<*",
                67: "*>",
                68: "^*",
                69: "^^",
                70: "!^",
                71: "->",
                72: "|",
                73: "{",
                74: "}",
              },
              productions_: [
                0,
                [3, 1],
                [4, 1],
                [4, 2],
                [5, 2],
                [5, 2],
                [5, 3],
                [9, 1],
                [11, 2],
                [11, 2],
                [13, 1],
                [14, 1],
                [14, 1],
                [14, 1],
                [14, 1],
                [14, 1],
                [14, 1],
                [14, 1],
                [14, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [26, 5],
                [26, 7],
                [26, 9],
                [28, 3],
                [30, 1],
                [30, 2],
                [31, 3],
                [12, 1],
                [12, 2],
                [12, 1],
                [12, 1],
                [12, 1],
                [12, 2],
                [12, 2],
                [12, 2],
                [12, 4],
                [12, 1],
                [12, 1],
                [12, 1],
                [6, 1],
                [6, 1],
                [6, 2],
                [6, 2],
                [6, 3],
                [6, 2],
                [6, 3],
                [6, 2],
                [6, 1],
                [6, 2],
                [6, 3],
                [6, 4],
                [6, 4],
                [6, 4],
                [6, 4],
                [6, 4],
                [6, 2],
                [6, 2],
                [6, 2],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 3],
                [6, 6],
                [6, 6],
                [6, 7],
                [6, 3],
                [43, 3],
              ],
              performAction: function (e, t, r, n, o, a, u) {
                var i = a.length - 1;
                switch (o) {
                  case 1:
                    return new n.Program(a[i], this._$);
                  case 2:
                    this.$ = [new n.Statement(a[i], this._$)];
                    break;
                  case 3:
                    this.$ = a[i - 1].concat(new n.Statement(a[i], u[i]));
                    break;
                  case 4:
                  case 5:
                  case 28:
                    this.$ = a[i - 1];
                    break;
                  case 6:
                    this.$ = a[i - 2];
                    break;
                  case 7:
                    this.$ = new n.NumberLiteralExpr(a[i], this._$);
                    break;
                  case 8:
                    this.$ = [a[i - 1], a[i]];
                    break;
                  case 9:
                    this.$ = a[i - 1].concat(a[i]);
                    break;
                  case 10:
                    this.$ = new n.ArrayLiteralExpr(a[i], this._$);
                    break;
                  case 11:
                    this.$ = "rgb";
                    break;
                  case 12:
                    this.$ = "cmyk";
                    break;
                  case 13:
                    this.$ = "hsl";
                    break;
                  case 14:
                    this.$ = "hsv";
                    break;
                  case 15:
                    this.$ = "hsi";
                    break;
                  case 16:
                    this.$ = "lab";
                    break;
                  case 17:
                    this.$ = "lch";
                    break;
                  case 18:
                    this.$ = "hcl";
                    break;
                  case 20:
                    this.$ = "argb";
                    break;
                  case 21:
                    this.$ = "cmy";
                    break;
                  case 22:
                    this.$ = [a[i - 4], a[i - 2], a[i]];
                    break;
                  case 23:
                    this.$ = [a[i - 6], a[i - 4], a[i - 2], a[i]];
                    break;
                  case 24:
                    this.$ = [a[i - 8], a[i - 6], a[i - 4], a[i - 2], a[i]];
                    break;
                  case 25:
                    this.$ = [a[i - 2], a[i]];
                    break;
                  case 26:
                    this.$ = [[a[i][0]], [a[i][1]]];
                    break;
                  case 27:
                    this.$ = [a[i - 1][0].concat(a[i][0]), a[i - 1][1].concat(a[i][1])];
                    break;
                  case 30:
                    this.$ = new n.PercentExpr(a[i - 1], this._$);
                    break;
                  case 31:
                    this.$ = new n.ColorNameLiteralExpr(a[i], this._$);
                    break;
                  case 32:
                    this.$ = new n.ColorHexLiteralExpr(a[i], this._$);
                    break;
                  case 33:
                    this.$ = new n.RandomColorExpr(this._$);
                    break;
                  case 34:
                    this.$ = new n.ColorByNumberExpr(a[i], this._$);
                    break;
                  case 35:
                    this.$ = new n.ColorByTemperatureExpr(a[i], this._$);
                    break;
                  case 36:
                    this.$ = new n.ColorByWavelengthExpr(a[i], this._$);
                    break;
                  case 37:
                    this.$ = new n.ColorBySpaceParams(a[i - 3], a[i - 1], this._$);
                    break;
                  case 38:
                    this.$ = new n.BrewerConstExpr(a[i].replace(/^.+\./, ""), this._$);
                    break;
                  case 39:
                    this.$ = new n.GetVarExpr(a[i], this._$);
                    break;
                  case 43:
                    this.$ = new n.ColorBySpaceParams(a[i - 1], a[i].value, this._$);
                    break;
                  case 44:
                    this.$ = new n.ScaleExpr(a[i][0], a[i][1], void 0, this._$);
                    break;
                  case 45:
                    this.$ = new n.ScaleExpr(a[i - 1][0], a[i - 1][1], a[i], this._$);
                    break;
                  case 46:
                    this.$ = new n.ScaleExpr(a[i], void 0, void 0, this._$);
                    break;
                  case 47:
                    this.$ = new n.ScaleExpr(a[i - 1], void 0, a[i], this._$);
                    break;
                  case 48:
                    this.$ = new n.BezierExpr(a[i], this._$);
                    break;
                  case 49:
                    this.$ = new n.CubehelixExpr(this._$);
                    break;
                  case 50:
                    this.$ = new n.GetParamExpr(a[i - 1], a[i].replace(/^@/, ""), this._$);
                    break;
                  case 51:
                    this.$ = new n.SetParamExpr(a[i - 2], a[i - 1].replace(/^@/, ""), a[i], void 0, this._$);
                    break;
                  case 52:
                    this.$ = new n.SetParamExpr(a[i - 3], a[i - 2].replace(/^@/, ""), a[i], void 0, this._$);
                    break;
                  case 53:
                    this.$ = new n.SetParamExpr(a[i - 3], a[i - 2].replace(/^@/, ""), a[i], "+", this._$);
                    break;
                  case 54:
                    this.$ = new n.SetParamExpr(a[i - 3], a[i - 2].replace(/^@/, ""), a[i], "-", this._$);
                    break;
                  case 55:
                    this.$ = new n.SetParamExpr(a[i - 3], a[i - 2].replace(/^@/, ""), a[i], "*", this._$);
                    break;
                  case 56:
                    this.$ = new n.SetParamExpr(a[i - 3], a[i - 2].replace(/^@/, ""), a[i], "/", this._$);
                    break;
                  case 57:
                  case 58:
                  case 59:
                    this.$ = new n.UnaryExpr(a[i], a[i - 1], void 0, this._$);
                    break;
                  case 60:
                  case 61:
                  case 62:
                  case 63:
                  case 64:
                  case 65:
                  case 66:
                  case 67:
                  case 68:
                  case 69:
                  case 70:
                  case 71:
                  case 72:
                  case 73:
                  case 74:
                  case 75:
                  case 76:
                  case 77:
                  case 78:
                    this.$ = new n.BinaryExpr(a[i - 2], a[i], a[i - 1], void 0, this._$);
                    break;
                  case 79:
                    this.$ = new n.BinaryExpr(a[i - 5], a[i], a[i - 4], { mode: a[i - 2] }, this._$);
                    break;
                  case 80:
                    this.$ = new n.BinaryExpr(a[i - 5], a[i], a[i - 4], { ratio: a[i - 2] }, this._$);
                    break;
                  case 81:
                    this.$ = new n.BinaryExpr(a[i - 6], a[i], a[i - 5], { mode: a[i - 2], ratio: a[i - 3] }, this._$);
                    break;
                  case 82:
                    this.$ = new n.SetVarExpr(a[i - 2], a[i], this._$);
                    break;
                  case 83:
                    this.$ = new n.ParenthesesExpr(a[i - 1], this._$);
                }
              },
              table: [
                {
                  3: 1,
                  4: 2,
                  5: 3,
                  6: 4,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                { 1: [3] },
                {
                  1: [2, 1],
                  5: 38,
                  6: 4,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                e(j, [2, 2]),
                {
                  7: [1, 39],
                  8: [1, 40],
                  47: E,
                  53: M,
                  55: x,
                  56: A,
                  57: $,
                  58: L,
                  59: N,
                  60: B,
                  61: I,
                  62: R,
                  63: T,
                  64: D,
                  65: H,
                  66: V,
                  67: U,
                  68: G,
                  69: F,
                  70: q,
                  71: W,
                  72: Y,
                },
                e(z, K, {
                  9: 15,
                  43: 23,
                  14: 25,
                  12: 61,
                  23: 62,
                  10: t,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                }),
                e(z, [2, 42]),
                {
                  9: 15,
                  10: t,
                  11: 24,
                  12: 66,
                  13: 64,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 62,
                  24: f,
                  25: s,
                  32: [1, 65],
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  43: 23,
                },
                {
                  9: 15,
                  10: t,
                  12: 68,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 62,
                  24: f,
                  25: s,
                  31: 67,
                  32: [1, 69],
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  43: 23,
                },
                {
                  9: 15,
                  10: t,
                  12: 70,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 62,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  43: 23,
                },
                e(z, [2, 49]),
                {
                  6: 71,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 72,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 73,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                e(Z, J, { 48: [1, 74] }),
                e(Z, [2, 29], { 34: [1, 75] }),
                e(Z, [2, 31]),
                e(Z, [2, 32]),
                e(Z, [2, 33]),
                {
                  9: 15,
                  10: t,
                  12: 76,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 62,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  43: 23,
                },
                {
                  9: 15,
                  10: t,
                  12: 77,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 62,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  43: 23,
                },
                {
                  9: 15,
                  10: t,
                  12: 78,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 62,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  43: 23,
                },
                e(Z, [2, 38]),
                e(Z, [2, 40]),
                e(z, [2, 10], {
                  9: 15,
                  43: 23,
                  14: 25,
                  23: 62,
                  12: 79,
                  10: t,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                }),
                e(Q, ee),
                e(Q, [2, 20]),
                e(Q, [2, 21]),
                e(
                  [
                    7, 8, 10, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 27, 29, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 47, 53, 55, 56, 57, 58, 59, 60, 61,
                    62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74,
                  ],
                  [2, 7]
                ),
                {
                  6: 80,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                e(te, [2, 11]),
                e(te, [2, 12]),
                e(te, [2, 13]),
                e(te, [2, 14]),
                e(te, [2, 15]),
                e(te, [2, 16]),
                e(te, [2, 17]),
                e(te, [2, 18]),
                e(j, [2, 3]),
                e(j, [2, 4]),
                e(j, [2, 5], { 7: [1, 81] }),
                e(z, [2, 50], {
                  9: 15,
                  43: 23,
                  14: 25,
                  23: 62,
                  12: 82,
                  10: t,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  48: [1, 83],
                  49: [1, 84],
                  50: [1, 85],
                  51: [1, 86],
                  52: [1, 87],
                }),
                {
                  6: 88,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 89,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 90,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 91,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 92,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 93,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 94,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 95,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 96,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 97,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 98,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 99,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 100,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 101,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 102,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 103,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 104,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 105,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 106,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                  73: [1, 107],
                },
                e(te, [2, 8]),
                { 32: [1, 108] },
                e(Z, J),
                e(z, [2, 43]),
                {
                  6: 110,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  26: 109,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  9: 15,
                  10: t,
                  12: 61,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 62,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  43: 23,
                },
                e(z, [2, 44], { 14: 111, 15: r, 16: n, 17: o, 18: a, 19: u, 20: i, 21: l, 22: c }),
                e(z, [2, 46], { 14: 112, 15: r, 16: n, 17: o, 18: a, 19: u, 20: i, 21: l, 22: c }),
                {
                  6: 80,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 115,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  28: 114,
                  30: 113,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                e(z, [2, 48]),
                e(re, [2, 57], { 47: E, 71: W }),
                e(re, [2, 58], { 47: E, 71: W }),
                e(z, [2, 59]),
                {
                  6: 116,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                e(Z, [2, 30]),
                e(Z, [2, 34]),
                e(Z, [2, 35]),
                e(Z, [2, 36]),
                e(te, [2, 9]),
                {
                  33: ne,
                  47: E,
                  53: M,
                  55: x,
                  56: A,
                  57: $,
                  58: L,
                  59: N,
                  60: B,
                  61: I,
                  62: R,
                  63: T,
                  64: D,
                  65: H,
                  66: V,
                  67: U,
                  68: G,
                  69: F,
                  70: q,
                  71: W,
                  72: Y,
                },
                e(j, [2, 6]),
                e(z, [2, 51]),
                {
                  9: 15,
                  10: t,
                  12: 118,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 62,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  43: 23,
                },
                {
                  9: 15,
                  10: t,
                  12: 119,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 62,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  43: 23,
                },
                {
                  9: 15,
                  10: t,
                  12: 120,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 62,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  43: 23,
                },
                {
                  9: 15,
                  10: t,
                  12: 121,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 62,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  43: 23,
                },
                {
                  9: 15,
                  10: t,
                  12: 122,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 62,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  43: 23,
                },
                e(oe, [2, 60], { 47: E, 56: A, 57: $, 58: L, 60: B, 61: I, 62: R, 63: T, 64: D, 65: H, 66: V, 67: U, 68: G, 69: F, 70: q, 71: W, 72: Y }),
                e(oe, [2, 61], { 47: E, 56: A, 57: $, 58: L, 60: B, 61: I, 62: R, 63: T, 64: D, 65: H, 66: V, 67: U, 68: G, 69: F, 70: q, 71: W, 72: Y }),
                e(ae, [2, 62], { 47: E, 58: L, 71: W }),
                e(ae, [2, 63], { 47: E, 58: L, 71: W }),
                e(re, [2, 64], { 47: E, 71: W }),
                e(ue, [2, 65], {
                  47: E,
                  53: M,
                  55: x,
                  56: A,
                  57: $,
                  58: L,
                  60: B,
                  61: I,
                  62: R,
                  63: T,
                  64: D,
                  65: H,
                  66: V,
                  67: U,
                  68: G,
                  69: F,
                  70: q,
                  71: W,
                  72: Y,
                }),
                e(ae, [2, 66], { 47: E, 58: L, 71: W }),
                e(ae, [2, 67], { 47: E, 58: L, 71: W }),
                e(ae, [2, 68], { 47: E, 58: L, 71: W }),
                e(ae, [2, 69], { 47: E, 58: L, 71: W }),
                e(ae, [2, 70], { 47: E, 58: L, 71: W }),
                e(ae, [2, 71], { 47: E, 58: L, 71: W }),
                e(ae, [2, 72], { 47: E, 58: L, 71: W }),
                e(ae, [2, 73], { 47: E, 58: L, 71: W }),
                e(ae, [2, 74], { 47: E, 58: L, 71: W }),
                e(ae, [2, 75], { 47: E, 58: L, 71: W }),
                e(ae, [2, 76], { 47: E, 58: L, 71: W }),
                e([7, 8, 27, 33, 47, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 74], [2, 77]),
                e(ae, [2, 78], { 47: E, 58: L, 71: W }),
                {
                  6: 124,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 125,
                  13: 6,
                  14: 123,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 126,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  26: 109,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                { 33: [1, 127] },
                {
                  27: ie,
                  33: ne,
                  47: E,
                  53: M,
                  55: x,
                  56: A,
                  57: $,
                  58: L,
                  59: N,
                  60: B,
                  61: I,
                  62: R,
                  63: T,
                  64: D,
                  65: H,
                  66: V,
                  67: U,
                  68: G,
                  69: F,
                  70: q,
                  71: W,
                  72: Y,
                },
                e(z, [2, 45]),
                e(z, [2, 47]),
                {
                  9: 15,
                  10: t,
                  12: 131,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 62,
                  24: f,
                  25: s,
                  28: 130,
                  32: p,
                  33: [1, 129],
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  43: 23,
                },
                e(le, [2, 26]),
                e([33, 47, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72], K, {
                  9: 15,
                  43: 23,
                  14: 25,
                  12: 61,
                  23: 62,
                  10: t,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  24: f,
                  25: s,
                  29: ce,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                }),
                e(ue, [2, 82], {
                  47: E,
                  53: M,
                  55: x,
                  56: A,
                  57: $,
                  58: L,
                  59: N,
                  60: B,
                  61: I,
                  62: R,
                  63: T,
                  64: D,
                  65: H,
                  66: V,
                  67: U,
                  68: G,
                  69: F,
                  70: q,
                  71: W,
                  72: Y,
                }),
                e(Z, [2, 83]),
                e(z, [2, 52]),
                e(z, [2, 53]),
                e(z, [2, 54]),
                e(z, [2, 55]),
                e(z, [2, 56]),
                e(Q, ee, { 74: [1, 133] }),
                {
                  47: E,
                  53: M,
                  55: x,
                  56: A,
                  57: $,
                  58: L,
                  59: N,
                  60: B,
                  61: I,
                  62: R,
                  63: T,
                  64: D,
                  65: H,
                  66: V,
                  67: U,
                  68: G,
                  69: F,
                  70: q,
                  71: W,
                  72: Y,
                  74: [1, 134],
                },
                e([47, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74], K, {
                  9: 15,
                  43: 23,
                  12: 61,
                  23: 62,
                  14: 135,
                  10: t,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                }),
                {
                  27: ie,
                  47: E,
                  53: M,
                  55: x,
                  56: A,
                  57: $,
                  58: L,
                  59: N,
                  60: B,
                  61: I,
                  62: R,
                  63: T,
                  64: D,
                  65: H,
                  66: V,
                  67: U,
                  68: G,
                  69: F,
                  70: q,
                  71: W,
                  72: Y,
                },
                e(Z, [2, 37]),
                {
                  6: 136,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                e([7, 8, 15, 16, 17, 18, 19, 20, 21, 22, 27, 33, 47, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74], [2, 28]),
                e(le, [2, 27]),
                { 29: ce },
                {
                  9: 15,
                  10: t,
                  12: 137,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 62,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: X,
                  43: 23,
                },
                {
                  6: 138,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 139,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                { 32: ee, 74: [1, 140] },
                {
                  27: [1, 141],
                  47: E,
                  53: M,
                  55: x,
                  56: A,
                  57: $,
                  58: L,
                  59: N,
                  60: B,
                  61: I,
                  62: R,
                  63: T,
                  64: D,
                  65: H,
                  66: V,
                  67: U,
                  68: G,
                  69: F,
                  70: q,
                  71: W,
                  72: Y,
                },
                e(le, [2, 25]),
                e(ae, [2, 79], { 47: E, 58: L, 71: W }),
                e(ae, [2, 80], { 47: E, 58: L, 71: W }),
                {
                  6: 142,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  6: 143,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                e(ae, [2, 81], { 47: E, 58: L, 71: W }),
                {
                  27: [1, 144],
                  33: [2, 22],
                  47: E,
                  53: M,
                  55: x,
                  56: A,
                  57: $,
                  58: L,
                  59: N,
                  60: B,
                  61: I,
                  62: R,
                  63: T,
                  64: D,
                  65: H,
                  66: V,
                  67: U,
                  68: G,
                  69: F,
                  70: q,
                  71: W,
                  72: Y,
                },
                {
                  6: 145,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  27: [1, 146],
                  33: [2, 23],
                  47: E,
                  53: M,
                  55: x,
                  56: A,
                  57: $,
                  58: L,
                  59: N,
                  60: B,
                  61: I,
                  62: R,
                  63: T,
                  64: D,
                  65: H,
                  66: V,
                  67: U,
                  68: G,
                  69: F,
                  70: q,
                  71: W,
                  72: Y,
                },
                {
                  6: 147,
                  9: 15,
                  10: t,
                  11: 24,
                  12: 5,
                  13: 6,
                  14: 25,
                  15: r,
                  16: n,
                  17: o,
                  18: a,
                  19: u,
                  20: i,
                  21: l,
                  22: c,
                  23: 7,
                  24: f,
                  25: s,
                  32: p,
                  35: h,
                  36: v,
                  37: y,
                  38: b,
                  39: d,
                  40: m,
                  41: g,
                  42: _,
                  43: 23,
                  44: C,
                  45: k,
                  46: w,
                  53: O,
                  54: S,
                  55: P,
                },
                {
                  33: [2, 24],
                  47: E,
                  53: M,
                  55: x,
                  56: A,
                  57: $,
                  58: L,
                  59: N,
                  60: B,
                  61: I,
                  62: R,
                  63: T,
                  64: D,
                  65: H,
                  66: V,
                  67: U,
                  68: G,
                  69: F,
                  70: q,
                  71: W,
                  72: Y,
                },
              ],
              defaultActions: {},
              parseError: function (e, t) {
                if (!t.recoverable) {
                  var r = new Error(e);
                  throw ((r.hash = t), r);
                }
                this.trace(e);
              },
              parse: function (e) {
                var t = this,
                  r = [0],
                  n = [null],
                  o = [],
                  a = this.table,
                  u = "",
                  i = 0,
                  l = 0,
                  c = 0,
                  f = 2,
                  s = 1,
                  p = o.slice.call(arguments, 1),
                  h = Object.create(this.lexer),
                  v = { yy: {} };
                for (var y in this.yy) Object.prototype.hasOwnProperty.call(this.yy, y) && (v.yy[y] = this.yy[y]);
                h.setInput(e, v.yy), (v.yy.lexer = h), (v.yy.parser = this), void 0 === h.yylloc && (h.yylloc = {});
                var b = h.yylloc;
                o.push(b);
                var d = h.options && h.options.ranges;
                "function" == typeof v.yy.parseError ? (this.parseError = v.yy.parseError) : (this.parseError = Object.getPrototypeOf(this).parseError);
                for (
                  var m,
                    g,
                    _,
                    C,
                    k,
                    w,
                    O,
                    S,
                    P,
                    j = function () {
                      var e;
                      return "number" != typeof (e = h.lex() || s) && (e = t.symbols_[e] || e), e;
                    },
                    E = {};
                  ;

                ) {
                  if (
                    ((_ = r[r.length - 1]),
                    this.defaultActions[_] ? (C = this.defaultActions[_]) : (null == m && (m = j()), (C = a[_] && a[_][m])),
                    void 0 === C || !C.length || !C[0])
                  ) {
                    var M = "";
                    for (w in ((P = []), a[_])) this.terminals_[w] && w > f && P.push("'" + this.terminals_[w] + "'");
                    (M = h.showPosition
                      ? "Parse error on line " +
                        (i + 1) +
                        ":\n" +
                        h.showPosition() +
                        "\nExpecting " +
                        P.join(", ") +
                        ", got '" +
                        (this.terminals_[m] || m) +
                        "'"
                      : "Parse error on line " + (i + 1) + ": Unexpected " + (m == s ? "end of input" : "'" + (this.terminals_[m] || m) + "'")),
                      this.parseError(M, { text: h.match, token: this.terminals_[m] || m, line: h.yylineno, loc: b, expected: P });
                  }
                  if (C[0] instanceof Array && C.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + _ + ", token: " + m);
                  switch (C[0]) {
                    case 1:
                      r.push(m),
                        n.push(h.yytext),
                        o.push(h.yylloc),
                        r.push(C[1]),
                        (m = null),
                        g ? ((m = g), (g = null)) : ((l = h.yyleng), (u = h.yytext), (i = h.yylineno), (b = h.yylloc), c > 0 && c--);
                      break;
                    case 2:
                      if (
                        ((O = this.productions_[C[1]][1]),
                        (E.$ = n[n.length - O]),
                        (E._$ = {
                          first_line: o[o.length - (O || 1)].first_line,
                          last_line: o[o.length - 1].last_line,
                          first_column: o[o.length - (O || 1)].first_column,
                          last_column: o[o.length - 1].last_column,
                        }),
                        d && (E._$.range = [o[o.length - (O || 1)].range[0], o[o.length - 1].range[1]]),
                        void 0 !== (k = this.performAction.apply(E, [u, l, i, v.yy, C[1], n, o].concat(p))))
                      )
                        return k;
                      O && ((r = r.slice(0, -1 * O * 2)), (n = n.slice(0, -1 * O)), (o = o.slice(0, -1 * O))),
                        r.push(this.productions_[C[1]][0]),
                        n.push(E.$),
                        o.push(E._$),
                        (S = a[r[r.length - 2]][r[r.length - 1]]),
                        r.push(S);
                      break;
                    case 3:
                      return !0;
                  }
                }
                return !0;
              },
            },
            se = {
              EOF: 1,
              parseError: function (e, t) {
                if (!this.yy.parser) throw new Error(e);
                this.yy.parser.parseError(e, t);
              },
              setInput: function (e, t) {
                return (
                  (this.yy = t || this.yy || {}),
                  (this._input = e),
                  (this._more = this._backtrack = this.done = !1),
                  (this.yylineno = this.yyleng = 0),
                  (this.yytext = this.matched = this.match = ""),
                  (this.conditionStack = ["INITIAL"]),
                  (this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }),
                  this.options.ranges && (this.yylloc.range = [0, 0]),
                  (this.offset = 0),
                  this
                );
              },
              input: function () {
                var e = this._input[0];
                return (
                  (this.yytext += e),
                  this.yyleng++,
                  this.offset++,
                  (this.match += e),
                  (this.matched += e),
                  e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++,
                  this.options.ranges && this.yylloc.range[1]++,
                  (this._input = this._input.slice(1)),
                  e
                );
              },
              unput: function (e) {
                var t = e.length,
                  r = e.split(/(?:\r\n?|\n)/g);
                (this._input = e + this._input), (this.yytext = this.yytext.substr(0, this.yytext.length - t)), (this.offset -= t);
                var n = this.match.split(/(?:\r\n?|\n)/g);
                (this.match = this.match.substr(0, this.match.length - 1)),
                  (this.matched = this.matched.substr(0, this.matched.length - 1)),
                  r.length - 1 && (this.yylineno -= r.length - 1);
                var o = this.yylloc.range;
                return (
                  (this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: r
                      ? (r.length === n.length ? this.yylloc.first_column : 0) + n[n.length - r.length].length - r[0].length
                      : this.yylloc.first_column - t,
                  }),
                  this.options.ranges && (this.yylloc.range = [o[0], o[0] + this.yyleng - t]),
                  (this.yyleng = this.yytext.length),
                  this
                );
              },
              more: function () {
                return (this._more = !0), this;
              },
              reject: function () {
                return this.options.backtrack_lexer
                  ? ((this._backtrack = !0), this)
                  : this.parseError(
                      "Lexical error on line " +
                        (this.yylineno + 1) +
                        ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
                        this.showPosition(),
                      { text: "", token: null, line: this.yylineno }
                    );
              },
              less: function (e) {
                this.unput(this.match.slice(e));
              },
              pastInput: function () {
                var e = this.matched.substr(0, this.matched.length - this.match.length);
                return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
              },
              upcomingInput: function () {
                var e = this.match;
                return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
              },
              showPosition: function () {
                var e = this.pastInput(),
                  t = new Array(e.length + 1).join("-");
                return e + this.upcomingInput() + "\n" + t + "^";
              },
              test_match: function (e, t) {
                var r, n, o;
                if (
                  (this.options.backtrack_lexer &&
                    ((o = {
                      yylineno: this.yylineno,
                      yylloc: {
                        first_line: this.yylloc.first_line,
                        last_line: this.last_line,
                        first_column: this.yylloc.first_column,
                        last_column: this.yylloc.last_column,
                      },
                      yytext: this.yytext,
                      match: this.match,
                      matches: this.matches,
                      matched: this.matched,
                      yyleng: this.yyleng,
                      offset: this.offset,
                      _more: this._more,
                      _input: this._input,
                      yy: this.yy,
                      conditionStack: this.conditionStack.slice(0),
                      done: this.done,
                    }),
                    this.options.ranges && (o.yylloc.range = this.yylloc.range.slice(0))),
                  (n = e[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += n.length),
                  (this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: n ? n[n.length - 1].length - n[n.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length,
                  }),
                  (this.yytext += e[0]),
                  (this.match += e[0]),
                  (this.matches = e),
                  (this.yyleng = this.yytext.length),
                  this.options.ranges && (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
                  (this._more = !1),
                  (this._backtrack = !1),
                  (this._input = this._input.slice(e[0].length)),
                  (this.matched += e[0]),
                  (r = this.performAction.call(this, this.yy, this, t, this.conditionStack[this.conditionStack.length - 1])),
                  this.done && this._input && (this.done = !1),
                  r)
                )
                  return r;
                if (this._backtrack) {
                  for (var a in o) this[a] = o[a];
                  return !1;
                }
                return !1;
              },
              next: function () {
                if (this.done) return this.EOF;
                var e, t, r, n;
                this._input || (this.done = !0), this._more || ((this.yytext = ""), (this.match = ""));
                for (var o = this._currentRules(), a = 0; a < o.length; a++)
                  if ((r = this._input.match(this.rules[o[a]])) && (!t || r[0].length > t[0].length)) {
                    if (((t = r), (n = a), this.options.backtrack_lexer)) {
                      if (!1 !== (e = this.test_match(r, o[a]))) return e;
                      if (this._backtrack) {
                        t = !1;
                        continue;
                      }
                      return !1;
                    }
                    if (!this.options.flex) break;
                  }
                return t
                  ? !1 !== (e = this.test_match(t, o[n])) && e
                  : "" === this._input
                  ? this.EOF
                  : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                      text: "",
                      token: null,
                      line: this.yylineno,
                    });
              },
              lex: function () {
                var e = this.next();
                return e || this.lex();
              },
              begin: function (e) {
                this.conditionStack.push(e);
              },
              popState: function () {
                return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
              },
              _currentRules: function () {
                return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]
                  ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                  : this.conditions.INITIAL.rules;
              },
              topState: function (e) {
                return (e = this.conditionStack.length - 1 - Math.abs(e || 0)) >= 0 ? this.conditionStack[e] : "INITIAL";
              },
              pushState: function (e) {
                this.begin(e);
              },
              stateStackSize: function () {
                return this.conditionStack.length;
              },
              options: { flex: !0, "case-insensitive": !0, ranges: !0 },
              performAction: function (e, t, r, n) {
                switch (r) {
                  case 0:
                    break;
                  case 1:
                    return "NUMBER";
                  case 2:
                    return "COLOR_HEX";
                  case 3:
                    return "COLOR_NAME";
                  case 4:
                    return "BREWER_CONST";
                  case 5:
                    return "COLOR_RANDOM";
                  case 6:
                    return "COLOR_NUMBER";
                  case 7:
                    return "COLOR_TEMPERATURE";
                  case 8:
                    return "COLOR_WAVELENGTH";
                  case 9:
                    return "CSPACE_RGB";
                  case 10:
                    return "CSPACE_ARGB";
                  case 11:
                    return "CSPACE_CMY";
                  case 12:
                    return "CSPACE_CMYK";
                  case 13:
                    return "CSPACE_HSL";
                  case 14:
                    return "CSPACE_HSV";
                  case 15:
                    return "CSPACE_HSI";
                  case 16:
                    return "CSPACE_CIELAB";
                  case 17:
                    return "CSPACE_CIELCH";
                  case 18:
                    return "CSPACE_CIEHCL";
                  case 19:
                    return "SCALE";
                  case 20:
                    return "SCALE_BEZIER";
                  case 21:
                    return "SCALE_CUBEHELIX";
                  case 22:
                    return "PARAM";
                  case 23:
                    return "VARIABLE";
                  case 24:
                    return "%%";
                  case 25:
                    return "%";
                  case 26:
                    return "~";
                  case 27:
                    return "+=";
                  case 28:
                    return "+";
                  case 29:
                    return "->";
                  case 30:
                    return "-=";
                  case 31:
                    return "-";
                  case 32:
                    return "^^";
                  case 33:
                    return "^*";
                  case 34:
                    return "!^";
                  case 35:
                    return "^";
                  case 36:
                    return "**";
                  case 37:
                    return "!*";
                  case 38:
                    return "<*";
                  case 39:
                    return "*>";
                  case 40:
                    return "*=";
                  case 41:
                    return "*";
                  case 42:
                    return "/=";
                  case 43:
                    return "/";
                  case 44:
                    return "(";
                  case 45:
                    return ")";
                  case 46:
                    return "{";
                  case 47:
                    return "}";
                  case 48:
                    return "[";
                  case 49:
                    return "]";
                  case 50:
                    return ",";
                  case 51:
                    return "=";
                  case 52:
                    return "|";
                  case 53:
                    return "<<<";
                  case 54:
                    return ">>>";
                  case 55:
                    return "<<";
                  case 56:
                    return ">>";
                  case 57:
                    return ":";
                  case 58:
                    return ";";
                  case 59:
                    return "EOF";
                  case 60:
                    return "INVALID";
                  case 61:
                    console.log(t.yytext);
                }
              },
              rules: [
                /^(?:\s+)/i,
                /^(?:((0|[1-9]\d*|)\.\d+|(0|[1-9]\d*)\.\d*|\d+|0o[0-7]+|0x[a-f\d]+|0b[01]+)\b)/i,
                /^(?:#?([a-f\d]{3}|[a-f\d]{6}|[a-f\d]{8})\b)/i,
                /^(?:(aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)\b)/i,
                /^(?:(OrRd|PuBu|BuPu|Oranges|BuGn|YlOrBr|YlGn|Reds|RdPu|Greens|YlGnBu|Purples|GnBu|Greys|YlOrRd|PuRd|Blues|PuBuGn|Spectral|RdYlGn|RdBu|PiYG|PRGn|RdYlBu|BrBG|RdGy|PuOr|Set2|Accent|Set1|Set3|Dark2|Paired|Pastel2|Pastel1)\b)/i,
                /^(?:(random|rand)\b)/i,
                /^(?:(number|num|n)\b)/i,
                /^(?:(temperature|temp|t)\b)/i,
                /^(?:(wavelength|wl)\b)/i,
                /^(?:rgba?\b)/i,
                /^(?:argb\b)/i,
                /^(?:cmya?\b)/i,
                /^(?:cmyka?\b)/i,
                /^(?:hsla?\b)/i,
                /^(?:hs(v|b)a?\b)/i,
                /^(?:hsia?\b)/i,
                /^(?:laba?\b)/i,
                /^(?:lcha?\b)/i,
                /^(?:hcla?\b)/i,
                /^(?:scale\b)/i,
                /^(?:bezier\b)/i,
                /^(?:cubehelix\b)/i,
                /^(?:@(\w+\.)*\w+\b)/i,
                /^(?:\$\w*\b|\$)/i,
                /^(?:%%)/i,
                /^(?:%)/i,
                /^(?:~)/i,
                /^(?:\+=)/i,
                /^(?:\+)/i,
                /^(?:->)/i,
                /^(?:-=)/i,
                /^(?:-)/i,
                /^(?:\^\^)/i,
                /^(?:\^\*)/i,
                /^(?:!\^)/i,
                /^(?:\^)/i,
                /^(?:\*\*)/i,
                /^(?:!\*)/i,
                /^(?:<\*)/i,
                /^(?:\*>)/i,
                /^(?:\*=)/i,
                /^(?:\*)/i,
                /^(?:\/=)/i,
                /^(?:\/)/i,
                /^(?:\()/i,
                /^(?:\))/i,
                /^(?:\{)/i,
                /^(?:\})/i,
                /^(?:\[)/i,
                /^(?:\])/i,
                /^(?:,)/i,
                /^(?:=)/i,
                /^(?:\|)/i,
                /^(?:<<<)/i,
                /^(?:>>>)/i,
                /^(?:<<)/i,
                /^(?:>>)/i,
                /^(?::)/i,
                /^(?:;)/i,
                /^(?:$)/i,
                /^(?:.)/i,
                /^(?:.)/i,
              ],
              conditions: {
                INITIAL: {
                  rules: [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
                    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
                  ],
                  inclusive: !0,
                },
              },
            };
          function pe() {
            this.yy = {};
          }
          return (fe.lexer = se), (pe.prototype = fe), (fe.Parser = pe), new pe();
        })();
        (t.parser = o),
          (t.Parser = o.Parser),
          (t.parse = function () {
            return o.parse.apply(o, arguments);
          }),
          (t.main = function (n) {
            n[1] || (console.log("Usage: " + n[0] + " FILE"), e.exit(1));
            var o = r(46).readFileSync(r(47).normalize(n[1]), "utf8");
            return t.parser.parse(o);
          }),
          r.c[r.s] === n && t.main(e.argv.slice(1));
      }).call(this, r(15), r(11)(e));
    },
    function (e, t) {},
    function (e, t, r) {
      (function (e) {
        function r(e, t) {
          for (var r = 0, n = e.length - 1; n >= 0; n--) {
            var o = e[n];
            "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--);
          }
          if (t) for (; r--; r) e.unshift("..");
          return e;
        }
        function n(e, t) {
          if (e.filter) return e.filter(t);
          for (var r = [], n = 0; n < e.length; n++) t(e[n], n, e) && r.push(e[n]);
          return r;
        }
        (t.resolve = function () {
          for (var t = "", o = !1, a = arguments.length - 1; a >= -1 && !o; a--) {
            var u = a >= 0 ? arguments[a] : e.cwd();
            if ("string" != typeof u) throw new TypeError("Arguments to path.resolve must be strings");
            u && ((t = u + "/" + t), (o = "/" === u.charAt(0)));
          }
          return (
            (o ? "/" : "") +
              (t = r(
                n(t.split("/"), function (e) {
                  return !!e;
                }),
                !o
              ).join("/")) || "."
          );
        }),
          (t.normalize = function (e) {
            var a = t.isAbsolute(e),
              u = "/" === o(e, -1);
            return (
              (e = r(
                n(e.split("/"), function (e) {
                  return !!e;
                }),
                !a
              ).join("/")) ||
                a ||
                (e = "."),
              e && u && (e += "/"),
              (a ? "/" : "") + e
            );
          }),
          (t.isAbsolute = function (e) {
            return "/" === e.charAt(0);
          }),
          (t.join = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(
              n(e, function (e, t) {
                if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                return e;
              }).join("/")
            );
          }),
          (t.relative = function (e, r) {
            function n(e) {
              for (var t = 0; t < e.length && "" === e[t]; t++);
              for (var r = e.length - 1; r >= 0 && "" === e[r]; r--);
              return t > r ? [] : e.slice(t, r - t + 1);
            }
            (e = t.resolve(e).substr(1)), (r = t.resolve(r).substr(1));
            for (var o = n(e.split("/")), a = n(r.split("/")), u = Math.min(o.length, a.length), i = u, l = 0; l < u; l++)
              if (o[l] !== a[l]) {
                i = l;
                break;
              }
            var c = [];
            for (l = i; l < o.length; l++) c.push("..");
            return (c = c.concat(a.slice(i))).join("/");
          }),
          (t.sep = "/"),
          (t.delimiter = ":"),
          (t.dirname = function (e) {
            if (("string" != typeof e && (e += ""), 0 === e.length)) return ".";
            for (var t = e.charCodeAt(0), r = 47 === t, n = -1, o = !0, a = e.length - 1; a >= 1; --a)
              if (47 === (t = e.charCodeAt(a))) {
                if (!o) {
                  n = a;
                  break;
                }
              } else o = !1;
            return -1 === n ? (r ? "/" : ".") : r && 1 === n ? "/" : e.slice(0, n);
          }),
          (t.basename = function (e, t) {
            var r = (function (e) {
              "string" != typeof e && (e += "");
              var t,
                r = 0,
                n = -1,
                o = !0;
              for (t = e.length - 1; t >= 0; --t)
                if (47 === e.charCodeAt(t)) {
                  if (!o) {
                    r = t + 1;
                    break;
                  }
                } else -1 === n && ((o = !1), (n = t + 1));
              return -1 === n ? "" : e.slice(r, n);
            })(e);
            return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)), r;
          }),
          (t.extname = function (e) {
            "string" != typeof e && (e += "");
            for (var t = -1, r = 0, n = -1, o = !0, a = 0, u = e.length - 1; u >= 0; --u) {
              var i = e.charCodeAt(u);
              if (47 !== i) -1 === n && ((o = !1), (n = u + 1)), 46 === i ? (-1 === t ? (t = u) : 1 !== a && (a = 1)) : -1 !== t && (a = -1);
              else if (!o) {
                r = u + 1;
                break;
              }
            }
            return -1 === t || -1 === n || 0 === a || (1 === a && t === n - 1 && t === r + 1) ? "" : e.slice(t, n);
          });
        var o =
          "b" === "ab".substr(-1)
            ? function (e, t, r) {
                return e.substr(t, r);
              }
            : function (e, t, r) {
                return t < 0 && (t = e.length + t), e.substr(t, r);
              };
      }).call(this, r(15));
    },
  ]);
});
