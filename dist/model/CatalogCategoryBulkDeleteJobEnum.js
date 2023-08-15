"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryBulkDeleteJobEnum = void 0;
var _ApiClient = require("../ApiClient.js");
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

/**
 * Enum class CatalogCategoryBulkDeleteJobEnum.
 * @enum {String}
 * @readonly
 */
var CatalogCategoryBulkDeleteJobEnum = {
  /**
   * value: "catalog-category-bulk-delete-job"
   * @const
   */
  catalogCategoryBulkDeleteJob: "catalog-category-bulk-delete-job",
  /**
   * Returns a <code>CatalogCategoryBulkDeleteJobEnum</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/CatalogCategoryBulkDeleteJobEnum} The enum <code>CatalogCategoryBulkDeleteJobEnum</code> value.
   */
  constructFromObject: function constructFromObject(object) {
    return object;
  }
};
exports.CatalogCategoryBulkDeleteJobEnum = CatalogCategoryBulkDeleteJobEnum;