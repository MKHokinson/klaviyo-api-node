/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-02-22
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
import {CampaignSendJobEnum} from './CampaignSendJobEnum.js';
import {CampaignSendJobPartialUpdateQueryResourceObjectAttributes} from './CampaignSendJobPartialUpdateQueryResourceObjectAttributes.js';

/**
 * The CampaignSendJobPartialUpdateQueryResourceObject model module.
 * @module model/CampaignSendJobPartialUpdateQueryResourceObject
 * @version 2023-02-22
 */
export class CampaignSendJobPartialUpdateQueryResourceObject {
  /**
   * Constructs a new <code>CampaignSendJobPartialUpdateQueryResourceObject</code>.
   * @alias module:model/CampaignSendJobPartialUpdateQueryResourceObject
   * @class
   * @param type {module:model/CampaignSendJobEnum} 
   * @param id {String} The ID of the currently sending campaign to cancel or revert
   * @param attributes {module:model/CampaignSendJobPartialUpdateQueryResourceObjectAttributes} 
   */
  constructor(type, id, attributes) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CampaignSendJobPartialUpdateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignSendJobPartialUpdateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/CampaignSendJobPartialUpdateQueryResourceObject} The populated <code>CampaignSendJobPartialUpdateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignSendJobPartialUpdateQueryResourceObject();
      if (data.hasOwnProperty('type'))
        obj.type = CampaignSendJobEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CampaignSendJobPartialUpdateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CampaignSendJobEnum} type
 */
CampaignSendJobPartialUpdateQueryResourceObject.prototype.type = undefined;

/**
 * The ID of the currently sending campaign to cancel or revert
 * @member {String} id
 */
CampaignSendJobPartialUpdateQueryResourceObject.prototype.id = undefined;

/**
 * @member {module:model/CampaignSendJobPartialUpdateQueryResourceObjectAttributes} attributes
 */
CampaignSendJobPartialUpdateQueryResourceObject.prototype.attributes = undefined;

