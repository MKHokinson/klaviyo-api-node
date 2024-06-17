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
import { BackInStockEnum } from './backInStockEnum';
import { MethodEnum } from './methodEnum';
export class BackInStockMethodFilter {
    'field': MethodEnum | 'method';
    'method': BackInStockEnum | 'back_in_stock';


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "MethodEnum"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "BackInStockEnum"
        }    ];

    static getAttributeTypeMap() {
        return BackInStockMethodFilter.attributeTypeMap;
    }
}

export namespace BackInStockMethodFilter {
}
