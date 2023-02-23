"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudiencesSubObject = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AudiencesSubObject model module.
 * @module model/AudiencesSubObject
 * @version 2023-02-22
 */
var AudiencesSubObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AudiencesSubObject</code>.
   * @alias module:model/AudiencesSubObject
   * @class
   */
  function AudiencesSubObject() {
    _classCallCheck(this, AudiencesSubObject);
  }

  /**
   * Constructs a <code>AudiencesSubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudiencesSubObject} obj Optional instance to populate.
   * @return {module:model/AudiencesSubObject} The populated <code>AudiencesSubObject</code> instance.
   */
  _createClass(AudiencesSubObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AudiencesSubObject();
        if (data.hasOwnProperty('included')) obj.included = _ApiClient.ApiClient.convertToType(data['included'], ['String']);
        if (data.hasOwnProperty('excluded')) obj.excluded = _ApiClient.ApiClient.convertToType(data['excluded'], ['String']);
      }
      return obj;
    }
  }]);
  return AudiencesSubObject;
}();
/**
 * A list of included audiences
 * @member {Array.<String>} included
 */
exports.AudiencesSubObject = AudiencesSubObject;
AudiencesSubObject.prototype.included = undefined;

/**
 * An optional list of excluded audiences
 * @member {Array.<String>} excluded
 */
AudiencesSubObject.prototype.excluded = undefined;