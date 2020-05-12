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
 * The InlineObject32 model module.
 * @module model/InlineObject32
 * @version 1.0.0
 */
class InlineObject32 {
    /**
     * Constructs a new <code>InlineObject32</code>.
     * @alias module:model/InlineObject32
     * @param zones {Array.<String>} 
     */
    constructor(zones) { 
        
        InlineObject32.initialize(this, zones);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, zones) { 
        obj['zones'] = zones;
    }

    /**
     * Constructs a <code>InlineObject32</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject32} obj Optional instance to populate.
     * @return {module:model/InlineObject32} The populated <code>InlineObject32</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject32();

            if (data.hasOwnProperty('zones')) {
                obj['zones'] = ApiClient.convertToType(data['zones'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} zones
 */
InlineObject32.prototype['zones'] = undefined;






export default InlineObject32;

