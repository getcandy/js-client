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
import DiscountsDiscountIdSetsItems from './DiscountsDiscountIdSetsItems';
/**
 * The DiscountsDiscountIdSetsData model module.
 * @module model/DiscountsDiscountIdSetsData
 * @version 0.9.0
 */

class DiscountsDiscountIdSetsData {
  /**
   * Constructs a new <code>DiscountsDiscountIdSetsData</code>.
   * @alias module:model/DiscountsDiscountIdSetsData
   */
  constructor() {
    DiscountsDiscountIdSetsData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>DiscountsDiscountIdSetsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DiscountsDiscountIdSetsData} obj Optional instance to populate.
   * @return {module:model/DiscountsDiscountIdSetsData} The populated <code>DiscountsDiscountIdSetsData</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DiscountsDiscountIdSetsData();

      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }

      if (data.hasOwnProperty('outcome')) {
        obj['outcome'] = ApiClient.convertToType(data['outcome'], 'Boolean');
      }

      if (data.hasOwnProperty('items')) {
        obj['items'] = DiscountsDiscountIdSetsItems.constructFromObject(data['items']);
      }
    }

    return obj;
  }

}
/**
 * @member {String} scope
 */


DiscountsDiscountIdSetsData.prototype['scope'] = undefined;
/**
 * @member {Boolean} outcome
 */

DiscountsDiscountIdSetsData.prototype['outcome'] = undefined;
/**
 * @member {module:model/DiscountsDiscountIdSetsItems} items
 */

DiscountsDiscountIdSetsData.prototype['items'] = undefined;
export default DiscountsDiscountIdSetsData;