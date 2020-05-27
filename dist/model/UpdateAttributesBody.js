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
 * The UpdateAttributesBody model module.
 * @module model/UpdateAttributesBody
 * @version 0.9.0
 */

class UpdateAttributesBody {
  /**
   * Constructs a new <code>UpdateAttributesBody</code>.
   * @alias module:model/UpdateAttributesBody
   * @param attributes {Object} 
   */
  constructor(attributes) {
    UpdateAttributesBody.initialize(this, attributes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj, attributes) {
    obj['attributes'] = attributes;
  }
  /**
   * Constructs a <code>UpdateAttributesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateAttributesBody} obj Optional instance to populate.
   * @return {module:model/UpdateAttributesBody} The populated <code>UpdateAttributesBody</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateAttributesBody();

      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
      }
    }

    return obj;
  }

}
/**
 * @member {Object} attributes
 */


UpdateAttributesBody.prototype['attributes'] = undefined;
export default UpdateAttributesBody;