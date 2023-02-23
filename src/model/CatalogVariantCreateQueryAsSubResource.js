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
import {CatalogVariantCreateQueryAsSubResourceAttributes} from './CatalogVariantCreateQueryAsSubResourceAttributes.js';
import {CatalogVariantCreateQueryAsSubResourceRelationships} from './CatalogVariantCreateQueryAsSubResourceRelationships.js';

/**
 * The CatalogVariantCreateQueryAsSubResource model module.
 * @module model/CatalogVariantCreateQueryAsSubResource
 * @version 2023-02-22
 */
export class CatalogVariantCreateQueryAsSubResource {
  /**
   * Constructs a new <code>CatalogVariantCreateQueryAsSubResource</code>.
   * @alias module:model/CatalogVariantCreateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogVariantCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CatalogVariantCreateQueryAsSubResourceAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogVariantCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateQueryAsSubResource} The populated <code>CatalogVariantCreateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantCreateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CatalogVariantCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('relationships'))
        obj.relationships = CatalogVariantCreateQueryAsSubResourceRelationships.constructFromObject(data['relationships']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CatalogVariantCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-variant"
   * @const
   */
  catalogVariant: "catalog-variant"
};
/**
 * @member {module:model/CatalogVariantCreateQueryAsSubResource.TypeEnum} type
 */
CatalogVariantCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CatalogVariantCreateQueryAsSubResourceAttributes} attributes
 */
CatalogVariantCreateQueryAsSubResource.prototype.attributes = undefined;

/**
 * @member {module:model/CatalogVariantCreateQueryAsSubResourceRelationships} relationships
 */
CatalogVariantCreateQueryAsSubResource.prototype.relationships = undefined;

