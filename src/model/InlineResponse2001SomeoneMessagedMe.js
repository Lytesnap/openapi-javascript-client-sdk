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
 * The InlineResponse2001SomeoneMessagedMe model module.
 * @module model/InlineResponse2001SomeoneMessagedMe
 * @version 1.0.7
 */
class InlineResponse2001SomeoneMessagedMe {
    /**
     * Constructs a new <code>InlineResponse2001SomeoneMessagedMe</code>.
     * @alias module:model/InlineResponse2001SomeoneMessagedMe
     * @param email {Boolean} 
     * @param desktopAndMobile {Boolean} 
     */
    constructor(email, desktopAndMobile) { 
        
        InlineResponse2001SomeoneMessagedMe.initialize(this, email, desktopAndMobile);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, desktopAndMobile) { 
        obj['email'] = email;
        obj['desktopAndMobile'] = desktopAndMobile;
    }

    /**
     * Constructs a <code>InlineResponse2001SomeoneMessagedMe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001SomeoneMessagedMe} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001SomeoneMessagedMe} The populated <code>InlineResponse2001SomeoneMessagedMe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001SomeoneMessagedMe();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'Boolean');
            }
            if (data.hasOwnProperty('desktopAndMobile')) {
                obj['desktopAndMobile'] = ApiClient.convertToType(data['desktopAndMobile'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} email
 */
InlineResponse2001SomeoneMessagedMe.prototype['email'] = undefined;

/**
 * @member {Boolean} desktopAndMobile
 */
InlineResponse2001SomeoneMessagedMe.prototype['desktopAndMobile'] = undefined;






export default InlineResponse2001SomeoneMessagedMe;

