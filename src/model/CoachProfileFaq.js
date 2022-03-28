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
 * The CoachProfileFaq model module.
 * @module model/CoachProfileFaq
 * @version 1.0.7
 */
class CoachProfileFaq {
    /**
     * Constructs a new <code>CoachProfileFaq</code>.
     * @alias module:model/CoachProfileFaq
     * @param question {String} 
     * @param answer {String} 
     */
    constructor(question, answer) { 
        
        CoachProfileFaq.initialize(this, question, answer);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, question, answer) { 
        obj['question'] = question;
        obj['answer'] = answer;
    }

    /**
     * Constructs a <code>CoachProfileFaq</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachProfileFaq} obj Optional instance to populate.
     * @return {module:model/CoachProfileFaq} The populated <code>CoachProfileFaq</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoachProfileFaq();

            if (data.hasOwnProperty('question')) {
                obj['question'] = ApiClient.convertToType(data['question'], 'String');
            }
            if (data.hasOwnProperty('answer')) {
                obj['answer'] = ApiClient.convertToType(data['answer'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} question
 */
CoachProfileFaq.prototype['question'] = undefined;

/**
 * @member {String} answer
 */
CoachProfileFaq.prototype['answer'] = undefined;






export default CoachProfileFaq;

