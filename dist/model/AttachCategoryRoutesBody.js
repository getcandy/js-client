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
 * The AttachCategoryRoutesBody model module.
 * @module model/AttachCategoryRoutesBody
 * @version 0.9.0
 */

class AttachCategoryRoutesBody {
  /**
   * Constructs a new <code>AttachCategoryRoutesBody</code>.
   * @alias module:model/AttachCategoryRoutesBody
   */
  constructor() {
    AttachCategoryRoutesBody.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>AttachCategoryRoutesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttachCategoryRoutesBody} obj Optional instance to populate.
   * @return {module:model/AttachCategoryRoutesBody} The populated <code>AttachCategoryRoutesBody</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AttachCategoryRoutesBody();

      if (data.hasOwnProperty('redirect')) {
        obj['redirect'] = ApiClient.convertToType(data['redirect'], 'Boolean');
      }

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }

      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }

      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {Boolean} redirect
 */


AttachCategoryRoutesBody.prototype['redirect'] = undefined;
/**
 * @member {String} description
 */

AttachCategoryRoutesBody.prototype['description'] = undefined;
/**
 * @member {String} slug
 */

AttachCategoryRoutesBody.prototype['slug'] = undefined;
/**
 * @member {String} locale
 */

AttachCategoryRoutesBody.prototype['locale'] = undefined;
export default AttachCategoryRoutesBody;