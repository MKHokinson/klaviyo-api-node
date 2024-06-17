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
import { ConstantContactEnum } from './constantContactEnum';
import { InEnum } from './inEnum';
import { StringEnum } from './stringEnum';
export class ConstantContactIntegrationFilter {
    'type': StringEnum | 'string';
    'operator': InEnum | 'in';
    'value': Array<ConstantContactEnum>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "StringEnum"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "InEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<ConstantContactEnum>"
        }    ];

    static getAttributeTypeMap() {
        return ConstantContactIntegrationFilter.attributeTypeMap;
    }
}

export namespace ConstantContactIntegrationFilter {
}