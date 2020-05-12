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
import ProductsProductIdDuplicateRoutes from './ProductsProductIdDuplicateRoutes';

/**
 * The InlineObject18 model module.
 * @module model/InlineObject18
 * @version 1.0.0
 */
class InlineObject18 {
    /**
     * Constructs a new <code>InlineObject18</code>.
     * @alias module:model/InlineObject18
     * @param routes {Array.<module:model/ProductsProductIdDuplicateRoutes>} 
     * @param skus {Array.<module:model/ProductsProductIdDuplicateRoutes>} 
     */
    constructor(routes, skus) { 
        
        InlineObject18.initialize(this, routes, skus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, routes, skus) { 
        obj['routes'] = routes;
        obj['skus'] = skus;
    }

    /**
     * Constructs a <code>InlineObject18</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject18} obj Optional instance to populate.
     * @return {module:model/InlineObject18} The populated <code>InlineObject18</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject18();

            if (data.hasOwnProperty('routes')) {
                obj['routes'] = ApiClient.convertToType(data['routes'], [ProductsProductIdDuplicateRoutes]);
            }
            if (data.hasOwnProperty('skus')) {
                obj['skus'] = ApiClient.convertToType(data['skus'], [ProductsProductIdDuplicateRoutes]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ProductsProductIdDuplicateRoutes>} routes
 */
InlineObject18.prototype['routes'] = undefined;

/**
 * @member {Array.<module:model/ProductsProductIdDuplicateRoutes>} skus
 */
InlineObject18.prototype['skus'] = undefined;






export default InlineObject18;

