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
import ProductTierPrice from './ProductTierPrice';

/**
 * The ProductTierPriceCollection model module.
 * @module model/ProductTierPriceCollection
 * @version 0.9.0
 */
class ProductTierPriceCollection {
    /**
     * Constructs a new <code>ProductTierPriceCollection</code>.
     * @alias module:model/ProductTierPriceCollection
     */
    constructor() { 
        
        ProductTierPriceCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductTierPriceCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductTierPriceCollection} obj Optional instance to populate.
     * @return {module:model/ProductTierPriceCollection} The populated <code>ProductTierPriceCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductTierPriceCollection();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ProductTierPrice]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ProductTierPrice>} data
 */
ProductTierPriceCollection.prototype['data'] = undefined;






export default ProductTierPriceCollection;

