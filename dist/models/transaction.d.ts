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
 * @interface Transaction
 */
export interface Transaction {
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    transaction_id?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    merchant?: string;
    /**
     *
     * @type {number}
     * @memberof Transaction
     */
    amount?: number;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    card_type?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    last_four?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    provider?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    driver?: string;
    /**
     *
     * @type {boolean}
     * @memberof Transaction
     */
    success?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Transaction
     */
    refund?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Transaction
     */
    address_matched?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Transaction
     */
    cvc_matched?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Transaction
     */
    threed_secure?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Transaction
     */
    postcode_matched?: boolean;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    notes?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    created_at?: string;
}
