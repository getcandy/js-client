"use strict";
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
exports.VersioningApi = exports.VersioningApiFactory = exports.VersioningApiFp = exports.VersioningApiAxiosParamCreator = void 0;
const globalImportUrl = require("url");
const axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * VersioningApi - axios parameter creator
 * @export
 */
exports.VersioningApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Restores a model version
         * @summary Restore model
         * @param {string} modelId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postVersionsModelIdRestore: (modelId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'modelId' is not null or undefined
            if (modelId === null || modelId === undefined) {
                throw new base_1.RequiredError('modelId', 'Required parameter modelId was null or undefined when calling postVersionsModelIdRestore.');
            }
            const localVarPath = `/versions/{modelId}/restore`
                .replace(`{${"modelId"}}`, encodeURIComponent(String(modelId)));
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
    };
};
/**
 * VersioningApi - functional programming interface
 * @export
 */
exports.VersioningApiFp = function (configuration) {
    return {
        /**
         * Restores a model version
         * @summary Restore model
         * @param {string} modelId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postVersionsModelIdRestore(modelId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.VersioningApiAxiosParamCreator(configuration).postVersionsModelIdRestore(modelId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
/**
 * VersioningApi - factory interface
 * @export
 */
exports.VersioningApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Restores a model version
         * @summary Restore model
         * @param {string} modelId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postVersionsModelIdRestore(modelId, options) {
            return exports.VersioningApiFp(configuration).postVersionsModelIdRestore(modelId, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * VersioningApi - object-oriented interface
 * @export
 * @class VersioningApi
 * @extends {BaseAPI}
 */
class VersioningApi extends base_1.BaseAPI {
    /**
     * Restores a model version
     * @summary Restore model
     * @param {string} modelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersioningApi
     */
    postVersionsModelIdRestore(modelId, options) {
        return exports.VersioningApiFp(this.configuration).postVersionsModelIdRestore(modelId, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.VersioningApi = VersioningApi;
