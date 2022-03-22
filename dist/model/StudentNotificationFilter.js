"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StudentNotificationFilterFilter = _interopRequireDefault(require("./StudentNotificationFilterFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The StudentNotificationFilter model module.
 * @module model/StudentNotificationFilter
 * @version 1.0.0
 */
var StudentNotificationFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudentNotificationFilter</code>.
   * filters for notificaitons in student page
   * @alias module:model/StudentNotificationFilter
   * @param studentId {String} 
   * @param filter {module:model/StudentNotificationFilterFilter} 
   */
  function StudentNotificationFilter(studentId, filter) {
    _classCallCheck(this, StudentNotificationFilter);

    StudentNotificationFilter.initialize(this, studentId, filter);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudentNotificationFilter, null, [{
    key: "initialize",
    value: function initialize(obj, studentId, filter) {
      obj['studentId'] = studentId;
      obj['filter'] = filter;
    }
    /**
     * Constructs a <code>StudentNotificationFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentNotificationFilter} obj Optional instance to populate.
     * @return {module:model/StudentNotificationFilter} The populated <code>StudentNotificationFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudentNotificationFilter();

        if (data.hasOwnProperty('studentId')) {
          obj['studentId'] = _ApiClient["default"].convertToType(data['studentId'], 'String');
        }

        if (data.hasOwnProperty('filter')) {
          obj['filter'] = _StudentNotificationFilterFilter["default"].constructFromObject(data['filter']);
        }
      }

      return obj;
    }
  }]);

  return StudentNotificationFilter;
}();
/**
 * @member {String} studentId
 */


StudentNotificationFilter.prototype['studentId'] = undefined;
/**
 * @member {module:model/StudentNotificationFilterFilter} filter
 */

StudentNotificationFilter.prototype['filter'] = undefined;
var _default = StudentNotificationFilter;
exports["default"] = _default;