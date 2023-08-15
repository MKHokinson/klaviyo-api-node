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
 * The TagGroupCreateQueryResourceObjectAttributes model module.
 * @module model/TagGroupCreateQueryResourceObjectAttributes
 * @version 2023-08-15
 */
export class TagGroupCreateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>TagGroupCreateQueryResourceObjectAttributes</code>.
   * @alias module:model/TagGroupCreateQueryResourceObjectAttributes
   * @class
   * @param name {String} The Tag Group name
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>TagGroupCreateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagGroupCreateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/TagGroupCreateQueryResourceObjectAttributes} The populated <code>TagGroupCreateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagGroupCreateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('exclusive'))
        obj.exclusive = ApiClient.convertToType(data['exclusive'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The Tag Group name
 * @member {String} name
 */
TagGroupCreateQueryResourceObjectAttributes.prototype.name = undefined;

/**
 * @member {Boolean} exclusive
 */
TagGroupCreateQueryResourceObjectAttributes.prototype.exclusive = undefined;

