# GetcandyJs.PaymentsApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUsersPaymentsId**](PaymentsApi.md#deleteUsersPaymentsId) | **DELETE** /users/payments/{id} | Delete reusable payment
[**getPaymentsProvider**](PaymentsApi.md#getPaymentsProvider) | **GET** /payments/provider | Get Payment Provider
[**postPayments3dSecure**](PaymentsApi.md#postPayments3dSecure) | **POST** /payments/3d-secure | Threed Secure Payment
[**postPaymentsIdRefund**](PaymentsApi.md#postPaymentsIdRefund) | **POST** /payments/{transactionId}/refund | Refund a payment
[**postPaymentsTransactionIdVoid**](PaymentsApi.md#postPaymentsTransactionIdVoid) | **POST** /payments/{transactionId}/void | Void a payment



## deleteUsersPaymentsId

> deleteUsersPaymentsId(id)

Delete reusable payment

Removes a users reusable payment method. This can be invoked by any admin user and also the user who the record belongs to.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.PaymentsApi();
let id = "id_example"; // String | 
apiInstance.deleteUsersPaymentsId(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPaymentsProvider

> PaymentProviderResponse getPaymentsProvider()

Get Payment Provider

Gets the default, configured payment provider.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.PaymentsApi();
apiInstance.getPaymentsProvider().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PaymentProviderResponse**](PaymentProviderResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postPayments3dSecure

> OrderResponse postPayments3dSecure(opts)

Threed Secure Payment

Validate a ThreeD secure request and process the transaaction, if your payment provider supports it.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.PaymentsApi();
let opts = {
  'inlineObject15': new GetcandyJs.InlineObject15() // InlineObject15 | 
};
apiInstance.postPayments3dSecure(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject15** | [**InlineObject15**](InlineObject15.md)|  | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postPaymentsIdRefund

> TransactionResponse postPaymentsIdRefund(transactionId, opts)

Refund a payment

Refund a transaction

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.PaymentsApi();
let transactionId = "transactionId_example"; // String | 
let opts = {
  'amount': 56, // Number | If left blank, the full amount will be refunded
  'notes': "notes_example" // String | 
};
apiInstance.postPaymentsIdRefund(transactionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**|  | 
 **amount** | **Number**| If left blank, the full amount will be refunded | [optional] 
 **notes** | **String**|  | [optional] 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## postPaymentsTransactionIdVoid

> TransactionResponse postPaymentsTransactionIdVoid(transactionId)

Void a payment

Voids a payment in the system.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.PaymentsApi();
let transactionId = "transactionId_example"; // String | 
apiInstance.postPaymentsTransactionIdVoid(transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**|  | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

