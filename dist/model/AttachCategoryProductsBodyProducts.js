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
 * The AttachCategoryProductsBodyProducts model module.
 * @module model/AttachCategoryProductsBodyProducts
 * @version 0.9.0
 */

class AttachCategoryProductsBodyProducts {
  /**
   * Constructs a new <code>AttachCategoryProductsBodyProducts</code>.
   * @alias module:model/AttachCategoryProductsBodyProducts
   */
  constructor() {
    AttachCategoryProductsBodyProducts.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>AttachCategoryProductsBodyProducts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttachCategoryProductsBodyProducts} obj Optional instance to populate.
   * @return {module:model/AttachCategoryProductsBodyProducts} The populated <code>AttachCategoryProductsBodyProducts</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AttachCategoryProductsBodyProducts();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Number');
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


AttachCategoryProductsBodyProducts.prototype['id'] = undefined;
/**
 * @member {Number} position
 */

AttachCategoryProductsBodyProducts.prototype['position'] = undefined;
export default AttachCategoryProductsBodyProducts;