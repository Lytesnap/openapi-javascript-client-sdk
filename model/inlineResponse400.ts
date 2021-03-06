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
import { InlineResponse400Errors } from './inlineResponse400Errors';

export class InlineResponse400 {
    'message'?: string;
    'errors'?: Set<InlineResponse400Errors>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Set<InlineResponse400Errors>"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse400.attributeTypeMap;
    }
}

