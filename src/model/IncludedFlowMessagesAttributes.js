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

/**
 * The IncludedFlowMessagesAttributes model module.
 * @module model/IncludedFlowMessagesAttributes
 * @version 2023-02-22
 */
export class IncludedFlowMessagesAttributes {
  /**
   * Constructs a new <code>IncludedFlowMessagesAttributes</code>.
   * @alias module:model/IncludedFlowMessagesAttributes
   * @class
   * @param name {String} 
   * @param channel {String} 
   * @param content {Object} 
   */
  constructor(name, channel, content) {
    this.name = name;
    this.channel = channel;
    this.content = content;
  }

  /**
   * Constructs a <code>IncludedFlowMessagesAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedFlowMessagesAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedFlowMessagesAttributes} The populated <code>IncludedFlowMessagesAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncludedFlowMessagesAttributes();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('channel'))
        obj.channel = ApiClient.convertToType(data['channel'], 'String');
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], Object);
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
IncludedFlowMessagesAttributes.prototype.name = undefined;

/**
 * @member {String} channel
 */
IncludedFlowMessagesAttributes.prototype.channel = undefined;

/**
 * @member {Object} content
 */
IncludedFlowMessagesAttributes.prototype.content = undefined;

/**
 * @member {Date} created
 */
IncludedFlowMessagesAttributes.prototype.created = undefined;

/**
 * @member {Date} updated
 */
IncludedFlowMessagesAttributes.prototype.updated = undefined;

