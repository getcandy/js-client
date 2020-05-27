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
 * The AttachCategoryCustomerGroupsBodyGroups model module.
 * @module model/AttachCategoryCustomerGroupsBodyGroups
 * @version 0.9.0
 */

class AttachCategoryCustomerGroupsBodyGroups {
  /**
   * Constructs a new <code>AttachCategoryCustomerGroupsBodyGroups</code>.
   * @alias module:model/AttachCategoryCustomerGroupsBodyGroups
   */
  constructor() {
    AttachCategoryCustomerGroupsBodyGroups.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>AttachCategoryCustomerGroupsBodyGroups</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttachCategoryCustomerGroupsBodyGroups} obj Optional instance to populate.
   * @return {module:model/AttachCategoryCustomerGroupsBodyGroups} The populated <code>AttachCategoryCustomerGroupsBodyGroups</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AttachCategoryCustomerGroupsBodyGroups();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('visible')) {
        obj['visible'] = ApiClient.convertToType(data['visible'], 'Boolean');
      }

      if (data.hasOwnProperty('purchasable')) {
        obj['purchasable'] = ApiClient.convertToType(data['purchasable'], 'Boolean');
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


AttachCategoryCustomerGroupsBodyGroups.prototype['id'] = undefined;
/**
 * @member {Boolean} visible
 */

AttachCategoryCustomerGroupsBodyGroups.prototype['visible'] = undefined;
/**
 * @member {Boolean} purchasable
 */

AttachCategoryCustomerGroupsBodyGroups.prototype['purchasable'] = undefined;
export default AttachCategoryCustomerGroupsBodyGroups;