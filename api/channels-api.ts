// tslint:disable
/**
 * GetCandy
 * The GetCandy API
 *
 * The version of the OpenAPI document: 0.12.0
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
import { ApiError } from '../models';
// @ts-ignore
import { Channel } from '../models';
// @ts-ignore
import { ChannelCollection } from '../models';
// @ts-ignore
import { ChannelResponse } from '../models';
// @ts-ignore
import { Unprocessable } from '../models';
/**
 * ChannelsApi - axios parameter creator
 * @export
 */
export const ChannelsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete the channel resource
         * @param {string} channelId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteChannelsChannelId: async (channelId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            if (channelId === null || channelId === undefined) {
                throw new RequiredError('channelId','Required parameter channelId was null or undefined when calling deleteChannelsChannelId.');
            }
            const localVarPath = `/channels/{channelId}`
                .replace(`{${"channelId"}}`, encodeURIComponent(String(channelId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a paginated list of all channel
         * @summary Get all channels
         * @param {string} [includes] Comma separated includes for the resource
         * @param {number} [perPage] How many results per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannels: async (includes?: string, perPage?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/channels`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includes !== undefined) {
                localVarQueryParameter['includes'] = includes;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get the channel resource
         * @param {string} channelId 
         * @param {string} [includes] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannelsChannelId: async (channelId: string, includes?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            if (channelId === null || channelId === undefined) {
                throw new RequiredError('channelId','Required parameter channelId was null or undefined when calling getChannelsChannelId.');
            }
            const localVarPath = `/channels/{channelId}`
                .replace(`{${"channelId"}}`, encodeURIComponent(String(channelId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includes !== undefined) {
                localVarQueryParameter['includes'] = includes;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new channel resource
         * @summary Create a new channel
         * @param {string} [handle] 
         * @param {string} [name] 
         * @param {string} [url] 
         * @param {boolean} [_default] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postChannels: async (handle?: string, name?: string, url?: string, _default?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/channels`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();


            if (handle !== undefined) { 
                localVarFormParams.append('handle', handle as any);
            }
    
            if (name !== undefined) { 
                localVarFormParams.append('name', name as any);
            }
    
            if (url !== undefined) { 
                localVarFormParams.append('url', url as any);
            }
    
            if (_default !== undefined) { 
                localVarFormParams.append('default', _default as any);
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
         * 
         * @summary Update the channel resource
         * @param {string} channelId 
         * @param {string} [handle] 
         * @param {string} [name] 
         * @param {string} [url] 
         * @param {boolean} [_default] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putChannelsChannelId: async (channelId: string, handle?: string, name?: string, url?: string, _default?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            if (channelId === null || channelId === undefined) {
                throw new RequiredError('channelId','Required parameter channelId was null or undefined when calling putChannelsChannelId.');
            }
            const localVarPath = `/channels/{channelId}`
                .replace(`{${"channelId"}}`, encodeURIComponent(String(channelId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();


            if (handle !== undefined) { 
                localVarFormParams.append('handle', handle as any);
            }
    
            if (name !== undefined) { 
                localVarFormParams.append('name', name as any);
            }
    
            if (url !== undefined) { 
                localVarFormParams.append('url', url as any);
            }
    
            if (_default !== undefined) { 
                localVarFormParams.append('default', _default as any);
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
    }
};

/**
 * ChannelsApi - functional programming interface
 * @export
 */
export const ChannelsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete the channel resource
         * @param {string} channelId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteChannelsChannelId(channelId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ChannelsApiAxiosParamCreator(configuration).deleteChannelsChannelId(channelId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets a paginated list of all channel
         * @summary Get all channels
         * @param {string} [includes] Comma separated includes for the resource
         * @param {number} [perPage] How many results per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChannels(includes?: string, perPage?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelCollection>> {
            const localVarAxiosArgs = await ChannelsApiAxiosParamCreator(configuration).getChannels(includes, perPage, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get the channel resource
         * @param {string} channelId 
         * @param {string} [includes] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChannelsChannelId(channelId: string, includes?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelResponse>> {
            const localVarAxiosArgs = await ChannelsApiAxiosParamCreator(configuration).getChannelsChannelId(channelId, includes, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create a new channel resource
         * @summary Create a new channel
         * @param {string} [handle] 
         * @param {string} [name] 
         * @param {string} [url] 
         * @param {boolean} [_default] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postChannels(handle?: string, name?: string, url?: string, _default?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Channel>> {
            const localVarAxiosArgs = await ChannelsApiAxiosParamCreator(configuration).postChannels(handle, name, url, _default, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update the channel resource
         * @param {string} channelId 
         * @param {string} [handle] 
         * @param {string} [name] 
         * @param {string} [url] 
         * @param {boolean} [_default] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putChannelsChannelId(channelId: string, handle?: string, name?: string, url?: string, _default?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelResponse>> {
            const localVarAxiosArgs = await ChannelsApiAxiosParamCreator(configuration).putChannelsChannelId(channelId, handle, name, url, _default, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ChannelsApi - factory interface
 * @export
 */
export const ChannelsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Delete the channel resource
         * @param {string} channelId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteChannelsChannelId(channelId: string, options?: any): AxiosPromise<void> {
            return ChannelsApiFp(configuration).deleteChannelsChannelId(channelId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a paginated list of all channel
         * @summary Get all channels
         * @param {string} [includes] Comma separated includes for the resource
         * @param {number} [perPage] How many results per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannels(includes?: string, perPage?: number, options?: any): AxiosPromise<ChannelCollection> {
            return ChannelsApiFp(configuration).getChannels(includes, perPage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the channel resource
         * @param {string} channelId 
         * @param {string} [includes] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannelsChannelId(channelId: string, includes?: string, options?: any): AxiosPromise<ChannelResponse> {
            return ChannelsApiFp(configuration).getChannelsChannelId(channelId, includes, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new channel resource
         * @summary Create a new channel
         * @param {string} [handle] 
         * @param {string} [name] 
         * @param {string} [url] 
         * @param {boolean} [_default] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postChannels(handle?: string, name?: string, url?: string, _default?: boolean, options?: any): AxiosPromise<Channel> {
            return ChannelsApiFp(configuration).postChannels(handle, name, url, _default, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update the channel resource
         * @param {string} channelId 
         * @param {string} [handle] 
         * @param {string} [name] 
         * @param {string} [url] 
         * @param {boolean} [_default] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putChannelsChannelId(channelId: string, handle?: string, name?: string, url?: string, _default?: boolean, options?: any): AxiosPromise<ChannelResponse> {
            return ChannelsApiFp(configuration).putChannelsChannelId(channelId, handle, name, url, _default, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ChannelsApi - object-oriented interface
 * @export
 * @class ChannelsApi
 * @extends {BaseAPI}
 */
export class ChannelsApi extends BaseAPI {
    /**
     * 
     * @summary Delete the channel resource
     * @param {string} channelId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    public deleteChannelsChannelId(channelId: string, options?: any) {
        return ChannelsApiFp(this.configuration).deleteChannelsChannelId(channelId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a paginated list of all channel
     * @summary Get all channels
     * @param {string} [includes] Comma separated includes for the resource
     * @param {number} [perPage] How many results per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    public getChannels(includes?: string, perPage?: number, options?: any) {
        return ChannelsApiFp(this.configuration).getChannels(includes, perPage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the channel resource
     * @param {string} channelId 
     * @param {string} [includes] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    public getChannelsChannelId(channelId: string, includes?: string, options?: any) {
        return ChannelsApiFp(this.configuration).getChannelsChannelId(channelId, includes, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new channel resource
     * @summary Create a new channel
     * @param {string} [handle] 
     * @param {string} [name] 
     * @param {string} [url] 
     * @param {boolean} [_default] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    public postChannels(handle?: string, name?: string, url?: string, _default?: boolean, options?: any) {
        return ChannelsApiFp(this.configuration).postChannels(handle, name, url, _default, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update the channel resource
     * @param {string} channelId 
     * @param {string} [handle] 
     * @param {string} [name] 
     * @param {string} [url] 
     * @param {boolean} [_default] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    public putChannelsChannelId(channelId: string, handle?: string, name?: string, url?: string, _default?: boolean, options?: any) {
        return ChannelsApiFp(this.configuration).putChannelsChannelId(channelId, handle, name, url, _default, options).then((request) => request(this.axios, this.basePath));
    }

}
