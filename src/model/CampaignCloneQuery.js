/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-08-15
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
import {CampaignCloneQueryResourceObject} from './CampaignCloneQueryResourceObject.js';

/**
 * The CampaignCloneQuery model module.
 * @module model/CampaignCloneQuery
 * @version 2023-08-15
 */
export class CampaignCloneQuery {
  /**
   * Constructs a new <code>CampaignCloneQuery</code>.
   * @alias module:model/CampaignCloneQuery
   * @class
   * @param data {module:model/CampaignCloneQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CampaignCloneQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCloneQuery} obj Optional instance to populate.
   * @return {module:model/CampaignCloneQuery} The populated <code>CampaignCloneQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignCloneQuery();
      if (data.hasOwnProperty('data'))
        obj.data = CampaignCloneQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CampaignCloneQueryResourceObject} data
 */
CampaignCloneQuery.prototype.data = undefined;

