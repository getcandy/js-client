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


import { AttributeGroupResponse } from './attribute-group-response';

/**
 * ### Available includes - group
 * @export
 * @interface Attribute
 */
export interface Attribute {
    /**
     *
     * @type {string}
     * @memberof Attribute
     */
    id?: string;
    /**
     *
     * @type {object}
     * @memberof Attribute
     */
    name?: object;
    /**
     *
     * @type {string}
     * @memberof Attribute
     */
    handle?: string;
    /**
     *
     * @type {number}
     * @memberof Attribute
     */
    position?: number;
    /**
     *
     * @type {boolean}
     * @memberof Attribute
     */
    filterable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Attribute
     */
    scopeable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Attribute
     */
    translatable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Attribute
     */
    variant?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Attribute
     */
    searchable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Attribute
     */
    localised?: boolean;
    /**
     *
     * @type {string}
     * @memberof Attribute
     */
    type?: string;
    /**
     *
     * @type {boolean}
     * @memberof Attribute
     */
    required?: boolean;
    /**
     *
     * @type {Array<object>}
     * @memberof Attribute
     */
    lookups?: Array<object>;
    /**
     *
     * @type {boolean}
     * @memberof Attribute
     */
    system?: boolean;
    /**
     *
     * @type {AttributeGroupResponse}
     * @memberof Attribute
     */
    group?: AttributeGroupResponse;
}


