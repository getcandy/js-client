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
import Language from './Language';
/**
 * The LanguageCollectionAllOf model module.
 * @module model/LanguageCollectionAllOf
 * @version 0.9.0
 */

class LanguageCollectionAllOf {
  /**
   * Constructs a new <code>LanguageCollectionAllOf</code>.
   * @alias module:model/LanguageCollectionAllOf
   */
  constructor() {
    LanguageCollectionAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>LanguageCollectionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LanguageCollectionAllOf} obj Optional instance to populate.
   * @return {module:model/LanguageCollectionAllOf} The populated <code>LanguageCollectionAllOf</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LanguageCollectionAllOf();

      if (data.hasOwnProperty('data')) {
        obj['data'] = Language.constructFromObject(data['data']);
      }
    }

    return obj;
  }

}
/**
 * @member {module:model/Language} data
 */


LanguageCollectionAllOf.prototype['data'] = undefined;
export default LanguageCollectionAllOf;