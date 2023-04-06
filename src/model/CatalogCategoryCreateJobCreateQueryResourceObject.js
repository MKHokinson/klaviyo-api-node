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
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';
import {CatalogCategoryBulkCreateJobEnum} from './CatalogCategoryBulkCreateJobEnum.js';
import {CatalogCategoryCreateJobCreateQueryResourceObjectAttributes} from './CatalogCategoryCreateJobCreateQueryResourceObjectAttributes.js';

/**
 * The CatalogCategoryCreateJobCreateQueryResourceObject model module.
 * @module model/CatalogCategoryCreateJobCreateQueryResourceObject
 * @version 2023-02-22
 */
export class CatalogCategoryCreateJobCreateQueryResourceObject {
  /**
   * Constructs a new <code>CatalogCategoryCreateJobCreateQueryResourceObject</code>.
   * @alias module:model/CatalogCategoryCreateJobCreateQueryResourceObject
   * @class
   * @param type {module:model/CatalogCategoryBulkCreateJobEnum} 
   * @param attributes {module:model/CatalogCategoryCreateJobCreateQueryResourceObjectAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogCategoryCreateJobCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryCreateJobCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryCreateJobCreateQueryResourceObject} The populated <code>CatalogCategoryCreateJobCreateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogCategoryCreateJobCreateQueryResourceObject();
      if (data.hasOwnProperty('type'))
        obj.type = CatalogCategoryBulkCreateJobEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CatalogCategoryCreateJobCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogCategoryBulkCreateJobEnum} type
 */
CatalogCategoryCreateJobCreateQueryResourceObject.prototype.type = undefined;

/**
 * @member {module:model/CatalogCategoryCreateJobCreateQueryResourceObjectAttributes} attributes
 */
CatalogCategoryCreateJobCreateQueryResourceObject.prototype.attributes = undefined;

