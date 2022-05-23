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
 * The FilterSchedule model module.
 * @module model/FilterSchedule
 * @version 1.0.12
 */
var FilterSchedule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FilterSchedule</code>.
   * @alias module:model/FilterSchedule
   */
  function FilterSchedule() {
    _classCallCheck(this, FilterSchedule);

    FilterSchedule.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FilterSchedule, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FilterSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterSchedule} obj Optional instance to populate.
     * @return {module:model/FilterSchedule} The populated <code>FilterSchedule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FilterSchedule();

        if (data.hasOwnProperty('timeOfTheDay')) {
          obj['timeOfTheDay'] = _ApiClient["default"].convertToType(data['timeOfTheDay'], ['String']);
        }

        if (data.hasOwnProperty('dayOfTheWeek')) {
          obj['dayOfTheWeek'] = _ApiClient["default"].convertToType(data['dayOfTheWeek'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return FilterSchedule;
}();
/**
 * @member {Array.<module:model/FilterSchedule.TimeOfTheDayEnum>} timeOfTheDay
 */


FilterSchedule.prototype['timeOfTheDay'] = undefined;
/**
 * @member {Array.<module:model/FilterSchedule.DayOfTheWeekEnum>} dayOfTheWeek
 */

FilterSchedule.prototype['dayOfTheWeek'] = undefined;
/**
 * Allowed values for the <code>timeOfTheDay</code> property.
 * @enum {String}
 * @readonly
 */

FilterSchedule['TimeOfTheDayEnum'] = {
  /**
   * value: "Morning"
   * @const
   */
  "Morning": "Morning",

  /**
   * value: "Late Morning"
   * @const
   */
  "Late Morning": "Late Morning",

  /**
   * value: "Afternoon"
   * @const
   */
  "Afternoon": "Afternoon",

  /**
   * value: "Late Afternoon"
   * @const
   */
  "Late Afternoon": "Late Afternoon",

  /**
   * value: "Evening"
   * @const
   */
  "Evening": "Evening",

  /**
   * value: "Late Evening"
   * @const
   */
  "Late Evening": "Late Evening"
};
/**
 * Allowed values for the <code>dayOfTheWeek</code> property.
 * @enum {String}
 * @readonly
 */

FilterSchedule['DayOfTheWeekEnum'] = {
  /**
   * value: "Sun"
   * @const
   */
  "Sun": "Sun",

  /**
   * value: "Mon"
   * @const
   */
  "Mon": "Mon",

  /**
   * value: "Tue"
   * @const
   */
  "Tue": "Tue",

  /**
   * value: "Wed"
   * @const
   */
  "Wed": "Wed",

  /**
   * value: "Thu"
   * @const
   */
  "Thu": "Thu",

  /**
   * value: "Fri"
   * @const
   */
  "Fri": "Fri",

  /**
   * value: "Sat"
   * @const
   */
  "Sat": "Sat"
};
var _default = FilterSchedule;
exports["default"] = _default;