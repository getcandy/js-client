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
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { SettingCollection } from '../models';
import { SettingResponse } from '../models';
/**
 * SettingsApi - axios parameter creator
 * @export
 */
export declare const SettingsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Retrieves settings that have been defined in the database.
     * @summary Get settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSettings: (options?: any) => Promise<RequestArgs>;
    /**
     * Get specific settings.
     * @summary Get setting
     * @param {string} handle
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSettingsHandle: (handle: string, options?: any) => Promise<RequestArgs>;
};
/**
 * SettingsApi - functional programming interface
 * @export
 */
export declare const SettingsApiFp: (configuration?: Configuration) => {
    /**
     * Retrieves settings that have been defined in the database.
     * @summary Get settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSettings(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SettingCollection>>;
    /**
     * Get specific settings.
     * @summary Get setting
     * @param {string} handle
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSettingsHandle(handle: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SettingResponse>>;
};
/**
 * SettingsApi - factory interface
 * @export
 */
export declare const SettingsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Retrieves settings that have been defined in the database.
     * @summary Get settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSettings(options?: any): AxiosPromise<SettingCollection>;
    /**
     * Get specific settings.
     * @summary Get setting
     * @param {string} handle
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSettingsHandle(handle: string, options?: any): AxiosPromise<SettingResponse>;
};
/**
 * SettingsApi - object-oriented interface
 * @export
 * @class SettingsApi
 * @extends {BaseAPI}
 */
export declare class SettingsApi extends BaseAPI {
    /**
     * Retrieves settings that have been defined in the database.
     * @summary Get settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    getSettings(options?: any): Promise<import("axios").AxiosResponse<SettingCollection>>;
    /**
     * Get specific settings.
     * @summary Get setting
     * @param {string} handle
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    getSettingsHandle(handle: string, options?: any): Promise<import("axios").AxiosResponse<SettingResponse>>;
}
