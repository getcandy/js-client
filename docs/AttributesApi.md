# GetcandyJs.AttributesApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAttributeGroupsAttributeGroupId**](AttributesApi.md#deleteAttributeGroupsAttributeGroupId) | **DELETE** /attribute-groups/{attributeGroupId} | Delete an attribute group
[**deleteAttributesAttributeId**](AttributesApi.md#deleteAttributesAttributeId) | **DELETE** /attributes/{attributeId} | Delete an attribute
[**getAttributeGroups**](AttributesApi.md#getAttributeGroups) | **GET** /attribute-groups | Paginated list of Attribute Groups
[**getAttributeGroupsAttributeGroupId**](AttributesApi.md#getAttributeGroupsAttributeGroupId) | **GET** /attribute-groups/{attributeGroupId} | Get a single attribute group
[**getAttributes**](AttributesApi.md#getAttributes) | **GET** /attributes | Get Attributes
[**getAttributesAttributeId**](AttributesApi.md#getAttributesAttributeId) | **GET** /attributes/{attributeId} | Get an attribute
[**postAttributeGroups**](AttributesApi.md#postAttributeGroups) | **POST** /attribute-groups | Create an Attribute Group
[**postAttributes**](AttributesApi.md#postAttributes) | **POST** /attributes | Create Attribute
[**putAttributeGroupsAttributeGroupId**](AttributesApi.md#putAttributeGroupsAttributeGroupId) | **PUT** /attribute-groups/{attributeGroupId} | Update an attribute group
[**putAttributeGroupsReorder**](AttributesApi.md#putAttributeGroupsReorder) | **PUT** /attribute-groups/reorder | Reorder attribute groups
[**putAttributesAttributeId**](AttributesApi.md#putAttributesAttributeId) | **PUT** /attributes/{attributeId} | Update an attribute
[**putAttributesOrder**](AttributesApi.md#putAttributesOrder) | **PUT** /attributes/order | Update request to reorder attributes



## deleteAttributeGroupsAttributeGroupId

> deleteAttributeGroupsAttributeGroupId(attributeGroupId)

Delete an attribute group

Deletes an attribute group

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AttributesApi();
let attributeGroupId = "attributeGroupId_example"; // String | 
apiInstance.deleteAttributeGroupsAttributeGroupId(attributeGroupId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeGroupId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAttributesAttributeId

> deleteAttributesAttributeId(attributeId)

Delete an attribute

Delete an attribute.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AttributesApi();
let attributeId = "attributeId_example"; // String | 
apiInstance.deleteAttributesAttributeId(attributeId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttributeGroups

> AttributeGroupCollection getAttributeGroups(opts)

Paginated list of Attribute Groups

Returns a paginated list of available attribute groups

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AttributesApi();
let opts = {
  'allRecords': false, // Boolean | Will skip pagination and return all records
  'include': "include_example" // String | 
};
apiInstance.getAttributeGroups(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allRecords** | **Boolean**| Will skip pagination and return all records | [optional] [default to false]
 **include** | **String**|  | [optional] 

### Return type

[**AttributeGroupCollection**](AttributeGroupCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttributeGroupsAttributeGroupId

> AttributeGroupResponse getAttributeGroupsAttributeGroupId(attributeGroupId, opts)

Get a single attribute group

Gets a single attribute group

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AttributesApi();
let attributeGroupId = "attributeGroupId_example"; // String | 
let opts = {
  'include': 56 // Number | 
};
apiInstance.getAttributeGroupsAttributeGroupId(attributeGroupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeGroupId** | **String**|  | 
 **include** | **Number**|  | [optional] 

### Return type

[**AttributeGroupResponse**](AttributeGroupResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttributes

> AttributeCollection getAttributes()

Get Attributes

Return a paged array of attributes

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AttributesApi();
apiInstance.getAttributes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AttributeCollection**](AttributeCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttributesAttributeId

> AttributeResponse getAttributesAttributeId(attributeId, opts)

Get an attribute

Returns an attribute from a given ID.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AttributesApi();
let attributeId = "attributeId_example"; // String | 
let opts = {
  'include': "include_example" // String | 
};
apiInstance.getAttributesAttributeId(attributeId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeId** | **String**|  | 
 **include** | **String**|  | [optional] 

### Return type

[**AttributeResponse**](AttributeResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postAttributeGroups

> AttributeGroupResponse postAttributeGroups(opts)

Create an Attribute Group

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AttributesApi();
let opts = {
  'name': new GetcandyJs.CreateAttributeGroupBodyName() // CreateAttributeGroupBodyName | 
};
apiInstance.postAttributeGroups(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**CreateAttributeGroupBodyName**](CreateAttributeGroupBodyName.md)|  | [optional] 

### Return type

[**AttributeGroupResponse**](AttributeGroupResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## postAttributes

> AttributeResponse postAttributes(opts)

Create Attribute

Create a new attribute

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AttributesApi();
let opts = {
  'inlineObject3': new GetcandyJs.InlineObject3() // InlineObject3 | 
};
apiInstance.postAttributes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | [optional] 

### Return type

[**AttributeResponse**](AttributeResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putAttributeGroupsAttributeGroupId

> AttributeGroupResponse putAttributeGroupsAttributeGroupId(attributeGroupId, opts)

Update an attribute group

Updates an attribute group.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AttributesApi();
let attributeGroupId = "attributeGroupId_example"; // String | 
let opts = {
  'attributeGroup': new GetcandyJs.AttributeGroup() // AttributeGroup | 
};
apiInstance.putAttributeGroupsAttributeGroupId(attributeGroupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeGroupId** | **String**|  | 
 **attributeGroup** | [**AttributeGroup**](AttributeGroup.md)|  | [optional] 

### Return type

[**AttributeGroupResponse**](AttributeGroupResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putAttributeGroupsReorder

> putAttributeGroupsReorder(opts)

Reorder attribute groups

Sends a request to reorder the attribute groups in the system

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AttributesApi();
let opts = {
  'attributesReorderBody': {"groups":{"vokq5kmj":1,"mqkj8wyj":2}} // AttributesReorderBody | 
};
apiInstance.putAttributeGroupsReorder(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributesReorderBody** | [**AttributesReorderBody**](AttributesReorderBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putAttributesAttributeId

> AttributeResponse putAttributesAttributeId(attributeId, opts)

Update an attribute

Updates an attribute from a given ID.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AttributesApi();
let attributeId = "attributeId_example"; // String | 
let opts = {
  'attribute': new GetcandyJs.Attribute() // Attribute | 
};
apiInstance.putAttributesAttributeId(attributeId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeId** | **String**|  | 
 **attribute** | [**Attribute**](Attribute.md)|  | [optional] 

### Return type

[**AttributeResponse**](AttributeResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putAttributesOrder

> putAttributesOrder(opts)

Update request to reorder attributes

Allows you to reorder a target category in relation to another.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AttributesApi();
let opts = {
  'attributesReorderBody': new GetcandyJs.AttributesReorderBody() // AttributesReorderBody | 
};
apiInstance.putAttributesOrder(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributesReorderBody** | [**AttributesReorderBody**](AttributesReorderBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

