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
 * The OrderLine model module.
 * @module model/OrderLine
 * @version 0.9.0
 */
class OrderLine {
    /**
     * Constructs a new <code>OrderLine</code>.
     * @alias module:model/OrderLine
     */
    constructor() { 
        
        OrderLine.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderLine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderLine} obj Optional instance to populate.
     * @return {module:model/OrderLine} The populated <code>OrderLine</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderLine();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('line_total')) {
                obj['line_total'] = ApiClient.convertToType(data['line_total'], 'Number');
            }
            if (data.hasOwnProperty('discount_total')) {
                obj['discount_total'] = ApiClient.convertToType(data['discount_total'], 'Number');
            }
            if (data.hasOwnProperty('delivery_total')) {
                obj['delivery_total'] = ApiClient.convertToType(data['delivery_total'], 'Number');
            }
            if (data.hasOwnProperty('unit_price')) {
                obj['unit_price'] = ApiClient.convertToType(data['unit_price'], 'Number');
            }
            if (data.hasOwnProperty('unit_qty')) {
                obj['unit_qty'] = ApiClient.convertToType(data['unit_qty'], 'Number');
            }
            if (data.hasOwnProperty('tax_total')) {
                obj['tax_total'] = ApiClient.convertToType(data['tax_total'], 'Number');
            }
            if (data.hasOwnProperty('tax_rate')) {
                obj['tax_rate'] = ApiClient.convertToType(data['tax_rate'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('option')) {
                obj['option'] = ApiClient.convertToType(data['option'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('is_shipping')) {
                obj['is_shipping'] = ApiClient.convertToType(data['is_shipping'], 'Boolean');
            }
            if (data.hasOwnProperty('is_manual')) {
                obj['is_manual'] = ApiClient.convertToType(data['is_manual'], 'Boolean');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
OrderLine.prototype['id'] = undefined;

/**
 * @member {Number} quantity
 */
OrderLine.prototype['quantity'] = undefined;

/**
 * @member {Number} line_total
 */
OrderLine.prototype['line_total'] = undefined;

/**
 * @member {Number} discount_total
 */
OrderLine.prototype['discount_total'] = undefined;

/**
 * @member {Number} delivery_total
 */
OrderLine.prototype['delivery_total'] = undefined;

/**
 * @member {Number} unit_price
 */
OrderLine.prototype['unit_price'] = undefined;

/**
 * @member {Number} unit_qty
 */
OrderLine.prototype['unit_qty'] = undefined;

/**
 * @member {Number} tax_total
 */
OrderLine.prototype['tax_total'] = undefined;

/**
 * @member {Number} tax_rate
 */
OrderLine.prototype['tax_rate'] = undefined;

/**
 * @member {String} description
 */
OrderLine.prototype['description'] = undefined;

/**
 * @member {String} option
 */
OrderLine.prototype['option'] = undefined;

/**
 * @member {String} sku
 */
OrderLine.prototype['sku'] = undefined;

/**
 * @member {Boolean} is_shipping
 */
OrderLine.prototype['is_shipping'] = undefined;

/**
 * @member {Boolean} is_manual
 */
OrderLine.prototype['is_manual'] = undefined;

/**
 * @member {Object} meta
 */
OrderLine.prototype['meta'] = undefined;






export default OrderLine;

