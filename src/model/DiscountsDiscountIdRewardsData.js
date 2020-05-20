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
import DiscountsDiscountIdRewardsDataProducts from './DiscountsDiscountIdRewardsDataProducts';

/**
 * The DiscountsDiscountIdRewardsData model module.
 * @module model/DiscountsDiscountIdRewardsData
 * @version 0.9.0
 */
class DiscountsDiscountIdRewardsData {
    /**
     * Constructs a new <code>DiscountsDiscountIdRewardsData</code>.
     * @alias module:model/DiscountsDiscountIdRewardsData
     */
    constructor() { 
        
        DiscountsDiscountIdRewardsData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DiscountsDiscountIdRewardsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiscountsDiscountIdRewardsData} obj Optional instance to populate.
     * @return {module:model/DiscountsDiscountIdRewardsData} The populated <code>DiscountsDiscountIdRewardsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscountsDiscountIdRewardsData();

            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [DiscountsDiscountIdRewardsDataProducts]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/DiscountsDiscountIdRewardsDataProducts>} products
 */
DiscountsDiscountIdRewardsData.prototype['products'] = undefined;






export default DiscountsDiscountIdRewardsData;

