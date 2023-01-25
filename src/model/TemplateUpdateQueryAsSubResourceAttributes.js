/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-01-24
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
 * The TemplateUpdateQueryAsSubResourceAttributes model module.
 * @module model/TemplateUpdateQueryAsSubResourceAttributes
 * @version 2023-01-24
 */
export class TemplateUpdateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>TemplateUpdateQueryAsSubResourceAttributes</code>.
   * @alias module:model/TemplateUpdateQueryAsSubResourceAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TemplateUpdateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateUpdateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/TemplateUpdateQueryAsSubResourceAttributes} The populated <code>TemplateUpdateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateUpdateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('html'))
        obj.html = ApiClient.convertToType(data['html'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('return_fields'))
        obj.returnFields = ApiClient.convertToType(data['return_fields'], ['String']);
    }
    return obj;
  }
}

/**
 * The name of the template
 * @member {String} name
 */
TemplateUpdateQueryAsSubResourceAttributes.prototype.name = undefined;

/**
 * The HTML of the template
 * @member {String} html
 */
TemplateUpdateQueryAsSubResourceAttributes.prototype.html = undefined;

/**
 * The plaintext of the template
 * @member {String} text
 */
TemplateUpdateQueryAsSubResourceAttributes.prototype.text = undefined;

/**
 * Provide fields to limit the returned data
 * @member {Array.<String>} returnFields
 */
TemplateUpdateQueryAsSubResourceAttributes.prototype.returnFields = undefined;

