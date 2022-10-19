/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2022-10-17
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
 * The EmailMessageContent model module.
 * @module model/EmailMessageContent
 * @version 2022-10-17
 */
export class EmailMessageContent {
  /**
   * Constructs a new <code>EmailMessageContent</code>.
   * @alias module:model/EmailMessageContent
   * @class
   * @param subject {String} 
   * @param previewText {String} 
   * @param fromEmail {String} 
   * @param fromName {String} 
   */
  constructor(subject, previewText, fromEmail, fromName) {
    this.subject = subject;
    this.previewText = previewText;
    this.fromEmail = fromEmail;
    this.fromName = fromName;
  }

  /**
   * Constructs a <code>EmailMessageContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailMessageContent} obj Optional instance to populate.
   * @return {module:model/EmailMessageContent} The populated <code>EmailMessageContent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmailMessageContent();
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('preview_text'))
        obj.previewText = ApiClient.convertToType(data['preview_text'], 'String');
      if (data.hasOwnProperty('from_email'))
        obj.fromEmail = ApiClient.convertToType(data['from_email'], 'String');
      if (data.hasOwnProperty('from_name'))
        obj.fromName = ApiClient.convertToType(data['from_name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} subject
 */
EmailMessageContent.prototype.subject = undefined;

/**
 * @member {String} previewText
 */
EmailMessageContent.prototype.previewText = undefined;

/**
 * @member {String} fromEmail
 */
EmailMessageContent.prototype.fromEmail = undefined;

/**
 * @member {String} fromName
 */
EmailMessageContent.prototype.fromName = undefined;

// Implement OneOfIncludedFlowMessagesAttributesContent interface:
