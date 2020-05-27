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
 * The AttributesOrderUnprocessableResponse model module.
 * @module model/AttributesOrderUnprocessableResponse
 * @version 0.9.0
 */

class AttributesOrderUnprocessableResponse {
  /**
   * Constructs a new <code>AttributesOrderUnprocessableResponse</code>.
   * @alias module:model/AttributesOrderUnprocessableResponse
   */
  constructor() {
    AttributesOrderUnprocessableResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>AttributesOrderUnprocessableResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttributesOrderUnprocessableResponse} obj Optional instance to populate.
   * @return {module:model/AttributesOrderUnprocessableResponse} The populated <code>AttributesOrderUnprocessableResponse</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AttributesOrderUnprocessableResponse();

      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], ['String']);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<String>} attributes
 */


AttributesOrderUnprocessableResponse.prototype['attributes'] = undefined;
export default AttributesOrderUnprocessableResponse;