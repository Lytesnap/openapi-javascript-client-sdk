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
 * The InlineResponse2007 model module.
 * @module model/InlineResponse2007
 * @version 1.0.7
 */
class InlineResponse2007 {
    /**
     * Constructs a new <code>InlineResponse2007</code>.
     * @alias module:model/InlineResponse2007
     */
    constructor() { 
        
        InlineResponse2007.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2007</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007} The populated <code>InlineResponse2007</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007();

            if (data.hasOwnProperty('filterName')) {
                obj['filterName'] = ApiClient.convertToType(data['filterName'], 'String');
            }
            if (data.hasOwnProperty('filterID')) {
                obj['filterID'] = ApiClient.convertToType(data['filterID'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} filterName
 */
InlineResponse2007.prototype['filterName'] = undefined;

/**
 * @member {String} filterID
 */
InlineResponse2007.prototype['filterID'] = undefined;






export default InlineResponse2007;

