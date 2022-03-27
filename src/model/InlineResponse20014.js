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
 * The InlineResponse20014 model module.
 * @module model/InlineResponse20014
 * @version 1.0.4
 */
class InlineResponse20014 {
    /**
     * Constructs a new <code>InlineResponse20014</code>.
     * @alias module:model/InlineResponse20014
     */
    constructor() { 
        
        InlineResponse20014.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20014</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20014} obj Optional instance to populate.
     * @return {module:model/InlineResponse20014} The populated <code>InlineResponse20014</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20014();

            if (data.hasOwnProperty('featureName')) {
                obj['featureName'] = ApiClient.convertToType(data['featureName'], 'String');
            }
            if (data.hasOwnProperty('featureId')) {
                obj['featureId'] = ApiClient.convertToType(data['featureId'], 'String');
            }
            if (data.hasOwnProperty('dateImplemented')) {
                obj['dateImplemented'] = ApiClient.convertToType(data['dateImplemented'], 'String');
            }
            if (data.hasOwnProperty('numberOfFeedback')) {
                obj['numberOfFeedback'] = ApiClient.convertToType(data['numberOfFeedback'], 'Number');
            }
            if (data.hasOwnProperty('averageRating')) {
                obj['averageRating'] = ApiClient.convertToType(data['averageRating'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} featureName
 */
InlineResponse20014.prototype['featureName'] = undefined;

/**
 * @member {String} featureId
 */
InlineResponse20014.prototype['featureId'] = undefined;

/**
 * @member {String} dateImplemented
 */
InlineResponse20014.prototype['dateImplemented'] = undefined;

/**
 * @member {Number} numberOfFeedback
 */
InlineResponse20014.prototype['numberOfFeedback'] = undefined;

/**
 * @member {Number} averageRating
 */
InlineResponse20014.prototype['averageRating'] = undefined;






export default InlineResponse20014;

