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
import {CatalogItemUpdateQueryResourceObject} from './CatalogItemUpdateQueryResourceObject.js';

/**
 * The CatalogItemUpdateJobCreateQueryResourceObjectAttributes model module.
 * @module model/CatalogItemUpdateJobCreateQueryResourceObjectAttributes
 * @version 2023-06-15
 */
export class CatalogItemUpdateJobCreateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>CatalogItemUpdateJobCreateQueryResourceObjectAttributes</code>.
   * @alias module:model/CatalogItemUpdateJobCreateQueryResourceObjectAttributes
   * @class
   * @param items {Array.<module:model/CatalogItemUpdateQueryResourceObject>} Array of catalog items to update.
   */
  constructor(items) {
    this.items = items;
  }

  /**
   * Constructs a <code>CatalogItemUpdateJobCreateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemUpdateJobCreateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogItemUpdateJobCreateQueryResourceObjectAttributes} The populated <code>CatalogItemUpdateJobCreateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemUpdateJobCreateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [CatalogItemUpdateQueryResourceObject]);
    }
    return obj;
  }
}

/**
 * Array of catalog items to update.
 * @member {Array.<module:model/CatalogItemUpdateQueryResourceObject>} items
 */
CatalogItemUpdateJobCreateQueryResourceObjectAttributes.prototype.items = undefined;

