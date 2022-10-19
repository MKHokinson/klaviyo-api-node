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
import {CatalogVariantCreateQueryAsSubResource} from './CatalogVariantCreateQueryAsSubResource.js';

/**
 * The CatalogVariantCreateJobCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogVariantCreateJobCreateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
export class CatalogVariantCreateJobCreateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>CatalogVariantCreateJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogVariantCreateJobCreateQueryAsSubResourceAttributes
   * @class
   * @param variants {Array.<module:model/CatalogVariantCreateQueryAsSubResource>} 
   */
  constructor(variants) {
    this.variants = variants;
  }

  /**
   * Constructs a <code>CatalogVariantCreateJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateJobCreateQueryAsSubResourceAttributes} The populated <code>CatalogVariantCreateJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantCreateJobCreateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('variants'))
        obj.variants = ApiClient.convertToType(data['variants'], [CatalogVariantCreateQueryAsSubResource]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CatalogVariantCreateQueryAsSubResource>} variants
 */
CatalogVariantCreateJobCreateQueryAsSubResourceAttributes.prototype.variants = undefined;

