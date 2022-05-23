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
 * The CoachNotificationAdditionalInfoLessonInfo model module.
 * @module model/CoachNotificationAdditionalInfoLessonInfo
 * @version 1.0.12
 */
var CoachNotificationAdditionalInfoLessonInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachNotificationAdditionalInfoLessonInfo</code>.
   * @alias module:model/CoachNotificationAdditionalInfoLessonInfo
   * @param timestamp {String} 
   * @param startTime {String} 
   * @param endTime {String} 
   * @param locationName {String} 
   * @param lessonId {String} 
   */
  function CoachNotificationAdditionalInfoLessonInfo(timestamp, startTime, endTime, locationName, lessonId) {
    _classCallCheck(this, CoachNotificationAdditionalInfoLessonInfo);

    CoachNotificationAdditionalInfoLessonInfo.initialize(this, timestamp, startTime, endTime, locationName, lessonId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachNotificationAdditionalInfoLessonInfo, null, [{
    key: "initialize",
    value: function initialize(obj, timestamp, startTime, endTime, locationName, lessonId) {
      obj['timestamp'] = timestamp;
      obj['startTime'] = startTime;
      obj['endTime'] = endTime;
      obj['locationName'] = locationName;
      obj['lessonId'] = lessonId;
    }
    /**
     * Constructs a <code>CoachNotificationAdditionalInfoLessonInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachNotificationAdditionalInfoLessonInfo} obj Optional instance to populate.
     * @return {module:model/CoachNotificationAdditionalInfoLessonInfo} The populated <code>CoachNotificationAdditionalInfoLessonInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachNotificationAdditionalInfoLessonInfo();

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'String');
        }

        if (data.hasOwnProperty('startTime')) {
          obj['startTime'] = _ApiClient["default"].convertToType(data['startTime'], 'String');
        }

        if (data.hasOwnProperty('endTime')) {
          obj['endTime'] = _ApiClient["default"].convertToType(data['endTime'], 'String');
        }

        if (data.hasOwnProperty('locationName')) {
          obj['locationName'] = _ApiClient["default"].convertToType(data['locationName'], 'String');
        }

        if (data.hasOwnProperty('lessonId')) {
          obj['lessonId'] = _ApiClient["default"].convertToType(data['lessonId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CoachNotificationAdditionalInfoLessonInfo;
}();
/**
 * @member {String} timestamp
 */


CoachNotificationAdditionalInfoLessonInfo.prototype['timestamp'] = undefined;
/**
 * @member {String} startTime
 */

CoachNotificationAdditionalInfoLessonInfo.prototype['startTime'] = undefined;
/**
 * @member {String} endTime
 */

CoachNotificationAdditionalInfoLessonInfo.prototype['endTime'] = undefined;
/**
 * @member {String} locationName
 */

CoachNotificationAdditionalInfoLessonInfo.prototype['locationName'] = undefined;
/**
 * @member {String} lessonId
 */

CoachNotificationAdditionalInfoLessonInfo.prototype['lessonId'] = undefined;
var _default = CoachNotificationAdditionalInfoLessonInfo;
exports["default"] = _default;