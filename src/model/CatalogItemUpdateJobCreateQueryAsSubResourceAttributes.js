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
import {CatalogItemUpdateQueryAsSubResource} from './CatalogItemUpdateQueryAsSubResource.js';

/**
 * The CatalogItemUpdateJobCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogItemUpdateJobCreateQueryAsSubResourceAttributes
 * @version 2023-02-22
 */
export class CatalogItemUpdateJobCreateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>CatalogItemUpdateJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogItemUpdateJobCreateQueryAsSubResourceAttributes
   * @class
   * @param items {Array.<module:model/CatalogItemUpdateQueryAsSubResource>} Array of catalog items to update.
   */
  constructor(items) {
    this.items = items;
  }

  /**
   * Constructs a <code>CatalogItemUpdateJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemUpdateJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogItemUpdateJobCreateQueryAsSubResourceAttributes} The populated <code>CatalogItemUpdateJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemUpdateJobCreateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [CatalogItemUpdateQueryAsSubResource]);
    }
    return obj;
  }
}

/**
 * Array of catalog items to update.
 * @member {Array.<module:model/CatalogItemUpdateQueryAsSubResource>} items
 */
CatalogItemUpdateJobCreateQueryAsSubResourceAttributes.prototype.items = undefined;

