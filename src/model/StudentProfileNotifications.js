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
import StudentProfilePostNotificationSettings from './StudentProfilePostNotificationSettings';

/**
 * The StudentProfileNotifications model module.
 * @module model/StudentProfileNotifications
 * @version 1.0.0
 */
class StudentProfileNotifications {
    /**
     * Constructs a new <code>StudentProfileNotifications</code>.
     * Student profile info
     * @alias module:model/StudentProfileNotifications
     */
    constructor() { 
        
        StudentProfileNotifications.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StudentProfileNotifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentProfileNotifications} obj Optional instance to populate.
     * @return {module:model/StudentProfileNotifications} The populated <code>StudentProfileNotifications</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StudentProfileNotifications();

            if (data.hasOwnProperty('notificationSettings')) {
                obj['notificationSettings'] = StudentProfilePostNotificationSettings.constructFromObject(data['notificationSettings']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StudentProfilePostNotificationSettings} notificationSettings
 */
StudentProfileNotifications.prototype['notificationSettings'] = undefined;






export default StudentProfileNotifications;
