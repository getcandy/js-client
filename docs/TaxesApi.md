# GetcandyJs.TaxesApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTaxesTaxId**](TaxesApi.md#deleteTaxesTaxId) | **DELETE** /taxes/{taxId} | Delete tax record
[**getTaxes**](TaxesApi.md#getTaxes) | **GET** /taxes | Get taxes
[**getTaxesTaxId**](TaxesApi.md#getTaxesTaxId) | **GET** /taxes/{taxId} | Get tax record
[**postTaxes**](TaxesApi.md#postTaxes) | **POST** /taxes | Create tax
[**putTaxesTaxId**](TaxesApi.md#putTaxesTaxId) | **PUT** /taxes/{taxId} | Update tax record



## deleteTaxesTaxId

> deleteTaxesTaxId(taxId)

Delete tax record

Delete a tax record by it&#39;s ID.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.TaxesApi();
let taxId = "taxId_example"; // String | 
apiInstance.deleteTaxesTaxId(taxId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaxes

> TaxCollection getTaxes()

Get taxes

Get a paginated list of taxes

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.TaxesApi();
apiInstance.getTaxes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**TaxCollection**](TaxCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaxesTaxId

> TaxResponse getTaxesTaxId(taxId)

Get tax record

Get a tax record by it&#39;s ID

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.TaxesApi();
let taxId = "taxId_example"; // String | 
apiInstance.getTaxesTaxId(taxId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxId** | **String**|  | 

### Return type

[**TaxResponse**](TaxResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postTaxes

> TaxResponse postTaxes(opts)

Create tax

Create a new tax resource.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.TaxesApi();
let opts = {
  'inlineObject38': new GetcandyJs.InlineObject38() // InlineObject38 | 
};
apiInstance.postTaxes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject38** | [**InlineObject38**](InlineObject38.md)|  | [optional] 

### Return type

[**TaxResponse**](TaxResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putTaxesTaxId

> TaxResponse putTaxesTaxId(taxId, opts)

Update tax record

Update a tax record by it&#39;s ID

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.TaxesApi();
let taxId = "taxId_example"; // String | 
let opts = {
  'inlineObject39': new GetcandyJs.InlineObject39() // InlineObject39 | 
};
apiInstance.putTaxesTaxId(taxId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxId** | **String**|  | 
 **inlineObject39** | [**InlineObject39**](InlineObject39.md)|  | [optional] 

### Return type

[**TaxResponse**](TaxResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

