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
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse2003SomeoneMessagedMe from './InlineResponse2003SomeoneMessagedMe';

/**
 * The InlineObject5 model module.
 * @module model/InlineObject5
 * @version 1.0.12
 */
class InlineObject5 {
    /**
     * Constructs a new <code>InlineObject5</code>.
     * @alias module:model/InlineObject5
     */
    constructor() { 
        
        InlineObject5.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject5} obj Optional instance to populate.
     * @return {module:model/InlineObject5} The populated <code>InlineObject5</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject5();

            if (data.hasOwnProperty('someoneMessagedMe')) {
                obj['someoneMessagedMe'] = InlineResponse2003SomeoneMessagedMe.constructFromObject(data['someoneMessagedMe']);
            }
            if (data.hasOwnProperty('anyoneLeftMeAReview')) {
                obj['anyoneLeftMeAReview'] = InlineResponse2003SomeoneMessagedMe.constructFromObject(data['anyoneLeftMeAReview']);
            }
            if (data.hasOwnProperty('anyoneCancelledLesson')) {
                obj['anyoneCancelledLesson'] = InlineResponse2003SomeoneMessagedMe.constructFromObject(data['anyoneCancelledLesson']);
            }
            if (data.hasOwnProperty('anyoneAcceptOrDeclineLesson')) {
                obj['anyoneAcceptOrDeclineLesson'] = InlineResponse2003SomeoneMessagedMe.constructFromObject(data['anyoneAcceptOrDeclineLesson']);
            }
            if (data.hasOwnProperty('getNewsAnnouncementAndProductUpdates')) {
                obj['getNewsAnnouncementAndProductUpdates'] = InlineResponse2003SomeoneMessagedMe.constructFromObject(data['getNewsAnnouncementAndProductUpdates']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2003SomeoneMessagedMe} someoneMessagedMe
 */
InlineObject5.prototype['someoneMessagedMe'] = undefined;

/**
 * @member {module:model/InlineResponse2003SomeoneMessagedMe} anyoneLeftMeAReview
 */
InlineObject5.prototype['anyoneLeftMeAReview'] = undefined;

/**
 * @member {module:model/InlineResponse2003SomeoneMessagedMe} anyoneCancelledLesson
 */
InlineObject5.prototype['anyoneCancelledLesson'] = undefined;

/**
 * @member {module:model/InlineResponse2003SomeoneMessagedMe} anyoneAcceptOrDeclineLesson
 */
InlineObject5.prototype['anyoneAcceptOrDeclineLesson'] = undefined;

/**
 * @member {module:model/InlineResponse2003SomeoneMessagedMe} getNewsAnnouncementAndProductUpdates
 */
InlineObject5.prototype['getNewsAnnouncementAndProductUpdates'] = undefined;






export default InlineObject5;

