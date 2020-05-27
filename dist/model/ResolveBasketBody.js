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
 * The ResolveBasketBody model module.
 * @module model/ResolveBasketBody
 * @version 0.9.0
 */

class ResolveBasketBody {
  /**
   * Constructs a new <code>ResolveBasketBody</code>.
   * @alias module:model/ResolveBasketBody
   * @param basketId {String} 
   */
  constructor(basketId) {
    ResolveBasketBody.initialize(this, basketId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj, basketId) {
    obj['basket_id'] = basketId;
  }
  /**
   * Constructs a <code>ResolveBasketBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResolveBasketBody} obj Optional instance to populate.
   * @return {module:model/ResolveBasketBody} The populated <code>ResolveBasketBody</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResolveBasketBody();

      if (data.hasOwnProperty('merge')) {
        obj['merge'] = ApiClient.convertToType(data['merge'], 'Boolean');
      }

      if (data.hasOwnProperty('basket_id')) {
        obj['basket_id'] = ApiClient.convertToType(data['basket_id'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {Boolean} merge
 * @default false
 */


ResolveBasketBody.prototype['merge'] = false;
/**
 * @member {String} basket_id
 */

ResolveBasketBody.prototype['basket_id'] = undefined;
export default ResolveBasketBody;