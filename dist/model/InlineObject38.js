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
 * The InlineObject38 model module.
 * @module model/InlineObject38
 * @version 0.9.0
 */

class InlineObject38 {
  /**
   * Constructs a new <code>InlineObject38</code>.
   * @alias module:model/InlineObject38
   * @param name {String} Must be unique
   * @param percentage {Number} 
   */
  constructor(name, percentage) {
    InlineObject38.initialize(this, name, percentage);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj, name, percentage) {
    obj['name'] = name;
    obj['percentage'] = percentage;
  }
  /**
   * Constructs a <code>InlineObject38</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineObject38} obj Optional instance to populate.
   * @return {module:model/InlineObject38} The populated <code>InlineObject38</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineObject38();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('percentage')) {
        obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
      }
    }

    return obj;
  }

}
/**
 * Must be unique
 * @member {String} name
 */


InlineObject38.prototype['name'] = undefined;
/**
 * @member {Number} percentage
 */

InlineObject38.prototype['percentage'] = undefined;
export default InlineObject38;