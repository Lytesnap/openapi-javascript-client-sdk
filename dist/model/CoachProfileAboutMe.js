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
 * The CoachProfileAboutMe model module.
 * @module model/CoachProfileAboutMe
 * @version 1.0.12
 */
var CoachProfileAboutMe = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachProfileAboutMe</code>.
   * @alias module:model/CoachProfileAboutMe
   */
  function CoachProfileAboutMe() {
    _classCallCheck(this, CoachProfileAboutMe);

    CoachProfileAboutMe.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachProfileAboutMe, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CoachProfileAboutMe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachProfileAboutMe} obj Optional instance to populate.
     * @return {module:model/CoachProfileAboutMe} The populated <code>CoachProfileAboutMe</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachProfileAboutMe();

        if (data.hasOwnProperty('bio')) {
          obj['bio'] = _ApiClient["default"].convertToType(data['bio'], 'String');
        }

        if (data.hasOwnProperty('teaches')) {
          obj['teaches'] = _ApiClient["default"].convertToType(data['teaches'], ['String']);
        }

        if (data.hasOwnProperty('levels')) {
          obj['levels'] = _ApiClient["default"].convertToType(data['levels'], ['String']);
        }

        if (data.hasOwnProperty('specialization')) {
          obj['specialization'] = _ApiClient["default"].convertToType(data['specialization'], ['String']);
        }

        if (data.hasOwnProperty('fastResponseRate')) {
          obj['fastResponseRate'] = _ApiClient["default"].convertToType(data['fastResponseRate'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CoachProfileAboutMe;
}();
/**
 * @member {String} bio
 */


CoachProfileAboutMe.prototype['bio'] = undefined;
/**
 * @member {Array.<module:model/CoachProfileAboutMe.TeachesEnum>} teaches
 */

CoachProfileAboutMe.prototype['teaches'] = undefined;
/**
 * @member {Array.<module:model/CoachProfileAboutMe.LevelsEnum>} levels
 */

CoachProfileAboutMe.prototype['levels'] = undefined;
/**
 * @member {Array.<module:model/CoachProfileAboutMe.SpecializationEnum>} specialization
 */

CoachProfileAboutMe.prototype['specialization'] = undefined;
/**
 * @member {Number} fastResponseRate
 */

CoachProfileAboutMe.prototype['fastResponseRate'] = undefined;
/**
 * Allowed values for the <code>teaches</code> property.
 * @enum {String}
 * @readonly
 */

CoachProfileAboutMe['TeachesEnum'] = {
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
/**
 * Allowed values for the <code>levels</code> property.
 * @enum {String}
 * @readonly
 */

CoachProfileAboutMe['LevelsEnum'] = {
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
   * value: "Advanced"
   * @const
   */
  "Advanced": "Advanced"
};
/**
 * Allowed values for the <code>specialization</code> property.
 * @enum {String}
 * @readonly
 */

CoachProfileAboutMe['SpecializationEnum'] = {
  /**
   * value: "Forehand"
   * @const
   */
  "Forehand": "Forehand",

  /**
   * value: "Backhand"
   * @const
   */
  "Backhand": "Backhand",

  /**
   * value: "Top Spin"
   * @const
   */
  "Top Spin": "Top Spin",

  /**
   * value: "Volley"
   * @const
   */
  "Volley": "Volley",

  /**
   * value: "Lob"
   * @const
   */
  "Lob": "Lob",

  /**
   * value: "Serve"
   * @const
   */
  "Serve": "Serve"
};
var _default = CoachProfileAboutMe;
exports["default"] = _default;