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
 * The Channel model module.
 * @module model/Channel
 * @version 0.9.0
 */

class Channel {
  /**
   * Constructs a new <code>Channel</code>.
   * ## Available includes  - products - categories - collections - discounts - shippingMethods
   * @alias module:model/Channel
   */
  constructor() {
    Channel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>Channel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Channel} obj Optional instance to populate.
   * @return {module:model/Channel} The populated <code>Channel</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Channel();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('handle')) {
        obj['handle'] = ApiClient.convertToType(data['handle'], 'String');
      }

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }

      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


Channel.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Channel.prototype['name'] = undefined;
/**
 * @member {String} handle
 */

Channel.prototype['handle'] = undefined;
/**
 * @member {String} url
 */

Channel.prototype['url'] = undefined;
/**
 * @member {Boolean} default
 * @default false
 */

Channel.prototype['default'] = false;
export default Channel;