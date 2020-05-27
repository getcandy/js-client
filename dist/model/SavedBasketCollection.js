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
import SavedBasket from './SavedBasket';
import SavedBasketCollectionAllOf from './SavedBasketCollectionAllOf';
/**
 * The SavedBasketCollection model module.
 * @module model/SavedBasketCollection
 * @version 0.9.0
 */

class SavedBasketCollection {
  /**
   * Constructs a new <code>SavedBasketCollection</code>.
   * @alias module:model/SavedBasketCollection
   * @extends module:model/PaginatedResponse
   * @implements module:model/SavedBasketCollectionAllOf
   * @implements module:model/PaginatedResponse
   */
  constructor() {
    SavedBasketCollectionAllOf.initialize(this);
    PaginatedResponse.initialize(this);
    SavedBasketCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>SavedBasketCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SavedBasketCollection} obj Optional instance to populate.
   * @return {module:model/SavedBasketCollection} The populated <code>SavedBasketCollection</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SavedBasketCollection();
      PaginatedResponse.constructFromObject(data, obj);
      SavedBasketCollectionAllOf.constructFromObject(data, obj);
      PaginatedResponse.constructFromObject(data, obj);

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [SavedBasket]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<module:model/SavedBasket>} data
 */


SavedBasketCollection.prototype['data'] = undefined; // Implement SavedBasketCollectionAllOf interface:

/**
 * @member {Array.<module:model/SavedBasket>} data
 */

SavedBasketCollectionAllOf.prototype['data'] = undefined; // Implement PaginatedResponse interface:

/**
 * @member {module:model/Pagination} meta
 */

PaginatedResponse.prototype['meta'] = undefined;
/**
 * @member {module:model/Links} links
 */

PaginatedResponse.prototype['links'] = undefined;
export default SavedBasketCollection;