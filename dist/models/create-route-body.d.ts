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
/**
 *
 * @export
 * @interface CreateRouteBody
 */
export interface CreateRouteBody {
    /**
     *
     * @type {string}
     * @memberof CreateRouteBody
     */
    element_type: string;
    /**
     *
     * @type {number}
     * @memberof CreateRouteBody
     */
    element_id: number;
    /**
     *
     * @type {boolean}
     * @memberof CreateRouteBody
     */
    _default?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateRouteBody
     */
    redirect?: boolean;
    /**
     *
     * @type {string}
     * @memberof CreateRouteBody
     */
    slug: string;
    /**
     *
     * @type {string}
     * @memberof CreateRouteBody
     */
    language_id: string;
    /**
     *
     * @type {string}
     * @memberof CreateRouteBody
     */
    description?: string;
}
