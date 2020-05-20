# @GetcandyJsClient.RoutesApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRoutes**](RoutesApi.md#getRoutes) | **GET** /routes | Get routes
[**getRoutesSlug**](RoutesApi.md#getRoutesSlug) | **GET** /routes/{slug} | Get route



## getRoutes

> RouteCollection getRoutes()

Get routes

Returns paginated list of routes.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.RoutesApi();
apiInstance.getRoutes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RouteCollection**](RouteCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoutesSlug

> RouteResponse getRoutesSlug(slug, opts)

Get route

Retrieve a route by it&#39;s slug.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.RoutesApi();
let slug = "slug_example"; // String | 
let opts = {
  'include': "include_example" // String | 
};
apiInstance.getRoutesSlug(slug, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**|  | 
 **include** | **String**|  | [optional] 

### Return type

[**RouteResponse**](RouteResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

