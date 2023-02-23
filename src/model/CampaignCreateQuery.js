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
import {CampaignCreateQueryAsSubResource} from './CampaignCreateQueryAsSubResource.js';

/**
 * The CampaignCreateQuery model module.
 * @module model/CampaignCreateQuery
 * @version 2023-02-22
 */
export class CampaignCreateQuery {
  /**
   * Constructs a new <code>CampaignCreateQuery</code>.
   * @alias module:model/CampaignCreateQuery
   * @class
   * @param data {module:model/CampaignCreateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CampaignCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCreateQuery} obj Optional instance to populate.
   * @return {module:model/CampaignCreateQuery} The populated <code>CampaignCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = CampaignCreateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CampaignCreateQueryAsSubResource} data
 */
CampaignCreateQuery.prototype.data = undefined;

