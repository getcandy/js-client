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
 * The CreateAttributeGroupBodyNameEn model module.
 * @module model/CreateAttributeGroupBodyNameEn
 * @version 0.9.0
 */

class CreateAttributeGroupBodyNameEn {
  /**
   * Constructs a new <code>CreateAttributeGroupBodyNameEn</code>.
   * @alias module:model/CreateAttributeGroupBodyNameEn
   * @param name {String} 
   */
  constructor(name) {
    CreateAttributeGroupBodyNameEn.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj, name) {
    obj['name'] = name;
  }
  /**
   * Constructs a <code>CreateAttributeGroupBodyNameEn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateAttributeGroupBodyNameEn} obj Optional instance to populate.
   * @return {module:model/CreateAttributeGroupBodyNameEn} The populated <code>CreateAttributeGroupBodyNameEn</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateAttributeGroupBodyNameEn();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {String} name
 */


CreateAttributeGroupBodyNameEn.prototype['name'] = undefined;
export default CreateAttributeGroupBodyNameEn;