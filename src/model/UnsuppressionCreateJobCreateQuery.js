/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-06-15
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
import {UnsuppressionCreateJobCreateQueryResourceObject} from './UnsuppressionCreateJobCreateQueryResourceObject.js';

/**
 * The UnsuppressionCreateJobCreateQuery model module.
 * @module model/UnsuppressionCreateJobCreateQuery
 * @version 2023-06-15
 */
export class UnsuppressionCreateJobCreateQuery {
  /**
   * Constructs a new <code>UnsuppressionCreateJobCreateQuery</code>.
   * @alias module:model/UnsuppressionCreateJobCreateQuery
   * @class
   * @param data {module:model/UnsuppressionCreateJobCreateQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>UnsuppressionCreateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnsuppressionCreateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/UnsuppressionCreateJobCreateQuery} The populated <code>UnsuppressionCreateJobCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UnsuppressionCreateJobCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = UnsuppressionCreateJobCreateQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/UnsuppressionCreateJobCreateQueryResourceObject} data
 */
UnsuppressionCreateJobCreateQuery.prototype.data = undefined;

