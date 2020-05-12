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
import Route from './Route';

/**
 * The RouteResponse model module.
 * @module model/RouteResponse
 * @version 1.0.0
 */
class RouteResponse {
    /**
     * Constructs a new <code>RouteResponse</code>.
     * @alias module:model/RouteResponse
     */
    constructor() { 
        
        RouteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RouteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RouteResponse} obj Optional instance to populate.
     * @return {module:model/RouteResponse} The populated <code>RouteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RouteResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Route.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Route} data
 */
RouteResponse.prototype['data'] = undefined;






export default RouteResponse;

