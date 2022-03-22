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
 * The CoachProfileCredentialsAndExperience model module.
 * @module model/CoachProfileCredentialsAndExperience
 * @version 1.0.0
 */
var CoachProfileCredentialsAndExperience = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachProfileCredentialsAndExperience</code>.
   * @alias module:model/CoachProfileCredentialsAndExperience
   */
  function CoachProfileCredentialsAndExperience() {
    _classCallCheck(this, CoachProfileCredentialsAndExperience);

    CoachProfileCredentialsAndExperience.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachProfileCredentialsAndExperience, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CoachProfileCredentialsAndExperience</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachProfileCredentialsAndExperience} obj Optional instance to populate.
     * @return {module:model/CoachProfileCredentialsAndExperience} The populated <code>CoachProfileCredentialsAndExperience</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachProfileCredentialsAndExperience();

        if (data.hasOwnProperty('extensiveCoachingExperience')) {
          obj['extensiveCoachingExperience'] = _ApiClient["default"].convertToType(data['extensiveCoachingExperience'], 'String');
        }

        if (data.hasOwnProperty('industryRecognition')) {
          obj['industryRecognition'] = _ApiClient["default"].convertToType(data['industryRecognition'], 'String');
        }

        if (data.hasOwnProperty('trustedByStudents')) {
          obj['trustedByStudents'] = _ApiClient["default"].convertToType(data['trustedByStudents'], 'String');
        }

        if (data.hasOwnProperty('specializationNotes')) {
          obj['specializationNotes'] = _ApiClient["default"].convertToType(data['specializationNotes'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CoachProfileCredentialsAndExperience;
}();
/**
 * @member {String} extensiveCoachingExperience
 */


CoachProfileCredentialsAndExperience.prototype['extensiveCoachingExperience'] = undefined;
/**
 * @member {String} industryRecognition
 */

CoachProfileCredentialsAndExperience.prototype['industryRecognition'] = undefined;
/**
 * @member {String} trustedByStudents
 */

CoachProfileCredentialsAndExperience.prototype['trustedByStudents'] = undefined;
/**
 * @member {String} specializationNotes
 */

CoachProfileCredentialsAndExperience.prototype['specializationNotes'] = undefined;
var _default = CoachProfileCredentialsAndExperience;
exports["default"] = _default;