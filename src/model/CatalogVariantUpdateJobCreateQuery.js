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
import {CatalogVariantUpdateJobCreateQueryResourceObject} from './CatalogVariantUpdateJobCreateQueryResourceObject.js';

/**
 * The CatalogVariantUpdateJobCreateQuery model module.
 * @module model/CatalogVariantUpdateJobCreateQuery
 * @version 2023-06-15
 */
export class CatalogVariantUpdateJobCreateQuery {
  /**
   * Constructs a new <code>CatalogVariantUpdateJobCreateQuery</code>.
   * @alias module:model/CatalogVariantUpdateJobCreateQuery
   * @class
   * @param data {module:model/CatalogVariantUpdateJobCreateQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogVariantUpdateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantUpdateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogVariantUpdateJobCreateQuery} The populated <code>CatalogVariantUpdateJobCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantUpdateJobCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = CatalogVariantUpdateJobCreateQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogVariantUpdateJobCreateQueryResourceObject} data
 */
CatalogVariantUpdateJobCreateQuery.prototype.data = undefined;

