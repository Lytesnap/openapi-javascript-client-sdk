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
import InlineResponse20018Data from './InlineResponse20018Data';

/**
 * The InlineResponse20018 model module.
 * @module model/InlineResponse20018
 * @version 1.0.4
 */
class InlineResponse20018 {
    /**
     * Constructs a new <code>InlineResponse20018</code>.
     * @alias module:model/InlineResponse20018
     * @param message {String} 
     * @param data {module:model/InlineResponse20018Data} 
     */
    constructor(message, data) { 
        
        InlineResponse20018.initialize(this, message, data);
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
     * Constructs a <code>InlineResponse20018</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20018} obj Optional instance to populate.
     * @return {module:model/InlineResponse20018} The populated <code>InlineResponse20018</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20018();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = InlineResponse20018Data.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
InlineResponse20018.prototype['message'] = undefined;

/**
 * @member {module:model/InlineResponse20018Data} data
 */
InlineResponse20018.prototype['data'] = undefined;






export default InlineResponse20018;

