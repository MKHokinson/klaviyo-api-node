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
import {FlowUpdateQueryAsSubResourceAttributes} from './FlowUpdateQueryAsSubResourceAttributes.js';

/**
 * The FlowUpdateQueryAsSubResource model module.
 * @module model/FlowUpdateQueryAsSubResource
 * @version 2023-02-22
 */
export class FlowUpdateQueryAsSubResource {
  /**
   * Constructs a new <code>FlowUpdateQueryAsSubResource</code>.
   * @alias module:model/FlowUpdateQueryAsSubResource
   * @class
   * @param type {module:model/FlowUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} ID of the Flow to update. Ex: XVTP5Q
   * @param attributes {module:model/FlowUpdateQueryAsSubResourceAttributes} 
   */
  constructor(type, id, attributes) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>FlowUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlowUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/FlowUpdateQueryAsSubResource} The populated <code>FlowUpdateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FlowUpdateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = FlowUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
FlowUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "flow"
   * @const
   */
  flow: "flow"
};
/**
 * @member {module:model/FlowUpdateQueryAsSubResource.TypeEnum} type
 */
FlowUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * ID of the Flow to update. Ex: XVTP5Q
 * @member {String} id
 */
FlowUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/FlowUpdateQueryAsSubResourceAttributes} attributes
 */
FlowUpdateQueryAsSubResource.prototype.attributes = undefined;

