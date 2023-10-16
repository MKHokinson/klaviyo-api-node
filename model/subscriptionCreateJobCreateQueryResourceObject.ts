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
import { ProfileSubscriptionBulkCreateJobEnum } from './profileSubscriptionBulkCreateJobEnum';
import { SubscriptionCreateJobCreateQueryResourceObjectAttributes } from './subscriptionCreateJobCreateQueryResourceObjectAttributes';
import { SubscriptionCreateJobCreateQueryResourceObjectRelationships } from './subscriptionCreateJobCreateQueryResourceObjectRelationships';

export class SubscriptionCreateJobCreateQueryResourceObject {
    'type': ProfileSubscriptionBulkCreateJobEnum;
    'attributes': SubscriptionCreateJobCreateQueryResourceObjectAttributes;
    'relationships': SubscriptionCreateJobCreateQueryResourceObjectRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ProfileSubscriptionBulkCreateJobEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "SubscriptionCreateJobCreateQueryResourceObjectAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "SubscriptionCreateJobCreateQueryResourceObjectRelationships"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionCreateJobCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace SubscriptionCreateJobCreateQueryResourceObject {
}