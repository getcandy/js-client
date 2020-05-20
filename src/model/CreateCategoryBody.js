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
import ProductsName from './ProductsName';

/**
 * The CreateCategoryBody model module.
 * @module model/CreateCategoryBody
 * @version 0.9.0
 */
class CreateCategoryBody {
    /**
     * Constructs a new <code>CreateCategoryBody</code>.
     * @alias module:model/CreateCategoryBody
     * @param url {String} 
     * @param path {String} 
     * @param name {module:model/ProductsName} 
     */
    constructor(url, path, name) { 
        
        CreateCategoryBody.initialize(this, url, path, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, path, name) { 
        obj['url'] = url;
        obj['path'] = path;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateCategoryBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCategoryBody} obj Optional instance to populate.
     * @return {module:model/CreateCategoryBody} The populated <code>CreateCategoryBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCategoryBody();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ProductsName.constructFromObject(data['name']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} url
 */
CreateCategoryBody.prototype['url'] = undefined;

/**
 * @member {String} path
 */
CreateCategoryBody.prototype['path'] = undefined;

/**
 * @member {module:model/ProductsName} name
 */
CreateCategoryBody.prototype['name'] = undefined;






export default CreateCategoryBody;

