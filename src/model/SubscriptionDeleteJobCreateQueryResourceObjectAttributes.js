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
import {SubscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles} from './SubscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles.js';

/**
 * The SubscriptionDeleteJobCreateQueryResourceObjectAttributes model module.
 * @module model/SubscriptionDeleteJobCreateQueryResourceObjectAttributes
 * @version 2023-08-15
 */
export class SubscriptionDeleteJobCreateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>SubscriptionDeleteJobCreateQueryResourceObjectAttributes</code>.
   * @alias module:model/SubscriptionDeleteJobCreateQueryResourceObjectAttributes
   * @class
   * @param profiles {module:model/SubscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles} 
   */
  constructor(profiles) {
    this.profiles = profiles;
  }

  /**
   * Constructs a <code>SubscriptionDeleteJobCreateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionDeleteJobCreateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/SubscriptionDeleteJobCreateQueryResourceObjectAttributes} The populated <code>SubscriptionDeleteJobCreateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubscriptionDeleteJobCreateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('profiles'))
        obj.profiles = SubscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles.constructFromObject(data['profiles']);
    }
    return obj;
  }
}

/**
 * @member {module:model/SubscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles} profiles
 */
SubscriptionDeleteJobCreateQueryResourceObjectAttributes.prototype.profiles = undefined;

