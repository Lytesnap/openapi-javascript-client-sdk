"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The StudentProfilePostNotificationSettings model module.
 * @module model/StudentProfilePostNotificationSettings
 * @version 1.0.4
 */
var StudentProfilePostNotificationSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudentProfilePostNotificationSettings</code>.
   * @alias module:model/StudentProfilePostNotificationSettings
   * @param messageMe {Array.<Boolean>} 
   * @param leftReview {Array.<Boolean>} 
   * @param cancelledLesson {Array.<Boolean>} 
   * @param acceptOrDeclineLesson {Array.<Boolean>} 
   * @param getNewsAndUpdates {Array.<Boolean>} 
   */
  function StudentProfilePostNotificationSettings(messageMe, leftReview, cancelledLesson, acceptOrDeclineLesson, getNewsAndUpdates) {
    _classCallCheck(this, StudentProfilePostNotificationSettings);

    StudentProfilePostNotificationSettings.initialize(this, messageMe, leftReview, cancelledLesson, acceptOrDeclineLesson, getNewsAndUpdates);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudentProfilePostNotificationSettings, null, [{
    key: "initialize",
    value: function initialize(obj, messageMe, leftReview, cancelledLesson, acceptOrDeclineLesson, getNewsAndUpdates) {
      obj['messageMe'] = messageMe;
      obj['LeftReview'] = leftReview;
      obj['cancelledLesson'] = cancelledLesson;
      obj['acceptOrDeclineLesson'] = acceptOrDeclineLesson;
      obj['getNewsAndUpdates'] = getNewsAndUpdates;
    }
    /**
     * Constructs a <code>StudentProfilePostNotificationSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentProfilePostNotificationSettings} obj Optional instance to populate.
     * @return {module:model/StudentProfilePostNotificationSettings} The populated <code>StudentProfilePostNotificationSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudentProfilePostNotificationSettings();

        if (data.hasOwnProperty('messageMe')) {
          obj['messageMe'] = _ApiClient["default"].convertToType(data['messageMe'], ['Boolean']);
        }

        if (data.hasOwnProperty('LeftReview')) {
          obj['LeftReview'] = _ApiClient["default"].convertToType(data['LeftReview'], ['Boolean']);
        }

        if (data.hasOwnProperty('cancelledLesson')) {
          obj['cancelledLesson'] = _ApiClient["default"].convertToType(data['cancelledLesson'], ['Boolean']);
        }

        if (data.hasOwnProperty('acceptOrDeclineLesson')) {
          obj['acceptOrDeclineLesson'] = _ApiClient["default"].convertToType(data['acceptOrDeclineLesson'], ['Boolean']);
        }

        if (data.hasOwnProperty('getNewsAndUpdates')) {
          obj['getNewsAndUpdates'] = _ApiClient["default"].convertToType(data['getNewsAndUpdates'], ['Boolean']);
        }
      }

      return obj;
    }
  }]);

  return StudentProfilePostNotificationSettings;
}();
/**
 * @member {Array.<Boolean>} messageMe
 */


StudentProfilePostNotificationSettings.prototype['messageMe'] = undefined;
/**
 * @member {Array.<Boolean>} LeftReview
 */

StudentProfilePostNotificationSettings.prototype['LeftReview'] = undefined;
/**
 * @member {Array.<Boolean>} cancelledLesson
 */

StudentProfilePostNotificationSettings.prototype['cancelledLesson'] = undefined;
/**
 * @member {Array.<Boolean>} acceptOrDeclineLesson
 */

StudentProfilePostNotificationSettings.prototype['acceptOrDeclineLesson'] = undefined;
/**
 * @member {Array.<Boolean>} getNewsAndUpdates
 */

StudentProfilePostNotificationSettings.prototype['getNewsAndUpdates'] = undefined;
var _default = StudentProfilePostNotificationSettings;
exports["default"] = _default;