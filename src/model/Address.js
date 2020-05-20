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
 * The Address model module.
 * @module model/Address
 * @version 0.9.0
 */
class Address {
    /**
     * Constructs a new <code>Address</code>.
     * @alias module:model/Address
     */
    constructor() { 
        
        Address.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Address} obj Optional instance to populate.
     * @return {module:model/Address} The populated <code>Address</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Address();

            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('address_two')) {
                obj['address_two'] = ApiClient.convertToType(data['address_two'], 'String');
            }
            if (data.hasOwnProperty('address_three')) {
                obj['address_three'] = ApiClient.convertToType(data['address_three'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('county')) {
                obj['county'] = ApiClient.convertToType(data['county'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('zip')) {
                obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} phone
 */
Address.prototype['phone'] = undefined;

/**
 * @member {String} email
 */
Address.prototype['email'] = undefined;

/**
 * @member {String} firstname
 */
Address.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
Address.prototype['lastname'] = undefined;

/**
 * @member {String} address
 */
Address.prototype['address'] = undefined;

/**
 * @member {String} address_two
 */
Address.prototype['address_two'] = undefined;

/**
 * @member {String} address_three
 */
Address.prototype['address_three'] = undefined;

/**
 * @member {String} city
 */
Address.prototype['city'] = undefined;

/**
 * @member {String} county
 */
Address.prototype['county'] = undefined;

/**
 * @member {String} state
 */
Address.prototype['state'] = undefined;

/**
 * @member {String} country
 */
Address.prototype['country'] = undefined;

/**
 * @member {String} zip
 */
Address.prototype['zip'] = undefined;






export default Address;

