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
 *
 * @export
 * @interface PaymentProvider
 */
export interface PaymentProvider {
    /**
     *
     * @type {string}
     * @memberof PaymentProvider
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentProvider
     */
    name?: string;
    /**
     * If supported
     * @type {string}
     * @memberof PaymentProvider
     */
    client_token?: string;
    /**
     * If supported
     * @type {string}
     * @memberof PaymentProvider
     */
    exires_at?: string;
}
