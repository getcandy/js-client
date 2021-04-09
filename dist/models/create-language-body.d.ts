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
 * @interface CreateLanguageBody
 */
export interface CreateLanguageBody {
    /**
     *
     * @type {string}
     * @memberof CreateLanguageBody
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof CreateLanguageBody
     */
    lang: string;
    /**
     * Unique
     * @type {string}
     * @memberof CreateLanguageBody
     */
    iso: string;
    /**
     *
     * @type {boolean}
     * @memberof CreateLanguageBody
     */
    enabled?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateLanguageBody
     */
    _default?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateLanguageBody
     */
    current?: boolean;
}
