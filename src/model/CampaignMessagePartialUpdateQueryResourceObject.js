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
import {CampaignMessageEnum} from './CampaignMessageEnum.js';
import {CampaignMessagePartialUpdateQueryResourceObjectAttributes} from './CampaignMessagePartialUpdateQueryResourceObjectAttributes.js';

/**
 * The CampaignMessagePartialUpdateQueryResourceObject model module.
 * @module model/CampaignMessagePartialUpdateQueryResourceObject
 * @version 2023-07-15
 */
export class CampaignMessagePartialUpdateQueryResourceObject {
  /**
   * Constructs a new <code>CampaignMessagePartialUpdateQueryResourceObject</code>.
   * @alias module:model/CampaignMessagePartialUpdateQueryResourceObject
   * @class
   * @param attributes {module:model/CampaignMessagePartialUpdateQueryResourceObjectAttributes} 
   * @param type {module:model/CampaignMessageEnum} 
   * @param id {String} The message ID to be retrieved
   */
  constructor(attributes, type, id) {
    this.attributes = attributes;
    this.type = type;
    this.id = id;
  }

  /**
   * Constructs a <code>CampaignMessagePartialUpdateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignMessagePartialUpdateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/CampaignMessagePartialUpdateQueryResourceObject} The populated <code>CampaignMessagePartialUpdateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignMessagePartialUpdateQueryResourceObject();
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CampaignMessagePartialUpdateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('type'))
        obj.type = CampaignMessageEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/CampaignMessagePartialUpdateQueryResourceObjectAttributes} attributes
 */
CampaignMessagePartialUpdateQueryResourceObject.prototype.attributes = undefined;

/**
 * @member {module:model/CampaignMessageEnum} type
 */
CampaignMessagePartialUpdateQueryResourceObject.prototype.type = undefined;

/**
 * The message ID to be retrieved
 * @member {String} id
 */
CampaignMessagePartialUpdateQueryResourceObject.prototype.id = undefined;

