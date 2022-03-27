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

export class InlineResponse20014 {
    'featureName'?: string;
    'featureId'?: string;
    'dateImplemented'?: string;
    'numberOfFeedback'?: number;
    'averageRating'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "featureName",
            "baseName": "featureName",
            "type": "string"
        },
        {
            "name": "featureId",
            "baseName": "featureId",
            "type": "string"
        },
        {
            "name": "dateImplemented",
            "baseName": "dateImplemented",
            "type": "string"
        },
        {
            "name": "numberOfFeedback",
            "baseName": "numberOfFeedback",
            "type": "number"
        },
        {
            "name": "averageRating",
            "baseName": "averageRating",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20014.attributeTypeMap;
    }
}
