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
import UserCollectionAllOf from './UserCollectionAllOf';
/**
 * The UserCollection model module.
 * @module model/UserCollection
 * @version 0.9.0
 */

class UserCollection {
  /**
   * Constructs a new <code>UserCollection</code>.
   * @alias module:model/UserCollection
   * @extends module:model/PaginatedResponse
   * @implements module:model/UserCollectionAllOf
   * @implements module:model/PaginatedResponse
   */
  constructor() {
    UserCollectionAllOf.initialize(this);
    PaginatedResponse.initialize(this);
    UserCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>UserCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserCollection} obj Optional instance to populate.
   * @return {module:model/UserCollection} The populated <code>UserCollection</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserCollection();
      PaginatedResponse.constructFromObject(data, obj);
      UserCollectionAllOf.constructFromObject(data, obj);
      PaginatedResponse.constructFromObject(data, obj);

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Object]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<Object>} data
 */


UserCollection.prototype['data'] = undefined; // Implement UserCollectionAllOf interface:

/**
 * @member {Array.<Object>} data
 */

UserCollectionAllOf.prototype['data'] = undefined; // Implement PaginatedResponse interface:

/**
 * @member {module:model/Pagination} meta
 */

PaginatedResponse.prototype['meta'] = undefined;
/**
 * @member {module:model/Links} links
 */

PaginatedResponse.prototype['links'] = undefined;
export default UserCollection;