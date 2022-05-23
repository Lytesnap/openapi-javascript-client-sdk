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
 * The FilterSpecialties model module.
 * @module model/FilterSpecialties
 * @version 1.0.12
 */
var FilterSpecialties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FilterSpecialties</code>.
   * @alias module:model/FilterSpecialties
   */
  function FilterSpecialties() {
    _classCallCheck(this, FilterSpecialties);

    FilterSpecialties.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FilterSpecialties, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FilterSpecialties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterSpecialties} obj Optional instance to populate.
     * @return {module:model/FilterSpecialties} The populated <code>FilterSpecialties</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FilterSpecialties();

        if (data.hasOwnProperty('skillLevel')) {
          obj['skillLevel'] = _ApiClient["default"].convertToType(data['skillLevel'], ['String']);
        }

        if (data.hasOwnProperty('ageRange')) {
          obj['ageRange'] = _ApiClient["default"].convertToType(data['ageRange'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return FilterSpecialties;
}();
/**
 * @member {Array.<module:model/FilterSpecialties.SkillLevelEnum>} skillLevel
 */


FilterSpecialties.prototype['skillLevel'] = undefined;
/**
 * @member {Array.<module:model/FilterSpecialties.AgeRangeEnum>} ageRange
 */

FilterSpecialties.prototype['ageRange'] = undefined;
/**
 * Allowed values for the <code>skillLevel</code> property.
 * @enum {String}
 * @readonly
 */

FilterSpecialties['SkillLevelEnum'] = {
  /**
   * value: "Beginner"
   * @const
   */
  "Beginner": "Beginner",

  /**
   * value: "Intermediate"
   * @const
   */
  "Intermediate": "Intermediate",

  /**
   * value: "Competitive"
   * @const
   */
  "Competitive": "Competitive",

  /**
   * value: "Advanced"
   * @const
   */
  "Advanced": "Advanced"
};
/**
 * Allowed values for the <code>ageRange</code> property.
 * @enum {String}
 * @readonly
 */

FilterSpecialties['AgeRangeEnum'] = {
  /**
   * value: "Kids"
   * @const
   */
  "Kids": "Kids",

  /**
   * value: "Juniors"
   * @const
   */
  "Juniors": "Juniors",

  /**
   * value: "Adults"
   * @const
   */
  "Adults": "Adults",

  /**
   * value: "Seniors"
   * @const
   */
  "Seniors": "Seniors"
};
var _default = FilterSpecialties;
exports["default"] = _default;