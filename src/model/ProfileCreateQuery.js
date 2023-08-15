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
import {ProfileCreateQueryResourceObject} from './ProfileCreateQueryResourceObject.js';

/**
 * The ProfileCreateQuery model module.
 * @module model/ProfileCreateQuery
 * @version 2023-08-15
 */
export class ProfileCreateQuery {
  /**
   * Constructs a new <code>ProfileCreateQuery</code>.
   * @alias module:model/ProfileCreateQuery
   * @class
   * @param data {module:model/ProfileCreateQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>ProfileCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileCreateQuery} obj Optional instance to populate.
   * @return {module:model/ProfileCreateQuery} The populated <code>ProfileCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProfileCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = ProfileCreateQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ProfileCreateQueryResourceObject} data
 */
ProfileCreateQuery.prototype.data = undefined;

