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



/**
 *
 * @export
 * @interface Aggregation
 */
export interface Aggregation {
    /**
     *
     * @type {string}
     * @memberof Aggregation
     */
    handle?: string;
    /**
     *
     * @type {number}
     * @memberof Aggregation
     */
    doc_count?: number;
    /**
     *
     * @type {object}
     * @memberof Aggregation
     */
    data?: object;
    /**
     *
     * @type {Array<object>}
     * @memberof Aggregation
     */
    buckets?: Array<object>;
}


