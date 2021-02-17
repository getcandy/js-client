/**
 * GetCandy
 * The GetCandy API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@getcandy.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { InlineObject14 } from '../models';
import { OrderResponse } from '../models';
import { PaymentProviderResponse } from '../models';
import { PaymentTypeCollection } from '../models';
import { TransactionResponse } from '../models';
/**
 * PaymentsApi - axios parameter creator
 * @export
 */
export declare const PaymentsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Gets a payment provider from the given handle
     * @summary Get Payment Provider by it\'s handle
     * @param {string} handle
     * @param {string} [orderId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentProvider: (handle: string, orderId?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Gets the default, configured payment provider.
     * @summary Get Payment Provider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentsProvider: (options?: any) => Promise<RequestArgs>;
    /**
     * Returns a list of available Payment Types in the system
     * @summary Payment types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentsTypes: (options?: any) => Promise<RequestArgs>;
    /**
     * Validate a ThreeD secure request and process the transaaction, if your payment provider supports it.
     * @summary Threed Secure Payment
     * @param {InlineObject14} [inlineObject14]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postPayments3dSecure: (inlineObject14?: InlineObject14, options?: any) => Promise<RequestArgs>;
    /**
     * Refund a transaction
     * @summary Refund a payment
     * @param {string} transactionId
     * @param {number} [amount] If left blank, the full amount will be refunded
     * @param {string} [notes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postPaymentsIdRefund: (transactionId: string, amount?: number, notes?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Voids a payment in the system.
     * @summary Void a payment
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postPaymentsTransactionIdVoid: (transactionId: string, options?: any) => Promise<RequestArgs>;
};
/**
 * PaymentsApi - functional programming interface
 * @export
 */
export declare const PaymentsApiFp: (configuration?: Configuration) => {
    /**
     * Gets a payment provider from the given handle
     * @summary Get Payment Provider by it\'s handle
     * @param {string} handle
     * @param {string} [orderId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentProvider(handle: string, orderId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentProviderResponse>>;
    /**
     * Gets the default, configured payment provider.
     * @summary Get Payment Provider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentsProvider(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentProviderResponse>>;
    /**
     * Returns a list of available Payment Types in the system
     * @summary Payment types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentsTypes(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentTypeCollection>>;
    /**
     * Validate a ThreeD secure request and process the transaaction, if your payment provider supports it.
     * @summary Threed Secure Payment
     * @param {InlineObject14} [inlineObject14]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postPayments3dSecure(inlineObject14?: InlineObject14, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrderResponse>>;
    /**
     * Refund a transaction
     * @summary Refund a payment
     * @param {string} transactionId
     * @param {number} [amount] If left blank, the full amount will be refunded
     * @param {string} [notes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postPaymentsIdRefund(transactionId: string, amount?: number, notes?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionResponse>>;
    /**
     * Voids a payment in the system.
     * @summary Void a payment
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postPaymentsTransactionIdVoid(transactionId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionResponse>>;
};
/**
 * PaymentsApi - factory interface
 * @export
 */
export declare const PaymentsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Gets a payment provider from the given handle
     * @summary Get Payment Provider by it\'s handle
     * @param {string} handle
     * @param {string} [orderId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentProvider(handle: string, orderId?: string, options?: any): AxiosPromise<PaymentProviderResponse>;
    /**
     * Gets the default, configured payment provider.
     * @summary Get Payment Provider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentsProvider(options?: any): AxiosPromise<PaymentProviderResponse>;
    /**
     * Returns a list of available Payment Types in the system
     * @summary Payment types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentsTypes(options?: any): AxiosPromise<PaymentTypeCollection>;
    /**
     * Validate a ThreeD secure request and process the transaaction, if your payment provider supports it.
     * @summary Threed Secure Payment
     * @param {InlineObject14} [inlineObject14]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postPayments3dSecure(inlineObject14?: InlineObject14, options?: any): AxiosPromise<OrderResponse>;
    /**
     * Refund a transaction
     * @summary Refund a payment
     * @param {string} transactionId
     * @param {number} [amount] If left blank, the full amount will be refunded
     * @param {string} [notes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postPaymentsIdRefund(transactionId: string, amount?: number, notes?: string, options?: any): AxiosPromise<TransactionResponse>;
    /**
     * Voids a payment in the system.
     * @summary Void a payment
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postPaymentsTransactionIdVoid(transactionId: string, options?: any): AxiosPromise<TransactionResponse>;
};
/**
 * PaymentsApi - object-oriented interface
 * @export
 * @class PaymentsApi
 * @extends {BaseAPI}
 */
export declare class PaymentsApi extends BaseAPI {
    /**
     * Gets a payment provider from the given handle
     * @summary Get Payment Provider by it\'s handle
     * @param {string} handle
     * @param {string} [orderId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentsApi
     */
    getPaymentProvider(handle: string, orderId?: string, options?: any): Promise<import("axios").AxiosResponse<PaymentProviderResponse>>;
    /**
     * Gets the default, configured payment provider.
     * @summary Get Payment Provider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentsApi
     */
    getPaymentsProvider(options?: any): Promise<import("axios").AxiosResponse<PaymentProviderResponse>>;
    /**
     * Returns a list of available Payment Types in the system
     * @summary Payment types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentsApi
     */
    getPaymentsTypes(options?: any): Promise<import("axios").AxiosResponse<PaymentTypeCollection>>;
    /**
     * Validate a ThreeD secure request and process the transaaction, if your payment provider supports it.
     * @summary Threed Secure Payment
     * @param {InlineObject14} [inlineObject14]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentsApi
     */
    postPayments3dSecure(inlineObject14?: InlineObject14, options?: any): Promise<import("axios").AxiosResponse<OrderResponse>>;
    /**
     * Refund a transaction
     * @summary Refund a payment
     * @param {string} transactionId
     * @param {number} [amount] If left blank, the full amount will be refunded
     * @param {string} [notes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentsApi
     */
    postPaymentsIdRefund(transactionId: string, amount?: number, notes?: string, options?: any): Promise<import("axios").AxiosResponse<TransactionResponse>>;
    /**
     * Voids a payment in the system.
     * @summary Void a payment
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentsApi
     */
    postPaymentsTransactionIdVoid(transactionId: string, options?: any): Promise<import("axios").AxiosResponse<TransactionResponse>>;
}
