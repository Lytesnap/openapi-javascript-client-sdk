"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StudentProfilePostExperience = _interopRequireDefault(require("./StudentProfilePostExperience"));

var _StudentProfilePostNotificationSettings = _interopRequireDefault(require("./StudentProfilePostNotificationSettings"));

var _StudentProfilePostPaymentMethods = _interopRequireDefault(require("./StudentProfilePostPaymentMethods"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The StudentProfilePost model module.
 * @module model/StudentProfilePost
 * @version 1.0.12
 */
var StudentProfilePost = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudentProfilePost</code>.
   * Student profile info
   * @alias module:model/StudentProfilePost
   * @param studentId {String} 
   * @param profileImage {String} 
   * @param fullName {String} 
   * @param phoneNumber {String} 
   * @param dateOfBirth {String} 
   * @param emailAddress {String} 
   * @param aboutMe {String} 
   * @param experience {Array.<module:model/StudentProfilePostExperience>} 
   * @param paymentMethods {Array.<module:model/StudentProfilePostPaymentMethods>} 
   * @param notificationSettings {module:model/StudentProfilePostNotificationSettings} 
   */
  function StudentProfilePost(studentId, profileImage, fullName, phoneNumber, dateOfBirth, emailAddress, aboutMe, experience, paymentMethods, notificationSettings) {
    _classCallCheck(this, StudentProfilePost);

    StudentProfilePost.initialize(this, studentId, profileImage, fullName, phoneNumber, dateOfBirth, emailAddress, aboutMe, experience, paymentMethods, notificationSettings);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudentProfilePost, null, [{
    key: "initialize",
    value: function initialize(obj, studentId, profileImage, fullName, phoneNumber, dateOfBirth, emailAddress, aboutMe, experience, paymentMethods, notificationSettings) {
      obj['studentId'] = studentId;
      obj['profileImage'] = profileImage;
      obj['fullName'] = fullName;
      obj['phoneNumber'] = phoneNumber;
      obj['dateOfBirth'] = dateOfBirth;
      obj['emailAddress'] = emailAddress;
      obj['aboutMe'] = aboutMe;
      obj['experience'] = experience;
      obj['paymentMethods'] = paymentMethods;
      obj['notificationSettings'] = notificationSettings;
    }
    /**
     * Constructs a <code>StudentProfilePost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentProfilePost} obj Optional instance to populate.
     * @return {module:model/StudentProfilePost} The populated <code>StudentProfilePost</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudentProfilePost();

        if (data.hasOwnProperty('studentId')) {
          obj['studentId'] = _ApiClient["default"].convertToType(data['studentId'], 'String');
        }

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
          obj['experience'] = _ApiClient["default"].convertToType(data['experience'], [_StudentProfilePostExperience["default"]]);
        }

        if (data.hasOwnProperty('paymentMethods')) {
          obj['paymentMethods'] = _ApiClient["default"].convertToType(data['paymentMethods'], [_StudentProfilePostPaymentMethods["default"]]);
        }

        if (data.hasOwnProperty('notificationSettings')) {
          obj['notificationSettings'] = _StudentProfilePostNotificationSettings["default"].constructFromObject(data['notificationSettings']);
        }
      }

      return obj;
    }
  }]);

  return StudentProfilePost;
}();
/**
 * @member {String} studentId
 */


StudentProfilePost.prototype['studentId'] = undefined;
/**
 * @member {String} profileImage
 */

StudentProfilePost.prototype['profileImage'] = undefined;
/**
 * @member {String} fullName
 */

StudentProfilePost.prototype['fullName'] = undefined;
/**
 * @member {String} phoneNumber
 */

StudentProfilePost.prototype['phoneNumber'] = undefined;
/**
 * @member {module:model/StudentProfilePost.GenderEnum} gender
 */

StudentProfilePost.prototype['gender'] = undefined;
/**
 * @member {String} dateOfBirth
 */

StudentProfilePost.prototype['dateOfBirth'] = undefined;
/**
 * @member {String} emailAddress
 */

StudentProfilePost.prototype['emailAddress'] = undefined;
/**
 * @member {String} aboutMe
 */

StudentProfilePost.prototype['aboutMe'] = undefined;
/**
 * @member {Array.<module:model/StudentProfilePostExperience>} experience
 */

StudentProfilePost.prototype['experience'] = undefined;
/**
 * @member {Array.<module:model/StudentProfilePostPaymentMethods>} paymentMethods
 */

StudentProfilePost.prototype['paymentMethods'] = undefined;
/**
 * @member {module:model/StudentProfilePostNotificationSettings} notificationSettings
 */

StudentProfilePost.prototype['notificationSettings'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

StudentProfilePost['GenderEnum'] = {
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
var _default = StudentProfilePost;
exports["default"] = _default;