// tslint:disable
/**
 * GetCandy
 * The GetCandy API
 *
 * The version of the OpenAPI document: 0.12.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AssetDetachBody } from '../models';
// @ts-ignore
import { AssetResponse } from '../models';
// @ts-ignore
import { AssetSimple } from '../models';
// @ts-ignore
import { ReorderAssetsBody } from '../models';
// @ts-ignore
import { UpdateAssetBody } from '../models';
/**
 * AssetsApi - axios parameter creator
 * @export
 */
export const AssetsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Upload an asset to a model
         * @summary Create Asset
         * @param {string} [mimeType] Required when passing url
         * @param {string} [url] External URL to file to upload, required without file
         * @param {object} [file]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAssets: async (mimeType?: string, url?: string, file?: object, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/assets`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();


            if (mimeType !== undefined) {
                localVarFormParams.append('mime_type', mimeType as any);
            }

            if (url !== undefined) {
                localVarFormParams.append('url', url as any);
            }

            if (file !== undefined) {
                localVarFormParams.append('file', file as any);
            }


            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Detaches any assets from a given model. Useful if you want to remove certain assets from a product (or another model) without deleting the asset itself.
         * @summary Detach an asset from it\'s model
         * @param {string} assetId The hashed asset id
         * @param {string} ownerId The hashed owner id
         * @param {AssetDetachBody} [assetDetachBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAssetsAssetIdDetachOwnerId: async (assetId: string, ownerId: string, assetDetachBody?: AssetDetachBody, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'assetId' is not null or undefined
            if (assetId === null || assetId === undefined) {
                throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling postAssetsAssetIdDetachOwnerId.');
            }
            // verify required parameter 'ownerId' is not null or undefined
            if (ownerId === null || ownerId === undefined) {
                throw new RequiredError('ownerId','Required parameter ownerId was null or undefined when calling postAssetsAssetIdDetachOwnerId.');
            }
            const localVarPath = `/assets/{assetId}/detach/{ownerId}`
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId)))
                .replace(`{${"ownerId"}}`, encodeURIComponent(String(ownerId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof assetDetachBody !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(assetDetachBody !== undefined ? assetDetachBody : {}) : (assetDetachBody || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you to upload an asset without having to attach it to a model. This is good for one time uploads where you just want to get back a URL
         * @summary Simple asset upload
         * @param {object} file
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAssetsSimple: async (file: object, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'file' is not null or undefined
            if (file === null || file === undefined) {
                throw new RequiredError('file','Required parameter file was null or undefined when calling postAssetsSimple.');
            }
            const localVarPath = `/assets/simple`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();


            if (file !== undefined) {
                localVarFormParams.append('file', file as any);
            }


            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update all assets in the given array of ids.
         * @summary Update Assets
         * @param {UpdateAssetBody} [updateAssetBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putAssets: async (updateAssetBody?: UpdateAssetBody, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/assets`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof updateAssetBody !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(updateAssetBody !== undefined ? updateAssetBody : {}) : (updateAssetBody || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reorder assets for a model
         * @summary Reorder Assets
         * @param {ReorderAssetsBody} [reorderAssetsBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reorderAssets: async (reorderAssetsBody?: ReorderAssetsBody, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/assets/reorder`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof reorderAssetsBody !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(reorderAssetsBody !== undefined ? reorderAssetsBody : {}) : (reorderAssetsBody || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AssetsApi - functional programming interface
 * @export
 */
export const AssetsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Upload an asset to a model
         * @summary Create Asset
         * @param {string} [mimeType] Required when passing url
         * @param {string} [url] External URL to file to upload, required without file
         * @param {object} [file]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postAssets(mimeType?: string, url?: string, file?: object, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AssetResponse>> {
            const localVarAxiosArgs = await AssetsApiAxiosParamCreator(configuration).postAssets(mimeType, url, file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Detaches any assets from a given model. Useful if you want to remove certain assets from a product (or another model) without deleting the asset itself.
         * @summary Detach an asset from it\'s model
         * @param {string} assetId The hashed asset id
         * @param {string} ownerId The hashed owner id
         * @param {AssetDetachBody} [assetDetachBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postAssetsAssetIdDetachOwnerId(assetId: string, ownerId: string, assetDetachBody?: AssetDetachBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AssetsApiAxiosParamCreator(configuration).postAssetsAssetIdDetachOwnerId(assetId, ownerId, assetDetachBody, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint allows you to upload an asset without having to attach it to a model. This is good for one time uploads where you just want to get back a URL
         * @summary Simple asset upload
         * @param {object} file
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postAssetsSimple(file: object, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AssetSimple>> {
            const localVarAxiosArgs = await AssetsApiAxiosParamCreator(configuration).postAssetsSimple(file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update all assets in the given array of ids.
         * @summary Update Assets
         * @param {UpdateAssetBody} [updateAssetBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putAssets(updateAssetBody?: UpdateAssetBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AssetResponse>> {
            const localVarAxiosArgs = await AssetsApiAxiosParamCreator(configuration).putAssets(updateAssetBody, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Reorder assets for a model
         * @summary Reorder Assets
         * @param {ReorderAssetsBody} [reorderAssetsBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reorderAssets(reorderAssetsBody?: ReorderAssetsBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AssetsApiAxiosParamCreator(configuration).reorderAssets(reorderAssetsBody, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AssetsApi - factory interface
 * @export
 */
export const AssetsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Upload an asset to a model
         * @summary Create Asset
         * @param {string} [mimeType] Required when passing url
         * @param {string} [url] External URL to file to upload, required without file
         * @param {object} [file]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAssets(mimeType?: string, url?: string, file?: object, options?: any): AxiosPromise<AssetResponse> {
            return AssetsApiFp(configuration).postAssets(mimeType, url, file, options).then((request) => request(axios, basePath));
        },
        /**
         * Detaches any assets from a given model. Useful if you want to remove certain assets from a product (or another model) without deleting the asset itself.
         * @summary Detach an asset from it\'s model
         * @param {string} assetId The hashed asset id
         * @param {string} ownerId The hashed owner id
         * @param {AssetDetachBody} [assetDetachBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAssetsAssetIdDetachOwnerId(assetId: string, ownerId: string, assetDetachBody?: AssetDetachBody, options?: any): AxiosPromise<void> {
            return AssetsApiFp(configuration).postAssetsAssetIdDetachOwnerId(assetId, ownerId, assetDetachBody, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you to upload an asset without having to attach it to a model. This is good for one time uploads where you just want to get back a URL
         * @summary Simple asset upload
         * @param {object} file
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAssetsSimple(file: object, options?: any): AxiosPromise<AssetSimple> {
            return AssetsApiFp(configuration).postAssetsSimple(file, options).then((request) => request(axios, basePath));
        },
        /**
         * Update all assets in the given array of ids.
         * @summary Update Assets
         * @param {UpdateAssetBody} [updateAssetBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putAssets(updateAssetBody?: UpdateAssetBody, options?: any): AxiosPromise<AssetResponse> {
            return AssetsApiFp(configuration).putAssets(updateAssetBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Reorder assets for a model
         * @summary Reorder Assets
         * @param {ReorderAssetsBody} [reorderAssetsBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reorderAssets(reorderAssetsBody?: ReorderAssetsBody, options?: any): AxiosPromise<void> {
            return AssetsApiFp(configuration).reorderAssets(reorderAssetsBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AssetsApi - object-oriented interface
 * @export
 * @class AssetsApi
 * @extends {BaseAPI}
 */
export class AssetsApi extends BaseAPI {
    /**
     * Upload an asset to a model
     * @summary Create Asset
     * @param {string} [mimeType] Required when passing url
     * @param {string} [url] External URL to file to upload, required without file
     * @param {object} [file]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public postAssets(mimeType?: string, url?: string, file?: object, options?: any) {
        return AssetsApiFp(this.configuration).postAssets(mimeType, url, file, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Detaches any assets from a given model. Useful if you want to remove certain assets from a product (or another model) without deleting the asset itself.
     * @summary Detach an asset from it\'s model
     * @param {string} assetId The hashed asset id
     * @param {string} ownerId The hashed owner id
     * @param {AssetDetachBody} [assetDetachBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public postAssetsAssetIdDetachOwnerId(assetId: string, ownerId: string, assetDetachBody?: AssetDetachBody, options?: any) {
        return AssetsApiFp(this.configuration).postAssetsAssetIdDetachOwnerId(assetId, ownerId, assetDetachBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you to upload an asset without having to attach it to a model. This is good for one time uploads where you just want to get back a URL
     * @summary Simple asset upload
     * @param {object} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public postAssetsSimple(file: object, options?: any) {
        return AssetsApiFp(this.configuration).postAssetsSimple(file, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update all assets in the given array of ids.
     * @summary Update Assets
     * @param {UpdateAssetBody} [updateAssetBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public putAssets(updateAssetBody?: UpdateAssetBody, options?: any) {
        return AssetsApiFp(this.configuration).putAssets(updateAssetBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reorder assets for a model
     * @summary Reorder Assets
     * @param {ReorderAssetsBody} [reorderAssetsBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public reorderAssets(reorderAssetsBody?: ReorderAssetsBody, options?: any) {
        return AssetsApiFp(this.configuration).reorderAssets(reorderAssetsBody, options).then((request) => request(this.axios, this.basePath));
    }

}
