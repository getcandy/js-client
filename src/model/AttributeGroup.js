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
import AttributeCollection from './AttributeCollection';

/**
 * The AttributeGroup model module.
 * @module model/AttributeGroup
 * @version 0.9.0
 */
class AttributeGroup {
    /**
     * Constructs a new <code>AttributeGroup</code>.
     * ### Available includes - attributes
     * @alias module:model/AttributeGroup
     */
    constructor() { 
        
        AttributeGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttributeGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttributeGroup} obj Optional instance to populate.
     * @return {module:model/AttributeGroup} The populated <code>AttributeGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttributeGroup();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], Object);
            }
            if (data.hasOwnProperty('handle')) {
                obj['handle'] = ApiClient.convertToType(data['handle'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = AttributeCollection.constructFromObject(data['attributes']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
AttributeGroup.prototype['id'] = undefined;

/**
 * @member {Object} name
 */
AttributeGroup.prototype['name'] = undefined;

/**
 * @member {String} handle
 */
AttributeGroup.prototype['handle'] = undefined;

/**
 * @member {Number} position
 */
AttributeGroup.prototype['position'] = undefined;

/**
 * @member {module:model/AttributeCollection} attributes
 */
AttributeGroup.prototype['attributes'] = undefined;






export default AttributeGroup;

