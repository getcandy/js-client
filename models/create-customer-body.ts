// tslint:disable
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
 * @interface CreateCustomerBody
 */
export interface CreateCustomerBody {
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerBody
     */
    firstname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerBody
     */
    lastname?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateCustomerBody
     */
    contact_number?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CreateCustomerBody
     */
    alt_contact_number?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerBody
     */
    company_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerBody
     */
    vat_no?: string | null;
    /**
     * 
     * @type {object}
     * @memberof CreateCustomerBody
     */
    fields?: object | null;
}


