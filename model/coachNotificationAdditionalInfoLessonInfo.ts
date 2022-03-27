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

export class CoachNotificationAdditionalInfoLessonInfo {
    'timestamp': string;
    'startTime': string;
    'endTime': string;
    'locationName': string;
    'lessonId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "string"
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "string"
        },
        {
            "name": "locationName",
            "baseName": "locationName",
            "type": "string"
        },
        {
            "name": "lessonId",
            "baseName": "lessonId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CoachNotificationAdditionalInfoLessonInfo.attributeTypeMap;
    }
}
