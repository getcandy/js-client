/**
 * GetCandy
 * The GetCandy API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import InlineObject17 from '../model/InlineObject17';
import ProductVariantCollection from '../model/ProductVariantCollection';
import ProductVariantResponse from '../model/ProductVariantResponse';

/**
* ProductVariants service.
* @module api/ProductVariantsApi
* @version 1.0.0
*/
export default class ProductVariantsApi {

    /**
    * Constructs a new ProductVariantsApi. 
    * @alias module:api/ProductVariantsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Product Variants
     * Get a paginated list of all product variants in the system
     * @param {Object} opts Optional parameters
     * @param {String} opts.include 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductVariantCollection} and HTTP response
     */
    getProductsVariantsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'include': opts['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProductVariantCollection;
      return this.apiClient.callApi(
        '/products/variants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Product Variants
     * Get a paginated list of all product variants in the system
     * @param {Object} opts Optional parameters
     * @param {String} opts.include 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductVariantCollection}
     */
    getProductsVariants(opts) {
      return this.getProductsVariantsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Product Variant
     * Get a product variant by it's ID
     * @param {String} productVariantId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductVariantResponse} and HTTP response
     */
    getProductsVariantsProductVariantIdWithHttpInfo(productVariantId) {
      let postBody = null;
      // verify the required parameter 'productVariantId' is set
      if (productVariantId === undefined || productVariantId === null) {
        throw new Error("Missing the required parameter 'productVariantId' when calling getProductsVariantsProductVariantId");
      }

      let pathParams = {
        'productVariantId': productVariantId
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
      let returnType = ProductVariantResponse;
      return this.apiClient.callApi(
        '/products/variants/{productVariantId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Product Variant
     * Get a product variant by it's ID
     * @param {String} productVariantId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductVariantResponse}
     */
    getProductsVariantsProductVariantId(productVariantId) {
      return this.getProductsVariantsProductVariantIdWithHttpInfo(productVariantId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update ProductVariant Inventory
     * Request to update a product variants inventory.
     * @param {String} productVariantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject17} opts.inlineObject17 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductVariantResponse} and HTTP response
     */
    putProductsVariantsProductVariantIdInventoryWithHttpInfo(productVariantId, opts) {
      opts = opts || {};
      let postBody = opts['inlineObject17'];
      // verify the required parameter 'productVariantId' is set
      if (productVariantId === undefined || productVariantId === null) {
        throw new Error("Missing the required parameter 'productVariantId' when calling putProductsVariantsProductVariantIdInventory");
      }

      let pathParams = {
        'productVariantId': productVariantId
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
      let returnType = ProductVariantResponse;
      return this.apiClient.callApi(
        '/products/variants/{productVariantId}/inventory', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update ProductVariant Inventory
     * Request to update a product variants inventory.
     * @param {String} productVariantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject17} opts.inlineObject17 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductVariantResponse}
     */
    putProductsVariantsProductVariantIdInventory(productVariantId, opts) {
      return this.putProductsVariantsProductVariantIdInventoryWithHttpInfo(productVariantId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
