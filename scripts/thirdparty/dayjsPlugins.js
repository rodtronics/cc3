!(function (r, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((r = "undefined" != typeof globalThis ? globalThis : r || self).dayjs_plugin_relativeTime = e());
})(this, function () {
  "use strict";
  return function (r, e, t) {
    r = r || {};
    var n = e.prototype,
      o = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years",
      };
    function i(r, e, t, o) {
      return n.fromToBase(r, e, t, o);
    }
    (t.en.relativeTime = o),
      (n.fromToBase = function (e, n, i, d, u) {
        for (
          var f,
            a,
            s,
            l = i.$locale().relativeTime || o,
            h = r.thresholds || [
              { l: "s", r: 44, d: "second" },
              { l: "m", r: 89 },
              { l: "mm", r: 44, d: "minute" },
              { l: "h", r: 89 },
              { l: "hh", r: 21, d: "hour" },
              { l: "d", r: 35 },
              { l: "dd", r: 25, d: "day" },
              { l: "M", r: 45 },
              { l: "MM", r: 10, d: "month" },
              { l: "y", r: 17 },
              { l: "yy", d: "year" },
            ],
            m = h.length,
            c = 0;
          c < m;
          c += 1
        ) {
          var y = h[c];
          y.d && (f = d ? t(e).diff(i, y.d, !0) : i.diff(e, y.d, !0));
          var p = (r.rounding || Math.round)(Math.abs(f));
          if (((s = f > 0), p <= y.r || !y.r)) {
            p <= 1 && c > 0 && (y = h[c - 1]);
            var v = l[y.l];
            u && (p = u("" + p)), (a = "string" == typeof v ? v.replace("%d", p) : v(p, n, y.l, s));
            break;
          }
        }
        if (n) return a;
        var M = s ? l.future : l.past;
        return "function" == typeof M ? M(a) : M.replace("%s", a);
      }),
      (n.to = function (r, e) {
        return i(r, e, this, !0);
      }),
      (n.from = function (r, e) {
        return i(r, e, this);
      });
    var d = function (r) {
      return r.$u ? t.utc() : t();
    };
    (n.toNow = function (r) {
      return this.to(d(this), r);
    }),
      (n.fromNow = function (r) {
        return this.from(d(this), r);
      });
  };
});

!(function (t, s) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = s())
    : "function" == typeof define && define.amd
    ? define(s)
    : (t.dayjs_plugin_duration = s());
})(this, function () {
  "use strict";
  var t,
    s,
    n = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
    i =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
    e = {
      years: 31536e6,
      months: 2592e6,
      days: 864e5,
      hours: 36e5,
      minutes: 6e4,
      seconds: 1e3,
      milliseconds: 1,
      weeks: 6048e5,
    },
    r = function (t) {
      return t instanceof c;
    },
    o = function (t, s, n) {
      return new c(t, n, s.$l);
    },
    u = function (t) {
      return s.p(t) + "s";
    },
    h = function (t) {
      return t < 0;
    },
    a = function (t) {
      return h(t) ? Math.ceil(t) : Math.floor(t);
    },
    d = function (t, s) {
      return t
        ? h(t)
          ? {
              negative: !0,
              format:
                "" +
                (function (t) {
                  return Math.abs(t);
                })(t) +
                s,
            }
          : { negative: !1, format: "" + t + s }
        : { negative: !1, format: "" };
    },
    c = (function () {
      function h(t, s, n) {
        var r = this;
        if (((this.$d = {}), (this.$l = n), s)) return o(t * e[u(s)], this);
        if ("number" == typeof t) return (this.$ms = t), this.parseFromMilliseconds(), this;
        if ("object" == typeof t)
          return (
            Object.keys(t).forEach(function (s) {
              r.$d[u(s)] = t[s];
            }),
            this.calMilliseconds(),
            this
          );
        if ("string" == typeof t) {
          var h = t.match(i);
          if (h)
            return (
              (this.$d.years = h[2]),
              (this.$d.months = h[3]),
              (this.$d.weeks = h[4]),
              (this.$d.days = h[5]),
              (this.$d.hours = h[6]),
              (this.$d.minutes = h[7]),
              (this.$d.seconds = h[8]),
              this.calMilliseconds(),
              this
            );
        }
        return this;
      }
      var c = h.prototype;
      return (
        (c.calMilliseconds = function () {
          var t = this;
          this.$ms = Object.keys(this.$d).reduce(function (s, n) {
            return s + (t.$d[n] || 0) * e[n];
          }, 0);
        }),
        (c.parseFromMilliseconds = function () {
          var t = this.$ms;
          (this.$d.years = a(t / 31536e6)),
            (t %= 31536e6),
            (this.$d.months = a(t / 2592e6)),
            (t %= 2592e6),
            (this.$d.days = a(t / 864e5)),
            (t %= 864e5),
            (this.$d.hours = a(t / 36e5)),
            (t %= 36e5),
            (this.$d.minutes = a(t / 6e4)),
            (t %= 6e4),
            (this.$d.seconds = a(t / 1e3)),
            (t %= 1e3),
            (this.$d.milliseconds = t);
        }),
        (c.toISOString = function () {
          var t = d(this.$d.years, "Y"),
            s = d(this.$d.months, "M"),
            n = +this.$d.days || 0;
          this.$d.weeks && (n += 7 * this.$d.weeks);
          var i = d(n, "D"),
            e = d(this.$d.hours, "H"),
            r = d(this.$d.minutes, "M"),
            o = this.$d.seconds || 0;
          this.$d.milliseconds && (o += this.$d.milliseconds / 1e3);
          var u = d(o, "S"),
            h = t.negative || s.negative || i.negative || e.negative || r.negative || u.negative,
            a = e.format || r.format || u.format ? "T" : "",
            c = (h ? "-" : "") + "P" + t.format + s.format + i.format + a + e.format + r.format + u.format;
          return "P" === c || "-P" === c ? "P0D" : c;
        }),
        (c.toJSON = function () {
          return this.toISOString();
        }),
        (c.format = function (t) {
          var i = t || "YYYY-MM-DDTHH:mm:ss",
            e = {
              Y: this.$d.years,
              YY: s.s(this.$d.years, 2, "0"),
              YYYY: s.s(this.$d.years, 4, "0"),
              M: this.$d.months,
              MM: s.s(this.$d.months, 2, "0"),
              D: this.$d.days,
              DD: s.s(this.$d.days, 2, "0"),
              H: this.$d.hours,
              HH: s.s(this.$d.hours, 2, "0"),
              m: this.$d.minutes,
              mm: s.s(this.$d.minutes, 2, "0"),
              s: this.$d.seconds,
              ss: s.s(this.$d.seconds, 2, "0"),
              SSS: s.s(this.$d.milliseconds, 3, "0"),
            };
          return i.replace(n, function (t, s) {
            return s || String(e[t]);
          });
        }),
        (c.as = function (t) {
          return this.$ms / e[u(t)];
        }),
        (c.get = function (t) {
          var s = this.$ms,
            n = u(t);
          return "milliseconds" === n ? (s %= 1e3) : (s = "weeks" === n ? a(s / e[n]) : this.$d[n]), 0 === s ? 0 : s;
        }),
        (c.add = function (t, s, n) {
          var i;
          return (i = s ? t * e[u(s)] : r(t) ? t.$ms : o(t, this).$ms), o(this.$ms + i * (n ? -1 : 1), this);
        }),
        (c.subtract = function (t, s) {
          return this.add(t, s, !0);
        }),
        (c.locale = function (t) {
          var s = this.clone();
          return (s.$l = t), s;
        }),
        (c.clone = function () {
          return o(this.$ms, this);
        }),
        (c.humanize = function (s) {
          return t().add(this.$ms, "ms").locale(this.$l).fromNow(!s);
        }),
        (c.milliseconds = function () {
          return this.get("milliseconds");
        }),
        (c.asMilliseconds = function () {
          return this.as("milliseconds");
        }),
        (c.seconds = function () {
          return this.get("seconds");
        }),
        (c.asSeconds = function () {
          return this.as("seconds");
        }),
        (c.minutes = function () {
          return this.get("minutes");
        }),
        (c.asMinutes = function () {
          return this.as("minutes");
        }),
        (c.hours = function () {
          return this.get("hours");
        }),
        (c.asHours = function () {
          return this.as("hours");
        }),
        (c.days = function () {
          return this.get("days");
        }),
        (c.asDays = function () {
          return this.as("days");
        }),
        (c.weeks = function () {
          return this.get("weeks");
        }),
        (c.asWeeks = function () {
          return this.as("weeks");
        }),
        (c.months = function () {
          return this.get("months");
        }),
        (c.asMonths = function () {
          return this.as("months");
        }),
        (c.years = function () {
          return this.get("years");
        }),
        (c.asYears = function () {
          return this.as("years");
        }),
        h
      );
    })();
  return function (n, i, e) {
    (t = e),
      (s = e().$utils()),
      (e.duration = function (t, s) {
        var n = e.locale();
        return o(t, { $l: n }, s);
      }),
      (e.isDuration = r);
    var u = i.prototype.add,
      h = i.prototype.subtract;
    (i.prototype.add = function (t, s) {
      return r(t) && (t = t.asMilliseconds()), u.bind(this)(t, s);
    }),
      (i.prototype.subtract = function (t, s) {
        return r(t) && (t = t.asMilliseconds()), h.bind(this)(t, s);
      });
  };
});

!(function (o, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((o = "undefined" != typeof globalThis ? globalThis : o || self).dayjs_plugin_isTomorrow = e());
})(this, function () {
  "use strict";
  return function (o, e, t) {
    e.prototype.isTomorrow = function () {
      var o = "YYYY-MM-DD",
        e = t().add(1, "day");
      return this.format(o) === e.format(o);
    };
  };
});
!(function (e, o) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = o())
    : "function" == typeof define && define.amd
    ? define(o)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isToday = o());
})(this, function () {
  "use strict";
  return function (e, o, t) {
    o.prototype.isToday = function () {
      var e = "YYYY-MM-DD",
        o = t();
      return this.format(e) === o.format(e);
    };
  };
});
