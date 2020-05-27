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
import CustomerGroupResponse from './CustomerGroupResponse';
import TaxResponse from './TaxResponse';
/**
 * The CustomerPrice model module.
 * @module model/CustomerPrice
 * @version 0.9.0
 */

class CustomerPrice {
  /**
   * Constructs a new <code>CustomerPrice</code>.
   * @alias module:model/CustomerPrice
   */
  constructor() {
    CustomerPrice.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>CustomerPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerPrice} obj Optional instance to populate.
   * @return {module:model/CustomerPrice} The populated <code>CustomerPrice</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CustomerPrice();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }

      if (data.hasOwnProperty('tax')) {
        obj['tax'] = TaxResponse.constructFromObject(data['tax']);
      }

      if (data.hasOwnProperty('group')) {
        obj['group'] = CustomerGroupResponse.constructFromObject(data['group']);
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


CustomerPrice.prototype['id'] = undefined;
/**
 * @member {Number} price
 */

CustomerPrice.prototype['price'] = undefined;
/**
 * @member {module:model/TaxResponse} tax
 */

CustomerPrice.prototype['tax'] = undefined;
/**
 * @member {module:model/CustomerGroupResponse} group
 */

CustomerPrice.prototype['group'] = undefined;
export default CustomerPrice;