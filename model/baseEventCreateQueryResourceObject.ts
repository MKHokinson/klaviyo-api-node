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
import { BaseEventCreateQueryResourceObjectAttributes } from './baseEventCreateQueryResourceObjectAttributes';
import { EventEnum } from './eventEnum';
export class BaseEventCreateQueryResourceObject {
    'type': EventEnum | 'event';
    'attributes': BaseEventCreateQueryResourceObjectAttributes;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "EventEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "BaseEventCreateQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return BaseEventCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace BaseEventCreateQueryResourceObject {
}