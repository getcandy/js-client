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
import Channel from './Channel';

/**
 * The ChannelResponse model module.
 * @module model/ChannelResponse
 * @version 1.0.0
 */
class ChannelResponse {
    /**
     * Constructs a new <code>ChannelResponse</code>.
     * @alias module:model/ChannelResponse
     */
    constructor() { 
        
        ChannelResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelResponse} obj Optional instance to populate.
     * @return {module:model/ChannelResponse} The populated <code>ChannelResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Channel.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Channel} data
 */
ChannelResponse.prototype['data'] = undefined;






export default ChannelResponse;

