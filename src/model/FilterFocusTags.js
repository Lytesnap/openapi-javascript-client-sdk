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
 * The FilterFocusTags model module.
 * @module model/FilterFocusTags
 * @version 1.0.4
 */
class FilterFocusTags {
    /**
     * Constructs a new <code>FilterFocusTags</code>.
     * @alias module:model/FilterFocusTags
     */
    constructor() { 
        
        FilterFocusTags.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilterFocusTags</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterFocusTags} obj Optional instance to populate.
     * @return {module:model/FilterFocusTags} The populated <code>FilterFocusTags</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilterFocusTags();

            if (data.hasOwnProperty('sport')) {
                obj['sport'] = ApiClient.convertToType(data['sport'], 'String');
            }
            if (data.hasOwnProperty('skill')) {
                obj['skill'] = ApiClient.convertToType(data['skill'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FilterFocusTags.SportEnum} sport
 */
FilterFocusTags.prototype['sport'] = undefined;

/**
 * @member {module:model/FilterFocusTags.SkillEnum} skill
 */
FilterFocusTags.prototype['skill'] = undefined;





/**
 * Allowed values for the <code>sport</code> property.
 * @enum {String}
 * @readonly
 */
FilterFocusTags['SportEnum'] = {

    /**
     * value: "Tennis"
     * @const
     */
    "Tennis": "Tennis"
};


/**
 * Allowed values for the <code>skill</code> property.
 * @enum {String}
 * @readonly
 */
FilterFocusTags['SkillEnum'] = {

    /**
     * value: "Forehand"
     * @const
     */
    "Forehand": "Forehand",

    /**
     * value: "Backhand"
     * @const
     */
    "Backhand": "Backhand",

    /**
     * value: "Top Spin"
     * @const
     */
    "Top Spin": "Top Spin",

    /**
     * value: "Serve"
     * @const
     */
    "Serve": "Serve",

    /**
     * value: "Volley"
     * @const
     */
    "Volley": "Volley"
};



export default FilterFocusTags;

