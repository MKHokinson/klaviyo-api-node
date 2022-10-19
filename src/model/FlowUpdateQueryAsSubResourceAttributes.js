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
 * The FlowUpdateQueryAsSubResourceAttributes model module.
 * @module model/FlowUpdateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
export class FlowUpdateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>FlowUpdateQueryAsSubResourceAttributes</code>.
   * @alias module:model/FlowUpdateQueryAsSubResourceAttributes
   * @class
   * @param status {String} 
   */
  constructor(status) {
    this.status = status;
  }

  /**
   * Constructs a <code>FlowUpdateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlowUpdateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/FlowUpdateQueryAsSubResourceAttributes} The populated <code>FlowUpdateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FlowUpdateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} status
 */
FlowUpdateQueryAsSubResourceAttributes.prototype.status = undefined;

