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
/**
 *
 * @export
 * @interface ProductVariantsCreateBodyOptions
 */
export interface ProductVariantsCreateBodyOptions {
    /**
     *
     * @type {number}
     * @memberof ProductVariantsCreateBodyOptions
     */
    position?: number;
    /**
     *
     * @type {CollectionsName}
     * @memberof ProductVariantsCreateBodyOptions
     */
    label?: CollectionsName;
}
