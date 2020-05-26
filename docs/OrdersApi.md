# GetcandyJs.OrdersApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrdersLinesOrderId**](OrdersApi.md#deleteOrdersLinesOrderId) | **DELETE** /orders/lines/{orderLineId} | Delete an order line
[**getOrders**](OrdersApi.md#getOrders) | **GET** /orders | Get orders
[**getOrdersBulk**](OrdersApi.md#getOrdersBulk) | **GET** /orders/bulk | Get Order export
[**getOrdersEmailPreviewStatus**](OrdersApi.md#getOrdersEmailPreviewStatus) | **GET** /orders/email-preview/{status} | Get order status preview email
[**getOrdersIdInvoice**](OrdersApi.md#getOrdersIdInvoice) | **GET** /orders/{orderId}/invoice | Get order invoice
[**getOrdersIdShippingMethods**](OrdersApi.md#getOrdersIdShippingMethods) | **GET** /orders/{orderId}/shipping/methods | Get Order Shipping Methods
[**getOrdersOrderId**](OrdersApi.md#getOrdersOrderId) | **GET** /orders/{orderId} | Get Order
[**getOrdersTypes**](OrdersApi.md#getOrdersTypes) | **GET** /orders/types | Get order types
[**postOrders**](OrdersApi.md#postOrders) | **POST** /orders | Create Order
[**postOrdersBulk**](OrdersApi.md#postOrdersBulk) | **POST** /orders/bulk | Bulk update orders
[**postOrdersOrderIdExpire**](OrdersApi.md#postOrdersOrderIdExpire) | **POST** /orders/{orderId}/expire | Expire an Order
[**postOrdersProcess**](OrdersApi.md#postOrdersProcess) | **POST** /orders/process | Processes an order on the API
[**putOrdersIdContact**](OrdersApi.md#putOrdersIdContact) | **PUT** /orders/{orderId}/contact | Add contact details
[**putOrdersIdLines**](OrdersApi.md#putOrdersIdLines) | **PUT** /orders/{orderId}/lines | Add order line
[**putOrdersIdShippingAddress**](OrdersApi.md#putOrdersIdShippingAddress) | **PUT** /orders/{orderId}/shipping/address | Update shipping address
[**putOrdersIdShippingCost**](OrdersApi.md#putOrdersIdShippingCost) | **PUT** /orders/{orderId}/shipping/cost | Add shipping cost
[**putOrdersOrderId**](OrdersApi.md#putOrdersOrderId) | **PUT** /orders/{orderId} | Update Order
[**putOrdersOrderIdBillingAddress**](OrdersApi.md#putOrdersOrderIdBillingAddress) | **PUT** /orders/{orderId}/billing/address | Update billing address



## deleteOrdersLinesOrderId

> deleteOrdersLinesOrderId(orderLineId)

Delete an order line

Deletes an order line from an order

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let orderLineId = "orderLineId_example"; // String | 
apiInstance.deleteOrdersLinesOrderId(orderLineId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getOrders

> OrderCollection getOrders(opts)

Get orders

If you&#39;re an admin user you will be able to see all orders, otherwise only the current users orders will be returned.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let opts = {
  'include': "include_example" // String | 
};
apiInstance.getOrders(opts).then((data) => {
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

[**OrderCollection**](OrderCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrdersBulk

> OrderExportResponse getOrdersBulk(orders, format)

Get Order export

Export orders into a base64 encoded string

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let orders = "orders_example"; // String | Colon seperated order IDs
let format = "format_example"; // String | The export format, must be present in config
apiInstance.getOrdersBulk(orders, format).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orders** | **String**| Colon seperated order IDs | 
 **format** | **String**| The export format, must be present in config | 

### Return type

[**OrderExportResponse**](OrderExportResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrdersEmailPreviewStatus

> EmailPreviewResponse getOrdersEmailPreviewStatus(status, id)

Get order status preview email

This endpoint will get a HTML email preview for an order status, this is useful if you want to be able to see what email will be sent out for the corresponding Order status.  Mailers for each order status should be stored in the getcandy config under &#x60;orders.mailers&#x60;

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let status = "status_example"; // String | 
let id = "id_example"; // String | An order id to use for the template
apiInstance.getOrdersEmailPreviewStatus(status, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**|  | 
 **id** | **String**| An order id to use for the template | 

### Return type

[**EmailPreviewResponse**](EmailPreviewResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrdersIdInvoice

> InvoiceResponse getOrdersIdInvoice(orderId)

Get order invoice

Get an orders invoice

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let orderId = "orderId_example"; // String | 
apiInstance.getOrdersIdInvoice(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**|  | 

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrdersIdShippingMethods

> ShippingMethodCollection getOrdersIdShippingMethods(orderId)

Get Order Shipping Methods

This will return a list of all ShippingMethod&#39;s that are available for this order.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let orderId = "orderId_example"; // String | 
apiInstance.getOrdersIdShippingMethods(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**|  | 

### Return type

[**ShippingMethodCollection**](ShippingMethodCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrdersOrderId

> OrderResponse getOrdersOrderId(orderId)

Get Order

Get an Order by it&#39;s ID.  You must be an admin or owner to retrieve the order, otherwise you&#39;ll get a 404.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let orderId = "orderId_example"; // String | 
apiInstance.getOrdersOrderId(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**|  | 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrdersTypes

> OrderTypeCollection getOrdersTypes()

Get order types

Returns all order types currently in the system

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
apiInstance.getOrdersTypes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OrderTypeCollection**](OrderTypeCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postOrders

> OrderResponse postOrders(opts)

Create Order

Create an Order from a Basket instance

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let opts = {
  'createOrderBody': new GetcandyJs.CreateOrderBody() // CreateOrderBody | 
};
apiInstance.postOrders(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderBody** | [**CreateOrderBody**](CreateOrderBody.md)|  | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postOrdersBulk

> postOrdersBulk(opts)

Bulk update orders

Allows you to bulk update a field across multiple Orders.  You must have the correct priviledges to perform this action.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let opts = {
  'inlineObject11': new GetcandyJs.InlineObject11() // InlineObject11 | 
};
apiInstance.postOrdersBulk(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject11** | [**InlineObject11**](InlineObject11.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postOrdersOrderIdExpire

> postOrdersOrderIdExpire(orderId)

Expire an Order

Sets an order to be expired. You must have the correct priviledges to perform this action. Once an order is expired, it will no longer appear in results unless performed by an admin or in the hub.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let orderId = "orderId_example"; // String | 
apiInstance.postOrdersOrderIdExpire(orderId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postOrdersProcess

> OrderResponse postOrdersProcess(opts)

Processes an order on the API

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let opts = {
  'inlineObject1': new GetcandyJs.InlineObject1() // InlineObject1 | 
};
apiInstance.postOrdersProcess(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putOrdersIdContact

> OrderResponse putOrdersIdContact(orderId, opts)

Add contact details

Add contact details to an order

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let orderId = "orderId_example"; // String | 
let opts = {
  'inlineObject13': new GetcandyJs.InlineObject13() // InlineObject13 | 
};
apiInstance.putOrdersIdContact(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**|  | 
 **inlineObject13** | [**InlineObject13**](InlineObject13.md)|  | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putOrdersIdLines

> OrderResponse putOrdersIdLines(orderId, opts)

Add order line

Adds an order line to an order

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let orderId = "orderId_example"; // String | 
let opts = {
  'inlineObject14': new GetcandyJs.InlineObject14() // InlineObject14 | 
};
apiInstance.putOrdersIdLines(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**|  | 
 **inlineObject14** | [**InlineObject14**](InlineObject14.md)|  | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putOrdersIdShippingAddress

> OrderResponse putOrdersIdShippingAddress(orderId, opts)

Update shipping address

Update an orders shipping address

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let orderId = "orderId_example"; // String | 
let opts = {
  'address': new GetcandyJs.Address() // Address | All fields are required when an `address_id` is not present.
};
apiInstance.putOrdersIdShippingAddress(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**|  | 
 **address** | [**Address**](Address.md)| All fields are required when an &#x60;address_id&#x60; is not present. | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putOrdersIdShippingCost

> OrderResponse putOrdersIdShippingCost(orderId, opts)

Add shipping cost

Adds a shipping cost to an Order

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let orderId = "orderId_example"; // String | 
let opts = {
  'inlineObject12': new GetcandyJs.InlineObject12() // InlineObject12 | 
};
apiInstance.putOrdersIdShippingCost(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**|  | 
 **inlineObject12** | [**InlineObject12**](InlineObject12.md)|  | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putOrdersOrderId

> OrderResponse putOrdersOrderId(orderId, opts)

Update Order

Update an Order

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let orderId = "orderId_example"; // String | 
let opts = {
  'include': "include_example", // String | 
  'inlineObject': new GetcandyJs.InlineObject() // InlineObject | 
};
apiInstance.putOrdersOrderId(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**|  | 
 **include** | **String**|  | [optional] 
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putOrdersOrderIdBillingAddress

> OrderResponse putOrdersOrderIdBillingAddress(orderId, opts)

Update billing address

Update an orders billing address

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.OrdersApi();
let orderId = "orderId_example"; // String | 
let opts = {
  'address': new GetcandyJs.Address() // Address | All fields are required when an `address_id` is not present.
};
apiInstance.putOrdersOrderIdBillingAddress(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**|  | 
 **address** | [**Address**](Address.md)| All fields are required when an &#x60;address_id&#x60; is not present. | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

