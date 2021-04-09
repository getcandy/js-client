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
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
/**
 * VersioningApi - axios parameter creator
 * @export
 */
export declare const VersioningApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Restores a model version
     * @summary Restore model
     * @param {string} modelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postVersionsModelIdRestore: (modelId: string, options?: any) => Promise<RequestArgs>;
};
/**
 * VersioningApi - functional programming interface
 * @export
 */
export declare const VersioningApiFp: (configuration?: Configuration) => {
    /**
     * Restores a model version
     * @summary Restore model
     * @param {string} modelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postVersionsModelIdRestore(modelId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>>;
};
/**
 * VersioningApi - factory interface
 * @export
 */
export declare const VersioningApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Restores a model version
     * @summary Restore model
     * @param {string} modelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postVersionsModelIdRestore(modelId: string, options?: any): AxiosPromise<object>;
};
/**
 * VersioningApi - object-oriented interface
 * @export
 * @class VersioningApi
 * @extends {BaseAPI}
 */
export declare class VersioningApi extends BaseAPI {
    /**
     * Restores a model version
     * @summary Restore model
     * @param {string} modelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersioningApi
     */
    postVersionsModelIdRestore(modelId: string, options?: any): Promise<import("axios").AxiosResponse<object>>;
}
