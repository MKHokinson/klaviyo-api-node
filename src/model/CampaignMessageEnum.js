/*
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
import {ApiClient} from '../ApiClient.js';

/**
 * Enum class CampaignMessageEnum.
 * @enum {String}
 * @readonly
 */
const CampaignMessageEnum = {
  /**
   * value: "campaign-message"
   * @const
   */
  campaignMessage: "campaign-message",

  /**
   * Returns a <code>CampaignMessageEnum</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/CampaignMessageEnum} The enum <code>CampaignMessageEnum</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {CampaignMessageEnum};