/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-06-15
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
import {CampaignPartialUpdateQueryResourceObject} from './CampaignPartialUpdateQueryResourceObject.js';

/**
 * The CampaignPartialUpdateQuery model module.
 * @module model/CampaignPartialUpdateQuery
 * @version 2023-06-15
 */
export class CampaignPartialUpdateQuery {
  /**
   * Constructs a new <code>CampaignPartialUpdateQuery</code>.
   * @alias module:model/CampaignPartialUpdateQuery
   * @class
   * @param data {module:model/CampaignPartialUpdateQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CampaignPartialUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignPartialUpdateQuery} obj Optional instance to populate.
   * @return {module:model/CampaignPartialUpdateQuery} The populated <code>CampaignPartialUpdateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignPartialUpdateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = CampaignPartialUpdateQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CampaignPartialUpdateQueryResourceObject} data
 */
CampaignPartialUpdateQuery.prototype.data = undefined;

