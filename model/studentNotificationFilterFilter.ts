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
 */

import { RequestFile } from './models';

export class StudentNotificationFilterFilter {
    'announcements'?: boolean = false;
    'trainingReports'?: boolean = false;
    'lessonsApproved'?: boolean = false;
    'lessonsDeclined'?: boolean = false;
    'lessonsCanceled'?: boolean = false;
    'paymentUpdates'?: boolean = false;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "announcements",
            "baseName": "Announcements",
            "type": "boolean"
        },
        {
            "name": "trainingReports",
            "baseName": "TrainingReports",
            "type": "boolean"
        },
        {
            "name": "lessonsApproved",
            "baseName": "LessonsApproved",
            "type": "boolean"
        },
        {
            "name": "lessonsDeclined",
            "baseName": "LessonsDeclined",
            "type": "boolean"
        },
        {
            "name": "lessonsCanceled",
            "baseName": "LessonsCanceled",
            "type": "boolean"
        },
        {
            "name": "paymentUpdates",
            "baseName": "PaymentUpdates",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return StudentNotificationFilterFilter.attributeTypeMap;
    }
}

