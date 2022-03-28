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
 * The CoachAvailabilityLocation model module.
 * @module model/CoachAvailabilityLocation
 * @version 1.0.4
 */
var CoachAvailabilityLocation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachAvailabilityLocation</code>.
   * @alias module:model/CoachAvailabilityLocation
   * @param name {String} 
   * @param locationId {String} 
   */
  function CoachAvailabilityLocation(name, locationId) {
    _classCallCheck(this, CoachAvailabilityLocation);

    CoachAvailabilityLocation.initialize(this, name, locationId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachAvailabilityLocation, null, [{
    key: "initialize",
    value: function initialize(obj, name, locationId) {
      obj['name'] = name;
      obj['locationId'] = locationId;
    }
    /**
     * Constructs a <code>CoachAvailabilityLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachAvailabilityLocation} obj Optional instance to populate.
     * @return {module:model/CoachAvailabilityLocation} The populated <code>CoachAvailabilityLocation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachAvailabilityLocation();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('locationId')) {
          obj['locationId'] = _ApiClient["default"].convertToType(data['locationId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CoachAvailabilityLocation;
}();
/**
 * @member {String} name
 */


CoachAvailabilityLocation.prototype['name'] = undefined;
/**
 * @member {String} locationId
 */

CoachAvailabilityLocation.prototype['locationId'] = undefined;
var _default = CoachAvailabilityLocation;
exports["default"] = _default;