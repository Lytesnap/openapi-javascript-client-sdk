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
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 1.0.0
 */
var InlineResponse2002 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * @alias module:model/InlineResponse2002
   */
  function InlineResponse2002() {
    _classCallCheck(this, InlineResponse2002);

    InlineResponse2002.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2002, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2002();

        if (data.hasOwnProperty('incomeThisWeek')) {
          obj['incomeThisWeek'] = _ApiClient["default"].convertToType(data['incomeThisWeek'], 'Number');
        }

        if (data.hasOwnProperty('hoursWorked')) {
          obj['hoursWorked'] = _ApiClient["default"].convertToType(data['hoursWorked'], 'Number');
        }

        if (data.hasOwnProperty('numSessions')) {
          obj['numSessions'] = _ApiClient["default"].convertToType(data['numSessions'], 'Number');
        }

        if (data.hasOwnProperty('numStudents')) {
          obj['numStudents'] = _ApiClient["default"].convertToType(data['numStudents'], 'Number');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2002;
}();
/**
 * @member {Number} incomeThisWeek
 */


InlineResponse2002.prototype['incomeThisWeek'] = undefined;
/**
 * @member {Number} hoursWorked
 */

InlineResponse2002.prototype['hoursWorked'] = undefined;
/**
 * @member {Number} numSessions
 */

InlineResponse2002.prototype['numSessions'] = undefined;
/**
 * @member {Number} numStudents
 */

InlineResponse2002.prototype['numStudents'] = undefined;
/**
 * @member {Array.<Object>} data
 */

InlineResponse2002.prototype['data'] = undefined;
var _default = InlineResponse2002;
exports["default"] = _default;