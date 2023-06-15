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
import {CatalogItemCategoryOpData} from './CatalogItemCategoryOpData.js';

/**
 * The CatalogItemCategoryOp model module.
 * @module model/CatalogItemCategoryOp
 * @version 2023-06-15
 */
export class CatalogItemCategoryOp {
  /**
   * Constructs a new <code>CatalogItemCategoryOp</code>.
   * @alias module:model/CatalogItemCategoryOp
   * @class
   * @param data {Array.<module:model/CatalogItemCategoryOpData>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogItemCategoryOp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCategoryOp} obj Optional instance to populate.
   * @return {module:model/CatalogItemCategoryOp} The populated <code>CatalogItemCategoryOp</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemCategoryOp();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [CatalogItemCategoryOpData]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CatalogItemCategoryOpData>} data
 */
CatalogItemCategoryOp.prototype.data = undefined;

