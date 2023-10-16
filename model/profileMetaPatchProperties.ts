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
import { ProfileMetaPatchPropertiesUnset } from './profileMetaPatchPropertiesUnset';

export class ProfileMetaPatchProperties {
    /**
    * Append a simple value or values to this property array
    */
    'append'?: object;
    /**
    * Remove a simple value or values from this property array
    */
    'unappend'?: object;
    'unset'?: ProfileMetaPatchPropertiesUnset;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "append",
            "baseName": "append",
            "type": "object"
        },
        {
            "name": "unappend",
            "baseName": "unappend",
            "type": "object"
        },
        {
            "name": "unset",
            "baseName": "unset",
            "type": "ProfileMetaPatchPropertiesUnset"
        }    ];

    static getAttributeTypeMap() {
        return ProfileMetaPatchProperties.attributeTypeMap;
    }
}
