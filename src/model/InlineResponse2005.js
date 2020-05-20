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
 * The InlineResponse2005 model module.
 * @module model/InlineResponse2005
 * @version 0.9.0
 */
class InlineResponse2005 {
    /**
     * Constructs a new <code>InlineResponse2005</code>.
     * @alias module:model/InlineResponse2005
     */
    constructor() { 
        
        InlineResponse2005.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005();

            if (data.hasOwnProperty('current_month')) {
                obj['current_month'] = ApiClient.convertToType(data['current_month'], 'String');
            }
            if (data.hasOwnProperty('previous_month')) {
                obj['previous_month'] = ApiClient.convertToType(data['previous_month'], 'String');
            }
            if (data.hasOwnProperty('today')) {
                obj['today'] = ApiClient.convertToType(data['today'], 'String');
            }
            if (data.hasOwnProperty('yesterday')) {
                obj['yesterday'] = ApiClient.convertToType(data['yesterday'], 'String');
            }
            if (data.hasOwnProperty('current_week')) {
                obj['current_week'] = ApiClient.convertToType(data['current_week'], 'String');
            }
            if (data.hasOwnProperty('previous_week')) {
                obj['previous_week'] = ApiClient.convertToType(data['previous_week'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} current_month
 */
InlineResponse2005.prototype['current_month'] = undefined;

/**
 * @member {String} previous_month
 */
InlineResponse2005.prototype['previous_month'] = undefined;

/**
 * @member {String} today
 */
InlineResponse2005.prototype['today'] = undefined;

/**
 * @member {String} yesterday
 */
InlineResponse2005.prototype['yesterday'] = undefined;

/**
 * @member {String} current_week
 */
InlineResponse2005.prototype['current_week'] = undefined;

/**
 * @member {String} previous_week
 */
InlineResponse2005.prototype['previous_week'] = undefined;






export default InlineResponse2005;

