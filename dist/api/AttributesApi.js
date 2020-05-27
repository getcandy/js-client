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
import Attribute from '../model/Attribute';
import AttributeCollection from '../model/AttributeCollection';
import AttributeGroup from '../model/AttributeGroup';
import AttributeGroupCollection from '../model/AttributeGroupCollection';
import AttributeGroupResponse from '../model/AttributeGroupResponse';
import AttributeResponse from '../model/AttributeResponse';
import AttributesOrderUnprocessableResponse from '../model/AttributesOrderUnprocessableResponse';
import AttributesReorderBody from '../model/AttributesReorderBody';
import CreateAttributeGroupBodyName from '../model/CreateAttributeGroupBodyName';
import Error from '../model/Error';
import InlineObject2 from '../model/InlineObject2';
import InlineResponse4221 from '../model/InlineResponse4221';
/**
* Attributes service.
* @module api/AttributesApi
* @version 0.9.0
*/

export default class AttributesApi {
  /**
  * Constructs a new AttributesApi. 
  * @alias module:api/AttributesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }
  /**
   * Delete an attribute group
   * Deletes an attribute group
   * @param {String} attributeGroupId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  deleteAttributeGroupsAttributeGroupIdWithHttpInfo(attributeGroupId) {
    let postBody = null; // verify the required parameter 'attributeGroupId' is set

    if (attributeGroupId === undefined || attributeGroupId === null) {
      throw new Error("Missing the required parameter 'attributeGroupId' when calling deleteAttributeGroupsAttributeGroupId");
    }

    let pathParams = {
      'attributeGroupId': attributeGroupId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/attribute-groups/{attributeGroupId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Delete an attribute group
   * Deletes an attribute group
   * @param {String} attributeGroupId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */


  deleteAttributeGroupsAttributeGroupId(attributeGroupId) {
    return this.deleteAttributeGroupsAttributeGroupIdWithHttpInfo(attributeGroupId).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Delete an attribute
   * Delete an attribute.
   * @param {String} attributeId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  deleteAttributesAttributeIdWithHttpInfo(attributeId) {
    let postBody = null; // verify the required parameter 'attributeId' is set

    if (attributeId === undefined || attributeId === null) {
      throw new Error("Missing the required parameter 'attributeId' when calling deleteAttributesAttributeId");
    }

    let pathParams = {
      'attributeId': attributeId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/attributes/{attributeId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Delete an attribute
   * Delete an attribute.
   * @param {String} attributeId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */


  deleteAttributesAttributeId(attributeId) {
    return this.deleteAttributesAttributeIdWithHttpInfo(attributeId).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Paginated list of Attribute Groups
   * Returns a paginated list of available attribute groups
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.allRecords Will skip pagination and return all records (default to false)
   * @param {String} opts.include 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttributeGroupCollection} and HTTP response
   */


  getAttributeGroupsWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;
    let pathParams = {};
    let queryParams = {
      'all_records': opts['allRecords'],
      'include': opts['include']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = AttributeGroupCollection;
    return this.apiClient.callApi('/attribute-groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Paginated list of Attribute Groups
   * Returns a paginated list of available attribute groups
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.allRecords Will skip pagination and return all records (default to false)
   * @param {String} opts.include 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttributeGroupCollection}
   */


  getAttributeGroups(opts) {
    return this.getAttributeGroupsWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Get a single attribute group
   * Gets a single attribute group
   * @param {String} attributeGroupId 
   * @param {Object} opts Optional parameters
   * @param {Number} opts.include 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttributeGroupResponse} and HTTP response
   */


  getAttributeGroupsAttributeGroupIdWithHttpInfo(attributeGroupId, opts) {
    opts = opts || {};
    let postBody = null; // verify the required parameter 'attributeGroupId' is set

    if (attributeGroupId === undefined || attributeGroupId === null) {
      throw new Error("Missing the required parameter 'attributeGroupId' when calling getAttributeGroupsAttributeGroupId");
    }

    let pathParams = {
      'attributeGroupId': attributeGroupId
    };
    let queryParams = {
      'include': opts['include']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = AttributeGroupResponse;
    return this.apiClient.callApi('/attribute-groups/{attributeGroupId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Get a single attribute group
   * Gets a single attribute group
   * @param {String} attributeGroupId 
   * @param {Object} opts Optional parameters
   * @param {Number} opts.include 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttributeGroupResponse}
   */


  getAttributeGroupsAttributeGroupId(attributeGroupId, opts) {
    return this.getAttributeGroupsAttributeGroupIdWithHttpInfo(attributeGroupId, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Get Attributes
   * Return a paged array of attributes
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttributeCollection} and HTTP response
   */


  getAttributesWithHttpInfo() {
    let postBody = null;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = AttributeCollection;
    return this.apiClient.callApi('/attributes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Get Attributes
   * Return a paged array of attributes
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttributeCollection}
   */


  getAttributes() {
    return this.getAttributesWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Get an attribute
   * Returns an attribute from a given ID.
   * @param {String} attributeId 
   * @param {Object} opts Optional parameters
   * @param {String} opts.include 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttributeResponse} and HTTP response
   */


  getAttributesAttributeIdWithHttpInfo(attributeId, opts) {
    opts = opts || {};
    let postBody = null; // verify the required parameter 'attributeId' is set

    if (attributeId === undefined || attributeId === null) {
      throw new Error("Missing the required parameter 'attributeId' when calling getAttributesAttributeId");
    }

    let pathParams = {
      'attributeId': attributeId
    };
    let queryParams = {
      'include': opts['include']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = AttributeResponse;
    return this.apiClient.callApi('/attributes/{attributeId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Get an attribute
   * Returns an attribute from a given ID.
   * @param {String} attributeId 
   * @param {Object} opts Optional parameters
   * @param {String} opts.include 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttributeResponse}
   */


  getAttributesAttributeId(attributeId, opts) {
    return this.getAttributesAttributeIdWithHttpInfo(attributeId, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Create an Attribute Group
   * @param {Object} opts Optional parameters
   * @param {module:model/CreateAttributeGroupBodyName} opts.name 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttributeGroupResponse} and HTTP response
   */


  postAttributeGroupsWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {
      'name': opts['name']
    };
    let authNames = ['auth'];
    let contentTypes = ['multipart/form-data'];
    let accepts = ['application/json'];
    let returnType = AttributeGroupResponse;
    return this.apiClient.callApi('/attribute-groups', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Create an Attribute Group
   * @param {Object} opts Optional parameters
   * @param {module:model/CreateAttributeGroupBodyName} opts.name 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttributeGroupResponse}
   */


  postAttributeGroups(opts) {
    return this.postAttributeGroupsWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Create Attribute
   * Create a new attribute
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject2} opts.inlineObject2 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttributeResponse} and HTTP response
   */


  postAttributesWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = opts['inlineObject2'];
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = AttributeResponse;
    return this.apiClient.callApi('/attributes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Create Attribute
   * Create a new attribute
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject2} opts.inlineObject2 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttributeResponse}
   */


  postAttributes(opts) {
    return this.postAttributesWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Update an attribute group
   * Updates an attribute group.
   * @param {String} attributeGroupId 
   * @param {Object} opts Optional parameters
   * @param {module:model/AttributeGroup} opts.attributeGroup 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttributeGroupResponse} and HTTP response
   */


  putAttributeGroupsAttributeGroupIdWithHttpInfo(attributeGroupId, opts) {
    opts = opts || {};
    let postBody = opts['attributeGroup']; // verify the required parameter 'attributeGroupId' is set

    if (attributeGroupId === undefined || attributeGroupId === null) {
      throw new Error("Missing the required parameter 'attributeGroupId' when calling putAttributeGroupsAttributeGroupId");
    }

    let pathParams = {
      'attributeGroupId': attributeGroupId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = AttributeGroupResponse;
    return this.apiClient.callApi('/attribute-groups/{attributeGroupId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Update an attribute group
   * Updates an attribute group.
   * @param {String} attributeGroupId 
   * @param {Object} opts Optional parameters
   * @param {module:model/AttributeGroup} opts.attributeGroup 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttributeGroupResponse}
   */


  putAttributeGroupsAttributeGroupId(attributeGroupId, opts) {
    return this.putAttributeGroupsAttributeGroupIdWithHttpInfo(attributeGroupId, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Reorder attribute groups
   * Sends a request to reorder the attribute groups in the system
   * @param {Object} opts Optional parameters
   * @param {module:model/AttributesReorderBody} opts.attributesReorderBody 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  putAttributeGroupsReorderWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = opts['attributesReorderBody'];
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/attribute-groups/reorder', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Reorder attribute groups
   * Sends a request to reorder the attribute groups in the system
   * @param {Object} opts Optional parameters
   * @param {module:model/AttributesReorderBody} opts.attributesReorderBody 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */


  putAttributeGroupsReorder(opts) {
    return this.putAttributeGroupsReorderWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Update an attribute
   * Updates an attribute from a given ID.
   * @param {String} attributeId 
   * @param {Object} opts Optional parameters
   * @param {module:model/Attribute} opts.attribute 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttributeResponse} and HTTP response
   */


  putAttributesAttributeIdWithHttpInfo(attributeId, opts) {
    opts = opts || {};
    let postBody = opts['attribute']; // verify the required parameter 'attributeId' is set

    if (attributeId === undefined || attributeId === null) {
      throw new Error("Missing the required parameter 'attributeId' when calling putAttributesAttributeId");
    }

    let pathParams = {
      'attributeId': attributeId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = AttributeResponse;
    return this.apiClient.callApi('/attributes/{attributeId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Update an attribute
   * Updates an attribute from a given ID.
   * @param {String} attributeId 
   * @param {Object} opts Optional parameters
   * @param {module:model/Attribute} opts.attribute 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttributeResponse}
   */


  putAttributesAttributeId(attributeId, opts) {
    return this.putAttributesAttributeIdWithHttpInfo(attributeId, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * Update request to reorder attributes
   * Allows you to reorder a target category in relation to another.
   * @param {Object} opts Optional parameters
   * @param {module:model/AttributesReorderBody} opts.attributesReorderBody 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  putAttributesOrderWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = opts['attributesReorderBody'];
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['auth'];
    let contentTypes = ['application/json'];
    let accepts = [];
    let returnType = null;
    return this.apiClient.callApi('/attributes/order', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * Update request to reorder attributes
   * Allows you to reorder a target category in relation to another.
   * @param {Object} opts Optional parameters
   * @param {module:model/AttributesReorderBody} opts.attributesReorderBody 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */


  putAttributesOrder(opts) {
    return this.putAttributesOrderWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

}