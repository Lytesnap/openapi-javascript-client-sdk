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
 * The StudentProfilePostNotificationSettings model module.
 * @module model/StudentProfilePostNotificationSettings
 * @version 1.0.7
 */
class StudentProfilePostNotificationSettings {
    /**
     * Constructs a new <code>StudentProfilePostNotificationSettings</code>.
     * @alias module:model/StudentProfilePostNotificationSettings
     * @param messageMe {Array.<Boolean>} 
     * @param leftReview {Array.<Boolean>} 
     * @param cancelledLesson {Array.<Boolean>} 
     * @param acceptOrDeclineLesson {Array.<Boolean>} 
     * @param getNewsAndUpdates {Array.<Boolean>} 
     */
    constructor(messageMe, leftReview, cancelledLesson, acceptOrDeclineLesson, getNewsAndUpdates) { 
        
        StudentProfilePostNotificationSettings.initialize(this, messageMe, leftReview, cancelledLesson, acceptOrDeclineLesson, getNewsAndUpdates);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, messageMe, leftReview, cancelledLesson, acceptOrDeclineLesson, getNewsAndUpdates) { 
        obj['messageMe'] = messageMe;
        obj['LeftReview'] = leftReview;
        obj['cancelledLesson'] = cancelledLesson;
        obj['acceptOrDeclineLesson'] = acceptOrDeclineLesson;
        obj['getNewsAndUpdates'] = getNewsAndUpdates;
    }

    /**
     * Constructs a <code>StudentProfilePostNotificationSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentProfilePostNotificationSettings} obj Optional instance to populate.
     * @return {module:model/StudentProfilePostNotificationSettings} The populated <code>StudentProfilePostNotificationSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StudentProfilePostNotificationSettings();

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
StudentProfilePostNotificationSettings.prototype['messageMe'] = undefined;

/**
 * @member {Array.<Boolean>} LeftReview
 */
StudentProfilePostNotificationSettings.prototype['LeftReview'] = undefined;

/**
 * @member {Array.<Boolean>} cancelledLesson
 */
StudentProfilePostNotificationSettings.prototype['cancelledLesson'] = undefined;

/**
 * @member {Array.<Boolean>} acceptOrDeclineLesson
 */
StudentProfilePostNotificationSettings.prototype['acceptOrDeclineLesson'] = undefined;

/**
 * @member {Array.<Boolean>} getNewsAndUpdates
 */
StudentProfilePostNotificationSettings.prototype['getNewsAndUpdates'] = undefined;






export default StudentProfilePostNotificationSettings;

