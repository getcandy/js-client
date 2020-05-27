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
import Language from './Language';
import Layout from './Layout';
import LayoutCollectionAllOf from './LayoutCollectionAllOf';
/**
 * The LayoutCollection model module.
 * @module model/LayoutCollection
 * @version 0.9.0
 */

class LayoutCollection {
  /**
   * Constructs a new <code>LayoutCollection</code>.
   * @alias module:model/LayoutCollection
   * @extends module:model/Layout
   * @implements module:model/LayoutCollectionAllOf
   * @implements module:model/Layout
   * @param id {String} 
   * @param name {String} 
   * @param handle {String} 
   * @param type {String} 
   */
  constructor(id, name, handle, type) {
    LayoutCollectionAllOf.initialize(this);
    Layout.initialize(this, id, name, handle, type);
    LayoutCollection.initialize(this, id, name, handle, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj, id, name, handle, type) {}
  /**
   * Constructs a <code>LayoutCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LayoutCollection} obj Optional instance to populate.
   * @return {module:model/LayoutCollection} The populated <code>LayoutCollection</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LayoutCollection();
      Layout.constructFromObject(data, obj);
      LayoutCollectionAllOf.constructFromObject(data, obj);
      Layout.constructFromObject(data, obj);

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Language]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<module:model/Language>} data
 */


LayoutCollection.prototype['data'] = undefined; // Implement LayoutCollectionAllOf interface:

/**
 * @member {Array.<module:model/Language>} data
 */

LayoutCollectionAllOf.prototype['data'] = undefined; // Implement Layout interface:

/**
 * @member {String} id
 */

Layout.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Layout.prototype['name'] = undefined;
/**
 * @member {String} handle
 */

Layout.prototype['handle'] = undefined;
/**
 * @member {String} type
 */

Layout.prototype['type'] = undefined;
export default LayoutCollection;