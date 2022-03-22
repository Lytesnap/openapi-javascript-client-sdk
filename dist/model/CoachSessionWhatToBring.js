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
 * The CoachSessionWhatToBring model module.
 * @module model/CoachSessionWhatToBring
 * @version 1.0.0
 */
var CoachSessionWhatToBring = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachSessionWhatToBring</code>.
   * @alias module:model/CoachSessionWhatToBring
   * @param equipment {Array.<String>} 
   * @param apparel {Array.<String>} 
   * @param accessories {Array.<String>} 
   */
  function CoachSessionWhatToBring(equipment, apparel, accessories) {
    _classCallCheck(this, CoachSessionWhatToBring);

    CoachSessionWhatToBring.initialize(this, equipment, apparel, accessories);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachSessionWhatToBring, null, [{
    key: "initialize",
    value: function initialize(obj, equipment, apparel, accessories) {
      obj['equipment'] = equipment;
      obj['apparel'] = apparel;
      obj['accessories'] = accessories;
    }
    /**
     * Constructs a <code>CoachSessionWhatToBring</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachSessionWhatToBring} obj Optional instance to populate.
     * @return {module:model/CoachSessionWhatToBring} The populated <code>CoachSessionWhatToBring</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachSessionWhatToBring();

        if (data.hasOwnProperty('equipment')) {
          obj['equipment'] = _ApiClient["default"].convertToType(data['equipment'], ['String']);
        }

        if (data.hasOwnProperty('apparel')) {
          obj['apparel'] = _ApiClient["default"].convertToType(data['apparel'], ['String']);
        }

        if (data.hasOwnProperty('accessories')) {
          obj['accessories'] = _ApiClient["default"].convertToType(data['accessories'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CoachSessionWhatToBring;
}();
/**
 * @member {Array.<String>} equipment
 */


CoachSessionWhatToBring.prototype['equipment'] = undefined;
/**
 * @member {Array.<String>} apparel
 */

CoachSessionWhatToBring.prototype['apparel'] = undefined;
/**
 * @member {Array.<String>} accessories
 */

CoachSessionWhatToBring.prototype['accessories'] = undefined;
var _default = CoachSessionWhatToBring;
exports["default"] = _default;