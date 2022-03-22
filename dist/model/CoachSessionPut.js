"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CoachSessionPutProvided = _interopRequireDefault(require("./CoachSessionPutProvided"));

var _CoachSessionPutWhatToBring = _interopRequireDefault(require("./CoachSessionPutWhatToBring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CoachSessionPut model module.
 * @module model/CoachSessionPut
 * @version 1.0.0
 */
var CoachSessionPut = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachSessionPut</code>.
   * @alias module:model/CoachSessionPut
   * @param sport {module:model/CoachSessionPut.SportEnum} 
   * @param sessionType {module:model/CoachSessionPut.SessionTypeEnum} 
   */
  function CoachSessionPut(sport, sessionType) {
    _classCallCheck(this, CoachSessionPut);

    CoachSessionPut.initialize(this, sport, sessionType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachSessionPut, null, [{
    key: "initialize",
    value: function initialize(obj, sport, sessionType) {
      obj['sport'] = sport;
      obj['sessionType:'] = sessionType;
    }
    /**
     * Constructs a <code>CoachSessionPut</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachSessionPut} obj Optional instance to populate.
     * @return {module:model/CoachSessionPut} The populated <code>CoachSessionPut</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachSessionPut();

        if (data.hasOwnProperty('sport')) {
          obj['sport'] = _ApiClient["default"].convertToType(data['sport'], 'String');
        }

        if (data.hasOwnProperty('sessionPlan')) {
          obj['sessionPlan'] = _ApiClient["default"].convertToType(data['sessionPlan'], 'String');
        }

        if (data.hasOwnProperty('provided')) {
          obj['provided'] = _CoachSessionPutProvided["default"].constructFromObject(data['provided']);
        }

        if (data.hasOwnProperty('whatToBring')) {
          obj['whatToBring'] = _CoachSessionPutWhatToBring["default"].constructFromObject(data['whatToBring']);
        }

        if (data.hasOwnProperty('sessionType:')) {
          obj['sessionType:'] = _ApiClient["default"].convertToType(data['sessionType:'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CoachSessionPut;
}();
/**
 * @member {module:model/CoachSessionPut.SportEnum} sport
 */


CoachSessionPut.prototype['sport'] = undefined;
/**
 * @member {String} sessionPlan
 */

CoachSessionPut.prototype['sessionPlan'] = undefined;
/**
 * @member {module:model/CoachSessionPutProvided} provided
 */

CoachSessionPut.prototype['provided'] = undefined;
/**
 * @member {module:model/CoachSessionPutWhatToBring} whatToBring
 */

CoachSessionPut.prototype['whatToBring'] = undefined;
/**
 * @member {module:model/CoachSessionPut.SessionTypeEnum} sessionType:
 */

CoachSessionPut.prototype['sessionType:'] = undefined;
/**
 * Allowed values for the <code>sport</code> property.
 * @enum {String}
 * @readonly
 */

CoachSessionPut['SportEnum'] = {
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

CoachSessionPut['SessionTypeEnum'] = {
  /**
   * value: "1-on-1"
   * @const
   */
  "1-on-1": "1-on-1"
};
var _default = CoachSessionPut;
exports["default"] = _default;