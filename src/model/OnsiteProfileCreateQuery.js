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
import {OnsiteProfileCreateQueryAsSubResource} from './OnsiteProfileCreateQueryAsSubResource.js';

/**
 * The OnsiteProfileCreateQuery model module.
 * @module model/OnsiteProfileCreateQuery
 * @version 2022-10-17
 */
export class OnsiteProfileCreateQuery {
  /**
   * Constructs a new <code>OnsiteProfileCreateQuery</code>.
   * @alias module:model/OnsiteProfileCreateQuery
   * @class
   * @param data {module:model/OnsiteProfileCreateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>OnsiteProfileCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnsiteProfileCreateQuery} obj Optional instance to populate.
   * @return {module:model/OnsiteProfileCreateQuery} The populated <code>OnsiteProfileCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnsiteProfileCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = OnsiteProfileCreateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OnsiteProfileCreateQueryAsSubResource} data
 */
OnsiteProfileCreateQuery.prototype.data = undefined;

