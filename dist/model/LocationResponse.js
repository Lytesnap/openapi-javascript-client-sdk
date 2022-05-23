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
 * The LocationResponse model module.
 * @module model/LocationResponse
 * @version 1.0.12
 */
var LocationResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LocationResponse</code>.
   * A training location resource - response
   * @alias module:model/LocationResponse
   * @param address {String} 
   * @param latitude {Number} 
   * @param longtitude {Number} 
   * @param coachId {String} 
   */
  function LocationResponse(address, latitude, longtitude, coachId) {
    _classCallCheck(this, LocationResponse);

    LocationResponse.initialize(this, address, latitude, longtitude, coachId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LocationResponse, null, [{
    key: "initialize",
    value: function initialize(obj, address, latitude, longtitude, coachId) {
      obj['address'] = address;
      obj['latitude'] = latitude;
      obj['longtitude'] = longtitude;
      obj['coachId'] = coachId;
    }
    /**
     * Constructs a <code>LocationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationResponse} obj Optional instance to populate.
     * @return {module:model/LocationResponse} The populated <code>LocationResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocationResponse();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }

        if (data.hasOwnProperty('longtitude')) {
          obj['longtitude'] = _ApiClient["default"].convertToType(data['longtitude'], 'Number');
        }

        if (data.hasOwnProperty('coachId')) {
          obj['coachId'] = _ApiClient["default"].convertToType(data['coachId'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LocationResponse;
}();
/**
 * @member {String} address
 */


LocationResponse.prototype['address'] = undefined;
/**
 * @member {Number} latitude
 */

LocationResponse.prototype['latitude'] = undefined;
/**
 * @member {Number} longtitude
 */

LocationResponse.prototype['longtitude'] = undefined;
/**
 * @member {String} coachId
 */

LocationResponse.prototype['coachId'] = undefined;
/**
 * @member {String} name
 */

LocationResponse.prototype['name'] = undefined;
var _default = LocationResponse;
exports["default"] = _default;