# @GetcandyJsClient.SearchApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSavedSearchesSavedSearchId**](SearchApi.md#deleteSavedSearchesSavedSearchId) | **DELETE** /saved-searches/{savedSearchId} | Delete saved search
[**getSavedSearches**](SearchApi.md#getSavedSearches) | **GET** /saved-searches/product | Get saved searches
[**getSearch**](SearchApi.md#getSearch) | **GET** /search | Search GetCandy



## deleteSavedSearchesSavedSearchId

> deleteSavedSearchesSavedSearchId(savedSearchId)

Delete saved search

Delete a saved search entry by ID.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';

let apiInstance = new @GetcandyJsClient.SearchApi();
let savedSearchId = "savedSearchId_example"; // String | 
apiInstance.deleteSavedSearchesSavedSearchId(savedSearchId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **savedSearchId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSavedSearches

> SavedSearchCollection getSavedSearches()

Get saved searches

Returns a list of current saved searches for products

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.SearchApi();
apiInstance.getSavedSearches().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SavedSearchCollection**](SavedSearchCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSearch

> Search getSearch(opts)

Search GetCandy

Search across products or categories

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.SearchApi();
let opts = {
  'channel': "channel_example", // String | 
  'category': "category_example", // String | 
  'page': 56, // Number | 
  'searchType': "'product'", // String | 
  'keywords': "keywords_example", // String | 
  'rank': true, // Boolean | Whether to rank results based on config
  'idsOnly': "'false'", // String | Will only return result ID's, good for performance
  'include': "include_example", // String | 
  'sort': "sort_example" // String | 
};
apiInstance.getSearch(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel** | **String**|  | [optional] 
 **category** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **searchType** | **String**|  | [optional] [default to &#39;product&#39;]
 **keywords** | **String**|  | [optional] 
 **rank** | **Boolean**| Whether to rank results based on config | [optional] 
 **idsOnly** | **String**| Will only return result ID&#39;s, good for performance | [optional] [default to &#39;false&#39;]
 **include** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 

### Return type

[**Search**](Search.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

