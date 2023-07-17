/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-07-15
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
import { ApiClient } from "../ApiClient.js";
import { backOff } from "exponential-backoff";

/**
* Segments service.
* @module api/SegmentsApi
* @version 2023-07-15
*/
export class SegmentsApi {
    apiClient

    /**
    * Constructs a new SegmentsApi. 
    * @alias module:api/SegmentsApi
    * @class
    * @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Get Segment
     * Get a segment with the given segment ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;&lt;br&gt;&lt;br&gt;Rate limits when using the &#x60;additional-fields[segment]&#x3D;profile_count&#x60; parameter in your API request:&lt;br&gt;Burst: &#x60;1/s&#x60;&lt;br&gt;Steady: &#x60;15/m&#x60;&lt;br&gt;&lt;br&gt;To learn more about how the &#x60;additional-fields&#x60; parameter impacts rate limits, check out our [Rate limits, status codes, and errors](https://developers.klaviyo.com/en/v2023-07-15/docs/rate_limits_and_error_handling) guide.  **Scopes:** &#x60;segments:read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.additionalFieldsSegment Request additional fields not included by default in the response. Supported values: &#x27;profile_count&#x27;
     * @param {Array.<module:model/String>} opts.fieldsSegment For more information please visit https://developers.klaviyo.com/en/v2023-07-15/reference/api-overview#sparse-fieldsets
     * @param {Array.<module:model/String>} opts.fieldsTag For more information please visit https://developers.klaviyo.com/en/v2023-07-15/reference/api-overview#sparse-fieldsets
     * @param {Array.<module:model/String>} opts.include For more information please visit https://developers.klaviyo.com/en/v2023-07-15/reference/api-overview#relationships
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getSegment = async (id, opts) => {

        opts = opts || {};
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getSegment");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          'additional-fields[segment]': this.apiClient.buildCollectionParam(opts['additionalFieldsSegment'], 'csv'),'fields[segment]': this.apiClient.buildCollectionParam(opts['fieldsSegment'], 'csv'),'fields[tag]': this.apiClient.buildCollectionParam(opts['fieldsTag'], 'csv'),'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/segments/{id}/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Get Segment Profiles
     * Get all profiles within the given segment ID. Filter to request a subset of all profiles. Profiles can be filtered by &#x60;email&#x60;, &#x60;phone_number&#x60;, and &#x60;push_token&#x60; fields.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;profiles:read&#x60; &#x60;segments:read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.additionalFieldsProfile Request additional fields not included by default in the response. Supported values: &#x27;predictive_analytics&#x27;
     * @param {Array.<module:model/String>} opts.fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2023-07-15/reference/api-overview#sparse-fieldsets
     * @param {String} opts.filter For more information please visit https://developers.klaviyo.com/en/v2023-07-15/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;email&#x60;: &#x60;any&#x60;&lt;br&gt;&#x60;phone_number&#x60;: &#x60;any&#x60;&lt;br&gt;&#x60;push_token&#x60;: &#x60;any&#x60;&lt;br&gt;&#x60;_kx&#x60;: &#x60;equals&#x60;
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2023-07-15/reference/api-overview#pagination
     * @param {Number} opts.pageSize Default: 20. Min: 1. Max: 100. (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getSegmentProfiles = async (id, opts) => {

        opts = opts || {};
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getSegmentProfiles");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          'additional-fields[profile]': this.apiClient.buildCollectionParam(opts['additionalFieldsProfile'], 'csv'),'fields[profile]': this.apiClient.buildCollectionParam(opts['fieldsProfile'], 'csv'),'filter': opts['filter'],'page[cursor]': opts['pageCursor'],'page[size]': opts['pageSize']
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/segments/{id}/profiles/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Get Segment Relationships Profiles
     * Get all profile membership [relationships](https://developers.klaviyo.com/en/reference/api_overview#relationships) for the given segment ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;profiles:read&#x60; &#x60;segments:read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2023-07-15/reference/api-overview#pagination
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getSegmentRelationshipsProfiles = async (id, opts) => {

        opts = opts || {};
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getSegmentRelationshipsProfiles");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          'page[cursor]': opts['pageCursor']
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/segments/{id}/relationships/profiles/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Get Segment Relationships Tags
     * If &#x60;related_resource&#x60; is &#x60;tags&#x60;, returns the tag IDs of all tags associated with the given segment ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;segments:read&#x60; &#x60;tags:read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getSegmentRelationshipsTags = async (id) => {

        
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getSegmentRelationshipsTags");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/segments/{id}/relationships/tags/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Get Segment Tags
     * Return all tags associated with the given segment ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;segments:read&#x60; &#x60;tags:read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsTag For more information please visit https://developers.klaviyo.com/en/v2023-07-15/reference/api-overview#sparse-fieldsets
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getSegmentTags = async (id, opts) => {

        opts = opts || {};
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getSegmentTags");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          'fields[tag]': this.apiClient.buildCollectionParam(opts['fieldsTag'], 'csv')
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/segments/{id}/tags/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Get Segments
     * Get all segments in an account. Filter to request a subset of all segments. Segments can be filtered by &#x60;name&#x60;, &#x60;created&#x60;, and &#x60;updated&#x60; fields. Returns a maximum of 10 results per page.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;segments:read&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsSegment For more information please visit https://developers.klaviyo.com/en/v2023-07-15/reference/api-overview#sparse-fieldsets
     * @param {Array.<module:model/String>} opts.fieldsTag For more information please visit https://developers.klaviyo.com/en/v2023-07-15/reference/api-overview#sparse-fieldsets
     * @param {String} opts.filter For more information please visit https://developers.klaviyo.com/en/v2023-07-15/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;name&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;id&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;created&#x60;: &#x60;greater-than&#x60;&lt;br&gt;&#x60;updated&#x60;: &#x60;greater-than&#x60;
     * @param {Array.<module:model/String>} opts.include For more information please visit https://developers.klaviyo.com/en/v2023-07-15/reference/api-overview#relationships
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2023-07-15/reference/api-overview#pagination
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getSegments = async (opts) => {

        opts = opts || {};
        let postBody = null;

        let pathParams = {
          
        };
        let queryParams = {
          'fields[segment]': this.apiClient.buildCollectionParam(opts['fieldsSegment'], 'csv'),'fields[tag]': this.apiClient.buildCollectionParam(opts['fieldsTag'], 'csv'),'filter': opts['filter'],'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),'page[cursor]': opts['pageCursor']
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/segments/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

    /**
     * Update Segment
     * Update the name of a segment with the given segment ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;segments:write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateSegment = async (body, id) => {

        
        let postBody = body;
      // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling updateSegment");
        }
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling updateSegment");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          
        };
        let headerParams = {
          
        };
        let formParams = {
          
        };

        let authNames = ['Klaviyo-API-Key'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Object;

        return backOff(() => {
          return this.apiClient.callApi(
            '/api/segments/{id}/', 'PATCH',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
          ).then(function(response_and_data) {
            return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
            };
          });
        }, {
          jitter: "full",
          numOfAttempts: this.apiClient.RETRY_MAX_ATTEMPTS,
          timeMultiple: this.apiClient.TIME_MULTIPLE,
          startingDelay: this.apiClient.STARTING_DELAY,
          retry: res => {
            return this.apiClient.RETRY_CODES.includes(res.status)
          }
        });
    }

}