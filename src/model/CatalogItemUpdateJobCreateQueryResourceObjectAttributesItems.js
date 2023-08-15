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
import {CatalogItemUpdateQueryResourceObject} from './CatalogItemUpdateQueryResourceObject.js';

/**
 * The CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems model module.
 * @module model/CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems
 * @version 2023-08-15
 */
export class CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems {
  /**
   * Constructs a new <code>CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems</code>.
   * Array of catalog items to update.
   * @alias module:model/CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems
   * @class
   * @param data {Array.<module:model/CatalogItemUpdateQueryResourceObject>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems} obj Optional instance to populate.
   * @return {module:model/CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems} The populated <code>CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [CatalogItemUpdateQueryResourceObject]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CatalogItemUpdateQueryResourceObject>} data
 */
CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems.prototype.data = undefined;
