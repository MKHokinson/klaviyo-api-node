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
import {TagGroupEnum} from './TagGroupEnum.js';

/**
 * The TagCreateQueryResourceObjectRelationshipsTaggroupData model module.
 * @module model/TagCreateQueryResourceObjectRelationshipsTaggroupData
 * @version 2023-08-15
 */
export class TagCreateQueryResourceObjectRelationshipsTaggroupData {
  /**
   * Constructs a new <code>TagCreateQueryResourceObjectRelationshipsTaggroupData</code>.
   * @alias module:model/TagCreateQueryResourceObjectRelationshipsTaggroupData
   * @class
   * @param type {module:model/TagGroupEnum} 
   * @param id {String} 
   */
  constructor(type, id) {
    this.type = type;
    this.id = id;
  }

  /**
   * Constructs a <code>TagCreateQueryResourceObjectRelationshipsTaggroupData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagCreateQueryResourceObjectRelationshipsTaggroupData} obj Optional instance to populate.
   * @return {module:model/TagCreateQueryResourceObjectRelationshipsTaggroupData} The populated <code>TagCreateQueryResourceObjectRelationshipsTaggroupData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagCreateQueryResourceObjectRelationshipsTaggroupData();
      if (data.hasOwnProperty('type'))
        obj.type = TagGroupEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/TagGroupEnum} type
 */
TagCreateQueryResourceObjectRelationshipsTaggroupData.prototype.type = undefined;

/**
 * @member {String} id
 */
TagCreateQueryResourceObjectRelationshipsTaggroupData.prototype.id = undefined;
