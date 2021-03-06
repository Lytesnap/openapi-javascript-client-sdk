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

export class InlineObject12 {
    'fullName'?: string;
    'gender'?: InlineObject12.GenderEnum;
    'phoneNumber'?: string;
    'emailAddress'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fullName",
            "baseName": "fullName",
            "type": "string"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "InlineObject12.GenderEnum"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineObject12.attributeTypeMap;
    }
}

export namespace InlineObject12 {
    export enum GenderEnum {
        Male = <any> 'male',
        Female = <any> 'female',
        Other = <any> 'other'
    }
}
