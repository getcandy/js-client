# GetcandyJs.CategoriesApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategories**](CategoriesApi.md#getCategories) | **GET** /categories | Return a paged array of categories
[**getCategoriesCategoryId**](CategoriesApi.md#getCategoriesCategoryId) | **GET** /categories/{categoryId} | Return a single category
[**getCategoriesParentParentId**](CategoriesApi.md#getCategoriesParentParentId) | **GET** /categories/parent/{parentId} | Get categories by parent id
[**postCategories**](CategoriesApi.md#postCategories) | **POST** /categories | Create a new category
[**postCategoriesCategoryIdChannels**](CategoriesApi.md#postCategoriesCategoryIdChannels) | **POST** /categories/{categoryId}/channels | Attach channels to a category
[**postCategoriesCategoryIdCustomerGroups**](CategoriesApi.md#postCategoriesCategoryIdCustomerGroups) | **POST** /categories/{categoryId}/customer-groups | Attach customer groups to a category
[**postCategoriesCategoryLayouts**](CategoriesApi.md#postCategoriesCategoryLayouts) | **POST** /categories/{categoryId}/layouts | Update a category layout
[**postCategoriesCategoryRoutes**](CategoriesApi.md#postCategoriesCategoryRoutes) | **POST** /categories/{categoryId}/routes | Update a category&#39;s routes
[**postCategoriesReorder**](CategoriesApi.md#postCategoriesReorder) | **POST** /categories/reorder | Reorder a category
[**putCategoriesCategoryId**](CategoriesApi.md#putCategoriesCategoryId) | **PUT** /categories/{categoryId} | Update a category
[**putCategoriesCategoryIdProducts**](CategoriesApi.md#putCategoriesCategoryIdProducts) | **PUT** /categories/{categoryId}/products | Attach products



## getCategories

> CategoryCollection getCategories(opts)

Return a paged array of categories

Returns a paginated resource of categories

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.CategoriesApi();
let opts = {
  'fullResponse': true, // Boolean | 
  'include': "include_example", // String | 
  'tree': true // Boolean | Whether response should be a node tree
};
apiInstance.getCategories(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fullResponse** | **Boolean**|  | [optional] 
 **include** | **String**|  | [optional] 
 **tree** | **Boolean**| Whether response should be a node tree | [optional] 

### Return type

[**CategoryCollection**](CategoryCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategoriesCategoryId

> CategoryResponse getCategoriesCategoryId(categoryId, opts)

Return a single category

Returns a single category from a given ID

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.CategoriesApi();
let categoryId = "categoryId_example"; // String | 
let opts = {
  'includes': "includes_example" // String | 
};
apiInstance.getCategoriesCategoryId(categoryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | 
 **includes** | **String**|  | [optional] 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategoriesParentParentId

> CategoryCollection getCategoriesParentParentId(parentId, opts)

Get categories by parent id

Returns categories by a given parent ID.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.CategoriesApi();
let parentId = "parentId_example"; // String | If omitted will return top level catgories
let opts = {
  'include': "include_example" // String | 
};
apiInstance.getCategoriesParentParentId(parentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**| If omitted will return top level catgories | 
 **include** | **String**|  | [optional] 

### Return type

[**CategoryCollection**](CategoryCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCategories

> CategoryResponse postCategories(opts)

Create a new category

Creates a new category and returns it&#39;s resource.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.CategoriesApi();
let opts = {
  'createCategoryBody': new GetcandyJs.CreateCategoryBody() // CreateCategoryBody | 
};
apiInstance.postCategories(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCategoryBody** | [**CreateCategoryBody**](CreateCategoryBody.md)|  | [optional] 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCategoriesCategoryIdChannels

> CategoryResponse postCategoriesCategoryIdChannels(categoryId, opts)

Attach channels to a category

Attaches channels to a catagory

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.CategoriesApi();
let categoryId = "categoryId_example"; // String | 
let opts = {
  'attachCategoryChannelsBody': new GetcandyJs.AttachCategoryChannelsBody() // AttachCategoryChannelsBody | 
};
apiInstance.postCategoriesCategoryIdChannels(categoryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | 
 **attachCategoryChannelsBody** | [**AttachCategoryChannelsBody**](AttachCategoryChannelsBody.md)|  | [optional] 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCategoriesCategoryIdCustomerGroups

> CategoryResponse postCategoriesCategoryIdCustomerGroups(categoryId, opts)

Attach customer groups to a category

Attaches customer groups to a category resource.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.CategoriesApi();
let categoryId = "categoryId_example"; // String | 
let opts = {
  'attachCategoryCustomerGroupsBody': new GetcandyJs.AttachCategoryCustomerGroupsBody() // AttachCategoryCustomerGroupsBody | 
};
apiInstance.postCategoriesCategoryIdCustomerGroups(categoryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | 
 **attachCategoryCustomerGroupsBody** | [**AttachCategoryCustomerGroupsBody**](AttachCategoryCustomerGroupsBody.md)|  | [optional] 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCategoriesCategoryLayouts

> CategoryResponse postCategoriesCategoryLayouts(categoryId, opts)

Update a category layout

Attaches layouts to a category resource

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.CategoriesApi();
let categoryId = "categoryId_example"; // String | 
let opts = {
  'categoryAttachLayoutBody': new GetcandyJs.CategoryAttachLayoutBody() // CategoryAttachLayoutBody | 
};
apiInstance.postCategoriesCategoryLayouts(categoryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | 
 **categoryAttachLayoutBody** | [**CategoryAttachLayoutBody**](CategoryAttachLayoutBody.md)|  | [optional] 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCategoriesCategoryRoutes

> CategoryResponse postCategoriesCategoryRoutes(categoryId, opts)

Update a category&#39;s routes

Attaches routes to a category resource.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.CategoriesApi();
let categoryId = "categoryId_example"; // String | 
let opts = {
  'attachCategoryRoutesBody': new GetcandyJs.AttachCategoryRoutesBody() // AttachCategoryRoutesBody | 
};
apiInstance.postCategoriesCategoryRoutes(categoryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | 
 **attachCategoryRoutesBody** | [**AttachCategoryRoutesBody**](AttachCategoryRoutesBody.md)|  | [optional] 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCategoriesReorder

> Message postCategoriesReorder(opts)

Reorder a category

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.CategoriesApi();
let opts = {
  'reorderCategoryBody': new GetcandyJs.ReorderCategoryBody() // ReorderCategoryBody | 
};
apiInstance.postCategoriesReorder(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reorderCategoryBody** | [**ReorderCategoryBody**](ReorderCategoryBody.md)|  | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putCategoriesCategoryId

> CategoryResponse putCategoriesCategoryId(categoryId, opts)

Update a category

Update a category using a given ID.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.CategoriesApi();
let categoryId = "categoryId_example"; // String | 
let opts = {
  'updateAttributesBody': new GetcandyJs.UpdateAttributesBody() // UpdateAttributesBody | 
};
apiInstance.putCategoriesCategoryId(categoryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | 
 **updateAttributesBody** | [**UpdateAttributesBody**](UpdateAttributesBody.md)|  | [optional] 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putCategoriesCategoryIdProducts

> CategoryResponse putCategoriesCategoryIdProducts(categoryId, opts)

Attach products

Attaches products to a category resource.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.CategoriesApi();
let categoryId = "categoryId_example"; // String | 
let opts = {
  'attachCategoryProductsBody': new GetcandyJs.AttachCategoryProductsBody() // AttachCategoryProductsBody | When using \"custom\" sort type, sorting will be based on the position.
};
apiInstance.putCategoriesCategoryIdProducts(categoryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | 
 **attachCategoryProductsBody** | [**AttachCategoryProductsBody**](AttachCategoryProductsBody.md)| When using \&quot;custom\&quot; sort type, sorting will be based on the position. | [optional] 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

