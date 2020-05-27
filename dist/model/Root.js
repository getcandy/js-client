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
 * The Root model module.
 * @module model/Root
 * @version 0.9.0
 */

class Root {
  /**
   * Constructs a new <code>Root</code>.
   * @alias module:model/Root
   */
  constructor() {
    Root.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>Root</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Root} obj Optional instance to populate.
   * @return {module:model/Root} The populated <code>Root</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Root();

      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }

      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }

      if (data.hasOwnProperty('channel')) {
        obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
      }

      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {String} version
 */


Root.prototype['version'] = undefined;
/**
 * @member {String} locale
 */

Root.prototype['locale'] = undefined;
/**
 * @member {String} channel
 */

Root.prototype['channel'] = undefined;
/**
 * @member {String} currency
 */

Root.prototype['currency'] = undefined;
export default Root;