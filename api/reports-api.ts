// tslint:disable
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


import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CustomerSpendingResponse } from '../models';
// @ts-ignore
import { InlineResponse2001 } from '../models';
// @ts-ignore
import { InlineResponse2002 } from '../models';
// @ts-ignore
import { InlineResponse2003 } from '../models';
// @ts-ignore
import { InlineResponse2004 } from '../models';
// @ts-ignore
import { InlineResponse2005 } from '../models';
// @ts-ignore
import { InlineResponse2006 } from '../models';
// @ts-ignore
import { InlineResponse4228 } from '../models';
/**
 * ReportsApi - axios parameter creator
 * @export
 */
export const ReportsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get customer group report
         * @summary Get customer group report
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        customerGroupReport: async (from?: string, to?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/reports/customer-groups`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
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
         * Get customer spending report
         * @summary Get customer spending report
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        customerSpendingReport: async (from?: string, to?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/reports/customers/spending`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
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
         * Gets best selling products grouped by month.
         * @summary Get best selling products
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductsBestSellers: async (from?: string, to?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/reports/products/best-sellers`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
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
         * Returns metric (KPI) data for either sales or orders.
         * @summary Get metric data
         * @param {'sales' | 'orders'} subject 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReportsMetricsSubject: async (subject: 'sales' | 'orders', options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'subject' is not null or undefined
            if (subject === null || subject === undefined) {
                throw new RequiredError('subject','Required parameter subject was null or undefined when calling getReportsMetricsSubject.');
            }
            const localVarPath = `/reports/metrics/{subject}`
                .replace(`{${"subject"}}`, encodeURIComponent(String(subject)));
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
         * Returns a report for orders between a given date range
         * @summary Get sales report
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReportsOrders: async (from?: string, to?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/reports/orders`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
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
         * Returns an array of order averages between a given date range.
         * @summary Get order averages
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {'weekly' | 'daily' | 'yearly' | 'monthly'} [mode] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReportsOrdersAverages: async (from?: string, to?: string, mode?: 'weekly' | 'daily' | 'yearly' | 'monthly', options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/reports/orders/averages`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }

            if (mode !== undefined) {
                localVarQueryParameter['mode'] = mode;
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
         * Returns a monthly grouped list of new/returning and total customers.
         * @summary Get Customer Report
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReportsOrdersCustomers: async (from?: string, to?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/reports/orders/customers`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
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
         * This endpoints returns sales report figures.  > Currently this provides data suitable for chartjs.org but this is subject to change and be more decoupled in a future release.
         * @summary Get sales report
         * @param {string} from The from date
         * @param {string} [to] The to date
         * @param {'weekly' | 'monthly' | 'daily'} [mode] The dataset mode
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReportsSales: async (from: string, to?: string, mode?: 'weekly' | 'monthly' | 'daily', options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'from' is not null or undefined
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling getReportsSales.');
            }
            const localVarPath = `/reports/sales`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }

            if (mode !== undefined) {
                localVarQueryParameter['mode'] = mode;
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
         * Get user report
         * @summary Get a report for a user
         * @param {string} userId 
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userReport: async (userId: string, from?: string, to?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling userReport.');
            }
            const localVarPath = `/reports/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
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
    }
};

/**
 * ReportsApi - functional programming interface
 * @export
 */
export const ReportsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Get customer group report
         * @summary Get customer group report
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customerGroupReport(from?: string, to?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await ReportsApiAxiosParamCreator(configuration).customerGroupReport(from, to, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get customer spending report
         * @summary Get customer spending report
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customerSpendingReport(from?: string, to?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerSpendingResponse>> {
            const localVarAxiosArgs = await ReportsApiAxiosParamCreator(configuration).customerSpendingReport(from, to, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets best selling products grouped by month.
         * @summary Get best selling products
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProductsBestSellers(from?: string, to?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2005>> {
            const localVarAxiosArgs = await ReportsApiAxiosParamCreator(configuration).getProductsBestSellers(from, to, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns metric (KPI) data for either sales or orders.
         * @summary Get metric data
         * @param {'sales' | 'orders'} subject 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReportsMetricsSubject(subject: 'sales' | 'orders', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2006>> {
            const localVarAxiosArgs = await ReportsApiAxiosParamCreator(configuration).getReportsMetricsSubject(subject, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a report for orders between a given date range
         * @summary Get sales report
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReportsOrders(from?: string, to?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InlineResponse2002>>> {
            const localVarAxiosArgs = await ReportsApiAxiosParamCreator(configuration).getReportsOrders(from, to, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns an array of order averages between a given date range.
         * @summary Get order averages
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {'weekly' | 'daily' | 'yearly' | 'monthly'} [mode] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReportsOrdersAverages(from?: string, to?: string, mode?: 'weekly' | 'daily' | 'yearly' | 'monthly', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InlineResponse2004>>> {
            const localVarAxiosArgs = await ReportsApiAxiosParamCreator(configuration).getReportsOrdersAverages(from, to, mode, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a monthly grouped list of new/returning and total customers.
         * @summary Get Customer Report
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReportsOrdersCustomers(from?: string, to?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2003>> {
            const localVarAxiosArgs = await ReportsApiAxiosParamCreator(configuration).getReportsOrdersCustomers(from, to, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoints returns sales report figures.  > Currently this provides data suitable for chartjs.org but this is subject to change and be more decoupled in a future release.
         * @summary Get sales report
         * @param {string} from The from date
         * @param {string} [to] The to date
         * @param {'weekly' | 'monthly' | 'daily'} [mode] The dataset mode
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReportsSales(from: string, to?: string, mode?: 'weekly' | 'monthly' | 'daily', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await ReportsApiAxiosParamCreator(configuration).getReportsSales(from, to, mode, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get user report
         * @summary Get a report for a user
         * @param {string} userId 
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userReport(userId: string, from?: string, to?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await ReportsApiAxiosParamCreator(configuration).userReport(userId, from, to, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ReportsApi - factory interface
 * @export
 */
export const ReportsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Get customer group report
         * @summary Get customer group report
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        customerGroupReport(from?: string, to?: string, options?: any): AxiosPromise<object> {
            return ReportsApiFp(configuration).customerGroupReport(from, to, options).then((request) => request(axios, basePath));
        },
        /**
         * Get customer spending report
         * @summary Get customer spending report
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        customerSpendingReport(from?: string, to?: string, options?: any): AxiosPromise<CustomerSpendingResponse> {
            return ReportsApiFp(configuration).customerSpendingReport(from, to, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets best selling products grouped by month.
         * @summary Get best selling products
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductsBestSellers(from?: string, to?: string, options?: any): AxiosPromise<InlineResponse2005> {
            return ReportsApiFp(configuration).getProductsBestSellers(from, to, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns metric (KPI) data for either sales or orders.
         * @summary Get metric data
         * @param {'sales' | 'orders'} subject 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReportsMetricsSubject(subject: 'sales' | 'orders', options?: any): AxiosPromise<InlineResponse2006> {
            return ReportsApiFp(configuration).getReportsMetricsSubject(subject, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a report for orders between a given date range
         * @summary Get sales report
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReportsOrders(from?: string, to?: string, options?: any): AxiosPromise<Array<InlineResponse2002>> {
            return ReportsApiFp(configuration).getReportsOrders(from, to, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns an array of order averages between a given date range.
         * @summary Get order averages
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {'weekly' | 'daily' | 'yearly' | 'monthly'} [mode] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReportsOrdersAverages(from?: string, to?: string, mode?: 'weekly' | 'daily' | 'yearly' | 'monthly', options?: any): AxiosPromise<Array<InlineResponse2004>> {
            return ReportsApiFp(configuration).getReportsOrdersAverages(from, to, mode, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a monthly grouped list of new/returning and total customers.
         * @summary Get Customer Report
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReportsOrdersCustomers(from?: string, to?: string, options?: any): AxiosPromise<InlineResponse2003> {
            return ReportsApiFp(configuration).getReportsOrdersCustomers(from, to, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoints returns sales report figures.  > Currently this provides data suitable for chartjs.org but this is subject to change and be more decoupled in a future release.
         * @summary Get sales report
         * @param {string} from The from date
         * @param {string} [to] The to date
         * @param {'weekly' | 'monthly' | 'daily'} [mode] The dataset mode
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReportsSales(from: string, to?: string, mode?: 'weekly' | 'monthly' | 'daily', options?: any): AxiosPromise<InlineResponse2001> {
            return ReportsApiFp(configuration).getReportsSales(from, to, mode, options).then((request) => request(axios, basePath));
        },
        /**
         * Get user report
         * @summary Get a report for a user
         * @param {string} userId 
         * @param {string} [from] The from date
         * @param {string} [to] The to date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userReport(userId: string, from?: string, to?: string, options?: any): AxiosPromise<object> {
            return ReportsApiFp(configuration).userReport(userId, from, to, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReportsApi - object-oriented interface
 * @export
 * @class ReportsApi
 * @extends {BaseAPI}
 */
export class ReportsApi extends BaseAPI {
    /**
     * Get customer group report
     * @summary Get customer group report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public customerGroupReport(from?: string, to?: string, options?: any) {
        return ReportsApiFp(this.configuration).customerGroupReport(from, to, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get customer spending report
     * @summary Get customer spending report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public customerSpendingReport(from?: string, to?: string, options?: any) {
        return ReportsApiFp(this.configuration).customerSpendingReport(from, to, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets best selling products grouped by month.
     * @summary Get best selling products
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public getProductsBestSellers(from?: string, to?: string, options?: any) {
        return ReportsApiFp(this.configuration).getProductsBestSellers(from, to, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns metric (KPI) data for either sales or orders.
     * @summary Get metric data
     * @param {'sales' | 'orders'} subject 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public getReportsMetricsSubject(subject: 'sales' | 'orders', options?: any) {
        return ReportsApiFp(this.configuration).getReportsMetricsSubject(subject, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a report for orders between a given date range
     * @summary Get sales report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public getReportsOrders(from?: string, to?: string, options?: any) {
        return ReportsApiFp(this.configuration).getReportsOrders(from, to, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns an array of order averages between a given date range.
     * @summary Get order averages
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {'weekly' | 'daily' | 'yearly' | 'monthly'} [mode] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public getReportsOrdersAverages(from?: string, to?: string, mode?: 'weekly' | 'daily' | 'yearly' | 'monthly', options?: any) {
        return ReportsApiFp(this.configuration).getReportsOrdersAverages(from, to, mode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a monthly grouped list of new/returning and total customers.
     * @summary Get Customer Report
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public getReportsOrdersCustomers(from?: string, to?: string, options?: any) {
        return ReportsApiFp(this.configuration).getReportsOrdersCustomers(from, to, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoints returns sales report figures.  > Currently this provides data suitable for chartjs.org but this is subject to change and be more decoupled in a future release.
     * @summary Get sales report
     * @param {string} from The from date
     * @param {string} [to] The to date
     * @param {'weekly' | 'monthly' | 'daily'} [mode] The dataset mode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public getReportsSales(from: string, to?: string, mode?: 'weekly' | 'monthly' | 'daily', options?: any) {
        return ReportsApiFp(this.configuration).getReportsSales(from, to, mode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get user report
     * @summary Get a report for a user
     * @param {string} userId 
     * @param {string} [from] The from date
     * @param {string} [to] The to date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public userReport(userId: string, from?: string, to?: string, options?: any) {
        return ReportsApiFp(this.configuration).userReport(userId, from, to, options).then((request) => request(this.axios, this.basePath));
    }

}
