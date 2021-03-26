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
 * ### Available includes - sets - rewards - items
 * @export
 * @interface Discount
 */
export interface Discount {
    /**
     *
     * @type {string}
     * @memberof Discount
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof Discount
     */
    start_at?: string;
    /**
     *
     * @type {string}
     * @memberof Discount
     */
    end_at?: string;
    /**
     *
     * @type {boolean}
     * @memberof Discount
     */
    priority?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Discount
     */
    status?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Discount
     */
    stop_rules?: boolean;
    /**
     *
     * @type {number}
     * @memberof Discount
     */
    uses?: number;
}