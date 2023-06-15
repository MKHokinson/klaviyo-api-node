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
import {CatalogItemCreateQueryResourceObject} from './CatalogItemCreateQueryResourceObject.js';

/**
 * The CatalogItemCreateJobCreateQueryResourceObjectAttributes model module.
 * @module model/CatalogItemCreateJobCreateQueryResourceObjectAttributes
 * @version 2023-06-15
 */
export class CatalogItemCreateJobCreateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>CatalogItemCreateJobCreateQueryResourceObjectAttributes</code>.
   * @alias module:model/CatalogItemCreateJobCreateQueryResourceObjectAttributes
   * @class
   * @param items {Array.<module:model/CatalogItemCreateQueryResourceObject>} Array of catalog items to create.
   */
  constructor(items) {
    this.items = items;
  }

  /**
   * Constructs a <code>CatalogItemCreateJobCreateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCreateJobCreateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogItemCreateJobCreateQueryResourceObjectAttributes} The populated <code>CatalogItemCreateJobCreateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemCreateJobCreateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [CatalogItemCreateQueryResourceObject]);
    }
    return obj;
  }
}

/**
 * Array of catalog items to create.
 * @member {Array.<module:model/CatalogItemCreateQueryResourceObject>} items
 */
CatalogItemCreateJobCreateQueryResourceObjectAttributes.prototype.items = undefined;

