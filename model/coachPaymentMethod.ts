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

export class CoachPaymentMethod {
    'paymentMethodId'?: string;
    'brandImage'?: string;
    'cardType'?: string;
    'last4digits'?: string;
    '_default'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentMethodId",
            "baseName": "paymentMethodId",
            "type": "string"
        },
        {
            "name": "brandImage",
            "baseName": "brandImage",
            "type": "string"
        },
        {
            "name": "cardType",
            "baseName": "cardType",
            "type": "string"
        },
        {
            "name": "last4digits",
            "baseName": "last4digits",
            "type": "string"
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CoachPaymentMethod.attributeTypeMap;
    }
}

