// tslint:disable
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


import { InlineResponse2001Datasets } from './inline-response2001-datasets';

/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineResponse2001
     */
    labels?: Array<string>;
    /**
     * 
     * @type {Array<InlineResponse2001Datasets>}
     * @memberof InlineResponse2001
     */
    datasets?: Array<InlineResponse2001Datasets>;
}


