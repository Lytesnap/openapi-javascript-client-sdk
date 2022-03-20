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
 * The StudentProfileNotificationSettings model module.
 * @module model/StudentProfileNotificationSettings
 * @version 1.0.0
 */
class StudentProfileNotificationSettings {
    /**
     * Constructs a new <code>StudentProfileNotificationSettings</code>.
     * @alias module:model/StudentProfileNotificationSettings
     */
    constructor() { 
        
        StudentProfileNotificationSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StudentProfileNotificationSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentProfileNotificationSettings} obj Optional instance to populate.
     * @return {module:model/StudentProfileNotificationSettings} The populated <code>StudentProfileNotificationSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StudentProfileNotificationSettings();

            if (data.hasOwnProperty('messageMe')) {
                obj['messageMe'] = ApiClient.convertToType(data['messageMe'], ['Boolean']);
            }
            if (data.hasOwnProperty('LeftReview')) {
                obj['LeftReview'] = ApiClient.convertToType(data['LeftReview'], ['Boolean']);
            }
            if (data.hasOwnProperty('cancelledLesson')) {
                obj['cancelledLesson'] = ApiClient.convertToType(data['cancelledLesson'], ['Boolean']);
            }
            if (data.hasOwnProperty('acceptOrDeclineLesson')) {
                obj['acceptOrDeclineLesson'] = ApiClient.convertToType(data['acceptOrDeclineLesson'], ['Boolean']);
            }
            if (data.hasOwnProperty('getNewsAndUpdates')) {
                obj['getNewsAndUpdates'] = ApiClient.convertToType(data['getNewsAndUpdates'], ['Boolean']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Boolean>} messageMe
 */
StudentProfileNotificationSettings.prototype['messageMe'] = undefined;

/**
 * @member {Array.<Boolean>} LeftReview
 */
StudentProfileNotificationSettings.prototype['LeftReview'] = undefined;

/**
 * @member {Array.<Boolean>} cancelledLesson
 */
StudentProfileNotificationSettings.prototype['cancelledLesson'] = undefined;

/**
 * @member {Array.<Boolean>} acceptOrDeclineLesson
 */
StudentProfileNotificationSettings.prototype['acceptOrDeclineLesson'] = undefined;

/**
 * @member {Array.<Boolean>} getNewsAndUpdates
 */
StudentProfileNotificationSettings.prototype['getNewsAndUpdates'] = undefined;






export default StudentProfileNotificationSettings;
