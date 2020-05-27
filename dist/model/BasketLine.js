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
import ProductVariantResponse from './ProductVariantResponse';
/**
 * The BasketLine model module.
 * @module model/BasketLine
 * @version 0.9.0
 */

class BasketLine {
  /**
   * Constructs a new <code>BasketLine</code>.
   * @alias module:model/BasketLine
   */
  constructor() {
    BasketLine.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>BasketLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BasketLine} obj Optional instance to populate.
   * @return {module:model/BasketLine} The populated <code>BasketLine</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BasketLine();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }

      if (data.hasOwnProperty('line_total')) {
        obj['line_total'] = ApiClient.convertToType(data['line_total'], 'Number');
      }

      if (data.hasOwnProperty('unit_price')) {
        obj['unit_price'] = ApiClient.convertToType(data['unit_price'], 'Number');
      }

      if (data.hasOwnProperty('unit_tax')) {
        obj['unit_tax'] = ApiClient.convertToType(data['unit_tax'], 'Number');
      }

      if (data.hasOwnProperty('line_discount')) {
        obj['line_discount'] = ApiClient.convertToType(data['line_discount'], 'Number');
      }

      if (data.hasOwnProperty('tax')) {
        obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
      }

      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ApiClient.convertToType(data['meta'], Object);
      }

      if (data.hasOwnProperty('variant')) {
        obj['variant'] = ProductVariantResponse.constructFromObject(data['variant']);
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


BasketLine.prototype['id'] = undefined;
/**
 * @member {Number} quantity
 */

BasketLine.prototype['quantity'] = undefined;
/**
 * @member {Number} line_total
 */

BasketLine.prototype['line_total'] = undefined;
/**
 * @member {Number} unit_price
 */

BasketLine.prototype['unit_price'] = undefined;
/**
 * @member {Number} unit_tax
 */

BasketLine.prototype['unit_tax'] = undefined;
/**
 * @member {Number} line_discount
 */

BasketLine.prototype['line_discount'] = undefined;
/**
 * @member {Number} tax
 */

BasketLine.prototype['tax'] = undefined;
/**
 * @member {Object} meta
 */

BasketLine.prototype['meta'] = undefined;
/**
 * @member {module:model/ProductVariantResponse} variant
 */

BasketLine.prototype['variant'] = undefined;
export default BasketLine;