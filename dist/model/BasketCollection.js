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
import Basket from './Basket';
import BasketCollectionAllOf from './BasketCollectionAllOf';
import Links from './Links';
import PaginatedResponse from './PaginatedResponse';
import Pagination from './Pagination';
/**
 * The BasketCollection model module.
 * @module model/BasketCollection
 * @version 0.9.0
 */

class BasketCollection {
  /**
   * Constructs a new <code>BasketCollection</code>.
   * @alias module:model/BasketCollection
   * @extends module:model/PaginatedResponse
   * @implements module:model/BasketCollectionAllOf
   * @implements module:model/PaginatedResponse
   */
  constructor() {
    BasketCollectionAllOf.initialize(this);
    PaginatedResponse.initialize(this);
    BasketCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>BasketCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BasketCollection} obj Optional instance to populate.
   * @return {module:model/BasketCollection} The populated <code>BasketCollection</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BasketCollection();
      PaginatedResponse.constructFromObject(data, obj);
      BasketCollectionAllOf.constructFromObject(data, obj);
      PaginatedResponse.constructFromObject(data, obj);

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Basket]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<module:model/Basket>} data
 */


BasketCollection.prototype['data'] = undefined; // Implement BasketCollectionAllOf interface:

/**
 * @member {Array.<module:model/Basket>} data
 */

BasketCollectionAllOf.prototype['data'] = undefined; // Implement PaginatedResponse interface:

/**
 * @member {module:model/Pagination} meta
 */

PaginatedResponse.prototype['meta'] = undefined;
/**
 * @member {module:model/Links} links
 */

PaginatedResponse.prototype['links'] = undefined;
export default BasketCollection;