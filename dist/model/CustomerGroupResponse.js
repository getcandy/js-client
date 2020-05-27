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
import CustomerGroup from './CustomerGroup';
/**
 * The CustomerGroupResponse model module.
 * @module model/CustomerGroupResponse
 * @version 0.9.0
 */

class CustomerGroupResponse {
  /**
   * Constructs a new <code>CustomerGroupResponse</code>.
   * @alias module:model/CustomerGroupResponse
   */
  constructor() {
    CustomerGroupResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>CustomerGroupResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerGroupResponse} obj Optional instance to populate.
   * @return {module:model/CustomerGroupResponse} The populated <code>CustomerGroupResponse</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CustomerGroupResponse();

      if (data.hasOwnProperty('data')) {
        obj['data'] = CustomerGroup.constructFromObject(data['data']);
      }
    }

    return obj;
  }

}
/**
 * @member {module:model/CustomerGroup} data
 */


CustomerGroupResponse.prototype['data'] = undefined;
export default CustomerGroupResponse;