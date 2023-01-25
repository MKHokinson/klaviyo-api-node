/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-01-24
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
import {UTMParamsSubObject} from './UTMParamsSubObject.js';

/**
 * The TrackingOptionsSubObject model module.
 * @module model/TrackingOptionsSubObject
 * @version 2023-01-24
 */
export class TrackingOptionsSubObject {
  /**
   * Constructs a new <code>TrackingOptionsSubObject</code>.
   * @alias module:model/TrackingOptionsSubObject
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackingOptionsSubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackingOptionsSubObject} obj Optional instance to populate.
   * @return {module:model/TrackingOptionsSubObject} The populated <code>TrackingOptionsSubObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackingOptionsSubObject();
      if (data.hasOwnProperty('is_tracking_opens'))
        obj.isTrackingOpens = ApiClient.convertToType(data['is_tracking_opens'], 'Boolean');
      if (data.hasOwnProperty('is_tracking_clicks'))
        obj.isTrackingClicks = ApiClient.convertToType(data['is_tracking_clicks'], 'Boolean');
      if (data.hasOwnProperty('is_add_utm'))
        obj.isAddUtm = ApiClient.convertToType(data['is_add_utm'], 'Boolean');
      if (data.hasOwnProperty('utm_params'))
        obj.utmParams = ApiClient.convertToType(data['utm_params'], [UTMParamsSubObject]);
    }
    return obj;
  }
}

/**
 * Whether the campaign is tracking open events. If not specified, uses company defaults.
 * @member {Boolean} isTrackingOpens
 */
TrackingOptionsSubObject.prototype.isTrackingOpens = undefined;

/**
 * Whether the campaign is tracking click events. If not specified, uses company defaults.
 * @member {Boolean} isTrackingClicks
 */
TrackingOptionsSubObject.prototype.isTrackingClicks = undefined;

/**
 * Whether the campaign needs UTM parameters. If set to False, UTM params will not be used.
 * @member {Boolean} isAddUtm
 */
TrackingOptionsSubObject.prototype.isAddUtm = undefined;

/**
 * A list of UTM parameters. If an empty list is given and is_add_utm is True, uses company defaults.
 * @member {Array.<module:model/UTMParamsSubObject>} utmParams
 */
TrackingOptionsSubObject.prototype.utmParams = undefined;

