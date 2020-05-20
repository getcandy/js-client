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
import BasketLine from './BasketLine';

/**
 * The BasketLineCollectionAllOf model module.
 * @module model/BasketLineCollectionAllOf
 * @version 0.9.0
 */
class BasketLineCollectionAllOf {
    /**
     * Constructs a new <code>BasketLineCollectionAllOf</code>.
     * @alias module:model/BasketLineCollectionAllOf
     */
    constructor() { 
        
        BasketLineCollectionAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasketLineCollectionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasketLineCollectionAllOf} obj Optional instance to populate.
     * @return {module:model/BasketLineCollectionAllOf} The populated <code>BasketLineCollectionAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasketLineCollectionAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [BasketLine]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/BasketLine>} data
 */
BasketLineCollectionAllOf.prototype['data'] = undefined;






export default BasketLineCollectionAllOf;

