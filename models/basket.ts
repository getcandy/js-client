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


import { BasketLines } from './basket-lines';
import { OrderResponse } from './order-response';

/**
 * 
 * @export
 * @interface Basket
 */
export interface Basket {
    /**
     * 
     * @type {string}
     * @memberof Basket
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof Basket
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof Basket
     */
    sub_total?: number;
    /**
     * 
     * @type {number}
     * @memberof Basket
     */
    tax_total?: number;
    /**
     * 
     * @type {number}
     * @memberof Basket
     */
    discount_total?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Basket
     */
    changed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Basket
     */
    has_exclusions?: boolean;
    /**
     * 
     * @type {object}
     * @memberof Basket
     */
    meta?: object;
    /**
     * 
     * @type {BasketLines}
     * @memberof Basket
     */
    lines?: BasketLines;
    /**
     * 
     * @type {OrderResponse}
     * @memberof Basket
     */
    order?: OrderResponse;
}

