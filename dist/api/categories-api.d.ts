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
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { AttachCategoryChannelsBody } from '../models';
import { AttachCategoryCustomerGroupsBody } from '../models';
import { AttachCategoryProductsBody } from '../models';
import { AttachCategoryRoutesBody } from '../models';
import { CategoryAttachLayoutBody } from '../models';
import { CategoryCollection } from '../models';
import { CategoryResponse } from '../models';
import { CreateCategoryBody } from '../models';
import { Message } from '../models';
import { ReorderCategoryBody } from '../models';
/**
 * CategoriesApi - axios parameter creator
 * @export
 */
export declare const CategoriesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Returns a paginated resource of categories
     * @summary Get Categories
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCategories: (options?: any) => Promise<RequestArgs>;
    /**
     * Returns a single category from a given ID
     * @summary Return a single category
     * @param {string} categoryId
     * @param {string} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCategoriesCategoryId: (categoryId: string, includes?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns categories by a given parent ID.
     * @summary Get categories by parent id
     * @param {string} parentId If omitted will return top level catgories
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCategoriesParentParentId: (parentId: string, include?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Attaches channels to a catagory
     * @summary Attach channels to a category
     * @param {string} categoryId
     * @param {AttachCategoryChannelsBody} [attachCategoryChannelsBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryIdChannels: (categoryId: string, attachCategoryChannelsBody?: AttachCategoryChannelsBody, options?: any) => Promise<RequestArgs>;
    /**
     * Attaches customer groups to a category resource.
     * @summary Attach customer groups to a category
     * @param {string} categoryId
     * @param {AttachCategoryCustomerGroupsBody} [attachCategoryCustomerGroupsBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryIdCustomerGroups: (categoryId: string, attachCategoryCustomerGroupsBody?: AttachCategoryCustomerGroupsBody, options?: any) => Promise<RequestArgs>;
    /**
     * Create or return the current category draft resource.
     * @summary Create or retrieve the current category draft
     * @param {string} categoryId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryIdDrafts: (categoryId: string, include?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Attaches layouts to a category resource
     * @summary Update a category layout
     * @param {string} categoryId
     * @param {CategoryAttachLayoutBody} [categoryAttachLayoutBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryLayouts: (categoryId: string, categoryAttachLayoutBody?: CategoryAttachLayoutBody, options?: any) => Promise<RequestArgs>;
    /**
     * Attaches routes to a category resource.
     * @summary Update a category\'s routes
     * @param {string} categoryId
     * @param {AttachCategoryRoutesBody} [attachCategoryRoutesBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryRoutes: (categoryId: string, attachCategoryRoutesBody?: AttachCategoryRoutesBody, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @summary Reorder a category
     * @param {ReorderCategoryBody} [reorderCategoryBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesReorder: (reorderCategoryBody?: ReorderCategoryBody, options?: any) => Promise<RequestArgs>;
    /**
     * Publishes a category draft
     * @summary Publishes a category draft
     * @param {string} categoryId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishCategoryDraft: (categoryId: string, include?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Update a category using a given ID.
     * @summary Update a category
     * @param {string} categoryId
     * @param {CreateCategoryBody} [createCategoryBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putCategoriesCategoryId: (categoryId: string, createCategoryBody?: CreateCategoryBody, options?: any) => Promise<RequestArgs>;
    /**
     * Attaches products to a category resource.
     * @summary Attach products
     * @param {string} categoryId
     * @param {AttachCategoryProductsBody} [attachCategoryProductsBody] When using \&quot;custom\&quot; sort type, sorting will be based on the position.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putCategoriesCategoryIdProducts: (categoryId: string, attachCategoryProductsBody?: AttachCategoryProductsBody, options?: any) => Promise<RequestArgs>;
};
/**
 * CategoriesApi - functional programming interface
 * @export
 */
export declare const CategoriesApiFp: (configuration?: Configuration) => {
    /**
     * Returns a paginated resource of categories
     * @summary Get Categories
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCategories(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryCollection>>;
    /**
     * Returns a single category from a given ID
     * @summary Return a single category
     * @param {string} categoryId
     * @param {string} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCategoriesCategoryId(categoryId: string, includes?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryResponse>>;
    /**
     * Returns categories by a given parent ID.
     * @summary Get categories by parent id
     * @param {string} parentId If omitted will return top level catgories
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCategoriesParentParentId(parentId: string, include?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryCollection>>;
    /**
     * Attaches channels to a catagory
     * @summary Attach channels to a category
     * @param {string} categoryId
     * @param {AttachCategoryChannelsBody} [attachCategoryChannelsBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryIdChannels(categoryId: string, attachCategoryChannelsBody?: AttachCategoryChannelsBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryResponse>>;
    /**
     * Attaches customer groups to a category resource.
     * @summary Attach customer groups to a category
     * @param {string} categoryId
     * @param {AttachCategoryCustomerGroupsBody} [attachCategoryCustomerGroupsBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryIdCustomerGroups(categoryId: string, attachCategoryCustomerGroupsBody?: AttachCategoryCustomerGroupsBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryResponse>>;
    /**
     * Create or return the current category draft resource.
     * @summary Create or retrieve the current category draft
     * @param {string} categoryId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryIdDrafts(categoryId: string, include?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryResponse>>;
    /**
     * Attaches layouts to a category resource
     * @summary Update a category layout
     * @param {string} categoryId
     * @param {CategoryAttachLayoutBody} [categoryAttachLayoutBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryLayouts(categoryId: string, categoryAttachLayoutBody?: CategoryAttachLayoutBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryResponse>>;
    /**
     * Attaches routes to a category resource.
     * @summary Update a category\'s routes
     * @param {string} categoryId
     * @param {AttachCategoryRoutesBody} [attachCategoryRoutesBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryRoutes(categoryId: string, attachCategoryRoutesBody?: AttachCategoryRoutesBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryResponse>>;
    /**
     *
     * @summary Reorder a category
     * @param {ReorderCategoryBody} [reorderCategoryBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesReorder(reorderCategoryBody?: ReorderCategoryBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Message>>;
    /**
     * Publishes a category draft
     * @summary Publishes a category draft
     * @param {string} categoryId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishCategoryDraft(categoryId: string, include?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryResponse>>;
    /**
     * Update a category using a given ID.
     * @summary Update a category
     * @param {string} categoryId
     * @param {CreateCategoryBody} [createCategoryBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putCategoriesCategoryId(categoryId: string, createCategoryBody?: CreateCategoryBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryResponse>>;
    /**
     * Attaches products to a category resource.
     * @summary Attach products
     * @param {string} categoryId
     * @param {AttachCategoryProductsBody} [attachCategoryProductsBody] When using \&quot;custom\&quot; sort type, sorting will be based on the position.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putCategoriesCategoryIdProducts(categoryId: string, attachCategoryProductsBody?: AttachCategoryProductsBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryResponse>>;
};
/**
 * CategoriesApi - factory interface
 * @export
 */
export declare const CategoriesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Returns a paginated resource of categories
     * @summary Get Categories
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCategories(options?: any): AxiosPromise<CategoryCollection>;
    /**
     * Returns a single category from a given ID
     * @summary Return a single category
     * @param {string} categoryId
     * @param {string} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCategoriesCategoryId(categoryId: string, includes?: string, options?: any): AxiosPromise<CategoryResponse>;
    /**
     * Returns categories by a given parent ID.
     * @summary Get categories by parent id
     * @param {string} parentId If omitted will return top level catgories
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCategoriesParentParentId(parentId: string, include?: string, options?: any): AxiosPromise<CategoryCollection>;
    /**
     * Attaches channels to a catagory
     * @summary Attach channels to a category
     * @param {string} categoryId
     * @param {AttachCategoryChannelsBody} [attachCategoryChannelsBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryIdChannels(categoryId: string, attachCategoryChannelsBody?: AttachCategoryChannelsBody, options?: any): AxiosPromise<CategoryResponse>;
    /**
     * Attaches customer groups to a category resource.
     * @summary Attach customer groups to a category
     * @param {string} categoryId
     * @param {AttachCategoryCustomerGroupsBody} [attachCategoryCustomerGroupsBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryIdCustomerGroups(categoryId: string, attachCategoryCustomerGroupsBody?: AttachCategoryCustomerGroupsBody, options?: any): AxiosPromise<CategoryResponse>;
    /**
     * Create or return the current category draft resource.
     * @summary Create or retrieve the current category draft
     * @param {string} categoryId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryIdDrafts(categoryId: string, include?: string, options?: any): AxiosPromise<CategoryResponse>;
    /**
     * Attaches layouts to a category resource
     * @summary Update a category layout
     * @param {string} categoryId
     * @param {CategoryAttachLayoutBody} [categoryAttachLayoutBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryLayouts(categoryId: string, categoryAttachLayoutBody?: CategoryAttachLayoutBody, options?: any): AxiosPromise<CategoryResponse>;
    /**
     * Attaches routes to a category resource.
     * @summary Update a category\'s routes
     * @param {string} categoryId
     * @param {AttachCategoryRoutesBody} [attachCategoryRoutesBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesCategoryRoutes(categoryId: string, attachCategoryRoutesBody?: AttachCategoryRoutesBody, options?: any): AxiosPromise<CategoryResponse>;
    /**
     *
     * @summary Reorder a category
     * @param {ReorderCategoryBody} [reorderCategoryBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCategoriesReorder(reorderCategoryBody?: ReorderCategoryBody, options?: any): AxiosPromise<Message>;
    /**
     * Publishes a category draft
     * @summary Publishes a category draft
     * @param {string} categoryId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishCategoryDraft(categoryId: string, include?: string, options?: any): AxiosPromise<CategoryResponse>;
    /**
     * Update a category using a given ID.
     * @summary Update a category
     * @param {string} categoryId
     * @param {CreateCategoryBody} [createCategoryBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putCategoriesCategoryId(categoryId: string, createCategoryBody?: CreateCategoryBody, options?: any): AxiosPromise<CategoryResponse>;
    /**
     * Attaches products to a category resource.
     * @summary Attach products
     * @param {string} categoryId
     * @param {AttachCategoryProductsBody} [attachCategoryProductsBody] When using \&quot;custom\&quot; sort type, sorting will be based on the position.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putCategoriesCategoryIdProducts(categoryId: string, attachCategoryProductsBody?: AttachCategoryProductsBody, options?: any): AxiosPromise<CategoryResponse>;
};
/**
 * CategoriesApi - object-oriented interface
 * @export
 * @class CategoriesApi
 * @extends {BaseAPI}
 */
export declare class CategoriesApi extends BaseAPI {
    /**
     * Returns a paginated resource of categories
     * @summary Get Categories
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    getCategories(options?: any): Promise<import("axios").AxiosResponse<CategoryCollection>>;
    /**
     * Returns a single category from a given ID
     * @summary Return a single category
     * @param {string} categoryId
     * @param {string} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    getCategoriesCategoryId(categoryId: string, includes?: string, options?: any): Promise<import("axios").AxiosResponse<CategoryResponse>>;
    /**
     * Returns categories by a given parent ID.
     * @summary Get categories by parent id
     * @param {string} parentId If omitted will return top level catgories
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    getCategoriesParentParentId(parentId: string, include?: string, options?: any): Promise<import("axios").AxiosResponse<CategoryCollection>>;
    /**
     * Attaches channels to a catagory
     * @summary Attach channels to a category
     * @param {string} categoryId
     * @param {AttachCategoryChannelsBody} [attachCategoryChannelsBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    postCategoriesCategoryIdChannels(categoryId: string, attachCategoryChannelsBody?: AttachCategoryChannelsBody, options?: any): Promise<import("axios").AxiosResponse<CategoryResponse>>;
    /**
     * Attaches customer groups to a category resource.
     * @summary Attach customer groups to a category
     * @param {string} categoryId
     * @param {AttachCategoryCustomerGroupsBody} [attachCategoryCustomerGroupsBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    postCategoriesCategoryIdCustomerGroups(categoryId: string, attachCategoryCustomerGroupsBody?: AttachCategoryCustomerGroupsBody, options?: any): Promise<import("axios").AxiosResponse<CategoryResponse>>;
    /**
     * Create or return the current category draft resource.
     * @summary Create or retrieve the current category draft
     * @param {string} categoryId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    postCategoriesCategoryIdDrafts(categoryId: string, include?: string, options?: any): Promise<import("axios").AxiosResponse<CategoryResponse>>;
    /**
     * Attaches layouts to a category resource
     * @summary Update a category layout
     * @param {string} categoryId
     * @param {CategoryAttachLayoutBody} [categoryAttachLayoutBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    postCategoriesCategoryLayouts(categoryId: string, categoryAttachLayoutBody?: CategoryAttachLayoutBody, options?: any): Promise<import("axios").AxiosResponse<CategoryResponse>>;
    /**
     * Attaches routes to a category resource.
     * @summary Update a category\'s routes
     * @param {string} categoryId
     * @param {AttachCategoryRoutesBody} [attachCategoryRoutesBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    postCategoriesCategoryRoutes(categoryId: string, attachCategoryRoutesBody?: AttachCategoryRoutesBody, options?: any): Promise<import("axios").AxiosResponse<CategoryResponse>>;
    /**
     *
     * @summary Reorder a category
     * @param {ReorderCategoryBody} [reorderCategoryBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    postCategoriesReorder(reorderCategoryBody?: ReorderCategoryBody, options?: any): Promise<import("axios").AxiosResponse<Message>>;
    /**
     * Publishes a category draft
     * @summary Publishes a category draft
     * @param {string} categoryId
     * @param {string} [include]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    publishCategoryDraft(categoryId: string, include?: string, options?: any): Promise<import("axios").AxiosResponse<CategoryResponse>>;
    /**
     * Update a category using a given ID.
     * @summary Update a category
     * @param {string} categoryId
     * @param {CreateCategoryBody} [createCategoryBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    putCategoriesCategoryId(categoryId: string, createCategoryBody?: CreateCategoryBody, options?: any): Promise<import("axios").AxiosResponse<CategoryResponse>>;
    /**
     * Attaches products to a category resource.
     * @summary Attach products
     * @param {string} categoryId
     * @param {AttachCategoryProductsBody} [attachCategoryProductsBody] When using \&quot;custom\&quot; sort type, sorting will be based on the position.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    putCategoriesCategoryIdProducts(categoryId: string, attachCategoryProductsBody?: AttachCategoryProductsBody, options?: any): Promise<import("axios").AxiosResponse<CategoryResponse>>;
}
