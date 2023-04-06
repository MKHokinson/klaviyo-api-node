/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-02-22
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
* Events service.
* @module api/EventsApi
* @version 2023-02-22
*/
export class EventsApi {
    apiClient

    /**
    * Constructs a new EventsApi. 
    * @alias module:api/EventsApi
    * @class
    * @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Create Event
     * Create an event. Events are created asynchronously. Successful response indicates that the event was validated and submitted for processing, but does not guarantee that processing is complete.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;350/s&#x60;&lt;br&gt;Steady: &#x60;3500/m&#x60;  **Scopes:** &#x60;Events Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body Event to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createEvent = async (body) => {

        
        let postBody = body;
      // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling createEvent");
        }

        let pathParams = {
          
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
            '/api/events/', 'POST',
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
     * Get Event
     * Get an event with the given event ID. Include parameters can be provided to get the following related resource data: &#x60;metrics&#x60;, &#x60;profiles&#x60;&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Events Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id ID of the event
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsEvent For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
     * @param {Array.<module:model/String>} opts.fieldsMetric For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
     * @param {Array.<module:model/String>} opts.fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
     * @param {Array.<module:model/String>} opts.include For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#relationships
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getEvent = async (id, opts) => {

        opts = opts || {};
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getEvent");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          'fields[event]': this.apiClient.buildCollectionParam(opts['fieldsEvent'], 'csv'),'fields[metric]': this.apiClient.buildCollectionParam(opts['fieldsMetric'], 'csv'),'fields[profile]': this.apiClient.buildCollectionParam(opts['fieldsProfile'], 'csv'),'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
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
            '/api/events/{id}/', 'GET',
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
     * Get Event Metrics
     * Get the metric for an event with the given event ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;350/s&#x60;&lt;br&gt;Steady: &#x60;3500/m&#x60;  **Scopes:** &#x60;Events Read&#x60; &#x60;Metrics Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id ID of the event
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsMetric For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getEventMetrics = async (id, opts) => {

        opts = opts || {};
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getEventMetrics");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          'fields[metric]': this.apiClient.buildCollectionParam(opts['fieldsMetric'], 'csv')
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
            '/api/events/{id}/metrics/', 'GET',
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
     * Get Event Profiles
     * Get the profile associated with an event with the given event ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;350/s&#x60;&lt;br&gt;Steady: &#x60;3500/m&#x60;  **Scopes:** &#x60;Events Read&#x60; &#x60;Profiles Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id ID of the event
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.additionalFieldsProfile Request additional fields not included by default in the response. Supported values: &#x27;predictive_analytics&#x27;
     * @param {Array.<module:model/String>} opts.fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getEventProfiles = async (id, opts) => {

        opts = opts || {};
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getEventProfiles");
        }

        let pathParams = {
          'id': id
        };
        let queryParams = {
          'additional-fields[profile]': this.apiClient.buildCollectionParam(opts['additionalFieldsProfile'], 'csv'),'fields[profile]': this.apiClient.buildCollectionParam(opts['fieldsProfile'], 'csv')
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
            '/api/events/{id}/profiles/', 'GET',
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
     * Get Event Relationships Metrics
     * Get a list of related Metrics for an Event&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;350/s&#x60;&lt;br&gt;Steady: &#x60;3500/m&#x60;  **Scopes:** &#x60;Events Read&#x60; &#x60;Metrics Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getEventRelationshipsMetrics = async (id) => {

        
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getEventRelationshipsMetrics");
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
            '/api/events/{id}/relationships/metrics/', 'GET',
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
     * Get Event Relationships Profiles
     * Get profile [relationships](https://developers.klaviyo.com/en/reference/api_overview#relationships) for an event with the given event ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;350/s&#x60;&lt;br&gt;Steady: &#x60;3500/m&#x60;  **Scopes:** &#x60;Events Read&#x60; &#x60;Profiles Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getEventRelationshipsProfiles = async (id) => {

        
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getEventRelationshipsProfiles");
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
            '/api/events/{id}/relationships/profiles/', 'GET',
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
     * Get Events
     * Get all events in an account Requests can be sorted by the following fields: &#x60;datetime&#x60;, &#x60;timestamp&#x60; Include parameters can be provided to get the following related resource data: &#x60;metrics&#x60;, &#x60;profiles&#x60; Returns a maximum of 200 events per page.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;350/s&#x60;&lt;br&gt;Steady: &#x60;3500/m&#x60;  **Scopes:** &#x60;Events Read&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsEvent For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
     * @param {Array.<module:model/String>} opts.fieldsMetric For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
     * @param {Array.<module:model/String>} opts.fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
     * @param {String} opts.filter For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;metric_id&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;profile_id&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;datetime&#x60;: &#x60;greater-or-equal&#x60;, &#x60;greater-than&#x60;, &#x60;less-or-equal&#x60;, &#x60;less-than&#x60;&lt;br&gt;&#x60;timestamp&#x60;: &#x60;greater-or-equal&#x60;, &#x60;greater-than&#x60;, &#x60;less-or-equal&#x60;, &#x60;less-than&#x60;
     * @param {Array.<module:model/String>} opts.include For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#relationships
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#pagination
     * @param {module:model/String} opts.sort For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sorting
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getEvents = async (opts) => {

        opts = opts || {};
        let postBody = null;

        let pathParams = {
          
        };
        let queryParams = {
          'fields[event]': this.apiClient.buildCollectionParam(opts['fieldsEvent'], 'csv'),'fields[metric]': this.apiClient.buildCollectionParam(opts['fieldsMetric'], 'csv'),'fields[profile]': this.apiClient.buildCollectionParam(opts['fieldsProfile'], 'csv'),'filter': opts['filter'],'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),'page[cursor]': opts['pageCursor'],'sort': opts['sort']
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
            '/api/events/', 'GET',
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