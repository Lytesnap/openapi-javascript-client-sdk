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

/**
 * The LessonCancelRequest model module.
 * @module model/LessonCancelRequest
 * @version 1.0.0
 */
class LessonCancelRequest {
    /**
     * Constructs a new <code>LessonCancelRequest</code>.
     * This is the payload to use to submit a lesson cancel request.
     * @alias module:model/LessonCancelRequest
     * @param cancelReason {module:model/LessonCancelRequest.CancelReasonEnum} 
     */
    constructor(cancelReason) { 
        
        LessonCancelRequest.initialize(this, cancelReason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cancelReason) { 
        obj['cancelReason'] = cancelReason;
    }

    /**
     * Constructs a <code>LessonCancelRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LessonCancelRequest} obj Optional instance to populate.
     * @return {module:model/LessonCancelRequest} The populated <code>LessonCancelRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LessonCancelRequest();

            if (data.hasOwnProperty('cancelReason')) {
                obj['cancelReason'] = ApiClient.convertToType(data['cancelReason'], 'String');
            }
            if (data.hasOwnProperty('optionalComment')) {
                obj['optionalComment'] = ApiClient.convertToType(data['optionalComment'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LessonCancelRequest.CancelReasonEnum} cancelReason
 */
LessonCancelRequest.prototype['cancelReason'] = undefined;

/**
 * @member {String} optionalComment
 */
LessonCancelRequest.prototype['optionalComment'] = undefined;





/**
 * Allowed values for the <code>cancelReason</code> property.
 * @enum {String}
 * @readonly
 */
LessonCancelRequest['CancelReasonEnum'] = {

    /**
     * value: "Medical emergency"
     * @const
     */
    "Medical emergency": "Medical emergency",

    /**
     * value: "Weather"
     * @const
     */
    "Weather": "Weather",

    /**
     * value: "Other"
     * @const
     */
    "Other": "Other"
};



export default LessonCancelRequest;
