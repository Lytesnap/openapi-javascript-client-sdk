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
 * The LocationRequest model module.
 * @module model/LocationRequest
 * @version 1.0.0
 */
class LocationRequest {
    /**
     * Constructs a new <code>LocationRequest</code>.
     * A training location resource - request
     * @alias module:model/LocationRequest
     * @param address {String} 
     * @param city {String} 
     * @param state {String} 
     * @param zipcode {Number} 
     */
    constructor(address, city, state, zipcode) { 
        
        LocationRequest.initialize(this, address, city, state, zipcode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, city, state, zipcode) { 
        obj['address'] = address;
        obj['city'] = city;
        obj['state'] = state;
        obj['zipcode'] = zipcode;
    }

    /**
     * Constructs a <code>LocationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationRequest} obj Optional instance to populate.
     * @return {module:model/LocationRequest} The populated <code>LocationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationRequest();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('zipcode')) {
                obj['zipcode'] = ApiClient.convertToType(data['zipcode'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} address
 */
LocationRequest.prototype['address'] = undefined;

/**
 * @member {String} city
 */
LocationRequest.prototype['city'] = undefined;

/**
 * @member {String} state
 */
LocationRequest.prototype['state'] = undefined;

/**
 * @member {Number} zipcode
 */
LocationRequest.prototype['zipcode'] = undefined;

/**
 * @member {String} name
 */
LocationRequest.prototype['name'] = undefined;






export default LocationRequest;
