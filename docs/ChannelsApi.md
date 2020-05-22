# GetcandyJs.ChannelsApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteChannelsChannelId**](ChannelsApi.md#deleteChannelsChannelId) | **DELETE** /channels/{channelId} | Delete the channel resource
[**getChannels**](ChannelsApi.md#getChannels) | **GET** /channels | Get all channels
[**getChannelsChannelId**](ChannelsApi.md#getChannelsChannelId) | **GET** /channels/{channelId} | Get the channel resource
[**postChannels**](ChannelsApi.md#postChannels) | **POST** /channels | Create a new channel
[**putChannelsChannelId**](ChannelsApi.md#putChannelsChannelId) | **PUT** /channels/{channelId} | Update the channel resource



## deleteChannelsChannelId

> deleteChannelsChannelId(channelId)

Delete the channel resource

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ChannelsApi();
let channelId = "channelId_example"; // String | 
apiInstance.deleteChannelsChannelId(channelId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getChannels

> ChannelCollection getChannels(opts)

Get all channels

Gets a paginated list of all channel

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ChannelsApi();
let opts = {
  'includes': "includes_example", // String | Comma separated includes for the resource
  'perPage': 3.4 // Number | How many results per page
};
apiInstance.getChannels(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includes** | **String**| Comma separated includes for the resource | [optional] 
 **perPage** | **Number**| How many results per page | [optional] 

### Return type

[**ChannelCollection**](ChannelCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelsChannelId

> ChannelResponse getChannelsChannelId(channelId, opts)

Get the channel resource

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ChannelsApi();
let channelId = "channelId_example"; // String | 
let opts = {
  'includes': "includes_example" // String | 
};
apiInstance.getChannelsChannelId(channelId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | **String**|  | 
 **includes** | **String**|  | [optional] 

### Return type

[**ChannelResponse**](ChannelResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postChannels

> Channel postChannels(opts)

Create a new channel

Create a new channel resource

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ChannelsApi();
let opts = {
  'handle': "handle_example", // String | 
  'name': "name_example" // String | 
};
apiInstance.postChannels(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **handle** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## putChannelsChannelId

> ChannelResponse putChannelsChannelId(channelId)

Update the channel resource

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ChannelsApi();
let channelId = "channelId_example"; // String | 
apiInstance.putChannelsChannelId(channelId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | **String**|  | 

### Return type

[**ChannelResponse**](ChannelResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

