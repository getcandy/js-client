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
import SearchMetaAggregation from './SearchMetaAggregation';
import SearchMetaPagination from './SearchMetaPagination';
/**
 * The SearchMeta model module.
 * @module model/SearchMeta
 * @version 0.9.0
 */

class SearchMeta {
  /**
   * Constructs a new <code>SearchMeta</code>.
   * @alias module:model/SearchMeta
   */
  constructor() {
    SearchMeta.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>SearchMeta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchMeta} obj Optional instance to populate.
   * @return {module:model/SearchMeta} The populated <code>SearchMeta</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SearchMeta();

      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
      }

      if (data.hasOwnProperty('category_page')) {
        obj['category_page'] = ApiClient.convertToType(data['category_page'], 'Boolean');
      }

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = SearchMetaPagination.constructFromObject(data['pagination']);
      }

      if (data.hasOwnProperty('aggregation')) {
        obj['aggregation'] = SearchMetaAggregation.constructFromObject(data['aggregation']);
      }
    }

    return obj;
  }

}
/**
 * @member {String} sort
 */


SearchMeta.prototype['sort'] = undefined;
/**
 * @member {Boolean} category_page
 */

SearchMeta.prototype['category_page'] = undefined;
/**
 * @member {module:model/SearchMetaPagination} pagination
 */

SearchMeta.prototype['pagination'] = undefined;
/**
 * @member {module:model/SearchMetaAggregation} aggregation
 */

SearchMeta.prototype['aggregation'] = undefined;
export default SearchMeta;