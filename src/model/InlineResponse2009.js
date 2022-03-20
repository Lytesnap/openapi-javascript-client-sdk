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
 * The InlineResponse2009 model module.
 * @module model/InlineResponse2009
 * @version 1.0.0
 */
class InlineResponse2009 {
    /**
     * Constructs a new <code>InlineResponse2009</code>.
     * @alias module:model/InlineResponse2009
     */
    constructor() { 
        
        InlineResponse2009.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2009</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009} The populated <code>InlineResponse2009</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2009();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('userType')) {
                obj['userType'] = ApiClient.convertToType(data['userType'], 'String');
            }
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
            if (data.hasOwnProperty('userPhoto')) {
                obj['userPhoto'] = ApiClient.convertToType(data['userPhoto'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} userId
 */
InlineResponse2009.prototype['userId'] = undefined;

/**
 * @member {module:model/InlineResponse2009.UserTypeEnum} userType
 */
InlineResponse2009.prototype['userType'] = undefined;

/**
 * @member {String} userName
 */
InlineResponse2009.prototype['userName'] = undefined;

/**
 * @member {String} userPhoto
 */
InlineResponse2009.prototype['userPhoto'] = undefined;

/**
 * @member {String} date
 */
InlineResponse2009.prototype['date'] = undefined;

/**
 * @member {module:model/InlineResponse2009.ReasonEnum} reason
 */
InlineResponse2009.prototype['reason'] = undefined;

/**
 * @member {Number} rating
 */
InlineResponse2009.prototype['rating'] = undefined;

/**
 * @member {module:model/InlineResponse2009.StatusEnum} status
 */
InlineResponse2009.prototype['status'] = undefined;





/**
 * Allowed values for the <code>userType</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2009['UserTypeEnum'] = {

    /**
     * value: "Student"
     * @const
     */
    "Student": "Student",

    /**
     * value: "Coach"
     * @const
     */
    "Coach": "Coach"
};


/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2009['ReasonEnum'] = {

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
     * value: "Unspecified"
     * @const
     */
    "Unspecified": "Unspecified",

    /**
     * value: "Other"
     * @const
     */
    "Other": "Other"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2009['StatusEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "solved"
     * @const
     */
    "solved": "solved"
};



export default InlineResponse2009;
