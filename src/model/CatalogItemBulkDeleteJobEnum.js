/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-06-15
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
 * Enum class CatalogItemBulkDeleteJobEnum.
 * @enum {String}
 * @readonly
 */
const CatalogItemBulkDeleteJobEnum = {
  /**
   * value: "catalog-item-bulk-delete-job"
   * @const
   */
  catalogItemBulkDeleteJob: "catalog-item-bulk-delete-job",

  /**
   * Returns a <code>CatalogItemBulkDeleteJobEnum</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/CatalogItemBulkDeleteJobEnum} The enum <code>CatalogItemBulkDeleteJobEnum</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {CatalogItemBulkDeleteJobEnum};