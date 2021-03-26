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
/**
 *
 * @export
 * @interface CreateAssetBody
 */
export interface CreateAssetBody {
    /**
     * Required when passing url
     * @type {string}
     * @memberof CreateAssetBody
     */
    mime_type?: string;
    /**
     * External URL to file to upload, required without file
     * @type {string}
     * @memberof CreateAssetBody
     */
    url?: string;
    /**
     *
     * @type {object}
     * @memberof CreateAssetBody
     */
    file?: object;
}