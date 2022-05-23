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
 * The FilterPriceRange model module.
 * @module model/FilterPriceRange
 * @version 1.0.12
 */
class FilterPriceRange {
    /**
     * Constructs a new <code>FilterPriceRange</code>.
     * @alias module:model/FilterPriceRange
     */
    constructor() { 
        
        FilterPriceRange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilterPriceRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterPriceRange} obj Optional instance to populate.
     * @return {module:model/FilterPriceRange} The populated <code>FilterPriceRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilterPriceRange();

            if (data.hasOwnProperty('min')) {
                obj['min'] = ApiClient.convertToType(data['min'], 'Number');
            }
            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} min
 */
FilterPriceRange.prototype['min'] = undefined;

/**
 * @member {Number} max
 */
FilterPriceRange.prototype['max'] = undefined;






export default FilterPriceRange;

