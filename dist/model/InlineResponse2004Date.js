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
import InlineResponse2004DateProducts from './InlineResponse2004DateProducts';
/**
 * The InlineResponse2004Date model module.
 * @module model/InlineResponse2004Date
 * @version 0.9.0
 */

class InlineResponse2004Date {
  /**
   * Constructs a new <code>InlineResponse2004Date</code>.
   * @alias module:model/InlineResponse2004Date
   */
  constructor() {
    InlineResponse2004Date.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>InlineResponse2004Date</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2004Date} obj Optional instance to populate.
   * @return {module:model/InlineResponse2004Date} The populated <code>InlineResponse2004Date</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2004Date();

      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], [InlineResponse2004DateProducts]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<module:model/InlineResponse2004DateProducts>} products
 */


InlineResponse2004Date.prototype['products'] = undefined;
export default InlineResponse2004Date;