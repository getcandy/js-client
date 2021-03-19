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
import { AttributesLookups } from './attributes-lookups';
import { AttributesName } from './attributes-name';
/**
 *
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     *
     * @type {string}
     * @memberof InlineObject
     */
    group_id: string;
    /**
     *
     * @type {Array<AttributesName>}
     * @memberof InlineObject
     */
    name: Array<AttributesName>;
    /**
     *
     * @type {string}
     * @memberof InlineObject
     */
    handle: string;
    /**
     *
     * @type {number}
     * @memberof InlineObject
     */
    position?: number;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject
     */
    filterable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject
     */
    scopeable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject
     */
    translatable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject
     */
    variant?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject
     */
    searchable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject
     */
    localised?: boolean;
    /**
     *
     * @type {string}
     * @memberof InlineObject
     */
    type?: string;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject
     */
    required?: boolean;
    /**
     *
     * @type {Array<AttributesLookups>}
     * @memberof InlineObject
     */
    lookups?: Array<AttributesLookups>;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject
     */
    system?: boolean;
}
