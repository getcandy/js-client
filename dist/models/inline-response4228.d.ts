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
import { InlineResponse4228Errors } from './inline-response4228-errors';
/**
 *
 * @export
 * @interface InlineResponse4228
 */
export interface InlineResponse4228 {
    /**
     *
     * @type {string}
     * @memberof InlineResponse4228
     */
    message?: string;
    /**
     *
     * @type {Array<InlineResponse4228Errors>}
     * @memberof InlineResponse4228
     */
    errors?: Array<InlineResponse4228Errors>;
}
