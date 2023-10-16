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
import { CatalogVariantBulkUpdateJobEnum } from './catalogVariantBulkUpdateJobEnum';
import { CouponCodeCreateJobResponseObjectResourceAttributes } from './couponCodeCreateJobResponseObjectResourceAttributes';
import { GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { ObjectLinks } from './objectLinks';

export class PostCatalogVariantUpdateJobResponseData {
    'type': CatalogVariantBulkUpdateJobEnum;
    'attributes': CouponCodeCreateJobResponseObjectResourceAttributes;
    'relationships'?: GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships;
    'links': ObjectLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogVariantBulkUpdateJobEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CouponCodeCreateJobResponseObjectResourceAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return PostCatalogVariantUpdateJobResponseData.attributeTypeMap;
    }
}

export namespace PostCatalogVariantUpdateJobResponseData {
}