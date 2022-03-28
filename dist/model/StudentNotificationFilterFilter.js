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
 * The StudentNotificationFilterFilter model module.
 * @module model/StudentNotificationFilterFilter
 * @version 1.0.4
 */
var StudentNotificationFilterFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudentNotificationFilterFilter</code>.
   * @alias module:model/StudentNotificationFilterFilter
   */
  function StudentNotificationFilterFilter() {
    _classCallCheck(this, StudentNotificationFilterFilter);

    StudentNotificationFilterFilter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudentNotificationFilterFilter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StudentNotificationFilterFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentNotificationFilterFilter} obj Optional instance to populate.
     * @return {module:model/StudentNotificationFilterFilter} The populated <code>StudentNotificationFilterFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudentNotificationFilterFilter();

        if (data.hasOwnProperty('Announcements')) {
          obj['Announcements'] = _ApiClient["default"].convertToType(data['Announcements'], 'Boolean');
        }

        if (data.hasOwnProperty('TrainingReports')) {
          obj['TrainingReports'] = _ApiClient["default"].convertToType(data['TrainingReports'], 'Boolean');
        }

        if (data.hasOwnProperty('LessonsApproved')) {
          obj['LessonsApproved'] = _ApiClient["default"].convertToType(data['LessonsApproved'], 'Boolean');
        }

        if (data.hasOwnProperty('LessonsDeclined')) {
          obj['LessonsDeclined'] = _ApiClient["default"].convertToType(data['LessonsDeclined'], 'Boolean');
        }

        if (data.hasOwnProperty('LessonsCanceled')) {
          obj['LessonsCanceled'] = _ApiClient["default"].convertToType(data['LessonsCanceled'], 'Boolean');
        }

        if (data.hasOwnProperty('PaymentUpdates')) {
          obj['PaymentUpdates'] = _ApiClient["default"].convertToType(data['PaymentUpdates'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return StudentNotificationFilterFilter;
}();
/**
 * @member {Boolean} Announcements
 * @default false
 */


StudentNotificationFilterFilter.prototype['Announcements'] = false;
/**
 * @member {Boolean} TrainingReports
 * @default false
 */

StudentNotificationFilterFilter.prototype['TrainingReports'] = false;
/**
 * @member {Boolean} LessonsApproved
 * @default false
 */

StudentNotificationFilterFilter.prototype['LessonsApproved'] = false;
/**
 * @member {Boolean} LessonsDeclined
 * @default false
 */

StudentNotificationFilterFilter.prototype['LessonsDeclined'] = false;
/**
 * @member {Boolean} LessonsCanceled
 * @default false
 */

StudentNotificationFilterFilter.prototype['LessonsCanceled'] = false;
/**
 * @member {Boolean} PaymentUpdates
 * @default false
 */

StudentNotificationFilterFilter.prototype['PaymentUpdates'] = false;
var _default = StudentNotificationFilterFilter;
exports["default"] = _default;