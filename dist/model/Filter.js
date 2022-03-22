"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterFocusTags = _interopRequireDefault(require("./FilterFocusTags"));

var _FilterPriceRange = _interopRequireDefault(require("./FilterPriceRange"));

var _FilterSchedule = _interopRequireDefault(require("./FilterSchedule"));

var _FilterSpecialties = _interopRequireDefault(require("./FilterSpecialties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Filter model module.
 * @module model/Filter
 * @version 1.0.0
 */
var Filter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Filter</code>.
   * Single user saved filter
   * @alias module:model/Filter
   * @param filterName {String} 
   */
  function Filter(filterName) {
    _classCallCheck(this, Filter);

    Filter.initialize(this, filterName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Filter, null, [{
    key: "initialize",
    value: function initialize(obj, filterName) {
      obj['filterName'] = filterName;
    }
    /**
     * Constructs a <code>Filter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Filter} obj Optional instance to populate.
     * @return {module:model/Filter} The populated <code>Filter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Filter();

        if (data.hasOwnProperty('filterName')) {
          obj['filterName'] = _ApiClient["default"].convertToType(data['filterName'], 'String');
        }

        if (data.hasOwnProperty('focusTags')) {
          obj['focusTags'] = _ApiClient["default"].convertToType(data['focusTags'], [_FilterFocusTags["default"]]);
        }

        if (data.hasOwnProperty('priceRange')) {
          obj['priceRange'] = _FilterPriceRange["default"].constructFromObject(data['priceRange']);
        }

        if (data.hasOwnProperty('distance')) {
          obj['distance'] = _ApiClient["default"].convertToType(data['distance'], 'Number');
        }

        if (data.hasOwnProperty('schedule')) {
          obj['schedule'] = _FilterSchedule["default"].constructFromObject(data['schedule']);
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('specialties')) {
          obj['specialties'] = _FilterSpecialties["default"].constructFromObject(data['specialties']);
        }
      }

      return obj;
    }
  }]);

  return Filter;
}();
/**
 * @member {String} filterName
 */


Filter.prototype['filterName'] = undefined;
/**
 * @member {Array.<module:model/FilterFocusTags>} focusTags
 */

Filter.prototype['focusTags'] = undefined;
/**
 * @member {module:model/FilterPriceRange} priceRange
 */

Filter.prototype['priceRange'] = undefined;
/**
 * @member {Number} distance
 */

Filter.prototype['distance'] = undefined;
/**
 * @member {module:model/FilterSchedule} schedule
 */

Filter.prototype['schedule'] = undefined;
/**
 * @member {module:model/Filter.GenderEnum} gender
 */

Filter.prototype['gender'] = undefined;
/**
 * @member {module:model/FilterSpecialties} specialties
 */

Filter.prototype['specialties'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

Filter['GenderEnum'] = {
  /**
   * value: "Any"
   * @const
   */
  "Any": "Any",

  /**
   * value: "Female"
   * @const
   */
  "Female": "Female",

  /**
   * value: "Male"
   * @const
   */
  "Male": "Male",

  /**
   * value: "Others"
   * @const
   */
  "Others": "Others"
};
var _default = Filter;
exports["default"] = _default;