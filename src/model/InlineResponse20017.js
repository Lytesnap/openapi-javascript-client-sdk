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
import LocationResponse from './LocationResponse';

/**
 * The InlineResponse20017 model module.
 * @module model/InlineResponse20017
 * @version 1.0.4
 */
class InlineResponse20017 {
    /**
     * Constructs a new <code>InlineResponse20017</code>.
     * @alias module:model/InlineResponse20017
     * @param message {String} 
     * @param data {Array.<module:model/LocationResponse>} 
     */
    constructor(message, data) { 
        
        InlineResponse20017.initialize(this, message, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message, data) { 
        obj['message'] = message;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>InlineResponse20017</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20017} obj Optional instance to populate.
     * @return {module:model/InlineResponse20017} The populated <code>InlineResponse20017</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20017();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [LocationResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
InlineResponse20017.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/LocationResponse>} data
 */
InlineResponse20017.prototype['data'] = undefined;






export default InlineResponse20017;

