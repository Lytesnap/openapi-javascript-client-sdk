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
import InlineResponse2008CancellationReason from './InlineResponse2008CancellationReason';

/**
 * The InlineResponse2008 model module.
 * @module model/InlineResponse2008
 * @version 1.0.0
 */
class InlineResponse2008 {
    /**
     * Constructs a new <code>InlineResponse2008</code>.
     * @alias module:model/InlineResponse2008
     */
    constructor() { 
        
        InlineResponse2008.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2008</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008} The populated <code>InlineResponse2008</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2008();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = ApiClient.convertToType(data['photo'], 'String');
            }
            if (data.hasOwnProperty('userType')) {
                obj['userType'] = ApiClient.convertToType(data['userType'], 'String');
            }
            if (data.hasOwnProperty('numCancellations')) {
                obj['numCancellations'] = ApiClient.convertToType(data['numCancellations'], 'Number');
            }
            if (data.hasOwnProperty('cancellationReason')) {
                obj['cancellationReason'] = ApiClient.convertToType(data['cancellationReason'], [InlineResponse2008CancellationReason]);
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
InlineResponse2008.prototype['name'] = undefined;

/**
 * @member {String} photo
 */
InlineResponse2008.prototype['photo'] = undefined;

/**
 * @member {module:model/InlineResponse2008.UserTypeEnum} userType
 */
InlineResponse2008.prototype['userType'] = undefined;

/**
 * @member {Number} numCancellations
 */
InlineResponse2008.prototype['numCancellations'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse2008CancellationReason>} cancellationReason
 */
InlineResponse2008.prototype['cancellationReason'] = undefined;

/**
 * @member {Number} rating
 */
InlineResponse2008.prototype['rating'] = undefined;

/**
 * @member {module:model/InlineResponse2008.StatusEnum} status
 */
InlineResponse2008.prototype['status'] = undefined;

/**
 * @member {String} userId
 */
InlineResponse2008.prototype['userId'] = undefined;





/**
 * Allowed values for the <code>userType</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2008['UserTypeEnum'] = {

    /**
     * value: "student"
     * @const
     */
    "student": "student",

    /**
     * value: "coach"
     * @const
     */
    "coach": "coach"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2008['StatusEnum'] = {

    /**
     * value: "banned"
     * @const
     */
    "banned": "banned",

    /**
     * value: "active"
     * @const
     */
    "active": "active"
};



export default InlineResponse2008;

