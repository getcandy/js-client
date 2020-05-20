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
import Collection from './Collection';

/**
 * The CollectionResponse model module.
 * @module model/CollectionResponse
 * @version 0.9.0
 */
class CollectionResponse {
    /**
     * Constructs a new <code>CollectionResponse</code>.
     * @alias module:model/CollectionResponse
     */
    constructor() { 
        
        CollectionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CollectionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionResponse} obj Optional instance to populate.
     * @return {module:model/CollectionResponse} The populated <code>CollectionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CollectionResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Collection.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Collection} data
 */
CollectionResponse.prototype['data'] = undefined;






export default CollectionResponse;

