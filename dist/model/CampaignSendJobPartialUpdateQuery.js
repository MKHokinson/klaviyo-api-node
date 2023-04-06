"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignSendJobPartialUpdateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CampaignSendJobPartialUpdateQueryResourceObject = require("./CampaignSendJobPartialUpdateQueryResourceObject.js");
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
 * The CampaignSendJobPartialUpdateQuery model module.
 * @module model/CampaignSendJobPartialUpdateQuery
 * @version 2023-02-22
 */
var CampaignSendJobPartialUpdateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignSendJobPartialUpdateQuery</code>.
   * @alias module:model/CampaignSendJobPartialUpdateQuery
   * @class
   * @param data {module:model/CampaignSendJobPartialUpdateQueryResourceObject} 
   */
  function CampaignSendJobPartialUpdateQuery(data) {
    _classCallCheck(this, CampaignSendJobPartialUpdateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CampaignSendJobPartialUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignSendJobPartialUpdateQuery} obj Optional instance to populate.
   * @return {module:model/CampaignSendJobPartialUpdateQuery} The populated <code>CampaignSendJobPartialUpdateQuery</code> instance.
   */
  _createClass(CampaignSendJobPartialUpdateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignSendJobPartialUpdateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CampaignSendJobPartialUpdateQueryResourceObject.CampaignSendJobPartialUpdateQueryResourceObject.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CampaignSendJobPartialUpdateQuery;
}();
/**
 * @member {module:model/CampaignSendJobPartialUpdateQueryResourceObject} data
 */
exports.CampaignSendJobPartialUpdateQuery = CampaignSendJobPartialUpdateQuery;
CampaignSendJobPartialUpdateQuery.prototype.data = undefined;