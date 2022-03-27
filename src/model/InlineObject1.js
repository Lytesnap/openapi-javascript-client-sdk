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
 * The InlineObject1 model module.
 * @module model/InlineObject1
 * @version 1.0.4
 */
class InlineObject1 {
    /**
     * Constructs a new <code>InlineObject1</code>.
     * @alias module:model/InlineObject1
     */
    constructor() { 
        
        InlineObject1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject1} obj Optional instance to populate.
     * @return {module:model/InlineObject1} The populated <code>InlineObject1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject1();

            if (data.hasOwnProperty('timeIntervalBetweenLocations')) {
                obj['timeIntervalBetweenLocations'] = ApiClient.convertToType(data['timeIntervalBetweenLocations'], 'Number');
            }
            if (data.hasOwnProperty('breaksBetweenLessons')) {
                obj['breaksBetweenLessons'] = ApiClient.convertToType(data['breaksBetweenLessons'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} timeIntervalBetweenLocations
 */
InlineObject1.prototype['timeIntervalBetweenLocations'] = undefined;

/**
 * @member {Number} breaksBetweenLessons
 */
InlineObject1.prototype['breaksBetweenLessons'] = undefined;






export default InlineObject1;

