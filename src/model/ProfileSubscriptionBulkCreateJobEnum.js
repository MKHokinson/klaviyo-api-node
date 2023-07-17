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
 * Enum class ProfileSubscriptionBulkCreateJobEnum.
 * @enum {String}
 * @readonly
 */
const ProfileSubscriptionBulkCreateJobEnum = {
  /**
   * value: "profile-subscription-bulk-create-job"
   * @const
   */
  profileSubscriptionBulkCreateJob: "profile-subscription-bulk-create-job",

  /**
   * Returns a <code>ProfileSubscriptionBulkCreateJobEnum</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/ProfileSubscriptionBulkCreateJobEnum} The enum <code>ProfileSubscriptionBulkCreateJobEnum</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {ProfileSubscriptionBulkCreateJobEnum};