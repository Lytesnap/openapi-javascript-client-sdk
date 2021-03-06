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
import CoachProfileAboutMe from './CoachProfileAboutMe';
import CoachProfileCertificates from './CoachProfileCertificates';
import CoachProfileCredentialsAndExperience from './CoachProfileCredentialsAndExperience';
import CoachProfileFaq from './CoachProfileFaq';
import CoachProfileTrainingLocations from './CoachProfileTrainingLocations';

/**
 * The CoachProfile model module.
 * @module model/CoachProfile
 * @version 1.0.12
 */
class CoachProfile {
    /**
     * Constructs a new <code>CoachProfile</code>.
     * @alias module:model/CoachProfile
     * @param name {String} 
     * @param pricePerHr {Number} 
     * @param sport {module:model/CoachProfile.SportEnum} 
     * @param gender {module:model/CoachProfile.GenderEnum} 
     * @param aboutMe {module:model/CoachProfileAboutMe} 
     * @param credentialsAndExperience {module:model/CoachProfileCredentialsAndExperience} 
     * @param certificates {Array.<module:model/CoachProfileCertificates>} 
     * @param trainingLocations {Array.<module:model/CoachProfileTrainingLocations>} 
     */
    constructor(name, pricePerHr, sport, gender, aboutMe, credentialsAndExperience, certificates, trainingLocations) { 
        
        CoachProfile.initialize(this, name, pricePerHr, sport, gender, aboutMe, credentialsAndExperience, certificates, trainingLocations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, pricePerHr, sport, gender, aboutMe, credentialsAndExperience, certificates, trainingLocations) { 
        obj['name'] = name;
        obj['pricePerHr'] = pricePerHr;
        obj['sport'] = sport;
        obj['gender'] = gender;
        obj['aboutMe'] = aboutMe;
        obj['credentialsAndExperience'] = credentialsAndExperience;
        obj['certificates'] = certificates;
        obj['trainingLocations'] = trainingLocations;
    }

    /**
     * Constructs a <code>CoachProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachProfile} obj Optional instance to populate.
     * @return {module:model/CoachProfile} The populated <code>CoachProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoachProfile();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('pricePerHr')) {
                obj['pricePerHr'] = ApiClient.convertToType(data['pricePerHr'], 'Number');
            }
            if (data.hasOwnProperty('sport')) {
                obj['sport'] = ApiClient.convertToType(data['sport'], 'String');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('aboutMe')) {
                obj['aboutMe'] = CoachProfileAboutMe.constructFromObject(data['aboutMe']);
            }
            if (data.hasOwnProperty('credentialsAndExperience')) {
                obj['credentialsAndExperience'] = CoachProfileCredentialsAndExperience.constructFromObject(data['credentialsAndExperience']);
            }
            if (data.hasOwnProperty('photos')) {
                obj['photos'] = ApiClient.convertToType(data['photos'], ['String']);
            }
            if (data.hasOwnProperty('certificates')) {
                obj['certificates'] = ApiClient.convertToType(data['certificates'], [CoachProfileCertificates]);
            }
            if (data.hasOwnProperty('trainingLocations')) {
                obj['trainingLocations'] = ApiClient.convertToType(data['trainingLocations'], [CoachProfileTrainingLocations]);
            }
            if (data.hasOwnProperty('faq')) {
                obj['faq'] = ApiClient.convertToType(data['faq'], [CoachProfileFaq]);
            }
            if (data.hasOwnProperty('video')) {
                obj['video'] = ApiClient.convertToType(data['video'], 'String');
            }
            if (data.hasOwnProperty('profilePicture')) {
                obj['profilePicture'] = ApiClient.convertToType(data['profilePicture'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CoachProfile.prototype['name'] = undefined;

/**
 * @member {Number} pricePerHr
 */
CoachProfile.prototype['pricePerHr'] = undefined;

/**
 * @member {module:model/CoachProfile.SportEnum} sport
 */
CoachProfile.prototype['sport'] = undefined;

/**
 * @member {module:model/CoachProfile.GenderEnum} gender
 */
CoachProfile.prototype['gender'] = undefined;

/**
 * @member {module:model/CoachProfileAboutMe} aboutMe
 */
CoachProfile.prototype['aboutMe'] = undefined;

/**
 * @member {module:model/CoachProfileCredentialsAndExperience} credentialsAndExperience
 */
CoachProfile.prototype['credentialsAndExperience'] = undefined;

/**
 * @member {Array.<String>} photos
 */
CoachProfile.prototype['photos'] = undefined;

/**
 * @member {Array.<module:model/CoachProfileCertificates>} certificates
 */
CoachProfile.prototype['certificates'] = undefined;

/**
 * @member {Array.<module:model/CoachProfileTrainingLocations>} trainingLocations
 */
CoachProfile.prototype['trainingLocations'] = undefined;

/**
 * @member {Array.<module:model/CoachProfileFaq>} faq
 */
CoachProfile.prototype['faq'] = undefined;

/**
 * @member {String} video
 */
CoachProfile.prototype['video'] = undefined;

/**
 * @member {String} profilePicture
 */
CoachProfile.prototype['profilePicture'] = undefined;





/**
 * Allowed values for the <code>sport</code> property.
 * @enum {String}
 * @readonly
 */
CoachProfile['SportEnum'] = {

    /**
     * value: "Tennis"
     * @const
     */
    "Tennis": "Tennis"
};


/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
CoachProfile['GenderEnum'] = {

    /**
     * value: "Male"
     * @const
     */
    "Male": "Male",

    /**
     * value: "Female"
     * @const
     */
    "Female": "Female",

    /**
     * value: "Others"
     * @const
     */
    "Others": "Others"
};



export default CoachProfile;

