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
import { ObjectLinks } from './objectLinks';

export class CatalogVariantUpdateJobResponseObjectResource {
    'type': CatalogVariantBulkUpdateJobEnum;
    'attributes': CouponCodeCreateJobResponseObjectResourceAttributes;
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
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return CatalogVariantUpdateJobResponseObjectResource.attributeTypeMap;
    }
}

export namespace CatalogVariantUpdateJobResponseObjectResource {
}