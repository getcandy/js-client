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
exports.SettingsApi = exports.SettingsApiFactory = exports.SettingsApiFp = exports.SettingsApiAxiosParamCreator = void 0;
const globalImportUrl = require("url");
const axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * SettingsApi - axios parameter creator
 * @export
 */
exports.SettingsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Retrieves settings that have been defined in the database.
         * @summary Get settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSettings: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/settings`;
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
         * Get specific settings.
         * @summary Get setting
         * @param {string} handle
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSettingsHandle: (handle, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'handle' is not null or undefined
            if (handle === null || handle === undefined) {
                throw new base_1.RequiredError('handle', 'Required parameter handle was null or undefined when calling getSettingsHandle.');
            }
            const localVarPath = `/settings/{handle}`
                .replace(`{${"handle"}}`, encodeURIComponent(String(handle)));
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
    };
};
/**
 * SettingsApi - functional programming interface
 * @export
 */
exports.SettingsApiFp = function (configuration) {
    return {
        /**
         * Retrieves settings that have been defined in the database.
         * @summary Get settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSettings(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.SettingsApiAxiosParamCreator(configuration).getSettings(options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Get specific settings.
         * @summary Get setting
         * @param {string} handle
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSettingsHandle(handle, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.SettingsApiAxiosParamCreator(configuration).getSettingsHandle(handle, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
/**
 * SettingsApi - factory interface
 * @export
 */
exports.SettingsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Retrieves settings that have been defined in the database.
         * @summary Get settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSettings(options) {
            return exports.SettingsApiFp(configuration).getSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Get specific settings.
         * @summary Get setting
         * @param {string} handle
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSettingsHandle(handle, options) {
            return exports.SettingsApiFp(configuration).getSettingsHandle(handle, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * SettingsApi - object-oriented interface
 * @export
 * @class SettingsApi
 * @extends {BaseAPI}
 */
class SettingsApi extends base_1.BaseAPI {
    /**
     * Retrieves settings that have been defined in the database.
     * @summary Get settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    getSettings(options) {
        return exports.SettingsApiFp(this.configuration).getSettings(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get specific settings.
     * @summary Get setting
     * @param {string} handle
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    getSettingsHandle(handle, options) {
        return exports.SettingsApiFp(this.configuration).getSettingsHandle(handle, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.SettingsApi = SettingsApi;
