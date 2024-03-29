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
exports.LanguagesApi = exports.LanguagesApiFactory = exports.LanguagesApiFp = exports.LanguagesApiAxiosParamCreator = void 0;
const globalImportUrl = require("url");
const axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * LanguagesApi - axios parameter creator
 * @export
 */
exports.LanguagesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Delete a Language by its ID
         * @summary Delete Language
         * @param {string} languageId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLanguagesLanguageId: (languageId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'languageId' is not null or undefined
            if (languageId === null || languageId === undefined) {
                throw new base_1.RequiredError('languageId', 'Required parameter languageId was null or undefined when calling deleteLanguagesLanguageId.');
            }
            const localVarPath = `/languages/{languageId}`
                .replace(`{${"languageId"}}`, encodeURIComponent(String(languageId)));
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
         * Returns a paginated list of Languages
         * @summary Get Languages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLanguages: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/languages`;
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
         * Get a Language by ID
         * @summary Get Language
         * @param {string} languageId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLanguagesLanguageId: (languageId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'languageId' is not null or undefined
            if (languageId === null || languageId === undefined) {
                throw new base_1.RequiredError('languageId', 'Required parameter languageId was null or undefined when calling getLanguagesLanguageId.');
            }
            const localVarPath = `/languages/{languageId}`
                .replace(`{${"languageId"}}`, encodeURIComponent(String(languageId)));
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
         * Create a new language
         * @summary Create Language
         * @param {string} name
         * @param {string} lang
         * @param {string} iso Unique
         * @param {boolean} [enabled]
         * @param {boolean} [_default]
         * @param {boolean} [current]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postLanguages: (name, lang, iso, enabled, _default, current, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new base_1.RequiredError('name', 'Required parameter name was null or undefined when calling postLanguages.');
            }
            // verify required parameter 'lang' is not null or undefined
            if (lang === null || lang === undefined) {
                throw new base_1.RequiredError('lang', 'Required parameter lang was null or undefined when calling postLanguages.');
            }
            // verify required parameter 'iso' is not null or undefined
            if (iso === null || iso === undefined) {
                throw new base_1.RequiredError('iso', 'Required parameter iso was null or undefined when calling postLanguages.');
            }
            const localVarPath = `/languages`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new FormData();
            if (name !== undefined) {
                localVarFormParams.append('name', name);
            }
            if (lang !== undefined) {
                localVarFormParams.append('lang', lang);
            }
            if (iso !== undefined) {
                localVarFormParams.append('iso', iso);
            }
            if (enabled !== undefined) {
                localVarFormParams.append('enabled', enabled);
            }
            if (_default !== undefined) {
                localVarFormParams.append('default', _default);
            }
            if (current !== undefined) {
                localVarFormParams.append('current', current);
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
         * Update a Language using it\'s ID
         * @summary Update Language
         * @param {string} languageId
         * @param {Language} [language]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putLanguagesLanguageId: (languageId, language, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'languageId' is not null or undefined
            if (languageId === null || languageId === undefined) {
                throw new base_1.RequiredError('languageId', 'Required parameter languageId was null or undefined when calling putLanguagesLanguageId.');
            }
            const localVarPath = `/languages/{languageId}`
                .replace(`{${"languageId"}}`, encodeURIComponent(String(languageId)));
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
            const needsSerialization = (typeof language !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(language !== undefined ? language : {}) : (language || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * LanguagesApi - functional programming interface
 * @export
 */
exports.LanguagesApiFp = function (configuration) {
    return {
        /**
         * Delete a Language by its ID
         * @summary Delete Language
         * @param {string} languageId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLanguagesLanguageId(languageId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.LanguagesApiAxiosParamCreator(configuration).deleteLanguagesLanguageId(languageId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Returns a paginated list of Languages
         * @summary Get Languages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLanguages(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.LanguagesApiAxiosParamCreator(configuration).getLanguages(options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Get a Language by ID
         * @summary Get Language
         * @param {string} languageId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLanguagesLanguageId(languageId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.LanguagesApiAxiosParamCreator(configuration).getLanguagesLanguageId(languageId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Create a new language
         * @summary Create Language
         * @param {string} name
         * @param {string} lang
         * @param {string} iso Unique
         * @param {boolean} [enabled]
         * @param {boolean} [_default]
         * @param {boolean} [current]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postLanguages(name, lang, iso, enabled, _default, current, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.LanguagesApiAxiosParamCreator(configuration).postLanguages(name, lang, iso, enabled, _default, current, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Update a Language using it\'s ID
         * @summary Update Language
         * @param {string} languageId
         * @param {Language} [language]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putLanguagesLanguageId(languageId, language, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield exports.LanguagesApiAxiosParamCreator(configuration).putLanguagesLanguageId(languageId, language, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
/**
 * LanguagesApi - factory interface
 * @export
 */
exports.LanguagesApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Delete a Language by its ID
         * @summary Delete Language
         * @param {string} languageId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLanguagesLanguageId(languageId, options) {
            return exports.LanguagesApiFp(configuration).deleteLanguagesLanguageId(languageId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a paginated list of Languages
         * @summary Get Languages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLanguages(options) {
            return exports.LanguagesApiFp(configuration).getLanguages(options).then((request) => request(axios, basePath));
        },
        /**
         * Get a Language by ID
         * @summary Get Language
         * @param {string} languageId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLanguagesLanguageId(languageId, options) {
            return exports.LanguagesApiFp(configuration).getLanguagesLanguageId(languageId, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new language
         * @summary Create Language
         * @param {string} name
         * @param {string} lang
         * @param {string} iso Unique
         * @param {boolean} [enabled]
         * @param {boolean} [_default]
         * @param {boolean} [current]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postLanguages(name, lang, iso, enabled, _default, current, options) {
            return exports.LanguagesApiFp(configuration).postLanguages(name, lang, iso, enabled, _default, current, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a Language using it\'s ID
         * @summary Update Language
         * @param {string} languageId
         * @param {Language} [language]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putLanguagesLanguageId(languageId, language, options) {
            return exports.LanguagesApiFp(configuration).putLanguagesLanguageId(languageId, language, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * LanguagesApi - object-oriented interface
 * @export
 * @class LanguagesApi
 * @extends {BaseAPI}
 */
class LanguagesApi extends base_1.BaseAPI {
    /**
     * Delete a Language by its ID
     * @summary Delete Language
     * @param {string} languageId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LanguagesApi
     */
    deleteLanguagesLanguageId(languageId, options) {
        return exports.LanguagesApiFp(this.configuration).deleteLanguagesLanguageId(languageId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a paginated list of Languages
     * @summary Get Languages
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LanguagesApi
     */
    getLanguages(options) {
        return exports.LanguagesApiFp(this.configuration).getLanguages(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a Language by ID
     * @summary Get Language
     * @param {string} languageId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LanguagesApi
     */
    getLanguagesLanguageId(languageId, options) {
        return exports.LanguagesApiFp(this.configuration).getLanguagesLanguageId(languageId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a new language
     * @summary Create Language
     * @param {string} name
     * @param {string} lang
     * @param {string} iso Unique
     * @param {boolean} [enabled]
     * @param {boolean} [_default]
     * @param {boolean} [current]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LanguagesApi
     */
    postLanguages(name, lang, iso, enabled, _default, current, options) {
        return exports.LanguagesApiFp(this.configuration).postLanguages(name, lang, iso, enabled, _default, current, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a Language using it\'s ID
     * @summary Update Language
     * @param {string} languageId
     * @param {Language} [language]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LanguagesApi
     */
    putLanguagesLanguageId(languageId, language, options) {
        return exports.LanguagesApiFp(this.configuration).putLanguagesLanguageId(languageId, language, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.LanguagesApi = LanguagesApi;
