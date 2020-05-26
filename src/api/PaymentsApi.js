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
import InlineObject15 from '../model/InlineObject15';
import OrderResponse from '../model/OrderResponse';
import PaymentProviderResponse from '../model/PaymentProviderResponse';
import TransactionResponse from '../model/TransactionResponse';
import Unauthenticated from '../model/Unauthenticated';

/**
* Payments service.
* @module api/PaymentsApi
* @version 0.9.0
*/
export default class PaymentsApi {

    /**
    * Constructs a new PaymentsApi. 
    * @alias module:api/PaymentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete reusable payment
     * Removes a users reusable payment method. This can be invoked by any admin user and also the user who the record belongs to.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteUsersPaymentsIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUsersPaymentsId");
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

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/payments/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete reusable payment
     * Removes a users reusable payment method. This can be invoked by any admin user and also the user who the record belongs to.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteUsersPaymentsId(id) {
      return this.deleteUsersPaymentsIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Payment Provider
     * Gets the default, configured payment provider.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentProviderResponse} and HTTP response
     */
    getPaymentsProviderWithHttpInfo() {
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
      let returnType = PaymentProviderResponse;
      return this.apiClient.callApi(
        '/payments/provider', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Payment Provider
     * Gets the default, configured payment provider.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentProviderResponse}
     */
    getPaymentsProvider() {
      return this.getPaymentsProviderWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Threed Secure Payment
     * Validate a ThreeD secure request and process the transaaction, if your payment provider supports it.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject15} opts.inlineObject15 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderResponse} and HTTP response
     */
    postPayments3dSecureWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['inlineObject15'];

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
      let returnType = OrderResponse;
      return this.apiClient.callApi(
        '/payments/3d-secure', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Threed Secure Payment
     * Validate a ThreeD secure request and process the transaaction, if your payment provider supports it.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject15} opts.inlineObject15 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderResponse}
     */
    postPayments3dSecure(opts) {
      return this.postPayments3dSecureWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Refund a payment
     * Refund a transaction
     * @param {String} transactionId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.amount If left blank, the full amount will be refunded
     * @param {String} opts.notes 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionResponse} and HTTP response
     */
    postPaymentsIdRefundWithHttpInfo(transactionId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling postPaymentsIdRefund");
      }

      let pathParams = {
        'transactionId': transactionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'amount': opts['amount'],
        'notes': opts['notes']
      };

      let authNames = ['auth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = TransactionResponse;
      return this.apiClient.callApi(
        '/payments/{transactionId}/refund', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Refund a payment
     * Refund a transaction
     * @param {String} transactionId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.amount If left blank, the full amount will be refunded
     * @param {String} opts.notes 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionResponse}
     */
    postPaymentsIdRefund(transactionId, opts) {
      return this.postPaymentsIdRefundWithHttpInfo(transactionId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Void a payment
     * Voids a payment in the system.
     * @param {String} transactionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionResponse} and HTTP response
     */
    postPaymentsTransactionIdVoidWithHttpInfo(transactionId) {
      let postBody = null;
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling postPaymentsTransactionIdVoid");
      }

      let pathParams = {
        'transactionId': transactionId
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
      let returnType = TransactionResponse;
      return this.apiClient.callApi(
        '/payments/{transactionId}/void', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Void a payment
     * Voids a payment in the system.
     * @param {String} transactionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionResponse}
     */
    postPaymentsTransactionIdVoid(transactionId) {
      return this.postPaymentsTransactionIdVoidWithHttpInfo(transactionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
