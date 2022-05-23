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
 * The LessonProblemReport model module.
 * @module model/LessonProblemReport
 * @version 1.0.12
 */
var LessonProblemReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LessonProblemReport</code>.
   * This model is used to report a problem on a lesson
   * @alias module:model/LessonProblemReport
   * @param problem {module:model/LessonProblemReport.ProblemEnum} 
   */
  function LessonProblemReport(problem) {
    _classCallCheck(this, LessonProblemReport);

    LessonProblemReport.initialize(this, problem);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LessonProblemReport, null, [{
    key: "initialize",
    value: function initialize(obj, problem) {
      obj['problem'] = problem;
    }
    /**
     * Constructs a <code>LessonProblemReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LessonProblemReport} obj Optional instance to populate.
     * @return {module:model/LessonProblemReport} The populated <code>LessonProblemReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LessonProblemReport();

        if (data.hasOwnProperty('problem')) {
          obj['problem'] = _ApiClient["default"].convertToType(data['problem'], 'String');
        }

        if (data.hasOwnProperty('optionalComment')) {
          obj['optionalComment'] = _ApiClient["default"].convertToType(data['optionalComment'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LessonProblemReport;
}();
/**
 * @member {module:model/LessonProblemReport.ProblemEnum} problem
 */


LessonProblemReport.prototype['problem'] = undefined;
/**
 * @member {String} optionalComment
 */

LessonProblemReport.prototype['optionalComment'] = undefined;
/**
 * Allowed values for the <code>problem</code> property.
 * @enum {String}
 * @readonly
 */

LessonProblemReport['ProblemEnum'] = {
  /**
   * value: "late"
   * @const
   */
  "late": "late",

  /**
   * value: "no-show"
   * @const
   */
  "no-show": "no-show",

  /**
   * value: "boorish-behavior"
   * @const
   */
  "boorish-behavior": "boorish-behavior",

  /**
   * value: "other"
   * @const
   */
  "other": "other"
};
var _default = LessonProblemReport;
exports["default"] = _default;