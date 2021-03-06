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
 * The InlineResponse2004 model module.
 * @module model/InlineResponse2004
 * @version 1.0.12
 */
class InlineResponse2004 {
    /**
     * Constructs a new <code>InlineResponse2004</code>.
     * @alias module:model/InlineResponse2004
     */
    constructor() { 
        
        InlineResponse2004.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004();

            if (data.hasOwnProperty('incomeThisWeek')) {
                obj['incomeThisWeek'] = ApiClient.convertToType(data['incomeThisWeek'], 'Number');
            }
            if (data.hasOwnProperty('hoursWorked')) {
                obj['hoursWorked'] = ApiClient.convertToType(data['hoursWorked'], 'Number');
            }
            if (data.hasOwnProperty('numSessions')) {
                obj['numSessions'] = ApiClient.convertToType(data['numSessions'], 'Number');
            }
            if (data.hasOwnProperty('numStudents')) {
                obj['numStudents'] = ApiClient.convertToType(data['numStudents'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} incomeThisWeek
 */
InlineResponse2004.prototype['incomeThisWeek'] = undefined;

/**
 * @member {Number} hoursWorked
 */
InlineResponse2004.prototype['hoursWorked'] = undefined;

/**
 * @member {Number} numSessions
 */
InlineResponse2004.prototype['numSessions'] = undefined;

/**
 * @member {Number} numStudents
 */
InlineResponse2004.prototype['numStudents'] = undefined;

/**
 * @member {Array.<Object>} data
 */
InlineResponse2004.prototype['data'] = undefined;






export default InlineResponse2004;

