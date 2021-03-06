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

export class InlineResponse20015 {
    'featureName'?: string;
    'feedback'?: string;
    'name'?: string;
    'userID'?: string;
    'type'?: InlineResponse20015.TypeEnum;
    'rating'?: number;
    'date'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "featureName",
            "baseName": "featureName",
            "type": "string"
        },
        {
            "name": "feedback",
            "baseName": "feedback",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "userID",
            "baseName": "userID",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "InlineResponse20015.TypeEnum"
        },
        {
            "name": "rating",
            "baseName": "rating",
            "type": "number"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20015.attributeTypeMap;
    }
}

export namespace InlineResponse20015 {
    export enum TypeEnum {
        Coach = <any> 'coach',
        Student = <any> 'student'
    }
}
