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
 * The InlineObject40 model module.
 * @module model/InlineObject40
 * @version 0.9.0
 */
class InlineObject40 {
    /**
     * Constructs a new <code>InlineObject40</code>.
     * @alias module:model/InlineObject40
     * @param email {String} 
     * @param firstname {String} 
     * @param lastname {String} 
     * @param password {String} 
     * @param passwordConfirmation {String} 
     */
    constructor(email, firstname, lastname, password, passwordConfirmation) { 
        
        InlineObject40.initialize(this, email, firstname, lastname, password, passwordConfirmation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, firstname, lastname, password, passwordConfirmation) { 
        obj['email'] = email;
        obj['firstname'] = firstname;
        obj['lastname'] = lastname;
        obj['password'] = password;
        obj['password_confirmation'] = passwordConfirmation;
    }

    /**
     * Constructs a <code>InlineObject40</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject40} obj Optional instance to populate.
     * @return {module:model/InlineObject40} The populated <code>InlineObject40</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject40();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('password_confirmation')) {
                obj['password_confirmation'] = ApiClient.convertToType(data['password_confirmation'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
InlineObject40.prototype['email'] = undefined;

/**
 * @member {String} firstname
 */
InlineObject40.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
InlineObject40.prototype['lastname'] = undefined;

/**
 * @member {String} password
 */
InlineObject40.prototype['password'] = undefined;

/**
 * @member {String} password_confirmation
 */
InlineObject40.prototype['password_confirmation'] = undefined;






export default InlineObject40;

