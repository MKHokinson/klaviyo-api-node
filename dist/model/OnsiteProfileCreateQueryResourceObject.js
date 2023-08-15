"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnsiteProfileCreateQueryResourceObject = void 0;
var _ApiClient = require("../ApiClient.js");
var _OnsiteProfileCreateQueryResourceObjectAttributes = require("./OnsiteProfileCreateQueryResourceObjectAttributes.js");
var _OnsiteProfileMeta = require("./OnsiteProfileMeta.js");
var _ProfileEnum = require("./ProfileEnum.js");
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
 * The OnsiteProfileCreateQueryResourceObject model module.
 * @module model/OnsiteProfileCreateQueryResourceObject
 * @version 2023-08-15
 */
var OnsiteProfileCreateQueryResourceObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OnsiteProfileCreateQueryResourceObject</code>.
   * @alias module:model/OnsiteProfileCreateQueryResourceObject
   * @class
   * @param type {module:model/ProfileEnum} 
   * @param attributes {module:model/OnsiteProfileCreateQueryResourceObjectAttributes} 
   */
  function OnsiteProfileCreateQueryResourceObject(type, attributes) {
    _classCallCheck(this, OnsiteProfileCreateQueryResourceObject);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>OnsiteProfileCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnsiteProfileCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/OnsiteProfileCreateQueryResourceObject} The populated <code>OnsiteProfileCreateQueryResourceObject</code> instance.
   */
  _createClass(OnsiteProfileCreateQueryResourceObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OnsiteProfileCreateQueryResourceObject();
        if (data.hasOwnProperty('type')) obj.type = _ProfileEnum.ProfileEnum.constructFromObject(data['type']);
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _OnsiteProfileCreateQueryResourceObjectAttributes.OnsiteProfileCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('meta')) obj.meta = _OnsiteProfileMeta.OnsiteProfileMeta.constructFromObject(data['meta']);
      }
      return obj;
    }
  }]);
  return OnsiteProfileCreateQueryResourceObject;
}();
/**
 * @member {module:model/ProfileEnum} type
 */
exports.OnsiteProfileCreateQueryResourceObject = OnsiteProfileCreateQueryResourceObject;
OnsiteProfileCreateQueryResourceObject.prototype.type = undefined;

/**
 * Primary key that uniquely identifies this profile. Generated by Klaviyo.
 * @member {String} id
 */
OnsiteProfileCreateQueryResourceObject.prototype.id = undefined;

/**
 * @member {module:model/OnsiteProfileCreateQueryResourceObjectAttributes} attributes
 */
OnsiteProfileCreateQueryResourceObject.prototype.attributes = undefined;

/**
 * @member {module:model/OnsiteProfileMeta} meta
 */
OnsiteProfileCreateQueryResourceObject.prototype.meta = undefined;