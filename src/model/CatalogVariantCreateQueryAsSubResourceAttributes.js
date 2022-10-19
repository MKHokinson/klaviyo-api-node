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
 * The CatalogVariantCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogVariantCreateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
export class CatalogVariantCreateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>CatalogVariantCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogVariantCreateQueryAsSubResourceAttributes
   * @class
   * @param externalId {String} 
   * @param title {String} 
   * @param description {String} 
   * @param sku {String} 
   * @param inventoryPolicy {module:model/CatalogVariantCreateQueryAsSubResourceAttributes.InventoryPolicyEnum} A field that controls product visibility in product feeds/blocks. This field has two options:     DENY (1): a product will not appear in dynamic product recommendation feeds and blocks if it is out of stock.     CONTINUE (2): a product can appear in dynamic product recommendation feeds and blocks regardless of inventory quantity.     UNKNOWN (0): the behavior will be the same as if it were set to 2 [Default]
   * @param inventoryQuantity {Number} 
   * @param price {Number} 
   * @param url {String} 
   */
  constructor(externalId, title, description, sku, inventoryPolicy, inventoryQuantity, price, url) {
    this.externalId = externalId;
    this.title = title;
    this.description = description;
    this.sku = sku;
    this.inventoryPolicy = inventoryPolicy;
    this.inventoryQuantity = inventoryQuantity;
    this.price = price;
    this.url = url;
  }

  /**
   * Constructs a <code>CatalogVariantCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateQueryAsSubResourceAttributes} The populated <code>CatalogVariantCreateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantCreateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('external_id'))
        obj.externalId = ApiClient.convertToType(data['external_id'], 'String');
      if (data.hasOwnProperty('catalog_type'))
        obj.catalogType = ApiClient.convertToType(data['catalog_type'], 'String');
      if (data.hasOwnProperty('integration_type'))
        obj.integrationType = ApiClient.convertToType(data['integration_type'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('sku'))
        obj.sku = ApiClient.convertToType(data['sku'], 'String');
      if (data.hasOwnProperty('inventory_policy'))
        obj.inventoryPolicy = ApiClient.convertToType(data['inventory_policy'], 'Number');
      if (data.hasOwnProperty('inventory_quantity'))
        obj.inventoryQuantity = ApiClient.convertToType(data['inventory_quantity'], 'Number');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('image_full_url'))
        obj.imageFullUrl = ApiClient.convertToType(data['image_full_url'], 'String');
      if (data.hasOwnProperty('image_thumbnail_url'))
        obj.imageThumbnailUrl = ApiClient.convertToType(data['image_thumbnail_url'], 'String');
      if (data.hasOwnProperty('images'))
        obj.images = ApiClient.convertToType(data['images'], ['String']);
      if (data.hasOwnProperty('custom_metadata'))
        obj.customMetadata = ApiClient.convertToType(data['custom_metadata'], Object);
      if (data.hasOwnProperty('published'))
        obj.published = ApiClient.convertToType(data['published'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} externalId
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.externalId = undefined;

/**
 * @member {String} catalogType
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.catalogType = undefined;

/**
 * Allowed values for the <code>integrationType</code> property.
 * @enum {String}
 * @readonly
 */
CatalogVariantCreateQueryAsSubResourceAttributes.IntegrationTypeEnum = {
  /**
   * value: "$custom"
   * @const
   */
  custom: "$custom"
};
/**
 * The integration type. Currently, this can only be set to $custom (and defaults to $custom if not included in the payload).
 * @member {module:model/CatalogVariantCreateQueryAsSubResourceAttributes.IntegrationTypeEnum} integrationType
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.integrationType = undefined;

/**
 * @member {String} title
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.title = undefined;

/**
 * @member {String} description
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.description = undefined;

/**
 * @member {String} sku
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.sku = undefined;

/**
 * Allowed values for the <code>inventoryPolicy</code> property.
 * @enum {Number}
 * @readonly
 */
CatalogVariantCreateQueryAsSubResourceAttributes.InventoryPolicyEnum = {
  /**
   * value: 0
   * @const
   */
  _0: 0,

  /**
   * value: 1
   * @const
   */
  _1: 1,

  /**
   * value: 2
   * @const
   */
  _2: 2
};
/**
 * A field that controls product visibility in product feeds/blocks. This field has two options:     DENY (1): a product will not appear in dynamic product recommendation feeds and blocks if it is out of stock.     CONTINUE (2): a product can appear in dynamic product recommendation feeds and blocks regardless of inventory quantity.     UNKNOWN (0): the behavior will be the same as if it were set to 2 [Default]
 * @member {module:model/CatalogVariantCreateQueryAsSubResourceAttributes.InventoryPolicyEnum} inventoryPolicy
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.inventoryPolicy = undefined;

/**
 * @member {Number} inventoryQuantity
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.inventoryQuantity = undefined;

/**
 * @member {Number} price
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.price = undefined;

/**
 * @member {String} url
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.url = undefined;

/**
 * @member {String} imageFullUrl
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.imageFullUrl = undefined;

/**
 * @member {String} imageThumbnailUrl
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.imageThumbnailUrl = undefined;

/**
 * @member {Array.<String>} images
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.images = undefined;

/**
 * @member {Object} customMetadata
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.customMetadata = undefined;

/**
 * @member {Boolean} published
 */
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.published = undefined;

