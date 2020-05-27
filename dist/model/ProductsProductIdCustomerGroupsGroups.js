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
 * The ProductsProductIdCustomerGroupsGroups model module.
 * @module model/ProductsProductIdCustomerGroupsGroups
 * @version 0.9.0
 */

class ProductsProductIdCustomerGroupsGroups {
  /**
   * Constructs a new <code>ProductsProductIdCustomerGroupsGroups</code>.
   * @alias module:model/ProductsProductIdCustomerGroupsGroups
   * @param visible {Boolean} 
   * @param purchasable {Boolean} 
   */
  constructor(visible, purchasable) {
    ProductsProductIdCustomerGroupsGroups.initialize(this, visible, purchasable);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj, visible, purchasable) {
    obj['visible'] = visible;
    obj['purchasable'] = purchasable;
  }
  /**
   * Constructs a <code>ProductsProductIdCustomerGroupsGroups</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductsProductIdCustomerGroupsGroups} obj Optional instance to populate.
   * @return {module:model/ProductsProductIdCustomerGroupsGroups} The populated <code>ProductsProductIdCustomerGroupsGroups</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductsProductIdCustomerGroupsGroups();

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
 * @member {Boolean} visible
 */


ProductsProductIdCustomerGroupsGroups.prototype['visible'] = undefined;
/**
 * @member {Boolean} purchasable
 */

ProductsProductIdCustomerGroupsGroups.prototype['purchasable'] = undefined;
export default ProductsProductIdCustomerGroupsGroups;