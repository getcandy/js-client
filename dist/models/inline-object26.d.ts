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
import { CollectionsName } from './collections-name';
/**
 *
 * @export
 * @interface InlineObject26
 */
export interface InlineObject26 {
    /**
     *
     * @type {string}
     * @memberof InlineObject26
     */
    type: InlineObject26TypeEnum;
    /**
     *
     * @type {CollectionsName}
     * @memberof InlineObject26
     */
    name?: CollectionsName;
}
/**
    * @export
    * @enum {string}
    */
export declare enum InlineObject26TypeEnum {
    Standard = "standard",
    Dhl = "dhl",
    Regional = "regional"
}
