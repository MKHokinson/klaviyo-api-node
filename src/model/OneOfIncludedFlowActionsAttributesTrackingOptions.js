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

/**
 * The OneOfIncludedFlowActionsAttributesTrackingOptions model module.
 * @module model/OneOfIncludedFlowActionsAttributesTrackingOptions
 * @version 2023-01-24
 */
export class OneOfIncludedFlowActionsAttributesTrackingOptions {
  /**
   * Constructs a new <code>OneOfIncludedFlowActionsAttributesTrackingOptions</code>.
   * @alias module:model/OneOfIncludedFlowActionsAttributesTrackingOptions
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OneOfIncludedFlowActionsAttributesTrackingOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfIncludedFlowActionsAttributesTrackingOptions} obj Optional instance to populate.
   * @return {module:model/OneOfIncludedFlowActionsAttributesTrackingOptions} The populated <code>OneOfIncludedFlowActionsAttributesTrackingOptions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfIncludedFlowActionsAttributesTrackingOptions();
    }
    return obj;
  }
}
