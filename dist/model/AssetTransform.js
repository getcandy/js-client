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
 * The AssetTransform model module.
 * @module model/AssetTransform
 * @version 0.9.0
 */

class AssetTransform {
  /**
   * Constructs a new <code>AssetTransform</code>.
   * @alias module:model/AssetTransform
   */
  constructor() {
    AssetTransform.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>AssetTransform</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssetTransform} obj Optional instance to populate.
   * @return {module:model/AssetTransform} The populated <code>AssetTransform</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AssetTransform();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('handle')) {
        obj['handle'] = ApiClient.convertToType(data['handle'], 'String');
      }

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


AssetTransform.prototype['id'] = undefined;
/**
 * @member {String} handle
 */

AssetTransform.prototype['handle'] = undefined;
/**
 * @member {String} url
 */

AssetTransform.prototype['url'] = undefined;
export default AssetTransform;