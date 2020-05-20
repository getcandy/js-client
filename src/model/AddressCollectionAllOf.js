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
import Address from './Address';

/**
 * The AddressCollectionAllOf model module.
 * @module model/AddressCollectionAllOf
 * @version 0.9.0
 */
class AddressCollectionAllOf {
    /**
     * Constructs a new <code>AddressCollectionAllOf</code>.
     * @alias module:model/AddressCollectionAllOf
     */
    constructor() { 
        
        AddressCollectionAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddressCollectionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressCollectionAllOf} obj Optional instance to populate.
     * @return {module:model/AddressCollectionAllOf} The populated <code>AddressCollectionAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressCollectionAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Address]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Address>} data
 */
AddressCollectionAllOf.prototype['data'] = undefined;






export default AddressCollectionAllOf;

