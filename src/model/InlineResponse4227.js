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
 * The InlineResponse4227 model module.
 * @module model/InlineResponse4227
 * @version 1.0.0
 */
class InlineResponse4227 {
    /**
     * Constructs a new <code>InlineResponse4227</code>.
     * @alias module:model/InlineResponse4227
     */
    constructor() { 
        
        InlineResponse4227.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse4227</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse4227} obj Optional instance to populate.
     * @return {module:model/InlineResponse4227} The populated <code>InlineResponse4227</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse4227();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} attributes
 */
InlineResponse4227.prototype['attributes'] = undefined;






export default InlineResponse4227;

