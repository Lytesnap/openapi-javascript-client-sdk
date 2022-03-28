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
 * The CoachNotificationAdditionalInfoLessonInfo model module.
 * @module model/CoachNotificationAdditionalInfoLessonInfo
 * @version 1.0.7
 */
class CoachNotificationAdditionalInfoLessonInfo {
    /**
     * Constructs a new <code>CoachNotificationAdditionalInfoLessonInfo</code>.
     * @alias module:model/CoachNotificationAdditionalInfoLessonInfo
     * @param timestamp {String} 
     * @param startTime {String} 
     * @param endTime {String} 
     * @param locationName {String} 
     * @param lessonId {String} 
     */
    constructor(timestamp, startTime, endTime, locationName, lessonId) { 
        
        CoachNotificationAdditionalInfoLessonInfo.initialize(this, timestamp, startTime, endTime, locationName, lessonId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, timestamp, startTime, endTime, locationName, lessonId) { 
        obj['timestamp'] = timestamp;
        obj['startTime'] = startTime;
        obj['endTime'] = endTime;
        obj['locationName'] = locationName;
        obj['lessonId'] = lessonId;
    }

    /**
     * Constructs a <code>CoachNotificationAdditionalInfoLessonInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachNotificationAdditionalInfoLessonInfo} obj Optional instance to populate.
     * @return {module:model/CoachNotificationAdditionalInfoLessonInfo} The populated <code>CoachNotificationAdditionalInfoLessonInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoachNotificationAdditionalInfoLessonInfo();

            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'String');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'String');
            }
            if (data.hasOwnProperty('locationName')) {
                obj['locationName'] = ApiClient.convertToType(data['locationName'], 'String');
            }
            if (data.hasOwnProperty('lessonId')) {
                obj['lessonId'] = ApiClient.convertToType(data['lessonId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} timestamp
 */
CoachNotificationAdditionalInfoLessonInfo.prototype['timestamp'] = undefined;

/**
 * @member {String} startTime
 */
CoachNotificationAdditionalInfoLessonInfo.prototype['startTime'] = undefined;

/**
 * @member {String} endTime
 */
CoachNotificationAdditionalInfoLessonInfo.prototype['endTime'] = undefined;

/**
 * @member {String} locationName
 */
CoachNotificationAdditionalInfoLessonInfo.prototype['locationName'] = undefined;

/**
 * @member {String} lessonId
 */
CoachNotificationAdditionalInfoLessonInfo.prototype['lessonId'] = undefined;






export default CoachNotificationAdditionalInfoLessonInfo;

