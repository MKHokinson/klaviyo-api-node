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
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';
import {TagFlowOpData} from './TagFlowOpData.js';

/**
 * The TagFlowOp model module.
 * @module model/TagFlowOp
 * @version 2023-02-22
 */
export class TagFlowOp {
  /**
   * Constructs a new <code>TagFlowOp</code>.
   * @alias module:model/TagFlowOp
   * @class
   * @param data {Array.<module:model/TagFlowOpData>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>TagFlowOp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagFlowOp} obj Optional instance to populate.
   * @return {module:model/TagFlowOp} The populated <code>TagFlowOp</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagFlowOp();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [TagFlowOpData]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/TagFlowOpData>} data
 */
TagFlowOp.prototype.data = undefined;

