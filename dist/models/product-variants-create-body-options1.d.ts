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
import { CollectionsName } from './collections-name';
import { ProductVariantsCreateBodyOptions } from './product-variants-create-body-options';
/**
 *
 * @export
 * @interface ProductVariantsCreateBodyOptions1
 */
export interface ProductVariantsCreateBodyOptions1 {
    /**
     *
     * @type {number}
     * @memberof ProductVariantsCreateBodyOptions1
     */
    position?: number;
    /**
     *
     * @type {CollectionsName}
     * @memberof ProductVariantsCreateBodyOptions1
     */
    label?: CollectionsName;
    /**
     *
     * @type {Array<ProductVariantsCreateBodyOptions>}
     * @memberof ProductVariantsCreateBodyOptions1
     */
    options?: Array<ProductVariantsCreateBodyOptions>;
}
