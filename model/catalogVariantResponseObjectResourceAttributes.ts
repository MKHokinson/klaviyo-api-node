/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class CatalogVariantResponseObjectResourceAttributes {
    /**
    * The ID of the catalog item variant in an external system.
    */
    'externalId'?: string;
    /**
    * The title of the catalog item variant.
    */
    'title'?: string;
    /**
    * A description of the catalog item variant.
    */
    'description'?: string;
    /**
    * The SKU of the catalog item variant.
    */
    'sku'?: string;
    /**
    * This field controls the visibility of this catalog item variant in product feeds/blocks. This field supports the following values: `1`: a product will not appear in dynamic product recommendation feeds and blocks if it is out of stock. `0` or `2`: a product can appear in dynamic product recommendation feeds and blocks regardless of inventory quantity.
    */
    'inventoryPolicy'?: CatalogVariantResponseObjectResourceAttributes.InventoryPolicyEnum;
    /**
    * The quantity of the catalog item variant currently in stock.
    */
    'inventoryQuantity'?: number;
    /**
    * This field can be used to set the price on the catalog item variant, which is what gets displayed for the item variant when included in emails. For most price-update use cases, you will also want to update the `price` on any parent items using the [Update Catalog Item Endpoint](https://developers.klaviyo.com/en/reference/update_catalog_item).
    */
    'price'?: number;
    /**
    * URL pointing to the location of the catalog item variant on your website.
    */
    'url'?: string;
    /**
    * URL pointing to the location of a full image of the catalog item variant.
    */
    'imageFullUrl'?: string;
    /**
    * URL pointing to the location of an image thumbnail of the catalog item variant.
    */
    'imageThumbnailUrl'?: string;
    /**
    * List of URLs pointing to the locations of images of the catalog item variant.
    */
    'images'?: Array<string>;
    /**
    * Flat JSON blob to provide custom metadata about the catalog item variant. May not exceed 100kb.
    */
    'customMetadata'?: object;
    /**
    * Boolean value indicating whether the catalog item variant is published.
    */
    'published'?: boolean;
    /**
    * Date and time when the catalog item  variant was created, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
    */
    'created'?: Date;
    /**
    * Date and time when the catalog item variant was last updated, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
    */
    'updated'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "externalId",
            "baseName": "external_id",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "sku",
            "baseName": "sku",
            "type": "string"
        },
        {
            "name": "inventoryPolicy",
            "baseName": "inventory_policy",
            "type": "CatalogVariantResponseObjectResourceAttributes.InventoryPolicyEnum"
        },
        {
            "name": "inventoryQuantity",
            "baseName": "inventory_quantity",
            "type": "number"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "imageFullUrl",
            "baseName": "image_full_url",
            "type": "string"
        },
        {
            "name": "imageThumbnailUrl",
            "baseName": "image_thumbnail_url",
            "type": "string"
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<string>"
        },
        {
            "name": "customMetadata",
            "baseName": "custom_metadata",
            "type": "object"
        },
        {
            "name": "published",
            "baseName": "published",
            "type": "boolean"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return CatalogVariantResponseObjectResourceAttributes.attributeTypeMap;
    }
}

export namespace CatalogVariantResponseObjectResourceAttributes {
    export enum InventoryPolicyEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1,
        NUMBER_2 = <any> 2
    }
}