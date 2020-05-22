# GetcandyJs.DiscountsApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDiscountsDiscountId**](DiscountsApi.md#deleteDiscountsDiscountId) | **DELETE** /discounts/{discountId} | Delete Discount
[**getDiscounts**](DiscountsApi.md#getDiscounts) | **GET** /discounts | Get Discounts
[**getDiscountsDiscountId**](DiscountsApi.md#getDiscountsDiscountId) | **GET** /discounts/{discountId} | Get a Discount
[**postDiscounts**](DiscountsApi.md#postDiscounts) | **POST** /discounts | Create Discount
[**putDiscountsDiscountId**](DiscountsApi.md#putDiscountsDiscountId) | **PUT** /discounts/{discountId} | Update Discount



## deleteDiscountsDiscountId

> deleteDiscountsDiscountId(discountId)

Delete Discount

Deletes a Discount

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.DiscountsApi();
let discountId = "discountId_example"; // String | 
apiInstance.deleteDiscountsDiscountId(discountId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDiscounts

> DiscountCollection getDiscounts()

Get Discounts

Returns a paginated list of Discounts

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.DiscountsApi();
apiInstance.getDiscounts().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**DiscountCollection**](DiscountCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDiscountsDiscountId

> DiscountResponse getDiscountsDiscountId(discountId, opts)

Get a Discount

Returns a Discount by it&#39;s ID.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.DiscountsApi();
let discountId = "discountId_example"; // String | 
let opts = {
  'include': "include_example" // String | 
};
apiInstance.getDiscountsDiscountId(discountId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**|  | 
 **include** | **String**|  | [optional] 

### Return type

[**DiscountResponse**](DiscountResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postDiscounts

> DiscountResponse postDiscounts(opts)

Create Discount

Create a new Discount.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.DiscountsApi();
let opts = {
  'inlineObject9': new GetcandyJs.InlineObject9() // InlineObject9 | 
};
apiInstance.postDiscounts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject9** | [**InlineObject9**](InlineObject9.md)|  | [optional] 

### Return type

[**DiscountResponse**](DiscountResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putDiscountsDiscountId

> DiscountResponse putDiscountsDiscountId(discountId, opts)

Update Discount

Updates a Discount

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.DiscountsApi();
let discountId = "discountId_example"; // String | 
let opts = {
  'inlineObject10': new GetcandyJs.InlineObject10() // InlineObject10 | 
};
apiInstance.putDiscountsDiscountId(discountId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**|  | 
 **inlineObject10** | [**InlineObject10**](InlineObject10.md)|  | [optional] 

### Return type

[**DiscountResponse**](DiscountResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

