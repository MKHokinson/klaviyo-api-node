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

/**
 * The IncludedItemsAttributes model module.
 * @module model/IncludedItemsAttributes
 * @version 2023-02-22
 */
export class IncludedItemsAttributes {
  /**
   * Constructs a new <code>IncludedItemsAttributes</code>.
   * @alias module:model/IncludedItemsAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IncludedItemsAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedItemsAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedItemsAttributes} The populated <code>IncludedItemsAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncludedItemsAttributes();
      if (data.hasOwnProperty('external_id'))
        obj.externalId = ApiClient.convertToType(data['external_id'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
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
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
    }
    return obj;
  }
}

/**
 * The ID of the catalog item in an external system.
 * @member {String} externalId
 */
IncludedItemsAttributes.prototype.externalId = undefined;

/**
 * The title of the catalog item.
 * @member {String} title
 */
IncludedItemsAttributes.prototype.title = undefined;

/**
 * A description of the catalog item.
 * @member {String} description
 */
IncludedItemsAttributes.prototype.description = undefined;

/**
 * This field can be used to set the price on the catalog item, which is what gets displayed for the item when included in emails. For most price-update use cases, you will also want to update the `price` on any child variants, using the [Update Catalog Variant Endpoint](https://developers.klaviyo.com/en/reference/update_catalog_variant).
 * @member {Number} price
 */
IncludedItemsAttributes.prototype.price = undefined;

/**
 * URL pointing to the location of the catalog item on your website.
 * @member {String} url
 */
IncludedItemsAttributes.prototype.url = undefined;

/**
 * URL pointing to the location of a full image of the catalog item.
 * @member {String} imageFullUrl
 */
IncludedItemsAttributes.prototype.imageFullUrl = undefined;

/**
 * URL pointing to the location of an image thumbnail of the catalog item
 * @member {String} imageThumbnailUrl
 */
IncludedItemsAttributes.prototype.imageThumbnailUrl = undefined;

/**
 * List of URLs pointing to the locations of images of the catalog item.
 * @member {Array.<String>} images
 */
IncludedItemsAttributes.prototype.images = undefined;

/**
 * Flat JSON blob to provide custom metadata about the catalog item. May not exceed 100kb.
 * @member {Object} customMetadata
 */
IncludedItemsAttributes.prototype.customMetadata = undefined;

/**
 * Boolean value indicating whether the catalog item is published.
 * @member {Boolean} published
 */
IncludedItemsAttributes.prototype.published = undefined;

/**
 * Date and time when the catalog item was created, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
 * @member {Date} created
 */
IncludedItemsAttributes.prototype.created = undefined;

/**
 * Date and time when the catalog item was last updated, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
 * @member {Date} updated
 */
IncludedItemsAttributes.prototype.updated = undefined;

