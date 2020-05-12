# GetcandyJs.VersioningApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postVersionsModelIdRestore**](VersioningApi.md#postVersionsModelIdRestore) | **POST** /versions/{modelId}/restore | Restore model



## postVersionsModelIdRestore

> VersionResponse postVersionsModelIdRestore(modelId)

Restore model

Restores a model version

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.VersioningApi();
let modelId = "modelId_example"; // String | 
apiInstance.postVersionsModelIdRestore(modelId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **String**|  | 

### Return type

[**VersionResponse**](VersionResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

