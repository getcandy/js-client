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
import { CreateBasketBodyVariants } from './create-basket-body-variants';
/**
 *
 * @export
 * @interface CreateBasketBody
 */
export interface CreateBasketBody {
    /**
     *
     * @type {Array<CreateBasketBodyVariants>}
     * @memberof CreateBasketBody
     */
    variants?: Array<CreateBasketBodyVariants>;
    /**
     *
     * @type {string}
     * @memberof CreateBasketBody
     */
    basket_id?: string;
}
