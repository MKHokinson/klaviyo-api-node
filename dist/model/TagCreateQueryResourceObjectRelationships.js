"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagCreateQueryResourceObjectRelationships = void 0;
var _ApiClient = require("../ApiClient.js");
var _TagCreateQueryResourceObjectRelationshipsTaggroup = require("./TagCreateQueryResourceObjectRelationshipsTaggroup.js");
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
 * The TagCreateQueryResourceObjectRelationships model module.
 * @module model/TagCreateQueryResourceObjectRelationships
 * @version 2023-08-15
 */
var TagCreateQueryResourceObjectRelationships = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TagCreateQueryResourceObjectRelationships</code>.
   * @alias module:model/TagCreateQueryResourceObjectRelationships
   * @class
   */
  function TagCreateQueryResourceObjectRelationships() {
    _classCallCheck(this, TagCreateQueryResourceObjectRelationships);
  }

  /**
   * Constructs a <code>TagCreateQueryResourceObjectRelationships</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagCreateQueryResourceObjectRelationships} obj Optional instance to populate.
   * @return {module:model/TagCreateQueryResourceObjectRelationships} The populated <code>TagCreateQueryResourceObjectRelationships</code> instance.
   */
  _createClass(TagCreateQueryResourceObjectRelationships, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagCreateQueryResourceObjectRelationships();
        if (data.hasOwnProperty('tag-group')) obj.tagGroup = _TagCreateQueryResourceObjectRelationshipsTaggroup.TagCreateQueryResourceObjectRelationshipsTaggroup.constructFromObject(data['tag-group']);
      }
      return obj;
    }
  }]);
  return TagCreateQueryResourceObjectRelationships;
}();
/**
 * @member {module:model/TagCreateQueryResourceObjectRelationshipsTaggroup} tagGroup
 */
exports.TagCreateQueryResourceObjectRelationships = TagCreateQueryResourceObjectRelationships;
TagCreateQueryResourceObjectRelationships.prototype.tagGroup = undefined;