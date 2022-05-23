/**
 * lytesnap-backend-api
 * This document details all the API endpoints that are consumed exclusively by lytesnap frontend.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: ylin@lytesnap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse2011 model module.
 * @module model/InlineResponse2011
 * @version 1.0.12
 */
class InlineResponse2011 {
    /**
     * Constructs a new <code>InlineResponse2011</code>.
     * @alias module:model/InlineResponse2011
     * @param message {String} 
     * @param lessonId {String} 
     */
    constructor(message, lessonId) { 
        
        InlineResponse2011.initialize(this, message, lessonId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message, lessonId) { 
        obj['message'] = message;
        obj['lessonId'] = lessonId;
    }

    /**
     * Constructs a <code>InlineResponse2011</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2011} obj Optional instance to populate.
     * @return {module:model/InlineResponse2011} The populated <code>InlineResponse2011</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2011();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('lessonId')) {
                obj['lessonId'] = ApiClient.convertToType(data['lessonId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
InlineResponse2011.prototype['message'] = undefined;

/**
 * @member {String} lessonId
 */
InlineResponse2011.prototype['lessonId'] = undefined;






export default InlineResponse2011;

