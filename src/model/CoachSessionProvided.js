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
 * The CoachSessionProvided model module.
 * @module model/CoachSessionProvided
 * @version 1.0.0
 */
class CoachSessionProvided {
    /**
     * Constructs a new <code>CoachSessionProvided</code>.
     * @alias module:model/CoachSessionProvided
     * @param equipment {Array.<String>} 
     * @param apparel {Array.<String>} 
     * @param accessories {Array.<String>} 
     */
    constructor(equipment, apparel, accessories) { 
        
        CoachSessionProvided.initialize(this, equipment, apparel, accessories);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, equipment, apparel, accessories) { 
        obj['equipment'] = equipment;
        obj['apparel'] = apparel;
        obj['accessories'] = accessories;
    }

    /**
     * Constructs a <code>CoachSessionProvided</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachSessionProvided} obj Optional instance to populate.
     * @return {module:model/CoachSessionProvided} The populated <code>CoachSessionProvided</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoachSessionProvided();

            if (data.hasOwnProperty('equipment')) {
                obj['equipment'] = ApiClient.convertToType(data['equipment'], ['String']);
            }
            if (data.hasOwnProperty('apparel')) {
                obj['apparel'] = ApiClient.convertToType(data['apparel'], ['String']);
            }
            if (data.hasOwnProperty('accessories')) {
                obj['accessories'] = ApiClient.convertToType(data['accessories'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} equipment
 */
CoachSessionProvided.prototype['equipment'] = undefined;

/**
 * @member {Array.<String>} apparel
 */
CoachSessionProvided.prototype['apparel'] = undefined;

/**
 * @member {Array.<String>} accessories
 */
CoachSessionProvided.prototype['accessories'] = undefined;






export default CoachSessionProvided;
