/**
 * GetCandy
 * The GetCandy API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RecycleBin from './RecycleBin';

/**
 * The RecycleBinResponse model module.
 * @module model/RecycleBinResponse
 * @version 1.0.0
 */
class RecycleBinResponse {
    /**
     * Constructs a new <code>RecycleBinResponse</code>.
     * @alias module:model/RecycleBinResponse
     */
    constructor() { 
        
        RecycleBinResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecycleBinResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecycleBinResponse} obj Optional instance to populate.
     * @return {module:model/RecycleBinResponse} The populated <code>RecycleBinResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecycleBinResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = RecycleBin.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RecycleBin} data
 */
RecycleBinResponse.prototype['data'] = undefined;






export default RecycleBinResponse;

