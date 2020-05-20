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
import UpdateAssetBodyAssets from './UpdateAssetBodyAssets';

/**
 * The UpdateAssetBody model module.
 * @module model/UpdateAssetBody
 * @version 0.9.0
 */
class UpdateAssetBody {
    /**
     * Constructs a new <code>UpdateAssetBody</code>.
     * @alias module:model/UpdateAssetBody
     */
    constructor() { 
        
        UpdateAssetBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateAssetBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAssetBody} obj Optional instance to populate.
     * @return {module:model/UpdateAssetBody} The populated <code>UpdateAssetBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAssetBody();

            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [UpdateAssetBodyAssets]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/UpdateAssetBodyAssets>} assets
 */
UpdateAssetBody.prototype['assets'] = undefined;






export default UpdateAssetBody;

