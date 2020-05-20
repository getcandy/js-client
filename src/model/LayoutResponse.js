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
import Layout from './Layout';

/**
 * The LayoutResponse model module.
 * @module model/LayoutResponse
 * @version 0.9.0
 */
class LayoutResponse {
    /**
     * Constructs a new <code>LayoutResponse</code>.
     * @alias module:model/LayoutResponse
     */
    constructor() { 
        
        LayoutResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LayoutResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LayoutResponse} obj Optional instance to populate.
     * @return {module:model/LayoutResponse} The populated <code>LayoutResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LayoutResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Layout.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Layout} data
 */
LayoutResponse.prototype['data'] = undefined;






export default LayoutResponse;

