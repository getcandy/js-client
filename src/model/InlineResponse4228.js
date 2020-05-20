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

/**
 * The InlineResponse4228 model module.
 * @module model/InlineResponse4228
 * @version 0.9.0
 */
class InlineResponse4228 {
    /**
     * Constructs a new <code>InlineResponse4228</code>.
     * @alias module:model/InlineResponse4228
     */
    constructor() { 
        
        InlineResponse4228.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse4228</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse4228} obj Optional instance to populate.
     * @return {module:model/InlineResponse4228} The populated <code>InlineResponse4228</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse4228();

            if (data.hasOwnProperty('collections')) {
                obj['collections'] = ApiClient.convertToType(data['collections'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} collections
 */
InlineResponse4228.prototype['collections'] = undefined;






export default InlineResponse4228;

