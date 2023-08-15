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

/**
 * The EmailContentSubObject model module.
 * @module model/EmailContentSubObject
 * @version 2023-08-15
 */
export class EmailContentSubObject {
  /**
   * Constructs a new <code>EmailContentSubObject</code>.
   * @alias module:model/EmailContentSubObject
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EmailContentSubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailContentSubObject} obj Optional instance to populate.
   * @return {module:model/EmailContentSubObject} The populated <code>EmailContentSubObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmailContentSubObject();
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('preview_text'))
        obj.previewText = ApiClient.convertToType(data['preview_text'], 'String');
      if (data.hasOwnProperty('from_email'))
        obj.fromEmail = ApiClient.convertToType(data['from_email'], 'String');
      if (data.hasOwnProperty('from_label'))
        obj.fromLabel = ApiClient.convertToType(data['from_label'], 'String');
      if (data.hasOwnProperty('reply_to_email'))
        obj.replyToEmail = ApiClient.convertToType(data['reply_to_email'], 'String');
      if (data.hasOwnProperty('cc_email'))
        obj.ccEmail = ApiClient.convertToType(data['cc_email'], 'String');
      if (data.hasOwnProperty('bcc_email'))
        obj.bccEmail = ApiClient.convertToType(data['bcc_email'], 'String');
    }
    return obj;
  }
}

/**
 * The subject of the message
 * @member {String} subject
 */
EmailContentSubObject.prototype.subject = undefined;

/**
 * Preview text associated with the message
 * @member {String} previewText
 */
EmailContentSubObject.prototype.previewText = undefined;

/**
 * The email the message should be sent from
 * @member {String} fromEmail
 */
EmailContentSubObject.prototype.fromEmail = undefined;

/**
 * The label associated with the from_email
 * @member {String} fromLabel
 */
EmailContentSubObject.prototype.fromLabel = undefined;

/**
 * Optional Reply-To email address
 * @member {String} replyToEmail
 */
EmailContentSubObject.prototype.replyToEmail = undefined;

/**
 * Optional CC email address
 * @member {String} ccEmail
 */
EmailContentSubObject.prototype.ccEmail = undefined;

/**
 * Optional BCC email address
 * @member {String} bccEmail
 */
EmailContentSubObject.prototype.bccEmail = undefined;

// Implement OneOfCampaignMessageCreateQueryResourceObjectAttributesContent interface:
// Implement OneOfCampaignMessagePartialUpdateQueryResourceObjectAttributesContent interface: