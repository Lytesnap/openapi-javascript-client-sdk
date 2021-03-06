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

export class StudentProfileExperience {
    'sportType'?: StudentProfileExperience.SportTypeEnum;
    'experienceLevel'?: StudentProfileExperience.ExperienceLevelEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sportType",
            "baseName": "sportType",
            "type": "StudentProfileExperience.SportTypeEnum"
        },
        {
            "name": "experienceLevel",
            "baseName": "experienceLevel",
            "type": "StudentProfileExperience.ExperienceLevelEnum"
        }    ];

    static getAttributeTypeMap() {
        return StudentProfileExperience.attributeTypeMap;
    }
}

export namespace StudentProfileExperience {
    export enum SportTypeEnum {
        Tennis = <any> 'Tennis',
        Baseball = <any> 'Baseball',
        Basketball = <any> 'Basketball'
    }
    export enum ExperienceLevelEnum {
        Beginner = <any> 'Beginner',
        Intermediate = <any> 'Intermediate',
        Competitor = <any> 'Competitor',
        Advanced = <any> 'Advanced'
    }
}
