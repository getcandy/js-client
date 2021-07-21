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
exports.ChannelsApi = exports.ChannelsApiFactory = exports.ChannelsApiFp = exports.ChannelsApiAxiosParamCreator = void 0;
const globalImportUrl = require("url");
const axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * ChannelsApi - axios parameter creator
 * @export
 */
exports.ChannelsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Delete the channel resource
         * @param {string} channelId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteChannelsChannelId: (channelId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'channelId' is not null or undefined
            if (channelId === null || channelId === undefined) {
                throw new base_1.RequiredError('channelId', 'Required parameter channelId was null or undefined when calling deleteChannelsChannelId.');
            }
            const localVarPath = `/channels/{channelId}`
                .replace(`{${"channelId"}}`, encodeURIComponent(String(channelId)));
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
         * Gets a paginated list of all channel
         * @summary Get all channels
         * @param {string} [includes] Comma separated includes for the resource
         * @param {number} [perPage] How many results per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannels: (includes, perPage, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/channels`;
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
            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
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
         *
         * @summary Get the channel resource
         * @param {string} channelId
         * @param {string} [includes]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannelsChannelId: (channelId, includes, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'channelId' is not null or undefined
            if (channelId === null || channelId === undefined) {
                throw new base_1.RequiredError('channelId', 'Required parameter channelId was null or undefined when calling getChannelsChannelId.');
            }
            const localVarPath = `/channels/{channelId}`
                .replace(`{${"channelId"}}`, encodeURIComponent(String(channelId)));
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
         * Create a new channel resource
         * @summary Create a new channel
         * @param {string} [handle]
         * @param {string} [name]
         * @param {string} [url]
         * @param {boolean} [_default]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postChannels: (handle, name, url, _default, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/channels`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new FormData();
            if (handle !== undefined) {
                localVarFormParams.append('handle', handle);
            }
            if (name !== undefined) {
                localVarFormParams.append('name', name);
            }
            if (url !== undefined) {
                localVarFormParams.append('url', url);
            }
            if (_default !== undefined) {
                localVarFormParams.append('default', _default);
            }
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            localVarUrlObj.query = Object.assign(Object.assign(Object.assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams;
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Update the channel resource
         * @param {string} channelId
         * @param {string} [handle]
         * @param {string} [name]
         * @param {string} [url]
         * @param {boolean} [_default]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putChannelsChannelId: (channelId, handle, name, url, _default, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'channelId' is not null or undefined
            if (channelId === null || channelId === undefined) {
                throw new base_1.RequiredError('channelId', 'Required parameter channelId was null or undefined when calling putChannelsChannelId.');
            }
            const localVarPath = `/channels/{channelId}`
                .replace(`{${"channelId"}}`, encodeURIComponent(String(channelId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new FormData();
            if (handle !== undefined) {
                localVarFormParams.append('handle', handle);
            }
            if (name !== undefined) {
                localVarFormParams.append('name', name);
            }
            if (url !== undefined) {
                localVarFormParams.append('url', url);
            }
            if (_default !== undefined) {
                localVarFormParams.append('default', _default);
            }
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            localVarUrlObj.query = Object.assign(Object.assign(Object.assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams;
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * ChannelsApi - functional programming interface
 * @export
 */
exports.ChannelsApiFp = function (configuration) {
    return {
        /**
         *
         * @summary Delete the channel resource
         * @param {string} channelId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteChannelsChannelId(channelId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ChannelsApiAxiosParamCreator(configuration).deleteChannelsChannelId(channelId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Gets a paginated list of all channel
         * @summary Get all channels
         * @param {string} [includes] Comma separated includes for the resource
         * @param {number} [perPage] How many results per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannels(includes, perPage, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ChannelsApiAxiosParamCreator(configuration).getChannels(includes, perPage, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         *
         * @summary Get the channel resource
         * @param {string} channelId
         * @param {string} [includes]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannelsChannelId(channelId, includes, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ChannelsApiAxiosParamCreator(configuration).getChannelsChannelId(channelId, includes, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Create a new channel resource
         * @summary Create a new channel
         * @param {string} [handle]
         * @param {string} [name]
         * @param {string} [url]
         * @param {boolean} [_default]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postChannels(handle, name, url, _default, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ChannelsApiAxiosParamCreator(configuration).postChannels(handle, name, url, _default, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         *
         * @summary Update the channel resource
         * @param {string} channelId
         * @param {string} [handle]
         * @param {string} [name]
         * @param {string} [url]
         * @param {boolean} [_default]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putChannelsChannelId(channelId, handle, name, url, _default, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.ChannelsApiAxiosParamCreator(configuration).putChannelsChannelId(channelId, handle, name, url, _default, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
/**
 * ChannelsApi - factory interface
 * @export
 */
exports.ChannelsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         *
         * @summary Delete the channel resource
         * @param {string} channelId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteChannelsChannelId(channelId, options) {
            return exports.ChannelsApiFp(configuration).deleteChannelsChannelId(channelId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a paginated list of all channel
         * @summary Get all channels
         * @param {string} [includes] Comma separated includes for the resource
         * @param {number} [perPage] How many results per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannels(includes, perPage, options) {
            return exports.ChannelsApiFp(configuration).getChannels(includes, perPage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get the channel resource
         * @param {string} channelId
         * @param {string} [includes]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannelsChannelId(channelId, includes, options) {
            return exports.ChannelsApiFp(configuration).getChannelsChannelId(channelId, includes, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new channel resource
         * @summary Create a new channel
         * @param {string} [handle]
         * @param {string} [name]
         * @param {string} [url]
         * @param {boolean} [_default]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postChannels(handle, name, url, _default, options) {
            return exports.ChannelsApiFp(configuration).postChannels(handle, name, url, _default, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update the channel resource
         * @param {string} channelId
         * @param {string} [handle]
         * @param {string} [name]
         * @param {string} [url]
         * @param {boolean} [_default]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putChannelsChannelId(channelId, handle, name, url, _default, options) {
            return exports.ChannelsApiFp(configuration).putChannelsChannelId(channelId, handle, name, url, _default, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * ChannelsApi - object-oriented interface
 * @export
 * @class ChannelsApi
 * @extends {BaseAPI}
 */
class ChannelsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Delete the channel resource
     * @param {string} channelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    deleteChannelsChannelId(channelId, options) {
        return exports.ChannelsApiFp(this.configuration).deleteChannelsChannelId(channelId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Gets a paginated list of all channel
     * @summary Get all channels
     * @param {string} [includes] Comma separated includes for the resource
     * @param {number} [perPage] How many results per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    getChannels(includes, perPage, options) {
        return exports.ChannelsApiFp(this.configuration).getChannels(includes, perPage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get the channel resource
     * @param {string} channelId
     * @param {string} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    getChannelsChannelId(channelId, includes, options) {
        return exports.ChannelsApiFp(this.configuration).getChannelsChannelId(channelId, includes, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a new channel resource
     * @summary Create a new channel
     * @param {string} [handle]
     * @param {string} [name]
     * @param {string} [url]
     * @param {boolean} [_default]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    postChannels(handle, name, url, _default, options) {
        return exports.ChannelsApiFp(this.configuration).postChannels(handle, name, url, _default, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update the channel resource
     * @param {string} channelId
     * @param {string} [handle]
     * @param {string} [name]
     * @param {string} [url]
     * @param {boolean} [_default]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    putChannelsChannelId(channelId, handle, name, url, _default, options) {
        return exports.ChannelsApiFp(this.configuration).putChannelsChannelId(channelId, handle, name, url, _default, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.ChannelsApi = ChannelsApi;
