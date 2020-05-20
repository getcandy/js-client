# GetcandyJs.AssetsApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postAssets**](AssetsApi.md#postAssets) | **POST** /assets | Create Asset
[**postAssetsAssetIdDetachOwnerId**](AssetsApi.md#postAssetsAssetIdDetachOwnerId) | **POST** /assets/{assetId}/detach/{ownerId} | Detach an asset from it&#39;s model
[**postAssetsSimple**](AssetsApi.md#postAssetsSimple) | **POST** /assets/simple | Simple asset upload
[**putAssets**](AssetsApi.md#putAssets) | **PUT** /assets | Update Assets



## postAssets

> AssetResponse postAssets(opts)

Create Asset

Upload an asset to a model

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AssetsApi();
let opts = {
  'mimeType': "mimeType_example", // String | Required when passing url
  'url': "url_example", // String | External URL to file to upload, required without file
  'file': null // Object | 
};
apiInstance.postAssets(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mimeType** | **String**| Required when passing url | [optional] 
 **url** | **String**| External URL to file to upload, required without file | [optional] 
 **file** | [**Object**](Object.md)|  | [optional] 

### Return type

[**AssetResponse**](AssetResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## postAssetsAssetIdDetachOwnerId

> postAssetsAssetIdDetachOwnerId(assetId, ownerId, opts)

Detach an asset from it&#39;s model

Detaches any assets from a given model. Useful if you want to remove certain assets from a product (or another model) without deleting the asset itself.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AssetsApi();
let assetId = "assetId_example"; // String | The hashed asset id
let ownerId = "ownerId_example"; // String | The hashed owner id
let opts = {
  'assetDetachBody': new GetcandyJs.AssetDetachBody() // AssetDetachBody | 
};
apiInstance.postAssetsAssetIdDetachOwnerId(assetId, ownerId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **String**| The hashed asset id | 
 **ownerId** | **String**| The hashed owner id | 
 **assetDetachBody** | [**AssetDetachBody**](AssetDetachBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postAssetsSimple

> AssetSimple postAssetsSimple(file)

Simple asset upload

This endpoint allows you to upload an asset without having to attach it to a model. This is good for one time uploads where you just want to get back a URL

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AssetsApi();
let file = null; // Object | 
apiInstance.postAssetsSimple(file).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**Object**](Object.md)|  | 

### Return type

[**AssetSimple**](AssetSimple.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## putAssets

> AssetResponse putAssets(opts)

Update Assets

Update all assets in the given array of ids.

### Example

```javascript
import GetcandyJs from 'getcandy-js';
let defaultClient = GetcandyJs.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GetcandyJs.AssetsApi();
let opts = {
  'updateAssetBody': new GetcandyJs.UpdateAssetBody() // UpdateAssetBody | 
};
apiInstance.putAssets(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAssetBody** | [**UpdateAssetBody**](UpdateAssetBody.md)|  | [optional] 

### Return type

[**AssetResponse**](AssetResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

