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
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';
import {CampaignMessagePartialUpdateQueryAsSubResourceAttributes} from './CampaignMessagePartialUpdateQueryAsSubResourceAttributes.js';

/**
 * The CampaignMessagePartialUpdateQueryAsSubResource model module.
 * @module model/CampaignMessagePartialUpdateQueryAsSubResource
 * @version 2023-02-22
 */
export class CampaignMessagePartialUpdateQueryAsSubResource {
  /**
   * Constructs a new <code>CampaignMessagePartialUpdateQueryAsSubResource</code>.
   * @alias module:model/CampaignMessagePartialUpdateQueryAsSubResource
   * @class
   * @param type {module:model/CampaignMessagePartialUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} The message ID to be retrieved
   * @param attributes {module:model/CampaignMessagePartialUpdateQueryAsSubResourceAttributes} 
   */
  constructor(type, id, attributes) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CampaignMessagePartialUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignMessagePartialUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CampaignMessagePartialUpdateQueryAsSubResource} The populated <code>CampaignMessagePartialUpdateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignMessagePartialUpdateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CampaignMessagePartialUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CampaignMessagePartialUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "campaign-message"
   * @const
   */
  campaignMessage: "campaign-message"
};
/**
 * @member {module:model/CampaignMessagePartialUpdateQueryAsSubResource.TypeEnum} type
 */
CampaignMessagePartialUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * The message ID to be retrieved
 * @member {String} id
 */
CampaignMessagePartialUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/CampaignMessagePartialUpdateQueryAsSubResourceAttributes} attributes
 */
CampaignMessagePartialUpdateQueryAsSubResource.prototype.attributes = undefined;

