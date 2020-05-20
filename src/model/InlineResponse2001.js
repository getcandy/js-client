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
 * The InlineResponse2001 model module.
 * @module model/InlineResponse2001
 * @version 0.9.0
 */
class InlineResponse2001 {
    /**
     * Constructs a new <code>InlineResponse2001</code>.
     * @alias module:model/InlineResponse2001
     */
    constructor() { 
        
        InlineResponse2001.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001();

            if (data.hasOwnProperty('month')) {
                obj['month'] = ApiClient.convertToType(data['month'], 'String');
            }
            if (data.hasOwnProperty('sub_total')) {
                obj['sub_total'] = ApiClient.convertToType(data['sub_total'], 'String');
            }
            if (data.hasOwnProperty('delivery_total')) {
                obj['delivery_total'] = ApiClient.convertToType(data['delivery_total'], 'String');
            }
            if (data.hasOwnProperty('tax_total')) {
                obj['tax_total'] = ApiClient.convertToType(data['tax_total'], 'String');
            }
            if (data.hasOwnProperty('order_total')) {
                obj['order_total'] = ApiClient.convertToType(data['order_total'], 'String');
            }
            if (data.hasOwnProperty('discount_total')) {
                obj['discount_total'] = ApiClient.convertToType(data['discount_total'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} month
 */
InlineResponse2001.prototype['month'] = undefined;

/**
 * @member {String} sub_total
 */
InlineResponse2001.prototype['sub_total'] = undefined;

/**
 * @member {String} delivery_total
 */
InlineResponse2001.prototype['delivery_total'] = undefined;

/**
 * @member {String} tax_total
 */
InlineResponse2001.prototype['tax_total'] = undefined;

/**
 * @member {String} order_total
 */
InlineResponse2001.prototype['order_total'] = undefined;

/**
 * @member {String} discount_total
 */
InlineResponse2001.prototype['discount_total'] = undefined;






export default InlineResponse2001;

