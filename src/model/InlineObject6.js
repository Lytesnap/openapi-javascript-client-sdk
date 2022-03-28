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
 * The InlineObject6 model module.
 * @module model/InlineObject6
 * @version 1.0.7
 */
class InlineObject6 {
    /**
     * Constructs a new <code>InlineObject6</code>.
     * @alias module:model/InlineObject6
     * @param reason {module:model/InlineObject6.ReasonEnum} 
     */
    constructor(reason) { 
        
        InlineObject6.initialize(this, reason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, reason) { 
        obj['reason'] = reason;
    }

    /**
     * Constructs a <code>InlineObject6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject6} obj Optional instance to populate.
     * @return {module:model/InlineObject6} The populated <code>InlineObject6</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject6();

            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('additionalReason')) {
                obj['additionalReason'] = ApiClient.convertToType(data['additionalReason'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineObject6.ReasonEnum} reason
 */
InlineObject6.prototype['reason'] = undefined;

/**
 * @member {String} additionalReason
 */
InlineObject6.prototype['additionalReason'] = undefined;





/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject6['ReasonEnum'] = {

    /**
     * value: "Students rarely book lessons"
     * @const
     */
    "Students rarely book lessons": "Students rarely book lessons",

    /**
     * value: "Privacy concerns"
     * @const
     */
    "Privacy concerns": "Privacy concerns",

    /**
     * value: "Just need a break"
     * @const
     */
    "Just need a break": "Just need a break",

    /**
     * value: "Something else"
     * @const
     */
    "Something else": "Something else"
};



export default InlineObject6;

