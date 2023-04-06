"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemDeleteJobCreateQueryResourceObject = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogItemBulkDeleteJobEnum = require("./CatalogItemBulkDeleteJobEnum.js");
var _CatalogItemDeleteJobCreateQueryResourceObjectAttributes = require("./CatalogItemDeleteJobCreateQueryResourceObjectAttributes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Klaviyo API
                                                                                                                                                                                                                                                                                                                                                                                               * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 2023-02-22
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
 * The CatalogItemDeleteJobCreateQueryResourceObject model module.
 * @module model/CatalogItemDeleteJobCreateQueryResourceObject
 * @version 2023-02-22
 */
var CatalogItemDeleteJobCreateQueryResourceObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemDeleteJobCreateQueryResourceObject</code>.
   * @alias module:model/CatalogItemDeleteJobCreateQueryResourceObject
   * @class
   * @param type {module:model/CatalogItemBulkDeleteJobEnum} 
   * @param attributes {module:model/CatalogItemDeleteJobCreateQueryResourceObjectAttributes} 
   */
  function CatalogItemDeleteJobCreateQueryResourceObject(type, attributes) {
    _classCallCheck(this, CatalogItemDeleteJobCreateQueryResourceObject);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogItemDeleteJobCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemDeleteJobCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/CatalogItemDeleteJobCreateQueryResourceObject} The populated <code>CatalogItemDeleteJobCreateQueryResourceObject</code> instance.
   */
  _createClass(CatalogItemDeleteJobCreateQueryResourceObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemDeleteJobCreateQueryResourceObject();
        if (data.hasOwnProperty('type')) obj.type = _CatalogItemBulkDeleteJobEnum.CatalogItemBulkDeleteJobEnum.constructFromObject(data['type']);
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogItemDeleteJobCreateQueryResourceObjectAttributes.CatalogItemDeleteJobCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return CatalogItemDeleteJobCreateQueryResourceObject;
}();
/**
 * @member {module:model/CatalogItemBulkDeleteJobEnum} type
 */
exports.CatalogItemDeleteJobCreateQueryResourceObject = CatalogItemDeleteJobCreateQueryResourceObject;
CatalogItemDeleteJobCreateQueryResourceObject.prototype.type = undefined;

/**
 * @member {module:model/CatalogItemDeleteJobCreateQueryResourceObjectAttributes} attributes
 */
CatalogItemDeleteJobCreateQueryResourceObject.prototype.attributes = undefined;