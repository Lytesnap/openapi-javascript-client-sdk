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
import FilterFocusTags from './FilterFocusTags';
import FilterPriceRange from './FilterPriceRange';
import FilterSchedule from './FilterSchedule';
import FilterSpecialties from './FilterSpecialties';

/**
 * The Filter model module.
 * @module model/Filter
 * @version 1.0.0
 */
class Filter {
    /**
     * Constructs a new <code>Filter</code>.
     * Single user saved filter
     * @alias module:model/Filter
     * @param filterName {String} 
     */
    constructor(filterName) { 
        
        Filter.initialize(this, filterName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, filterName) { 
        obj['filterName'] = filterName;
    }

    /**
     * Constructs a <code>Filter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Filter} obj Optional instance to populate.
     * @return {module:model/Filter} The populated <code>Filter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Filter();

            if (data.hasOwnProperty('filterName')) {
                obj['filterName'] = ApiClient.convertToType(data['filterName'], 'String');
            }
            if (data.hasOwnProperty('focusTags')) {
                obj['focusTags'] = ApiClient.convertToType(data['focusTags'], [FilterFocusTags]);
            }
            if (data.hasOwnProperty('priceRange')) {
                obj['priceRange'] = FilterPriceRange.constructFromObject(data['priceRange']);
            }
            if (data.hasOwnProperty('distance')) {
                obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
            }
            if (data.hasOwnProperty('schedule')) {
                obj['schedule'] = FilterSchedule.constructFromObject(data['schedule']);
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('specialties')) {
                obj['specialties'] = FilterSpecialties.constructFromObject(data['specialties']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} filterName
 */
Filter.prototype['filterName'] = undefined;

/**
 * @member {Array.<module:model/FilterFocusTags>} focusTags
 */
Filter.prototype['focusTags'] = undefined;

/**
 * @member {module:model/FilterPriceRange} priceRange
 */
Filter.prototype['priceRange'] = undefined;

/**
 * @member {Number} distance
 */
Filter.prototype['distance'] = undefined;

/**
 * @member {module:model/FilterSchedule} schedule
 */
Filter.prototype['schedule'] = undefined;

/**
 * @member {module:model/Filter.GenderEnum} gender
 */
Filter.prototype['gender'] = undefined;

/**
 * @member {module:model/FilterSpecialties} specialties
 */
Filter.prototype['specialties'] = undefined;





/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
Filter['GenderEnum'] = {

    /**
     * value: "Any"
     * @const
     */
    "Any": "Any",

    /**
     * value: "Female"
     * @const
     */
    "Female": "Female",

    /**
     * value: "Male"
     * @const
     */
    "Male": "Male",

    /**
     * value: "Others"
     * @const
     */
    "Others": "Others"
};



export default Filter;
