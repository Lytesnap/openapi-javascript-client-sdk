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
import StudentNotificationFilterFilter from './StudentNotificationFilterFilter';

/**
 * The StudentNotificationFilter model module.
 * @module model/StudentNotificationFilter
 * @version 1.0.4
 */
class StudentNotificationFilter {
    /**
     * Constructs a new <code>StudentNotificationFilter</code>.
     * filters for notificaitons in student page
     * @alias module:model/StudentNotificationFilter
     * @param studentId {String} 
     * @param filter {module:model/StudentNotificationFilterFilter} 
     */
    constructor(studentId, filter) { 
        
        StudentNotificationFilter.initialize(this, studentId, filter);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, studentId, filter) { 
        obj['studentId'] = studentId;
        obj['filter'] = filter;
    }

    /**
     * Constructs a <code>StudentNotificationFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentNotificationFilter} obj Optional instance to populate.
     * @return {module:model/StudentNotificationFilter} The populated <code>StudentNotificationFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StudentNotificationFilter();

            if (data.hasOwnProperty('studentId')) {
                obj['studentId'] = ApiClient.convertToType(data['studentId'], 'String');
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = StudentNotificationFilterFilter.constructFromObject(data['filter']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} studentId
 */
StudentNotificationFilter.prototype['studentId'] = undefined;

/**
 * @member {module:model/StudentNotificationFilterFilter} filter
 */
StudentNotificationFilter.prototype['filter'] = undefined;






export default StudentNotificationFilter;

