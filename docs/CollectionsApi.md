# @GetcandyJsClient.CollectionsApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCollectionsCollectionId**](CollectionsApi.md#deleteCollectionsCollectionId) | **DELETE** /collections/{collectionId} | Delete Collection
[**getCollections**](CollectionsApi.md#getCollections) | **GET** /collections | Get Collections
[**getCollectionsCollectionId**](CollectionsApi.md#getCollectionsCollectionId) | **GET** /collections/{collectionId} | Single Collection
[**postCollections**](CollectionsApi.md#postCollections) | **POST** /collections | Create Collection
[**postCollectionsCollectionIdProducts**](CollectionsApi.md#postCollectionsCollectionIdProducts) | **POST** /collections/{collectionId}/products | Update a collection&#39;s products
[**postCollectionsCollectionRoutes**](CollectionsApi.md#postCollectionsCollectionRoutes) | **POST** /collections/{collectionId}/routes | Update a collection&#39;s routes
[**putCollectionsCollectionId**](CollectionsApi.md#putCollectionsCollectionId) | **PUT** /collections/{collectionId} | Update Collection



## deleteCollectionsCollectionId

> deleteCollectionsCollectionId(collectionId)

Delete Collection

Delete a Collection by its ID

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.CollectionsApi();
let collectionId = "collectionId_example"; // String | 
apiInstance.deleteCollectionsCollectionId(collectionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCollections

> CollectionCollection getCollections(opts)

Get Collections

Get a paginated response of collections.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.CollectionsApi();
let opts = {
  'include': "include_example", // String | 
  'perPage': "'25'", // String | 
  'fullResponse': "fullResponse_example", // String | 
  'sort': "sort_example", // String | 
  'page': "page_example" // String | 
};
apiInstance.getCollections(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include** | **String**|  | [optional] 
 **perPage** | **String**|  | [optional] [default to &#39;25&#39;]
 **fullResponse** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 

### Return type

[**CollectionCollection**](CollectionCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollectionsCollectionId

> CollectionResponse getCollectionsCollectionId(collectionId, opts)

Single Collection

Get a single Collection by its ID

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.CollectionsApi();
let collectionId = "collectionId_example"; // String | 
let opts = {
  'include': "include_example" // String | 
};
apiInstance.getCollectionsCollectionId(collectionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**|  | 
 **include** | **String**|  | [optional] 

### Return type

[**CollectionResponse**](CollectionResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCollections

> CollectionResponse postCollections(opts)

Create Collection

Create a new collection.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.CollectionsApi();
let opts = {
  'inlineObject7': new @GetcandyJsClient.InlineObject7() // InlineObject7 | 
};
apiInstance.postCollections(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject7** | [**InlineObject7**](InlineObject7.md)|  | [optional] 

### Return type

[**CollectionResponse**](CollectionResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCollectionsCollectionIdProducts

> CategoryResponse postCollectionsCollectionIdProducts(collectionId, opts)

Update a collection&#39;s products

Syncs products with a collection.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.CollectionsApi();
let collectionId = "collectionId_example"; // String | 
let opts = {
  'inlineObject6': new @GetcandyJsClient.InlineObject6() // InlineObject6 | 
};
apiInstance.postCollectionsCollectionIdProducts(collectionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**|  | 
 **inlineObject6** | [**InlineObject6**](InlineObject6.md)|  | [optional] 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCollectionsCollectionRoutes

> CategoryResponse postCollectionsCollectionRoutes(collectionId, opts)

Update a collection&#39;s routes

This request will allow you to attach routes to a collection

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.CollectionsApi();
let collectionId = "collectionId_example"; // String | 
let opts = {
  'inlineObject5': new @GetcandyJsClient.InlineObject5() // InlineObject5 | 
};
apiInstance.postCollectionsCollectionRoutes(collectionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**|  | 
 **inlineObject5** | [**InlineObject5**](InlineObject5.md)|  | [optional] 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putCollectionsCollectionId

> CollectionResponse putCollectionsCollectionId(collectionId, opts)

Update Collection

Update a Collection by its ID.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.CollectionsApi();
let collectionId = "collectionId_example"; // String | 
let opts = {
  'inlineObject8': new @GetcandyJsClient.InlineObject8() // InlineObject8 | 
};
apiInstance.putCollectionsCollectionId(collectionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**|  | 
 **inlineObject8** | [**InlineObject8**](InlineObject8.md)|  | [optional] 

### Return type

[**CollectionResponse**](CollectionResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

