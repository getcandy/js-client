"use strict";
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
exports.TaxesApi = exports.TaxesApiFactory = exports.TaxesApiFp = exports.TaxesApiAxiosParamCreator = void 0;
const globalImportUrl = require("url");
const axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * TaxesApi - axios parameter creator
 * @export
 */
exports.TaxesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Delete a tax record by it\'s ID.
         * @summary Delete tax record
         * @param {string} taxId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTaxesTaxId: (taxId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'taxId' is not null or undefined
            if (taxId === null || taxId === undefined) {
                throw new base_1.RequiredError('taxId', 'Required parameter taxId was null or undefined when calling deleteTaxesTaxId.');
            }
            const localVarPath = `/taxes/{taxId}`
                .replace(`{${"taxId"}}`, encodeURIComponent(String(taxId)));
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
         * Get a paginated list of taxes
         * @summary Get taxes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaxes: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/taxes`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
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
         * Get a tax record by it\'s ID
         * @summary Get tax record
         * @param {string} taxId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaxesTaxId: (taxId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'taxId' is not null or undefined
            if (taxId === null || taxId === undefined) {
                throw new base_1.RequiredError('taxId', 'Required parameter taxId was null or undefined when calling getTaxesTaxId.');
            }
            const localVarPath = `/taxes/{taxId}`
                .replace(`{${"taxId"}}`, encodeURIComponent(String(taxId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
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
         * Create a new tax resource.
         * @summary Create tax
         * @param {InlineObject35} [inlineObject35]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTaxes: (inlineObject35, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/taxes`;
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
            const needsSerialization = (typeof inlineObject35 !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(inlineObject35 !== undefined ? inlineObject35 : {}) : (inlineObject35 || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Update a tax record by it\'s ID
         * @summary Update tax record
         * @param {string} taxId
         * @param {InlineObject36} [inlineObject36]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTaxesTaxId: (taxId, inlineObject36, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'taxId' is not null or undefined
            if (taxId === null || taxId === undefined) {
                throw new base_1.RequiredError('taxId', 'Required parameter taxId was null or undefined when calling putTaxesTaxId.');
            }
            const localVarPath = `/taxes/{taxId}`
                .replace(`{${"taxId"}}`, encodeURIComponent(String(taxId)));
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
            const needsSerialization = (typeof inlineObject36 !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(inlineObject36 !== undefined ? inlineObject36 : {}) : (inlineObject36 || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * TaxesApi - functional programming interface
 * @export
 */
exports.TaxesApiFp = function (configuration) {
    return {
        /**
         * Delete a tax record by it\'s ID.
         * @summary Delete tax record
         * @param {string} taxId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTaxesTaxId(taxId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.TaxesApiAxiosParamCreator(configuration).deleteTaxesTaxId(taxId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Get a paginated list of taxes
         * @summary Get taxes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaxes(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.TaxesApiAxiosParamCreator(configuration).getTaxes(options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Get a tax record by it\'s ID
         * @summary Get tax record
         * @param {string} taxId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaxesTaxId(taxId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.TaxesApiAxiosParamCreator(configuration).getTaxesTaxId(taxId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Create a new tax resource.
         * @summary Create tax
         * @param {InlineObject35} [inlineObject35]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTaxes(inlineObject35, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.TaxesApiAxiosParamCreator(configuration).postTaxes(inlineObject35, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Update a tax record by it\'s ID
         * @summary Update tax record
         * @param {string} taxId
         * @param {InlineObject36} [inlineObject36]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTaxesTaxId(taxId, inlineObject36, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.TaxesApiAxiosParamCreator(configuration).putTaxesTaxId(taxId, inlineObject36, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
/**
 * TaxesApi - factory interface
 * @export
 */
exports.TaxesApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Delete a tax record by it\'s ID.
         * @summary Delete tax record
         * @param {string} taxId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTaxesTaxId(taxId, options) {
            return exports.TaxesApiFp(configuration).deleteTaxesTaxId(taxId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a paginated list of taxes
         * @summary Get taxes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaxes(options) {
            return exports.TaxesApiFp(configuration).getTaxes(options).then((request) => request(axios, basePath));
        },
        /**
         * Get a tax record by it\'s ID
         * @summary Get tax record
         * @param {string} taxId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaxesTaxId(taxId, options) {
            return exports.TaxesApiFp(configuration).getTaxesTaxId(taxId, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new tax resource.
         * @summary Create tax
         * @param {InlineObject35} [inlineObject35]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTaxes(inlineObject35, options) {
            return exports.TaxesApiFp(configuration).postTaxes(inlineObject35, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a tax record by it\'s ID
         * @summary Update tax record
         * @param {string} taxId
         * @param {InlineObject36} [inlineObject36]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTaxesTaxId(taxId, inlineObject36, options) {
            return exports.TaxesApiFp(configuration).putTaxesTaxId(taxId, inlineObject36, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * TaxesApi - object-oriented interface
 * @export
 * @class TaxesApi
 * @extends {BaseAPI}
 */
class TaxesApi extends base_1.BaseAPI {
    /**
     * Delete a tax record by it\'s ID.
     * @summary Delete tax record
     * @param {string} taxId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaxesApi
     */
    deleteTaxesTaxId(taxId, options) {
        return exports.TaxesApiFp(this.configuration).deleteTaxesTaxId(taxId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a paginated list of taxes
     * @summary Get taxes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaxesApi
     */
    getTaxes(options) {
        return exports.TaxesApiFp(this.configuration).getTaxes(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a tax record by it\'s ID
     * @summary Get tax record
     * @param {string} taxId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaxesApi
     */
    getTaxesTaxId(taxId, options) {
        return exports.TaxesApiFp(this.configuration).getTaxesTaxId(taxId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a new tax resource.
     * @summary Create tax
     * @param {InlineObject35} [inlineObject35]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaxesApi
     */
    postTaxes(inlineObject35, options) {
        return exports.TaxesApiFp(this.configuration).postTaxes(inlineObject35, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a tax record by it\'s ID
     * @summary Update tax record
     * @param {string} taxId
     * @param {InlineObject36} [inlineObject36]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaxesApi
     */
    putTaxesTaxId(taxId, inlineObject36, options) {
        return exports.TaxesApiFp(this.configuration).putTaxesTaxId(taxId, inlineObject36, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.TaxesApi = TaxesApi;