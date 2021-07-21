"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsApi = exports.CollectionsApiFactory = exports.CollectionsApiFp = exports.CollectionsApiAxiosParamCreator = void 0;
const globalImportUrl = require("url");
const axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * CollectionsApi - axios parameter creator
 * @export
 */
exports.CollectionsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Delete a Collection by its ID
         * @summary Delete Collection
         * @param {string} collectionId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCollectionsCollectionId: (collectionId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'collectionId' is not null or undefined
            if (collectionId === null || collectionId === undefined) {
                throw new base_1.RequiredError('collectionId', 'Required parameter collectionId was null or undefined when calling deleteCollectionsCollectionId.');
            }
            const localVarPath = `/collections/{collectionId}`
                .replace(`{${"collectionId"}}`, encodeURIComponent(String(collectionId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign(Object.assign(Object.assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Get a paginated response of collections.
         * @summary Get Collections
         * @param {'routes' | 'layout' | 'channels' | 'assets' | 'attributes' | 'routes' | 'products' | 'customer_groups'} [include]
         * @param {string} [perPage]
         * @param {string} [fullResponse]
         * @param {string} [sort]
         * @param {string} [page]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollections: (include, perPage, fullResponse, sort, page, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/collections`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (include !== undefined) {
                localVarQueryParameter['include'] = include;
            }
            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }
            if (fullResponse !== undefined) {
                localVarQueryParameter['full_response'] = fullResponse;
            }
            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            localVarUrlObj.query = Object.assign(Object.assign(Object.assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Get a single Collection by its ID
         * @summary Single Collection
         * @param {string} collectionId
         * @param {string} [include]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollectionsCollectionId: (collectionId, include, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'collectionId' is not null or undefined
            if (collectionId === null || collectionId === undefined) {
                throw new base_1.RequiredError('collectionId', 'Required parameter collectionId was null or undefined when calling getCollectionsCollectionId.');
            }
            const localVarPath = `/collections/{collectionId}`
                .replace(`{${"collectionId"}}`, encodeURIComponent(String(collectionId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (include !== undefined) {
                localVarQueryParameter['include'] = include;
            }
            localVarUrlObj.query = Object.assign(Object.assign(Object.assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Create a new collection.
         * @summary Create Collection
         * @param {InlineObject3} [inlineObject3]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCollections: (inlineObject3, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/collections`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign(Object.assign(Object.assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof inlineObject3 !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(inlineObject3 !== undefined ? inlineObject3 : {}) : (inlineObject3 || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Syncs products with a collection.
         * @summary Update a collection\'s products
         * @param {string} collectionId
         * @param {InlineObject2} [inlineObject2]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCollectionsCollectionIdProducts: (collectionId, inlineObject2, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'collectionId' is not null or undefined
            if (collectionId === null || collectionId === undefined) {
                throw new base_1.RequiredError('collectionId', 'Required parameter collectionId was null or undefined when calling postCollectionsCollectionIdProducts.');
            }
            const localVarPath = `/collections/{collectionId}/products`
                .replace(`{${"collectionId"}}`, encodeURIComponent(String(collectionId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign(Object.assign(Object.assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof inlineObject2 !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(inlineObject2 !== undefined ? inlineObject2 : {}) : (inlineObject2 || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * This request will allow you to attach routes to a collection
         * @summary Update a collection\'s routes
         * @param {string} collectionId
         * @param {InlineObject1} [inlineObject1]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCollectionsCollectionRoutes: (collectionId, inlineObject1, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'collectionId' is not null or undefined
            if (collectionId === null || collectionId === undefined) {
                throw new base_1.RequiredError('collectionId', 'Required parameter collectionId was null or undefined when calling postCollectionsCollectionRoutes.');
            }
            const localVarPath = `/collections/{collectionId}/routes`
                .replace(`{${"collectionId"}}`, encodeURIComponent(String(collectionId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign(Object.assign(Object.assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof inlineObject1 !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(inlineObject1 !== undefined ? inlineObject1 : {}) : (inlineObject1 || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Update a Collection by its ID.
         * @summary Update Collection
         * @param {string} collectionId
         * @param {InlineObject4} [inlineObject4]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putCollectionsCollectionId: (collectionId, inlineObject4, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'collectionId' is not null or undefined
            if (collectionId === null || collectionId === undefined) {
                throw new base_1.RequiredError('collectionId', 'Required parameter collectionId was null or undefined when calling putCollectionsCollectionId.');
            }
            const localVarPath = `/collections/{collectionId}`
                .replace(`{${"collectionId"}}`, encodeURIComponent(String(collectionId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign(Object.assign(Object.assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof inlineObject4 !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(inlineObject4 !== undefined ? inlineObject4 : {}) : (inlineObject4 || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * CollectionsApi - functional programming interface
 * @export
 */
exports.CollectionsApiFp = function (configuration) {
    return {
        /**
         * Delete a Collection by its ID
         * @summary Delete Collection
         * @param {string} collectionId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCollectionsCollectionId(collectionId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.CollectionsApiAxiosParamCreator(configuration).deleteCollectionsCollectionId(collectionId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Get a paginated response of collections.
         * @summary Get Collections
         * @param {'routes' | 'layout' | 'channels' | 'assets' | 'attributes' | 'routes' | 'products' | 'customer_groups'} [include]
         * @param {string} [perPage]
         * @param {string} [fullResponse]
         * @param {string} [sort]
         * @param {string} [page]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollections(include, perPage, fullResponse, sort, page, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.CollectionsApiAxiosParamCreator(configuration).getCollections(include, perPage, fullResponse, sort, page, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Get a single Collection by its ID
         * @summary Single Collection
         * @param {string} collectionId
         * @param {string} [include]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollectionsCollectionId(collectionId, include, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.CollectionsApiAxiosParamCreator(configuration).getCollectionsCollectionId(collectionId, include, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Create a new collection.
         * @summary Create Collection
         * @param {InlineObject3} [inlineObject3]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCollections(inlineObject3, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.CollectionsApiAxiosParamCreator(configuration).postCollections(inlineObject3, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Syncs products with a collection.
         * @summary Update a collection\'s products
         * @param {string} collectionId
         * @param {InlineObject2} [inlineObject2]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCollectionsCollectionIdProducts(collectionId, inlineObject2, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.CollectionsApiAxiosParamCreator(configuration).postCollectionsCollectionIdProducts(collectionId, inlineObject2, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * This request will allow you to attach routes to a collection
         * @summary Update a collection\'s routes
         * @param {string} collectionId
         * @param {InlineObject1} [inlineObject1]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCollectionsCollectionRoutes(collectionId, inlineObject1, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.CollectionsApiAxiosParamCreator(configuration).postCollectionsCollectionRoutes(collectionId, inlineObject1, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Update a Collection by its ID.
         * @summary Update Collection
         * @param {string} collectionId
         * @param {InlineObject4} [inlineObject4]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putCollectionsCollectionId(collectionId, inlineObject4, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.CollectionsApiAxiosParamCreator(configuration).putCollectionsCollectionId(collectionId, inlineObject4, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
/**
 * CollectionsApi - factory interface
 * @export
 */
exports.CollectionsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Delete a Collection by its ID
         * @summary Delete Collection
         * @param {string} collectionId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCollectionsCollectionId(collectionId, options) {
            return exports.CollectionsApiFp(configuration).deleteCollectionsCollectionId(collectionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a paginated response of collections.
         * @summary Get Collections
         * @param {'routes' | 'layout' | 'channels' | 'assets' | 'attributes' | 'routes' | 'products' | 'customer_groups'} [include]
         * @param {string} [perPage]
         * @param {string} [fullResponse]
         * @param {string} [sort]
         * @param {string} [page]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollections(include, perPage, fullResponse, sort, page, options) {
            return exports.CollectionsApiFp(configuration).getCollections(include, perPage, fullResponse, sort, page, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single Collection by its ID
         * @summary Single Collection
         * @param {string} collectionId
         * @param {string} [include]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollectionsCollectionId(collectionId, include, options) {
            return exports.CollectionsApiFp(configuration).getCollectionsCollectionId(collectionId, include, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new collection.
         * @summary Create Collection
         * @param {InlineObject3} [inlineObject3]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCollections(inlineObject3, options) {
            return exports.CollectionsApiFp(configuration).postCollections(inlineObject3, options).then((request) => request(axios, basePath));
        },
        /**
         * Syncs products with a collection.
         * @summary Update a collection\'s products
         * @param {string} collectionId
         * @param {InlineObject2} [inlineObject2]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCollectionsCollectionIdProducts(collectionId, inlineObject2, options) {
            return exports.CollectionsApiFp(configuration).postCollectionsCollectionIdProducts(collectionId, inlineObject2, options).then((request) => request(axios, basePath));
        },
        /**
         * This request will allow you to attach routes to a collection
         * @summary Update a collection\'s routes
         * @param {string} collectionId
         * @param {InlineObject1} [inlineObject1]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCollectionsCollectionRoutes(collectionId, inlineObject1, options) {
            return exports.CollectionsApiFp(configuration).postCollectionsCollectionRoutes(collectionId, inlineObject1, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a Collection by its ID.
         * @summary Update Collection
         * @param {string} collectionId
         * @param {InlineObject4} [inlineObject4]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putCollectionsCollectionId(collectionId, inlineObject4, options) {
            return exports.CollectionsApiFp(configuration).putCollectionsCollectionId(collectionId, inlineObject4, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * CollectionsApi - object-oriented interface
 * @export
 * @class CollectionsApi
 * @extends {BaseAPI}
 */
class CollectionsApi extends base_1.BaseAPI {
    /**
     * Delete a Collection by its ID
     * @summary Delete Collection
     * @param {string} collectionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApi
     */
    deleteCollectionsCollectionId(collectionId, options) {
        return exports.CollectionsApiFp(this.configuration).deleteCollectionsCollectionId(collectionId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a paginated response of collections.
     * @summary Get Collections
     * @param {'routes' | 'layout' | 'channels' | 'assets' | 'attributes' | 'routes' | 'products' | 'customer_groups'} [include]
     * @param {string} [perPage]
     * @param {string} [fullResponse]
     * @param {string} [sort]
     * @param {string} [page]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApi
     */
    getCollections(include, perPage, fullResponse, sort, page, options) {
        return exports.CollectionsApiFp(this.configuration).getCollections(include, perPage, fullResponse, sort, page, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a single Collection by its ID
     * @summary Single Collection
     * @param {string} collectionId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApi
     */
    getCollectionsCollectionId(collectionId, include, options) {
        return exports.CollectionsApiFp(this.configuration).getCollectionsCollectionId(collectionId, include, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a new collection.
     * @summary Create Collection
     * @param {InlineObject3} [inlineObject3]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApi
     */
    postCollections(inlineObject3, options) {
        return exports.CollectionsApiFp(this.configuration).postCollections(inlineObject3, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Syncs products with a collection.
     * @summary Update a collection\'s products
     * @param {string} collectionId
     * @param {InlineObject2} [inlineObject2]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApi
     */
    postCollectionsCollectionIdProducts(collectionId, inlineObject2, options) {
        return exports.CollectionsApiFp(this.configuration).postCollectionsCollectionIdProducts(collectionId, inlineObject2, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This request will allow you to attach routes to a collection
     * @summary Update a collection\'s routes
     * @param {string} collectionId
     * @param {InlineObject1} [inlineObject1]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApi
     */
    postCollectionsCollectionRoutes(collectionId, inlineObject1, options) {
        return exports.CollectionsApiFp(this.configuration).postCollectionsCollectionRoutes(collectionId, inlineObject1, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a Collection by its ID.
     * @summary Update Collection
     * @param {string} collectionId
     * @param {InlineObject4} [inlineObject4]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApi
     */
    putCollectionsCollectionId(collectionId, inlineObject4, options) {
        return exports.CollectionsApiFp(this.configuration).putCollectionsCollectionId(collectionId, inlineObject4, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.CollectionsApi = CollectionsApi;
