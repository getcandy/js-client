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
import { ApiError } from '../models';
// @ts-ignore
import { SavedSearchCollection } from '../models';
// @ts-ignore
import { SavedSearchResponse } from '../models';
// @ts-ignore
import { SearchResponse } from '../models';
/**
 * SearchApi - axios parameter creator
 * @export
 */
export const SearchApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a saved search entry by ID.
         * @summary Delete saved search
         * @param {string} savedSearchId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSavedSearchesSavedSearchId: async (savedSearchId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'savedSearchId' is not null or undefined
            if (savedSearchId === null || savedSearchId === undefined) {
                throw new RequiredError('savedSearchId','Required parameter savedSearchId was null or undefined when calling deleteSavedSearchesSavedSearchId.');
            }
            const localVarPath = `/saved-searches/{savedSearchId}`
                .replace(`{${"savedSearchId"}}`, encodeURIComponent(String(savedSearchId)));
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
         * Returns a list of current saved searches for products
         * @summary Get saved searches
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSavedSearches: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/saved-searches/product`;
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
         * Search across products or categories  You can filter across attributes by adding key=value to the search query, for filtering multiple values use key=value1:value2
         * @summary Search GetCandy
         * @param {string} [channel]
         * @param {string} [category]
         * @param {number} [page]
         * @param {'categories' | 'products'} [searchType]
         * @param {string} [term]
         * @param {boolean} [rank] Whether to rank results based on config
         * @param {boolean} [idsOnly] Will only return result ID\&#39;s, good for performance
         * @param {string} [include]
         * @param {string} [sort]
         * @param {boolean} [fullResponse]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSearch: async (channel?: string, category?: string, page?: number, searchType?: 'categories' | 'products', term?: string, rank?: boolean, idsOnly?: boolean, include?: string, sort?: string, fullResponse?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/search`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (channel !== undefined) {
                localVarQueryParameter['channel'] = channel;
            }

            if (category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (searchType !== undefined) {
                localVarQueryParameter['search_type'] = searchType;
            }

            if (term !== undefined) {
                localVarQueryParameter['term'] = term;
            }

            if (rank !== undefined) {
                localVarQueryParameter['rank'] = rank;
            }

            if (idsOnly !== undefined) {
                localVarQueryParameter['ids_only'] = idsOnly;
            }

            if (include !== undefined) {
                localVarQueryParameter['include'] = include;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (fullResponse !== undefined) {
                localVarQueryParameter['full_response'] = fullResponse;
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
         * @summary Get saved search
         * @param {string} savedSearchId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        savedSearchesSavedSearchIdGet: async (savedSearchId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'savedSearchId' is not null or undefined
            if (savedSearchId === null || savedSearchId === undefined) {
                throw new RequiredError('savedSearchId','Required parameter savedSearchId was null or undefined when calling savedSearchesSavedSearchIdGet.');
            }
            const localVarPath = `/saved-searches/{savedSearchId}`
                .replace(`{${"savedSearchId"}}`, encodeURIComponent(String(savedSearchId)));
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
 * SearchApi - functional programming interface
 * @export
 */
export const SearchApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Delete a saved search entry by ID.
         * @summary Delete saved search
         * @param {string} savedSearchId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSavedSearchesSavedSearchId(savedSearchId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await SearchApiAxiosParamCreator(configuration).deleteSavedSearchesSavedSearchId(savedSearchId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a list of current saved searches for products
         * @summary Get saved searches
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSavedSearches(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SavedSearchCollection>> {
            const localVarAxiosArgs = await SearchApiAxiosParamCreator(configuration).getSavedSearches(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Search across products or categories  You can filter across attributes by adding key=value to the search query, for filtering multiple values use key=value1:value2
         * @summary Search GetCandy
         * @param {string} [channel]
         * @param {string} [category]
         * @param {number} [page]
         * @param {'categories' | 'products'} [searchType]
         * @param {string} [term]
         * @param {boolean} [rank] Whether to rank results based on config
         * @param {boolean} [idsOnly] Will only return result ID\&#39;s, good for performance
         * @param {string} [include]
         * @param {string} [sort]
         * @param {boolean} [fullResponse]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSearch(channel?: string, category?: string, page?: number, searchType?: 'categories' | 'products', term?: string, rank?: boolean, idsOnly?: boolean, include?: string, sort?: string, fullResponse?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchResponse>> {
            const localVarAxiosArgs = await SearchApiAxiosParamCreator(configuration).getSearch(channel, category, page, searchType, term, rank, idsOnly, include, sort, fullResponse, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Get saved search
         * @param {string} savedSearchId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async savedSearchesSavedSearchIdGet(savedSearchId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SavedSearchResponse>> {
            const localVarAxiosArgs = await SearchApiAxiosParamCreator(configuration).savedSearchesSavedSearchIdGet(savedSearchId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SearchApi - factory interface
 * @export
 */
export const SearchApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Delete a saved search entry by ID.
         * @summary Delete saved search
         * @param {string} savedSearchId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSavedSearchesSavedSearchId(savedSearchId: string, options?: any): AxiosPromise<void> {
            return SearchApiFp(configuration).deleteSavedSearchesSavedSearchId(savedSearchId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of current saved searches for products
         * @summary Get saved searches
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSavedSearches(options?: any): AxiosPromise<SavedSearchCollection> {
            return SearchApiFp(configuration).getSavedSearches(options).then((request) => request(axios, basePath));
        },
        /**
         * Search across products or categories  You can filter across attributes by adding key=value to the search query, for filtering multiple values use key=value1:value2
         * @summary Search GetCandy
         * @param {string} [channel]
         * @param {string} [category]
         * @param {number} [page]
         * @param {'categories' | 'products'} [searchType]
         * @param {string} [term]
         * @param {boolean} [rank] Whether to rank results based on config
         * @param {boolean} [idsOnly] Will only return result ID\&#39;s, good for performance
         * @param {string} [include]
         * @param {string} [sort]
         * @param {boolean} [fullResponse]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSearch(channel?: string, category?: string, page?: number, searchType?: 'categories' | 'products', term?: string, rank?: boolean, idsOnly?: boolean, include?: string, sort?: string, fullResponse?: boolean, options?: any): AxiosPromise<SearchResponse> {
            return SearchApiFp(configuration).getSearch(channel, category, page, searchType, term, rank, idsOnly, include, sort, fullResponse, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get saved search
         * @param {string} savedSearchId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        savedSearchesSavedSearchIdGet(savedSearchId: string, options?: any): AxiosPromise<SavedSearchResponse> {
            return SearchApiFp(configuration).savedSearchesSavedSearchIdGet(savedSearchId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SearchApi - object-oriented interface
 * @export
 * @class SearchApi
 * @extends {BaseAPI}
 */
export class SearchApi extends BaseAPI {
    /**
     * Delete a saved search entry by ID.
     * @summary Delete saved search
     * @param {string} savedSearchId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public deleteSavedSearchesSavedSearchId(savedSearchId: string, options?: any) {
        return SearchApiFp(this.configuration).deleteSavedSearchesSavedSearchId(savedSearchId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of current saved searches for products
     * @summary Get saved searches
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public getSavedSearches(options?: any) {
        return SearchApiFp(this.configuration).getSavedSearches(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search across products or categories  You can filter across attributes by adding key=value to the search query, for filtering multiple values use key=value1:value2
     * @summary Search GetCandy
     * @param {string} [channel]
     * @param {string} [category]
     * @param {number} [page]
     * @param {'categories' | 'products'} [searchType]
     * @param {string} [term]
     * @param {boolean} [rank] Whether to rank results based on config
     * @param {boolean} [idsOnly] Will only return result ID\&#39;s, good for performance
     * @param {string} [include]
     * @param {string} [sort]
     * @param {boolean} [fullResponse]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public getSearch(channel?: string, category?: string, page?: number, searchType?: 'categories' | 'products', term?: string, rank?: boolean, idsOnly?: boolean, include?: string, sort?: string, fullResponse?: boolean, options?: any) {
        return SearchApiFp(this.configuration).getSearch(channel, category, page, searchType, term, rank, idsOnly, include, sort, fullResponse, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get saved search
     * @param {string} savedSearchId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public savedSearchesSavedSearchIdGet(savedSearchId: string, options?: any) {
        return SearchApiFp(this.configuration).savedSearchesSavedSearchIdGet(savedSearchId, options).then((request) => request(this.axios, this.basePath));
    }

}
