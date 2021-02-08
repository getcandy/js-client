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
 * @interface UpdateAddressBody
 */
export interface UpdateAddressBody {
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    salutation?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    firstname?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    company_name?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    address_two?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    address_three?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    postal_code?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    country_id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAddressBody
     */
    shipping?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAddressBody
     */
    billing?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAddressBody
     */
    _default?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    last_used_at?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressBody
     */
    delivery_instructions?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof UpdateAddressBody
     */
    meta?: Array<object>;
}

