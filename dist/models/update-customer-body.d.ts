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
 * @interface UpdateCustomerBody
 */
export interface UpdateCustomerBody {
    /**
     *
     * @type {string}
     * @memberof UpdateCustomerBody
     */
    firstname?: string | null;
    /**
     *
     * @type {string}
     * @memberof UpdateCustomerBody
     */
    lastname?: string | null;
    /**
     *
     * @type {number}
     * @memberof UpdateCustomerBody
     */
    contact_number?: number | null;
    /**
     *
     * @type {number}
     * @memberof UpdateCustomerBody
     */
    alt_contact_number?: number | null;
    /**
     *
     * @type {string}
     * @memberof UpdateCustomerBody
     */
    company_name?: string | null;
    /**
     *
     * @type {string}
     * @memberof UpdateCustomerBody
     */
    vat_no?: string | null;
    /**
     *
     * @type {object}
     * @memberof UpdateCustomerBody
     */
    fields?: object | null;
}
