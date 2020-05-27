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
import AssociationGroupCollection from '../model/AssociationGroupCollection';
/**
* Associations service.
* @module api/AssociationsApi
* @version 0.9.0
*/

export default class AssociationsApi {
  /**
  * Constructs a new AssociationsApi. 
  * @alias module:api/AssociationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }
  /**
   * Paginated array of association groups
   * Returns a paginated response of association groups available in the system
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AssociationGroupCollection} and HTTP response
   */


  getAssociationsGroupsWithHttpInfo() {
    let postBody = null;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = AssociationGroupCollection;
    return this.apiClient.callApi('/associations/groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Paginated array of association groups
   * Returns a paginated response of association groups available in the system
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AssociationGroupCollection}
   */


  getAssociationsGroups() {
    return this.getAssociationsGroupsWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }

}