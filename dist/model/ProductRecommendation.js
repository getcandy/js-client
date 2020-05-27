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
import ProductResponse from './ProductResponse';
/**
 * The ProductRecommendation model module.
 * @module model/ProductRecommendation
 * @version 0.9.0
 */

class ProductRecommendation {
  /**
   * Constructs a new <code>ProductRecommendation</code>.
   * @alias module:model/ProductRecommendation
   */
  constructor() {
    ProductRecommendation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>ProductRecommendation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductRecommendation} obj Optional instance to populate.
   * @return {module:model/ProductRecommendation} The populated <code>ProductRecommendation</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductRecommendation();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('product')) {
        obj['product'] = ProductResponse.constructFromObject(data['product']);
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


ProductRecommendation.prototype['id'] = undefined;
/**
 * @member {module:model/ProductResponse} product
 */

ProductRecommendation.prototype['product'] = undefined;
export default ProductRecommendation;