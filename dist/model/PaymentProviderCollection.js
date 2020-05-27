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
import Links from './Links';
import PaginatedResponse from './PaginatedResponse';
import Pagination from './Pagination';
import PaymentProvider from './PaymentProvider';
import PaymentProviderCollectionAllOf from './PaymentProviderCollectionAllOf';
/**
 * The PaymentProviderCollection model module.
 * @module model/PaymentProviderCollection
 * @version 0.9.0
 */

class PaymentProviderCollection {
  /**
   * Constructs a new <code>PaymentProviderCollection</code>.
   * @alias module:model/PaymentProviderCollection
   * @extends module:model/PaginatedResponse
   * @implements module:model/PaymentProviderCollectionAllOf
   * @implements module:model/PaginatedResponse
   */
  constructor() {
    PaymentProviderCollectionAllOf.initialize(this);
    PaginatedResponse.initialize(this);
    PaymentProviderCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>PaymentProviderCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentProviderCollection} obj Optional instance to populate.
   * @return {module:model/PaymentProviderCollection} The populated <code>PaymentProviderCollection</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PaymentProviderCollection();
      PaginatedResponse.constructFromObject(data, obj);
      PaymentProviderCollectionAllOf.constructFromObject(data, obj);
      PaginatedResponse.constructFromObject(data, obj);

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [PaymentProvider]);
      }
    }

    return obj;
  }

}
/**
 * @member {Array.<module:model/PaymentProvider>} data
 */


PaymentProviderCollection.prototype['data'] = undefined; // Implement PaymentProviderCollectionAllOf interface:

/**
 * @member {Array.<module:model/PaymentProvider>} data
 */

PaymentProviderCollectionAllOf.prototype['data'] = undefined; // Implement PaginatedResponse interface:

/**
 * @member {module:model/Pagination} meta
 */

PaginatedResponse.prototype['meta'] = undefined;
/**
 * @member {module:model/Links} links
 */

PaginatedResponse.prototype['links'] = undefined;
export default PaymentProviderCollection;