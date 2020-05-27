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
import ErrorError from './ErrorError';
/**
 * The Error model module.
 * @module model/Error
 * @version 0.9.0
 */

class Error {
  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   */
  constructor() {
    Error.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Error();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ErrorError.constructFromObject(data['error']);
      }
    }

    return obj;
  }

}
/**
 * @member {module:model/ErrorError} error
 */


Error.prototype['error'] = undefined;
export default Error;