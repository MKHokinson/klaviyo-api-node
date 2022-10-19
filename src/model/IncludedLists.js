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
import {IncludedListsAttributes} from './IncludedListsAttributes.js';
import {IncludedVariantsLinks} from './IncludedVariantsLinks.js';

/**
 * The IncludedLists model module.
 * @module model/IncludedLists
 * @version 2022-10-17
 */
export class IncludedLists {
  /**
   * Constructs a new <code>IncludedLists</code>.
   * @alias module:model/IncludedLists
   * @class
   * @param type {module:model/IncludedLists.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedListsAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  constructor(type, id, attributes, links) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedLists</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedLists} obj Optional instance to populate.
   * @return {module:model/IncludedLists} The populated <code>IncludedLists</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncludedLists();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = IncludedListsAttributes.constructFromObject(data['attributes']);
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
IncludedLists.TypeEnum = {
  /**
   * value: "list"
   * @const
   */
  list: "list"
};
/**
 * @member {module:model/IncludedLists.TypeEnum} type
 */
IncludedLists.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedLists.prototype.id = undefined;

/**
 * @member {module:model/IncludedListsAttributes} attributes
 */
IncludedLists.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedLists.prototype.links = undefined;

