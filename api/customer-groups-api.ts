// tslint:disable
/**
 * GetCandy
 * The GetCandy API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@getcandy.io
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
import { CustomerGroupCollection } from '../models';
// @ts-ignore
import { CustomerGroupResponse } from '../models';
// @ts-ignore
import { Unprocessable } from '../models';
/**
 * CustomerGroupsApi - axios parameter creator
 * @export
 */
export const CustomerGroupsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete the customer group resource
         * @param {string} customerGroupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomerGroupsCustomerGroupId: async (customerGroupId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerGroupId' is not null or undefined
            if (customerGroupId === null || customerGroupId === undefined) {
                throw new RequiredError('customerGroupId','Required parameter customerGroupId was null or undefined when calling deleteCustomerGroupsCustomerGroupId.');
            }
            const localVarPath = `/customer-groups/{customerGroupId}`
                .replace(`{${"customerGroupId"}}`, encodeURIComponent(String(customerGroupId)));
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
         * 
         * @summary Get a single customer group
         * @param {string} customerGroupId 
         * @param {string} [includes] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerGroupCustomerGroupId: async (customerGroupId: string, includes?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerGroupId' is not null or undefined
            if (customerGroupId === null || customerGroupId === undefined) {
                throw new RequiredError('customerGroupId','Required parameter customerGroupId was null or undefined when calling getCustomerGroupCustomerGroupId.');
            }
            const localVarPath = `/customer-groups/{customerGroupId}`
                .replace(`{${"customerGroupId"}}`, encodeURIComponent(String(customerGroupId)));
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
         * Gets a paginated list of all customer groups
         * @summary Get all customer groups
         * @param {string} [includes] Comma separated includes for the resource
         * @param {number} [perPage] How many results per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerGroups: async (includes?: string, perPage?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/customer-groups`;
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
         * Create a new customer group
         * @summary Create a new customer group
         * @param {string} [handle] 
         * @param {string} [name] 
         * @param {boolean} [_default] 
         * @param {boolean} [system] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCustomerGroups: async (handle?: string, name?: string, _default?: boolean, system?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/customer-groups`;
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
    
            if (_default !== undefined) { 
                localVarFormParams.append('default', _default as any);
            }
    
            if (system !== undefined) { 
                localVarFormParams.append('system', system as any);
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
         * @summary Update the customer group resource
         * @param {string} customerGroupId 
         * @param {string} [handle] 
         * @param {string} [name] 
         * @param {boolean} [_default] 
         * @param {boolean} [system] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putCustomerGroupsCustomerGroupId: async (customerGroupId: string, handle?: string, name?: string, _default?: boolean, system?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerGroupId' is not null or undefined
            if (customerGroupId === null || customerGroupId === undefined) {
                throw new RequiredError('customerGroupId','Required parameter customerGroupId was null or undefined when calling putCustomerGroupsCustomerGroupId.');
            }
            const localVarPath = `/customer-groups/{customerGroupId}`
                .replace(`{${"customerGroupId"}}`, encodeURIComponent(String(customerGroupId)));
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
    
            if (_default !== undefined) { 
                localVarFormParams.append('default', _default as any);
            }
    
            if (system !== undefined) { 
                localVarFormParams.append('system', system as any);
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
 * CustomerGroupsApi - functional programming interface
 * @export
 */
export const CustomerGroupsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete the customer group resource
         * @param {string} customerGroupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCustomerGroupsCustomerGroupId(customerGroupId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CustomerGroupsApiAxiosParamCreator(configuration).deleteCustomerGroupsCustomerGroupId(customerGroupId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get a single customer group
         * @param {string} customerGroupId 
         * @param {string} [includes] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomerGroupCustomerGroupId(customerGroupId: string, includes?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerGroupResponse>> {
            const localVarAxiosArgs = await CustomerGroupsApiAxiosParamCreator(configuration).getCustomerGroupCustomerGroupId(customerGroupId, includes, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets a paginated list of all customer groups
         * @summary Get all customer groups
         * @param {string} [includes] Comma separated includes for the resource
         * @param {number} [perPage] How many results per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomerGroups(includes?: string, perPage?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerGroupCollection>> {
            const localVarAxiosArgs = await CustomerGroupsApiAxiosParamCreator(configuration).getCustomerGroups(includes, perPage, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create a new customer group
         * @summary Create a new customer group
         * @param {string} [handle] 
         * @param {string} [name] 
         * @param {boolean} [_default] 
         * @param {boolean} [system] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCustomerGroups(handle?: string, name?: string, _default?: boolean, system?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerGroupResponse>> {
            const localVarAxiosArgs = await CustomerGroupsApiAxiosParamCreator(configuration).postCustomerGroups(handle, name, _default, system, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update the customer group resource
         * @param {string} customerGroupId 
         * @param {string} [handle] 
         * @param {string} [name] 
         * @param {boolean} [_default] 
         * @param {boolean} [system] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putCustomerGroupsCustomerGroupId(customerGroupId: string, handle?: string, name?: string, _default?: boolean, system?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerGroupResponse>> {
            const localVarAxiosArgs = await CustomerGroupsApiAxiosParamCreator(configuration).putCustomerGroupsCustomerGroupId(customerGroupId, handle, name, _default, system, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CustomerGroupsApi - factory interface
 * @export
 */
export const CustomerGroupsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Delete the customer group resource
         * @param {string} customerGroupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomerGroupsCustomerGroupId(customerGroupId: string, options?: any): AxiosPromise<void> {
            return CustomerGroupsApiFp(configuration).deleteCustomerGroupsCustomerGroupId(customerGroupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a single customer group
         * @param {string} customerGroupId 
         * @param {string} [includes] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerGroupCustomerGroupId(customerGroupId: string, includes?: string, options?: any): AxiosPromise<CustomerGroupResponse> {
            return CustomerGroupsApiFp(configuration).getCustomerGroupCustomerGroupId(customerGroupId, includes, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a paginated list of all customer groups
         * @summary Get all customer groups
         * @param {string} [includes] Comma separated includes for the resource
         * @param {number} [perPage] How many results per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerGroups(includes?: string, perPage?: number, options?: any): AxiosPromise<CustomerGroupCollection> {
            return CustomerGroupsApiFp(configuration).getCustomerGroups(includes, perPage, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new customer group
         * @summary Create a new customer group
         * @param {string} [handle] 
         * @param {string} [name] 
         * @param {boolean} [_default] 
         * @param {boolean} [system] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCustomerGroups(handle?: string, name?: string, _default?: boolean, system?: boolean, options?: any): AxiosPromise<CustomerGroupResponse> {
            return CustomerGroupsApiFp(configuration).postCustomerGroups(handle, name, _default, system, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update the customer group resource
         * @param {string} customerGroupId 
         * @param {string} [handle] 
         * @param {string} [name] 
         * @param {boolean} [_default] 
         * @param {boolean} [system] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putCustomerGroupsCustomerGroupId(customerGroupId: string, handle?: string, name?: string, _default?: boolean, system?: boolean, options?: any): AxiosPromise<CustomerGroupResponse> {
            return CustomerGroupsApiFp(configuration).putCustomerGroupsCustomerGroupId(customerGroupId, handle, name, _default, system, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CustomerGroupsApi - object-oriented interface
 * @export
 * @class CustomerGroupsApi
 * @extends {BaseAPI}
 */
export class CustomerGroupsApi extends BaseAPI {
    /**
     * 
     * @summary Delete the customer group resource
     * @param {string} customerGroupId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerGroupsApi
     */
    public deleteCustomerGroupsCustomerGroupId(customerGroupId: string, options?: any) {
        return CustomerGroupsApiFp(this.configuration).deleteCustomerGroupsCustomerGroupId(customerGroupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a single customer group
     * @param {string} customerGroupId 
     * @param {string} [includes] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerGroupsApi
     */
    public getCustomerGroupCustomerGroupId(customerGroupId: string, includes?: string, options?: any) {
        return CustomerGroupsApiFp(this.configuration).getCustomerGroupCustomerGroupId(customerGroupId, includes, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a paginated list of all customer groups
     * @summary Get all customer groups
     * @param {string} [includes] Comma separated includes for the resource
     * @param {number} [perPage] How many results per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerGroupsApi
     */
    public getCustomerGroups(includes?: string, perPage?: number, options?: any) {
        return CustomerGroupsApiFp(this.configuration).getCustomerGroups(includes, perPage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new customer group
     * @summary Create a new customer group
     * @param {string} [handle] 
     * @param {string} [name] 
     * @param {boolean} [_default] 
     * @param {boolean} [system] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerGroupsApi
     */
    public postCustomerGroups(handle?: string, name?: string, _default?: boolean, system?: boolean, options?: any) {
        return CustomerGroupsApiFp(this.configuration).postCustomerGroups(handle, name, _default, system, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update the customer group resource
     * @param {string} customerGroupId 
     * @param {string} [handle] 
     * @param {string} [name] 
     * @param {boolean} [_default] 
     * @param {boolean} [system] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerGroupsApi
     */
    public putCustomerGroupsCustomerGroupId(customerGroupId: string, handle?: string, name?: string, _default?: boolean, system?: boolean, options?: any) {
        return CustomerGroupsApiFp(this.configuration).putCustomerGroupsCustomerGroupId(customerGroupId, handle, name, _default, system, options).then((request) => request(this.axios, this.basePath));
    }

}
