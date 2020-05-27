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
import Role from './Role';
/**
 * The RoleCollectionAllOf model module.
 * @module model/RoleCollectionAllOf
 * @version 0.9.0
 */

class RoleCollectionAllOf {
  /**
   * Constructs a new <code>RoleCollectionAllOf</code>.
   * @alias module:model/RoleCollectionAllOf
   */
  constructor() {
    RoleCollectionAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>RoleCollectionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RoleCollectionAllOf} obj Optional instance to populate.
   * @return {module:model/RoleCollectionAllOf} The populated <code>RoleCollectionAllOf</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RoleCollectionAllOf();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Role]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<module:model/Role>} data
 */


RoleCollectionAllOf.prototype['data'] = undefined;
export default RoleCollectionAllOf;