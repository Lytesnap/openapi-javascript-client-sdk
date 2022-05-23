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
 * The InlineObject14 model module.
 * @module model/InlineObject14
 * @version 1.0.12
 */
class InlineObject14 {
    /**
     * Constructs a new <code>InlineObject14</code>.
     * @alias module:model/InlineObject14
     * @param fullName {String} 
     * @param email {String} 
     */
    constructor(fullName, email) { 
        
        InlineObject14.initialize(this, fullName, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fullName, email) { 
        obj['fullName'] = fullName;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>InlineObject14</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject14} obj Optional instance to populate.
     * @return {module:model/InlineObject14} The populated <code>InlineObject14</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject14();

            if (data.hasOwnProperty('fullName')) {
                obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('dataOfBirth')) {
                obj['dataOfBirth'] = ApiClient.convertToType(data['dataOfBirth'], 'Date');
            }
            if (data.hasOwnProperty('profilePicture')) {
                obj['profilePicture'] = ApiClient.convertToType(data['profilePicture'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} fullName
 */
InlineObject14.prototype['fullName'] = undefined;

/**
 * @member {String} email
 */
InlineObject14.prototype['email'] = undefined;

/**
 * @member {String} phoneNumber
 */
InlineObject14.prototype['phoneNumber'] = undefined;

/**
 * @member {module:model/InlineObject14.GenderEnum} gender
 */
InlineObject14.prototype['gender'] = undefined;

/**
 * @member {Date} dataOfBirth
 */
InlineObject14.prototype['dataOfBirth'] = undefined;

/**
 * @member {String} profilePicture
 */
InlineObject14.prototype['profilePicture'] = undefined;





/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject14['GenderEnum'] = {

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



export default InlineObject14;
