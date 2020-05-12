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
import DiscountsDiscountIdChannels from './DiscountsDiscountIdChannels';
import DiscountsDiscountIdRewards from './DiscountsDiscountIdRewards';
import DiscountsDiscountIdSets from './DiscountsDiscountIdSets';

/**
 * The InlineObject10 model module.
 * @module model/InlineObject10
 * @version 1.0.0
 */
class InlineObject10 {
    /**
     * Constructs a new <code>InlineObject10</code>.
     * @alias module:model/InlineObject10
     * @param startAt {Date} 
     */
    constructor(startAt) { 
        
        InlineObject10.initialize(this, startAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, startAt) { 
        obj['start_at'] = startAt;
    }

    /**
     * Constructs a <code>InlineObject10</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject10} obj Optional instance to populate.
     * @return {module:model/InlineObject10} The populated <code>InlineObject10</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject10();

            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Date');
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('stop_rules')) {
                obj['stop_rules'] = ApiClient.convertToType(data['stop_rules'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
            if (data.hasOwnProperty('channels')) {
                obj['channels'] = DiscountsDiscountIdChannels.constructFromObject(data['channels']);
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = DiscountsDiscountIdRewards.constructFromObject(data['rewards']);
            }
            if (data.hasOwnProperty('sets')) {
                obj['sets'] = DiscountsDiscountIdSets.constructFromObject(data['sets']);
            }
        }
        return obj;
    }


}

/**
 * @member {Date} start_at
 */
InlineObject10.prototype['start_at'] = undefined;

/**
 * @member {String} end_at
 */
InlineObject10.prototype['end_at'] = undefined;

/**
 * @member {Number} priority
 */
InlineObject10.prototype['priority'] = undefined;

/**
 * @member {Boolean} stop_rules
 */
InlineObject10.prototype['stop_rules'] = undefined;

/**
 * @member {Boolean} status
 */
InlineObject10.prototype['status'] = undefined;

/**
 * @member {module:model/DiscountsDiscountIdChannels} channels
 */
InlineObject10.prototype['channels'] = undefined;

/**
 * @member {module:model/DiscountsDiscountIdRewards} rewards
 */
InlineObject10.prototype['rewards'] = undefined;

/**
 * @member {module:model/DiscountsDiscountIdSets} sets
 */
InlineObject10.prototype['sets'] = undefined;






export default InlineObject10;

