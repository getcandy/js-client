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
 * The CreateChannelBody model module.
 * @module model/CreateChannelBody
 * @version 0.9.0
 */

class CreateChannelBody {
  /**
   * Constructs a new <code>CreateChannelBody</code>.
   * @alias module:model/CreateChannelBody
   */
  constructor() {
    CreateChannelBody.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>CreateChannelBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateChannelBody} obj Optional instance to populate.
   * @return {module:model/CreateChannelBody} The populated <code>CreateChannelBody</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateChannelBody();

      if (data.hasOwnProperty('handle')) {
        obj['handle'] = ApiClient.convertToType(data['handle'], 'String');
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {String} handle
 */


CreateChannelBody.prototype['handle'] = undefined;
/**
 * @member {String} name
 */

CreateChannelBody.prototype['name'] = undefined;
export default CreateChannelBody;