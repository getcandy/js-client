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
import Product from './Product';
import ProductCollectionAllOf from './ProductCollectionAllOf';
/**
 * The ProductCollection model module.
 * @module model/ProductCollection
 * @version 0.9.0
 */

class ProductCollection {
  /**
   * Constructs a new <code>ProductCollection</code>.
   * @alias module:model/ProductCollection
   * @extends module:model/PaginatedResponse
   * @implements module:model/ProductCollectionAllOf
   * @implements module:model/PaginatedResponse
   */
  constructor() {
    ProductCollectionAllOf.initialize(this);
    PaginatedResponse.initialize(this);
    ProductCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>ProductCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductCollection} obj Optional instance to populate.
   * @return {module:model/ProductCollection} The populated <code>ProductCollection</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductCollection();
      PaginatedResponse.constructFromObject(data, obj);
      ProductCollectionAllOf.constructFromObject(data, obj);
      PaginatedResponse.constructFromObject(data, obj);

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Product]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<module:model/Product>} data
 */


ProductCollection.prototype['data'] = undefined; // Implement ProductCollectionAllOf interface:

/**
 * @member {Array.<module:model/Product>} data
 */

ProductCollectionAllOf.prototype['data'] = undefined; // Implement PaginatedResponse interface:

/**
 * @member {module:model/Pagination} meta
 */

PaginatedResponse.prototype['meta'] = undefined;
/**
 * @member {module:model/Links} links
 */

PaginatedResponse.prototype['links'] = undefined;
export default ProductCollection;