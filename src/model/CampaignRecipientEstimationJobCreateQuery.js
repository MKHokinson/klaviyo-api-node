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
import {CampaignRecipientEstimationJobCreateQueryResourceObject} from './CampaignRecipientEstimationJobCreateQueryResourceObject.js';

/**
 * The CampaignRecipientEstimationJobCreateQuery model module.
 * @module model/CampaignRecipientEstimationJobCreateQuery
 * @version 2023-06-15
 */
export class CampaignRecipientEstimationJobCreateQuery {
  /**
   * Constructs a new <code>CampaignRecipientEstimationJobCreateQuery</code>.
   * @alias module:model/CampaignRecipientEstimationJobCreateQuery
   * @class
   * @param data {module:model/CampaignRecipientEstimationJobCreateQueryResourceObject} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CampaignRecipientEstimationJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignRecipientEstimationJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CampaignRecipientEstimationJobCreateQuery} The populated <code>CampaignRecipientEstimationJobCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignRecipientEstimationJobCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = CampaignRecipientEstimationJobCreateQueryResourceObject.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CampaignRecipientEstimationJobCreateQueryResourceObject} data
 */
CampaignRecipientEstimationJobCreateQuery.prototype.data = undefined;

