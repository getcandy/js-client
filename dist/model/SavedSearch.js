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
 * The SavedSearch model module.
 * @module model/SavedSearch
 * @version 0.9.0
 */

class SavedSearch {
  /**
   * Constructs a new <code>SavedSearch</code>.
   * @alias module:model/SavedSearch
   */
  constructor() {
    SavedSearch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>SavedSearch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SavedSearch} obj Optional instance to populate.
   * @return {module:model/SavedSearch} The populated <code>SavedSearch</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SavedSearch();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('payload')) {
        obj['payload'] = ApiClient.convertToType(data['payload'], Object);
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


SavedSearch.prototype['id'] = undefined;
/**
 * @member {String} name
 */

SavedSearch.prototype['name'] = undefined;
/**
 * @member {Object} payload
 */

SavedSearch.prototype['payload'] = undefined;
export default SavedSearch;