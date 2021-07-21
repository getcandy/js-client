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


import { AssetTransformCollection } from './asset-transform-collection';
import { TagCollection } from './tag-collection';

/**
 *
 * @export
 * @interface Asset
 */
export interface Asset {
    /**
     *
     * @type {string}
     * @memberof Asset
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Asset
     */
    title?: string;
    /**
     *
     * @type {string}
     * @memberof Asset
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof Asset
     */
    caption?: string;
    /**
     *
     * @type {string}
     * @memberof Asset
     */
    kind?: string;
    /**
     *
     * @type {boolean}
     * @memberof Asset
     */
    external?: boolean;
    /**
     *
     * @type {number}
     * @memberof Asset
     */
    position?: number;
    /**
     *
     * @type {boolean}
     * @memberof Asset
     */
    primary?: boolean;
    /**
     *
     * @type {string}
     * @memberof Asset
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof Asset
     */
    sub_kind?: string;
    /**
     *
     * @type {string}
     * @memberof Asset
     */
    extension?: string;
    /**
     *
     * @type {string}
     * @memberof Asset
     */
    original_filename?: string;
    /**
     *
     * @type {string}
     * @memberof Asset
     */
    size?: string;
    /**
     *
     * @type {string}
     * @memberof Asset
     */
    width?: string;
    /**
     *
     * @type {string}
     * @memberof Asset
     */
    height?: string;
    /**
     *
     * @type {AssetTransformCollection}
     * @memberof Asset
     */
    transforms?: AssetTransformCollection;
    /**
     *
     * @type {TagCollection}
     * @memberof Asset
     */
    tags?: TagCollection;
}


