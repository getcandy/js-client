# @GetcandyJsClient.UsersApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUsersUserId**](UsersApi.md#deleteUsersUserId) | **DELETE** /users/{userId} | 
[**getUsers**](UsersApi.md#getUsers) | **GET** /users | Get users
[**getUsersCurrent**](UsersApi.md#getUsersCurrent) | **GET** /users/current | Get the current user
[**getUsersUserId**](UsersApi.md#getUsersUserId) | **GET** /users/{userId} | Get user
[**postAccountPassword**](UsersApi.md#postAccountPassword) | **POST** /account/password | Reset  password
[**postUsers**](UsersApi.md#postUsers) | **POST** /users | Create user
[**putUsersUserId**](UsersApi.md#putUsersUserId) | **PUT** /users/{userId} | 



## deleteUsersUserId

> deleteUsersUserId(userId)



Delete a user by their given ID.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';

let apiInstance = new @GetcandyJsClient.UsersApi();
let userId = "userId_example"; // String | 
apiInstance.deleteUsersUserId(userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsers

> UserCollection getUsers()

Get users

Get a paginated list of users.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.UsersApi();
apiInstance.getUsers().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserCollection**](UserCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsersCurrent

> UserResponse getUsersCurrent()

Get the current user

Returns the user associated to the access token.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.UsersApi();
apiInstance.getUsersCurrent().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsersUserId

> UserResponse getUsersUserId(userId)

Get user

Get a user by their given ID.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.UsersApi();
let userId = "userId_example"; // String | 
apiInstance.getUsersUserId(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postAccountPassword

> Message postAccountPassword(opts)

Reset  password

Allows the current user to update their password.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.UsersApi();
let opts = {
  'accountPasswordResetBody': new @GetcandyJsClient.AccountPasswordResetBody() // AccountPasswordResetBody | 
};
apiInstance.postAccountPassword(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountPasswordResetBody** | [**AccountPasswordResetBody**](AccountPasswordResetBody.md)|  | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUsers

> UserResponse postUsers(opts)

Create user

Create a new user in the system

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';
let defaultClient = @GetcandyJsClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @GetcandyJsClient.UsersApi();
let opts = {
  'inlineObject40': new @GetcandyJsClient.InlineObject40() // InlineObject40 | 
};
apiInstance.postUsers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject40** | [**InlineObject40**](InlineObject40.md)|  | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putUsersUserId

> UserResponse putUsersUserId(userId, opts)



Updates a user record from their ID.

### Example

```javascript
import @GetcandyJsClient from '@getcandy/js-client';

let apiInstance = new @GetcandyJsClient.UsersApi();
let userId = "userId_example"; // String | 
let opts = {
  'inlineObject41': new @GetcandyJsClient.InlineObject41() // InlineObject41 | 
};
apiInstance.putUsersUserId(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **inlineObject41** | [**InlineObject41**](InlineObject41.md)|  | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

