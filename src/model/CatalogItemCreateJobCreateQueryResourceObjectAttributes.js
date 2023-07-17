/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-07-15
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
import {CatalogItemCreateJobCreateQueryResourceObjectAttributesItems} from './CatalogItemCreateJobCreateQueryResourceObjectAttributesItems.js';

/**
 * The CatalogItemCreateJobCreateQueryResourceObjectAttributes model module.
 * @module model/CatalogItemCreateJobCreateQueryResourceObjectAttributes
 * @version 2023-07-15
 */
export class CatalogItemCreateJobCreateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>CatalogItemCreateJobCreateQueryResourceObjectAttributes</code>.
   * @alias module:model/CatalogItemCreateJobCreateQueryResourceObjectAttributes
   * @class
   * @param items {module:model/CatalogItemCreateJobCreateQueryResourceObjectAttributesItems} 
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
        obj.items = CatalogItemCreateJobCreateQueryResourceObjectAttributesItems.constructFromObject(data['items']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogItemCreateJobCreateQueryResourceObjectAttributesItems} items
 */
CatalogItemCreateJobCreateQueryResourceObjectAttributes.prototype.items = undefined;

