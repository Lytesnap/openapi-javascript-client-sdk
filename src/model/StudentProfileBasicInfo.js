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
import StudentProfilePostExperience from './StudentProfilePostExperience';

/**
 * The StudentProfileBasicInfo model module.
 * @module model/StudentProfileBasicInfo
 * @version 1.0.7
 */
class StudentProfileBasicInfo {
    /**
     * Constructs a new <code>StudentProfileBasicInfo</code>.
     * Student profile info
     * @alias module:model/StudentProfileBasicInfo
     * @param profileImage {String} 
     * @param fullName {String} 
     * @param phoneNumber {String} 
     * @param dateOfBirth {String} 
     * @param emailAddress {String} 
     * @param experience {Array.<module:model/StudentProfilePostExperience>} 
     */
    constructor(profileImage, fullName, phoneNumber, dateOfBirth, emailAddress, experience) { 
        
        StudentProfileBasicInfo.initialize(this, profileImage, fullName, phoneNumber, dateOfBirth, emailAddress, experience);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, profileImage, fullName, phoneNumber, dateOfBirth, emailAddress, experience) { 
        obj['profileImage'] = profileImage;
        obj['fullName'] = fullName;
        obj['phoneNumber'] = phoneNumber;
        obj['dateOfBirth'] = dateOfBirth;
        obj['emailAddress'] = emailAddress;
        obj['experience'] = experience;
    }

    /**
     * Constructs a <code>StudentProfileBasicInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentProfileBasicInfo} obj Optional instance to populate.
     * @return {module:model/StudentProfileBasicInfo} The populated <code>StudentProfileBasicInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StudentProfileBasicInfo();

            if (data.hasOwnProperty('profileImage')) {
                obj['profileImage'] = ApiClient.convertToType(data['profileImage'], 'String');
            }
            if (data.hasOwnProperty('fullName')) {
                obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('dateOfBirth')) {
                obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'String');
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
            if (data.hasOwnProperty('aboutMe')) {
                obj['aboutMe'] = ApiClient.convertToType(data['aboutMe'], 'String');
            }
            if (data.hasOwnProperty('experience')) {
                obj['experience'] = ApiClient.convertToType(data['experience'], [StudentProfilePostExperience]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} profileImage
 */
StudentProfileBasicInfo.prototype['profileImage'] = undefined;

/**
 * @member {String} fullName
 */
StudentProfileBasicInfo.prototype['fullName'] = undefined;

/**
 * @member {String} phoneNumber
 */
StudentProfileBasicInfo.prototype['phoneNumber'] = undefined;

/**
 * @member {module:model/StudentProfileBasicInfo.GenderEnum} gender
 */
StudentProfileBasicInfo.prototype['gender'] = undefined;

/**
 * @member {String} dateOfBirth
 */
StudentProfileBasicInfo.prototype['dateOfBirth'] = undefined;

/**
 * @member {String} emailAddress
 */
StudentProfileBasicInfo.prototype['emailAddress'] = undefined;

/**
 * @member {String} aboutMe
 */
StudentProfileBasicInfo.prototype['aboutMe'] = undefined;

/**
 * @member {Array.<module:model/StudentProfilePostExperience>} experience
 */
StudentProfileBasicInfo.prototype['experience'] = undefined;





/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
StudentProfileBasicInfo['GenderEnum'] = {

    /**
     * value: "Male"
     * @const
     */
    "Male": "Male",

    /**
     * value: "Female"
     * @const
     */
    "Female": "Female"
};



export default StudentProfileBasicInfo;

