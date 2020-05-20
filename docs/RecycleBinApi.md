# @GetcandyJsClient.RecycleBinApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRecycleBinItemId**](RecycleBinApi.md#deleteRecycleBinItemId) | **DELETE** /recycle-bin/{itemId} | Delete item
[**getRecycleBin**](RecycleBinApi.md#getRecycleBin) | **GET** /recycle-bin | Get records
[**getRecycleBinItemId**](RecycleBinApi.md#getRecycleBinItemId) | **GET** /recycle-bin/{itemId} | Get item



## deleteRecycleBinItemId

> deleteRecycleBinItemId(itemId)

Delete item

Remove a recycle bin item  &gt; This will also hard delete the model associated with the recycle bin item, this action is not reversable and will cause loss of data.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.RecycleBinApi();
let itemId = "itemId_example"; // String | 
apiInstance.deleteRecycleBinItemId(itemId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRecycleBin

> RecycleBinCollection getRecycleBin()

Get records

Returns a paginated list of all recycle bin items.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.RecycleBinApi();
apiInstance.getRecycleBin().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RecycleBinCollection**](RecycleBinCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRecycleBinItemId

> RecycleBinResponse getRecycleBinItemId(itemId)

Get item

Retrieves a recycle bin item.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.RecycleBinApi();
let itemId = "itemId_example"; // String | 
apiInstance.getRecycleBinItemId(itemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **String**|  | 

### Return type

[**RecycleBinResponse**](RecycleBinResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

