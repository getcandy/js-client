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
import InlineObject37 from '../model/InlineObject37';
import InlineObject38 from '../model/InlineObject38';
import InlineResponse42215 from '../model/InlineResponse42215';
import TaxCollection from '../model/TaxCollection';
import TaxResponse from '../model/TaxResponse';
import Unauthenticated from '../model/Unauthenticated';

/**
* Taxes service.
* @module api/TaxesApi
* @version 0.9.0
*/
export default class TaxesApi {

    /**
    * Constructs a new TaxesApi. 
    * @alias module:api/TaxesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete tax record
     * Delete a tax record by it's ID.
     * @param {String} taxId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTaxesTaxIdWithHttpInfo(taxId) {
      let postBody = null;
      // verify the required parameter 'taxId' is set
      if (taxId === undefined || taxId === null) {
        throw new Error("Missing the required parameter 'taxId' when calling deleteTaxesTaxId");
      }

      let pathParams = {
        'taxId': taxId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/taxes/{taxId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete tax record
     * Delete a tax record by it's ID.
     * @param {String} taxId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTaxesTaxId(taxId) {
      return this.deleteTaxesTaxIdWithHttpInfo(taxId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get taxes
     * Get a paginated list of taxes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaxCollection} and HTTP response
     */
    getTaxesWithHttpInfo() {
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
      let returnType = TaxCollection;
      return this.apiClient.callApi(
        '/taxes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get taxes
     * Get a paginated list of taxes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaxCollection}
     */
    getTaxes() {
      return this.getTaxesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get tax record
     * Get a tax record by it's ID
     * @param {String} taxId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaxResponse} and HTTP response
     */
    getTaxesTaxIdWithHttpInfo(taxId) {
      let postBody = null;
      // verify the required parameter 'taxId' is set
      if (taxId === undefined || taxId === null) {
        throw new Error("Missing the required parameter 'taxId' when calling getTaxesTaxId");
      }

      let pathParams = {
        'taxId': taxId
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
      let returnType = TaxResponse;
      return this.apiClient.callApi(
        '/taxes/{taxId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get tax record
     * Get a tax record by it's ID
     * @param {String} taxId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaxResponse}
     */
    getTaxesTaxId(taxId) {
      return this.getTaxesTaxIdWithHttpInfo(taxId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create tax
     * Create a new tax resource.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject37} opts.inlineObject37 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaxResponse} and HTTP response
     */
    postTaxesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['inlineObject37'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TaxResponse;
      return this.apiClient.callApi(
        '/taxes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create tax
     * Create a new tax resource.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject37} opts.inlineObject37 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaxResponse}
     */
    postTaxes(opts) {
      return this.postTaxesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update tax record
     * Update a tax record by it's ID
     * @param {String} taxId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject38} opts.inlineObject38 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaxResponse} and HTTP response
     */
    putTaxesTaxIdWithHttpInfo(taxId, opts) {
      opts = opts || {};
      let postBody = opts['inlineObject38'];
      // verify the required parameter 'taxId' is set
      if (taxId === undefined || taxId === null) {
        throw new Error("Missing the required parameter 'taxId' when calling putTaxesTaxId");
      }

      let pathParams = {
        'taxId': taxId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TaxResponse;
      return this.apiClient.callApi(
        '/taxes/{taxId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update tax record
     * Update a tax record by it's ID
     * @param {String} taxId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject38} opts.inlineObject38 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaxResponse}
     */
    putTaxesTaxId(taxId, opts) {
      return this.putTaxesTaxIdWithHttpInfo(taxId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
