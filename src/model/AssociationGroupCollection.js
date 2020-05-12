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
import AssociationGroup from './AssociationGroup';
import AssociationGroupCollectionAllOf from './AssociationGroupCollectionAllOf';
import Links from './Links';
import PaginatedResponse from './PaginatedResponse';
import Pagination from './Pagination';

/**
 * The AssociationGroupCollection model module.
 * @module model/AssociationGroupCollection
 * @version 1.0.0
 */
class AssociationGroupCollection {
    /**
     * Constructs a new <code>AssociationGroupCollection</code>.
     * @alias module:model/AssociationGroupCollection
     * @extends module:model/PaginatedResponse
     * @implements module:model/AssociationGroupCollectionAllOf
     * @implements module:model/PaginatedResponse
     */
    constructor() { 
        AssociationGroupCollectionAllOf.initialize(this);PaginatedResponse.initialize(this);
        AssociationGroupCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AssociationGroupCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssociationGroupCollection} obj Optional instance to populate.
     * @return {module:model/AssociationGroupCollection} The populated <code>AssociationGroupCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssociationGroupCollection();
            PaginatedResponse.constructFromObject(data, obj);
            AssociationGroupCollectionAllOf.constructFromObject(data, obj);
            PaginatedResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [AssociationGroup]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/AssociationGroup>} data
 */
AssociationGroupCollection.prototype['data'] = undefined;


// Implement AssociationGroupCollectionAllOf interface:
/**
 * @member {Array.<module:model/AssociationGroup>} data
 */
AssociationGroupCollectionAllOf.prototype['data'] = undefined;
// Implement PaginatedResponse interface:
/**
 * @member {module:model/Links} links
 */
PaginatedResponse.prototype['links'] = undefined;
/**
 * @member {module:model/Pagination} meta
 */
PaginatedResponse.prototype['meta'] = undefined;




export default AssociationGroupCollection;

