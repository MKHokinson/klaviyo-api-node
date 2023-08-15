/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-08-15
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
import {CatalogVariantCreateQueryResourceObjectRelationshipsItemData} from './CatalogVariantCreateQueryResourceObjectRelationshipsItemData.js';

/**
 * The CatalogVariantCreateQueryResourceObjectRelationshipsItem model module.
 * @module model/CatalogVariantCreateQueryResourceObjectRelationshipsItem
 * @version 2023-08-15
 */
export class CatalogVariantCreateQueryResourceObjectRelationshipsItem {
  /**
   * Constructs a new <code>CatalogVariantCreateQueryResourceObjectRelationshipsItem</code>.
   * @alias module:model/CatalogVariantCreateQueryResourceObjectRelationshipsItem
   * @class
   * @param data {module:model/CatalogVariantCreateQueryResourceObjectRelationshipsItemData} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogVariantCreateQueryResourceObjectRelationshipsItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateQueryResourceObjectRelationshipsItem} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateQueryResourceObjectRelationshipsItem} The populated <code>CatalogVariantCreateQueryResourceObjectRelationshipsItem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantCreateQueryResourceObjectRelationshipsItem();
      if (data.hasOwnProperty('data'))
        obj.data = CatalogVariantCreateQueryResourceObjectRelationshipsItemData.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogVariantCreateQueryResourceObjectRelationshipsItemData} data
 */
CatalogVariantCreateQueryResourceObjectRelationshipsItem.prototype.data = undefined;

