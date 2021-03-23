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
import { AttributeCollection } from './attribute-collection';
/**
 * ### Available includes - attributes
 * @export
 * @interface AttributeGroup
 */
export interface AttributeGroup {
    /**
     *
     * @type {string}
     * @memberof AttributeGroup
     */
    id?: string;
    /**
     *
     * @type {object}
     * @memberof AttributeGroup
     */
    name?: object;
    /**
     *
     * @type {string}
     * @memberof AttributeGroup
     */
    handle?: string;
    /**
     *
     * @type {number}
     * @memberof AttributeGroup
     */
    position?: number;
    /**
     *
     * @type {AttributeCollection}
     * @memberof AttributeGroup
     */
    attributes?: AttributeCollection;
}
