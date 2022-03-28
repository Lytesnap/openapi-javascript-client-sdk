"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LessonStudentInfo = _interopRequireDefault(require("./LessonStudentInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Lesson model module.
 * @module model/Lesson
 * @version 1.0.4
 */
var Lesson = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Lesson</code>.
   * Lesson Model
   * @alias module:model/Lesson
   * @param lessonId {String} 
   * @param lessonType {module:model/Lesson.LessonTypeEnum} 
   * @param startTime {Date} 
   * @param endTime {Date} 
   * @param locationId {String} 
   * @param coachId {String} 
   * @param bookerId {String} 
   * @param paymentMethodId {String} 
   * @param status {module:model/Lesson.StatusEnum} 
   */
  function Lesson(lessonId, lessonType, startTime, endTime, locationId, coachId, bookerId, paymentMethodId, status) {
    _classCallCheck(this, Lesson);

    Lesson.initialize(this, lessonId, lessonType, startTime, endTime, locationId, coachId, bookerId, paymentMethodId, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Lesson, null, [{
    key: "initialize",
    value: function initialize(obj, lessonId, lessonType, startTime, endTime, locationId, coachId, bookerId, paymentMethodId, status) {
      obj['lessonId'] = lessonId;
      obj['lessonType'] = lessonType;
      obj['startTime'] = startTime;
      obj['endTime'] = endTime;
      obj['locationId'] = locationId;
      obj['coachId'] = coachId;
      obj['bookerId'] = bookerId;
      obj['paymentMethodId'] = paymentMethodId;
      obj['status'] = status;
    }
    /**
     * Constructs a <code>Lesson</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Lesson} obj Optional instance to populate.
     * @return {module:model/Lesson} The populated <code>Lesson</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Lesson();

        if (data.hasOwnProperty('lessonId')) {
          obj['lessonId'] = _ApiClient["default"].convertToType(data['lessonId'], 'String');
        }

        if (data.hasOwnProperty('lessonType')) {
          obj['lessonType'] = _ApiClient["default"].convertToType(data['lessonType'], 'String');
        }

        if (data.hasOwnProperty('startTime')) {
          obj['startTime'] = _ApiClient["default"].convertToType(data['startTime'], 'Date');
        }

        if (data.hasOwnProperty('endTime')) {
          obj['endTime'] = _ApiClient["default"].convertToType(data['endTime'], 'Date');
        }

        if (data.hasOwnProperty('locationId')) {
          obj['locationId'] = _ApiClient["default"].convertToType(data['locationId'], 'String');
        }

        if (data.hasOwnProperty('coachId')) {
          obj['coachId'] = _ApiClient["default"].convertToType(data['coachId'], 'String');
        }

        if (data.hasOwnProperty('bookerId')) {
          obj['bookerId'] = _ApiClient["default"].convertToType(data['bookerId'], 'String');
        }

        if (data.hasOwnProperty('paymentMethodId')) {
          obj['paymentMethodId'] = _ApiClient["default"].convertToType(data['paymentMethodId'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('studentInfo')) {
          obj['studentInfo'] = _LessonStudentInfo["default"].constructFromObject(data['studentInfo']);
        }
      }

      return obj;
    }
  }]);

  return Lesson;
}();
/**
 * @member {String} lessonId
 */


Lesson.prototype['lessonId'] = undefined;
/**
 * @member {module:model/Lesson.LessonTypeEnum} lessonType
 */

Lesson.prototype['lessonType'] = undefined;
/**
 * @member {Date} startTime
 */

Lesson.prototype['startTime'] = undefined;
/**
 * @member {Date} endTime
 */

Lesson.prototype['endTime'] = undefined;
/**
 * @member {String} locationId
 */

Lesson.prototype['locationId'] = undefined;
/**
 * @member {String} coachId
 */

Lesson.prototype['coachId'] = undefined;
/**
 * @member {String} bookerId
 */

Lesson.prototype['bookerId'] = undefined;
/**
 * @member {String} paymentMethodId
 */

Lesson.prototype['paymentMethodId'] = undefined;
/**
 * @member {module:model/Lesson.StatusEnum} status
 */

Lesson.prototype['status'] = undefined;
/**
 * @member {module:model/LessonStudentInfo} studentInfo
 */

Lesson.prototype['studentInfo'] = undefined;
/**
 * Allowed values for the <code>lessonType</code> property.
 * @enum {String}
 * @readonly
 */

Lesson['LessonTypeEnum'] = {
  /**
   * value: "1-on-1"
   * @const
   */
  "1-on-1": "1-on-1"
};
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

Lesson['StatusEnum'] = {
  /**
   * value: "pending"
   * @const
   */
  "pending": "pending",

  /**
   * value: "accepted"
   * @const
   */
  "accepted": "accepted",

  /**
   * value: "rejected"
   * @const
   */
  "rejected": "rejected",

  /**
   * value: "cancelled"
   * @const
   */
  "cancelled": "cancelled"
};
var _default = Lesson;
exports["default"] = _default;