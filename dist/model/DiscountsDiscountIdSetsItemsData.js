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
 * The DiscountsDiscountIdSetsItemsData model module.
 * @module model/DiscountsDiscountIdSetsItemsData
 * @version 0.9.0
 */

class DiscountsDiscountIdSetsItemsData {
  /**
   * Constructs a new <code>DiscountsDiscountIdSetsItemsData</code>.
   * @alias module:model/DiscountsDiscountIdSetsItemsData
   */
  constructor() {
    DiscountsDiscountIdSetsItemsData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>DiscountsDiscountIdSetsItemsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DiscountsDiscountIdSetsItemsData} obj Optional instance to populate.
   * @return {module:model/DiscountsDiscountIdSetsItemsData} The populated <code>DiscountsDiscountIdSetsItemsData</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DiscountsDiscountIdSetsItemsData();

      if (data.hasOwnProperty('eligibles')) {
        obj['eligibles'] = ApiClient.convertToType(data['eligibles'], ['String']);
      }

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<String>} eligibles
 */


DiscountsDiscountIdSetsItemsData.prototype['eligibles'] = undefined;
/**
 * @member {String} type
 */

DiscountsDiscountIdSetsItemsData.prototype['type'] = undefined;
export default DiscountsDiscountIdSetsItemsData;