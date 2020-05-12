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
import AttachCategoryChannelsBodyChannels from './AttachCategoryChannelsBodyChannels';

/**
 * The AttachCategoryChannelsBody model module.
 * @module model/AttachCategoryChannelsBody
 * @version 1.0.0
 */
class AttachCategoryChannelsBody {
    /**
     * Constructs a new <code>AttachCategoryChannelsBody</code>.
     * @alias module:model/AttachCategoryChannelsBody
     * @param channels {Array.<module:model/AttachCategoryChannelsBodyChannels>} 
     */
    constructor(channels) { 
        
        AttachCategoryChannelsBody.initialize(this, channels);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channels) { 
        obj['channels'] = channels;
    }

    /**
     * Constructs a <code>AttachCategoryChannelsBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachCategoryChannelsBody} obj Optional instance to populate.
     * @return {module:model/AttachCategoryChannelsBody} The populated <code>AttachCategoryChannelsBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachCategoryChannelsBody();

            if (data.hasOwnProperty('channels')) {
                obj['channels'] = ApiClient.convertToType(data['channels'], [AttachCategoryChannelsBodyChannels]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/AttachCategoryChannelsBodyChannels>} channels
 */
AttachCategoryChannelsBody.prototype['channels'] = undefined;






export default AttachCategoryChannelsBody;

