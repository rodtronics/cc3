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
