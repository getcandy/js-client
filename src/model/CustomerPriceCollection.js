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
import CustomerPrice from './CustomerPrice';

/**
 * The CustomerPriceCollection model module.
 * @module model/CustomerPriceCollection
 * @version 0.9.0
 */
class CustomerPriceCollection {
    /**
     * Constructs a new <code>CustomerPriceCollection</code>.
     * @alias module:model/CustomerPriceCollection
     */
    constructor() { 
        
        CustomerPriceCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerPriceCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerPriceCollection} obj Optional instance to populate.
     * @return {module:model/CustomerPriceCollection} The populated <code>CustomerPriceCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerPriceCollection();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [CustomerPrice]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CustomerPrice>} data
 */
CustomerPriceCollection.prototype['data'] = undefined;






export default CustomerPriceCollection;

