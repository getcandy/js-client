// tslint:disable
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
 * @interface CreateAddressBody
 */
export interface CreateAddressBody {
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    salutation?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    firstname: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    lastname: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    company_name?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    address_two?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    address_three?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    state: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    postal_code: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    country_id: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateAddressBody
     */
    shipping?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    user_id?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    customer_id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateAddressBody
     */
    billing?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateAddressBody
     */
    _default?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    last_used_at?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAddressBody
     */
    delivery_instructions?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof CreateAddressBody
     */
    meta?: Array<object>;
}


