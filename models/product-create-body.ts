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


import { ShippingShippingMethodIdName } from './shipping-shipping-method-id-name';

/**
 *
 * @export
 * @interface ProductCreateBody
 */
export interface ProductCreateBody {
    /**
     *
     * @type {ShippingShippingMethodIdName}
     * @memberof ProductCreateBody
     */
    name: ShippingShippingMethodIdName;
    /**
     *
     * @type {string}
     * @memberof ProductCreateBody
     */
    url: string;
    /**
     *
     * @type {number}
     * @memberof ProductCreateBody
     */
    stock: number;
    /**
     *
     * @type {string}
     * @memberof ProductCreateBody
     */
    family_id: string;
    /**
     *
     * @type {number}
     * @memberof ProductCreateBody
     */
    price: number;
    /**
     *
     * @type {string}
     * @memberof ProductCreateBody
     */
    sku: string;
}


