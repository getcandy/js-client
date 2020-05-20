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
 * The Route model module.
 * @module model/Route
 * @version 0.9.0
 */
class Route {
    /**
     * Constructs a new <code>Route</code>.
     * @alias module:model/Route
     */
    constructor() { 
        
        Route.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Route</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Route} obj Optional instance to populate.
     * @return {module:model/Route} The populated <code>Route</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Route();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('redirect')) {
                obj['redirect'] = ApiClient.convertToType(data['redirect'], 'Boolean');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Route.prototype['id'] = undefined;

/**
 * @member {Boolean} default
 */
Route.prototype['default'] = undefined;

/**
 * @member {Boolean} redirect
 */
Route.prototype['redirect'] = undefined;

/**
 * @member {String} locale
 */
Route.prototype['locale'] = undefined;

/**
 * @member {String} path
 */
Route.prototype['path'] = undefined;

/**
 * @member {String} slug
 */
Route.prototype['slug'] = undefined;

/**
 * @member {String} description
 */
Route.prototype['description'] = undefined;

/**
 * @member {String} type
 */
Route.prototype['type'] = undefined;






export default Route;

