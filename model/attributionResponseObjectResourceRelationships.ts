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
import { AttributionResponseObjectResourceRelationshipsAttributedEvent } from './attributionResponseObjectResourceRelationshipsAttributedEvent';
import { AttributionResponseObjectResourceRelationshipsCampaign } from './attributionResponseObjectResourceRelationshipsCampaign';
import { AttributionResponseObjectResourceRelationshipsCampaignMessage } from './attributionResponseObjectResourceRelationshipsCampaignMessage';
import { AttributionResponseObjectResourceRelationshipsEvent } from './attributionResponseObjectResourceRelationshipsEvent';
import { AttributionResponseObjectResourceRelationshipsFlow } from './attributionResponseObjectResourceRelationshipsFlow';
import { AttributionResponseObjectResourceRelationshipsFlowMessage } from './attributionResponseObjectResourceRelationshipsFlowMessage';
import { AttributionResponseObjectResourceRelationshipsFlowMessageVariation } from './attributionResponseObjectResourceRelationshipsFlowMessageVariation';

export class AttributionResponseObjectResourceRelationships {
    'event'?: AttributionResponseObjectResourceRelationshipsEvent;
    'attributedEvent'?: AttributionResponseObjectResourceRelationshipsAttributedEvent;
    'campaign'?: AttributionResponseObjectResourceRelationshipsCampaign;
    'campaignMessage'?: AttributionResponseObjectResourceRelationshipsCampaignMessage;
    'flow'?: AttributionResponseObjectResourceRelationshipsFlow;
    'flowMessage'?: AttributionResponseObjectResourceRelationshipsFlowMessage;
    'flowMessageVariation'?: AttributionResponseObjectResourceRelationshipsFlowMessageVariation;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "event",
            "baseName": "event",
            "type": "AttributionResponseObjectResourceRelationshipsEvent"
        },
        {
            "name": "attributedEvent",
            "baseName": "attributed-event",
            "type": "AttributionResponseObjectResourceRelationshipsAttributedEvent"
        },
        {
            "name": "campaign",
            "baseName": "campaign",
            "type": "AttributionResponseObjectResourceRelationshipsCampaign"
        },
        {
            "name": "campaignMessage",
            "baseName": "campaign-message",
            "type": "AttributionResponseObjectResourceRelationshipsCampaignMessage"
        },
        {
            "name": "flow",
            "baseName": "flow",
            "type": "AttributionResponseObjectResourceRelationshipsFlow"
        },
        {
            "name": "flowMessage",
            "baseName": "flow-message",
            "type": "AttributionResponseObjectResourceRelationshipsFlowMessage"
        },
        {
            "name": "flowMessageVariation",
            "baseName": "flow-message-variation",
            "type": "AttributionResponseObjectResourceRelationshipsFlowMessageVariation"
        }    ];

    static getAttributeTypeMap() {
        return AttributionResponseObjectResourceRelationships.attributeTypeMap;
    }
}
