/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-01-24
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
import {CampaignCreateQueryAsSubResourceAttributes} from './CampaignCreateQueryAsSubResourceAttributes.js';

/**
 * The CampaignCreateQueryAsSubResource model module.
 * @module model/CampaignCreateQueryAsSubResource
 * @version 2023-01-24
 */
export class CampaignCreateQueryAsSubResource {
  /**
   * Constructs a new <code>CampaignCreateQueryAsSubResource</code>.
   * @alias module:model/CampaignCreateQueryAsSubResource
   * @class
   * @param type {module:model/CampaignCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CampaignCreateQueryAsSubResourceAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CampaignCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CampaignCreateQueryAsSubResource} The populated <code>CampaignCreateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignCreateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CampaignCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CampaignCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "campaign"
   * @const
   */
  campaign: "campaign"
};
/**
 * @member {module:model/CampaignCreateQueryAsSubResource.TypeEnum} type
 */
CampaignCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CampaignCreateQueryAsSubResourceAttributes} attributes
 */
CampaignCreateQueryAsSubResource.prototype.attributes = undefined;

