# @GetcandyJsClient.TagsApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTagsTagId**](TagsApi.md#deleteTagsTagId) | **DELETE** /tags/{tagId} | Delete a tag
[**getTags**](TagsApi.md#getTags) | **GET** /tags | Get all tags
[**getTagsTagId**](TagsApi.md#getTagsTagId) | **GET** /tags/{tagId} | Get a tag
[**postTags**](TagsApi.md#postTags) | **POST** /tags | 
[**putTagsTagId**](TagsApi.md#putTagsTagId) | **PUT** /tags/{tagId} | Update a tag



## deleteTagsTagId

> deleteTagsTagId(tagId)

Delete a tag

Deletes a tag by it&#39;s ID

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.TagsApi();
let tagId = "tagId_example"; // String | 
apiInstance.deleteTagsTagId(tagId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTags

> TagCollection getTags()

Get all tags

Get paginated list of tags

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.TagsApi();
apiInstance.getTags().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**TagCollection**](TagCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTagsTagId

> TagResponse getTagsTagId(tagId)

Get a tag

Gets a tag by it&#39;s ID

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.TagsApi();
let tagId = "tagId_example"; // String | 
apiInstance.getTagsTagId(tagId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**|  | 

### Return type

[**TagResponse**](TagResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postTags

> TagResponse postTags(opts)



Create a new tag

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';

let apiInstance = new @GetcandyJsClient.TagsApi();
let opts = {
  'inlineObject36': new @GetcandyJsClient.InlineObject36() // InlineObject36 | 
};
apiInstance.postTags(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject36** | [**InlineObject36**](InlineObject36.md)|  | [optional] 

### Return type

[**TagResponse**](TagResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putTagsTagId

> TagResponse putTagsTagId(tagId, opts)

Update a tag

Updates a tag by it&#39;s ID

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.TagsApi();
let tagId = "tagId_example"; // String | 
let opts = {
  'inlineObject37': new @GetcandyJsClient.InlineObject37() // InlineObject37 | 
};
apiInstance.putTagsTagId(tagId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**|  | 
 **inlineObject37** | [**InlineObject37**](InlineObject37.md)|  | [optional] 

### Return type

[**TagResponse**](TagResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

