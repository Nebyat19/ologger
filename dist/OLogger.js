"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var OLogger = /*#__PURE__*/function () {
  function OLogger() {
    _classCallCheck(this, OLogger);
  }
  return _createClass(OLogger, null, [{
    key: "log",
    value: function log(message) {
      if (OLogger.isEnabled) {
        var _console;
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        (_console = console).log.apply(_console, [message].concat(args));
      }
    }
  }, {
    key: "warn",
    value: function warn(message) {
      if (OLogger.isEnabled) {
        var _console2;
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        (_console2 = console).warn.apply(_console2, [message].concat(args));
      }
    }
  }, {
    key: "error",
    value: function error(message) {
      if (OLogger.isEnabled) {
        var _console3;
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        (_console3 = console).error.apply(_console3, [message].concat(args));
      }
    }
  }, {
    key: "info",
    value: function info(message) {
      if (OLogger.isEnabled) {
        var _console4;
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        (_console4 = console).info.apply(_console4, [message].concat(args));
      }
    }
  }, {
    key: "disable",
    value: function disable() {
      OLogger.isEnabled = false;
    }
  }, {
    key: "enable",
    value: function enable() {
      OLogger.isEnabled = true;
    }
  }]);
}();
_defineProperty(OLogger, "isEnabled", true);
if (typeof window !== 'undefined') {
  window.OLogger = OLogger;
}
var _default = exports["default"] = OLogger;
