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
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';

/**
 * The STOScheduleOptions model module.
 * @module model/STOScheduleOptions
 * @version 2023-02-22
 */
export class STOScheduleOptions {
  /**
   * Constructs a new <code>STOScheduleOptions</code>.
   * @alias module:model/STOScheduleOptions
   * @class
   * @param _date {Date} The day to send on
   */
  constructor(_date) {
    this._date = _date;
  }

  /**
   * Constructs a <code>STOScheduleOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/STOScheduleOptions} obj Optional instance to populate.
   * @return {module:model/STOScheduleOptions} The populated <code>STOScheduleOptions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new STOScheduleOptions();
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
    }
    return obj;
  }
}

/**
 * The day to send on
 * @member {Date} _date
 */
STOScheduleOptions.prototype._date = undefined;

