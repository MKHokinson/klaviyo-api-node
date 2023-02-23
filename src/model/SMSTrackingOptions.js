/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-02-22
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';
import {UtmParamInfo} from './UtmParamInfo.js';

/**
 * The SMSTrackingOptions model module.
 * @module model/SMSTrackingOptions
 * @version 2023-02-22
 */
export class SMSTrackingOptions {
  /**
   * Constructs a new <code>SMSTrackingOptions</code>.
   * @alias module:model/SMSTrackingOptions
   * @class
   * @param addUtm {Boolean} 
   * @param utmParams {Array.<module:model/UtmParamInfo>} 
   */
  constructor(addUtm, utmParams) {
    this.addUtm = addUtm;
    this.utmParams = utmParams;
  }

  /**
   * Constructs a <code>SMSTrackingOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SMSTrackingOptions} obj Optional instance to populate.
   * @return {module:model/SMSTrackingOptions} The populated <code>SMSTrackingOptions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SMSTrackingOptions();
      if (data.hasOwnProperty('add_utm'))
        obj.addUtm = ApiClient.convertToType(data['add_utm'], 'Boolean');
      if (data.hasOwnProperty('utm_params'))
        obj.utmParams = ApiClient.convertToType(data['utm_params'], [UtmParamInfo]);
    }
    return obj;
  }
}

/**
 * @member {Boolean} addUtm
 */
SMSTrackingOptions.prototype.addUtm = undefined;

/**
 * @member {Array.<module:model/UtmParamInfo>} utmParams
 */
SMSTrackingOptions.prototype.utmParams = undefined;

// Implement OneOfIncludedFlowActionsAttributesTrackingOptions interface:
