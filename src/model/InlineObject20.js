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
 * The InlineObject20 model module.
 * @module model/InlineObject20
 * @version 0.9.0
 */
class InlineObject20 {
    /**
     * Constructs a new <code>InlineObject20</code>.
     * @alias module:model/InlineObject20
     * @param attributes {Array.<String>} An array of attribute IDs
     */
    constructor(attributes) { 
        
        InlineObject20.initialize(this, attributes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, attributes) { 
        obj['attributes'] = attributes;
    }

    /**
     * Constructs a <code>InlineObject20</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject20} obj Optional instance to populate.
     * @return {module:model/InlineObject20} The populated <code>InlineObject20</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject20();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * An array of attribute IDs
 * @member {Array.<String>} attributes
 */
InlineObject20.prototype['attributes'] = undefined;






export default InlineObject20;

