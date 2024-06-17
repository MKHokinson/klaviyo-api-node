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
import { MethodEnum } from './methodEnum';
import { ProvidedLandlineEnum } from './providedLandlineEnum';
export class ProvidedLandlineMethodFilter {
    'field': MethodEnum | 'method';
    'method': ProvidedLandlineEnum | 'provided_landline';


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "MethodEnum"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "ProvidedLandlineEnum"
        }    ];

    static getAttributeTypeMap() {
        return ProvidedLandlineMethodFilter.attributeTypeMap;
    }
}

export namespace ProvidedLandlineMethodFilter {
}