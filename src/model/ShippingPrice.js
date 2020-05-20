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
 * The ShippingPrice model module.
 * @module model/ShippingPrice
 * @version 0.9.0
 */
class ShippingPrice {
    /**
     * Constructs a new <code>ShippingPrice</code>.
     * ### Available Includes  - method - zone - currency - customer_groups
     * @alias module:model/ShippingPrice
     */
    constructor() { 
        
        ShippingPrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShippingPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShippingPrice} obj Optional instance to populate.
     * @return {module:model/ShippingPrice} The populated <code>ShippingPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingPrice();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
            }
            if (data.hasOwnProperty('fixed')) {
                obj['fixed'] = ApiClient.convertToType(data['fixed'], 'Boolean');
            }
            if (data.hasOwnProperty('min_basket')) {
                obj['min_basket'] = ApiClient.convertToType(data['min_basket'], 'Number');
            }
            if (data.hasOwnProperty('min_basket_tax')) {
                obj['min_basket_tax'] = ApiClient.convertToType(data['min_basket_tax'], 'Number');
            }
            if (data.hasOwnProperty('min_weight')) {
                obj['min_weight'] = ApiClient.convertToType(data['min_weight'], 'String');
            }
            if (data.hasOwnProperty('weight_unit')) {
                obj['weight_unit'] = ApiClient.convertToType(data['weight_unit'], 'String');
            }
            if (data.hasOwnProperty('min_height')) {
                obj['min_height'] = ApiClient.convertToType(data['min_height'], 'String');
            }
            if (data.hasOwnProperty('height_unit')) {
                obj['height_unit'] = ApiClient.convertToType(data['height_unit'], 'String');
            }
            if (data.hasOwnProperty('min_width')) {
                obj['min_width'] = ApiClient.convertToType(data['min_width'], 'String');
            }
            if (data.hasOwnProperty('width_unit')) {
                obj['width_unit'] = ApiClient.convertToType(data['width_unit'], 'String');
            }
            if (data.hasOwnProperty('min_depth')) {
                obj['min_depth'] = ApiClient.convertToType(data['min_depth'], 'String');
            }
            if (data.hasOwnProperty('depth_unit')) {
                obj['depth_unit'] = ApiClient.convertToType(data['depth_unit'], 'String');
            }
            if (data.hasOwnProperty('min_volume')) {
                obj['min_volume'] = ApiClient.convertToType(data['min_volume'], 'String');
            }
            if (data.hasOwnProperty('volume_unit')) {
                obj['volume_unit'] = ApiClient.convertToType(data['volume_unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ShippingPrice.prototype['id'] = undefined;

/**
 * @member {Number} rate
 */
ShippingPrice.prototype['rate'] = undefined;

/**
 * @member {Number} tax
 */
ShippingPrice.prototype['tax'] = undefined;

/**
 * @member {Boolean} fixed
 */
ShippingPrice.prototype['fixed'] = undefined;

/**
 * Minimum basket total to be eligible
 * @member {Number} min_basket
 */
ShippingPrice.prototype['min_basket'] = undefined;

/**
 * @member {Number} min_basket_tax
 */
ShippingPrice.prototype['min_basket_tax'] = undefined;

/**
 * @member {String} min_weight
 */
ShippingPrice.prototype['min_weight'] = undefined;

/**
 * @member {String} weight_unit
 */
ShippingPrice.prototype['weight_unit'] = undefined;

/**
 * @member {String} min_height
 */
ShippingPrice.prototype['min_height'] = undefined;

/**
 * @member {String} height_unit
 */
ShippingPrice.prototype['height_unit'] = undefined;

/**
 * @member {String} min_width
 */
ShippingPrice.prototype['min_width'] = undefined;

/**
 * @member {String} width_unit
 */
ShippingPrice.prototype['width_unit'] = undefined;

/**
 * @member {String} min_depth
 */
ShippingPrice.prototype['min_depth'] = undefined;

/**
 * @member {String} depth_unit
 */
ShippingPrice.prototype['depth_unit'] = undefined;

/**
 * @member {String} min_volume
 */
ShippingPrice.prototype['min_volume'] = undefined;

/**
 * @member {String} volume_unit
 */
ShippingPrice.prototype['volume_unit'] = undefined;






export default ShippingPrice;

