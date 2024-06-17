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
import { ProfilePredictiveAnalyticsEnum } from './profilePredictiveAnalyticsEnum';
import { ProfilePredictiveAnalyticsStringFilter } from './profilePredictiveAnalyticsStringFilter';
export class ProfilePredictiveAnalyticsStringCondition {
    'type': ProfilePredictiveAnalyticsEnum | 'profile-predictive-analytics';
    /**
    * Dimension for string profile predictive analytics conditions.
    */
    'dimension': ProfilePredictiveAnalyticsStringCondition.DimensionEnum | 'predicted_gender';
    'filter': ProfilePredictiveAnalyticsStringFilter;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ProfilePredictiveAnalyticsEnum"
        },
        {
            "name": "dimension",
            "baseName": "dimension",
            "type": "ProfilePredictiveAnalyticsStringCondition.DimensionEnum"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "ProfilePredictiveAnalyticsStringFilter"
        }    ];

    static getAttributeTypeMap() {
        return ProfilePredictiveAnalyticsStringCondition.attributeTypeMap;
    }
}

export namespace ProfilePredictiveAnalyticsStringCondition {
    export enum DimensionEnum {
        PredictedGender = <any> 'predicted_gender'
    }
}