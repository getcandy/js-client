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
 * The RouteElementData model module.
 * @module model/RouteElementData
 * @version 0.9.0
 */

class RouteElementData {
  /**
   * Constructs a new <code>RouteElementData</code>.
   * @alias module:model/RouteElementData
   */
  constructor() {
    RouteElementData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>RouteElementData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RouteElementData} obj Optional instance to populate.
   * @return {module:model/RouteElementData} The populated <code>RouteElementData</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RouteElementData();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


RouteElementData.prototype['id'] = undefined;
export default RouteElementData;