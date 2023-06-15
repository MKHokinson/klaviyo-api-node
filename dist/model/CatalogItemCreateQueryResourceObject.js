"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemCreateQueryResourceObject = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogItemCreateQueryResourceObjectAttributes = require("./CatalogItemCreateQueryResourceObjectAttributes.js");
var _CatalogItemCreateQueryResourceObjectRelationships = require("./CatalogItemCreateQueryResourceObjectRelationships.js");
var _CatalogItemEnum = require("./CatalogItemEnum.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Klaviyo API
                                                                                                                                                                                                                                                                                                                                                                                               * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 2023-06-15
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
 * The CatalogItemCreateQueryResourceObject model module.
 * @module model/CatalogItemCreateQueryResourceObject
 * @version 2023-06-15
 */
var CatalogItemCreateQueryResourceObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemCreateQueryResourceObject</code>.
   * @alias module:model/CatalogItemCreateQueryResourceObject
   * @class
   * @param attributes {module:model/CatalogItemCreateQueryResourceObjectAttributes} 
   * @param type {module:model/CatalogItemEnum} 
   */
  function CatalogItemCreateQueryResourceObject(attributes, type) {
    _classCallCheck(this, CatalogItemCreateQueryResourceObject);
    this.attributes = attributes;
    this.type = type;
  }

  /**
   * Constructs a <code>CatalogItemCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/CatalogItemCreateQueryResourceObject} The populated <code>CatalogItemCreateQueryResourceObject</code> instance.
   */
  _createClass(CatalogItemCreateQueryResourceObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemCreateQueryResourceObject();
        if (data.hasOwnProperty('relationships')) obj.relationships = _CatalogItemCreateQueryResourceObjectRelationships.CatalogItemCreateQueryResourceObjectRelationships.constructFromObject(data['relationships']);
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogItemCreateQueryResourceObjectAttributes.CatalogItemCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('type')) obj.type = _CatalogItemEnum.CatalogItemEnum.constructFromObject(data['type']);
      }
      return obj;
    }
  }]);
  return CatalogItemCreateQueryResourceObject;
}();
/**
 * @member {module:model/CatalogItemCreateQueryResourceObjectRelationships} relationships
 */
exports.CatalogItemCreateQueryResourceObject = CatalogItemCreateQueryResourceObject;
CatalogItemCreateQueryResourceObject.prototype.relationships = undefined;

/**
 * @member {module:model/CatalogItemCreateQueryResourceObjectAttributes} attributes
 */
CatalogItemCreateQueryResourceObject.prototype.attributes = undefined;

/**
 * @member {module:model/CatalogItemEnum} type
 */
CatalogItemCreateQueryResourceObject.prototype.type = undefined;