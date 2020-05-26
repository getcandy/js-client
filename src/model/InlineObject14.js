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
 * The InlineObject14 model module.
 * @module model/InlineObject14
 * @version 0.9.0
 */
class InlineObject14 {
    /**
     * Constructs a new <code>InlineObject14</code>.
     * @alias module:model/InlineObject14
     * @param quantity {Number} 
     * @param lineTotal {Number} 
     * @param unitPrice {Number} 
     * @param taxRate {Number} The tax rate as a percentage
     * @param description {String} Shows publicly on the order line
     * @param sku {String} 
     */
    constructor(quantity, lineTotal, unitPrice, taxRate, description, sku) { 
        
        InlineObject14.initialize(this, quantity, lineTotal, unitPrice, taxRate, description, sku);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, quantity, lineTotal, unitPrice, taxRate, description, sku) { 
        obj['quantity'] = quantity;
        obj['line_total'] = lineTotal;
        obj['unit_price'] = unitPrice;
        obj['tax_rate'] = taxRate;
        obj['description'] = description;
        obj['sku'] = sku;
    }

    /**
     * Constructs a <code>InlineObject14</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject14} obj Optional instance to populate.
     * @return {module:model/InlineObject14} The populated <code>InlineObject14</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject14();

            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('line_total')) {
                obj['line_total'] = ApiClient.convertToType(data['line_total'], 'Number');
            }
            if (data.hasOwnProperty('unit_price')) {
                obj['unit_price'] = ApiClient.convertToType(data['unit_price'], 'Number');
            }
            if (data.hasOwnProperty('tax_rate')) {
                obj['tax_rate'] = ApiClient.convertToType(data['tax_rate'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('is_manual')) {
                obj['is_manual'] = ApiClient.convertToType(data['is_manual'], 'Boolean');
            }
            if (data.hasOwnProperty('is_shipping')) {
                obj['is_shipping'] = ApiClient.convertToType(data['is_shipping'], 'Boolean');
            }
            if (data.hasOwnProperty('option')) {
                obj['option'] = ApiClient.convertToType(data['option'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('discount_total')) {
                obj['discount_total'] = ApiClient.convertToType(data['discount_total'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} quantity
 */
InlineObject14.prototype['quantity'] = undefined;

/**
 * @member {Number} line_total
 */
InlineObject14.prototype['line_total'] = undefined;

/**
 * @member {Number} unit_price
 */
InlineObject14.prototype['unit_price'] = undefined;

/**
 * The tax rate as a percentage
 * @member {Number} tax_rate
 */
InlineObject14.prototype['tax_rate'] = undefined;

/**
 * Shows publicly on the order line
 * @member {String} description
 */
InlineObject14.prototype['description'] = undefined;

/**
 * Should this line be treated as a manual one
 * @member {Boolean} is_manual
 */
InlineObject14.prototype['is_manual'] = undefined;

/**
 * @member {Boolean} is_shipping
 * @default false
 */
InlineObject14.prototype['is_shipping'] = false;

/**
 * If this is a variant, list the option name here
 * @member {String} option
 */
InlineObject14.prototype['option'] = undefined;

/**
 * @member {String} sku
 */
InlineObject14.prototype['sku'] = undefined;

/**
 * @member {Number} discount_total
 */
InlineObject14.prototype['discount_total'] = undefined;






export default InlineObject14;

