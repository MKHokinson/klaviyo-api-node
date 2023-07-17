/*
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
import {ApiClient} from '../ApiClient.js';

/**
 * The StaticScheduleOptions model module.
 * @module model/StaticScheduleOptions
 * @version 2023-07-15
 */
export class StaticScheduleOptions {
  /**
   * Constructs a new <code>StaticScheduleOptions</code>.
   * @alias module:model/StaticScheduleOptions
   * @class
   * @param datetime {Date} The time to send at
   */
  constructor(datetime) {
    this.datetime = datetime;
  }

  /**
   * Constructs a <code>StaticScheduleOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StaticScheduleOptions} obj Optional instance to populate.
   * @return {module:model/StaticScheduleOptions} The populated <code>StaticScheduleOptions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StaticScheduleOptions();
      if (data.hasOwnProperty('is_local'))
        obj.isLocal = ApiClient.convertToType(data['is_local'], 'Boolean');
      if (data.hasOwnProperty('send_past_recipients_immediately'))
        obj.sendPastRecipientsImmediately = ApiClient.convertToType(data['send_past_recipients_immediately'], 'Boolean');
      if (data.hasOwnProperty('datetime'))
        obj.datetime = ApiClient.convertToType(data['datetime'], 'Date');
    }
    return obj;
  }
}

/**
 * If the campaign should be sent with local recipient timezone send (requires UTC time) or statically sent at the given time. Defaults to False.
 * @member {Boolean} isLocal
 */
StaticScheduleOptions.prototype.isLocal = undefined;

/**
 * Determines if we should send to local recipient timezone if the given time has passed. Only applicable to local sends. Defaults to False.
 * @member {Boolean} sendPastRecipientsImmediately
 */
StaticScheduleOptions.prototype.sendPastRecipientsImmediately = undefined;

/**
 * The time to send at
 * @member {Date} datetime
 */
StaticScheduleOptions.prototype.datetime = undefined;

