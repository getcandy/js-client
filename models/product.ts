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
 * @interface Product
 */
export interface Product {
    /**
     *
     * @type {string}
     * @memberof Product
     */
    id?: string;
    /**
     * If this product is a draft, this will be populated
     * @type {string}
     * @memberof Product
     */
    drafted_at?: string;
    /**
     * Displays any variant option data
     * @type {object}
     * @memberof Product
     */
    option_data?: object;
    /**
     *
     * @type {string}
     * @memberof Product
     */
    created_at?: string;
    /**
     *
     * @type {string}
     * @memberof Product
     */
    updated_at?: string;
}


