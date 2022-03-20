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
 * The StudentProfileExperience model module.
 * @module model/StudentProfileExperience
 * @version 1.0.0
 */
class StudentProfileExperience {
    /**
     * Constructs a new <code>StudentProfileExperience</code>.
     * @alias module:model/StudentProfileExperience
     */
    constructor() { 
        
        StudentProfileExperience.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StudentProfileExperience</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentProfileExperience} obj Optional instance to populate.
     * @return {module:model/StudentProfileExperience} The populated <code>StudentProfileExperience</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StudentProfileExperience();

            if (data.hasOwnProperty('sportType')) {
                obj['sportType'] = ApiClient.convertToType(data['sportType'], 'String');
            }
            if (data.hasOwnProperty('experienceLevel')) {
                obj['experienceLevel'] = ApiClient.convertToType(data['experienceLevel'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StudentProfileExperience.SportTypeEnum} sportType
 */
StudentProfileExperience.prototype['sportType'] = undefined;

/**
 * @member {module:model/StudentProfileExperience.ExperienceLevelEnum} experienceLevel
 */
StudentProfileExperience.prototype['experienceLevel'] = undefined;





/**
 * Allowed values for the <code>sportType</code> property.
 * @enum {String}
 * @readonly
 */
StudentProfileExperience['SportTypeEnum'] = {

    /**
     * value: "Tennis"
     * @const
     */
    "Tennis": "Tennis",

    /**
     * value: "Baseball"
     * @const
     */
    "Baseball": "Baseball",

    /**
     * value: "Basketball"
     * @const
     */
    "Basketball": "Basketball"
};


/**
 * Allowed values for the <code>experienceLevel</code> property.
 * @enum {String}
 * @readonly
 */
StudentProfileExperience['ExperienceLevelEnum'] = {

    /**
     * value: "Beginner"
     * @const
     */
    "Beginner": "Beginner",

    /**
     * value: "Intermediate"
     * @const
     */
    "Intermediate": "Intermediate",

    /**
     * value: "Competitor"
     * @const
     */
    "Competitor": "Competitor",

    /**
     * value: "Advanced"
     * @const
     */
    "Advanced": "Advanced"
};



export default StudentProfileExperience;
