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
import CreateBasketLinesBodyVariants from './CreateBasketLinesBodyVariants';

/**
 * The CreateBasketLinesBody model module.
 * @module model/CreateBasketLinesBody
 * @version 0.9.0
 */
class CreateBasketLinesBody {
    /**
     * Constructs a new <code>CreateBasketLinesBody</code>.
     * @alias module:model/CreateBasketLinesBody
     */
    constructor() { 
        
        CreateBasketLinesBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateBasketLinesBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateBasketLinesBody} obj Optional instance to populate.
     * @return {module:model/CreateBasketLinesBody} The populated <code>CreateBasketLinesBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateBasketLinesBody();

            if (data.hasOwnProperty('variants')) {
                obj['variants'] = ApiClient.convertToType(data['variants'], [CreateBasketLinesBodyVariants]);
            }
            if (data.hasOwnProperty('basket_id')) {
                obj['basket_id'] = ApiClient.convertToType(data['basket_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CreateBasketLinesBodyVariants>} variants
 */
CreateBasketLinesBody.prototype['variants'] = undefined;

/**
 * @member {String} basket_id
 */
CreateBasketLinesBody.prototype['basket_id'] = undefined;






export default CreateBasketLinesBody;

