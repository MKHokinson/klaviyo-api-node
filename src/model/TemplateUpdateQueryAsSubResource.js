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
import {TemplateUpdateQueryAsSubResourceAttributes} from './TemplateUpdateQueryAsSubResourceAttributes.js';

/**
 * The TemplateUpdateQueryAsSubResource model module.
 * @module model/TemplateUpdateQueryAsSubResource
 * @version 2022-10-17
 */
export class TemplateUpdateQueryAsSubResource {
  /**
   * Constructs a new <code>TemplateUpdateQueryAsSubResource</code>.
   * @alias module:model/TemplateUpdateQueryAsSubResource
   * @class
   * @param type {module:model/TemplateUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/TemplateUpdateQueryAsSubResourceAttributes} 
   */
  constructor(type, id, attributes) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>TemplateUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/TemplateUpdateQueryAsSubResource} The populated <code>TemplateUpdateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateUpdateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = TemplateUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
TemplateUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "template"
   * @const
   */
  template: "template"
};
/**
 * @member {module:model/TemplateUpdateQueryAsSubResource.TypeEnum} type
 */
TemplateUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
TemplateUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/TemplateUpdateQueryAsSubResourceAttributes} attributes
 */
TemplateUpdateQueryAsSubResource.prototype.attributes = undefined;

