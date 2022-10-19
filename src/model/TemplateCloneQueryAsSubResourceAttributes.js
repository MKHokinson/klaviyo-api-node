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

/**
 * The TemplateCloneQueryAsSubResourceAttributes model module.
 * @module model/TemplateCloneQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
export class TemplateCloneQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>TemplateCloneQueryAsSubResourceAttributes</code>.
   * @alias module:model/TemplateCloneQueryAsSubResourceAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TemplateCloneQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateCloneQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/TemplateCloneQueryAsSubResourceAttributes} The populated <code>TemplateCloneQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateCloneQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('return_fields'))
        obj.returnFields = ApiClient.convertToType(data['return_fields'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
TemplateCloneQueryAsSubResourceAttributes.prototype.name = undefined;

/**
 * @member {Array.<String>} returnFields
 */
TemplateCloneQueryAsSubResourceAttributes.prototype.returnFields = undefined;

