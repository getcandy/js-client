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
 * The DiscountsChannels model module.
 * @module model/DiscountsChannels
 * @version 0.9.0
 */

class DiscountsChannels {
  /**
   * Constructs a new <code>DiscountsChannels</code>.
   * @alias module:model/DiscountsChannels
   * @param id {String} 
   */
  constructor(id) {
    DiscountsChannels.initialize(this, id);
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
   * Constructs a <code>DiscountsChannels</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DiscountsChannels} obj Optional instance to populate.
   * @return {module:model/DiscountsChannels} The populated <code>DiscountsChannels</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DiscountsChannels();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('published_at')) {
        obj['published_at'] = ApiClient.convertToType(data['published_at'], 'Date');
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


DiscountsChannels.prototype['id'] = undefined;
/**
 * @member {Date} published_at
 */

DiscountsChannels.prototype['published_at'] = undefined;
export default DiscountsChannels;