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
import Links from './Links';
import PaginatedResponse from './PaginatedResponse';
import Pagination from './Pagination';
import ProductFamily from './ProductFamily';
import ProductFamilyCollectionAllOf from './ProductFamilyCollectionAllOf';
/**
 * The ProductFamilyCollection model module.
 * @module model/ProductFamilyCollection
 * @version 0.9.0
 */

class ProductFamilyCollection {
  /**
   * Constructs a new <code>ProductFamilyCollection</code>.
   * @alias module:model/ProductFamilyCollection
   * @extends module:model/PaginatedResponse
   * @implements module:model/ProductFamilyCollectionAllOf
   * @implements module:model/PaginatedResponse
   */
  constructor() {
    ProductFamilyCollectionAllOf.initialize(this);
    PaginatedResponse.initialize(this);
    ProductFamilyCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>ProductFamilyCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductFamilyCollection} obj Optional instance to populate.
   * @return {module:model/ProductFamilyCollection} The populated <code>ProductFamilyCollection</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductFamilyCollection();
      PaginatedResponse.constructFromObject(data, obj);
      ProductFamilyCollectionAllOf.constructFromObject(data, obj);
      PaginatedResponse.constructFromObject(data, obj);

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


ProductFamilyCollection.prototype['data'] = undefined; // Implement ProductFamilyCollectionAllOf interface:

/**
 * @member {Array.<module:model/ProductFamily>} data
 */

ProductFamilyCollectionAllOf.prototype['data'] = undefined; // Implement PaginatedResponse interface:

/**
 * @member {module:model/Pagination} meta
 */

PaginatedResponse.prototype['meta'] = undefined;
/**
 * @member {module:model/Links} links
 */

PaginatedResponse.prototype['links'] = undefined;
export default ProductFamilyCollection;