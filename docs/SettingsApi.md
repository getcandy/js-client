# @GetcandyJsClient.SettingsApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSettings**](SettingsApi.md#getSettings) | **GET** /settings | Get settings
[**getSettingsHandle**](SettingsApi.md#getSettingsHandle) | **GET** /settings/{handle} | Get setting



## getSettings

> SettingCollection getSettings()

Get settings

Retrieves settings that have been defined in the database.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.SettingsApi();
apiInstance.getSettings().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SettingCollection**](SettingCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSettingsHandle

> SettingResponse getSettingsHandle(handle)

Get setting

Get specific settings.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.SettingsApi();
let handle = "handle_example"; // String | 
apiInstance.getSettingsHandle(handle).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **handle** | **String**|  | 

### Return type

[**SettingResponse**](SettingResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

