/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-07-15
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';
import {OnsiteProfileCreateQueryResourceObjectAttributes} from './OnsiteProfileCreateQueryResourceObjectAttributes.js';
import {OnsiteProfileMeta} from './OnsiteProfileMeta.js';
import {ProfileEnum} from './ProfileEnum.js';

/**
 * The OnsiteProfileCreateQueryResourceObject model module.
 * @module model/OnsiteProfileCreateQueryResourceObject
 * @version 2023-07-15
 */
export class OnsiteProfileCreateQueryResourceObject {
  /**
   * Constructs a new <code>OnsiteProfileCreateQueryResourceObject</code>.
   * @alias module:model/OnsiteProfileCreateQueryResourceObject
   * @class
   * @param attributes {module:model/OnsiteProfileCreateQueryResourceObjectAttributes} 
   * @param type {module:model/ProfileEnum} 
   */
  constructor(attributes, type) {
    this.attributes = attributes;
    this.type = type;
  }

  /**
   * Constructs a <code>OnsiteProfileCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnsiteProfileCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/OnsiteProfileCreateQueryResourceObject} The populated <code>OnsiteProfileCreateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnsiteProfileCreateQueryResourceObject();
      if (data.hasOwnProperty('attributes'))
        obj.attributes = OnsiteProfileCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('meta'))
        obj.meta = OnsiteProfileMeta.constructFromObject(data['meta']);
      if (data.hasOwnProperty('type'))
        obj.type = ProfileEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/OnsiteProfileCreateQueryResourceObjectAttributes} attributes
 */
OnsiteProfileCreateQueryResourceObject.prototype.attributes = undefined;

/**
 * @member {module:model/OnsiteProfileMeta} meta
 */
OnsiteProfileCreateQueryResourceObject.prototype.meta = undefined;

/**
 * @member {module:model/ProfileEnum} type
 */
OnsiteProfileCreateQueryResourceObject.prototype.type = undefined;

/**
 * Primary key that uniquely identifies this profile. Generated by Klaviyo.
 * @member {String} id
 */
OnsiteProfileCreateQueryResourceObject.prototype.id = undefined;

