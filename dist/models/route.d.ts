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
/**
 *
 * @export
 * @interface Route
 */
export interface Route {
    /**
     *
     * @type {string}
     * @memberof Route
     */
    id?: string;
    /**
     *
     * @type {boolean}
     * @memberof Route
     */
    _default?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Route
     */
    redirect?: boolean;
    /**
     *
     * @type {string}
     * @memberof Route
     */
    slug?: string;
    /**
     *
     * @type {string}
     * @memberof Route
     */
    description?: string | null;
    /**
     *
     * @type {string}
     * @memberof Route
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof Route
     */
    drafted_at?: string | null;
}
