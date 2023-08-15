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
import { ApiClient } from "../ApiClient.js";
import { backOff } from "exponential-backoff";

/**
* Metrics service.
* @module api/MetricsApi
* @version 2023-08-15
*/
export class MetricsApi {
    apiClient

    /**
    * Constructs a new MetricsApi. 
    * @alias module:api/MetricsApi
    * @class
    * @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Get Metric
     * Get a metric with the given metric ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;metrics:read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id Metric ID
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsMetric For more information please visit https://developers.klaviyo.com/en/v2023-08-15/reference/api-overview#sparse-fieldsets
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getMetric = async (id, opts) => {

        opts = opts || {};
        let postBody = null;
      // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getMetric");
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
            '/api/metrics/{id}/', 'GET',
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
     * Get Metrics
     * Get all metrics in an account.  Requests can be filtered by the following fields: integration &#x60;name&#x60;, integration &#x60;category&#x60;  Returns a maximum of 200 results per page.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;metrics:read&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsMetric For more information please visit https://developers.klaviyo.com/en/v2023-08-15/reference/api-overview#sparse-fieldsets
     * @param {String} opts.filter For more information please visit https://developers.klaviyo.com/en/v2023-08-15/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;integration.name&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;integration.category&#x60;: &#x60;equals&#x60;
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2023-08-15/reference/api-overview#pagination
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getMetrics = async (opts) => {

        opts = opts || {};
        let postBody = null;

        let pathParams = {
          
        };
        let queryParams = {
          'fields[metric]': this.apiClient.buildCollectionParam(opts['fieldsMetric'], 'csv'),'filter': opts['filter'],'page[cursor]': opts['pageCursor']
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
            '/api/metrics/', 'GET',
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
     * Query Metric Aggregates
     * Query and aggregate event data associated with a metric, including native Klaviyo metrics, integration-specific metrics, and custom events. Queries must be passed in the JSON body of your &#x60;POST&#x60; request.  Results can be filtered and grouped by time, event, or profile dimensions.  To learn more about how to use this endpoint, check out our new [Using the Query Metric Aggregates Endpoint guide](https://developers.klaviyo.com/en/docs/using-the-query-metric-aggregates-endpoint).  **Request body parameters** (nested under &#x60;attributes&#x60;):  * &#x60;return_fields&#x60;: request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/reference/api_overview#sparse-fieldsets) * &#x60;sort&#x60;: sort results by a specified field, such as &#x60;\&quot;-timestamp\&quot;&#x60; * &#x60;page_cursor&#x60;: results can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/reference/api_overview#pagination) * &#x60;page_size&#x60;: limit the number of returned results per page * &#x60;by&#x60;: optional attributes used to group by the aggregation function     * When using &#x60;by&#x60; attributes, an empty &#x60;dimensions&#x60; response is expected when the counts for the events do not have the associated dimension requested by the set &#x60;by&#x60; attribute. For example, a query including &#x60;\&quot;by\&quot;: [\&quot;$flow\&quot;]&#x60; will return an empty dimensions response for counts of metrics not associated with a &#x60;$flow&#x60; * &#x60;measurement&#x60;: the measurement key supports the following values:     * &#x60;\&quot;sum_value\&quot;&#x60;: perform a summation of the &#x60;_Event Value_&#x60;, optionally partitioned over any dimension provided in the &#x60;by&#x60; field     * &#x60;\&quot;count\&quot;&#x60;: counts the number of events associated to a metric, optionally partitioned over any dimension provided in the &#x60;by&#x60; field     * &#x60;\&quot;unique\&quot;&#x60; counts the number of unique customers associated to a metric, optionally partitioned over any dimension provided in the &#x60;by&#x60; field * &#x60;interval&#x60;: aggregation interval, such as &#x60;\&quot;hour\&quot;&#x60;,&#x60;\&quot;day\&quot;&#x60;,&#x60;\&quot;week\&quot;&#x60;, and &#x60;\&quot;month\&quot;&#x60; * &#x60;metric_id&#x60;: the metric ID used in the aggregation * &#x60;filter&#x60;: list of filters for specific fields, must include time range using ISO 8601 format (&#x60;\&quot;YYYY-MM-DDTHH:MM:SS.mmmmmm\&quot;&#x60;)     * The time range can be filtered by providing a &#x60;greater-or-equal&#x60; filter on the datetime field, such as &#x60;\&quot;greater-or-equal(datetime,2021-07-01T00:00:00)\&quot;&#x60; and a &#x60;less-than&#x60; filter on the same datetime field, such as &#x60;\&quot;less-than(datetime,2022-07-01T00:00:00)\&quot;&#x60;     * The time range may span a maximum of one year. Time range dates may be set to a maximum of 5 years prior to the current date     * Filter the list of supported aggregate dimensions using the common filter syntax, such as &#x60;\&quot;equals(URL,\\\&quot;https://www.klaviyo.com/\\\&quot;)\&quot;&#x60; * &#x60;timezone&#x60;: the timezone used when processing the query. Case sensitive. This field is validated against a list of common timezones from the [IANA Time Zone Database](https://www.iana.org/time-zones)     * While the payload accepts a timezone, the response datetimes returned will be in UTC.  For a comprehensive list of native Klaviyo metrics and their associated attributes for grouping and filtering, please refer to the [metrics attributes guide](https://developers.klaviyo.com/en/docs/supported_metrics_and_attributes).&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;metrics:read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body Retrieve Metric Aggregations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    queryMetricAggregates = async (body) => {

        
        let postBody = body;
      // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error("Missing the required parameter 'body' when calling queryMetricAggregates");
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
            '/api/metric-aggregates/', 'POST',
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