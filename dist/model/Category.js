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
import AssetCollection from './AssetCollection';
import AssetResponse from './AssetResponse';
import AttributeCollection from './AttributeCollection';
import CategoryCollection from './CategoryCollection';
import ChannelCollection from './ChannelCollection';
import CustomerGroupCollection from './CustomerGroupCollection';
import LayoutResponse from './LayoutResponse';
import ProductCollection from './ProductCollection';
import RouteCollection from './RouteCollection';
/**
 * The Category model module.
 * @module model/Category
 * @version 0.9.0
 */

class Category {
  /**
   * Constructs a new <code>Category</code>.
   * ### Available includes - children
   * @alias module:model/Category
   */
  constructor() {
    Category.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Category} obj Optional instance to populate.
   * @return {module:model/Category} The populated <code>Category</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Category();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
      }

      if (data.hasOwnProperty('products_count')) {
        obj['products_count'] = ApiClient.convertToType(data['products_count'], 'Number');
      }

      if (data.hasOwnProperty('children_count')) {
        obj['children_count'] = ApiClient.convertToType(data['children_count'], 'Number');
      }

      if (data.hasOwnProperty('left_pos')) {
        obj['left_pos'] = ApiClient.convertToType(data['left_pos'], 'Number');
      }

      if (data.hasOwnProperty('right_pos')) {
        obj['right_pos'] = ApiClient.convertToType(data['right_pos'], 'Number');
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('attribute_data')) {
        obj['attribute_data'] = ApiClient.convertToType(data['attribute_data'], Object);
      }

      if (data.hasOwnProperty('children')) {
        obj['children'] = CategoryCollection.constructFromObject(data['children']);
      }

      if (data.hasOwnProperty('channels')) {
        obj['channels'] = ChannelCollection.constructFromObject(data['channels']);
      }

      if (data.hasOwnProperty('ancestors')) {
        obj['ancestors'] = CategoryCollection.constructFromObject(data['ancestors']);
      }

      if (data.hasOwnProperty('routes')) {
        obj['routes'] = RouteCollection.constructFromObject(data['routes']);
      }

      if (data.hasOwnProperty('layout')) {
        obj['layout'] = LayoutResponse.constructFromObject(data['layout']);
      }

      if (data.hasOwnProperty('assets')) {
        obj['assets'] = AssetCollection.constructFromObject(data['assets']);
      }

      if (data.hasOwnProperty('primary_asset')) {
        obj['primary_asset'] = AssetResponse.constructFromObject(data['primary_asset']);
      }

      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = AttributeCollection.constructFromObject(data['attributes']);
      }

      if (data.hasOwnProperty('customer_groups')) {
        obj['customer_groups'] = CustomerGroupCollection.constructFromObject(data['customer_groups']);
      }

      if (data.hasOwnProperty('products')) {
        obj['products'] = ProductCollection.constructFromObject(data['products']);
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


Category.prototype['id'] = undefined;
/**
 * @member {String} sort
 */

Category.prototype['sort'] = undefined;
/**
 * @member {Number} products_count
 */

Category.prototype['products_count'] = undefined;
/**
 * @member {Number} children_count
 */

Category.prototype['children_count'] = undefined;
/**
 * @member {Number} left_pos
 */

Category.prototype['left_pos'] = undefined;
/**
 * @member {Number} right_pos
 */

Category.prototype['right_pos'] = undefined;
/**
 * @member {String} name
 */

Category.prototype['name'] = undefined;
/**
 * @member {Object} attribute_data
 */

Category.prototype['attribute_data'] = undefined;
/**
 * @member {module:model/CategoryCollection} children
 */

Category.prototype['children'] = undefined;
/**
 * @member {module:model/ChannelCollection} channels
 */

Category.prototype['channels'] = undefined;
/**
 * @member {module:model/CategoryCollection} ancestors
 */

Category.prototype['ancestors'] = undefined;
/**
 * @member {module:model/RouteCollection} routes
 */

Category.prototype['routes'] = undefined;
/**
 * @member {module:model/LayoutResponse} layout
 */

Category.prototype['layout'] = undefined;
/**
 * @member {module:model/AssetCollection} assets
 */

Category.prototype['assets'] = undefined;
/**
 * @member {module:model/AssetResponse} primary_asset
 */

Category.prototype['primary_asset'] = undefined;
/**
 * @member {module:model/AttributeCollection} attributes
 */

Category.prototype['attributes'] = undefined;
/**
 * @member {module:model/CustomerGroupCollection} customer_groups
 */

Category.prototype['customer_groups'] = undefined;
/**
 * @member {module:model/ProductCollection} products
 */

Category.prototype['products'] = undefined;
export default Category;