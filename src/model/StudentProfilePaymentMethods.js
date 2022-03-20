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
 * The StudentProfilePaymentMethods model module.
 * @module model/StudentProfilePaymentMethods
 * @version 1.0.0
 */
class StudentProfilePaymentMethods {
    /**
     * Constructs a new <code>StudentProfilePaymentMethods</code>.
     * @alias module:model/StudentProfilePaymentMethods
     */
    constructor() { 
        
        StudentProfilePaymentMethods.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StudentProfilePaymentMethods</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentProfilePaymentMethods} obj Optional instance to populate.
     * @return {module:model/StudentProfilePaymentMethods} The populated <code>StudentProfilePaymentMethods</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StudentProfilePaymentMethods();

            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('paymentMethodId')) {
                obj['paymentMethodId'] = ApiClient.convertToType(data['paymentMethodId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} default
 * @default true
 */
StudentProfilePaymentMethods.prototype['default'] = true;

/**
 * @member {String} paymentMethodId
 */
StudentProfilePaymentMethods.prototype['paymentMethodId'] = undefined;






export default StudentProfilePaymentMethods;
