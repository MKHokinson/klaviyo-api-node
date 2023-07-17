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
import {ProfilePartialUpdateQueryResourceObject} from './ProfilePartialUpdateQueryResourceObject.js';

/**
 * The ProfilePartialUpdateQuery model module.
 * @module model/ProfilePartialUpdateQuery
 * @version 2023-07-15
 */
export class ProfilePartialUpdateQuery {
  /**
   * Constructs a new <code>ProfilePartialUpdateQuery</code>.
   * @alias module:model/ProfilePartialUpdateQuery
   * @class
   * @param data {module:model/ProfilePartialUpdateQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>ProfilePartialUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfilePartialUpdateQuery} obj Optional instance to populate.
   * @return {module:model/ProfilePartialUpdateQuery} The populated <code>ProfilePartialUpdateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProfilePartialUpdateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = ProfilePartialUpdateQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ProfilePartialUpdateQueryResourceObject} data
 */
ProfilePartialUpdateQuery.prototype.data = undefined;

