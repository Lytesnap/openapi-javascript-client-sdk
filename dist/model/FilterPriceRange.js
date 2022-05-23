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
 * The FilterPriceRange model module.
 * @module model/FilterPriceRange
 * @version 1.0.12
 */
var FilterPriceRange = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FilterPriceRange</code>.
   * @alias module:model/FilterPriceRange
   */
  function FilterPriceRange() {
    _classCallCheck(this, FilterPriceRange);

    FilterPriceRange.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FilterPriceRange, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FilterPriceRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterPriceRange} obj Optional instance to populate.
     * @return {module:model/FilterPriceRange} The populated <code>FilterPriceRange</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FilterPriceRange();

        if (data.hasOwnProperty('min')) {
          obj['min'] = _ApiClient["default"].convertToType(data['min'], 'Number');
        }

        if (data.hasOwnProperty('max')) {
          obj['max'] = _ApiClient["default"].convertToType(data['max'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FilterPriceRange;
}();
/**
 * @member {Number} min
 */


FilterPriceRange.prototype['min'] = undefined;
/**
 * @member {Number} max
 */

FilterPriceRange.prototype['max'] = undefined;
var _default = FilterPriceRange;
exports["default"] = _default;