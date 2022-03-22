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
 * The CoachProfileTrainingLocations model module.
 * @module model/CoachProfileTrainingLocations
 * @version 1.0.0
 */
var CoachProfileTrainingLocations = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachProfileTrainingLocations</code>.
   * @alias module:model/CoachProfileTrainingLocations
   * @param name {String} 
   * @param address {String} 
   */
  function CoachProfileTrainingLocations(name, address) {
    _classCallCheck(this, CoachProfileTrainingLocations);

    CoachProfileTrainingLocations.initialize(this, name, address);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachProfileTrainingLocations, null, [{
    key: "initialize",
    value: function initialize(obj, name, address) {
      obj['name'] = name;
      obj['address'] = address;
    }
    /**
     * Constructs a <code>CoachProfileTrainingLocations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachProfileTrainingLocations} obj Optional instance to populate.
     * @return {module:model/CoachProfileTrainingLocations} The populated <code>CoachProfileTrainingLocations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachProfileTrainingLocations();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CoachProfileTrainingLocations;
}();
/**
 * @member {String} name
 */


CoachProfileTrainingLocations.prototype['name'] = undefined;
/**
 * @member {String} address
 */

CoachProfileTrainingLocations.prototype['address'] = undefined;
var _default = CoachProfileTrainingLocations;
exports["default"] = _default;