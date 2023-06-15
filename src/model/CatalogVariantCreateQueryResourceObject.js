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
import {CatalogCategoryUpdateQueryResourceObjectRelationships} from './CatalogCategoryUpdateQueryResourceObjectRelationships.js';
import {CatalogVariantCreateQueryResourceObjectAttributes} from './CatalogVariantCreateQueryResourceObjectAttributes.js';
import {CatalogVariantEnum} from './CatalogVariantEnum.js';

/**
 * The CatalogVariantCreateQueryResourceObject model module.
 * @module model/CatalogVariantCreateQueryResourceObject
 * @version 2023-06-15
 */
export class CatalogVariantCreateQueryResourceObject {
  /**
   * Constructs a new <code>CatalogVariantCreateQueryResourceObject</code>.
   * @alias module:model/CatalogVariantCreateQueryResourceObject
   * @class
   * @param attributes {module:model/CatalogVariantCreateQueryResourceObjectAttributes} 
   * @param type {module:model/CatalogVariantEnum} 
   */
  constructor(attributes, type) {
    this.attributes = attributes;
    this.type = type;
  }

  /**
   * Constructs a <code>CatalogVariantCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateQueryResourceObject} The populated <code>CatalogVariantCreateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantCreateQueryResourceObject();
      if (data.hasOwnProperty('relationships'))
        obj.relationships = CatalogCategoryUpdateQueryResourceObjectRelationships.constructFromObject(data['relationships']);
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CatalogVariantCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('type'))
        obj.type = CatalogVariantEnum.constructFromObject(data['type']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogCategoryUpdateQueryResourceObjectRelationships} relationships
 */
CatalogVariantCreateQueryResourceObject.prototype.relationships = undefined;

/**
 * @member {module:model/CatalogVariantCreateQueryResourceObjectAttributes} attributes
 */
CatalogVariantCreateQueryResourceObject.prototype.attributes = undefined;

/**
 * @member {module:model/CatalogVariantEnum} type
 */
CatalogVariantCreateQueryResourceObject.prototype.type = undefined;

