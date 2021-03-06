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
import CoachSessionPutProvided from './CoachSessionPutProvided';
import CoachSessionPutWhatToBring from './CoachSessionPutWhatToBring';

/**
 * The CoachSessionPut model module.
 * @module model/CoachSessionPut
 * @version 1.0.12
 */
class CoachSessionPut {
    /**
     * Constructs a new <code>CoachSessionPut</code>.
     * @alias module:model/CoachSessionPut
     * @param sport {module:model/CoachSessionPut.SportEnum} 
     * @param sessionType {module:model/CoachSessionPut.SessionTypeEnum} 
     */
    constructor(sport, sessionType) { 
        
        CoachSessionPut.initialize(this, sport, sessionType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sport, sessionType) { 
        obj['sport'] = sport;
        obj['sessionType:'] = sessionType;
    }

    /**
     * Constructs a <code>CoachSessionPut</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachSessionPut} obj Optional instance to populate.
     * @return {module:model/CoachSessionPut} The populated <code>CoachSessionPut</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoachSessionPut();

            if (data.hasOwnProperty('sport')) {
                obj['sport'] = ApiClient.convertToType(data['sport'], 'String');
            }
            if (data.hasOwnProperty('sessionPlan')) {
                obj['sessionPlan'] = ApiClient.convertToType(data['sessionPlan'], 'String');
            }
            if (data.hasOwnProperty('provided')) {
                obj['provided'] = CoachSessionPutProvided.constructFromObject(data['provided']);
            }
            if (data.hasOwnProperty('whatToBring')) {
                obj['whatToBring'] = CoachSessionPutWhatToBring.constructFromObject(data['whatToBring']);
            }
            if (data.hasOwnProperty('sessionType:')) {
                obj['sessionType:'] = ApiClient.convertToType(data['sessionType:'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CoachSessionPut.SportEnum} sport
 */
CoachSessionPut.prototype['sport'] = undefined;

/**
 * @member {String} sessionPlan
 */
CoachSessionPut.prototype['sessionPlan'] = undefined;

/**
 * @member {module:model/CoachSessionPutProvided} provided
 */
CoachSessionPut.prototype['provided'] = undefined;

/**
 * @member {module:model/CoachSessionPutWhatToBring} whatToBring
 */
CoachSessionPut.prototype['whatToBring'] = undefined;

/**
 * @member {module:model/CoachSessionPut.SessionTypeEnum} sessionType:
 */
CoachSessionPut.prototype['sessionType:'] = undefined;





/**
 * Allowed values for the <code>sport</code> property.
 * @enum {String}
 * @readonly
 */
CoachSessionPut['SportEnum'] = {

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
CoachSessionPut['SessionTypeEnum'] = {

    /**
     * value: "1-on-1"
     * @const
     */
    "1-on-1": "1-on-1"
};



export default CoachSessionPut;

