"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CoachSessionProvided = _interopRequireDefault(require("./CoachSessionProvided"));

var _CoachSessionWhatToBring = _interopRequireDefault(require("./CoachSessionWhatToBring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CoachSession model module.
 * @module model/CoachSession
 * @version 1.0.4
 */
var CoachSession = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachSession</code>.
   * @alias module:model/CoachSession
   * @param sport {module:model/CoachSession.SportEnum} 
   * @param sessionPlan {String} 
   * @param provided {module:model/CoachSessionProvided} 
   * @param whatToBring {module:model/CoachSessionWhatToBring} 
   * @param sessionType {module:model/CoachSession.SessionTypeEnum} 
   */
  function CoachSession(sport, sessionPlan, provided, whatToBring, sessionType) {
    _classCallCheck(this, CoachSession);

    CoachSession.initialize(this, sport, sessionPlan, provided, whatToBring, sessionType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachSession, null, [{
    key: "initialize",
    value: function initialize(obj, sport, sessionPlan, provided, whatToBring, sessionType) {
      obj['sport'] = sport;
      obj['sessionPlan'] = sessionPlan;
      obj['provided'] = provided;
      obj['whatToBring'] = whatToBring;
      obj['sessionType:'] = sessionType;
    }
    /**
     * Constructs a <code>CoachSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachSession} obj Optional instance to populate.
     * @return {module:model/CoachSession} The populated <code>CoachSession</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachSession();

        if (data.hasOwnProperty('sport')) {
          obj['sport'] = _ApiClient["default"].convertToType(data['sport'], 'String');
        }

        if (data.hasOwnProperty('sessionPlan')) {
          obj['sessionPlan'] = _ApiClient["default"].convertToType(data['sessionPlan'], 'String');
        }

        if (data.hasOwnProperty('provided')) {
          obj['provided'] = _CoachSessionProvided["default"].constructFromObject(data['provided']);
        }

        if (data.hasOwnProperty('whatToBring')) {
          obj['whatToBring'] = _CoachSessionWhatToBring["default"].constructFromObject(data['whatToBring']);
        }

        if (data.hasOwnProperty('sessionType:')) {
          obj['sessionType:'] = _ApiClient["default"].convertToType(data['sessionType:'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CoachSession;
}();
/**
 * @member {module:model/CoachSession.SportEnum} sport
 */


CoachSession.prototype['sport'] = undefined;
/**
 * @member {String} sessionPlan
 */

CoachSession.prototype['sessionPlan'] = undefined;
/**
 * @member {module:model/CoachSessionProvided} provided
 */

CoachSession.prototype['provided'] = undefined;
/**
 * @member {module:model/CoachSessionWhatToBring} whatToBring
 */

CoachSession.prototype['whatToBring'] = undefined;
/**
 * @member {module:model/CoachSession.SessionTypeEnum} sessionType:
 */

CoachSession.prototype['sessionType:'] = undefined;
/**
 * Allowed values for the <code>sport</code> property.
 * @enum {String}
 * @readonly
 */

CoachSession['SportEnum'] = {
  /**
   * value: "tennis"
   * @const
   */
  "tennis": "tennis"
};
/**
 * Allowed values for the <code>sessionType:</code> property.
 * @enum {String}
 * @readonly
 */

CoachSession['SessionTypeEnum'] = {
  /**
   * value: "1-on-1"
   * @const
   */
  "1-on-1": "1-on-1"
};
var _default = CoachSession;
exports["default"] = _default;