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
 * The InlineObject11 model module.
 * @module model/InlineObject11
 * @version 0.9.0
 */

class InlineObject11 {
  /**
   * Constructs a new <code>InlineObject11</code>.
   * @alias module:model/InlineObject11
   * @param orders {Array.<String>} 
   * @param field {String} 
   */
  constructor(orders, field) {
    InlineObject11.initialize(this, orders, field);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj, orders, field) {
    obj['orders'] = orders;
    obj['field'] = field;
  }
  /**
   * Constructs a <code>InlineObject11</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineObject11} obj Optional instance to populate.
   * @return {module:model/InlineObject11} The populated <code>InlineObject11</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineObject11();

      if (data.hasOwnProperty('orders')) {
        obj['orders'] = ApiClient.convertToType(data['orders'], ['String']);
      }

      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }

      if (data.hasOwnProperty('send_emails')) {
        obj['send_emails'] = ApiClient.convertToType(data['send_emails'], 'Boolean');
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<String>} orders
 */


InlineObject11.prototype['orders'] = undefined;
/**
 * @member {String} field
 */

InlineObject11.prototype['field'] = undefined;
/**
 * @member {String} value
 */

InlineObject11.prototype['value'] = undefined;
/**
 * Whether to send any mailers when changing status
 * @member {Boolean} send_emails
 */

InlineObject11.prototype['send_emails'] = undefined;
export default InlineObject11;