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
import CoachSessionProvided from './CoachSessionProvided';
import CoachSessionWhatToBring from './CoachSessionWhatToBring';

/**
 * The CoachSession model module.
 * @module model/CoachSession
 * @version 1.0.4
 */
class CoachSession {
    /**
     * Constructs a new <code>CoachSession</code>.
     * @alias module:model/CoachSession
     * @param sport {module:model/CoachSession.SportEnum} 
     * @param sessionPlan {String} 
     * @param provided {module:model/CoachSessionProvided} 
     * @param whatToBring {module:model/CoachSessionWhatToBring} 
     * @param sessionType {module:model/CoachSession.SessionTypeEnum} 
     */
    constructor(sport, sessionPlan, provided, whatToBring, sessionType) { 
        
        CoachSession.initialize(this, sport, sessionPlan, provided, whatToBring, sessionType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sport, sessionPlan, provided, whatToBring, sessionType) { 
        obj['sport'] = sport;
        obj['sessionPlan'] = sessionPlan;
        obj['provided'] = provided;
        obj['whatToBring'] = whatToBring;
        obj['sessionType:'] = sessionType;
    }

    /**
     * Constructs a <code>CoachSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachSession} obj Optional instance to populate.
     * @return {module:model/CoachSession} The populated <code>CoachSession</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoachSession();

            if (data.hasOwnProperty('sport')) {
                obj['sport'] = ApiClient.convertToType(data['sport'], 'String');
            }
            if (data.hasOwnProperty('sessionPlan')) {
                obj['sessionPlan'] = ApiClient.convertToType(data['sessionPlan'], 'String');
            }
            if (data.hasOwnProperty('provided')) {
                obj['provided'] = CoachSessionProvided.constructFromObject(data['provided']);
            }
            if (data.hasOwnProperty('whatToBring')) {
                obj['whatToBring'] = CoachSessionWhatToBring.constructFromObject(data['whatToBring']);
            }
            if (data.hasOwnProperty('sessionType:')) {
                obj['sessionType:'] = ApiClient.convertToType(data['sessionType:'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CoachSession.SportEnum} sport
 */
CoachSession.prototype['sport'] = undefined;

/**
 * @member {String} sessionPlan
 */
CoachSession.prototype['sessionPlan'] = undefined;

/**
 * @member {module:model/CoachSessionProvided} provided
 */
CoachSession.prototype['provided'] = undefined;

/**
 * @member {module:model/CoachSessionWhatToBring} whatToBring
 */
CoachSession.prototype['whatToBring'] = undefined;

/**
 * @member {module:model/CoachSession.SessionTypeEnum} sessionType:
 */
CoachSession.prototype['sessionType:'] = undefined;





/**
 * Allowed values for the <code>sport</code> property.
 * @enum {String}
 * @readonly
 */
CoachSession['SportEnum'] = {

    /**
     * value: "tennis"
     * @const
     */
    "tennis": "tennis"
};


/**
 * Allowed values for the <code>sessionType:</code> property.
 * @enum {String}
 * @readonly
 */
CoachSession['SessionTypeEnum'] = {

    /**
     * value: "1-on-1"
     * @const
     */
    "1-on-1": "1-on-1"
};



export default CoachSession;

