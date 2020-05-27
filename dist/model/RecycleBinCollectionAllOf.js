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
import RecycleBin from './RecycleBin';
/**
 * The RecycleBinCollectionAllOf model module.
 * @module model/RecycleBinCollectionAllOf
 * @version 0.9.0
 */

class RecycleBinCollectionAllOf {
  /**
   * Constructs a new <code>RecycleBinCollectionAllOf</code>.
   * @alias module:model/RecycleBinCollectionAllOf
   */
  constructor() {
    RecycleBinCollectionAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>RecycleBinCollectionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecycleBinCollectionAllOf} obj Optional instance to populate.
   * @return {module:model/RecycleBinCollectionAllOf} The populated <code>RecycleBinCollectionAllOf</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RecycleBinCollectionAllOf();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [RecycleBin]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<module:model/RecycleBin>} data
 */


RecycleBinCollectionAllOf.prototype['data'] = undefined;
export default RecycleBinCollectionAllOf;