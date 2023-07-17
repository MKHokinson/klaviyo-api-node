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
import {CampaignMessageCreateQueryResourceObjectAttributes} from './CampaignMessageCreateQueryResourceObjectAttributes.js';
import {CampaignMessageEnum} from './CampaignMessageEnum.js';

/**
 * The CampaignMessageCreateQueryResourceObject model module.
 * @module model/CampaignMessageCreateQueryResourceObject
 * @version 2023-07-15
 */
export class CampaignMessageCreateQueryResourceObject {
  /**
   * Constructs a new <code>CampaignMessageCreateQueryResourceObject</code>.
   * @alias module:model/CampaignMessageCreateQueryResourceObject
   * @class
   * @param attributes {module:model/CampaignMessageCreateQueryResourceObjectAttributes} 
   * @param type {module:model/CampaignMessageEnum} 
   */
  constructor(attributes, type) {
    this.attributes = attributes;
    this.type = type;
  }

  /**
   * Constructs a <code>CampaignMessageCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignMessageCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/CampaignMessageCreateQueryResourceObject} The populated <code>CampaignMessageCreateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignMessageCreateQueryResourceObject();
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CampaignMessageCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('type'))
        obj.type = CampaignMessageEnum.constructFromObject(data['type']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CampaignMessageCreateQueryResourceObjectAttributes} attributes
 */
CampaignMessageCreateQueryResourceObject.prototype.attributes = undefined;

/**
 * @member {module:model/CampaignMessageEnum} type
 */
CampaignMessageCreateQueryResourceObject.prototype.type = undefined;

