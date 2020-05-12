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

/**
 * The InlineObject17 model module.
 * @module model/InlineObject17
 * @version 1.0.0
 */
class InlineObject17 {
    /**
     * Constructs a new <code>InlineObject17</code>.
     * @alias module:model/InlineObject17
     */
    constructor() { 
        
        InlineObject17.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject17</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject17} obj Optional instance to populate.
     * @return {module:model/InlineObject17} The populated <code>InlineObject17</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject17();

            if (data.hasOwnProperty('inventory')) {
                obj['inventory'] = ApiClient.convertToType(data['inventory'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} inventory
 */
InlineObject17.prototype['inventory'] = undefined;






export default InlineObject17;

