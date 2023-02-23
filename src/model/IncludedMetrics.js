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
import {IncludedMetricsAttributes} from './IncludedMetricsAttributes.js';
import {IncludedVariantsLinks} from './IncludedVariantsLinks.js';

/**
 * The IncludedMetrics model module.
 * @module model/IncludedMetrics
 * @version 2023-02-22
 */
export class IncludedMetrics {
  /**
   * Constructs a new <code>IncludedMetrics</code>.
   * @alias module:model/IncludedMetrics
   * @class
   * @param type {module:model/IncludedMetrics.TypeEnum} 
   * @param id {String} The Metric ID
   * @param attributes {module:model/IncludedMetricsAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  constructor(type, id, attributes, links) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedMetrics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedMetrics} obj Optional instance to populate.
   * @return {module:model/IncludedMetrics} The populated <code>IncludedMetrics</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncludedMetrics();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = IncludedMetricsAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('links'))
        obj.links = IncludedVariantsLinks.constructFromObject(data['links']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
IncludedMetrics.TypeEnum = {
  /**
   * value: "metric"
   * @const
   */
  metric: "metric"
};
/**
 * @member {module:model/IncludedMetrics.TypeEnum} type
 */
IncludedMetrics.prototype.type = undefined;

/**
 * The Metric ID
 * @member {String} id
 */
IncludedMetrics.prototype.id = undefined;

/**
 * @member {module:model/IncludedMetricsAttributes} attributes
 */
IncludedMetrics.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedMetrics.prototype.links = undefined;

