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
import ProductFamily from './ProductFamily';
/**
 * The ProductFamilyCollectionAllOf model module.
 * @module model/ProductFamilyCollectionAllOf
 * @version 0.9.0
 */

class ProductFamilyCollectionAllOf {
  /**
   * Constructs a new <code>ProductFamilyCollectionAllOf</code>.
   * @alias module:model/ProductFamilyCollectionAllOf
   */
  constructor() {
    ProductFamilyCollectionAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>ProductFamilyCollectionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductFamilyCollectionAllOf} obj Optional instance to populate.
   * @return {module:model/ProductFamilyCollectionAllOf} The populated <code>ProductFamilyCollectionAllOf</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductFamilyCollectionAllOf();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [ProductFamily]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<module:model/ProductFamily>} data
 */


ProductFamilyCollectionAllOf.prototype['data'] = undefined;
export default ProductFamilyCollectionAllOf;