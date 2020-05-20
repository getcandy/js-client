# GetcandyJs.ReportsApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductsBestSellers**](ReportsApi.md#getProductsBestSellers) | **GET** /reports/products/best-sellers | Get best selling products
[**getReportsMetricsSubject**](ReportsApi.md#getReportsMetricsSubject) | **GET** /reports/metrics/{subject} | Get metric data
[**getReportsOrders**](ReportsApi.md#getReportsOrders) | **GET** /reports/orders | Get sales report
[**getReportsOrdersAverages**](ReportsApi.md#getReportsOrdersAverages) | **GET** /reports/orders/averages | Get order averages
[**getReportsOrdersCustomers**](ReportsApi.md#getReportsOrdersCustomers) | **GET** /reports/orders/customers | Get Customer Report
[**getReportsSales**](ReportsApi.md#getReportsSales) | **GET** /reports/sales | Get sales report



## getProductsBestSellers

> InlineResponse2004 getProductsBestSellers(opts)

Get best selling products

Gets best selling products grouped by month.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ReportsApi();
let opts = {
  'from': "from_example", // String | The from date
  'to': "to_example" // String | The to date
};
apiInstance.getProductsBestSellers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| The from date | [optional] 
 **to** | **String**| The to date | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportsMetricsSubject

> InlineResponse2005 getReportsMetricsSubject(subject)

Get metric data

Returns metric (KPI) data for either sales or orders.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ReportsApi();
let subject = "subject_example"; // String | 
apiInstance.getReportsMetricsSubject(subject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subject** | **String**|  | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportsOrders

> [InlineResponse2001] getReportsOrders(opts)

Get sales report

Returns a report for orders between a given date range

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ReportsApi();
let opts = {
  'from': "from_example", // String | The from date
  'to': "to_example" // String | The to date
};
apiInstance.getReportsOrders(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| The from date | [optional] 
 **to** | **String**| The to date | [optional] 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportsOrdersAverages

> [InlineResponse2003] getReportsOrdersAverages(opts)

Get order averages

Returns an array of order averages between a given date range.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ReportsApi();
let opts = {
  'from': "from_example", // String | The from date
  'to': "to_example", // String | The to date
  'mode': "mode_example" // String | 
};
apiInstance.getReportsOrdersAverages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| The from date | [optional] 
 **to** | **String**| The to date | [optional] 
 **mode** | **String**|  | [optional] 

### Return type

[**[InlineResponse2003]**](InlineResponse2003.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportsOrdersCustomers

> InlineResponse2002 getReportsOrdersCustomers(opts)

Get Customer Report

Returns a monthly grouped list of new/returning and total customers.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ReportsApi();
let opts = {
  'from': "from_example", // String | The from date
  'to': "to_example" // String | The to date
};
apiInstance.getReportsOrdersCustomers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| The from date | [optional] 
 **to** | **String**| The to date | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportsSales

> InlineResponse200 getReportsSales(from, opts)

Get sales report

This endpoints returns sales report figures.  &gt; Currently this provides data suitable for chartjs.org but this is subject to change and be more decoupled in a future release.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ReportsApi();
let from = "from_example"; // String | The from date
let opts = {
  'to': "to_example", // String | The to date
  'mode': "mode_example" // String | The dataset mode
};
apiInstance.getReportsSales(from, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| The from date | 
 **to** | **String**| The to date | [optional] 
 **mode** | **String**| The dataset mode | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

