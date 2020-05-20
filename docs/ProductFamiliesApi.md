# @GetcandyJsClient.ProductFamiliesApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProductFamiliesProductFamilyId**](ProductFamiliesApi.md#deleteProductFamiliesProductFamilyId) | **DELETE** /product-families/{productFamilyId} | Delete product family
[**getProductFamilies**](ProductFamiliesApi.md#getProductFamilies) | **GET** /product-families | Get product families
[**getProductFamiliesProductFamilyId**](ProductFamiliesApi.md#getProductFamiliesProductFamilyId) | **GET** /product-families/{productFamilyId} | Get a product family
[**postProductFamilies**](ProductFamiliesApi.md#postProductFamilies) | **POST** /product-families | Create product family
[**putProductFamiliesProductFamilyId**](ProductFamiliesApi.md#putProductFamiliesProductFamilyId) | **PUT** /product-families/{productFamilyId} | Update product family



## deleteProductFamiliesProductFamilyId

> deleteProductFamiliesProductFamilyId(productFamilyId)

Delete product family

Sends a request to delete a product family

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.ProductFamiliesApi();
let productFamilyId = "productFamilyId_example"; // String | 
apiInstance.deleteProductFamiliesProductFamilyId(productFamilyId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFamilyId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductFamilies

> ProductFamilyCollection getProductFamilies(opts)

Get product families

Returns a paginated list of all product families.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.ProductFamiliesApi();
let opts = {
  'includes': "includes_example" // String | Define included relationships
};
apiInstance.getProductFamilies(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includes** | **String**| Define included relationships | [optional] 

### Return type

[**ProductFamilyCollection**](ProductFamilyCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductFamiliesProductFamilyId

> ProductFamilyResponse getProductFamiliesProductFamilyId(productFamilyId, opts)

Get a product family

Returns a single product family based on ID.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.ProductFamiliesApi();
let productFamilyId = "productFamilyId_example"; // String | 
let opts = {
  'includes': "includes_example" // String | 
};
apiInstance.getProductFamiliesProductFamilyId(productFamilyId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFamilyId** | **String**|  | 
 **includes** | **String**|  | [optional] 

### Return type

[**ProductFamilyResponse**](ProductFamilyResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postProductFamilies

> ProductFamilyResponse postProductFamilies()

Create product family

Create a new product family.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.ProductFamiliesApi();
apiInstance.postProductFamilies().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ProductFamilyResponse**](ProductFamilyResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putProductFamiliesProductFamilyId

> ProductFamilyResponse putProductFamiliesProductFamilyId(productFamilyId, opts)

Update product family

Update a product family

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.ProductFamiliesApi();
let productFamilyId = "productFamilyId_example"; // String | 
let opts = {
  'inlineObject28': new @GetcandyJsClient.InlineObject28() // InlineObject28 | 
};
apiInstance.putProductFamiliesProductFamilyId(productFamilyId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFamilyId** | **String**|  | 
 **inlineObject28** | [**InlineObject28**](InlineObject28.md)|  | [optional] 

### Return type

[**ProductFamilyResponse**](ProductFamilyResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

