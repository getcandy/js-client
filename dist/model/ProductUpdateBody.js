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
 * The ProductUpdateBody model module.
 * @module model/ProductUpdateBody
 * @version 0.9.0
 */

class ProductUpdateBody {
  /**
   * Constructs a new <code>ProductUpdateBody</code>.
   * @alias module:model/ProductUpdateBody
   */
  constructor() {
    ProductUpdateBody.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>ProductUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductUpdateBody} obj Optional instance to populate.
   * @return {module:model/ProductUpdateBody} The populated <code>ProductUpdateBody</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductUpdateBody();

      if (data.hasOwnProperty('attribute_data')) {
        obj['attribute_data'] = ApiClient.convertToType(data['attribute_data'], Object);
      }

      if (data.hasOwnProperty('family_id')) {
        obj['family_id'] = ApiClient.convertToType(data['family_id'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {Object} attribute_data
 */


ProductUpdateBody.prototype['attribute_data'] = undefined;
/**
 * @member {String} family_id
 */

ProductUpdateBody.prototype['family_id'] = undefined;
export default ProductUpdateBody;