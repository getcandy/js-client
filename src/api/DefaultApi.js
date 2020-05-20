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
import Root from '../model/Root';

/**
* Default service.
* @module api/DefaultApi
* @version 0.9.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get root
     * Returns information about the API
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Root} and HTTP response
     */
    getWithHttpInfo() {
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
      let returnType = Root;
      return this.apiClient.callApi(
        '/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get root
     * Returns information about the API
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Root}
     */
    get() {
      return this.getWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
