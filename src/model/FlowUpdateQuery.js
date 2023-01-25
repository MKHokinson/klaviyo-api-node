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
import {FlowUpdateQueryAsSubResource} from './FlowUpdateQueryAsSubResource.js';

/**
 * The FlowUpdateQuery model module.
 * @module model/FlowUpdateQuery
 * @version 2023-01-24
 */
export class FlowUpdateQuery {
  /**
   * Constructs a new <code>FlowUpdateQuery</code>.
   * @alias module:model/FlowUpdateQuery
   * @class
   * @param data {module:model/FlowUpdateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>FlowUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlowUpdateQuery} obj Optional instance to populate.
   * @return {module:model/FlowUpdateQuery} The populated <code>FlowUpdateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FlowUpdateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = FlowUpdateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/FlowUpdateQueryAsSubResource} data
 */
FlowUpdateQuery.prototype.data = undefined;

