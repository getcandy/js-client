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
exports.ProductFamiliesApi = exports.ProductFamiliesApiFactory = exports.ProductFamiliesApiFp = exports.ProductFamiliesApiAxiosParamCreator = void 0;
const globalImportUrl = require("url");
const axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * ProductFamiliesApi - axios parameter creator
 * @export
 */
exports.ProductFamiliesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Sends a request to delete a product family
         * @summary Delete product family
         * @param {string} productFamilyId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProductFamiliesProductFamilyId: (productFamilyId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'productFamilyId' is not null or undefined
            if (productFamilyId === null || productFamilyId === undefined) {
                throw new base_1.RequiredError('productFamilyId', 'Required parameter productFamilyId was null or undefined when calling deleteProductFamiliesProductFamilyId.');
            }
            const localVarPath = `/product-families/{productFamilyId}`
                .replace(`{${"productFamilyId"}}`, encodeURIComponent(String(productFamilyId)));
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
         * Returns a paginated list of all product families.
         * @summary Get product families
         * @param {string} [include] Define included relationships
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductFamilies: (include, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/product-families`;
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
         * Returns a single product family based on ID.
         * @summary Get a product family
         * @param {string} productFamilyId
         * @param {string} [includes]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductFamiliesProductFamilyId: (productFamilyId, includes, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'productFamilyId' is not null or undefined
            if (productFamilyId === null || productFamilyId === undefined) {
                throw new base_1.RequiredError('productFamilyId', 'Required parameter productFamilyId was null or undefined when calling getProductFamiliesProductFamilyId.');
            }
            const localVarPath = `/product-families/{productFamilyId}`
                .replace(`{${"productFamilyId"}}`, encodeURIComponent(String(productFamilyId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (includes !== undefined) {
                localVarQueryParameter['includes'] = includes;
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
         * Create a new product family.
         * @summary Create product family
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postProductFamilies: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/product-families`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
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
         * Update a product family
         * @summary Update product family
         * @param {string} productFamilyId
         * @param {InlineObject15} [inlineObject15]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putProductFamiliesProductFamilyId: (productFamilyId, inlineObject15, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'productFamilyId' is not null or undefined
            if (productFamilyId === null || productFamilyId === undefined) {
                throw new base_1.RequiredError('productFamilyId', 'Required parameter productFamilyId was null or undefined when calling putProductFamiliesProductFamilyId.');
            }
            const localVarPath = `/product-families/{productFamilyId}`
                .replace(`{${"productFamilyId"}}`, encodeURIComponent(String(productFamilyId)));
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
            const needsSerialization = (typeof inlineObject15 !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(inlineObject15 !== undefined ? inlineObject15 : {}) : (inlineObject15 || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * ProductFamiliesApi - functional programming interface
 * @export
 */
exports.ProductFamiliesApiFp = function (configuration) {
    return {
        /**
         * Sends a request to delete a product family
         * @summary Delete product family
         * @param {string} productFamilyId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProductFamiliesProductFamilyId(productFamilyId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ProductFamiliesApiAxiosParamCreator(configuration).deleteProductFamiliesProductFamilyId(productFamilyId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Returns a paginated list of all product families.
         * @summary Get product families
         * @param {string} [include] Define included relationships
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductFamilies(include, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ProductFamiliesApiAxiosParamCreator(configuration).getProductFamilies(include, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Returns a single product family based on ID.
         * @summary Get a product family
         * @param {string} productFamilyId
         * @param {string} [includes]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductFamiliesProductFamilyId(productFamilyId, includes, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ProductFamiliesApiAxiosParamCreator(configuration).getProductFamiliesProductFamilyId(productFamilyId, includes, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Create a new product family.
         * @summary Create product family
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postProductFamilies(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ProductFamiliesApiAxiosParamCreator(configuration).postProductFamilies(options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Update a product family
         * @summary Update product family
         * @param {string} productFamilyId
         * @param {InlineObject15} [inlineObject15]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putProductFamiliesProductFamilyId(productFamilyId, inlineObject15, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ProductFamiliesApiAxiosParamCreator(configuration).putProductFamiliesProductFamilyId(productFamilyId, inlineObject15, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
/**
 * ProductFamiliesApi - factory interface
 * @export
 */
exports.ProductFamiliesApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Sends a request to delete a product family
         * @summary Delete product family
         * @param {string} productFamilyId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProductFamiliesProductFamilyId(productFamilyId, options) {
            return exports.ProductFamiliesApiFp(configuration).deleteProductFamiliesProductFamilyId(productFamilyId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a paginated list of all product families.
         * @summary Get product families
         * @param {string} [include] Define included relationships
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductFamilies(include, options) {
            return exports.ProductFamiliesApiFp(configuration).getProductFamilies(include, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a single product family based on ID.
         * @summary Get a product family
         * @param {string} productFamilyId
         * @param {string} [includes]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductFamiliesProductFamilyId(productFamilyId, includes, options) {
            return exports.ProductFamiliesApiFp(configuration).getProductFamiliesProductFamilyId(productFamilyId, includes, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new product family.
         * @summary Create product family
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postProductFamilies(options) {
            return exports.ProductFamiliesApiFp(configuration).postProductFamilies(options).then((request) => request(axios, basePath));
        },
        /**
         * Update a product family
         * @summary Update product family
         * @param {string} productFamilyId
         * @param {InlineObject15} [inlineObject15]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putProductFamiliesProductFamilyId(productFamilyId, inlineObject15, options) {
            return exports.ProductFamiliesApiFp(configuration).putProductFamiliesProductFamilyId(productFamilyId, inlineObject15, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * ProductFamiliesApi - object-oriented interface
 * @export
 * @class ProductFamiliesApi
 * @extends {BaseAPI}
 */
class ProductFamiliesApi extends base_1.BaseAPI {
    /**
     * Sends a request to delete a product family
     * @summary Delete product family
     * @param {string} productFamilyId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductFamiliesApi
     */
    deleteProductFamiliesProductFamilyId(productFamilyId, options) {
        return exports.ProductFamiliesApiFp(this.configuration).deleteProductFamiliesProductFamilyId(productFamilyId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a paginated list of all product families.
     * @summary Get product families
     * @param {string} [include] Define included relationships
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductFamiliesApi
     */
    getProductFamilies(include, options) {
        return exports.ProductFamiliesApiFp(this.configuration).getProductFamilies(include, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a single product family based on ID.
     * @summary Get a product family
     * @param {string} productFamilyId
     * @param {string} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductFamiliesApi
     */
    getProductFamiliesProductFamilyId(productFamilyId, includes, options) {
        return exports.ProductFamiliesApiFp(this.configuration).getProductFamiliesProductFamilyId(productFamilyId, includes, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a new product family.
     * @summary Create product family
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductFamiliesApi
     */
    postProductFamilies(options) {
        return exports.ProductFamiliesApiFp(this.configuration).postProductFamilies(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a product family
     * @summary Update product family
     * @param {string} productFamilyId
     * @param {InlineObject15} [inlineObject15]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductFamiliesApi
     */
    putProductFamiliesProductFamilyId(productFamilyId, inlineObject15, options) {
        return exports.ProductFamiliesApiFp(this.configuration).putProductFamiliesProductFamilyId(productFamilyId, inlineObject15, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.ProductFamiliesApi = ProductFamiliesApi;
