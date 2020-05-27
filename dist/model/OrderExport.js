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
 * The OrderExport model module.
 * @module model/OrderExport
 * @version 0.9.0
 */

class OrderExport {
  /**
   * Constructs a new <code>OrderExport</code>.
   * @alias module:model/OrderExport
   */
  constructor() {
    OrderExport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>OrderExport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderExport} obj Optional instance to populate.
   * @return {module:model/OrderExport} The populated <code>OrderExport</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderExport();

      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {String} format
 */


OrderExport.prototype['format'] = undefined;
/**
 * @member {String} content
 */

OrderExport.prototype['content'] = undefined;
export default OrderExport;