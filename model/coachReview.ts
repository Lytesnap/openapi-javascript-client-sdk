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

export class CoachReview {
    'id': string;
    'studentName': string;
    'overallRating': number;
    'tags': Array<CoachReview.TagsEnum>;
    'timestamp': string;
    'studentId': string;
    'photo': string;
    'reviewText': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "studentName",
            "baseName": "studentName",
            "type": "string"
        },
        {
            "name": "overallRating",
            "baseName": "overallRating",
            "type": "number"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<CoachReview.TagsEnum>"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string"
        },
        {
            "name": "studentId",
            "baseName": "studentId",
            "type": "string"
        },
        {
            "name": "photo",
            "baseName": "photo",
            "type": "string"
        },
        {
            "name": "reviewText",
            "baseName": "reviewText",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CoachReview.attributeTypeMap;
    }
}

export namespace CoachReview {
    export enum TagsEnum {
        FriendlyToKids = <any> 'Friendly to kids',
        Competitive = <any> 'Competitive',
        Caring = <any> 'Caring',
        Discipline = <any> 'Discipline'
    }
}
