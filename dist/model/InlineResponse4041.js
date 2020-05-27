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
import Error from './Error';
/**
 * The InlineResponse4041 model module.
 * @module model/InlineResponse4041
 * @version 0.9.0
 */

class InlineResponse4041 {
  /**
   * Constructs a new <code>InlineResponse4041</code>.
   * @alias module:model/InlineResponse4041
   */
  constructor() {
    InlineResponse4041.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>InlineResponse4041</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse4041} obj Optional instance to populate.
   * @return {module:model/InlineResponse4041} The populated <code>InlineResponse4041</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse4041();

      if (data.hasOwnProperty('')) {
        obj[''] = Error.constructFromObject(data['']);
      }
    }

    return obj;
  }

}
/**
 * @member {module:model/Error} 
 */


InlineResponse4041.prototype[''] = undefined;
export default InlineResponse4041;