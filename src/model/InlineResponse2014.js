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
import InlineResponse2014Data from './InlineResponse2014Data';

/**
 * The InlineResponse2014 model module.
 * @module model/InlineResponse2014
 * @version 1.0.12
 */
class InlineResponse2014 {
    /**
     * Constructs a new <code>InlineResponse2014</code>.
     * @alias module:model/InlineResponse2014
     * @param message {String} 
     * @param data {module:model/InlineResponse2014Data} 
     */
    constructor(message, data) { 
        
        InlineResponse2014.initialize(this, message, data);
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
     * Constructs a <code>InlineResponse2014</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2014} obj Optional instance to populate.
     * @return {module:model/InlineResponse2014} The populated <code>InlineResponse2014</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2014();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = InlineResponse2014Data.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
InlineResponse2014.prototype['message'] = undefined;

/**
 * @member {module:model/InlineResponse2014Data} data
 */
InlineResponse2014.prototype['data'] = undefined;






export default InlineResponse2014;

