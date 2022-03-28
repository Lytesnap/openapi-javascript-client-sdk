"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2006TopCities = _interopRequireDefault(require("./InlineResponse2006TopCities"));

var _InlineResponse2006TopStates = _interopRequireDefault(require("./InlineResponse2006TopStates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse2006 model module.
 * @module model/InlineResponse2006
 * @version 1.0.4
 */
var InlineResponse2006 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2006</code>.
   * @alias module:model/InlineResponse2006
   */
  function InlineResponse2006() {
    _classCallCheck(this, InlineResponse2006);

    InlineResponse2006.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2006, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2006();

        if (data.hasOwnProperty('topStates')) {
          obj['topStates'] = _ApiClient["default"].convertToType(data['topStates'], [_InlineResponse2006TopStates["default"]]);
        }

        if (data.hasOwnProperty('topCities')) {
          obj['topCities'] = _ApiClient["default"].convertToType(data['topCities'], [_InlineResponse2006TopCities["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2006;
}();
/**
 * @member {Array.<module:model/InlineResponse2006TopStates>} topStates
 */


InlineResponse2006.prototype['topStates'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse2006TopCities>} topCities
 */

InlineResponse2006.prototype['topCities'] = undefined;
var _default = InlineResponse2006;
exports["default"] = _default;