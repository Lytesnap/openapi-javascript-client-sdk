"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StudentProfilePostExperience = _interopRequireDefault(require("./StudentProfilePostExperience"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The StudentProfileBasicInfo model module.
 * @module model/StudentProfileBasicInfo
 * @version 1.0.0
 */
var StudentProfileBasicInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudentProfileBasicInfo</code>.
   * Student profile info
   * @alias module:model/StudentProfileBasicInfo
   * @param profileImage {String} 
   * @param fullName {String} 
   * @param phoneNumber {String} 
   * @param dateOfBirth {String} 
   * @param emailAddress {String} 
   * @param experience {Array.<module:model/StudentProfilePostExperience>} 
   */
  function StudentProfileBasicInfo(profileImage, fullName, phoneNumber, dateOfBirth, emailAddress, experience) {
    _classCallCheck(this, StudentProfileBasicInfo);

    StudentProfileBasicInfo.initialize(this, profileImage, fullName, phoneNumber, dateOfBirth, emailAddress, experience);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudentProfileBasicInfo, null, [{
    key: "initialize",
    value: function initialize(obj, profileImage, fullName, phoneNumber, dateOfBirth, emailAddress, experience) {
      obj['profileImage'] = profileImage;
      obj['fullName'] = fullName;
      obj['phoneNumber'] = phoneNumber;
      obj['dateOfBirth'] = dateOfBirth;
      obj['emailAddress'] = emailAddress;
      obj['experience'] = experience;
    }
    /**
     * Constructs a <code>StudentProfileBasicInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentProfileBasicInfo} obj Optional instance to populate.
     * @return {module:model/StudentProfileBasicInfo} The populated <code>StudentProfileBasicInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudentProfileBasicInfo();

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
      }

      return obj;
    }
  }]);

  return StudentProfileBasicInfo;
}();
/**
 * @member {String} profileImage
 */


StudentProfileBasicInfo.prototype['profileImage'] = undefined;
/**
 * @member {String} fullName
 */

StudentProfileBasicInfo.prototype['fullName'] = undefined;
/**
 * @member {String} phoneNumber
 */

StudentProfileBasicInfo.prototype['phoneNumber'] = undefined;
/**
 * @member {module:model/StudentProfileBasicInfo.GenderEnum} gender
 */

StudentProfileBasicInfo.prototype['gender'] = undefined;
/**
 * @member {String} dateOfBirth
 */

StudentProfileBasicInfo.prototype['dateOfBirth'] = undefined;
/**
 * @member {String} emailAddress
 */

StudentProfileBasicInfo.prototype['emailAddress'] = undefined;
/**
 * @member {String} aboutMe
 */

StudentProfileBasicInfo.prototype['aboutMe'] = undefined;
/**
 * @member {Array.<module:model/StudentProfilePostExperience>} experience
 */

StudentProfileBasicInfo.prototype['experience'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

StudentProfileBasicInfo['GenderEnum'] = {
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
var _default = StudentProfileBasicInfo;
exports["default"] = _default;