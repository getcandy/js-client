# GetcandyJs.LanguagesApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteLanguagesLanguageId**](LanguagesApi.md#deleteLanguagesLanguageId) | **DELETE** /languages/{languageId} | Delete Language
[**getLanguages**](LanguagesApi.md#getLanguages) | **GET** /languages | Get Languages
[**getLanguagesLanguageId**](LanguagesApi.md#getLanguagesLanguageId) | **GET** /languages/{languageId} | Get Language
[**postLanguages**](LanguagesApi.md#postLanguages) | **POST** /languages | Create Language
[**putLanguagesLanguageId**](LanguagesApi.md#putLanguagesLanguageId) | **PUT** /languages/{languageId} | Update Language



## deleteLanguagesLanguageId

> deleteLanguagesLanguageId(languageId)

Delete Language

Delete a Language by its ID

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.LanguagesApi();
let languageId = "languageId_example"; // String | 
apiInstance.deleteLanguagesLanguageId(languageId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **languageId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLanguages

> LanguageCollection getLanguages()

Get Languages

Returns a paginated list of Languages

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.LanguagesApi();
apiInstance.getLanguages().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LanguageCollection**](LanguageCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLanguagesLanguageId

> LanguageResponse getLanguagesLanguageId(languageId)

Get Language

Get a Language by ID

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.LanguagesApi();
let languageId = "languageId_example"; // String | 
apiInstance.getLanguagesLanguageId(languageId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **languageId** | **String**|  | 

### Return type

[**LanguageResponse**](LanguageResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postLanguages

> LanguageResponse postLanguages(opts)

Create Language

Create a new language

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.LanguagesApi();
let opts = {
  'inlineObject11': new GetcandyJs.InlineObject11() // InlineObject11 | 
};
apiInstance.postLanguages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject11** | [**InlineObject11**](InlineObject11.md)|  | [optional] 

### Return type

[**LanguageResponse**](LanguageResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putLanguagesLanguageId

> LanguageResponse putLanguagesLanguageId(languageId, opts)

Update Language

Update a Language using it&#39;s ID

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.LanguagesApi();
let languageId = "languageId_example"; // String | 
let opts = {
  'language': new GetcandyJs.Language() // Language | 
};
apiInstance.putLanguagesLanguageId(languageId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **languageId** | **String**|  | 
 **language** | [**Language**](Language.md)|  | [optional] 

### Return type

[**LanguageResponse**](LanguageResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

