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
import AttributesReorderBodyGroups from './AttributesReorderBodyGroups';
/**
 * The AttributesReorderBody model module.
 * @module model/AttributesReorderBody
 * @version 0.9.0
 */

class AttributesReorderBody {
  /**
   * Constructs a new <code>AttributesReorderBody</code>.
   * @alias module:model/AttributesReorderBody
   */
  constructor() {
    AttributesReorderBody.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>AttributesReorderBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttributesReorderBody} obj Optional instance to populate.
   * @return {module:model/AttributesReorderBody} The populated <code>AttributesReorderBody</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AttributesReorderBody();

      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [AttributesReorderBodyGroups]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<module:model/AttributesReorderBodyGroups>} groups
 */


AttributesReorderBody.prototype['groups'] = undefined;
export default AttributesReorderBody;