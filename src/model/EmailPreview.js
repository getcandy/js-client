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

/**
 * The EmailPreview model module.
 * @module model/EmailPreview
 * @version 1.0.0
 */
class EmailPreview {
    /**
     * Constructs a new <code>EmailPreview</code>.
     * @alias module:model/EmailPreview
     */
    constructor() { 
        
        EmailPreview.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailPreview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailPreview} obj Optional instance to populate.
     * @return {module:model/EmailPreview} The populated <code>EmailPreview</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailPreview();

            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} subject
 */
EmailPreview.prototype['subject'] = undefined;

/**
 * @member {String} content
 */
EmailPreview.prototype['content'] = undefined;






export default EmailPreview;

