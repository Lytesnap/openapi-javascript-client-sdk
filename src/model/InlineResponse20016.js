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
 * The InlineResponse20016 model module.
 * @module model/InlineResponse20016
 * @version 1.0.4
 */
class InlineResponse20016 {
    /**
     * Constructs a new <code>InlineResponse20016</code>.
     * @alias module:model/InlineResponse20016
     */
    constructor() { 
        
        InlineResponse20016.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20016</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20016} obj Optional instance to populate.
     * @return {module:model/InlineResponse20016} The populated <code>InlineResponse20016</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20016();

            if (data.hasOwnProperty('fullName')) {
                obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} fullName
 */
InlineResponse20016.prototype['fullName'] = undefined;

/**
 * @member {String} phoneNumber
 */
InlineResponse20016.prototype['phoneNumber'] = undefined;

/**
 * @member {module:model/InlineResponse20016.GenderEnum} gender
 */
InlineResponse20016.prototype['gender'] = undefined;

/**
 * @member {String} emailAddress
 */
InlineResponse20016.prototype['emailAddress'] = undefined;





/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20016['GenderEnum'] = {

    /**
     * value: "male"
     * @const
     */
    "male": "male",

    /**
     * value: "female"
     * @const
     */
    "female": "female",

    /**
     * value: "other"
     * @const
     */
    "other": "other"
};



export default InlineResponse20016;

