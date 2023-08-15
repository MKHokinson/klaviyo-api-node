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
import {CatalogCategoryCreateQueryResourceObject} from './CatalogCategoryCreateQueryResourceObject.js';

/**
 * The CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories model module.
 * @module model/CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories
 * @version 2023-08-15
 */
export class CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories {
  /**
   * Constructs a new <code>CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories</code>.
   * Array of catalog categories to create.
   * @alias module:model/CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories
   * @class
   * @param data {Array.<module:model/CatalogCategoryCreateQueryResourceObject>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories} The populated <code>CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [CatalogCategoryCreateQueryResourceObject]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CatalogCategoryCreateQueryResourceObject>} data
 */
CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories.prototype.data = undefined;

