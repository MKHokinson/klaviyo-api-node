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
 * The TemplateUpdateQueryResourceObjectAttributes model module.
 * @module model/TemplateUpdateQueryResourceObjectAttributes
 * @version 2023-08-15
 */
export class TemplateUpdateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>TemplateUpdateQueryResourceObjectAttributes</code>.
   * @alias module:model/TemplateUpdateQueryResourceObjectAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TemplateUpdateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateUpdateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/TemplateUpdateQueryResourceObjectAttributes} The populated <code>TemplateUpdateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateUpdateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('html'))
        obj.html = ApiClient.convertToType(data['html'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the template
 * @member {String} name
 */
TemplateUpdateQueryResourceObjectAttributes.prototype.name = undefined;

/**
 * The HTML of the template
 * @member {String} html
 */
TemplateUpdateQueryResourceObjectAttributes.prototype.html = undefined;

/**
 * The plaintext of the template
 * @member {String} text
 */
TemplateUpdateQueryResourceObjectAttributes.prototype.text = undefined;

