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
import DiscountsDiscountIdSetsData from './DiscountsDiscountIdSetsData';

/**
 * The DiscountsDiscountIdSets model module.
 * @module model/DiscountsDiscountIdSets
 * @version 0.9.0
 */
class DiscountsDiscountIdSets {
    /**
     * Constructs a new <code>DiscountsDiscountIdSets</code>.
     * @alias module:model/DiscountsDiscountIdSets
     */
    constructor() { 
        
        DiscountsDiscountIdSets.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DiscountsDiscountIdSets</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiscountsDiscountIdSets} obj Optional instance to populate.
     * @return {module:model/DiscountsDiscountIdSets} The populated <code>DiscountsDiscountIdSets</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscountsDiscountIdSets();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [DiscountsDiscountIdSetsData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/DiscountsDiscountIdSetsData>} data
 */
DiscountsDiscountIdSets.prototype['data'] = undefined;






export default DiscountsDiscountIdSets;

