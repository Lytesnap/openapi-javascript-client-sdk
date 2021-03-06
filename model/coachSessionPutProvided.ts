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

export class CoachSessionPutProvided {
    'equipment'?: Set<string>;
    'apparel'?: Set<string>;
    'accessories'?: Set<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "equipment",
            "baseName": "equipment",
            "type": "Set<string>"
        },
        {
            "name": "apparel",
            "baseName": "apparel",
            "type": "Set<string>"
        },
        {
            "name": "accessories",
            "baseName": "accessories",
            "type": "Set<string>"
        }    ];

    static getAttributeTypeMap() {
        return CoachSessionPutProvided.attributeTypeMap;
    }
}

