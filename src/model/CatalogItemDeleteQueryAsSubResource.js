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

/**
 * The CatalogItemDeleteQueryAsSubResource model module.
 * @module model/CatalogItemDeleteQueryAsSubResource
 * @version 2023-01-24
 */
export class CatalogItemDeleteQueryAsSubResource {
  /**
   * Constructs a new <code>CatalogItemDeleteQueryAsSubResource</code>.
   * @alias module:model/CatalogItemDeleteQueryAsSubResource
   * @class
   * @param type {module:model/CatalogItemDeleteQueryAsSubResource.TypeEnum} 
   * @param id {String} The catalog item ID is a compound ID (string), with format: `${integration}:::${catalog}:::${external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`, but support for multiple catalogs  & non-custom integrations is forthcoming.
   */
  constructor(type, id) {
    this.type = type;
    this.id = id;
  }

  /**
   * Constructs a <code>CatalogItemDeleteQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemDeleteQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogItemDeleteQueryAsSubResource} The populated <code>CatalogItemDeleteQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemDeleteQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CatalogItemDeleteQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-item"
   * @const
   */
  catalogItem: "catalog-item"
};
/**
 * @member {module:model/CatalogItemDeleteQueryAsSubResource.TypeEnum} type
 */
CatalogItemDeleteQueryAsSubResource.prototype.type = undefined;

/**
 * The catalog item ID is a compound ID (string), with format: `${integration}:::${catalog}:::${external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`, but support for multiple catalogs  & non-custom integrations is forthcoming.
 * @member {String} id
 */
CatalogItemDeleteQueryAsSubResource.prototype.id = undefined;

