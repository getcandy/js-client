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
import ProductTierPrice from './ProductTierPrice';

/**
 * The ProductTierPriceResponse model module.
 * @module model/ProductTierPriceResponse
 * @version 1.0.0
 */
class ProductTierPriceResponse {
    /**
     * Constructs a new <code>ProductTierPriceResponse</code>.
     * @alias module:model/ProductTierPriceResponse
     */
    constructor() { 
        
        ProductTierPriceResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductTierPriceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductTierPriceResponse} obj Optional instance to populate.
     * @return {module:model/ProductTierPriceResponse} The populated <code>ProductTierPriceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductTierPriceResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ProductTierPrice.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ProductTierPrice} data
 */
ProductTierPriceResponse.prototype['data'] = undefined;






export default ProductTierPriceResponse;

