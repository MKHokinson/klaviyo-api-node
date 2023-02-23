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
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';
import {TagUpdateQueryAsSubResource} from './TagUpdateQueryAsSubResource.js';

/**
 * The TagUpdateQuery model module.
 * @module model/TagUpdateQuery
 * @version 2023-02-22
 */
export class TagUpdateQuery {
  /**
   * Constructs a new <code>TagUpdateQuery</code>.
   * @alias module:model/TagUpdateQuery
   * @class
   * @param data {module:model/TagUpdateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>TagUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagUpdateQuery} obj Optional instance to populate.
   * @return {module:model/TagUpdateQuery} The populated <code>TagUpdateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagUpdateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = TagUpdateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TagUpdateQueryAsSubResource} data
 */
TagUpdateQuery.prototype.data = undefined;

