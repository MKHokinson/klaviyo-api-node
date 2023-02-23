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
import {CatalogCategoryDeleteQueryAsSubResource} from './CatalogCategoryDeleteQueryAsSubResource.js';

/**
 * The CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes
 * @version 2023-02-22
 */
export class CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes
   * @class
   * @param categories {Array.<module:model/CatalogCategoryDeleteQueryAsSubResource>} Array of catalog categories to delete.
   */
  constructor(categories) {
    this.categories = categories;
  }

  /**
   * Constructs a <code>CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes} The populated <code>CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('categories'))
        obj.categories = ApiClient.convertToType(data['categories'], [CatalogCategoryDeleteQueryAsSubResource]);
    }
    return obj;
  }
}

/**
 * Array of catalog categories to delete.
 * @member {Array.<module:model/CatalogCategoryDeleteQueryAsSubResource>} categories
 */
CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes.prototype.categories = undefined;

