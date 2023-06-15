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
import {CatalogCategoryCreateJobCreateQueryResourceObject} from './CatalogCategoryCreateJobCreateQueryResourceObject.js';

/**
 * The CatalogCategoryCreateJobCreateQuery model module.
 * @module model/CatalogCategoryCreateJobCreateQuery
 * @version 2023-06-15
 */
export class CatalogCategoryCreateJobCreateQuery {
  /**
   * Constructs a new <code>CatalogCategoryCreateJobCreateQuery</code>.
   * @alias module:model/CatalogCategoryCreateJobCreateQuery
   * @class
   * @param data {module:model/CatalogCategoryCreateJobCreateQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogCategoryCreateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryCreateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryCreateJobCreateQuery} The populated <code>CatalogCategoryCreateJobCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogCategoryCreateJobCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = CatalogCategoryCreateJobCreateQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogCategoryCreateJobCreateQueryResourceObject} data
 */
CatalogCategoryCreateJobCreateQuery.prototype.data = undefined;

