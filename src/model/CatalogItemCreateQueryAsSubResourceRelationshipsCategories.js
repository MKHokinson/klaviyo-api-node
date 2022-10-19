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
import {CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData} from './CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData.js';

/**
 * The CatalogItemCreateQueryAsSubResourceRelationshipsCategories model module.
 * @module model/CatalogItemCreateQueryAsSubResourceRelationshipsCategories
 * @version 2022-10-17
 */
export class CatalogItemCreateQueryAsSubResourceRelationshipsCategories {
  /**
   * Constructs a new <code>CatalogItemCreateQueryAsSubResourceRelationshipsCategories</code>.
   * @alias module:model/CatalogItemCreateQueryAsSubResourceRelationshipsCategories
   * @class
   * @param data {Array.<module:model/CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogItemCreateQueryAsSubResourceRelationshipsCategories</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCreateQueryAsSubResourceRelationshipsCategories} obj Optional instance to populate.
   * @return {module:model/CatalogItemCreateQueryAsSubResourceRelationshipsCategories} The populated <code>CatalogItemCreateQueryAsSubResourceRelationshipsCategories</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemCreateQueryAsSubResourceRelationshipsCategories();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData>} data
 */
CatalogItemCreateQueryAsSubResourceRelationshipsCategories.prototype.data = undefined;

