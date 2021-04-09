// tslint:disable
/**
 * GetCandy
 * The GetCandy API
 *
 * The version of the OpenAPI document: 0.12.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ApiError } from '../models';
// @ts-ignore
import { AttachCustomerToGroupBody } from '../models';
// @ts-ignore
import { Customer } from '../models';
// @ts-ignore
import { CustomerCollection } from '../models';
// @ts-ignore
import { CustomerFieldsResponse } from '../models';
// @ts-ignore
import { CustomerResponse } from '../models';
// @ts-ignore
import { Unprocessable } from '../models';
// @ts-ignore
import { UpdateCustomerBody } from '../models';
// @ts-ignore
import { UserFieldsResponse } from '../models';
/**
 * CustomersApi - axios parameter creator
 * @export
 */
export const CustomersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete the customer resource
         * @param {string} customerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomersCustomerId: async (customerId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            if (customerId === null || customerId === undefined) {
                throw new RequiredError('customerId','Required parameter customerId was null or undefined when calling deleteCustomersCustomerId.');
            }
            const localVarPath = `/customers/{customerId}`
                .replace(`{${"customerId"}}`, encodeURIComponent(String(customerId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint returns any available customer fields which have been defined in the getcandy config.
         * @summary Get custom customer fields
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerFields: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/customers/fields`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a paginated list of all customers
         * @summary Get all customers
         * @param {string} [include] Comma separated include for the resource
         * @param {number} [perPage] How many results per page
         * @param {number} [counts] Comma seperated count include to show relation counts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomers: async (include?: string, perPage?: number, counts?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/customers`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (include !== undefined) {
                localVarQueryParameter['include'] = include;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (counts !== undefined) {
                localVarQueryParameter['counts'] = counts;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get the customer resource
         * @param {string} customerId 
         * @param {string} [include] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomersCustomerId: async (customerId: string, include?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            if (customerId === null || customerId === undefined) {
                throw new RequiredError('customerId','Required parameter customerId was null or undefined when calling getCustomersCustomerId.');
            }
            const localVarPath = `/customers/{customerId}`
                .replace(`{${"customerId"}}`, encodeURIComponent(String(customerId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (include !== undefined) {
                localVarQueryParameter['include'] = include;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Attach a user to a customer record
         * @param {string} customerId 
         * @param {string} [include] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomersCustomerIdUsers: async (customerId: string, include?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            if (customerId === null || customerId === undefined) {
                throw new RequiredError('customerId','Required parameter customerId was null or undefined when calling getCustomersCustomerIdUsers.');
            }
            const localVarPath = `/customers/{customerId}/users`
                .replace(`{${"customerId"}}`, encodeURIComponent(String(customerId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (include !== undefined) {
                localVarQueryParameter['include'] = include;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint returns any available user fields which have been defined in the getcandy config.
         * @summary Get custom user fields
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersFields: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/fields`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
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
        postCustomers: async (firstname?: string, lastname?: string, contactNumber?: number, altContactNumber?: number, companyName?: string, vatNo?: string, fields?: object, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/customers`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();


            if (firstname !== undefined) { 
                localVarFormParams.append('firstname', firstname as any);
            }
    
            if (lastname !== undefined) { 
                localVarFormParams.append('lastname', lastname as any);
            }
    
            if (contactNumber !== undefined) { 
                localVarFormParams.append('contact_number', contactNumber as any);
            }
    
            if (altContactNumber !== undefined) { 
                localVarFormParams.append('alt_contact_number', altContactNumber as any);
            }
    
            if (companyName !== undefined) { 
                localVarFormParams.append('company_name', companyName as any);
            }
    
            if (vatNo !== undefined) { 
                localVarFormParams.append('vat_no', vatNo as any);
            }
    
            if (fields !== undefined) { 
                localVarFormParams.append('fields', fields as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Attach customer groups to a customer
         * @param {string} customerId 
         * @param {AttachCustomerToGroupBody} [attachCustomerToGroupBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCustomersCustomerIdCustomerGroups: async (customerId: string, attachCustomerToGroupBody?: AttachCustomerToGroupBody, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            if (customerId === null || customerId === undefined) {
                throw new RequiredError('customerId','Required parameter customerId was null or undefined when calling postCustomersCustomerIdCustomerGroups.');
            }
            const localVarPath = `/customers/{customerId}/customer-groups`
                .replace(`{${"customerId"}}`, encodeURIComponent(String(customerId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof attachCustomerToGroupBody !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(attachCustomerToGroupBody !== undefined ? attachCustomerToGroupBody : {}) : (attachCustomerToGroupBody || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update the customer resource
         * @param {string} customerId 
         * @param {UpdateCustomerBody} [updateCustomerBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putCustomersCustomerId: async (customerId: string, updateCustomerBody?: UpdateCustomerBody, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            if (customerId === null || customerId === undefined) {
                throw new RequiredError('customerId','Required parameter customerId was null or undefined when calling putCustomersCustomerId.');
            }
            const localVarPath = `/customers/{customerId}`
                .replace(`{${"customerId"}}`, encodeURIComponent(String(customerId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof updateCustomerBody !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(updateCustomerBody !== undefined ? updateCustomerBody : {}) : (updateCustomerBody || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CustomersApi - functional programming interface
 * @export
 */
export const CustomersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete the customer resource
         * @param {string} customerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCustomersCustomerId(customerId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CustomersApiAxiosParamCreator(configuration).deleteCustomersCustomerId(customerId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint returns any available customer fields which have been defined in the getcandy config.
         * @summary Get custom customer fields
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomerFields(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerFieldsResponse>> {
            const localVarAxiosArgs = await CustomersApiAxiosParamCreator(configuration).getCustomerFields(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets a paginated list of all customers
         * @summary Get all customers
         * @param {string} [include] Comma separated include for the resource
         * @param {number} [perPage] How many results per page
         * @param {number} [counts] Comma seperated count include to show relation counts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomers(include?: string, perPage?: number, counts?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerCollection>> {
            const localVarAxiosArgs = await CustomersApiAxiosParamCreator(configuration).getCustomers(include, perPage, counts, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get the customer resource
         * @param {string} customerId 
         * @param {string} [include] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomersCustomerId(customerId: string, include?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerResponse>> {
            const localVarAxiosArgs = await CustomersApiAxiosParamCreator(configuration).getCustomersCustomerId(customerId, include, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Attach a user to a customer record
         * @param {string} customerId 
         * @param {string} [include] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomersCustomerIdUsers(customerId: string, include?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerResponse>> {
            const localVarAxiosArgs = await CustomersApiAxiosParamCreator(configuration).getCustomersCustomerIdUsers(customerId, include, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint returns any available user fields which have been defined in the getcandy config.
         * @summary Get custom user fields
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsersFields(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserFieldsResponse>> {
            const localVarAxiosArgs = await CustomersApiAxiosParamCreator(configuration).getUsersFields(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
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
        async postCustomers(firstname?: string, lastname?: string, contactNumber?: number, altContactNumber?: number, companyName?: string, vatNo?: string, fields?: object, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Customer>> {
            const localVarAxiosArgs = await CustomersApiAxiosParamCreator(configuration).postCustomers(firstname, lastname, contactNumber, altContactNumber, companyName, vatNo, fields, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Attach customer groups to a customer
         * @param {string} customerId 
         * @param {AttachCustomerToGroupBody} [attachCustomerToGroupBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCustomersCustomerIdCustomerGroups(customerId: string, attachCustomerToGroupBody?: AttachCustomerToGroupBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerResponse>> {
            const localVarAxiosArgs = await CustomersApiAxiosParamCreator(configuration).postCustomersCustomerIdCustomerGroups(customerId, attachCustomerToGroupBody, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update the customer resource
         * @param {string} customerId 
         * @param {UpdateCustomerBody} [updateCustomerBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putCustomersCustomerId(customerId: string, updateCustomerBody?: UpdateCustomerBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerResponse>> {
            const localVarAxiosArgs = await CustomersApiAxiosParamCreator(configuration).putCustomersCustomerId(customerId, updateCustomerBody, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CustomersApi - factory interface
 * @export
 */
export const CustomersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Delete the customer resource
         * @param {string} customerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomersCustomerId(customerId: string, options?: any): AxiosPromise<void> {
            return CustomersApiFp(configuration).deleteCustomersCustomerId(customerId, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint returns any available customer fields which have been defined in the getcandy config.
         * @summary Get custom customer fields
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerFields(options?: any): AxiosPromise<CustomerFieldsResponse> {
            return CustomersApiFp(configuration).getCustomerFields(options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a paginated list of all customers
         * @summary Get all customers
         * @param {string} [include] Comma separated include for the resource
         * @param {number} [perPage] How many results per page
         * @param {number} [counts] Comma seperated count include to show relation counts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomers(include?: string, perPage?: number, counts?: number, options?: any): AxiosPromise<CustomerCollection> {
            return CustomersApiFp(configuration).getCustomers(include, perPage, counts, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the customer resource
         * @param {string} customerId 
         * @param {string} [include] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomersCustomerId(customerId: string, include?: string, options?: any): AxiosPromise<CustomerResponse> {
            return CustomersApiFp(configuration).getCustomersCustomerId(customerId, include, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Attach a user to a customer record
         * @param {string} customerId 
         * @param {string} [include] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomersCustomerIdUsers(customerId: string, include?: string, options?: any): AxiosPromise<CustomerResponse> {
            return CustomersApiFp(configuration).getCustomersCustomerIdUsers(customerId, include, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint returns any available user fields which have been defined in the getcandy config.
         * @summary Get custom user fields
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersFields(options?: any): AxiosPromise<UserFieldsResponse> {
            return CustomersApiFp(configuration).getUsersFields(options).then((request) => request(axios, basePath));
        },
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
        postCustomers(firstname?: string, lastname?: string, contactNumber?: number, altContactNumber?: number, companyName?: string, vatNo?: string, fields?: object, options?: any): AxiosPromise<Customer> {
            return CustomersApiFp(configuration).postCustomers(firstname, lastname, contactNumber, altContactNumber, companyName, vatNo, fields, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Attach customer groups to a customer
         * @param {string} customerId 
         * @param {AttachCustomerToGroupBody} [attachCustomerToGroupBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCustomersCustomerIdCustomerGroups(customerId: string, attachCustomerToGroupBody?: AttachCustomerToGroupBody, options?: any): AxiosPromise<CustomerResponse> {
            return CustomersApiFp(configuration).postCustomersCustomerIdCustomerGroups(customerId, attachCustomerToGroupBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update the customer resource
         * @param {string} customerId 
         * @param {UpdateCustomerBody} [updateCustomerBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putCustomersCustomerId(customerId: string, updateCustomerBody?: UpdateCustomerBody, options?: any): AxiosPromise<CustomerResponse> {
            return CustomersApiFp(configuration).putCustomersCustomerId(customerId, updateCustomerBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CustomersApi - object-oriented interface
 * @export
 * @class CustomersApi
 * @extends {BaseAPI}
 */
export class CustomersApi extends BaseAPI {
    /**
     * 
     * @summary Delete the customer resource
     * @param {string} customerId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public deleteCustomersCustomerId(customerId: string, options?: any) {
        return CustomersApiFp(this.configuration).deleteCustomersCustomerId(customerId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint returns any available customer fields which have been defined in the getcandy config.
     * @summary Get custom customer fields
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public getCustomerFields(options?: any) {
        return CustomersApiFp(this.configuration).getCustomerFields(options).then((request) => request(this.axios, this.basePath));
    }

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
    public getCustomers(include?: string, perPage?: number, counts?: number, options?: any) {
        return CustomersApiFp(this.configuration).getCustomers(include, perPage, counts, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the customer resource
     * @param {string} customerId 
     * @param {string} [include] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public getCustomersCustomerId(customerId: string, include?: string, options?: any) {
        return CustomersApiFp(this.configuration).getCustomersCustomerId(customerId, include, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Attach a user to a customer record
     * @param {string} customerId 
     * @param {string} [include] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public getCustomersCustomerIdUsers(customerId: string, include?: string, options?: any) {
        return CustomersApiFp(this.configuration).getCustomersCustomerIdUsers(customerId, include, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint returns any available user fields which have been defined in the getcandy config.
     * @summary Get custom user fields
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public getUsersFields(options?: any) {
        return CustomersApiFp(this.configuration).getUsersFields(options).then((request) => request(this.axios, this.basePath));
    }

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
    public postCustomers(firstname?: string, lastname?: string, contactNumber?: number, altContactNumber?: number, companyName?: string, vatNo?: string, fields?: object, options?: any) {
        return CustomersApiFp(this.configuration).postCustomers(firstname, lastname, contactNumber, altContactNumber, companyName, vatNo, fields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Attach customer groups to a customer
     * @param {string} customerId 
     * @param {AttachCustomerToGroupBody} [attachCustomerToGroupBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public postCustomersCustomerIdCustomerGroups(customerId: string, attachCustomerToGroupBody?: AttachCustomerToGroupBody, options?: any) {
        return CustomersApiFp(this.configuration).postCustomersCustomerIdCustomerGroups(customerId, attachCustomerToGroupBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update the customer resource
     * @param {string} customerId 
     * @param {UpdateCustomerBody} [updateCustomerBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public putCustomersCustomerId(customerId: string, updateCustomerBody?: UpdateCustomerBody, options?: any) {
        return CustomersApiFp(this.configuration).putCustomersCustomerId(customerId, updateCustomerBody, options).then((request) => request(this.axios, this.basePath));
    }

}
