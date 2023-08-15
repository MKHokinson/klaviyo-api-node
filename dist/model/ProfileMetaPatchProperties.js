"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileMetaPatchProperties = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Klaviyo API
                                                                                                                                                                                                                                                                                                                                                                                               * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 2023-08-15
                                                                                                                                                                                                                                                                                                                                                                                               * Contact: developers@klaviyo.com
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                               * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.41
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The ProfileMetaPatchProperties model module.
 * @module model/ProfileMetaPatchProperties
 * @version 2023-08-15
 */
var ProfileMetaPatchProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProfileMetaPatchProperties</code>.
   * @alias module:model/ProfileMetaPatchProperties
   * @class
   */
  function ProfileMetaPatchProperties() {
    _classCallCheck(this, ProfileMetaPatchProperties);
  }

  /**
   * Constructs a <code>ProfileMetaPatchProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileMetaPatchProperties} obj Optional instance to populate.
   * @return {module:model/ProfileMetaPatchProperties} The populated <code>ProfileMetaPatchProperties</code> instance.
   */
  _createClass(ProfileMetaPatchProperties, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProfileMetaPatchProperties();
        if (data.hasOwnProperty('append')) obj.append = _ApiClient.ApiClient.convertToType(data['append'], Object);
        if (data.hasOwnProperty('unappend')) obj.unappend = _ApiClient.ApiClient.convertToType(data['unappend'], Object);
        if (data.hasOwnProperty('unset')) obj.unset = _ApiClient.ApiClient.convertToType(data['unset'], Object);
      }
      return obj;
    }
  }]);
  return ProfileMetaPatchProperties;
}();
/**
 * Append a simple value or values to this property array
 * @member {Object} append
 */
exports.ProfileMetaPatchProperties = ProfileMetaPatchProperties;
ProfileMetaPatchProperties.prototype.append = undefined;

/**
 * Remove a simple value or values from this property array
 * @member {Object} unappend
 */
ProfileMetaPatchProperties.prototype.unappend = undefined;

/**
 * Remove a key or keys (and their values) completely from properties
 * @member {Object} unset
 */
ProfileMetaPatchProperties.prototype.unset = undefined;