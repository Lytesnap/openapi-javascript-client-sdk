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

export class StudentPaymentMethodCard {
    'number': string;
    'expMonth': number;
    'expYear': number;
    'cvc': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "expMonth",
            "baseName": "exp_month",
            "type": "number"
        },
        {
            "name": "expYear",
            "baseName": "exp_year",
            "type": "number"
        },
        {
            "name": "cvc",
            "baseName": "cvc",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StudentPaymentMethodCard.attributeTypeMap;
    }
}
