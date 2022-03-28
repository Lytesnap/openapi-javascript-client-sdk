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
 * The InlineResponse20018Data model module.
 * @module model/InlineResponse20018Data
 * @version 1.0.7
 */
class InlineResponse20018Data {
    /**
     * Constructs a new <code>InlineResponse20018Data</code>.
     * @alias module:model/InlineResponse20018Data
     * @param locationId {String} 
     */
    constructor(locationId) { 
        
        InlineResponse20018Data.initialize(this, locationId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locationId) { 
        obj['locationId'] = locationId;
    }

    /**
     * Constructs a <code>InlineResponse20018Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20018Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20018Data} The populated <code>InlineResponse20018Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20018Data();

            if (data.hasOwnProperty('locationId')) {
                obj['locationId'] = ApiClient.convertToType(data['locationId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locationId
 */
InlineResponse20018Data.prototype['locationId'] = undefined;






export default InlineResponse20018Data;

