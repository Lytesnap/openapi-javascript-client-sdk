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
 * The StudentNotificationFilterFilter model module.
 * @module model/StudentNotificationFilterFilter
 * @version 1.0.12
 */
class StudentNotificationFilterFilter {
    /**
     * Constructs a new <code>StudentNotificationFilterFilter</code>.
     * @alias module:model/StudentNotificationFilterFilter
     */
    constructor() { 
        
        StudentNotificationFilterFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StudentNotificationFilterFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentNotificationFilterFilter} obj Optional instance to populate.
     * @return {module:model/StudentNotificationFilterFilter} The populated <code>StudentNotificationFilterFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StudentNotificationFilterFilter();

            if (data.hasOwnProperty('Announcements')) {
                obj['Announcements'] = ApiClient.convertToType(data['Announcements'], 'Boolean');
            }
            if (data.hasOwnProperty('TrainingReports')) {
                obj['TrainingReports'] = ApiClient.convertToType(data['TrainingReports'], 'Boolean');
            }
            if (data.hasOwnProperty('LessonsApproved')) {
                obj['LessonsApproved'] = ApiClient.convertToType(data['LessonsApproved'], 'Boolean');
            }
            if (data.hasOwnProperty('LessonsDeclined')) {
                obj['LessonsDeclined'] = ApiClient.convertToType(data['LessonsDeclined'], 'Boolean');
            }
            if (data.hasOwnProperty('LessonsCanceled')) {
                obj['LessonsCanceled'] = ApiClient.convertToType(data['LessonsCanceled'], 'Boolean');
            }
            if (data.hasOwnProperty('PaymentUpdates')) {
                obj['PaymentUpdates'] = ApiClient.convertToType(data['PaymentUpdates'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} Announcements
 * @default false
 */
StudentNotificationFilterFilter.prototype['Announcements'] = false;

/**
 * @member {Boolean} TrainingReports
 * @default false
 */
StudentNotificationFilterFilter.prototype['TrainingReports'] = false;

/**
 * @member {Boolean} LessonsApproved
 * @default false
 */
StudentNotificationFilterFilter.prototype['LessonsApproved'] = false;

/**
 * @member {Boolean} LessonsDeclined
 * @default false
 */
StudentNotificationFilterFilter.prototype['LessonsDeclined'] = false;

/**
 * @member {Boolean} LessonsCanceled
 * @default false
 */
StudentNotificationFilterFilter.prototype['LessonsCanceled'] = false;

/**
 * @member {Boolean} PaymentUpdates
 * @default false
 */
StudentNotificationFilterFilter.prototype['PaymentUpdates'] = false;






export default StudentNotificationFilterFilter;

