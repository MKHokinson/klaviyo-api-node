/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2022-10-17
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
import {TemplateCloneQueryAsSubResource} from './TemplateCloneQueryAsSubResource.js';

/**
 * The TemplateCloneQuery model module.
 * @module model/TemplateCloneQuery
 * @version 2022-10-17
 */
export class TemplateCloneQuery {
  /**
   * Constructs a new <code>TemplateCloneQuery</code>.
   * @alias module:model/TemplateCloneQuery
   * @class
   * @param data {module:model/TemplateCloneQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>TemplateCloneQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateCloneQuery} obj Optional instance to populate.
   * @return {module:model/TemplateCloneQuery} The populated <code>TemplateCloneQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateCloneQuery();
      if (data.hasOwnProperty('data'))
        obj.data = TemplateCloneQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TemplateCloneQueryAsSubResource} data
 */
TemplateCloneQuery.prototype.data = undefined;

