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
import { InlineResponse2001SomeoneMessagedMe } from './inlineResponse2001SomeoneMessagedMe';

export class InlineObject4 {
    'someoneMessagedMe': InlineResponse2001SomeoneMessagedMe;
    'anyoneLeftMeAReview': InlineResponse2001SomeoneMessagedMe;
    'anyoneCancelledLesson': InlineResponse2001SomeoneMessagedMe;
    'anyoneAcceptOrDeclineLesson': InlineResponse2001SomeoneMessagedMe;
    'getNewsAnnouncementAndProductUpdates': InlineResponse2001SomeoneMessagedMe;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "someoneMessagedMe",
            "baseName": "someoneMessagedMe",
            "type": "InlineResponse2001SomeoneMessagedMe"
        },
        {
            "name": "anyoneLeftMeAReview",
            "baseName": "anyoneLeftMeAReview",
            "type": "InlineResponse2001SomeoneMessagedMe"
        },
        {
            "name": "anyoneCancelledLesson",
            "baseName": "anyoneCancelledLesson",
            "type": "InlineResponse2001SomeoneMessagedMe"
        },
        {
            "name": "anyoneAcceptOrDeclineLesson",
            "baseName": "anyoneAcceptOrDeclineLesson",
            "type": "InlineResponse2001SomeoneMessagedMe"
        },
        {
            "name": "getNewsAnnouncementAndProductUpdates",
            "baseName": "getNewsAnnouncementAndProductUpdates",
            "type": "InlineResponse2001SomeoneMessagedMe"
        }    ];

    static getAttributeTypeMap() {
        return InlineObject4.attributeTypeMap;
    }
}

