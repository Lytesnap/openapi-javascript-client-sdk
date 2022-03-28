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
 * The CoachReview model module.
 * @module model/CoachReview
 * @version 1.0.7
 */
class CoachReview {
    /**
     * Constructs a new <code>CoachReview</code>.
     * @alias module:model/CoachReview
     * @param id {String} 
     * @param studentName {String} 
     * @param overallRating {Number} 
     * @param tags {Array.<module:model/CoachReview.TagsEnum>} 
     * @param timestamp {String} 
     * @param studentId {String} 
     * @param photo {String} 
     * @param reviewText {String} 
     */
    constructor(id, studentName, overallRating, tags, timestamp, studentId, photo, reviewText) { 
        
        CoachReview.initialize(this, id, studentName, overallRating, tags, timestamp, studentId, photo, reviewText);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, studentName, overallRating, tags, timestamp, studentId, photo, reviewText) { 
        obj['id'] = id;
        obj['studentName'] = studentName;
        obj['overallRating'] = overallRating;
        obj['tags'] = tags;
        obj['timestamp'] = timestamp;
        obj['studentId'] = studentId;
        obj['photo'] = photo;
        obj['reviewText'] = reviewText;
    }

    /**
     * Constructs a <code>CoachReview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachReview} obj Optional instance to populate.
     * @return {module:model/CoachReview} The populated <code>CoachReview</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoachReview();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('studentName')) {
                obj['studentName'] = ApiClient.convertToType(data['studentName'], 'String');
            }
            if (data.hasOwnProperty('overallRating')) {
                obj['overallRating'] = ApiClient.convertToType(data['overallRating'], 'Number');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
            }
            if (data.hasOwnProperty('studentId')) {
                obj['studentId'] = ApiClient.convertToType(data['studentId'], 'String');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = ApiClient.convertToType(data['photo'], 'String');
            }
            if (data.hasOwnProperty('reviewText')) {
                obj['reviewText'] = ApiClient.convertToType(data['reviewText'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
CoachReview.prototype['id'] = undefined;

/**
 * @member {String} studentName
 */
CoachReview.prototype['studentName'] = undefined;

/**
 * @member {Number} overallRating
 */
CoachReview.prototype['overallRating'] = undefined;

/**
 * @member {Array.<module:model/CoachReview.TagsEnum>} tags
 */
CoachReview.prototype['tags'] = undefined;

/**
 * @member {String} timestamp
 */
CoachReview.prototype['timestamp'] = undefined;

/**
 * @member {String} studentId
 */
CoachReview.prototype['studentId'] = undefined;

/**
 * @member {String} photo
 */
CoachReview.prototype['photo'] = undefined;

/**
 * @member {String} reviewText
 */
CoachReview.prototype['reviewText'] = undefined;





/**
 * Allowed values for the <code>tags</code> property.
 * @enum {String}
 * @readonly
 */
CoachReview['TagsEnum'] = {

    /**
     * value: "Friendly to kids"
     * @const
     */
    "Friendly to kids": "Friendly to kids",

    /**
     * value: "Competitive"
     * @const
     */
    "Competitive": "Competitive",

    /**
     * value: "Caring"
     * @const
     */
    "Caring": "Caring",

    /**
     * value: "Discipline"
     * @const
     */
    "Discipline": "Discipline"
};



export default CoachReview;

