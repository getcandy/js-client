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
/**
 * ## Available includes  - products - categories - collections - discounts - shippingMethods
 * @export
 * @interface Channel
 */
export interface Channel {
    /**
     *
     * @type {string}
     * @memberof Channel
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Channel
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Channel
     */
    handle?: string;
    /**
     *
     * @type {string}
     * @memberof Channel
     */
    url?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof Channel
     */
    _default?: boolean;
}
