/*
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
import {ApiClient} from '../ApiClient.js';

/**
 * Enum class EventEnum.
 * @enum {String}
 * @readonly
 */
const EventEnum = {
  /**
   * value: "event"
   * @const
   */
  event: "event",

  /**
   * Returns a <code>EventEnum</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/EventEnum} The enum <code>EventEnum</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {EventEnum};