"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CoachProfileAboutMe = _interopRequireDefault(require("./CoachProfileAboutMe"));

var _CoachProfileCertificates = _interopRequireDefault(require("./CoachProfileCertificates"));

var _CoachProfileCredentialsAndExperience = _interopRequireDefault(require("./CoachProfileCredentialsAndExperience"));

var _CoachProfileFaq = _interopRequireDefault(require("./CoachProfileFaq"));

var _CoachProfileTrainingLocations = _interopRequireDefault(require("./CoachProfileTrainingLocations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CoachProfile model module.
 * @module model/CoachProfile
 * @version 1.0.4
 */
var CoachProfile = /*#__PURE__*/function () {
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
  function CoachProfile(name, pricePerHr, sport, gender, aboutMe, credentialsAndExperience, certificates, trainingLocations) {
    _classCallCheck(this, CoachProfile);

    CoachProfile.initialize(this, name, pricePerHr, sport, gender, aboutMe, credentialsAndExperience, certificates, trainingLocations);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachProfile, null, [{
    key: "initialize",
    value: function initialize(obj, name, pricePerHr, sport, gender, aboutMe, credentialsAndExperience, certificates, trainingLocations) {
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

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachProfile();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('pricePerHr')) {
          obj['pricePerHr'] = _ApiClient["default"].convertToType(data['pricePerHr'], 'Number');
        }

        if (data.hasOwnProperty('sport')) {
          obj['sport'] = _ApiClient["default"].convertToType(data['sport'], 'String');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('aboutMe')) {
          obj['aboutMe'] = _CoachProfileAboutMe["default"].constructFromObject(data['aboutMe']);
        }

        if (data.hasOwnProperty('credentialsAndExperience')) {
          obj['credentialsAndExperience'] = _CoachProfileCredentialsAndExperience["default"].constructFromObject(data['credentialsAndExperience']);
        }

        if (data.hasOwnProperty('photos')) {
          obj['photos'] = _ApiClient["default"].convertToType(data['photos'], ['String']);
        }

        if (data.hasOwnProperty('certificates')) {
          obj['certificates'] = _ApiClient["default"].convertToType(data['certificates'], [_CoachProfileCertificates["default"]]);
        }

        if (data.hasOwnProperty('trainingLocations')) {
          obj['trainingLocations'] = _ApiClient["default"].convertToType(data['trainingLocations'], [_CoachProfileTrainingLocations["default"]]);
        }

        if (data.hasOwnProperty('faq')) {
          obj['faq'] = _ApiClient["default"].convertToType(data['faq'], [_CoachProfileFaq["default"]]);
        }

        if (data.hasOwnProperty('video')) {
          obj['video'] = _ApiClient["default"].convertToType(data['video'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CoachProfile;
}();
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
var _default = CoachProfile;
exports["default"] = _default;