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
import { ListEnum } from './listEnum';
import { ListRetrieveResponseObjectResourceExtendedAttributes } from './listRetrieveResponseObjectResourceExtendedAttributes';
import { ObjectLinks } from './objectLinks';

export class ListRetrieveResponseObjectResourceExtended {
    'type': ListEnum;
    /**
    * Primary key that uniquely identifies this list. Generated by Klaviyo.
    */
    'id': string;
    'attributes': ListRetrieveResponseObjectResourceExtendedAttributes;
    'links': ObjectLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ListEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "ListRetrieveResponseObjectResourceExtendedAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return ListRetrieveResponseObjectResourceExtended.attributeTypeMap;
    }
}

export namespace ListRetrieveResponseObjectResourceExtended {
}