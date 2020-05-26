# GetcandyJs.ProductsApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProductsProductCategoriesCategory**](ProductsApi.md#deleteProductsProductCategoriesCategory) | **DELETE** /products/{productId}/categories/{categoryId} | Detach category
[**deleteProductsProductCollectionsDetach**](ProductsApi.md#deleteProductsProductCollectionsDetach) | **DELETE** /products/{productId}/collections/{collectionId} | Detach collection
[**deleteProductsProductCustomerGroups**](ProductsApi.md#deleteProductsProductCustomerGroups) | **DELETE** /products/{productId}/customer-groups | Detach customer groups
[**deleteProductsProductId**](ProductsApi.md#deleteProductsProductId) | **DELETE** /products/{productId} | Delete Product
[**deleteProductsProductIdAssociations**](ProductsApi.md#deleteProductsProductIdAssociations) | **DELETE** /products/{productId}/associations | 
[**getProducts**](ProductsApi.md#getProducts) | **GET** /products | Get Products
[**getProductsProductId**](ProductsApi.md#getProductsProductId) | **GET** /products/{productId} | Get Product
[**getProductsProductIdDrafts**](ProductsApi.md#getProductsProductIdDrafts) | **GET** /products/{productId}/drafts | Create draft
[**getProductsRecommended**](ProductsApi.md#getProductsRecommended) | **GET** /products/recommended | Get recommended products
[**postProductRedirects**](ProductsApi.md#postProductRedirects) | **POST** /products/{productId}/redirects | Create Product redirect
[**postProductUrls**](ProductsApi.md#postProductUrls) | **POST** /products/{productId}/urls | Create Product route
[**postProducts**](ProductsApi.md#postProducts) | **POST** /products | Create Product
[**postProductsIdDrafts**](ProductsApi.md#postProductsIdDrafts) | **POST** /products/{productId}/drafts | Create Draft
[**postProductsIdPublish**](ProductsApi.md#postProductsIdPublish) | **POST** /products/{productId}/publish | Publish Draft
[**postProductsProductAssociations**](ProductsApi.md#postProductsProductAssociations) | **POST** /products/{productId}/associations | Update product associations
[**postProductsProductAttributes**](ProductsApi.md#postProductsProductAttributes) | **POST** /products/{productId}/attributes | Update Product attributes
[**postProductsProductCategories**](ProductsApi.md#postProductsProductCategories) | **POST** /products/{productId}/categories | Update Product categories
[**postProductsProductChannels**](ProductsApi.md#postProductsProductChannels) | **POST** /products/{productId}/channels | Update Product channels
[**postProductsProductCustomerGroups**](ProductsApi.md#postProductsProductCustomerGroups) | **POST** /products/{productId}/customer-groups | Update customer groups
[**postProductsProductIdCollections**](ProductsApi.md#postProductsProductIdCollections) | **POST** /products/{productId}/collections | Update Product collections
[**postProductsProductIdDuplicate**](ProductsApi.md#postProductsProductIdDuplicate) | **POST** /products/{productId}/duplicate | Duplicate Product
[**putProductsProductId**](ProductsApi.md#putProductsProductId) | **PUT** /products/{productId} | Update Product



## deleteProductsProductCategoriesCategory

> deleteProductsProductCategoriesCategory(productId, categoryId)

Detach category

Detaches a category from a product. Does not delete the category.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
let categoryId = "categoryId_example"; // String | 
apiInstance.deleteProductsProductCategoriesCategory(productId, categoryId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **categoryId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProductsProductCollectionsDetach

> deleteProductsProductCollectionsDetach(productId, collectionId)

Detach collection

Detaches a collection from a product. Does not delete the collection.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
let collectionId = "collectionId_example"; // String | 
apiInstance.deleteProductsProductCollectionsDetach(productId, collectionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **collectionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProductsProductCustomerGroups

> deleteProductsProductCustomerGroups(productId)

Detach customer groups

Detaches customer groups from a product

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
apiInstance.deleteProductsProductCustomerGroups(productId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProductsProductId

> deleteProductsProductId(productId)

Delete Product

Deletes a product by it&#39;s ID  &gt; This will only soft delete the product. It will then be available to restore at a later time.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
apiInstance.deleteProductsProductId(productId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProductsProductIdAssociations

> deleteProductsProductIdAssociations(productId)



Removes product associations

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
apiInstance.deleteProductsProductIdAssociations(productId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getProducts

> ProductCollection getProducts()

Get Products

Gets a paginated list of products.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
apiInstance.getProducts().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ProductCollection**](ProductCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductsProductId

> ProductResponse getProductsProductId(productId, opts)

Get Product

Returns a product by it&#39;s given ID

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
let opts = {
  'include': "include_example", // String | 
  'exclTax': "exclTax_example", // String | Prices shouldn't include tax
  'fullResponse': "fullResponse_example", // String | Returns full `attribute_data` in response
  'optionData': "optionData_example", // String | Include option data
  'draft': "draft_example" // String | Show draft if exists
};
apiInstance.getProductsProductId(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **include** | **String**|  | [optional] 
 **exclTax** | **String**| Prices shouldn&#39;t include tax | [optional] 
 **fullResponse** | **String**| Returns full &#x60;attribute_data&#x60; in response | [optional] 
 **optionData** | **String**| Include option data | [optional] 
 **draft** | **String**| Show draft if exists | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductsProductIdDrafts

> ProductResponse getProductsProductIdDrafts(productId)

Create draft

Create a draft for a product.  If a draft already exists, that current draft will be returned.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
apiInstance.getProductsProductIdDrafts(productId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductsRecommended

> ProductRecommendationCollection getProductsRecommended(basketId)

Get recommended products

This endpoint will return recommended products based on a basket.  Using product associations, the API will find products in the basket and display any relations that have been defined.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let basketId = "basketId_example"; // String | 
apiInstance.getProductsRecommended(basketId).then((data) => {
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

[**ProductRecommendationCollection**](ProductRecommendationCollection.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postProductRedirects

> ProductResponse postProductRedirects(productId, opts)

Create Product redirect

Creates and syncs a new product route.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
let opts = {
  'inlineObject19': new GetcandyJs.InlineObject19() // InlineObject19 | 
};
apiInstance.postProductRedirects(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **inlineObject19** | [**InlineObject19**](InlineObject19.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postProductUrls

> ProductResponse postProductUrls(productId, opts)

Create Product route

Creates and syncs a new product route.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
let opts = {
  'inlineObject18': new GetcandyJs.InlineObject18() // InlineObject18 | 
};
apiInstance.postProductUrls(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **inlineObject18** | [**InlineObject18**](InlineObject18.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postProducts

> ProductResponse postProducts(opts)

Create Product

Creates a new product in the system. When creating a new product will also create 1 variant for that product.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let opts = {
  'include': "include_example", // String | 
  'inlineObject26': new GetcandyJs.InlineObject26() // InlineObject26 | 
};
apiInstance.postProducts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include** | **String**|  | [optional] 
 **inlineObject26** | [**InlineObject26**](InlineObject26.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postProductsIdDrafts

> ProductResponse postProductsIdDrafts(productId)

Create Draft

Create a draft product from an existing product.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
apiInstance.postProductsIdDrafts(productId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postProductsIdPublish

> ProductResponse postProductsIdPublish(productId)

Publish Draft

Publish a draft from a Product

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
apiInstance.postProductsIdPublish(productId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postProductsProductAssociations

> ProductResponse postProductsProductAssociations(productId, opts)

Update product associations

Updates product associations

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
let opts = {
  'inlineObject24': new GetcandyJs.InlineObject24() // InlineObject24 | 
};
apiInstance.postProductsProductAssociations(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **inlineObject24** | [**InlineObject24**](InlineObject24.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postProductsProductAttributes

> ProductResponse postProductsProductAttributes(productId, opts)

Update Product attributes

Allows you to sync up the attributes which are directly associated to this product.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
let opts = {
  'inlineObject20': new GetcandyJs.InlineObject20() // InlineObject20 | 
};
apiInstance.postProductsProductAttributes(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **inlineObject20** | [**InlineObject20**](InlineObject20.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postProductsProductCategories

> ProductResponse postProductsProductCategories(productId, opts)

Update Product categories

Sync product categories

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
let opts = {
  'inlineObject22': new GetcandyJs.InlineObject22() // InlineObject22 | 
};
apiInstance.postProductsProductCategories(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **inlineObject22** | [**InlineObject22**](InlineObject22.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postProductsProductChannels

> ProductResponse postProductsProductChannels(productId, opts)

Update Product channels

Sync product Channels

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
let opts = {
  'inlineObject23': new GetcandyJs.InlineObject23() // InlineObject23 | 
};
apiInstance.postProductsProductChannels(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **inlineObject23** | [**InlineObject23**](InlineObject23.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postProductsProductCustomerGroups

> ProductResponse postProductsProductCustomerGroups(productId, opts)

Update customer groups

Update a products customer groups

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
let opts = {
  'inlineObject25': new GetcandyJs.InlineObject25() // InlineObject25 | 
};
apiInstance.postProductsProductCustomerGroups(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **inlineObject25** | [**InlineObject25**](InlineObject25.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postProductsProductIdCollections

> ProductResponse postProductsProductIdCollections(productId, opts)

Update Product collections

Update a products collections.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
let opts = {
  'inlineObject21': new GetcandyJs.InlineObject21() // InlineObject21 | 
};
apiInstance.postProductsProductIdCollections(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **inlineObject21** | [**InlineObject21**](InlineObject21.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postProductsProductIdDuplicate

> ProductResponse postProductsProductIdDuplicate(productId, opts)

Duplicate Product

Duplicates a product, requires you to specify new slugs and SKU&#39;s.  &gt; Duplicated product will not immediately be active.

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
let opts = {
  'inlineObject17': new GetcandyJs.InlineObject17() // InlineObject17 | 
};
apiInstance.postProductsProductIdDuplicate(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **inlineObject17** | [**InlineObject17**](InlineObject17.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putProductsProductId

> ProductResponse putProductsProductId(productId, opts)

Update Product

Updates a product by it&#39;s ID

### Example

```javascript
import GetcandyJs from '@getcandy/js-client';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.ProductsApi();
let productId = "productId_example"; // String | 
let opts = {
  'productUpdateBody': new GetcandyJs.ProductUpdateBody() // ProductUpdateBody | 
};
apiInstance.putProductsProductId(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **productUpdateBody** | [**ProductUpdateBody**](ProductUpdateBody.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

