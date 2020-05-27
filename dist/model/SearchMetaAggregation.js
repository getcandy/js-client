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
 * The SearchMetaAggregation model module.
 * @module model/SearchMetaAggregation
 * @version 0.9.0
 */

class SearchMetaAggregation {
  /**
   * Constructs a new <code>SearchMetaAggregation</code>.
   * @alias module:model/SearchMetaAggregation
   */
  constructor() {
    SearchMetaAggregation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>SearchMetaAggregation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchMetaAggregation} obj Optional instance to populate.
   * @return {module:model/SearchMetaAggregation} The populated <code>SearchMetaAggregation</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SearchMetaAggregation();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], Object);
      }
    }

    return obj;
  }

}
/**
 * @member {Object} data
 */


SearchMetaAggregation.prototype['data'] = undefined;
export default SearchMetaAggregation;