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
import AssetCollection from './AssetCollection';
import AssetResponse from './AssetResponse';
import AttributeCollection from './AttributeCollection';
import AttributeData from './AttributeData';
import CategoryCollection from './CategoryCollection';
import ChannelCollection from './ChannelCollection';
import CollectionCollection from './CollectionCollection';
import CustomerGroupCollection from './CustomerGroupCollection';
import DiscountCollection from './DiscountCollection';
import LayoutResponse from './LayoutResponse';
import LocalisedAttributeData from './LocalisedAttributeData';
import ProductAllOf from './ProductAllOf';
import ProductAssociationCollection from './ProductAssociationCollection';
import ProductFamilyResponse from './ProductFamilyResponse';
import ProductResponse from './ProductResponse';
import ProductVariantCollection from './ProductVariantCollection';
import ProductVariantResponse from './ProductVariantResponse';
import RouteCollection from './RouteCollection';
import VersionCollection from './VersionCollection';

/**
 * The Product model module.
 * @module model/Product
 * @version 0.9.0
 */
class Product {
    /**
     * Constructs a new <code>Product</code>.
     * @alias module:model/Product
     * @implements module:model/ProductAllOf
     * @implements module:model/LocalisedAttributeData
     * @implements module:model/AttributeData
     */
    constructor() { 
        ProductAllOf.initialize(this);LocalisedAttributeData.initialize(this);AttributeData.initialize(this);
        Product.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Product} obj Optional instance to populate.
     * @return {module:model/Product} The populated <code>Product</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Product();
            ProductAllOf.constructFromObject(data, obj);
            LocalisedAttributeData.constructFromObject(data, obj);
            AttributeData.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('drafted_at')) {
                obj['drafted_at'] = ApiClient.convertToType(data['drafted_at'], 'Date');
            }
            if (data.hasOwnProperty('option_data')) {
                obj['option_data'] = ApiClient.convertToType(data['option_data'], Object);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('family')) {
                obj['family'] = ProductFamilyResponse.constructFromObject(data['family']);
            }
            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ProductResponse.constructFromObject(data['draft']);
            }
            if (data.hasOwnProperty('published_parent')) {
                obj['published_parent'] = ProductResponse.constructFromObject(data['published_parent']);
            }
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = AssetCollection.constructFromObject(data['assets']);
            }
            if (data.hasOwnProperty('routes')) {
                obj['routes'] = RouteCollection.constructFromObject(data['routes']);
            }
            if (data.hasOwnProperty('channels')) {
                obj['channels'] = ChannelCollection.constructFromObject(data['channels']);
            }
            if (data.hasOwnProperty('first_variant')) {
                obj['first_variant'] = ProductVariantResponse.constructFromObject(data['first_variant']);
            }
            if (data.hasOwnProperty('primary_asset')) {
                obj['primary_asset'] = AssetResponse.constructFromObject(data['primary_asset']);
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = CategoryCollection.constructFromObject(data['categories']);
            }
            if (data.hasOwnProperty('variants')) {
                obj['variants'] = ProductVariantCollection.constructFromObject(data['variants']);
            }
            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = DiscountCollection.constructFromObject(data['discounts']);
            }
            if (data.hasOwnProperty('collections')) {
                obj['collections'] = CollectionCollection.constructFromObject(data['collections']);
            }
            if (data.hasOwnProperty('associations')) {
                obj['associations'] = ProductAssociationCollection.constructFromObject(data['associations']);
            }
            if (data.hasOwnProperty('versions')) {
                obj['versions'] = VersionCollection.constructFromObject(data['versions']);
            }
            if (data.hasOwnProperty('customer_groups')) {
                obj['customer_groups'] = CustomerGroupCollection.constructFromObject(data['customer_groups']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = AttributeCollection.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('layout')) {
                obj['layout'] = LayoutResponse.constructFromObject(data['layout']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('attribute_data')) {
                obj['attribute_data'] = ApiClient.convertToType(data['attribute_data'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Product.prototype['id'] = undefined;

/**
 * If this product is a draft, this will be populated
 * @member {Date} drafted_at
 */
Product.prototype['drafted_at'] = undefined;

/**
 * Displays any variant option data
 * @member {Object} option_data
 */
Product.prototype['option_data'] = undefined;

/**
 * @member {String} created_at
 */
Product.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
Product.prototype['updated_at'] = undefined;

/**
 * @member {module:model/ProductFamilyResponse} family
 */
Product.prototype['family'] = undefined;

/**
 * @member {module:model/ProductResponse} draft
 */
Product.prototype['draft'] = undefined;

/**
 * @member {module:model/ProductResponse} published_parent
 */
Product.prototype['published_parent'] = undefined;

/**
 * @member {module:model/AssetCollection} assets
 */
Product.prototype['assets'] = undefined;

/**
 * @member {module:model/RouteCollection} routes
 */
Product.prototype['routes'] = undefined;

/**
 * @member {module:model/ChannelCollection} channels
 */
Product.prototype['channels'] = undefined;

/**
 * @member {module:model/ProductVariantResponse} first_variant
 */
Product.prototype['first_variant'] = undefined;

/**
 * @member {module:model/AssetResponse} primary_asset
 */
Product.prototype['primary_asset'] = undefined;

/**
 * @member {module:model/CategoryCollection} categories
 */
Product.prototype['categories'] = undefined;

/**
 * @member {module:model/ProductVariantCollection} variants
 */
Product.prototype['variants'] = undefined;

/**
 * @member {module:model/DiscountCollection} discounts
 */
Product.prototype['discounts'] = undefined;

/**
 * @member {module:model/CollectionCollection} collections
 */
Product.prototype['collections'] = undefined;

/**
 * @member {module:model/ProductAssociationCollection} associations
 */
Product.prototype['associations'] = undefined;

/**
 * @member {module:model/VersionCollection} versions
 */
Product.prototype['versions'] = undefined;

/**
 * @member {module:model/CustomerGroupCollection} customer_groups
 */
Product.prototype['customer_groups'] = undefined;

/**
 * @member {module:model/AttributeCollection} attributes
 */
Product.prototype['attributes'] = undefined;

/**
 * @member {module:model/LayoutResponse} layout
 */
Product.prototype['layout'] = undefined;

/**
 * @member {String} name
 */
Product.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Product.prototype['description'] = undefined;

/**
 * @member {Object} attribute_data
 */
Product.prototype['attribute_data'] = undefined;


// Implement ProductAllOf interface:
/**
 * @member {String} id
 */
ProductAllOf.prototype['id'] = undefined;
/**
 * If this product is a draft, this will be populated
 * @member {Date} drafted_at
 */
ProductAllOf.prototype['drafted_at'] = undefined;
/**
 * Displays any variant option data
 * @member {Object} option_data
 */
ProductAllOf.prototype['option_data'] = undefined;
/**
 * @member {String} created_at
 */
ProductAllOf.prototype['created_at'] = undefined;
/**
 * @member {String} updated_at
 */
ProductAllOf.prototype['updated_at'] = undefined;
/**
 * @member {module:model/ProductFamilyResponse} family
 */
ProductAllOf.prototype['family'] = undefined;
/**
 * @member {module:model/ProductResponse} draft
 */
ProductAllOf.prototype['draft'] = undefined;
/**
 * @member {module:model/ProductResponse} published_parent
 */
ProductAllOf.prototype['published_parent'] = undefined;
/**
 * @member {module:model/AssetCollection} assets
 */
ProductAllOf.prototype['assets'] = undefined;
/**
 * @member {module:model/RouteCollection} routes
 */
ProductAllOf.prototype['routes'] = undefined;
/**
 * @member {module:model/ChannelCollection} channels
 */
ProductAllOf.prototype['channels'] = undefined;
/**
 * @member {module:model/ProductVariantResponse} first_variant
 */
ProductAllOf.prototype['first_variant'] = undefined;
/**
 * @member {module:model/AssetResponse} primary_asset
 */
ProductAllOf.prototype['primary_asset'] = undefined;
/**
 * @member {module:model/CategoryCollection} categories
 */
ProductAllOf.prototype['categories'] = undefined;
/**
 * @member {module:model/ProductVariantCollection} variants
 */
ProductAllOf.prototype['variants'] = undefined;
/**
 * @member {module:model/DiscountCollection} discounts
 */
ProductAllOf.prototype['discounts'] = undefined;
/**
 * @member {module:model/CollectionCollection} collections
 */
ProductAllOf.prototype['collections'] = undefined;
/**
 * @member {module:model/ProductAssociationCollection} associations
 */
ProductAllOf.prototype['associations'] = undefined;
/**
 * @member {module:model/VersionCollection} versions
 */
ProductAllOf.prototype['versions'] = undefined;
/**
 * @member {module:model/CustomerGroupCollection} customer_groups
 */
ProductAllOf.prototype['customer_groups'] = undefined;
/**
 * @member {module:model/AttributeCollection} attributes
 */
ProductAllOf.prototype['attributes'] = undefined;
/**
 * @member {module:model/LayoutResponse} layout
 */
ProductAllOf.prototype['layout'] = undefined;
// Implement LocalisedAttributeData interface:
/**
 * @member {String} name
 */
LocalisedAttributeData.prototype['name'] = undefined;
/**
 * @member {String} description
 */
LocalisedAttributeData.prototype['description'] = undefined;
// Implement AttributeData interface:
/**
 * @member {Object} attribute_data
 */
AttributeData.prototype['attribute_data'] = undefined;




export default Product;

