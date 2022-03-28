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
 * The LessonProblemReport model module.
 * @module model/LessonProblemReport
 * @version 1.0.7
 */
class LessonProblemReport {
    /**
     * Constructs a new <code>LessonProblemReport</code>.
     * This model is used to report a problem on a lesson
     * @alias module:model/LessonProblemReport
     * @param problem {module:model/LessonProblemReport.ProblemEnum} 
     */
    constructor(problem) { 
        
        LessonProblemReport.initialize(this, problem);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, problem) { 
        obj['problem'] = problem;
    }

    /**
     * Constructs a <code>LessonProblemReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LessonProblemReport} obj Optional instance to populate.
     * @return {module:model/LessonProblemReport} The populated <code>LessonProblemReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LessonProblemReport();

            if (data.hasOwnProperty('problem')) {
                obj['problem'] = ApiClient.convertToType(data['problem'], 'String');
            }
            if (data.hasOwnProperty('optionalComment')) {
                obj['optionalComment'] = ApiClient.convertToType(data['optionalComment'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LessonProblemReport.ProblemEnum} problem
 */
LessonProblemReport.prototype['problem'] = undefined;

/**
 * @member {String} optionalComment
 */
LessonProblemReport.prototype['optionalComment'] = undefined;





/**
 * Allowed values for the <code>problem</code> property.
 * @enum {String}
 * @readonly
 */
LessonProblemReport['ProblemEnum'] = {

    /**
     * value: "late"
     * @const
     */
    "late": "late",

    /**
     * value: "no-show"
     * @const
     */
    "no-show": "no-show",

    /**
     * value: "boorish-behavior"
     * @const
     */
    "boorish-behavior": "boorish-behavior",

    /**
     * value: "other"
     * @const
     */
    "other": "other"
};



export default LessonProblemReport;

