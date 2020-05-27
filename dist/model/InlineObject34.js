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
import ProductsName from './ProductsName';
/**
 * The InlineObject34 model module.
 * @module model/InlineObject34
 * @version 0.9.0
 */

class InlineObject34 {
  /**
   * Constructs a new <code>InlineObject34</code>.
   * @alias module:model/InlineObject34
   * @param name {module:model/ProductsName} 
   * @param type {String} 
   */
  constructor(name, type) {
    InlineObject34.initialize(this, name, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj, name, type) {
    obj['name'] = name;
    obj['type'] = type;
  }
  /**
   * Constructs a <code>InlineObject34</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineObject34} obj Optional instance to populate.
   * @return {module:model/InlineObject34} The populated <code>InlineObject34</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineObject34();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ProductsName.constructFromObject(data['name']);
      }

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {module:model/ProductsName} name
 */


InlineObject34.prototype['name'] = undefined;
/**
 * @member {String} type
 */

InlineObject34.prototype['type'] = undefined;
export default InlineObject34;