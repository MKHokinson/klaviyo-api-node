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
import {TemplateRenderQueryResourceObject} from './TemplateRenderQueryResourceObject.js';

/**
 * The TemplateRenderQuery model module.
 * @module model/TemplateRenderQuery
 * @version 2023-08-15
 */
export class TemplateRenderQuery {
  /**
   * Constructs a new <code>TemplateRenderQuery</code>.
   * @alias module:model/TemplateRenderQuery
   * @class
   * @param data {module:model/TemplateRenderQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>TemplateRenderQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateRenderQuery} obj Optional instance to populate.
   * @return {module:model/TemplateRenderQuery} The populated <code>TemplateRenderQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateRenderQuery();
      if (data.hasOwnProperty('data'))
        obj.data = TemplateRenderQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TemplateRenderQueryResourceObject} data
 */
TemplateRenderQuery.prototype.data = undefined;

