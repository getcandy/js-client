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
 * The InlineResponse42213 model module.
 * @module model/InlineResponse42213
 * @version 0.9.0
 */

class InlineResponse42213 {
  /**
   * Constructs a new <code>InlineResponse42213</code>.
   * @alias module:model/InlineResponse42213
   */
  constructor() {
    InlineResponse42213.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>InlineResponse42213</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse42213} obj Optional instance to populate.
   * @return {module:model/InlineResponse42213} The populated <code>InlineResponse42213</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse42213();

      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], ['String']);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<String>} users
 */


InlineResponse42213.prototype['users'] = undefined;
export default InlineResponse42213;