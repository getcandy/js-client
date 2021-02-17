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
exports.RoutesApi = exports.RoutesApiFactory = exports.RoutesApiFp = exports.RoutesApiAxiosParamCreator = void 0;
const globalImportUrl = require("url");
const axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * RoutesApi - axios parameter creator
 * @export
 */
exports.RoutesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Delete a Router by its ID
         * @summary Delete Route
         * @param {string} routeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRoutesRouteId: (routeId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'routeId' is not null or undefined
            if (routeId === null || routeId === undefined) {
                throw new base_1.RequiredError('routeId', 'Required parameter routeId was null or undefined when calling deleteRoutesRouteId.');
            }
            const localVarPath = `/routes/{routeId}`
                .replace(`{${"routeId"}}`, encodeURIComponent(String(routeId)));
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
         * Returns a paginated list of Routes
         * @summary Get Routes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutes: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/routes`;
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
         * Get a Route by ID
         * @summary Get Route
         * @param {string} routeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutesRouteId: (routeId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'routeId' is not null or undefined
            if (routeId === null || routeId === undefined) {
                throw new base_1.RequiredError('routeId', 'Required parameter routeId was null or undefined when calling getRoutesRouteId.');
            }
            const localVarPath = `/routes/{routeId}`
                .replace(`{${"routeId"}}`, encodeURIComponent(String(routeId)));
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
         * Get a Route by searching via slug or path
         * @summary Search for Route
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutesSearch: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/routes/search`;
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
         * Update a Route using it\'s ID
         * @summary Update Route
         * @param {string} routeId
         * @param {Route} [route]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putRoutesRouteId: (routeId, route, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'routeId' is not null or undefined
            if (routeId === null || routeId === undefined) {
                throw new base_1.RequiredError('routeId', 'Required parameter routeId was null or undefined when calling putRoutesRouteId.');
            }
            const localVarPath = `/routes/{routeId}`
                .replace(`{${"routeId"}}`, encodeURIComponent(String(routeId)));
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
            const needsSerialization = (typeof route !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(route !== undefined ? route : {}) : (route || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * RoutesApi - functional programming interface
 * @export
 */
exports.RoutesApiFp = function (configuration) {
    return {
        /**
         * Delete a Router by its ID
         * @summary Delete Route
         * @param {string} routeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRoutesRouteId(routeId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.RoutesApiAxiosParamCreator(configuration).deleteRoutesRouteId(routeId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Returns a paginated list of Routes
         * @summary Get Routes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutes(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.RoutesApiAxiosParamCreator(configuration).getRoutes(options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Get a Route by ID
         * @summary Get Route
         * @param {string} routeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutesRouteId(routeId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.RoutesApiAxiosParamCreator(configuration).getRoutesRouteId(routeId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Get a Route by searching via slug or path
         * @summary Search for Route
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutesSearch(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.RoutesApiAxiosParamCreator(configuration).getRoutesSearch(options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Update a Route using it\'s ID
         * @summary Update Route
         * @param {string} routeId
         * @param {Route} [route]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putRoutesRouteId(routeId, route, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.RoutesApiAxiosParamCreator(configuration).putRoutesRouteId(routeId, route, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
/**
 * RoutesApi - factory interface
 * @export
 */
exports.RoutesApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Delete a Router by its ID
         * @summary Delete Route
         * @param {string} routeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRoutesRouteId(routeId, options) {
            return exports.RoutesApiFp(configuration).deleteRoutesRouteId(routeId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a paginated list of Routes
         * @summary Get Routes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutes(options) {
            return exports.RoutesApiFp(configuration).getRoutes(options).then((request) => request(axios, basePath));
        },
        /**
         * Get a Route by ID
         * @summary Get Route
         * @param {string} routeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutesRouteId(routeId, options) {
            return exports.RoutesApiFp(configuration).getRoutesRouteId(routeId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a Route by searching via slug or path
         * @summary Search for Route
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutesSearch(options) {
            return exports.RoutesApiFp(configuration).getRoutesSearch(options).then((request) => request(axios, basePath));
        },
        /**
         * Update a Route using it\'s ID
         * @summary Update Route
         * @param {string} routeId
         * @param {Route} [route]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putRoutesRouteId(routeId, route, options) {
            return exports.RoutesApiFp(configuration).putRoutesRouteId(routeId, route, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * RoutesApi - object-oriented interface
 * @export
 * @class RoutesApi
 * @extends {BaseAPI}
 */
class RoutesApi extends base_1.BaseAPI {
    /**
     * Delete a Router by its ID
     * @summary Delete Route
     * @param {string} routeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    deleteRoutesRouteId(routeId, options) {
        return exports.RoutesApiFp(this.configuration).deleteRoutesRouteId(routeId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a paginated list of Routes
     * @summary Get Routes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    getRoutes(options) {
        return exports.RoutesApiFp(this.configuration).getRoutes(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a Route by ID
     * @summary Get Route
     * @param {string} routeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    getRoutesRouteId(routeId, options) {
        return exports.RoutesApiFp(this.configuration).getRoutesRouteId(routeId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a Route by searching via slug or path
     * @summary Search for Route
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutesApi
     */
    getRoutesSearch(options) {
        return exports.RoutesApiFp(this.configuration).getRoutesSearch(options).then((request) => request(this.axios, this.basePath));
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
    putRoutesRouteId(routeId, route, options) {
        return exports.RoutesApiFp(this.configuration).putRoutesRouteId(routeId, route, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.RoutesApi = RoutesApi;
