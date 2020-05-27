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
 * The RecycleBin model module.
 * @module model/RecycleBin
 * @version 0.9.0
 */

class RecycleBin {
  /**
   * Constructs a new <code>RecycleBin</code>.
   * @alias module:model/RecycleBin
   */
  constructor() {
    RecycleBin.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>RecycleBin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecycleBin} obj Optional instance to populate.
   * @return {module:model/RecycleBin} The populated <code>RecycleBin</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RecycleBin();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('thumbnail')) {
        obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], 'String');
      }

      if (data.hasOwnProperty('deleted_at')) {
        obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'String');
      }

      if (data.hasOwnProperty('recyclable')) {
        obj['recyclable'] = ApiClient.convertToType(data['recyclable'], Object);
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


RecycleBin.prototype['id'] = undefined;
/**
 * @member {String} type
 */

RecycleBin.prototype['type'] = undefined;
/**
 * @member {String} name
 */

RecycleBin.prototype['name'] = undefined;
/**
 * @member {String} thumbnail
 */

RecycleBin.prototype['thumbnail'] = undefined;
/**
 * @member {String} deleted_at
 */

RecycleBin.prototype['deleted_at'] = undefined;
/**
 * @member {Object} recyclable
 */

RecycleBin.prototype['recyclable'] = undefined;
export default RecycleBin;