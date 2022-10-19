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

/**
 * The CatalogCategoryCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogCategoryCreateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
export class CatalogCategoryCreateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>CatalogCategoryCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogCategoryCreateQueryAsSubResourceAttributes
   * @class
   * @param externalId {String} 
   * @param name {String} 
   */
  constructor(externalId, name) {
    this.externalId = externalId;
    this.name = name;
  }

  /**
   * Constructs a <code>CatalogCategoryCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryCreateQueryAsSubResourceAttributes} The populated <code>CatalogCategoryCreateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogCategoryCreateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('external_id'))
        obj.externalId = ApiClient.convertToType(data['external_id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('integration_type'))
        obj.integrationType = ApiClient.convertToType(data['integration_type'], 'String');
      if (data.hasOwnProperty('catalog_type'))
        obj.catalogType = ApiClient.convertToType(data['catalog_type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} externalId
 */
CatalogCategoryCreateQueryAsSubResourceAttributes.prototype.externalId = undefined;

/**
 * @member {String} name
 */
CatalogCategoryCreateQueryAsSubResourceAttributes.prototype.name = undefined;

/**
 * Allowed values for the <code>integrationType</code> property.
 * @enum {String}
 * @readonly
 */
CatalogCategoryCreateQueryAsSubResourceAttributes.IntegrationTypeEnum = {
  /**
   * value: "$custom"
   * @const
   */
  custom: "$custom"
};
/**
 * The integration type. Currently, this can only be set to $custom (and defaults to $custom if not included in the payload).
 * @member {module:model/CatalogCategoryCreateQueryAsSubResourceAttributes.IntegrationTypeEnum} integrationType
 */
CatalogCategoryCreateQueryAsSubResourceAttributes.prototype.integrationType = undefined;

/**
 * @member {String} catalogType
 */
CatalogCategoryCreateQueryAsSubResourceAttributes.prototype.catalogType = undefined;

