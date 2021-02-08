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
import { Route } from '../models';
// @ts-ignore
import { RouteCollection } from '../models';
// @ts-ignore
import { RouteResponse } from '../models';
/**
 * RoutesApi - axios parameter creator
 * @export
 */
export const RoutesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a Router by its ID
         * @summary Delete Route
         * @param {string} routeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRoutesRouteId: async (routeId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'routeId' is not null or undefined
            if (routeId === null || routeId === undefined) {
                throw new RequiredError('routeId','Required parameter routeId was null or undefined when calling deleteRoutesRouteId.');
            }
            const localVarPath = `/routes/{routeId}`
                .replace(`{${"routeId"}}`, encodeURIComponent(String(routeId)));
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
         * Returns a paginated list of Routes
         * @summary Get Routes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutes: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/routes`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
         * Get a Route by ID
         * @summary Get Route
         * @param {string} routeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutesRouteId: async (routeId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'routeId' is not null or undefined
            if (routeId === null || routeId === undefined) {
                throw new RequiredError('routeId','Required parameter routeId was null or undefined when calling getRoutesRouteId.');
            }
            const localVarPath = `/routes/{routeId}`
                .replace(`{${"routeId"}}`, encodeURIComponent(String(routeId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
         * Get a Route by searching via slug or path
         * @summary Search for Route
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutesSearch: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/routes/search`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
         * Update a Route using it\'s ID
         * @summary Update Route
         * @param {string} routeId 
         * @param {Route} [route] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putRoutesRouteId: async (routeId: string, route?: Route, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'routeId' is not null or undefined
            if (routeId === null || routeId === undefined) {
                throw new RequiredError('routeId','Required parameter routeId was null or undefined when calling putRoutesRouteId.');
            }
            const localVarPath = `/routes/{routeId}`
                .replace(`{${"routeId"}}`, encodeURIComponent(String(routeId)));
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
            const needsSerialization = (typeof route !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(route !== undefined ? route : {}) : (route || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RoutesApi - functional programming interface
 * @export
 */
export const RoutesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Delete a Router by its ID
         * @summary Delete Route
         * @param {string} routeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRoutesRouteId(routeId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await RoutesApiAxiosParamCreator(configuration).deleteRoutesRouteId(routeId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a paginated list of Routes
         * @summary Get Routes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoutes(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RouteCollection>> {
            const localVarAxiosArgs = await RoutesApiAxiosParamCreator(configuration).getRoutes(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get a Route by ID
         * @summary Get Route
         * @param {string} routeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoutesRouteId(routeId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RouteResponse>> {
            const localVarAxiosArgs = await RoutesApiAxiosParamCreator(configuration).getRoutesRouteId(routeId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get a Route by searching via slug or path
         * @summary Search for Route
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoutesSearch(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RouteResponse>> {
            const localVarAxiosArgs = await RoutesApiAxiosParamCreator(configuration).getRoutesSearch(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update a Route using it\'s ID
         * @summary Update Route
         * @param {string} routeId 
         * @param {Route} [route] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putRoutesRouteId(routeId: string, route?: Route, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RouteResponse>> {
            const localVarAxiosArgs = await RoutesApiAxiosParamCreator(configuration).putRoutesRouteId(routeId, route, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RoutesApi - factory interface
 * @export
 */
export const RoutesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Delete a Router by its ID
         * @summary Delete Route
         * @param {string} routeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRoutesRouteId(routeId: string, options?: any): AxiosPromise<void> {
            return RoutesApiFp(configuration).deleteRoutesRouteId(routeId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a paginated list of Routes
         * @summary Get Routes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutes(options?: any): AxiosPromise<RouteCollection> {
            return RoutesApiFp(configuration).getRoutes(options).then((request) => request(axios, basePath));
        },
        /**
         * Get a Route by ID
         * @summary Get Route
         * @param {string} routeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutesRouteId(routeId: string, options?: any): AxiosPromise<RouteResponse> {
            return RoutesApiFp(configuration).getRoutesRouteId(routeId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a Route by searching via slug or path
         * @summary Search for Route
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutesSearch(options?: any): AxiosPromise<RouteResponse> {
            return RoutesApiFp(configuration).getRoutesSearch(options).then((request) => request(axios, basePath));
        },
        /**
         * Update a Route using it\'s ID
         * @summary Update Route
         * @param {string} routeId 
         * @param {Route} [route] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putRoutesRouteId(routeId: string, route?: Route, options?: any): AxiosPromise<RouteResponse> {
            return RoutesApiFp(configuration).putRoutesRouteId(routeId, route, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RoutesApi - object-oriented interface
 * @export
 * @class RoutesApi
 * @extends {BaseAPI}
 */
export class RoutesApi extends BaseAPI {
    /**
     * Delete a Router by its ID
     * @summary Delete Route
     * @param {string} routeId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    public deleteRoutesRouteId(routeId: string, options?: any) {
        return RoutesApiFp(this.configuration).deleteRoutesRouteId(routeId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a paginated list of Routes
     * @summary Get Routes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    public getRoutes(options?: any) {
        return RoutesApiFp(this.configuration).getRoutes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a Route by ID
     * @summary Get Route
     * @param {string} routeId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    public getRoutesRouteId(routeId: string, options?: any) {
        return RoutesApiFp(this.configuration).getRoutesRouteId(routeId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a Route by searching via slug or path
     * @summary Search for Route
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    public getRoutesSearch(options?: any) {
        return RoutesApiFp(this.configuration).getRoutesSearch(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a Route using it\'s ID
     * @summary Update Route
     * @param {string} routeId 
     * @param {Route} [route] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    public putRoutesRouteId(routeId: string, route?: Route, options?: any) {
        return RoutesApiFp(this.configuration).putRoutesRouteId(routeId, route, options).then((request) => request(this.axios, this.basePath));
    }

}
