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
 * The InlineObject9 model module.
 * @module model/InlineObject9
 * @version 1.0.12
 */
class InlineObject9 {
    /**
     * Constructs a new <code>InlineObject9</code>.
     * @alias module:model/InlineObject9
     * @param certificateId {String} 
     * @param result {module:model/InlineObject9.ResultEnum} 
     */
    constructor(certificateId, result) { 
        
        InlineObject9.initialize(this, certificateId, result);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, certificateId, result) { 
        obj['certificateId'] = certificateId;
        obj['result'] = result;
    }

    /**
     * Constructs a <code>InlineObject9</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject9} obj Optional instance to populate.
     * @return {module:model/InlineObject9} The populated <code>InlineObject9</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject9();

            if (data.hasOwnProperty('certificateId')) {
                obj['certificateId'] = ApiClient.convertToType(data['certificateId'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'String');
            }
            if (data.hasOwnProperty('reasonIfDeclined')) {
                obj['reasonIfDeclined'] = ApiClient.convertToType(data['reasonIfDeclined'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} certificateId
 */
InlineObject9.prototype['certificateId'] = undefined;

/**
 * @member {module:model/InlineObject9.ResultEnum} result
 */
InlineObject9.prototype['result'] = undefined;

/**
 * @member {String} reasonIfDeclined
 */
InlineObject9.prototype['reasonIfDeclined'] = undefined;





/**
 * Allowed values for the <code>result</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject9['ResultEnum'] = {

    /**
     * value: "approved"
     * @const
     */
    "approved": "approved",

    /**
     * value: "declined"
     * @const
     */
    "declined": "declined"
};



export default InlineObject9;

