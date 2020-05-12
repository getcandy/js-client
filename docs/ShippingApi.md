# GetcandyJs.ShippingApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteShippingShippingMethodId**](ShippingApi.md#deleteShippingShippingMethodId) | **DELETE** /shipping/{shippingMethodId} | Delete shipping method
[**getShipping**](ShippingApi.md#getShipping) | **GET** /shipping | Get shipping methods
[**getShippingShippingMethodId**](ShippingApi.md#getShippingShippingMethodId) | **GET** /shipping/{shippingMethodId} | Get shipping methods
[**getShippingZones**](ShippingApi.md#getShippingZones) | **GET** /shipping/zones | Get Shipping Zones
[**getShippingZonesShippingZoneId**](ShippingApi.md#getShippingZonesShippingZoneId) | **GET** /shipping/zones/{shippingZoneId} | Get Shipping Zone
[**postShipping**](ShippingApi.md#postShipping) | **POST** /shipping | Create shipping method
[**postShippingIdPrices**](ShippingApi.md#postShippingIdPrices) | **POST** /shipping/{shippingMethodId}/prices | Add shipping price
[**postShippingZones**](ShippingApi.md#postShippingZones) | **POST** /shipping/zones | Create Shipping Zone
[**putShippingIdUsers**](ShippingApi.md#putShippingIdUsers) | **PUT** /shipping/{id}/users | Update shipping method users
[**putShippingPricesShippingPriceId**](ShippingApi.md#putShippingPricesShippingPriceId) | **PUT** /shipping/prices/{shippingPriceId} | Update shipping price
[**putShippingShippingMethodId**](ShippingApi.md#putShippingShippingMethodId) | **PUT** /shipping/{shippingMethodId} | Update shipping method
[**putShippingShippingMethodIdZones**](ShippingApi.md#putShippingShippingMethodIdZones) | **PUT** /shipping/{shippingMethodId}/zones | Update shipping method zones



## deleteShippingShippingMethodId

> deleteShippingShippingMethodId(shippingMethodId)

Delete shipping method

Deletes a shipping method.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ShippingApi();
let shippingMethodId = "shippingMethodId_example"; // String | 
apiInstance.deleteShippingShippingMethodId(shippingMethodId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shippingMethodId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getShipping

> ShippingMethodCollection getShipping(opts)

Get shipping methods

Returns a paginated list of shipping methods

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ShippingApi();
let opts = {
  'perPage': 56, // Number | 
  'include': "include_example" // String | 
};
apiInstance.getShipping(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **Number**|  | [optional] 
 **include** | **String**|  | [optional] 

### Return type

[**ShippingMethodCollection**](ShippingMethodCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShippingShippingMethodId

> ShippingMethodResponse getShippingShippingMethodId(shippingMethodId, opts)

Get shipping methods

Returns a shipping method by it&#39;s ID.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ShippingApi();
let shippingMethodId = "shippingMethodId_example"; // String | 
let opts = {
  'include': "include_example" // String | 
};
apiInstance.getShippingShippingMethodId(shippingMethodId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shippingMethodId** | **String**|  | 
 **include** | **String**|  | [optional] 

### Return type

[**ShippingMethodResponse**](ShippingMethodResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShippingZones

> ShippingZoneCollection getShippingZones(opts)

Get Shipping Zones

Returns a paginated list of shipping zones.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ShippingApi();
let opts = {
  'include': "include_example" // String | 
};
apiInstance.getShippingZones(opts).then((data) => {
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

[**ShippingZoneCollection**](ShippingZoneCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShippingZonesShippingZoneId

> ShippingZoneResponse getShippingZonesShippingZoneId(shippingZoneId)

Get Shipping Zone

Get a shipping zone by it&#39;s ID.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ShippingApi();
let shippingZoneId = "shippingZoneId_example"; // String | 
apiInstance.getShippingZonesShippingZoneId(shippingZoneId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shippingZoneId** | **String**|  | 

### Return type

[**ShippingZoneResponse**](ShippingZoneResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postShipping

> InlineResponse2006 postShipping(opts)

Create shipping method

Create a new shipping method.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ShippingApi();
let opts = {
  'inlineObject35': new GetcandyJs.InlineObject35() // InlineObject35 | 
};
apiInstance.postShipping(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject35** | [**InlineObject35**](InlineObject35.md)|  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postShippingIdPrices

> ShippingPriceResponse postShippingIdPrices(shippingMethodId, opts)

Add shipping price

Add a price to a shipping method.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ShippingApi();
let shippingMethodId = "shippingMethodId_example"; // String | 
let opts = {
  'inlineObject31': new GetcandyJs.InlineObject31() // InlineObject31 | 
};
apiInstance.postShippingIdPrices(shippingMethodId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shippingMethodId** | **String**|  | 
 **inlineObject31** | [**InlineObject31**](InlineObject31.md)|  | [optional] 

### Return type

[**ShippingPriceResponse**](ShippingPriceResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postShippingZones

> ShippingZoneResponse postShippingZones(opts)

Create Shipping Zone

Create a new shipping zone

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ShippingApi();
let opts = {
  'inlineObject30': new GetcandyJs.InlineObject30() // InlineObject30 | 
};
apiInstance.postShippingZones(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject30** | [**InlineObject30**](InlineObject30.md)|  | [optional] 

### Return type

[**ShippingZoneResponse**](ShippingZoneResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putShippingIdUsers

> ShippingMethodResponse putShippingIdUsers(id, opts)

Update shipping method users

Update shipping method users

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ShippingApi();
let id = "id_example"; // String | 
let opts = {
  'inlineObject34': new GetcandyJs.InlineObject34() // InlineObject34 | 
};
apiInstance.putShippingIdUsers(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **inlineObject34** | [**InlineObject34**](InlineObject34.md)|  | [optional] 

### Return type

[**ShippingMethodResponse**](ShippingMethodResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putShippingPricesShippingPriceId

> ShippingPriceResponse putShippingPricesShippingPriceId(shippingPriceId, opts)

Update shipping price

Update a shipping price

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ShippingApi();
let shippingPriceId = "shippingPriceId_example"; // String | 
let opts = {
  'inlineObject32': new GetcandyJs.InlineObject32() // InlineObject32 | 
};
apiInstance.putShippingPricesShippingPriceId(shippingPriceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shippingPriceId** | **String**|  | 
 **inlineObject32** | [**InlineObject32**](InlineObject32.md)|  | [optional] 

### Return type

[**ShippingPriceResponse**](ShippingPriceResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putShippingShippingMethodId

> ShippingMethodResponse putShippingShippingMethodId(shippingMethodId, opts)

Update shipping method

Update shipping method by it&#39;s ID

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ShippingApi();
let shippingMethodId = "shippingMethodId_example"; // String | 
let opts = {
  'inlineObject36': new GetcandyJs.InlineObject36() // InlineObject36 | 
};
apiInstance.putShippingShippingMethodId(shippingMethodId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shippingMethodId** | **String**|  | 
 **inlineObject36** | [**InlineObject36**](InlineObject36.md)|  | [optional] 

### Return type

[**ShippingMethodResponse**](ShippingMethodResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putShippingShippingMethodIdZones

> ShippingMethodResponse putShippingShippingMethodIdZones(shippingMethodId, opts)

Update shipping method zones

Update a shipping method&#39;s zones.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ShippingApi();
let shippingMethodId = "shippingMethodId_example"; // String | 
let opts = {
  'inlineObject33': new GetcandyJs.InlineObject33() // InlineObject33 | 
};
apiInstance.putShippingShippingMethodIdZones(shippingMethodId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shippingMethodId** | **String**|  | 
 **inlineObject33** | [**InlineObject33**](InlineObject33.md)|  | [optional] 

### Return type

[**ShippingMethodResponse**](ShippingMethodResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

