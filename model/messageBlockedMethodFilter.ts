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
import { MessageBlockedEnum } from './messageBlockedEnum';
import { MethodEnum } from './methodEnum';
export class MessageBlockedMethodFilter {
    'field': MethodEnum | 'method';
    'method': MessageBlockedEnum | 'message_blocked';


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "MethodEnum"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "MessageBlockedEnum"
        }    ];

    static getAttributeTypeMap() {
        return MessageBlockedMethodFilter.attributeTypeMap;
    }
}

export namespace MessageBlockedMethodFilter {
}