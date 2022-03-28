"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StudentProfilePostNotificationSettings = _interopRequireDefault(require("./StudentProfilePostNotificationSettings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The StudentProfileNotifications model module.
 * @module model/StudentProfileNotifications
 * @version 1.0.4
 */
var StudentProfileNotifications = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudentProfileNotifications</code>.
   * Student profile info
   * @alias module:model/StudentProfileNotifications
   */
  function StudentProfileNotifications() {
    _classCallCheck(this, StudentProfileNotifications);

    StudentProfileNotifications.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudentProfileNotifications, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StudentProfileNotifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentProfileNotifications} obj Optional instance to populate.
     * @return {module:model/StudentProfileNotifications} The populated <code>StudentProfileNotifications</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudentProfileNotifications();

        if (data.hasOwnProperty('notificationSettings')) {
          obj['notificationSettings'] = _StudentProfilePostNotificationSettings["default"].constructFromObject(data['notificationSettings']);
        }
      }

      return obj;
    }
  }]);

  return StudentProfileNotifications;
}();
/**
 * @member {module:model/StudentProfilePostNotificationSettings} notificationSettings
 */


StudentProfileNotifications.prototype['notificationSettings'] = undefined;
var _default = StudentProfileNotifications;
exports["default"] = _default;