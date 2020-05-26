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
import ProductsProductIdAssociationsRelations from './ProductsProductIdAssociationsRelations';

/**
 * The InlineObject24 model module.
 * @module model/InlineObject24
 * @version 0.9.0
 */
class InlineObject24 {
    /**
     * Constructs a new <code>InlineObject24</code>.
     * @alias module:model/InlineObject24
     */
    constructor() { 
        
        InlineObject24.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject24</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject24} obj Optional instance to populate.
     * @return {module:model/InlineObject24} The populated <code>InlineObject24</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject24();

            if (data.hasOwnProperty('relations')) {
                obj['relations'] = ProductsProductIdAssociationsRelations.constructFromObject(data['relations']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ProductsProductIdAssociationsRelations} relations
 */
InlineObject24.prototype['relations'] = undefined;






export default InlineObject24;

