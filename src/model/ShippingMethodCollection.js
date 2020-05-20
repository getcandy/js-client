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
import Links from './Links';
import PaginatedResponse from './PaginatedResponse';
import Pagination from './Pagination';
import ShippingMethod from './ShippingMethod';
import ShippingMethodCollectionAllOf from './ShippingMethodCollectionAllOf';

/**
 * The ShippingMethodCollection model module.
 * @module model/ShippingMethodCollection
 * @version 0.9.0
 */
class ShippingMethodCollection {
    /**
     * Constructs a new <code>ShippingMethodCollection</code>.
     * @alias module:model/ShippingMethodCollection
     * @extends module:model/PaginatedResponse
     * @implements module:model/ShippingMethodCollectionAllOf
     * @implements module:model/PaginatedResponse
     */
    constructor() { 
        ShippingMethodCollectionAllOf.initialize(this);PaginatedResponse.initialize(this);
        ShippingMethodCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShippingMethodCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShippingMethodCollection} obj Optional instance to populate.
     * @return {module:model/ShippingMethodCollection} The populated <code>ShippingMethodCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingMethodCollection();
            PaginatedResponse.constructFromObject(data, obj);
            ShippingMethodCollectionAllOf.constructFromObject(data, obj);
            PaginatedResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ShippingMethod]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ShippingMethod>} data
 */
ShippingMethodCollection.prototype['data'] = undefined;


// Implement ShippingMethodCollectionAllOf interface:
/**
 * @member {Array.<module:model/ShippingMethod>} data
 */
ShippingMethodCollectionAllOf.prototype['data'] = undefined;
// Implement PaginatedResponse interface:
/**
 * @member {module:model/Pagination} meta
 */
PaginatedResponse.prototype['meta'] = undefined;
/**
 * @member {module:model/Links} links
 */
PaginatedResponse.prototype['links'] = undefined;




export default ShippingMethodCollection;

