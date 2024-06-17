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
import { AnyEnum } from './anyEnum';
import { StatusDateFilter } from './statusDateFilter';
export class HasPushMarketing {
    'subscription': AnyEnum | 'any';
    'filters'?: Array<StatusDateFilter> | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "AnyEnum"
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<StatusDateFilter>"
        }    ];

    static getAttributeTypeMap() {
        return HasPushMarketing.attributeTypeMap;
    }
}

export namespace HasPushMarketing {
}