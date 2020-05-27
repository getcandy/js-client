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
import AttachCategoryCustomerGroupsBodyGroups from './AttachCategoryCustomerGroupsBodyGroups';
/**
 * The AttachCategoryCustomerGroupsBody model module.
 * @module model/AttachCategoryCustomerGroupsBody
 * @version 0.9.0
 */

class AttachCategoryCustomerGroupsBody {
  /**
   * Constructs a new <code>AttachCategoryCustomerGroupsBody</code>.
   * @alias module:model/AttachCategoryCustomerGroupsBody
   */
  constructor() {
    AttachCategoryCustomerGroupsBody.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>AttachCategoryCustomerGroupsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttachCategoryCustomerGroupsBody} obj Optional instance to populate.
   * @return {module:model/AttachCategoryCustomerGroupsBody} The populated <code>AttachCategoryCustomerGroupsBody</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AttachCategoryCustomerGroupsBody();

      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [AttachCategoryCustomerGroupsBodyGroups]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<module:model/AttachCategoryCustomerGroupsBodyGroups>} groups
 */


AttachCategoryCustomerGroupsBody.prototype['groups'] = undefined;
export default AttachCategoryCustomerGroupsBody;