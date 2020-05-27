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
 * The Discount model module.
 * @module model/Discount
 * @version 0.9.0
 */

class Discount {
  /**
   * Constructs a new <code>Discount</code>.
   * ### Available includes - sets - rewards - items
   * @alias module:model/Discount
   * @param id {String} 
   */
  constructor(id) {
    Discount.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj, id) {
    obj['id'] = id;
  }
  /**
   * Constructs a <code>Discount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Discount} obj Optional instance to populate.
   * @return {module:model/Discount} The populated <code>Discount</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Discount();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('start_at')) {
        obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Date');
      }

      if (data.hasOwnProperty('end_at')) {
        obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Date');
      }

      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'Boolean');
      }

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
      }

      if (data.hasOwnProperty('stop_rules')) {
        obj['stop_rules'] = ApiClient.convertToType(data['stop_rules'], 'Boolean');
      }

      if (data.hasOwnProperty('uses')) {
        obj['uses'] = ApiClient.convertToType(data['uses'], 'Number');
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


Discount.prototype['id'] = undefined;
/**
 * @member {Date} start_at
 */

Discount.prototype['start_at'] = undefined;
/**
 * @member {Date} end_at
 */

Discount.prototype['end_at'] = undefined;
/**
 * @member {Boolean} priority
 */

Discount.prototype['priority'] = undefined;
/**
 * @member {Boolean} status
 */

Discount.prototype['status'] = undefined;
/**
 * @member {Boolean} stop_rules
 */

Discount.prototype['stop_rules'] = undefined;
/**
 * @member {Number} uses
 */

Discount.prototype['uses'] = undefined;
export default Discount;