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
import ActivityLog from './ActivityLog';

/**
 * The ActivityLogResponse model module.
 * @module model/ActivityLogResponse
 * @version 1.0.0
 */
class ActivityLogResponse {
    /**
     * Constructs a new <code>ActivityLogResponse</code>.
     * @alias module:model/ActivityLogResponse
     */
    constructor() { 
        
        ActivityLogResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivityLogResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivityLogResponse} obj Optional instance to populate.
     * @return {module:model/ActivityLogResponse} The populated <code>ActivityLogResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityLogResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ActivityLog.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ActivityLog} data
 */
ActivityLogResponse.prototype['data'] = undefined;






export default ActivityLogResponse;

