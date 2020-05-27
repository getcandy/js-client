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
 * The InlineObject13 model module.
 * @module model/InlineObject13
 * @version 0.9.0
 */

class InlineObject13 {
  /**
   * Constructs a new <code>InlineObject13</code>.
   * @alias module:model/InlineObject13
   */
  constructor() {
    InlineObject13.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>InlineObject13</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineObject13} obj Optional instance to populate.
   * @return {module:model/InlineObject13} The populated <code>InlineObject13</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineObject13();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }

      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {String} email
 */


InlineObject13.prototype['email'] = undefined;
/**
 * @member {String} phone
 */

InlineObject13.prototype['phone'] = undefined;
export default InlineObject13;