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
 * The InlineObject30 model module.
 * @module model/InlineObject30
 * @version 0.9.0
 */
class InlineObject30 {
    /**
     * Constructs a new <code>InlineObject30</code>.
     * @alias module:model/InlineObject30
     * @param rate {Number} 
     * @param zoneId {String} 
     * @param currencyId {String} 
     */
    constructor(rate, zoneId, currencyId) { 
        
        InlineObject30.initialize(this, rate, zoneId, currencyId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rate, zoneId, currencyId) { 
        obj['rate'] = rate;
        obj['zone_id'] = zoneId;
        obj['currency_id'] = currencyId;
    }

    /**
     * Constructs a <code>InlineObject30</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject30} obj Optional instance to populate.
     * @return {module:model/InlineObject30} The populated <code>InlineObject30</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject30();

            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('zone_id')) {
                obj['zone_id'] = ApiClient.convertToType(data['zone_id'], 'String');
            }
            if (data.hasOwnProperty('currency_id')) {
                obj['currency_id'] = ApiClient.convertToType(data['currency_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} rate
 */
InlineObject30.prototype['rate'] = undefined;

/**
 * @member {String} zone_id
 */
InlineObject30.prototype['zone_id'] = undefined;

/**
 * @member {String} currency_id
 */
InlineObject30.prototype['currency_id'] = undefined;






export default InlineObject30;

