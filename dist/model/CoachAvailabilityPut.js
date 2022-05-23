"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CoachAvailabilityLocation = _interopRequireDefault(require("./CoachAvailabilityLocation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CoachAvailabilityPut model module.
 * @module model/CoachAvailabilityPut
 * @version 1.0.12
 */
var CoachAvailabilityPut = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachAvailabilityPut</code>.
   * @alias module:model/CoachAvailabilityPut
   */
  function CoachAvailabilityPut() {
    _classCallCheck(this, CoachAvailabilityPut);

    CoachAvailabilityPut.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachAvailabilityPut, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CoachAvailabilityPut</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachAvailabilityPut} obj Optional instance to populate.
     * @return {module:model/CoachAvailabilityPut} The populated <code>CoachAvailabilityPut</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachAvailabilityPut();

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('startTime')) {
          obj['startTime'] = _ApiClient["default"].convertToType(data['startTime'], 'Date');
        }

        if (data.hasOwnProperty('endTime')) {
          obj['endTime'] = _ApiClient["default"].convertToType(data['endTime'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _CoachAvailabilityLocation["default"].constructFromObject(data['location']);
        }

        if (data.hasOwnProperty('repetition')) {
          obj['repetition'] = _ApiClient["default"].convertToType(data['repetition'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CoachAvailabilityPut;
}();
/**
 * @member {String} date
 */


CoachAvailabilityPut.prototype['date'] = undefined;
/**
 * @member {Date} startTime
 */

CoachAvailabilityPut.prototype['startTime'] = undefined;
/**
 * @member {String} endTime
 */

CoachAvailabilityPut.prototype['endTime'] = undefined;
/**
 * @member {module:model/CoachAvailabilityLocation} location
 */

CoachAvailabilityPut.prototype['location'] = undefined;
/**
 * @member {module:model/CoachAvailabilityPut.RepetitionEnum} repetition
 */

CoachAvailabilityPut.prototype['repetition'] = undefined;
/**
 * Allowed values for the <code>repetition</code> property.
 * @enum {String}
 * @readonly
 */

CoachAvailabilityPut['RepetitionEnum'] = {
  /**
   * value: "Repeats weekly"
   * @const
   */
  "Repeats weekly": "Repeats weekly",

  /**
   * value: "Repeats monthly"
   * @const
   */
  "Repeats monthly": "Repeats monthly",

  /**
   * value: "Does not repeat"
   * @const
   */
  "Does not repeat": "Does not repeat"
};
var _default = CoachAvailabilityPut;
exports["default"] = _default;