/**
 * GetCandy
 * The GetCandy API
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@getcandy.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import SavedSearchCollection from '../model/SavedSearchCollection';
import Search from '../model/Search';

/**
* Search service.
* @module api/SearchApi
* @version 0.9.0
*/
export default class SearchApi {

    /**
    * Constructs a new SearchApi. 
    * @alias module:api/SearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete saved search
     * Delete a saved search entry by ID.
     * @param {String} savedSearchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteSavedSearchesSavedSearchIdWithHttpInfo(savedSearchId) {
      let postBody = null;
      // verify the required parameter 'savedSearchId' is set
      if (savedSearchId === undefined || savedSearchId === null) {
        throw new Error("Missing the required parameter 'savedSearchId' when calling deleteSavedSearchesSavedSearchId");
      }

      let pathParams = {
        'savedSearchId': savedSearchId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/saved-searches/{savedSearchId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete saved search
     * Delete a saved search entry by ID.
     * @param {String} savedSearchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteSavedSearchesSavedSearchId(savedSearchId) {
      return this.deleteSavedSearchesSavedSearchIdWithHttpInfo(savedSearchId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get saved searches
     * Returns a list of current saved searches for products
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SavedSearchCollection} and HTTP response
     */
    getSavedSearchesWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SavedSearchCollection;
      return this.apiClient.callApi(
        '/saved-searches/product', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get saved searches
     * Returns a list of current saved searches for products
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SavedSearchCollection}
     */
    getSavedSearches() {
      return this.getSavedSearchesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search GetCandy
     * Search across products or categories
     * @param {Object} opts Optional parameters
     * @param {String} opts.channel 
     * @param {String} opts.category 
     * @param {Number} opts.page 
     * @param {module:model/String} opts.searchType  (default to 'product')
     * @param {String} opts.keywords 
     * @param {Boolean} opts.rank Whether to rank results based on config
     * @param {String} opts.idsOnly Will only return result ID's, good for performance (default to 'false')
     * @param {String} opts.include 
     * @param {String} opts.sort 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Search} and HTTP response
     */
    getSearchWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'channel': opts['channel'],
        'category': opts['category'],
        'page': opts['page'],
        'search_type': opts['searchType'],
        'keywords': opts['keywords'],
        'rank': opts['rank'],
        'ids_only': opts['idsOnly'],
        'include': opts['include'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Search;
      return this.apiClient.callApi(
        '/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search GetCandy
     * Search across products or categories
     * @param {Object} opts Optional parameters
     * @param {String} opts.channel 
     * @param {String} opts.category 
     * @param {Number} opts.page 
     * @param {module:model/String} opts.searchType  (default to 'product')
     * @param {String} opts.keywords 
     * @param {Boolean} opts.rank Whether to rank results based on config
     * @param {String} opts.idsOnly Will only return result ID's, good for performance (default to 'false')
     * @param {String} opts.include 
     * @param {String} opts.sort 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Search}
     */
    getSearch(opts) {
      return this.getSearchWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
