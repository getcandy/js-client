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
 * The InlineResponse4226 model module.
 * @module model/InlineResponse4226
 * @version 0.9.0
 */

class InlineResponse4226 {
  /**
   * Constructs a new <code>InlineResponse4226</code>.
   * @alias module:model/InlineResponse4226
   */
  constructor() {
    InlineResponse4226.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>InlineResponse4226</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse4226} obj Optional instance to populate.
   * @return {module:model/InlineResponse4226} The populated <code>InlineResponse4226</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse4226();

      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], ['String']);
      }

      if (data.hasOwnProperty('line_total')) {
        obj['line_total'] = ApiClient.convertToType(data['line_total'], ['String']);
      }

      if (data.hasOwnProperty('unit_price')) {
        obj['unit_price'] = ApiClient.convertToType(data['unit_price'], ['String']);
      }

      if (data.hasOwnProperty('tax_rate')) {
        obj['tax_rate'] = ApiClient.convertToType(data['tax_rate'], ['String']);
      }

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], ['String']);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<String>} quantity
 */


InlineResponse4226.prototype['quantity'] = undefined;
/**
 * @member {Array.<String>} line_total
 */

InlineResponse4226.prototype['line_total'] = undefined;
/**
 * @member {Array.<String>} unit_price
 */

InlineResponse4226.prototype['unit_price'] = undefined;
/**
 * @member {Array.<String>} tax_rate
 */

InlineResponse4226.prototype['tax_rate'] = undefined;
/**
 * @member {Array.<String>} description
 */

InlineResponse4226.prototype['description'] = undefined;
export default InlineResponse4226;