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
 * The Transaction model module.
 * @module model/Transaction
 * @version 0.9.0
 */

class Transaction {
  /**
   * Constructs a new <code>Transaction</code>.
   * @alias module:model/Transaction
   */
  constructor() {
    Transaction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Transaction} obj Optional instance to populate.
   * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Transaction();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('transaction_id')) {
        obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
      }

      if (data.hasOwnProperty('merchant')) {
        obj['merchant'] = ApiClient.convertToType(data['merchant'], 'String');
      }

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }

      if (data.hasOwnProperty('card_type')) {
        obj['card_type'] = ApiClient.convertToType(data['card_type'], 'String');
      }

      if (data.hasOwnProperty('last_four')) {
        obj['last_four'] = ApiClient.convertToType(data['last_four'], 'String');
      }

      if (data.hasOwnProperty('provider')) {
        obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
      }

      if (data.hasOwnProperty('driver')) {
        obj['driver'] = ApiClient.convertToType(data['driver'], 'String');
      }

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('refund')) {
        obj['refund'] = ApiClient.convertToType(data['refund'], 'Boolean');
      }

      if (data.hasOwnProperty('address_matched')) {
        obj['address_matched'] = ApiClient.convertToType(data['address_matched'], 'Boolean');
      }

      if (data.hasOwnProperty('cvc_matched')) {
        obj['cvc_matched'] = ApiClient.convertToType(data['cvc_matched'], 'Boolean');
      }

      if (data.hasOwnProperty('threed_secure')) {
        obj['threed_secure'] = ApiClient.convertToType(data['threed_secure'], 'Boolean');
      }

      if (data.hasOwnProperty('postcode_matched')) {
        obj['postcode_matched'] = ApiClient.convertToType(data['postcode_matched'], 'Boolean');
      }

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }

      if (data.hasOwnProperty('notes')) {
        obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
      }

      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
    }

    return obj;
  }

}
/**
 * @member {String} id
 */


Transaction.prototype['id'] = undefined;
/**
 * @member {String} transaction_id
 */

Transaction.prototype['transaction_id'] = undefined;
/**
 * @member {String} merchant
 */

Transaction.prototype['merchant'] = undefined;
/**
 * @member {Number} amount
 */

Transaction.prototype['amount'] = undefined;
/**
 * @member {String} card_type
 */

Transaction.prototype['card_type'] = undefined;
/**
 * @member {String} last_four
 */

Transaction.prototype['last_four'] = undefined;
/**
 * @member {String} provider
 */

Transaction.prototype['provider'] = undefined;
/**
 * @member {String} driver
 */

Transaction.prototype['driver'] = undefined;
/**
 * @member {Boolean} success
 */

Transaction.prototype['success'] = undefined;
/**
 * @member {Boolean} refund
 */

Transaction.prototype['refund'] = undefined;
/**
 * @member {Boolean} address_matched
 */

Transaction.prototype['address_matched'] = undefined;
/**
 * @member {Boolean} cvc_matched
 */

Transaction.prototype['cvc_matched'] = undefined;
/**
 * @member {Boolean} threed_secure
 */

Transaction.prototype['threed_secure'] = undefined;
/**
 * @member {Boolean} postcode_matched
 */

Transaction.prototype['postcode_matched'] = undefined;
/**
 * @member {String} status
 */

Transaction.prototype['status'] = undefined;
/**
 * @member {String} notes
 */

Transaction.prototype['notes'] = undefined;
/**
 * @member {Date} created_at
 */

Transaction.prototype['created_at'] = undefined;
export default Transaction;