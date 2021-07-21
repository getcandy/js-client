// tslint:disable
/**
 * GetCandy
 * The GetCandy API
 *
 * The version of the OpenAPI document: 0.12.1
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
import { AddressResponse } from '../models';
// @ts-ignore
import { UpdateAddressBody } from '../models';
/**
 * AddressesApi - axios parameter creator
 * @export
 */
export const AddressesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete an existing address
         * @summary
         * @param {string} addressId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAddressesAddressId: async (addressId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'addressId' is not null or undefined
            if (addressId === null || addressId === undefined) {
                throw new RequiredError('addressId','Required parameter addressId was null or undefined when calling deleteAddressesAddressId.');
            }
            const localVarPath = `/addresses/{addressId}`
                .replace(`{${"addressId"}}`, encodeURIComponent(String(addressId)));
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
         * This endpoint allows you to create a new address
         * @summary Create new address
         * @param {string} firstname
         * @param {string} lastname
         * @param {string} address
         * @param {string} city
         * @param {string} state
         * @param {string} postalCode
         * @param {string} countryId
         * @param {string} [salutation]
         * @param {string} [companyName]
         * @param {string} [email]
         * @param {string} [phone]
         * @param {string} [addressTwo]
         * @param {string} [addressThree]
         * @param {boolean} [shipping]
         * @param {string} [userId]
         * @param {string} [customerId]
         * @param {boolean} [billing]
         * @param {boolean} [_default]
         * @param {string} [lastUsedAt]
         * @param {string} [deliveryInstructions]
         * @param {Array<object>} [meta]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAddresses: async (firstname: string, lastname: string, address: string, city: string, state: string, postalCode: string, countryId: string, salutation?: string, companyName?: string, email?: string, phone?: string, addressTwo?: string, addressThree?: string, shipping?: boolean, userId?: string, customerId?: string, billing?: boolean, _default?: boolean, lastUsedAt?: string, deliveryInstructions?: string, meta?: Array<object>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'firstname' is not null or undefined
            if (firstname === null || firstname === undefined) {
                throw new RequiredError('firstname','Required parameter firstname was null or undefined when calling postAddresses.');
            }
            // verify required parameter 'lastname' is not null or undefined
            if (lastname === null || lastname === undefined) {
                throw new RequiredError('lastname','Required parameter lastname was null or undefined when calling postAddresses.');
            }
            // verify required parameter 'address' is not null or undefined
            if (address === null || address === undefined) {
                throw new RequiredError('address','Required parameter address was null or undefined when calling postAddresses.');
            }
            // verify required parameter 'city' is not null or undefined
            if (city === null || city === undefined) {
                throw new RequiredError('city','Required parameter city was null or undefined when calling postAddresses.');
            }
            // verify required parameter 'state' is not null or undefined
            if (state === null || state === undefined) {
                throw new RequiredError('state','Required parameter state was null or undefined when calling postAddresses.');
            }
            // verify required parameter 'postalCode' is not null or undefined
            if (postalCode === null || postalCode === undefined) {
                throw new RequiredError('postalCode','Required parameter postalCode was null or undefined when calling postAddresses.');
            }
            // verify required parameter 'countryId' is not null or undefined
            if (countryId === null || countryId === undefined) {
                throw new RequiredError('countryId','Required parameter countryId was null or undefined when calling postAddresses.');
            }
            const localVarPath = `/addresses`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();


            if (salutation !== undefined) {
                localVarFormParams.append('salutation', salutation as any);
            }

            if (firstname !== undefined) {
                localVarFormParams.append('firstname', firstname as any);
            }

            if (lastname !== undefined) {
                localVarFormParams.append('lastname', lastname as any);
            }

            if (companyName !== undefined) {
                localVarFormParams.append('company_name', companyName as any);
            }

            if (email !== undefined) {
                localVarFormParams.append('email', email as any);
            }

            if (phone !== undefined) {
                localVarFormParams.append('phone', phone as any);
            }

            if (address !== undefined) {
                localVarFormParams.append('address', address as any);
            }

            if (addressTwo !== undefined) {
                localVarFormParams.append('address_two', addressTwo as any);
            }

            if (addressThree !== undefined) {
                localVarFormParams.append('address_three', addressThree as any);
            }

            if (city !== undefined) {
                localVarFormParams.append('city', city as any);
            }

            if (state !== undefined) {
                localVarFormParams.append('state', state as any);
            }

            if (postalCode !== undefined) {
                localVarFormParams.append('postal_code', postalCode as any);
            }

            if (countryId !== undefined) {
                localVarFormParams.append('country_id', countryId as any);
            }

            if (shipping !== undefined) {
                localVarFormParams.append('shipping', shipping as any);
            }

            if (userId !== undefined) {
                localVarFormParams.append('user_id', userId as any);
            }

            if (customerId !== undefined) {
                localVarFormParams.append('customer_id', customerId as any);
            }

            if (billing !== undefined) {
                localVarFormParams.append('billing', billing as any);
            }

            if (_default !== undefined) {
                localVarFormParams.append('default', _default as any);
            }

            if (lastUsedAt !== undefined) {
                localVarFormParams.append('last_used_at', lastUsedAt as any);
            }

            if (deliveryInstructions !== undefined) {
                localVarFormParams.append('delivery_instructions', deliveryInstructions as any);
            }
                if (meta) {

                localVarFormParams.append('meta', meta.join(COLLECTION_FORMATS.csv));
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
         * This endpoint allows you to update an existing address
         * @summary Update existing address
         * @param {string} addressId
         * @param {UpdateAddressBody} [updateAddressBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putAddresses: async (addressId: string, updateAddressBody?: UpdateAddressBody, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'addressId' is not null or undefined
            if (addressId === null || addressId === undefined) {
                throw new RequiredError('addressId','Required parameter addressId was null or undefined when calling putAddresses.');
            }
            const localVarPath = `/addresses/{addressId}`
                .replace(`{${"addressId"}}`, encodeURIComponent(String(addressId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarHeaderParameter['Content-Type'] = 'application/javascript';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof updateAddressBody !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(updateAddressBody !== undefined ? updateAddressBody : {}) : (updateAddressBody || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AddressesApi - functional programming interface
 * @export
 */
export const AddressesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Delete an existing address
         * @summary
         * @param {string} addressId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAddressesAddressId(addressId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AddressesApiAxiosParamCreator(configuration).deleteAddressesAddressId(addressId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint allows you to create a new address
         * @summary Create new address
         * @param {string} firstname
         * @param {string} lastname
         * @param {string} address
         * @param {string} city
         * @param {string} state
         * @param {string} postalCode
         * @param {string} countryId
         * @param {string} [salutation]
         * @param {string} [companyName]
         * @param {string} [email]
         * @param {string} [phone]
         * @param {string} [addressTwo]
         * @param {string} [addressThree]
         * @param {boolean} [shipping]
         * @param {string} [userId]
         * @param {string} [customerId]
         * @param {boolean} [billing]
         * @param {boolean} [_default]
         * @param {string} [lastUsedAt]
         * @param {string} [deliveryInstructions]
         * @param {Array<object>} [meta]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postAddresses(firstname: string, lastname: string, address: string, city: string, state: string, postalCode: string, countryId: string, salutation?: string, companyName?: string, email?: string, phone?: string, addressTwo?: string, addressThree?: string, shipping?: boolean, userId?: string, customerId?: string, billing?: boolean, _default?: boolean, lastUsedAt?: string, deliveryInstructions?: string, meta?: Array<object>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AddressResponse>> {
            const localVarAxiosArgs = await AddressesApiAxiosParamCreator(configuration).postAddresses(firstname, lastname, address, city, state, postalCode, countryId, salutation, companyName, email, phone, addressTwo, addressThree, shipping, userId, customerId, billing, _default, lastUsedAt, deliveryInstructions, meta, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint allows you to update an existing address
         * @summary Update existing address
         * @param {string} addressId
         * @param {UpdateAddressBody} [updateAddressBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putAddresses(addressId: string, updateAddressBody?: UpdateAddressBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AddressResponse>> {
            const localVarAxiosArgs = await AddressesApiAxiosParamCreator(configuration).putAddresses(addressId, updateAddressBody, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AddressesApi - factory interface
 * @export
 */
export const AddressesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Delete an existing address
         * @summary
         * @param {string} addressId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAddressesAddressId(addressId: string, options?: any): AxiosPromise<void> {
            return AddressesApiFp(configuration).deleteAddressesAddressId(addressId, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you to create a new address
         * @summary Create new address
         * @param {string} firstname
         * @param {string} lastname
         * @param {string} address
         * @param {string} city
         * @param {string} state
         * @param {string} postalCode
         * @param {string} countryId
         * @param {string} [salutation]
         * @param {string} [companyName]
         * @param {string} [email]
         * @param {string} [phone]
         * @param {string} [addressTwo]
         * @param {string} [addressThree]
         * @param {boolean} [shipping]
         * @param {string} [userId]
         * @param {string} [customerId]
         * @param {boolean} [billing]
         * @param {boolean} [_default]
         * @param {string} [lastUsedAt]
         * @param {string} [deliveryInstructions]
         * @param {Array<object>} [meta]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAddresses(firstname: string, lastname: string, address: string, city: string, state: string, postalCode: string, countryId: string, salutation?: string, companyName?: string, email?: string, phone?: string, addressTwo?: string, addressThree?: string, shipping?: boolean, userId?: string, customerId?: string, billing?: boolean, _default?: boolean, lastUsedAt?: string, deliveryInstructions?: string, meta?: Array<object>, options?: any): AxiosPromise<AddressResponse> {
            return AddressesApiFp(configuration).postAddresses(firstname, lastname, address, city, state, postalCode, countryId, salutation, companyName, email, phone, addressTwo, addressThree, shipping, userId, customerId, billing, _default, lastUsedAt, deliveryInstructions, meta, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you to update an existing address
         * @summary Update existing address
         * @param {string} addressId
         * @param {UpdateAddressBody} [updateAddressBody]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putAddresses(addressId: string, updateAddressBody?: UpdateAddressBody, options?: any): AxiosPromise<AddressResponse> {
            return AddressesApiFp(configuration).putAddresses(addressId, updateAddressBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AddressesApi - object-oriented interface
 * @export
 * @class AddressesApi
 * @extends {BaseAPI}
 */
export class AddressesApi extends BaseAPI {
    /**
     * Delete an existing address
     * @summary
     * @param {string} addressId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public deleteAddressesAddressId(addressId: string, options?: any) {
        return AddressesApiFp(this.configuration).deleteAddressesAddressId(addressId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you to create a new address
     * @summary Create new address
     * @param {string} firstname
     * @param {string} lastname
     * @param {string} address
     * @param {string} city
     * @param {string} state
     * @param {string} postalCode
     * @param {string} countryId
     * @param {string} [salutation]
     * @param {string} [companyName]
     * @param {string} [email]
     * @param {string} [phone]
     * @param {string} [addressTwo]
     * @param {string} [addressThree]
     * @param {boolean} [shipping]
     * @param {string} [userId]
     * @param {string} [customerId]
     * @param {boolean} [billing]
     * @param {boolean} [_default]
     * @param {string} [lastUsedAt]
     * @param {string} [deliveryInstructions]
     * @param {Array<object>} [meta]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public postAddresses(firstname: string, lastname: string, address: string, city: string, state: string, postalCode: string, countryId: string, salutation?: string, companyName?: string, email?: string, phone?: string, addressTwo?: string, addressThree?: string, shipping?: boolean, userId?: string, customerId?: string, billing?: boolean, _default?: boolean, lastUsedAt?: string, deliveryInstructions?: string, meta?: Array<object>, options?: any) {
        return AddressesApiFp(this.configuration).postAddresses(firstname, lastname, address, city, state, postalCode, countryId, salutation, companyName, email, phone, addressTwo, addressThree, shipping, userId, customerId, billing, _default, lastUsedAt, deliveryInstructions, meta, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you to update an existing address
     * @summary Update existing address
     * @param {string} addressId
     * @param {UpdateAddressBody} [updateAddressBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public putAddresses(addressId: string, updateAddressBody?: UpdateAddressBody, options?: any) {
        return AddressesApiFp(this.configuration).putAddresses(addressId, updateAddressBody, options).then((request) => request(this.axios, this.basePath));
    }

}
