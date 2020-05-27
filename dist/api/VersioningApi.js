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
/**
* Versioning service.
* @module api/VersioningApi
* @version 0.9.0
*/

export default class VersioningApi {
  /**
  * Constructs a new VersioningApi. 
  * @alias module:api/VersioningApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }
  /**
   * Restore model
   * Restores a model version
   * @param {String} modelId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  postVersionsModelIdRestoreWithHttpInfo(modelId) {
    let postBody = null; // verify the required parameter 'modelId' is set

    if (modelId === undefined || modelId === null) {
      throw new Error("Missing the required parameter 'modelId' when calling postVersionsModelIdRestore");
    }

    let pathParams = {
      'modelId': modelId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = Object;
    return this.apiClient.callApi('/versions/{modelId}/restore', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Restore model
   * Restores a model version
   * @param {String} modelId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
   */


  postVersionsModelIdRestore(modelId) {
    return this.postVersionsModelIdRestoreWithHttpInfo(modelId).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

}