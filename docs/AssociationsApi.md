# GetcandyJs.AssociationsApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAssociationsGroups**](AssociationsApi.md#getAssociationsGroups) | **GET** /associations/groups | Paginated array of association groups



## getAssociationsGroups

> AssociationGroupCollection getAssociationsGroups()

Paginated array of association groups

Returns a paginated response of association groups available in the system

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AssociationsApi();
apiInstance.getAssociationsGroups().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AssociationGroupCollection**](AssociationGroupCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

