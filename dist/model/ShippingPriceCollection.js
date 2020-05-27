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
import ShippingPrice from './ShippingPrice';
/**
 * The ShippingPriceCollection model module.
 * @module model/ShippingPriceCollection
 * @version 0.9.0
 */

class ShippingPriceCollection {
  /**
   * Constructs a new <code>ShippingPriceCollection</code>.
   * @alias module:model/ShippingPriceCollection
   */
  constructor() {
    ShippingPriceCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>ShippingPriceCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShippingPriceCollection} obj Optional instance to populate.
   * @return {module:model/ShippingPriceCollection} The populated <code>ShippingPriceCollection</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ShippingPriceCollection();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [ShippingPrice]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<module:model/ShippingPrice>} data
 */


ShippingPriceCollection.prototype['data'] = undefined;
export default ShippingPriceCollection;