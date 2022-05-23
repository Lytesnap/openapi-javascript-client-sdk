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
 * The StudentProfileExperience model module.
 * @module model/StudentProfileExperience
 * @version 1.0.12
 */
var StudentProfileExperience = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudentProfileExperience</code>.
   * @alias module:model/StudentProfileExperience
   */
  function StudentProfileExperience() {
    _classCallCheck(this, StudentProfileExperience);

    StudentProfileExperience.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudentProfileExperience, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StudentProfileExperience</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentProfileExperience} obj Optional instance to populate.
     * @return {module:model/StudentProfileExperience} The populated <code>StudentProfileExperience</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudentProfileExperience();

        if (data.hasOwnProperty('sportType')) {
          obj['sportType'] = _ApiClient["default"].convertToType(data['sportType'], 'String');
        }

        if (data.hasOwnProperty('experienceLevel')) {
          obj['experienceLevel'] = _ApiClient["default"].convertToType(data['experienceLevel'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StudentProfileExperience;
}();
/**
 * @member {module:model/StudentProfileExperience.SportTypeEnum} sportType
 */


StudentProfileExperience.prototype['sportType'] = undefined;
/**
 * @member {module:model/StudentProfileExperience.ExperienceLevelEnum} experienceLevel
 */

StudentProfileExperience.prototype['experienceLevel'] = undefined;
/**
 * Allowed values for the <code>sportType</code> property.
 * @enum {String}
 * @readonly
 */

StudentProfileExperience['SportTypeEnum'] = {
  /**
   * value: "Tennis"
   * @const
   */
  "Tennis": "Tennis",

  /**
   * value: "Baseball"
   * @const
   */
  "Baseball": "Baseball",

  /**
   * value: "Basketball"
   * @const
   */
  "Basketball": "Basketball"
};
/**
 * Allowed values for the <code>experienceLevel</code> property.
 * @enum {String}
 * @readonly
 */

StudentProfileExperience['ExperienceLevelEnum'] = {
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
   * value: "Competitor"
   * @const
   */
  "Competitor": "Competitor",

  /**
   * value: "Advanced"
   * @const
   */
  "Advanced": "Advanced"
};
var _default = StudentProfileExperience;
exports["default"] = _default;