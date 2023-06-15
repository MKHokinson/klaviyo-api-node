"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryCreateJobCreateQueryResourceObject = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogCategoryBulkCreateJobEnum = require("./CatalogCategoryBulkCreateJobEnum.js");
var _CatalogCategoryCreateJobCreateQueryResourceObjectAttributes = require("./CatalogCategoryCreateJobCreateQueryResourceObjectAttributes.js");
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
 * The CatalogCategoryCreateJobCreateQueryResourceObject model module.
 * @module model/CatalogCategoryCreateJobCreateQueryResourceObject
 * @version 2023-06-15
 */
var CatalogCategoryCreateJobCreateQueryResourceObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryCreateJobCreateQueryResourceObject</code>.
   * @alias module:model/CatalogCategoryCreateJobCreateQueryResourceObject
   * @class
   * @param attributes {module:model/CatalogCategoryCreateJobCreateQueryResourceObjectAttributes} 
   * @param type {module:model/CatalogCategoryBulkCreateJobEnum} 
   */
  function CatalogCategoryCreateJobCreateQueryResourceObject(attributes, type) {
    _classCallCheck(this, CatalogCategoryCreateJobCreateQueryResourceObject);
    this.attributes = attributes;
    this.type = type;
  }

  /**
   * Constructs a <code>CatalogCategoryCreateJobCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryCreateJobCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryCreateJobCreateQueryResourceObject} The populated <code>CatalogCategoryCreateJobCreateQueryResourceObject</code> instance.
   */
  _createClass(CatalogCategoryCreateJobCreateQueryResourceObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryCreateJobCreateQueryResourceObject();
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogCategoryCreateJobCreateQueryResourceObjectAttributes.CatalogCategoryCreateJobCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('type')) obj.type = _CatalogCategoryBulkCreateJobEnum.CatalogCategoryBulkCreateJobEnum.constructFromObject(data['type']);
      }
      return obj;
    }
  }]);
  return CatalogCategoryCreateJobCreateQueryResourceObject;
}();
/**
 * @member {module:model/CatalogCategoryCreateJobCreateQueryResourceObjectAttributes} attributes
 */
exports.CatalogCategoryCreateJobCreateQueryResourceObject = CatalogCategoryCreateJobCreateQueryResourceObject;
CatalogCategoryCreateJobCreateQueryResourceObject.prototype.attributes = undefined;

/**
 * @member {module:model/CatalogCategoryBulkCreateJobEnum} type
 */
CatalogCategoryCreateJobCreateQueryResourceObject.prototype.type = undefined;