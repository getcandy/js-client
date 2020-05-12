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
 * The InlineResponse2002202003 model module.
 * @module model/InlineResponse2002202003
 * @version 1.0.0
 */
class InlineResponse2002202003 {
    /**
     * Constructs a new <code>InlineResponse2002202003</code>.
     * @alias module:model/InlineResponse2002202003
     */
    constructor() { 
        
        InlineResponse2002202003.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2002202003</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002202003} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002202003} The populated <code>InlineResponse2002202003</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002202003();

            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Number');
            }
            if (data.hasOwnProperty('returning')) {
                obj['returning'] = ApiClient.convertToType(data['returning'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} label
 */
InlineResponse2002202003.prototype['label'] = undefined;

/**
 * @member {Number} new
 */
InlineResponse2002202003.prototype['new'] = undefined;

/**
 * @member {Number} returning
 */
InlineResponse2002202003.prototype['returning'] = undefined;

/**
 * @member {Number} total
 */
InlineResponse2002202003.prototype['total'] = undefined;






export default InlineResponse2002202003;

