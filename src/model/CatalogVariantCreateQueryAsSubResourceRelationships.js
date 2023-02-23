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
import {CatalogVariantCreateQueryAsSubResourceRelationshipsItems} from './CatalogVariantCreateQueryAsSubResourceRelationshipsItems.js';

/**
 * The CatalogVariantCreateQueryAsSubResourceRelationships model module.
 * @module model/CatalogVariantCreateQueryAsSubResourceRelationships
 * @version 2023-02-22
 */
export class CatalogVariantCreateQueryAsSubResourceRelationships {
  /**
   * Constructs a new <code>CatalogVariantCreateQueryAsSubResourceRelationships</code>.
   * @alias module:model/CatalogVariantCreateQueryAsSubResourceRelationships
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CatalogVariantCreateQueryAsSubResourceRelationships</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateQueryAsSubResourceRelationships} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateQueryAsSubResourceRelationships} The populated <code>CatalogVariantCreateQueryAsSubResourceRelationships</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantCreateQueryAsSubResourceRelationships();
      if (data.hasOwnProperty('items'))
        obj.items = CatalogVariantCreateQueryAsSubResourceRelationshipsItems.constructFromObject(data['items']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogVariantCreateQueryAsSubResourceRelationshipsItems} items
 */
CatalogVariantCreateQueryAsSubResourceRelationships.prototype.items = undefined;

