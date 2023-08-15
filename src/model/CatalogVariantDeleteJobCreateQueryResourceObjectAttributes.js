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
import {CatalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants} from './CatalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants.js';

/**
 * The CatalogVariantDeleteJobCreateQueryResourceObjectAttributes model module.
 * @module model/CatalogVariantDeleteJobCreateQueryResourceObjectAttributes
 * @version 2023-08-15
 */
export class CatalogVariantDeleteJobCreateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>CatalogVariantDeleteJobCreateQueryResourceObjectAttributes</code>.
   * @alias module:model/CatalogVariantDeleteJobCreateQueryResourceObjectAttributes
   * @class
   * @param variants {module:model/CatalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants} 
   */
  constructor(variants) {
    this.variants = variants;
  }

  /**
   * Constructs a <code>CatalogVariantDeleteJobCreateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantDeleteJobCreateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogVariantDeleteJobCreateQueryResourceObjectAttributes} The populated <code>CatalogVariantDeleteJobCreateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantDeleteJobCreateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('variants'))
        obj.variants = CatalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants.constructFromObject(data['variants']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants} variants
 */
CatalogVariantDeleteJobCreateQueryResourceObjectAttributes.prototype.variants = undefined;

