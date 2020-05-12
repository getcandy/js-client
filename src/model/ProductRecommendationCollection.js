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
import Links from './Links';
import PaginatedResponse from './PaginatedResponse';
import Pagination from './Pagination';
import ProductRecommendation from './ProductRecommendation';
import ProductRecommendationCollectionAllOf from './ProductRecommendationCollectionAllOf';

/**
 * The ProductRecommendationCollection model module.
 * @module model/ProductRecommendationCollection
 * @version 1.0.0
 */
class ProductRecommendationCollection {
    /**
     * Constructs a new <code>ProductRecommendationCollection</code>.
     * @alias module:model/ProductRecommendationCollection
     * @extends module:model/PaginatedResponse
     * @implements module:model/ProductRecommendationCollectionAllOf
     * @implements module:model/PaginatedResponse
     */
    constructor() { 
        ProductRecommendationCollectionAllOf.initialize(this);PaginatedResponse.initialize(this);
        ProductRecommendationCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductRecommendationCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductRecommendationCollection} obj Optional instance to populate.
     * @return {module:model/ProductRecommendationCollection} The populated <code>ProductRecommendationCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductRecommendationCollection();
            PaginatedResponse.constructFromObject(data, obj);
            ProductRecommendationCollectionAllOf.constructFromObject(data, obj);
            PaginatedResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ProductRecommendation]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ProductRecommendation>} data
 */
ProductRecommendationCollection.prototype['data'] = undefined;


// Implement ProductRecommendationCollectionAllOf interface:
/**
 * @member {Array.<module:model/ProductRecommendation>} data
 */
ProductRecommendationCollectionAllOf.prototype['data'] = undefined;
// Implement PaginatedResponse interface:
/**
 * @member {module:model/Links} links
 */
PaginatedResponse.prototype['links'] = undefined;
/**
 * @member {module:model/Pagination} meta
 */
PaginatedResponse.prototype['meta'] = undefined;




export default ProductRecommendationCollection;

