/**
 * GetCandy
 * The GetCandy API
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@getcandy.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Tax from './Tax';

/**
 * The TaxResponse model module.
 * @module model/TaxResponse
 * @version 0.9.0
 */
class TaxResponse {
    /**
     * Constructs a new <code>TaxResponse</code>.
     * @alias module:model/TaxResponse
     */
    constructor() { 
        
        TaxResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaxResponse} obj Optional instance to populate.
     * @return {module:model/TaxResponse} The populated <code>TaxResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Tax.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Tax} data
 */
TaxResponse.prototype['data'] = undefined;






export default TaxResponse;

