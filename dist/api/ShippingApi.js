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
import InlineObject28 from '../model/InlineObject28';
import InlineObject29 from '../model/InlineObject29';
import InlineObject30 from '../model/InlineObject30';
import InlineObject31 from '../model/InlineObject31';
import InlineObject32 from '../model/InlineObject32';
import InlineObject33 from '../model/InlineObject33';
import InlineObject34 from '../model/InlineObject34';
import InlineResponse2006 from '../model/InlineResponse2006';
import InlineResponse42212 from '../model/InlineResponse42212';
import InlineResponse42213 from '../model/InlineResponse42213';
import InlineResponse42214 from '../model/InlineResponse42214';
import ShippingMethodCollection from '../model/ShippingMethodCollection';
import ShippingMethodResponse from '../model/ShippingMethodResponse';
import ShippingPriceResponse from '../model/ShippingPriceResponse';
import ShippingZoneCollection from '../model/ShippingZoneCollection';
import ShippingZoneResponse from '../model/ShippingZoneResponse';
/**
* Shipping service.
* @module api/ShippingApi
* @version 0.9.0
*/

export default class ShippingApi {
  /**
  * Constructs a new ShippingApi. 
  * @alias module:api/ShippingApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }
  /**
   * Delete shipping method
   * Deletes a shipping method.
   * @param {String} shippingMethodId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  deleteShippingShippingMethodIdWithHttpInfo(shippingMethodId) {
    let postBody = null; // verify the required parameter 'shippingMethodId' is set

    if (shippingMethodId === undefined || shippingMethodId === null) {
      throw new Error("Missing the required parameter 'shippingMethodId' when calling deleteShippingShippingMethodId");
    }

    let pathParams = {
      'shippingMethodId': shippingMethodId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = [];
    let returnType = null;
    return this.apiClient.callApi('/shipping/{shippingMethodId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Delete shipping method
   * Deletes a shipping method.
   * @param {String} shippingMethodId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */


  deleteShippingShippingMethodId(shippingMethodId) {
    return this.deleteShippingShippingMethodIdWithHttpInfo(shippingMethodId).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Get shipping methods
   * Returns a paginated list of shipping methods
   * @param {Object} opts Optional parameters
   * @param {Number} opts.perPage 
   * @param {String} opts.include 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingMethodCollection} and HTTP response
   */


  getShippingWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;
    let pathParams = {};
    let queryParams = {
      'per_page': opts['perPage'],
      'include': opts['include']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = ShippingMethodCollection;
    return this.apiClient.callApi('/shipping', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Get shipping methods
   * Returns a paginated list of shipping methods
   * @param {Object} opts Optional parameters
   * @param {Number} opts.perPage 
   * @param {String} opts.include 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingMethodCollection}
   */


  getShipping(opts) {
    return this.getShippingWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Get shipping methods
   * Returns a shipping method by it's ID.
   * @param {String} shippingMethodId 
   * @param {Object} opts Optional parameters
   * @param {String} opts.include 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingMethodResponse} and HTTP response
   */


  getShippingShippingMethodIdWithHttpInfo(shippingMethodId, opts) {
    opts = opts || {};
    let postBody = null; // verify the required parameter 'shippingMethodId' is set

    if (shippingMethodId === undefined || shippingMethodId === null) {
      throw new Error("Missing the required parameter 'shippingMethodId' when calling getShippingShippingMethodId");
    }

    let pathParams = {
      'shippingMethodId': shippingMethodId
    };
    let queryParams = {
      'include': opts['include']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = ShippingMethodResponse;
    return this.apiClient.callApi('/shipping/{shippingMethodId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Get shipping methods
   * Returns a shipping method by it's ID.
   * @param {String} shippingMethodId 
   * @param {Object} opts Optional parameters
   * @param {String} opts.include 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingMethodResponse}
   */


  getShippingShippingMethodId(shippingMethodId, opts) {
    return this.getShippingShippingMethodIdWithHttpInfo(shippingMethodId, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Get Shipping Zones
   * Returns a paginated list of shipping zones.
   * @param {Object} opts Optional parameters
   * @param {String} opts.include 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingZoneCollection} and HTTP response
   */


  getShippingZonesWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;
    let pathParams = {};
    let queryParams = {
      'include': opts['include']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = ShippingZoneCollection;
    return this.apiClient.callApi('/shipping/zones', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Get Shipping Zones
   * Returns a paginated list of shipping zones.
   * @param {Object} opts Optional parameters
   * @param {String} opts.include 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingZoneCollection}
   */


  getShippingZones(opts) {
    return this.getShippingZonesWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Get Shipping Zone
   * Get a shipping zone by it's ID.
   * @param {String} shippingZoneId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingZoneResponse} and HTTP response
   */


  getShippingZonesShippingZoneIdWithHttpInfo(shippingZoneId) {
    let postBody = null; // verify the required parameter 'shippingZoneId' is set

    if (shippingZoneId === undefined || shippingZoneId === null) {
      throw new Error("Missing the required parameter 'shippingZoneId' when calling getShippingZonesShippingZoneId");
    }

    let pathParams = {
      'shippingZoneId': shippingZoneId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = ShippingZoneResponse;
    return this.apiClient.callApi('/shipping/zones/{shippingZoneId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Get Shipping Zone
   * Get a shipping zone by it's ID.
   * @param {String} shippingZoneId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingZoneResponse}
   */


  getShippingZonesShippingZoneId(shippingZoneId) {
    return this.getShippingZonesShippingZoneIdWithHttpInfo(shippingZoneId).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Create shipping method
   * Create a new shipping method.
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject33} opts.inlineObject33 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2006} and HTTP response
   */


  postShippingWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = opts['inlineObject33'];
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = InlineResponse2006;
    return this.apiClient.callApi('/shipping', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Create shipping method
   * Create a new shipping method.
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject33} opts.inlineObject33 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2006}
   */


  postShipping(opts) {
    return this.postShippingWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Add shipping price
   * Add a price to a shipping method.
   * @param {String} shippingMethodId 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject29} opts.inlineObject29 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingPriceResponse} and HTTP response
   */


  postShippingIdPricesWithHttpInfo(shippingMethodId, opts) {
    opts = opts || {};
    let postBody = opts['inlineObject29']; // verify the required parameter 'shippingMethodId' is set

    if (shippingMethodId === undefined || shippingMethodId === null) {
      throw new Error("Missing the required parameter 'shippingMethodId' when calling postShippingIdPrices");
    }

    let pathParams = {
      'shippingMethodId': shippingMethodId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = ShippingPriceResponse;
    return this.apiClient.callApi('/shipping/{shippingMethodId}/prices', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Add shipping price
   * Add a price to a shipping method.
   * @param {String} shippingMethodId 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject29} opts.inlineObject29 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingPriceResponse}
   */


  postShippingIdPrices(shippingMethodId, opts) {
    return this.postShippingIdPricesWithHttpInfo(shippingMethodId, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Create Shipping Zone
   * Create a new shipping zone
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject28} opts.inlineObject28 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingZoneResponse} and HTTP response
   */


  postShippingZonesWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = opts['inlineObject28'];
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = ShippingZoneResponse;
    return this.apiClient.callApi('/shipping/zones', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Create Shipping Zone
   * Create a new shipping zone
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject28} opts.inlineObject28 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingZoneResponse}
   */


  postShippingZones(opts) {
    return this.postShippingZonesWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Update shipping method users
   * Update shipping method users
   * @param {String} id 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject32} opts.inlineObject32 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingMethodResponse} and HTTP response
   */


  putShippingIdUsersWithHttpInfo(id, opts) {
    opts = opts || {};
    let postBody = opts['inlineObject32']; // verify the required parameter 'id' is set

    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling putShippingIdUsers");
    }

    let pathParams = {
      'id': id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = ShippingMethodResponse;
    return this.apiClient.callApi('/shipping/{id}/users', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Update shipping method users
   * Update shipping method users
   * @param {String} id 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject32} opts.inlineObject32 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingMethodResponse}
   */


  putShippingIdUsers(id, opts) {
    return this.putShippingIdUsersWithHttpInfo(id, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Update shipping price
   * Update a shipping price
   * @param {String} shippingPriceId 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject30} opts.inlineObject30 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingPriceResponse} and HTTP response
   */


  putShippingPricesShippingPriceIdWithHttpInfo(shippingPriceId, opts) {
    opts = opts || {};
    let postBody = opts['inlineObject30']; // verify the required parameter 'shippingPriceId' is set

    if (shippingPriceId === undefined || shippingPriceId === null) {
      throw new Error("Missing the required parameter 'shippingPriceId' when calling putShippingPricesShippingPriceId");
    }

    let pathParams = {
      'shippingPriceId': shippingPriceId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = ShippingPriceResponse;
    return this.apiClient.callApi('/shipping/prices/{shippingPriceId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Update shipping price
   * Update a shipping price
   * @param {String} shippingPriceId 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject30} opts.inlineObject30 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingPriceResponse}
   */


  putShippingPricesShippingPriceId(shippingPriceId, opts) {
    return this.putShippingPricesShippingPriceIdWithHttpInfo(shippingPriceId, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Update shipping method
   * Update shipping method by it's ID
   * @param {String} shippingMethodId 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject34} opts.inlineObject34 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingMethodResponse} and HTTP response
   */


  putShippingShippingMethodIdWithHttpInfo(shippingMethodId, opts) {
    opts = opts || {};
    let postBody = opts['inlineObject34']; // verify the required parameter 'shippingMethodId' is set

    if (shippingMethodId === undefined || shippingMethodId === null) {
      throw new Error("Missing the required parameter 'shippingMethodId' when calling putShippingShippingMethodId");
    }

    let pathParams = {
      'shippingMethodId': shippingMethodId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = ShippingMethodResponse;
    return this.apiClient.callApi('/shipping/{shippingMethodId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Update shipping method
   * Update shipping method by it's ID
   * @param {String} shippingMethodId 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject34} opts.inlineObject34 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingMethodResponse}
   */


  putShippingShippingMethodId(shippingMethodId, opts) {
    return this.putShippingShippingMethodIdWithHttpInfo(shippingMethodId, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Update shipping method zones
   * Update a shipping method's zones.
   * @param {String} shippingMethodId 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject31} opts.inlineObject31 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingMethodResponse} and HTTP response
   */


  putShippingShippingMethodIdZonesWithHttpInfo(shippingMethodId, opts) {
    opts = opts || {};
    let postBody = opts['inlineObject31']; // verify the required parameter 'shippingMethodId' is set

    if (shippingMethodId === undefined || shippingMethodId === null) {
      throw new Error("Missing the required parameter 'shippingMethodId' when calling putShippingShippingMethodIdZones");
    }

    let pathParams = {
      'shippingMethodId': shippingMethodId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = ShippingMethodResponse;
    return this.apiClient.callApi('/shipping/{shippingMethodId}/zones', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Update shipping method zones
   * Update a shipping method's zones.
   * @param {String} shippingMethodId 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject31} opts.inlineObject31 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingMethodResponse}
   */


  putShippingShippingMethodIdZones(shippingMethodId, opts) {
    return this.putShippingShippingMethodIdZonesWithHttpInfo(shippingMethodId, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

}