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
import AddressCollectionAllOf from './AddressCollectionAllOf';
import Links from './Links';
import PaginatedResponse from './PaginatedResponse';
import Pagination from './Pagination';

/**
 * The AddressCollection model module.
 * @module model/AddressCollection
 * @version 0.9.0
 */
class AddressCollection {
    /**
     * Constructs a new <code>AddressCollection</code>.
     * @alias module:model/AddressCollection
     * @extends module:model/PaginatedResponse
     * @implements module:model/AddressCollectionAllOf
     * @implements module:model/PaginatedResponse
     */
    constructor() { 
        AddressCollectionAllOf.initialize(this);PaginatedResponse.initialize(this);
        AddressCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddressCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressCollection} obj Optional instance to populate.
     * @return {module:model/AddressCollection} The populated <code>AddressCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressCollection();
            PaginatedResponse.constructFromObject(data, obj);
            AddressCollectionAllOf.constructFromObject(data, obj);
            PaginatedResponse.constructFromObject(data, obj);

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
AddressCollection.prototype['data'] = undefined;


// Implement AddressCollectionAllOf interface:
/**
 * @member {Array.<module:model/Address>} data
 */
AddressCollectionAllOf.prototype['data'] = undefined;
// Implement PaginatedResponse interface:
/**
 * @member {module:model/Pagination} meta
 */
PaginatedResponse.prototype['meta'] = undefined;
/**
 * @member {module:model/Links} links
 */
PaginatedResponse.prototype['links'] = undefined;




export default AddressCollection;

