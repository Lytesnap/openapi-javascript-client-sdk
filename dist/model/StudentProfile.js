"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StudentProfileExperience = _interopRequireDefault(require("./StudentProfileExperience"));

var _StudentProfileNotificationSettings = _interopRequireDefault(require("./StudentProfileNotificationSettings"));

var _StudentProfilePaymentMethods = _interopRequireDefault(require("./StudentProfilePaymentMethods"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The StudentProfile model module.
 * @module model/StudentProfile
 * @version 1.0.4
 */
var StudentProfile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudentProfile</code>.
   * Student profile info
   * @alias module:model/StudentProfile
   */
  function StudentProfile() {
    _classCallCheck(this, StudentProfile);

    StudentProfile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudentProfile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StudentProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentProfile} obj Optional instance to populate.
     * @return {module:model/StudentProfile} The populated <code>StudentProfile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudentProfile();

        if (data.hasOwnProperty('profileImage')) {
          obj['profileImage'] = _ApiClient["default"].convertToType(data['profileImage'], 'String');
        }

        if (data.hasOwnProperty('fullName')) {
          obj['fullName'] = _ApiClient["default"].convertToType(data['fullName'], 'String');
        }

        if (data.hasOwnProperty('phoneNumber')) {
          obj['phoneNumber'] = _ApiClient["default"].convertToType(data['phoneNumber'], 'String');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('dateOfBirth')) {
          obj['dateOfBirth'] = _ApiClient["default"].convertToType(data['dateOfBirth'], 'String');
        }

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }

        if (data.hasOwnProperty('aboutMe')) {
          obj['aboutMe'] = _ApiClient["default"].convertToType(data['aboutMe'], 'String');
        }

        if (data.hasOwnProperty('experience')) {
          obj['experience'] = _ApiClient["default"].convertToType(data['experience'], [_StudentProfileExperience["default"]]);
        }

        if (data.hasOwnProperty('paymentMethods')) {
          obj['paymentMethods'] = _ApiClient["default"].convertToType(data['paymentMethods'], [_StudentProfilePaymentMethods["default"]]);
        }

        if (data.hasOwnProperty('notificationSettings')) {
          obj['notificationSettings'] = _StudentProfileNotificationSettings["default"].constructFromObject(data['notificationSettings']);
        }
      }

      return obj;
    }
  }]);

  return StudentProfile;
}();
/**
 * @member {String} profileImage
 */


StudentProfile.prototype['profileImage'] = undefined;
/**
 * @member {String} fullName
 */

StudentProfile.prototype['fullName'] = undefined;
/**
 * @member {String} phoneNumber
 */

StudentProfile.prototype['phoneNumber'] = undefined;
/**
 * @member {module:model/StudentProfile.GenderEnum} gender
 */

StudentProfile.prototype['gender'] = undefined;
/**
 * @member {String} dateOfBirth
 */

StudentProfile.prototype['dateOfBirth'] = undefined;
/**
 * @member {String} emailAddress
 */

StudentProfile.prototype['emailAddress'] = undefined;
/**
 * @member {String} aboutMe
 */

StudentProfile.prototype['aboutMe'] = undefined;
/**
 * @member {Array.<module:model/StudentProfileExperience>} experience
 */

StudentProfile.prototype['experience'] = undefined;
/**
 * @member {Array.<module:model/StudentProfilePaymentMethods>} paymentMethods
 */

StudentProfile.prototype['paymentMethods'] = undefined;
/**
 * @member {module:model/StudentProfileNotificationSettings} notificationSettings
 */

StudentProfile.prototype['notificationSettings'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

StudentProfile['GenderEnum'] = {
  /**
   * value: "Male"
   * @const
   */
  "Male": "Male",

  /**
   * value: "Female"
   * @const
   */
  "Female": "Female"
};
var _default = StudentProfile;
exports["default"] = _default;