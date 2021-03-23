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
exports.AssociationsApi = exports.AssociationsApiFactory = exports.AssociationsApiFp = exports.AssociationsApiAxiosParamCreator = void 0;
const globalImportUrl = require("url");
const axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * AssociationsApi - axios parameter creator
 * @export
 */
exports.AssociationsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Returns a paginated response of association groups available in the system
         * @summary Paginated array of association groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssociationsGroups: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/associations/groups`;
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
 * AssociationsApi - functional programming interface
 * @export
 */
exports.AssociationsApiFp = function (configuration) {
    return {
        /**
         * Returns a paginated response of association groups available in the system
         * @summary Paginated array of association groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssociationsGroups(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.AssociationsApiAxiosParamCreator(configuration).getAssociationsGroups(options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
/**
 * AssociationsApi - factory interface
 * @export
 */
exports.AssociationsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Returns a paginated response of association groups available in the system
         * @summary Paginated array of association groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssociationsGroups(options) {
            return exports.AssociationsApiFp(configuration).getAssociationsGroups(options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * AssociationsApi - object-oriented interface
 * @export
 * @class AssociationsApi
 * @extends {BaseAPI}
 */
class AssociationsApi extends base_1.BaseAPI {
    /**
     * Returns a paginated response of association groups available in the system
     * @summary Paginated array of association groups
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssociationsApi
     */
    getAssociationsGroups(options) {
        return exports.AssociationsApiFp(this.configuration).getAssociationsGroups(options).then((request) => request(this.axios, this.basePath));
    }
}
exports.AssociationsApi = AssociationsApi;
