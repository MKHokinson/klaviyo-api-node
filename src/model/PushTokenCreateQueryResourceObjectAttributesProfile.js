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
import {ProfileUpsertQueryResourceObject} from './ProfileUpsertQueryResourceObject.js';

/**
 * The PushTokenCreateQueryResourceObjectAttributesProfile model module.
 * @module model/PushTokenCreateQueryResourceObjectAttributesProfile
 * @version 2023-08-15
 */
export class PushTokenCreateQueryResourceObjectAttributesProfile {
  /**
   * Constructs a new <code>PushTokenCreateQueryResourceObjectAttributesProfile</code>.
   * The profile associated with the push token to create/update
   * @alias module:model/PushTokenCreateQueryResourceObjectAttributesProfile
   * @class
   * @param data {module:model/ProfileUpsertQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>PushTokenCreateQueryResourceObjectAttributesProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushTokenCreateQueryResourceObjectAttributesProfile} obj Optional instance to populate.
   * @return {module:model/PushTokenCreateQueryResourceObjectAttributesProfile} The populated <code>PushTokenCreateQueryResourceObjectAttributesProfile</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PushTokenCreateQueryResourceObjectAttributesProfile();
      if (data.hasOwnProperty('data'))
        obj.data = ProfileUpsertQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ProfileUpsertQueryResourceObject} data
 */
PushTokenCreateQueryResourceObjectAttributesProfile.prototype.data = undefined;

