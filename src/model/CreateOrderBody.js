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

/**
 * The CreateOrderBody model module.
 * @module model/CreateOrderBody
 * @version 0.9.0
 */
class CreateOrderBody {
    /**
     * Constructs a new <code>CreateOrderBody</code>.
     * @alias module:model/CreateOrderBody
     * @param basketId {String} 
     */
    constructor(basketId) { 
        
        CreateOrderBody.initialize(this, basketId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, basketId) { 
        obj['basket_id'] = basketId;
    }

    /**
     * Constructs a <code>CreateOrderBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateOrderBody} obj Optional instance to populate.
     * @return {module:model/CreateOrderBody} The populated <code>CreateOrderBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateOrderBody();

            if (data.hasOwnProperty('basket_id')) {
                obj['basket_id'] = ApiClient.convertToType(data['basket_id'], 'String');
            }
            if (data.hasOwnProperty('include')) {
                obj['include'] = ApiClient.convertToType(data['include'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} basket_id
 */
CreateOrderBody.prototype['basket_id'] = undefined;

/**
 * @member {String} include
 */
CreateOrderBody.prototype['include'] = undefined;






export default CreateOrderBody;
