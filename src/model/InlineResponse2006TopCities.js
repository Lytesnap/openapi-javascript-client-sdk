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
 * The InlineResponse2006TopCities model module.
 * @module model/InlineResponse2006TopCities
 * @version 1.0.0
 */
class InlineResponse2006TopCities {
    /**
     * Constructs a new <code>InlineResponse2006TopCities</code>.
     * @alias module:model/InlineResponse2006TopCities
     */
    constructor() { 
        
        InlineResponse2006TopCities.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006TopCities</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006TopCities} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006TopCities} The populated <code>InlineResponse2006TopCities</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006TopCities();

            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} city
 */
InlineResponse2006TopCities.prototype['city'] = undefined;

/**
 * @member {Number} percentage
 */
InlineResponse2006TopCities.prototype['percentage'] = undefined;






export default InlineResponse2006TopCities;

