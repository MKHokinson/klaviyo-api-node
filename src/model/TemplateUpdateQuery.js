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
import {TemplateUpdateQueryResourceObject} from './TemplateUpdateQueryResourceObject.js';

/**
 * The TemplateUpdateQuery model module.
 * @module model/TemplateUpdateQuery
 * @version 2023-06-15
 */
export class TemplateUpdateQuery {
  /**
   * Constructs a new <code>TemplateUpdateQuery</code>.
   * @alias module:model/TemplateUpdateQuery
   * @class
   * @param data {module:model/TemplateUpdateQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>TemplateUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateUpdateQuery} obj Optional instance to populate.
   * @return {module:model/TemplateUpdateQuery} The populated <code>TemplateUpdateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateUpdateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = TemplateUpdateQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TemplateUpdateQueryResourceObject} data
 */
TemplateUpdateQuery.prototype.data = undefined;

