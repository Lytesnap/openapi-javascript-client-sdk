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
 * The InlineResponse2006TopCities model module.
 * @module model/InlineResponse2006TopCities
 * @version 1.0.0
 */
var InlineResponse2006TopCities = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2006TopCities</code>.
   * @alias module:model/InlineResponse2006TopCities
   */
  function InlineResponse2006TopCities() {
    _classCallCheck(this, InlineResponse2006TopCities);

    InlineResponse2006TopCities.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2006TopCities, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2006TopCities</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006TopCities} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006TopCities} The populated <code>InlineResponse2006TopCities</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2006TopCities();

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('percentage')) {
          obj['percentage'] = _ApiClient["default"].convertToType(data['percentage'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2006TopCities;
}();
/**
 * @member {String} city
 */


InlineResponse2006TopCities.prototype['city'] = undefined;
/**
 * @member {Number} percentage
 */

InlineResponse2006TopCities.prototype['percentage'] = undefined;
var _default = InlineResponse2006TopCities;
exports["default"] = _default;