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
import DiscountCollection from '../model/DiscountCollection';
import DiscountResponse from '../model/DiscountResponse';
import Error from '../model/Error';
import InlineObject8 from '../model/InlineObject8';
import InlineObject9 from '../model/InlineObject9';
/**
* Discounts service.
* @module api/DiscountsApi
* @version 0.9.0
*/

export default class DiscountsApi {
  /**
  * Constructs a new DiscountsApi. 
  * @alias module:api/DiscountsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }
  /**
   * Delete Discount
   * Deletes a Discount
   * @param {String} discountId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  deleteDiscountsDiscountIdWithHttpInfo(discountId) {
    let postBody = null; // verify the required parameter 'discountId' is set

    if (discountId === undefined || discountId === null) {
      throw new Error("Missing the required parameter 'discountId' when calling deleteDiscountsDiscountId");
    }

    let pathParams = {
      'discountId': discountId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/discounts/{discountId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Delete Discount
   * Deletes a Discount
   * @param {String} discountId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */


  deleteDiscountsDiscountId(discountId) {
    return this.deleteDiscountsDiscountIdWithHttpInfo(discountId).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Get Discounts
   * Returns a paginated list of Discounts
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DiscountCollection} and HTTP response
   */


  getDiscountsWithHttpInfo() {
    let postBody = null;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = DiscountCollection;
    return this.apiClient.callApi('/discounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Get Discounts
   * Returns a paginated list of Discounts
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DiscountCollection}
   */


  getDiscounts() {
    return this.getDiscountsWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Get a Discount
   * Returns a Discount by it's ID.
   * @param {String} discountId 
   * @param {Object} opts Optional parameters
   * @param {String} opts.include 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DiscountResponse} and HTTP response
   */


  getDiscountsDiscountIdWithHttpInfo(discountId, opts) {
    opts = opts || {};
    let postBody = null; // verify the required parameter 'discountId' is set

    if (discountId === undefined || discountId === null) {
      throw new Error("Missing the required parameter 'discountId' when calling getDiscountsDiscountId");
    }

    let pathParams = {
      'discountId': discountId
    };
    let queryParams = {
      'include': opts['include']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = DiscountResponse;
    return this.apiClient.callApi('/discounts/{discountId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Get a Discount
   * Returns a Discount by it's ID.
   * @param {String} discountId 
   * @param {Object} opts Optional parameters
   * @param {String} opts.include 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DiscountResponse}
   */


  getDiscountsDiscountId(discountId, opts) {
    return this.getDiscountsDiscountIdWithHttpInfo(discountId, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Create Discount
   * Create a new Discount.
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject8} opts.inlineObject8 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DiscountResponse} and HTTP response
   */


  postDiscountsWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = opts['inlineObject8'];
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = DiscountResponse;
    return this.apiClient.callApi('/discounts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Create Discount
   * Create a new Discount.
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject8} opts.inlineObject8 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DiscountResponse}
   */


  postDiscounts(opts) {
    return this.postDiscountsWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Update Discount
   * Updates a Discount
   * @param {String} discountId 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject9} opts.inlineObject9 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DiscountResponse} and HTTP response
   */


  putDiscountsDiscountIdWithHttpInfo(discountId, opts) {
    opts = opts || {};
    let postBody = opts['inlineObject9']; // verify the required parameter 'discountId' is set

    if (discountId === undefined || discountId === null) {
      throw new Error("Missing the required parameter 'discountId' when calling putDiscountsDiscountId");
    }

    let pathParams = {
      'discountId': discountId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = DiscountResponse;
    return this.apiClient.callApi('/discounts/{discountId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Update Discount
   * Updates a Discount
   * @param {String} discountId 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject9} opts.inlineObject9 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DiscountResponse}
   */


  putDiscountsDiscountId(discountId, opts) {
    return this.putDiscountsDiscountIdWithHttpInfo(discountId, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

}