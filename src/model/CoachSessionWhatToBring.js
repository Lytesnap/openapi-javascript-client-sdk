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
 * The CoachSessionWhatToBring model module.
 * @module model/CoachSessionWhatToBring
 * @version 1.0.12
 */
class CoachSessionWhatToBring {
    /**
     * Constructs a new <code>CoachSessionWhatToBring</code>.
     * @alias module:model/CoachSessionWhatToBring
     * @param equipment {Array.<String>} 
     * @param apparel {Array.<String>} 
     * @param accessories {Array.<String>} 
     */
    constructor(equipment, apparel, accessories) { 
        
        CoachSessionWhatToBring.initialize(this, equipment, apparel, accessories);
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
     * Constructs a <code>CoachSessionWhatToBring</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachSessionWhatToBring} obj Optional instance to populate.
     * @return {module:model/CoachSessionWhatToBring} The populated <code>CoachSessionWhatToBring</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoachSessionWhatToBring();

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
CoachSessionWhatToBring.prototype['equipment'] = undefined;

/**
 * @member {Array.<String>} apparel
 */
CoachSessionWhatToBring.prototype['apparel'] = undefined;

/**
 * @member {Array.<String>} accessories
 */
CoachSessionWhatToBring.prototype['accessories'] = undefined;






export default CoachSessionWhatToBring;

