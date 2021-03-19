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
import { RootResponse } from '../models';
/**
 * RootApi - axios parameter creator
 * @export
 */
export const RootApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns information about the API
         * @summary Get root
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
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
    }
};

/**
 * RootApi - functional programming interface
 * @export
 */
export const RootApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Returns information about the API
         * @summary Get root
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RootResponse>> {
            const localVarAxiosArgs = await RootApiAxiosParamCreator(configuration).get(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RootApi - factory interface
 * @export
 */
export const RootApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Returns information about the API
         * @summary Get root
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(options?: any): AxiosPromise<RootResponse> {
            return RootApiFp(configuration).get(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RootApi - object-oriented interface
 * @export
 * @class RootApi
 * @extends {BaseAPI}
 */
export class RootApi extends BaseAPI {
    /**
     * Returns information about the API
     * @summary Get root
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RootApi
     */
    public get(options?: any) {
        return RootApiFp(this.configuration).get(options).then((request) => request(this.axios, this.basePath));
    }

}
