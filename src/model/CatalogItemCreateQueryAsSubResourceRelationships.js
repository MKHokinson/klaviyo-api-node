/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-01-24
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
import {CatalogItemCreateQueryAsSubResourceRelationshipsCategories} from './CatalogItemCreateQueryAsSubResourceRelationshipsCategories.js';

/**
 * The CatalogItemCreateQueryAsSubResourceRelationships model module.
 * @module model/CatalogItemCreateQueryAsSubResourceRelationships
 * @version 2023-01-24
 */
export class CatalogItemCreateQueryAsSubResourceRelationships {
  /**
   * Constructs a new <code>CatalogItemCreateQueryAsSubResourceRelationships</code>.
   * @alias module:model/CatalogItemCreateQueryAsSubResourceRelationships
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CatalogItemCreateQueryAsSubResourceRelationships</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCreateQueryAsSubResourceRelationships} obj Optional instance to populate.
   * @return {module:model/CatalogItemCreateQueryAsSubResourceRelationships} The populated <code>CatalogItemCreateQueryAsSubResourceRelationships</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemCreateQueryAsSubResourceRelationships();
      if (data.hasOwnProperty('categories'))
        obj.categories = CatalogItemCreateQueryAsSubResourceRelationshipsCategories.constructFromObject(data['categories']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogItemCreateQueryAsSubResourceRelationshipsCategories} categories
 */
CatalogItemCreateQueryAsSubResourceRelationships.prototype.categories = undefined;

