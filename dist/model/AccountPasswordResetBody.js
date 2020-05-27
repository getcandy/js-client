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
 * The AccountPasswordResetBody model module.
 * @module model/AccountPasswordResetBody
 * @version 0.9.0
 */

class AccountPasswordResetBody {
  /**
   * Constructs a new <code>AccountPasswordResetBody</code>.
   * @alias module:model/AccountPasswordResetBody
   * @param passwordConfirmation {String} 
   * @param password {String} 
   * @param currentPassword {String} 
   */
  constructor(passwordConfirmation, password, currentPassword) {
    AccountPasswordResetBody.initialize(this, passwordConfirmation, password, currentPassword);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj, passwordConfirmation, password, currentPassword) {
    obj['password_confirmation'] = passwordConfirmation;
    obj['password'] = password;
    obj['current_password'] = currentPassword;
  }
  /**
   * Constructs a <code>AccountPasswordResetBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountPasswordResetBody} obj Optional instance to populate.
   * @return {module:model/AccountPasswordResetBody} The populated <code>AccountPasswordResetBody</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AccountPasswordResetBody();

      if (data.hasOwnProperty('password_confirmation')) {
        obj['password_confirmation'] = ApiClient.convertToType(data['password_confirmation'], 'String');
      }

      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }

      if (data.hasOwnProperty('current_password')) {
        obj['current_password'] = ApiClient.convertToType(data['current_password'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {String} password_confirmation
 */


AccountPasswordResetBody.prototype['password_confirmation'] = undefined;
/**
 * @member {String} password
 */

AccountPasswordResetBody.prototype['password'] = undefined;
/**
 * @member {String} current_password
 */

AccountPasswordResetBody.prototype['current_password'] = undefined;
export default AccountPasswordResetBody;