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



/**
 *
 * @export
 * @interface Currency
 */
export interface Currency {
    /**
     *
     * @type {string}
     * @memberof Currency
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Currency
     */
    code?: string;
    /**
     *
     * @type {string}
     * @memberof Currency
     */
    name?: string;
    /**
     *
     * @type {boolean}
     * @memberof Currency
     */
    enabled?: boolean;
    /**
     *
     * @type {string}
     * @memberof Currency
     */
    format?: string;
    /**
     *
     * @type {string}
     * @memberof Currency
     */
    exchange_rate?: string;
    /**
     *
     * @type {string}
     * @memberof Currency
     */
    decimal_point?: string;
    /**
     *
     * @type {string}
     * @memberof Currency
     */
    thousand_point?: string;
    /**
     *
     * @type {boolean}
     * @memberof Currency
     */
    _default?: boolean;
}


