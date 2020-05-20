# @GetcandyJsClient.ProductVariantsApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductsVariants**](ProductVariantsApi.md#getProductsVariants) | **GET** /products/variants | Get Product Variants
[**getProductsVariantsProductVariantId**](ProductVariantsApi.md#getProductsVariantsProductVariantId) | **GET** /products/variants/{productVariantId} | Get Product Variant
[**putProductsVariantsProductVariantIdInventory**](ProductVariantsApi.md#putProductsVariantsProductVariantIdInventory) | **PUT** /products/variants/{productVariantId}/inventory | Update ProductVariant Inventory



## getProductsVariants

> ProductVariantCollection getProductsVariants(opts)

Get Product Variants

Get a paginated list of all product variants in the system

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.ProductVariantsApi();
let opts = {
  'include': "include_example" // String | 
};
apiInstance.getProductsVariants(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include** | **String**|  | [optional] 

### Return type

[**ProductVariantCollection**](ProductVariantCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductsVariantsProductVariantId

> ProductVariantResponse getProductsVariantsProductVariantId(productVariantId)

Get Product Variant

Get a product variant by it&#39;s ID

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.ProductVariantsApi();
let productVariantId = "productVariantId_example"; // String | 
apiInstance.getProductsVariantsProductVariantId(productVariantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productVariantId** | **String**|  | 

### Return type

[**ProductVariantResponse**](ProductVariantResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putProductsVariantsProductVariantIdInventory

> ProductVariantResponse putProductsVariantsProductVariantIdInventory(productVariantId, opts)

Update ProductVariant Inventory

Request to update a product variants inventory.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.ProductVariantsApi();
let productVariantId = "productVariantId_example"; // String | 
let opts = {
  'inlineObject17': new @GetcandyJsClient.InlineObject17() // InlineObject17 | 
};
apiInstance.putProductsVariantsProductVariantIdInventory(productVariantId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productVariantId** | **String**|  | 
 **inlineObject17** | [**InlineObject17**](InlineObject17.md)|  | [optional] 

### Return type

[**ProductVariantResponse**](ProductVariantResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

