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
import Permission from './Permission';
import PermissionCollectionAllOf from './PermissionCollectionAllOf';
/**
 * The PermissionCollection model module.
 * @module model/PermissionCollection
 * @version 0.9.0
 */

class PermissionCollection {
  /**
   * Constructs a new <code>PermissionCollection</code>.
   * @alias module:model/PermissionCollection
   * @extends module:model/PaginatedResponse
   * @implements module:model/PermissionCollectionAllOf
   * @implements module:model/PaginatedResponse
   */
  constructor() {
    PermissionCollectionAllOf.initialize(this);
    PaginatedResponse.initialize(this);
    PermissionCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>PermissionCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PermissionCollection} obj Optional instance to populate.
   * @return {module:model/PermissionCollection} The populated <code>PermissionCollection</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PermissionCollection();
      PaginatedResponse.constructFromObject(data, obj);
      PermissionCollectionAllOf.constructFromObject(data, obj);
      PaginatedResponse.constructFromObject(data, obj);

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Permission]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<module:model/Permission>} data
 */


PermissionCollection.prototype['data'] = undefined; // Implement PermissionCollectionAllOf interface:

/**
 * @member {Array.<module:model/Permission>} data
 */

PermissionCollectionAllOf.prototype['data'] = undefined; // Implement PaginatedResponse interface:

/**
 * @member {module:model/Pagination} meta
 */

PaginatedResponse.prototype['meta'] = undefined;
/**
 * @member {module:model/Links} links
 */

PaginatedResponse.prototype['links'] = undefined;
export default PermissionCollection;