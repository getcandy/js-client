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
/**
 *
 * @export
 * @interface CreateChannelBody
 */
export interface CreateChannelBody {
    /**
     *
     * @type {string}
     * @memberof CreateChannelBody
     */
    handle?: string;
    /**
     *
     * @type {string}
     * @memberof CreateChannelBody
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof CreateChannelBody
     */
    url?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof CreateChannelBody
     */
    _default?: boolean | null;
}
