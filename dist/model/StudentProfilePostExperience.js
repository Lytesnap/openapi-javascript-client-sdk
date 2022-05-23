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
 * The StudentProfilePostExperience model module.
 * @module model/StudentProfilePostExperience
 * @version 1.0.12
 */
var StudentProfilePostExperience = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudentProfilePostExperience</code>.
   * @alias module:model/StudentProfilePostExperience
   * @param sportType {module:model/StudentProfilePostExperience.SportTypeEnum} 
   * @param experienceLevel {module:model/StudentProfilePostExperience.ExperienceLevelEnum} 
   */
  function StudentProfilePostExperience(sportType, experienceLevel) {
    _classCallCheck(this, StudentProfilePostExperience);

    StudentProfilePostExperience.initialize(this, sportType, experienceLevel);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudentProfilePostExperience, null, [{
    key: "initialize",
    value: function initialize(obj, sportType, experienceLevel) {
      obj['sportType'] = sportType;
      obj['experienceLevel'] = experienceLevel;
    }
    /**
     * Constructs a <code>StudentProfilePostExperience</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentProfilePostExperience} obj Optional instance to populate.
     * @return {module:model/StudentProfilePostExperience} The populated <code>StudentProfilePostExperience</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudentProfilePostExperience();

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

  return StudentProfilePostExperience;
}();
/**
 * @member {module:model/StudentProfilePostExperience.SportTypeEnum} sportType
 */


StudentProfilePostExperience.prototype['sportType'] = undefined;
/**
 * @member {module:model/StudentProfilePostExperience.ExperienceLevelEnum} experienceLevel
 */

StudentProfilePostExperience.prototype['experienceLevel'] = undefined;
/**
 * Allowed values for the <code>sportType</code> property.
 * @enum {String}
 * @readonly
 */

StudentProfilePostExperience['SportTypeEnum'] = {
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

StudentProfilePostExperience['ExperienceLevelEnum'] = {
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
var _default = StudentProfilePostExperience;
exports["default"] = _default;