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
import { Channel } from '../models';
import { ChannelCollection } from '../models';
import { ChannelResponse } from '../models';
/**
 * ChannelsApi - axios parameter creator
 * @export
 */
export declare const ChannelsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Delete the channel resource
     * @param {string} channelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteChannelsChannelId: (channelId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Gets a paginated list of all channel
     * @summary Get all channels
     * @param {string} [includes] Comma separated includes for the resource
     * @param {number} [perPage] How many results per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChannels: (includes?: string, perPage?: number, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @summary Get the channel resource
     * @param {string} channelId
     * @param {string} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChannelsChannelId: (channelId: string, includes?: string, options?: any) => Promise<RequestArgs>;
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
    postChannels: (handle?: string, name?: string, url?: string, _default?: boolean, options?: any) => Promise<RequestArgs>;
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
    putChannelsChannelId: (channelId: string, handle?: string, name?: string, url?: string, _default?: boolean, options?: any) => Promise<RequestArgs>;
};
/**
 * ChannelsApi - functional programming interface
 * @export
 */
export declare const ChannelsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Delete the channel resource
     * @param {string} channelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteChannelsChannelId(channelId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Gets a paginated list of all channel
     * @summary Get all channels
     * @param {string} [includes] Comma separated includes for the resource
     * @param {number} [perPage] How many results per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChannels(includes?: string, perPage?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelCollection>>;
    /**
     *
     * @summary Get the channel resource
     * @param {string} channelId
     * @param {string} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChannelsChannelId(channelId: string, includes?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelResponse>>;
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
    postChannels(handle?: string, name?: string, url?: string, _default?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Channel>>;
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
    putChannelsChannelId(channelId: string, handle?: string, name?: string, url?: string, _default?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelResponse>>;
};
/**
 * ChannelsApi - factory interface
 * @export
 */
export declare const ChannelsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Delete the channel resource
     * @param {string} channelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteChannelsChannelId(channelId: string, options?: any): AxiosPromise<void>;
    /**
     * Gets a paginated list of all channel
     * @summary Get all channels
     * @param {string} [includes] Comma separated includes for the resource
     * @param {number} [perPage] How many results per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChannels(includes?: string, perPage?: number, options?: any): AxiosPromise<ChannelCollection>;
    /**
     *
     * @summary Get the channel resource
     * @param {string} channelId
     * @param {string} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChannelsChannelId(channelId: string, includes?: string, options?: any): AxiosPromise<ChannelResponse>;
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
    postChannels(handle?: string, name?: string, url?: string, _default?: boolean, options?: any): AxiosPromise<Channel>;
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
    putChannelsChannelId(channelId: string, handle?: string, name?: string, url?: string, _default?: boolean, options?: any): AxiosPromise<ChannelResponse>;
};
/**
 * ChannelsApi - object-oriented interface
 * @export
 * @class ChannelsApi
 * @extends {BaseAPI}
 */
export declare class ChannelsApi extends BaseAPI {
    /**
     *
     * @summary Delete the channel resource
     * @param {string} channelId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    deleteChannelsChannelId(channelId: string, options?: any): Promise<import("axios").AxiosResponse<void>>;
    /**
     * Gets a paginated list of all channel
     * @summary Get all channels
     * @param {string} [includes] Comma separated includes for the resource
     * @param {number} [perPage] How many results per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    getChannels(includes?: string, perPage?: number, options?: any): Promise<import("axios").AxiosResponse<ChannelCollection>>;
    /**
     *
     * @summary Get the channel resource
     * @param {string} channelId
     * @param {string} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApi
     */
    getChannelsChannelId(channelId: string, includes?: string, options?: any): Promise<import("axios").AxiosResponse<ChannelResponse>>;
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
    postChannels(handle?: string, name?: string, url?: string, _default?: boolean, options?: any): Promise<import("axios").AxiosResponse<Channel>>;
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
    putChannelsChannelId(channelId: string, handle?: string, name?: string, url?: string, _default?: boolean, options?: any): Promise<import("axios").AxiosResponse<ChannelResponse>>;
}
