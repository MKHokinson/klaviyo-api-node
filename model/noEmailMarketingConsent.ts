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
import { EmailEnum } from './emailEnum';
import { NoEmailMarketingConsentConsentStatus } from './noEmailMarketingConsentConsentStatus';
export class NoEmailMarketingConsent {
    'channel': EmailEnum | 'email';
    'canReceiveMarketing': NoEmailMarketingConsent.CanReceiveMarketingEnum | false;
    'consentStatus': NoEmailMarketingConsentConsentStatus;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "EmailEnum"
        },
        {
            "name": "canReceiveMarketing",
            "baseName": "can_receive_marketing",
            "type": "NoEmailMarketingConsent.CanReceiveMarketingEnum"
        },
        {
            "name": "consentStatus",
            "baseName": "consent_status",
            "type": "NoEmailMarketingConsentConsentStatus"
        }    ];

    static getAttributeTypeMap() {
        return NoEmailMarketingConsent.attributeTypeMap;
    }
}

export namespace NoEmailMarketingConsent {
    export enum CanReceiveMarketingEnum {
        False = <any> false
    }
}