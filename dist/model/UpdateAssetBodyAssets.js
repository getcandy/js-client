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
 * The UpdateAssetBodyAssets model module.
 * @module model/UpdateAssetBodyAssets
 * @version 0.9.0
 */

class UpdateAssetBodyAssets {
  /**
   * Constructs a new <code>UpdateAssetBodyAssets</code>.
   * @alias module:model/UpdateAssetBodyAssets
   * @param id {String} 
   */
  constructor(id) {
    UpdateAssetBodyAssets.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj, id) {
    obj['id'] = id;
  }
  /**
   * Constructs a <code>UpdateAssetBodyAssets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateAssetBodyAssets} obj Optional instance to populate.
   * @return {module:model/UpdateAssetBodyAssets} The populated <code>UpdateAssetBodyAssets</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateAssetBodyAssets();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


UpdateAssetBodyAssets.prototype['id'] = undefined;
/**
 * @member {Array.<String>} tags
 */

UpdateAssetBodyAssets.prototype['tags'] = undefined;
export default UpdateAssetBodyAssets;