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
import { AttachCustomerToGroupBody } from '../models';
import { Customer } from '../models';
import { CustomerCollection } from '../models';
import { CustomerFieldsResponse } from '../models';
import { CustomerResponse } from '../models';
import { UpdateCustomerBody } from '../models';
import { UserFieldsResponse } from '../models';
/**
 * CustomersApi - axios parameter creator
 * @export
 */
export declare const CustomersApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Delete the customer resource
     * @param {string} customerId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCustomersCustomerId: (customerId: string, options?: any) => Promise<RequestArgs>;
    /**
     * This endpoint returns any available customer fields which have been defined in the getcandy config.
     * @summary Get custom customer fields
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomerFields: (options?: any) => Promise<RequestArgs>;
    /**
     * Gets a paginated list of all customers
     * @summary Get all customers
     * @param {string} [include] Comma separated include for the resource
     * @param {number} [perPage] How many results per page
     * @param {number} [counts] Comma seperated count include to show relation counts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomers: (include?: string, perPage?: number, counts?: number, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @summary Get the customer resource
     * @param {string} customerId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomersCustomerId: (customerId: string, include?: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @summary Attach a user to a customer record
     * @param {string} customerId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomersCustomerIdUsers: (customerId: string, include?: string, options?: any) => Promise<RequestArgs>;
    /**
     * This endpoint returns any available user fields which have been defined in the getcandy config.
     * @summary Get custom user fields
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsersFields: (options?: any) => Promise<RequestArgs>;
    /**
     * Create a new customer
     * @summary Create a new customer
     * @param {string} [firstname]
     * @param {string} [lastname]
     * @param {number} [contactNumber]
     * @param {number} [altContactNumber]
     * @param {string} [companyName]
     * @param {string} [vatNo]
     * @param {object} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCustomers: (firstname?: string, lastname?: string, contactNumber?: number, altContactNumber?: number, companyName?: string, vatNo?: string, fields?: object, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @summary Attach customer groups to a customer
     * @param {string} customerId
     * @param {AttachCustomerToGroupBody} [attachCustomerToGroupBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCustomersCustomerIdCustomerGroups: (customerId: string, attachCustomerToGroupBody?: AttachCustomerToGroupBody, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @summary Update the customer resource
     * @param {string} customerId
     * @param {UpdateCustomerBody} [updateCustomerBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putCustomersCustomerId: (customerId: string, updateCustomerBody?: UpdateCustomerBody, options?: any) => Promise<RequestArgs>;
};
/**
 * CustomersApi - functional programming interface
 * @export
 */
export declare const CustomersApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Delete the customer resource
     * @param {string} customerId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCustomersCustomerId(customerId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * This endpoint returns any available customer fields which have been defined in the getcandy config.
     * @summary Get custom customer fields
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomerFields(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerFieldsResponse>>;
    /**
     * Gets a paginated list of all customers
     * @summary Get all customers
     * @param {string} [include] Comma separated include for the resource
     * @param {number} [perPage] How many results per page
     * @param {number} [counts] Comma seperated count include to show relation counts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomers(include?: string, perPage?: number, counts?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerCollection>>;
    /**
     *
     * @summary Get the customer resource
     * @param {string} customerId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomersCustomerId(customerId: string, include?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerResponse>>;
    /**
     *
     * @summary Attach a user to a customer record
     * @param {string} customerId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomersCustomerIdUsers(customerId: string, include?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerResponse>>;
    /**
     * This endpoint returns any available user fields which have been defined in the getcandy config.
     * @summary Get custom user fields
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsersFields(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserFieldsResponse>>;
    /**
     * Create a new customer
     * @summary Create a new customer
     * @param {string} [firstname]
     * @param {string} [lastname]
     * @param {number} [contactNumber]
     * @param {number} [altContactNumber]
     * @param {string} [companyName]
     * @param {string} [vatNo]
     * @param {object} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCustomers(firstname?: string, lastname?: string, contactNumber?: number, altContactNumber?: number, companyName?: string, vatNo?: string, fields?: object, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Customer>>;
    /**
     *
     * @summary Attach customer groups to a customer
     * @param {string} customerId
     * @param {AttachCustomerToGroupBody} [attachCustomerToGroupBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCustomersCustomerIdCustomerGroups(customerId: string, attachCustomerToGroupBody?: AttachCustomerToGroupBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerResponse>>;
    /**
     *
     * @summary Update the customer resource
     * @param {string} customerId
     * @param {UpdateCustomerBody} [updateCustomerBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putCustomersCustomerId(customerId: string, updateCustomerBody?: UpdateCustomerBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerResponse>>;
};
/**
 * CustomersApi - factory interface
 * @export
 */
export declare const CustomersApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Delete the customer resource
     * @param {string} customerId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCustomersCustomerId(customerId: string, options?: any): AxiosPromise<void>;
    /**
     * This endpoint returns any available customer fields which have been defined in the getcandy config.
     * @summary Get custom customer fields
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomerFields(options?: any): AxiosPromise<CustomerFieldsResponse>;
    /**
     * Gets a paginated list of all customers
     * @summary Get all customers
     * @param {string} [include] Comma separated include for the resource
     * @param {number} [perPage] How many results per page
     * @param {number} [counts] Comma seperated count include to show relation counts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomers(include?: string, perPage?: number, counts?: number, options?: any): AxiosPromise<CustomerCollection>;
    /**
     *
     * @summary Get the customer resource
     * @param {string} customerId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomersCustomerId(customerId: string, include?: string, options?: any): AxiosPromise<CustomerResponse>;
    /**
     *
     * @summary Attach a user to a customer record
     * @param {string} customerId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomersCustomerIdUsers(customerId: string, include?: string, options?: any): AxiosPromise<CustomerResponse>;
    /**
     * This endpoint returns any available user fields which have been defined in the getcandy config.
     * @summary Get custom user fields
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsersFields(options?: any): AxiosPromise<UserFieldsResponse>;
    /**
     * Create a new customer
     * @summary Create a new customer
     * @param {string} [firstname]
     * @param {string} [lastname]
     * @param {number} [contactNumber]
     * @param {number} [altContactNumber]
     * @param {string} [companyName]
     * @param {string} [vatNo]
     * @param {object} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCustomers(firstname?: string, lastname?: string, contactNumber?: number, altContactNumber?: number, companyName?: string, vatNo?: string, fields?: object, options?: any): AxiosPromise<Customer>;
    /**
     *
     * @summary Attach customer groups to a customer
     * @param {string} customerId
     * @param {AttachCustomerToGroupBody} [attachCustomerToGroupBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCustomersCustomerIdCustomerGroups(customerId: string, attachCustomerToGroupBody?: AttachCustomerToGroupBody, options?: any): AxiosPromise<CustomerResponse>;
    /**
     *
     * @summary Update the customer resource
     * @param {string} customerId
     * @param {UpdateCustomerBody} [updateCustomerBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putCustomersCustomerId(customerId: string, updateCustomerBody?: UpdateCustomerBody, options?: any): AxiosPromise<CustomerResponse>;
};
/**
 * CustomersApi - object-oriented interface
 * @export
 * @class CustomersApi
 * @extends {BaseAPI}
 */
export declare class CustomersApi extends BaseAPI {
    /**
     *
     * @summary Delete the customer resource
     * @param {string} customerId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    deleteCustomersCustomerId(customerId: string, options?: any): Promise<import("axios").AxiosResponse<void>>;
    /**
     * This endpoint returns any available customer fields which have been defined in the getcandy config.
     * @summary Get custom customer fields
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    getCustomerFields(options?: any): Promise<import("axios").AxiosResponse<CustomerFieldsResponse>>;
    /**
     * Gets a paginated list of all customers
     * @summary Get all customers
     * @param {string} [include] Comma separated include for the resource
     * @param {number} [perPage] How many results per page
     * @param {number} [counts] Comma seperated count include to show relation counts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    getCustomers(include?: string, perPage?: number, counts?: number, options?: any): Promise<import("axios").AxiosResponse<CustomerCollection>>;
    /**
     *
     * @summary Get the customer resource
     * @param {string} customerId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    getCustomersCustomerId(customerId: string, include?: string, options?: any): Promise<import("axios").AxiosResponse<CustomerResponse>>;
    /**
     *
     * @summary Attach a user to a customer record
     * @param {string} customerId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    getCustomersCustomerIdUsers(customerId: string, include?: string, options?: any): Promise<import("axios").AxiosResponse<CustomerResponse>>;
    /**
     * This endpoint returns any available user fields which have been defined in the getcandy config.
     * @summary Get custom user fields
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    getUsersFields(options?: any): Promise<import("axios").AxiosResponse<UserFieldsResponse>>;
    /**
     * Create a new customer
     * @summary Create a new customer
     * @param {string} [firstname]
     * @param {string} [lastname]
     * @param {number} [contactNumber]
     * @param {number} [altContactNumber]
     * @param {string} [companyName]
     * @param {string} [vatNo]
     * @param {object} [fields]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    postCustomers(firstname?: string, lastname?: string, contactNumber?: number, altContactNumber?: number, companyName?: string, vatNo?: string, fields?: object, options?: any): Promise<import("axios").AxiosResponse<Customer>>;
    /**
     *
     * @summary Attach customer groups to a customer
     * @param {string} customerId
     * @param {AttachCustomerToGroupBody} [attachCustomerToGroupBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    postCustomersCustomerIdCustomerGroups(customerId: string, attachCustomerToGroupBody?: AttachCustomerToGroupBody, options?: any): Promise<import("axios").AxiosResponse<CustomerResponse>>;
    /**
     *
     * @summary Update the customer resource
     * @param {string} customerId
     * @param {UpdateCustomerBody} [updateCustomerBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    putCustomersCustomerId(customerId: string, updateCustomerBody?: UpdateCustomerBody, options?: any): Promise<import("axios").AxiosResponse<CustomerResponse>>;
}
