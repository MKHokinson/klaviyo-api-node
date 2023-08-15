"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PushTokenCreateQueryResourceObjectAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _DeviceMetadata = require("./DeviceMetadata.js");
var _PushTokenCreateQueryResourceObjectAttributesProfile = require("./PushTokenCreateQueryResourceObjectAttributesProfile.js");
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
 * The PushTokenCreateQueryResourceObjectAttributes model module.
 * @module model/PushTokenCreateQueryResourceObjectAttributes
 * @version 2023-08-15
 */
var PushTokenCreateQueryResourceObjectAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PushTokenCreateQueryResourceObjectAttributes</code>.
   * @alias module:model/PushTokenCreateQueryResourceObjectAttributes
   * @class
   * @param token {String} A push token from APNS or FCM.
   * @param platform {module:model/PushTokenCreateQueryResourceObjectAttributes.PlatformEnum} The platform on which the push token was created.
   * @param vendor {module:model/PushTokenCreateQueryResourceObjectAttributes.VendorEnum} The vendor of the push token.
   * @param profile {module:model/PushTokenCreateQueryResourceObjectAttributesProfile} 
   */
  function PushTokenCreateQueryResourceObjectAttributes(token, platform, vendor, profile) {
    _classCallCheck(this, PushTokenCreateQueryResourceObjectAttributes);
    this.token = token;
    this.platform = platform;
    this.vendor = vendor;
    this.profile = profile;
  }

  /**
   * Constructs a <code>PushTokenCreateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushTokenCreateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/PushTokenCreateQueryResourceObjectAttributes} The populated <code>PushTokenCreateQueryResourceObjectAttributes</code> instance.
   */
  _createClass(PushTokenCreateQueryResourceObjectAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PushTokenCreateQueryResourceObjectAttributes();
        if (data.hasOwnProperty('token')) obj.token = _ApiClient.ApiClient.convertToType(data['token'], 'String');
        if (data.hasOwnProperty('platform')) obj.platform = _ApiClient.ApiClient.convertToType(data['platform'], 'String');
        if (data.hasOwnProperty('enablement_status')) obj.enablementStatus = _ApiClient.ApiClient.convertToType(data['enablement_status'], 'String');
        if (data.hasOwnProperty('vendor')) obj.vendor = _ApiClient.ApiClient.convertToType(data['vendor'], 'String');
        if (data.hasOwnProperty('background')) obj.background = _ApiClient.ApiClient.convertToType(data['background'], 'String');
        if (data.hasOwnProperty('device_metadata')) obj.deviceMetadata = _DeviceMetadata.DeviceMetadata.constructFromObject(data['device_metadata']);
        if (data.hasOwnProperty('profile')) obj.profile = _PushTokenCreateQueryResourceObjectAttributesProfile.PushTokenCreateQueryResourceObjectAttributesProfile.constructFromObject(data['profile']);
      }
      return obj;
    }
  }]);
  return PushTokenCreateQueryResourceObjectAttributes;
}();
/**
 * A push token from APNS or FCM.
 * @member {String} token
 */
exports.PushTokenCreateQueryResourceObjectAttributes = PushTokenCreateQueryResourceObjectAttributes;
PushTokenCreateQueryResourceObjectAttributes.prototype.token = undefined;

/**
 * Allowed values for the <code>platform</code> property.
 * @enum {String}
 * @readonly
 */
PushTokenCreateQueryResourceObjectAttributes.PlatformEnum = {
  /**
   * value: "android"
   * @const
   */
  android: "android",
  /**
   * value: "ios"
   * @const
   */
  ios: "ios"
};
/**
 * The platform on which the push token was created.
 * @member {module:model/PushTokenCreateQueryResourceObjectAttributes.PlatformEnum} platform
 */
PushTokenCreateQueryResourceObjectAttributes.prototype.platform = undefined;

/**
 * Allowed values for the <code>enablementStatus</code> property.
 * @enum {String}
 * @readonly
 */
PushTokenCreateQueryResourceObjectAttributes.EnablementStatusEnum = {
  /**
   * value: "AUTHORIZED"
   * @const
   */
  AUTHORIZED: "AUTHORIZED",
  /**
   * value: "DENIED"
   * @const
   */
  DENIED: "DENIED",
  /**
   * value: "NOT_DETERMINED"
   * @const
   */
  NOT_DETERMINED: "NOT_DETERMINED",
  /**
   * value: "PROVISIONAL"
   * @const
   */
  PROVISIONAL: "PROVISIONAL",
  /**
   * value: "UNAUTHORIZED"
   * @const
   */
  UNAUTHORIZED: "UNAUTHORIZED"
};
/**
 * This is the enablement status for the individual push token.
 * @member {module:model/PushTokenCreateQueryResourceObjectAttributes.EnablementStatusEnum} enablementStatus
 * @default 'AUTHORIZED'
 */
PushTokenCreateQueryResourceObjectAttributes.prototype.enablementStatus = 'AUTHORIZED';

/**
 * Allowed values for the <code>vendor</code> property.
 * @enum {String}
 * @readonly
 */
PushTokenCreateQueryResourceObjectAttributes.VendorEnum = {
  /**
   * value: "apns"
   * @const
   */
  apns: "apns",
  /**
   * value: "fcm"
   * @const
   */
  fcm: "fcm"
};
/**
 * The vendor of the push token.
 * @member {module:model/PushTokenCreateQueryResourceObjectAttributes.VendorEnum} vendor
 */
PushTokenCreateQueryResourceObjectAttributes.prototype.vendor = undefined;

/**
 * Allowed values for the <code>background</code> property.
 * @enum {String}
 * @readonly
 */
PushTokenCreateQueryResourceObjectAttributes.BackgroundEnum = {
  /**
   * value: "AVAILABLE"
   * @const
   */
  AVAILABLE: "AVAILABLE",
  /**
   * value: "DENIED"
   * @const
   */
  DENIED: "DENIED",
  /**
   * value: "RESTRICTED"
   * @const
   */
  RESTRICTED: "RESTRICTED"
};
/**
 * The background state of the push token.
 * @member {module:model/PushTokenCreateQueryResourceObjectAttributes.BackgroundEnum} background
 * @default 'AVAILABLE'
 */
PushTokenCreateQueryResourceObjectAttributes.prototype.background = 'AVAILABLE';

/**
 * @member {module:model/DeviceMetadata} deviceMetadata
 */
PushTokenCreateQueryResourceObjectAttributes.prototype.deviceMetadata = undefined;

/**
 * @member {module:model/PushTokenCreateQueryResourceObjectAttributesProfile} profile
 */
PushTokenCreateQueryResourceObjectAttributes.prototype.profile = undefined;