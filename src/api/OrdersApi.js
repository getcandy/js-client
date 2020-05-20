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
import Address from '../model/Address';
import EmailPreviewResponse from '../model/EmailPreviewResponse';
import Error from '../model/Error';
import InlineObject from '../model/InlineObject';
import InlineObject1 from '../model/InlineObject1';
import InlineObject12 from '../model/InlineObject12';
import InlineObject13 from '../model/InlineObject13';
import InlineObject14 from '../model/InlineObject14';
import InlineObject15 from '../model/InlineObject15';
import InlineObject2 from '../model/InlineObject2';
import InlineResponse404 from '../model/InlineResponse404';
import InlineResponse4222 from '../model/InlineResponse4222';
import InlineResponse4224 from '../model/InlineResponse4224';
import InlineResponse4225 from '../model/InlineResponse4225';
import InlineResponse4226 from '../model/InlineResponse4226';
import InvoiceResponse from '../model/InvoiceResponse';
import OrderCollection from '../model/OrderCollection';
import OrderExportResponse from '../model/OrderExportResponse';
import OrderResponse from '../model/OrderResponse';
import OrderTypeCollection from '../model/OrderTypeCollection';
import ShippingMethodCollection from '../model/ShippingMethodCollection';

/**
* Orders service.
* @module api/OrdersApi
* @version 0.9.0
*/
export default class OrdersApi {

    /**
    * Constructs a new OrdersApi. 
    * @alias module:api/OrdersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete an order line
     * Deletes an order line from an order
     * @param {String} orderLineId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteOrdersLinesOrderIdWithHttpInfo(orderLineId) {
      let postBody = null;
      // verify the required parameter 'orderLineId' is set
      if (orderLineId === undefined || orderLineId === null) {
        throw new Error("Missing the required parameter 'orderLineId' when calling deleteOrdersLinesOrderId");
      }

      let pathParams = {
        'orderLineId': orderLineId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/orders/lines/{orderLineId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an order line
     * Deletes an order line from an order
     * @param {String} orderLineId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteOrdersLinesOrderId(orderLineId) {
      return this.deleteOrdersLinesOrderIdWithHttpInfo(orderLineId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get orders
     * If you're an admin user you will be able to see all orders, otherwise only the current users orders will be returned.
     * @param {Object} opts Optional parameters
     * @param {String} opts.include 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderCollection} and HTTP response
     */
    getOrdersWithHttpInfo(opts) {
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
      let returnType = OrderCollection;
      return this.apiClient.callApi(
        '/orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get orders
     * If you're an admin user you will be able to see all orders, otherwise only the current users orders will be returned.
     * @param {Object} opts Optional parameters
     * @param {String} opts.include 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderCollection}
     */
    getOrders(opts) {
      return this.getOrdersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Order export
     * Export orders into a base64 encoded string
     * @param {module:model/String} orders Colon seperated order IDs
     * @param {String} format The export format, must be present in config
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderExportResponse} and HTTP response
     */
    getOrdersBulkWithHttpInfo(orders, format) {
      let postBody = null;
      // verify the required parameter 'orders' is set
      if (orders === undefined || orders === null) {
        throw new Error("Missing the required parameter 'orders' when calling getOrdersBulk");
      }
      // verify the required parameter 'format' is set
      if (format === undefined || format === null) {
        throw new Error("Missing the required parameter 'format' when calling getOrdersBulk");
      }

      let pathParams = {
      };
      let queryParams = {
        'orders': orders,
        'format': format
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrderExportResponse;
      return this.apiClient.callApi(
        '/orders/bulk', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Order export
     * Export orders into a base64 encoded string
     * @param {module:model/String} orders Colon seperated order IDs
     * @param {String} format The export format, must be present in config
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderExportResponse}
     */
    getOrdersBulk(orders, format) {
      return this.getOrdersBulkWithHttpInfo(orders, format)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get order status preview email
     * This endpoint will get a HTML email preview for an order status, this is useful if you want to be able to see what email will be sent out for the corresponding Order status.  Mailers for each order status should be stored in the getcandy config under `orders.mailers`
     * @param {String} status 
     * @param {String} id An order id to use for the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EmailPreviewResponse} and HTTP response
     */
    getOrdersEmailPreviewStatusWithHttpInfo(status, id) {
      let postBody = null;
      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling getOrdersEmailPreviewStatus");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOrdersEmailPreviewStatus");
      }

      let pathParams = {
        'status': status
      };
      let queryParams = {
        'id': id
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EmailPreviewResponse;
      return this.apiClient.callApi(
        '/orders/email-preview/{status}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get order status preview email
     * This endpoint will get a HTML email preview for an order status, this is useful if you want to be able to see what email will be sent out for the corresponding Order status.  Mailers for each order status should be stored in the getcandy config under `orders.mailers`
     * @param {String} status 
     * @param {String} id An order id to use for the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmailPreviewResponse}
     */
    getOrdersEmailPreviewStatus(status, id) {
      return this.getOrdersEmailPreviewStatusWithHttpInfo(status, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get order invoice
     * Get an orders invoice
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvoiceResponse} and HTTP response
     */
    getOrdersIdInvoiceWithHttpInfo(orderId) {
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrdersIdInvoice");
      }

      let pathParams = {
        'orderId': orderId
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
      let returnType = InvoiceResponse;
      return this.apiClient.callApi(
        '/orders/{orderId}/invoice', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get order invoice
     * Get an orders invoice
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvoiceResponse}
     */
    getOrdersIdInvoice(orderId) {
      return this.getOrdersIdInvoiceWithHttpInfo(orderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Order Shipping Methods
     * This will return a list of all ShippingMethod's that are available for this order.
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingMethodCollection} and HTTP response
     */
    getOrdersIdShippingMethodsWithHttpInfo(orderId) {
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrdersIdShippingMethods");
      }

      let pathParams = {
        'orderId': orderId
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
      let returnType = ShippingMethodCollection;
      return this.apiClient.callApi(
        '/orders/{orderId}/shipping/methods', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Order Shipping Methods
     * This will return a list of all ShippingMethod's that are available for this order.
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingMethodCollection}
     */
    getOrdersIdShippingMethods(orderId) {
      return this.getOrdersIdShippingMethodsWithHttpInfo(orderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Order
     * Get an Order by it's ID.  You must be an admin or owner to retrieve the order, otherwise you'll get a 404.
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderResponse} and HTTP response
     */
    getOrdersOrderIdWithHttpInfo(orderId) {
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrdersOrderId");
      }

      let pathParams = {
        'orderId': orderId
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
      let returnType = OrderResponse;
      return this.apiClient.callApi(
        '/orders/{orderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Order
     * Get an Order by it's ID.  You must be an admin or owner to retrieve the order, otherwise you'll get a 404.
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderResponse}
     */
    getOrdersOrderId(orderId) {
      return this.getOrdersOrderIdWithHttpInfo(orderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get order types
     * Returns all order types currently in the system
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderTypeCollection} and HTTP response
     */
    getOrdersTypesWithHttpInfo() {
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
      let returnType = OrderTypeCollection;
      return this.apiClient.callApi(
        '/orders/types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get order types
     * Returns all order types currently in the system
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderTypeCollection}
     */
    getOrdersTypes() {
      return this.getOrdersTypesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Order
     * Create an Order from a Basket instance
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderResponse} and HTTP response
     */
    postOrdersWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['inlineObject'];

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
        '/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Order
     * Create an Order from a Basket instance
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderResponse}
     */
    postOrders(opts) {
      return this.postOrdersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Bulk update orders
     * Allows you to bulk update a field across multiple Orders.  You must have the correct priviledges to perform this action.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject12} opts.inlineObject12 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    postOrdersBulkWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['inlineObject12'];

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
      let returnType = null;
      return this.apiClient.callApi(
        '/orders/bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Bulk update orders
     * Allows you to bulk update a field across multiple Orders.  You must have the correct priviledges to perform this action.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject12} opts.inlineObject12 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    postOrdersBulk(opts) {
      return this.postOrdersBulkWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Expire an Order
     * Sets an order to be expired. You must have the correct priviledges to perform this action. Once an order is expired, it will no longer appear in results unless performed by an admin or in the hub.
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    postOrdersOrderIdExpireWithHttpInfo(orderId) {
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling postOrdersOrderIdExpire");
      }

      let pathParams = {
        'orderId': orderId
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
        '/orders/{orderId}/expire', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Expire an Order
     * Sets an order to be expired. You must have the correct priviledges to perform this action. Once an order is expired, it will no longer appear in results unless performed by an admin or in the hub.
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    postOrdersOrderIdExpire(orderId) {
      return this.postOrdersOrderIdExpireWithHttpInfo(orderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Processes an order on the API
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.inlineObject2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderResponse} and HTTP response
     */
    postOrdersProcessWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['inlineObject2'];

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
        '/orders/process', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Processes an order on the API
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.inlineObject2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderResponse}
     */
    postOrdersProcess(opts) {
      return this.postOrdersProcessWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add contact details
     * Add contact details to an order
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject14} opts.inlineObject14 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderResponse} and HTTP response
     */
    putOrdersIdContactWithHttpInfo(orderId, opts) {
      opts = opts || {};
      let postBody = opts['inlineObject14'];
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling putOrdersIdContact");
      }

      let pathParams = {
        'orderId': orderId
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
        '/orders/{orderId}/contact', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add contact details
     * Add contact details to an order
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject14} opts.inlineObject14 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderResponse}
     */
    putOrdersIdContact(orderId, opts) {
      return this.putOrdersIdContactWithHttpInfo(orderId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add order line
     * Adds an order line to an order
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject15} opts.inlineObject15 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderResponse} and HTTP response
     */
    putOrdersIdLinesWithHttpInfo(orderId, opts) {
      opts = opts || {};
      let postBody = opts['inlineObject15'];
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling putOrdersIdLines");
      }

      let pathParams = {
        'orderId': orderId
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
        '/orders/{orderId}/lines', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add order line
     * Adds an order line to an order
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject15} opts.inlineObject15 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderResponse}
     */
    putOrdersIdLines(orderId, opts) {
      return this.putOrdersIdLinesWithHttpInfo(orderId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update shipping address
     * Update an orders shipping address
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Address} opts.address All fields are required when an `address_id` is not present.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderResponse} and HTTP response
     */
    putOrdersIdShippingAddressWithHttpInfo(orderId, opts) {
      opts = opts || {};
      let postBody = opts['address'];
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling putOrdersIdShippingAddress");
      }

      let pathParams = {
        'orderId': orderId
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
        '/orders/{orderId}/shipping/address', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update shipping address
     * Update an orders shipping address
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Address} opts.address All fields are required when an `address_id` is not present.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderResponse}
     */
    putOrdersIdShippingAddress(orderId, opts) {
      return this.putOrdersIdShippingAddressWithHttpInfo(orderId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add shipping cost
     * Adds a shipping cost to an Order
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject13} opts.inlineObject13 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderResponse} and HTTP response
     */
    putOrdersIdShippingCostWithHttpInfo(orderId, opts) {
      opts = opts || {};
      let postBody = opts['inlineObject13'];
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling putOrdersIdShippingCost");
      }

      let pathParams = {
        'orderId': orderId
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
        '/orders/{orderId}/shipping/cost', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add shipping cost
     * Adds a shipping cost to an Order
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject13} opts.inlineObject13 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderResponse}
     */
    putOrdersIdShippingCost(orderId, opts) {
      return this.putOrdersIdShippingCostWithHttpInfo(orderId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update Order
     * Update an Order
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.include 
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderResponse} and HTTP response
     */
    putOrdersOrderIdWithHttpInfo(orderId, opts) {
      opts = opts || {};
      let postBody = opts['inlineObject1'];
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling putOrdersOrderId");
      }

      let pathParams = {
        'orderId': orderId
      };
      let queryParams = {
        'include': opts['include']
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
        '/orders/{orderId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update Order
     * Update an Order
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.include 
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderResponse}
     */
    putOrdersOrderId(orderId, opts) {
      return this.putOrdersOrderIdWithHttpInfo(orderId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update billing address
     * Update an orders billing address
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Address} opts.address All fields are required when an `address_id` is not present.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderResponse} and HTTP response
     */
    putOrdersOrderIdBillingAddressWithHttpInfo(orderId, opts) {
      opts = opts || {};
      let postBody = opts['address'];
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling putOrdersOrderIdBillingAddress");
      }

      let pathParams = {
        'orderId': orderId
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
        '/orders/{orderId}/billing/address', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update billing address
     * Update an orders billing address
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Address} opts.address All fields are required when an `address_id` is not present.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderResponse}
     */
    putOrdersOrderIdBillingAddress(orderId, opts) {
      return this.putOrdersOrderIdBillingAddressWithHttpInfo(orderId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
