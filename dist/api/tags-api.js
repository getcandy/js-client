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
exports.TagsApi = exports.TagsApiFactory = exports.TagsApiFp = exports.TagsApiAxiosParamCreator = void 0;
const globalImportUrl = require("url");
const axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * TagsApi - axios parameter creator
 * @export
 */
exports.TagsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Deletes a tag by it\'s ID
         * @summary Delete a tag
         * @param {string} tagId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTagsTagId: (tagId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'tagId' is not null or undefined
            if (tagId === null || tagId === undefined) {
                throw new base_1.RequiredError('tagId', 'Required parameter tagId was null or undefined when calling deleteTagsTagId.');
            }
            const localVarPath = `/tags/{tagId}`
                .replace(`{${"tagId"}}`, encodeURIComponent(String(tagId)));
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
         * Get paginated list of tags
         * @summary Get all tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTags: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/tags`;
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
         * Gets a tag by it\'s ID
         * @summary Get a tag
         * @param {string} tagId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTagsTagId: (tagId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'tagId' is not null or undefined
            if (tagId === null || tagId === undefined) {
                throw new base_1.RequiredError('tagId', 'Required parameter tagId was null or undefined when calling getTagsTagId.');
            }
            const localVarPath = `/tags/{tagId}`
                .replace(`{${"tagId"}}`, encodeURIComponent(String(tagId)));
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
         * Create a new tag
         * @summary
         * @param {InlineObject33} [inlineObject33]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTags: (inlineObject33, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/tags`;
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
            const needsSerialization = (typeof inlineObject33 !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(inlineObject33 !== undefined ? inlineObject33 : {}) : (inlineObject33 || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Updates a tag by it\'s ID
         * @summary Update a tag
         * @param {string} tagId
         * @param {InlineObject34} [inlineObject34]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTagsTagId: (tagId, inlineObject34, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'tagId' is not null or undefined
            if (tagId === null || tagId === undefined) {
                throw new base_1.RequiredError('tagId', 'Required parameter tagId was null or undefined when calling putTagsTagId.');
            }
            const localVarPath = `/tags/{tagId}`
                .replace(`{${"tagId"}}`, encodeURIComponent(String(tagId)));
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
            const needsSerialization = (typeof inlineObject34 !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(inlineObject34 !== undefined ? inlineObject34 : {}) : (inlineObject34 || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * TagsApi - functional programming interface
 * @export
 */
exports.TagsApiFp = function (configuration) {
    return {
        /**
         * Deletes a tag by it\'s ID
         * @summary Delete a tag
         * @param {string} tagId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTagsTagId(tagId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.TagsApiAxiosParamCreator(configuration).deleteTagsTagId(tagId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Get paginated list of tags
         * @summary Get all tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTags(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.TagsApiAxiosParamCreator(configuration).getTags(options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Gets a tag by it\'s ID
         * @summary Get a tag
         * @param {string} tagId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTagsTagId(tagId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.TagsApiAxiosParamCreator(configuration).getTagsTagId(tagId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Create a new tag
         * @summary
         * @param {InlineObject33} [inlineObject33]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTags(inlineObject33, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.TagsApiAxiosParamCreator(configuration).postTags(inlineObject33, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Updates a tag by it\'s ID
         * @summary Update a tag
         * @param {string} tagId
         * @param {InlineObject34} [inlineObject34]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTagsTagId(tagId, inlineObject34, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.TagsApiAxiosParamCreator(configuration).putTagsTagId(tagId, inlineObject34, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
/**
 * TagsApi - factory interface
 * @export
 */
exports.TagsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Deletes a tag by it\'s ID
         * @summary Delete a tag
         * @param {string} tagId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTagsTagId(tagId, options) {
            return exports.TagsApiFp(configuration).deleteTagsTagId(tagId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get paginated list of tags
         * @summary Get all tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTags(options) {
            return exports.TagsApiFp(configuration).getTags(options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a tag by it\'s ID
         * @summary Get a tag
         * @param {string} tagId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTagsTagId(tagId, options) {
            return exports.TagsApiFp(configuration).getTagsTagId(tagId, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new tag
         * @summary
         * @param {InlineObject33} [inlineObject33]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTags(inlineObject33, options) {
            return exports.TagsApiFp(configuration).postTags(inlineObject33, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a tag by it\'s ID
         * @summary Update a tag
         * @param {string} tagId
         * @param {InlineObject34} [inlineObject34]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTagsTagId(tagId, inlineObject34, options) {
            return exports.TagsApiFp(configuration).putTagsTagId(tagId, inlineObject34, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * TagsApi - object-oriented interface
 * @export
 * @class TagsApi
 * @extends {BaseAPI}
 */
class TagsApi extends base_1.BaseAPI {
    /**
     * Deletes a tag by it\'s ID
     * @summary Delete a tag
     * @param {string} tagId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    deleteTagsTagId(tagId, options) {
        return exports.TagsApiFp(this.configuration).deleteTagsTagId(tagId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get paginated list of tags
     * @summary Get all tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    getTags(options) {
        return exports.TagsApiFp(this.configuration).getTags(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Gets a tag by it\'s ID
     * @summary Get a tag
     * @param {string} tagId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    getTagsTagId(tagId, options) {
        return exports.TagsApiFp(this.configuration).getTagsTagId(tagId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a new tag
     * @summary
     * @param {InlineObject33} [inlineObject33]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    postTags(inlineObject33, options) {
        return exports.TagsApiFp(this.configuration).postTags(inlineObject33, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates a tag by it\'s ID
     * @summary Update a tag
     * @param {string} tagId
     * @param {InlineObject34} [inlineObject34]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    putTagsTagId(tagId, inlineObject34, options) {
        return exports.TagsApiFp(this.configuration).putTagsTagId(tagId, inlineObject34, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.TagsApi = TagsApi;
