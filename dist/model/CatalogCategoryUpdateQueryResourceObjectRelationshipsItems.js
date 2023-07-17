"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryUpdateQueryResourceObjectRelationshipsItems = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogCategoryUpdateQueryResourceObjectRelationshipsItemsData = require("./CatalogCategoryUpdateQueryResourceObjectRelationshipsItemsData.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Klaviyo API
                                                                                                                                                                                                                                                                                                                                                                                               * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 2023-07-15
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
 * The CatalogCategoryUpdateQueryResourceObjectRelationshipsItems model module.
 * @module model/CatalogCategoryUpdateQueryResourceObjectRelationshipsItems
 * @version 2023-07-15
 */
var CatalogCategoryUpdateQueryResourceObjectRelationshipsItems = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryUpdateQueryResourceObjectRelationshipsItems</code>.
   * @alias module:model/CatalogCategoryUpdateQueryResourceObjectRelationshipsItems
   * @class
   * @param data {Array.<module:model/CatalogCategoryUpdateQueryResourceObjectRelationshipsItemsData>} 
   */
  function CatalogCategoryUpdateQueryResourceObjectRelationshipsItems(data) {
    _classCallCheck(this, CatalogCategoryUpdateQueryResourceObjectRelationshipsItems);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogCategoryUpdateQueryResourceObjectRelationshipsItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryUpdateQueryResourceObjectRelationshipsItems} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryUpdateQueryResourceObjectRelationshipsItems} The populated <code>CatalogCategoryUpdateQueryResourceObjectRelationshipsItems</code> instance.
   */
  _createClass(CatalogCategoryUpdateQueryResourceObjectRelationshipsItems, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryUpdateQueryResourceObjectRelationshipsItems();
        if (data.hasOwnProperty('data')) obj.data = _ApiClient.ApiClient.convertToType(data['data'], [_CatalogCategoryUpdateQueryResourceObjectRelationshipsItemsData.CatalogCategoryUpdateQueryResourceObjectRelationshipsItemsData]);
      }
      return obj;
    }
  }]);
  return CatalogCategoryUpdateQueryResourceObjectRelationshipsItems;
}();
/**
 * @member {Array.<module:model/CatalogCategoryUpdateQueryResourceObjectRelationshipsItemsData>} data
 */
exports.CatalogCategoryUpdateQueryResourceObjectRelationshipsItems = CatalogCategoryUpdateQueryResourceObjectRelationshipsItems;
CatalogCategoryUpdateQueryResourceObjectRelationshipsItems.prototype.data = undefined;