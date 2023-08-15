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
import {ProfileLocation} from './ProfileLocation.js';

/**
 * The ProfileCreateQueryResourceObjectAttributes model module.
 * @module model/ProfileCreateQueryResourceObjectAttributes
 * @version 2023-08-15
 */
export class ProfileCreateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>ProfileCreateQueryResourceObjectAttributes</code>.
   * @alias module:model/ProfileCreateQueryResourceObjectAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProfileCreateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileCreateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/ProfileCreateQueryResourceObjectAttributes} The populated <code>ProfileCreateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProfileCreateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('phone_number'))
        obj.phoneNumber = ApiClient.convertToType(data['phone_number'], 'String');
      if (data.hasOwnProperty('external_id'))
        obj.externalId = ApiClient.convertToType(data['external_id'], 'String');
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('last_name'))
        obj.lastName = ApiClient.convertToType(data['last_name'], 'String');
      if (data.hasOwnProperty('organization'))
        obj.organization = ApiClient.convertToType(data['organization'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('image'))
        obj.image = ApiClient.convertToType(data['image'], 'String');
      if (data.hasOwnProperty('location'))
        obj.location = ProfileLocation.constructFromObject(data['location']);
      if (data.hasOwnProperty('properties'))
        obj.properties = ApiClient.convertToType(data['properties'], Object);
    }
    return obj;
  }
}

/**
 * Individual's email address
 * @member {String} email
 */
ProfileCreateQueryResourceObjectAttributes.prototype.email = undefined;

/**
 * Individual's phone number in E.164 format
 * @member {String} phoneNumber
 */
ProfileCreateQueryResourceObjectAttributes.prototype.phoneNumber = undefined;

/**
 * A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
 * @member {String} externalId
 */
ProfileCreateQueryResourceObjectAttributes.prototype.externalId = undefined;

/**
 * Individual's first name
 * @member {String} firstName
 */
ProfileCreateQueryResourceObjectAttributes.prototype.firstName = undefined;

/**
 * Individual's last name
 * @member {String} lastName
 */
ProfileCreateQueryResourceObjectAttributes.prototype.lastName = undefined;

/**
 * Name of the company or organization within the company for whom the individual works
 * @member {String} organization
 */
ProfileCreateQueryResourceObjectAttributes.prototype.organization = undefined;

/**
 * Individual's job title
 * @member {String} title
 */
ProfileCreateQueryResourceObjectAttributes.prototype.title = undefined;

/**
 * URL pointing to the location of a profile image
 * @member {String} image
 */
ProfileCreateQueryResourceObjectAttributes.prototype.image = undefined;

/**
 * @member {module:model/ProfileLocation} location
 */
ProfileCreateQueryResourceObjectAttributes.prototype.location = undefined;

/**
 * An object containing key/value pairs for any custom properties assigned to this profile
 * @member {Object} properties
 */
ProfileCreateQueryResourceObjectAttributes.prototype.properties = undefined;

