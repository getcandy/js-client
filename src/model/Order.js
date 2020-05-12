/**
 * GetCandy
 * The GetCandy API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ActivityLogCollection from './ActivityLogCollection';
import Address from './Address';
import BasketResponse from './BasketResponse';
import OrderContactDetails from './OrderContactDetails';
import OrderLineCollection from './OrderLineCollection';
import OrderLineResponse from './OrderLineResponse';
import TransactionCollection from './TransactionCollection';
import UserResponse from './UserResponse';

/**
 * The Order model module.
 * @module model/Order
 * @version 1.0.0
 */
class Order {
    /**
     * Constructs a new <code>Order</code>.
     * @alias module:model/Order
     */
    constructor() { 
        
        Order.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Order} obj Optional instance to populate.
     * @return {module:model/Order} The populated <code>Order</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Order();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('display_id')) {
                obj['display_id'] = ApiClient.convertToType(data['display_id'], 'String');
            }
            if (data.hasOwnProperty('sub_total')) {
                obj['sub_total'] = ApiClient.convertToType(data['sub_total'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('delivery_total')) {
                obj['delivery_total'] = ApiClient.convertToType(data['delivery_total'], 'Number');
            }
            if (data.hasOwnProperty('discount_total')) {
                obj['discount_total'] = ApiClient.convertToType(data['discount_total'], 'Number');
            }
            if (data.hasOwnProperty('tax_total')) {
                obj['tax_total'] = ApiClient.convertToType(data['tax_total'], 'Number');
            }
            if (data.hasOwnProperty('shipping_preference')) {
                obj['shipping_preference'] = ApiClient.convertToType(data['shipping_preference'], 'String');
            }
            if (data.hasOwnProperty('shipping_method')) {
                obj['shipping_method'] = ApiClient.convertToType(data['shipping_method'], 'String');
            }
            if (data.hasOwnProperty('order_total')) {
                obj['order_total'] = ApiClient.convertToType(data['order_total'], 'Number');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('customer_reference')) {
                obj['customer_reference'] = ApiClient.convertToType(data['customer_reference'], 'String');
            }
            if (data.hasOwnProperty('invoice_reference')) {
                obj['invoice_reference'] = ApiClient.convertToType(data['invoice_reference'], 'String');
            }
            if (data.hasOwnProperty('vat_no')) {
                obj['vat_no'] = ApiClient.convertToType(data['vat_no'], 'String');
            }
            if (data.hasOwnProperty('tracking_no')) {
                obj['tracking_no'] = ApiClient.convertToType(data['tracking_no'], 'String');
            }
            if (data.hasOwnProperty('dispatched_at')) {
                obj['dispatched_at'] = ApiClient.convertToType(data['dispatched_at'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('customer_name')) {
                obj['customer_name'] = ApiClient.convertToType(data['customer_name'], 'String');
            }
            if (data.hasOwnProperty('contact_details')) {
                obj['contact_details'] = OrderContactDetails.constructFromObject(data['contact_details']);
            }
            if (data.hasOwnProperty('billing_details')) {
                obj['billing_details'] = Address.constructFromObject(data['billing_details']);
            }
            if (data.hasOwnProperty('shipping_details')) {
                obj['shipping_details'] = Address.constructFromObject(data['shipping_details']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], [Object]);
            }
            if (data.hasOwnProperty('basket')) {
                obj['basket'] = BasketResponse.constructFromObject(data['basket']);
            }
            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], 'String');
            }
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = TransactionCollection.constructFromObject(data['transactions']);
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = OrderLineCollection.constructFromObject(data['lines']);
            }
            if (data.hasOwnProperty('shipping')) {
                obj['shipping'] = OrderLineResponse.constructFromObject(data['shipping']);
            }
            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ActivityLogCollection.constructFromObject(data['logs']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = UserResponse.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Order.prototype['id'] = undefined;

/**
 * @member {String} display_id
 */
Order.prototype['display_id'] = undefined;

/**
 * @member {Number} sub_total
 */
Order.prototype['sub_total'] = undefined;

/**
 * @member {String} type
 */
Order.prototype['type'] = undefined;

/**
 * @member {Number} delivery_total
 */
Order.prototype['delivery_total'] = undefined;

/**
 * @member {Number} discount_total
 */
Order.prototype['discount_total'] = undefined;

/**
 * @member {Number} tax_total
 */
Order.prototype['tax_total'] = undefined;

/**
 * @member {String} shipping_preference
 */
Order.prototype['shipping_preference'] = undefined;

/**
 * @member {String} shipping_method
 */
Order.prototype['shipping_method'] = undefined;

/**
 * @member {Number} order_total
 */
Order.prototype['order_total'] = undefined;

/**
 * @member {String} reference
 */
Order.prototype['reference'] = undefined;

/**
 * @member {String} customer_reference
 */
Order.prototype['customer_reference'] = undefined;

/**
 * @member {String} invoice_reference
 */
Order.prototype['invoice_reference'] = undefined;

/**
 * @member {String} vat_no
 */
Order.prototype['vat_no'] = undefined;

/**
 * @member {String} tracking_no
 */
Order.prototype['tracking_no'] = undefined;

/**
 * @member {String} dispatched_at
 */
Order.prototype['dispatched_at'] = undefined;

/**
 * @member {String} currency
 */
Order.prototype['currency'] = undefined;

/**
 * @member {String} customer_name
 */
Order.prototype['customer_name'] = undefined;

/**
 * @member {module:model/OrderContactDetails} contact_details
 */
Order.prototype['contact_details'] = undefined;

/**
 * @member {module:model/Address} billing_details
 */
Order.prototype['billing_details'] = undefined;

/**
 * @member {module:model/Address} shipping_details
 */
Order.prototype['shipping_details'] = undefined;

/**
 * @member {String} status
 */
Order.prototype['status'] = undefined;

/**
 * @member {String} created_at
 */
Order.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
Order.prototype['updated_at'] = undefined;

/**
 * @member {String} notes
 */
Order.prototype['notes'] = undefined;

/**
 * @member {Array.<Object>} meta
 */
Order.prototype['meta'] = undefined;

/**
 * @member {module:model/BasketResponse} basket
 */
Order.prototype['basket'] = undefined;

/**
 * @member {String} discounts
 */
Order.prototype['discounts'] = undefined;

/**
 * @member {module:model/TransactionCollection} transactions
 */
Order.prototype['transactions'] = undefined;

/**
 * @member {module:model/OrderLineCollection} lines
 */
Order.prototype['lines'] = undefined;

/**
 * @member {module:model/OrderLineResponse} shipping
 */
Order.prototype['shipping'] = undefined;

/**
 * @member {module:model/ActivityLogCollection} logs
 */
Order.prototype['logs'] = undefined;

/**
 * @member {module:model/UserResponse} user
 */
Order.prototype['user'] = undefined;






export default Order;

