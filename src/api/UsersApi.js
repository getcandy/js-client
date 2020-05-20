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
import AccountPasswordResetBody from '../model/AccountPasswordResetBody';
import Error from '../model/Error';
import InlineObject40 from '../model/InlineObject40';
import InlineObject41 from '../model/InlineObject41';
import Message from '../model/Message';
import Unauthenticated from '../model/Unauthenticated';
import Unauthorized from '../model/Unauthorized';
import UserCollection from '../model/UserCollection';
import UserResponse from '../model/UserResponse';

/**
* Users service.
* @module api/UsersApi
* @version 0.9.0
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete a user by their given ID.
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteUsersUserIdWithHttpInfo(userId) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUsersUserId");
      }

      let pathParams = {
        'userId': userId
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
        '/users/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a user by their given ID.
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteUsersUserId(userId) {
      return this.deleteUsersUserIdWithHttpInfo(userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get users
     * Get a paginated list of users.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserCollection} and HTTP response
     */
    getUsersWithHttpInfo() {
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
      let returnType = UserCollection;
      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get users
     * Get a paginated list of users.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserCollection}
     */
    getUsers() {
      return this.getUsersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the current user
     * Returns the user associated to the access token.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResponse} and HTTP response
     */
    getUsersCurrentWithHttpInfo() {
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
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/users/current', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the current user
     * Returns the user associated to the access token.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResponse}
     */
    getUsersCurrent() {
      return this.getUsersCurrentWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get user
     * Get a user by their given ID.
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResponse} and HTTP response
     */
    getUsersUserIdWithHttpInfo(userId) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUsersUserId");
      }

      let pathParams = {
        'userId': userId
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
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get user
     * Get a user by their given ID.
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResponse}
     */
    getUsersUserId(userId) {
      return this.getUsersUserIdWithHttpInfo(userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reset  password
     * Allows the current user to update their password.
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountPasswordResetBody} opts.accountPasswordResetBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Message} and HTTP response
     */
    postAccountPasswordWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['accountPasswordResetBody'];

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
      let returnType = Message;
      return this.apiClient.callApi(
        '/account/password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Reset  password
     * Allows the current user to update their password.
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountPasswordResetBody} opts.accountPasswordResetBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Message}
     */
    postAccountPassword(opts) {
      return this.postAccountPasswordWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create user
     * Create a new user in the system
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject40} opts.inlineObject40 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResponse} and HTTP response
     */
    postUsersWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['inlineObject40'];

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
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create user
     * Create a new user in the system
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject40} opts.inlineObject40 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResponse}
     */
    postUsers(opts) {
      return this.postUsersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a user record from their ID.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject41} opts.inlineObject41 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResponse} and HTTP response
     */
    putUsersUserIdWithHttpInfo(userId, opts) {
      opts = opts || {};
      let postBody = opts['inlineObject41'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling putUsersUserId");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/users/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a user record from their ID.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject41} opts.inlineObject41 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResponse}
     */
    putUsersUserId(userId, opts) {
      return this.putUsersUserIdWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
