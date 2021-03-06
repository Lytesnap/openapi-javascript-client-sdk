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
 * The InlineResponse400Errors model module.
 * @module model/InlineResponse400Errors
 * @version 1.0.12
 */
class InlineResponse400Errors {
    /**
     * Constructs a new <code>InlineResponse400Errors</code>.
     * @alias module:model/InlineResponse400Errors
     */
    constructor() { 
        
        InlineResponse400Errors.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse400Errors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse400Errors} obj Optional instance to populate.
     * @return {module:model/InlineResponse400Errors} The populated <code>InlineResponse400Errors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse400Errors();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('errorCode')) {
                obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} path
 */
InlineResponse400Errors.prototype['path'] = undefined;

/**
 * @member {String} message
 */
InlineResponse400Errors.prototype['message'] = undefined;

/**
 * @member {String} errorCode
 */
InlineResponse400Errors.prototype['errorCode'] = undefined;






export default InlineResponse400Errors;

