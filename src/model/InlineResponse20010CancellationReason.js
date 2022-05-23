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
 * The InlineResponse20010CancellationReason model module.
 * @module model/InlineResponse20010CancellationReason
 * @version 1.0.12
 */
class InlineResponse20010CancellationReason {
    /**
     * Constructs a new <code>InlineResponse20010CancellationReason</code>.
     * @alias module:model/InlineResponse20010CancellationReason
     */
    constructor() { 
        
        InlineResponse20010CancellationReason.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20010CancellationReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20010CancellationReason} obj Optional instance to populate.
     * @return {module:model/InlineResponse20010CancellationReason} The populated <code>InlineResponse20010CancellationReason</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20010CancellationReason();

            if (data.hasOwnProperty('reasonCategory')) {
                obj['reasonCategory'] = ApiClient.convertToType(data['reasonCategory'], 'String');
            }
            if (data.hasOwnProperty('explanation')) {
                obj['explanation'] = ApiClient.convertToType(data['explanation'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} reasonCategory
 */
InlineResponse20010CancellationReason.prototype['reasonCategory'] = undefined;

/**
 * @member {String} explanation
 */
InlineResponse20010CancellationReason.prototype['explanation'] = undefined;

/**
 * @member {String} date
 */
InlineResponse20010CancellationReason.prototype['date'] = undefined;






export default InlineResponse20010CancellationReason;
