# GetcandyJs.BasketsApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteBasketLines**](BasketsApi.md#deleteBasketLines) | **DELETE** /basket-lines | Delete basket lines
[**deleteBasketsBasketId**](BasketsApi.md#deleteBasketsBasketId) | **DELETE** /baskets/{basketId} | Delete a basket by ID
[**deleteBasketsBasketIdDiscounts**](BasketsApi.md#deleteBasketsBasketIdDiscounts) | **DELETE** /baskets/{basketId}/discounts | Remove discount
[**deleteBasketsBasketIdUser**](BasketsApi.md#deleteBasketsBasketIdUser) | **DELETE** /baskets/{basketId}/user | Remove user
[**getBaskets**](BasketsApi.md#getBaskets) | **GET** /baskets | Get baskets
[**getBasketsBasketId**](BasketsApi.md#getBasketsBasketId) | **GET** /baskets/{basketId} | Get basket
[**getBasketsCurrent**](BasketsApi.md#getBasketsCurrent) | **GET** /baskets/current | Get the current basket for a user
[**getBasketsSaved**](BasketsApi.md#getBasketsSaved) | **GET** /baskets/saved | Get a users saved baskets
[**postBasketLines**](BasketsApi.md#postBasketLines) | **POST** /basket-lines | Create basket lines
[**postBaskets**](BasketsApi.md#postBaskets) | **POST** /baskets | Create Basket
[**postBasketsBasketIdClaim**](BasketsApi.md#postBasketsBasketIdClaim) | **POST** /baskets/{basketId}/claim | Allow a user to claim a basket
[**postBasketsBasketIdMeta**](BasketsApi.md#postBasketsBasketIdMeta) | **POST** /baskets/{basketId}/meta | Add meta information
[**postBasketsBasketIdSave**](BasketsApi.md#postBasketsBasketIdSave) | **POST** /baskets/{basketId}/save | Save a basket for a user
[**postBasketsResolve**](BasketsApi.md#postBasketsResolve) | **POST** /baskets/resolve | Resolve a basket
[**putBasketLinesBasketLineId**](BasketsApi.md#putBasketLinesBasketLineId) | **PUT** /basket-lines/{basketLineId} | Update basket line
[**putBasketLinesBasketLineIdAdd**](BasketsApi.md#putBasketLinesBasketLineIdAdd) | **PUT** /basket-lines/{basketLineId}/add | Update basket line quantity
[**putBasketLinesBasketLineIdRemove**](BasketsApi.md#putBasketLinesBasketLineIdRemove) | **PUT** /basket-lines/{basketLineId}/remove | Remove basket line quantity
[**putBasketsBasketId**](BasketsApi.md#putBasketsBasketId) | **PUT** /baskets/{basketId} | Update a basket by ID
[**putBasketsBasketIdUser**](BasketsApi.md#putBasketsBasketIdUser) | **PUT** /baskets/{basketId}/user | Add user
[**putBasketsSavedBasketId**](BasketsApi.md#putBasketsSavedBasketId) | **PUT** /baskets/saved/{basketId} | Update a saved basket



## deleteBasketLines

> InlineResponse2007 deleteBasketLines()

Delete basket lines

Removes basket lines from a basket

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
apiInstance.deleteBasketLines().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteBasketsBasketId

> deleteBasketsBasketId(basketId)

Delete a basket by ID

Deletes a basket

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let basketId = "basketId_example"; // String | 
apiInstance.deleteBasketsBasketId(basketId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteBasketsBasketIdDiscounts

> deleteBasketsBasketIdDiscounts(basketId)

Remove discount

Allows a user/guest to remove a basket from their basket. Useful if you can only have one discount at a time and they wish to use a different one. 

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let basketId = "basketId_example"; // String | 
apiInstance.deleteBasketsBasketIdDiscounts(basketId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteBasketsBasketIdUser

> InlineResponse2007 deleteBasketsBasketIdUser(basketId)

Remove user

Removes a user from a basket and turns it into a guest basket  &gt; This endpoint will be deprecated in 0.3.0

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let basketId = "basketId_example"; // String | 
apiInstance.deleteBasketsBasketIdUser(basketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**|  | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBaskets

> BasketCollection getBaskets()

Get baskets

Get a paginated list of baskets

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
apiInstance.getBaskets().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**BasketCollection**](BasketCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBasketsBasketId

> BasketResponse getBasketsBasketId(basketId)

Get basket

Get a basket by it&#39;s ID

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let basketId = "basketId_example"; // String | 
apiInstance.getBasketsBasketId(basketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**|  | 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBasketsCurrent

> BasketResponse getBasketsCurrent()

Get the current basket for a user

This request will get the current active basket for a user

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
apiInstance.getBasketsCurrent().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBasketsSaved

> SavedBasketCollection getBasketsSaved()

Get a users saved baskets

Returns an authenticatd users saved baskets.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
apiInstance.getBasketsSaved().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SavedBasketCollection**](SavedBasketCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postBasketLines

> BasketResponse postBasketLines(opts)

Create basket lines

Add lines to a basket

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let opts = {
  'createBasketLinesBody': {"basket_id":"15rf2395etf34t","variants":[{"id":"534ed23ewdas","quantity":1,"meta":{"giftwrapped":true}}]} // CreateBasketLinesBody | 
};
apiInstance.postBasketLines(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBasketLinesBody** | [**CreateBasketLinesBody**](CreateBasketLinesBody.md)|  | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postBaskets

> BasketResponse postBaskets(opts)

Create Basket

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let opts = {
  'createBasketBody': new GetcandyJs.CreateBasketBody() // CreateBasketBody | 
};
apiInstance.postBaskets(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBasketBody** | [**CreateBasketBody**](CreateBasketBody.md)|  | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postBasketsBasketIdClaim

> BasketResponse postBasketsBasketIdClaim(basketId)

Allow a user to claim a basket

A user is able to \&quot;claim\&quot; a guest basket. 

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let basketId = "basketId_example"; // String | 
apiInstance.postBasketsBasketIdClaim(basketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**|  | 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postBasketsBasketIdMeta

> Basket postBasketsBasketIdMeta(basketId, opts)

Add meta information

Allows you to add custom meta information to a basket.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let basketId = "basketId_example"; // String | 
let opts = {
  'addBasketMetaBody': new GetcandyJs.AddBasketMetaBody() // AddBasketMetaBody | 
};
apiInstance.postBasketsBasketIdMeta(basketId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**|  | 
 **addBasketMetaBody** | [**AddBasketMetaBody**](AddBasketMetaBody.md)|  | [optional] 

### Return type

[**Basket**](Basket.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postBasketsBasketIdSave

> BasketResponse postBasketsBasketIdSave(basketId, opts)

Save a basket for a user

Saves a basket to a users account.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let basketId = "basketId_example"; // String | 
let opts = {
  'saveBasketBody': new GetcandyJs.SaveBasketBody() // SaveBasketBody | 
};
apiInstance.postBasketsBasketIdSave(basketId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**|  | 
 **saveBasketBody** | [**SaveBasketBody**](SaveBasketBody.md)|  | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postBasketsResolve

> BasketResponse postBasketsResolve(opts)

Resolve a basket

This endpoint is for when you want to either merge a users basket with a guest basket and then assign that new basket or associate a user to a guest basket.  If you choose not to merge a basket, their current one will be overwritten with the guest basket.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let opts = {
  'resolveBasketBody': new GetcandyJs.ResolveBasketBody() // ResolveBasketBody | 
};
apiInstance.postBasketsResolve(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resolveBasketBody** | [**ResolveBasketBody**](ResolveBasketBody.md)|  | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putBasketLinesBasketLineId

> BasketResponse putBasketLinesBasketLineId(basketLineId, opts)

Update basket line

Update a basket line based on it&#39;s ID.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let basketLineId = "basketLineId_example"; // String | 
let opts = {
  'basketLineUpdateBody': new GetcandyJs.BasketLineUpdateBody() // BasketLineUpdateBody | 
};
apiInstance.putBasketLinesBasketLineId(basketLineId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketLineId** | **String**|  | 
 **basketLineUpdateBody** | [**BasketLineUpdateBody**](BasketLineUpdateBody.md)|  | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putBasketLinesBasketLineIdAdd

> BasketResponse putBasketLinesBasketLineIdAdd(basketLineId, opts)

Update basket line quantity

Update basket line quantity

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let basketLineId = "basketLineId_example"; // String | 
let opts = {
  'basketLineUpdateBody': new GetcandyJs.BasketLineUpdateBody() // BasketLineUpdateBody | 
};
apiInstance.putBasketLinesBasketLineIdAdd(basketLineId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketLineId** | **String**|  | 
 **basketLineUpdateBody** | [**BasketLineUpdateBody**](BasketLineUpdateBody.md)|  | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putBasketLinesBasketLineIdRemove

> BasketResponse putBasketLinesBasketLineIdRemove(basketLineId, opts)

Remove basket line quantity

Removes quantity from a basket line

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let basketLineId = "basketLineId_example"; // String | 
let opts = {
  'basketLineUpdateBody': new GetcandyJs.BasketLineUpdateBody() // BasketLineUpdateBody | 
};
apiInstance.putBasketLinesBasketLineIdRemove(basketLineId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketLineId** | **String**|  | 
 **basketLineUpdateBody** | [**BasketLineUpdateBody**](BasketLineUpdateBody.md)|  | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putBasketsBasketId

> BasketResponse putBasketsBasketId(basketId)

Update a basket by ID

Updates a basket

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let basketId = "basketId_example"; // String | 
apiInstance.putBasketsBasketId(basketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**|  | 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putBasketsBasketIdUser

> Basket putBasketsBasketIdUser(basketId)

Add user

Attach a user to a basket.  &gt; This endpoint will be deprecated in version 0.3.0

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let basketId = "basketId_example"; // String | 
apiInstance.putBasketsBasketIdUser(basketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putBasketsSavedBasketId

> SavedBasketResponse putBasketsSavedBasketId(basketId, opts)

Update a saved basket

Updates a saved basket on the API

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.BasketsApi();
let basketId = "basketId_example"; // String | 
let opts = {
  'saveBasketBody': new GetcandyJs.SaveBasketBody() // SaveBasketBody | 
};
apiInstance.putBasketsSavedBasketId(basketId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**|  | 
 **saveBasketBody** | [**SaveBasketBody**](SaveBasketBody.md)|  | [optional] 

### Return type

[**SavedBasketResponse**](SavedBasketResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

