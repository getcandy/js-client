# GetcandyJs.CustomersApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomersGroups**](CustomersApi.md#getCustomersGroups) | **GET** /customers/groups | Get Customer Groups
[**getUsersFields**](CustomersApi.md#getUsersFields) | **GET** /users/fields | Get custom user fields



## getCustomersGroups

> CustomerGroupCollection getCustomersGroups(opts)

Get Customer Groups

Return a paginated CustomerGroup response

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.CustomersApi();
let opts = {
  'include': "include_example" // String | 
};
apiInstance.getCustomersGroups(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include** | **String**|  | [optional] 

### Return type

[**CustomerGroupCollection**](CustomerGroupCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsersFields

> UserFieldsResponse getUsersFields()

Get custom user fields

This endpoint returns any available user fields which have been defined in the getcandy config.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';

let apiInstance = new GetcandyJs.CustomersApi();
apiInstance.getUsersFields().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserFieldsResponse**](UserFieldsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

