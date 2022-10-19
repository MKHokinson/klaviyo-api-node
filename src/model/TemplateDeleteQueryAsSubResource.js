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
 * The TemplateDeleteQueryAsSubResource model module.
 * @module model/TemplateDeleteQueryAsSubResource
 * @version 2022-10-17
 */
export class TemplateDeleteQueryAsSubResource {
  /**
   * Constructs a new <code>TemplateDeleteQueryAsSubResource</code>.
   * @alias module:model/TemplateDeleteQueryAsSubResource
   * @class
   * @param type {module:model/TemplateDeleteQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   */
  constructor(type, id) {
    this.type = type;
    this.id = id;
  }

  /**
   * Constructs a <code>TemplateDeleteQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateDeleteQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/TemplateDeleteQueryAsSubResource} The populated <code>TemplateDeleteQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateDeleteQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
TemplateDeleteQueryAsSubResource.TypeEnum = {
  /**
   * value: "template"
   * @const
   */
  template: "template"
};
/**
 * @member {module:model/TemplateDeleteQueryAsSubResource.TypeEnum} type
 */
TemplateDeleteQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
TemplateDeleteQueryAsSubResource.prototype.id = undefined;

