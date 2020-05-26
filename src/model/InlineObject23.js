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
 * The InlineObject23 model module.
 * @module model/InlineObject23
 * @version 0.9.0
 */
class InlineObject23 {
    /**
     * Constructs a new <code>InlineObject23</code>.
     * @alias module:model/InlineObject23
     * @param channels {Array.<String>} Array of channel ID's
     */
    constructor(channels) { 
        
        InlineObject23.initialize(this, channels);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channels) { 
        obj['channels'] = channels;
    }

    /**
     * Constructs a <code>InlineObject23</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject23} obj Optional instance to populate.
     * @return {module:model/InlineObject23} The populated <code>InlineObject23</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject23();

            if (data.hasOwnProperty('channels')) {
                obj['channels'] = ApiClient.convertToType(data['channels'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Array of channel ID's
 * @member {Array.<String>} channels
 */
InlineObject23.prototype['channels'] = undefined;






export default InlineObject23;

