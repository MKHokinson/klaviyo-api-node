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
import {CatalogItemCreateQueryAsSubResourceRelationships} from './CatalogItemCreateQueryAsSubResourceRelationships.js';
import {CatalogItemUpdateQueryAsSubResourceAttributes} from './CatalogItemUpdateQueryAsSubResourceAttributes.js';

/**
 * The CatalogItemUpdateQueryAsSubResource model module.
 * @module model/CatalogItemUpdateQueryAsSubResource
 * @version 2023-02-22
 */
export class CatalogItemUpdateQueryAsSubResource {
  /**
   * Constructs a new <code>CatalogItemUpdateQueryAsSubResource</code>.
   * @alias module:model/CatalogItemUpdateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogItemUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} The catalog item ID is a compound ID (string), with format: `${integration}:::${catalog}:::${external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
   * @param attributes {module:model/CatalogItemUpdateQueryAsSubResourceAttributes} 
   */
  constructor(type, id, attributes) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogItemUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogItemUpdateQueryAsSubResource} The populated <code>CatalogItemUpdateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemUpdateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CatalogItemUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('relationships'))
        obj.relationships = CatalogItemCreateQueryAsSubResourceRelationships.constructFromObject(data['relationships']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CatalogItemUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-item"
   * @const
   */
  catalogItem: "catalog-item"
};
/**
 * @member {module:model/CatalogItemUpdateQueryAsSubResource.TypeEnum} type
 */
CatalogItemUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * The catalog item ID is a compound ID (string), with format: `${integration}:::${catalog}:::${external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
 * @member {String} id
 */
CatalogItemUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/CatalogItemUpdateQueryAsSubResourceAttributes} attributes
 */
CatalogItemUpdateQueryAsSubResource.prototype.attributes = undefined;

/**
 * @member {module:model/CatalogItemCreateQueryAsSubResourceRelationships} relationships
 */
CatalogItemUpdateQueryAsSubResource.prototype.relationships = undefined;

