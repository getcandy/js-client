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
import Tag from './Tag';
import TagCollectionAllOf from './TagCollectionAllOf';
/**
 * The TagCollection model module.
 * @module model/TagCollection
 * @version 0.9.0
 */

class TagCollection {
  /**
   * Constructs a new <code>TagCollection</code>.
   * @alias module:model/TagCollection
   * @extends module:model/PaginatedResponse
   * @implements module:model/TagCollectionAllOf
   * @implements module:model/PaginatedResponse
   */
  constructor() {
    TagCollectionAllOf.initialize(this);
    PaginatedResponse.initialize(this);
    TagCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>TagCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagCollection} obj Optional instance to populate.
   * @return {module:model/TagCollection} The populated <code>TagCollection</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagCollection();
      PaginatedResponse.constructFromObject(data, obj);
      TagCollectionAllOf.constructFromObject(data, obj);
      PaginatedResponse.constructFromObject(data, obj);

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Tag]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<module:model/Tag>} data
 */


TagCollection.prototype['data'] = undefined; // Implement TagCollectionAllOf interface:

/**
 * @member {Array.<module:model/Tag>} data
 */

TagCollectionAllOf.prototype['data'] = undefined; // Implement PaginatedResponse interface:

/**
 * @member {module:model/Pagination} meta
 */

PaginatedResponse.prototype['meta'] = undefined;
/**
 * @member {module:model/Links} links
 */

PaginatedResponse.prototype['links'] = undefined;
export default TagCollection;