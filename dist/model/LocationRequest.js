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
 * The LocationRequest model module.
 * @module model/LocationRequest
 * @version 1.0.12
 */
var LocationRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LocationRequest</code>.
   * A training location resource - request
   * @alias module:model/LocationRequest
   * @param address {String} 
   * @param city {String} 
   * @param state {String} 
   * @param zipcode {Number} 
   */
  function LocationRequest(address, city, state, zipcode) {
    _classCallCheck(this, LocationRequest);

    LocationRequest.initialize(this, address, city, state, zipcode);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LocationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, address, city, state, zipcode) {
      obj['address'] = address;
      obj['city'] = city;
      obj['state'] = state;
      obj['zipcode'] = zipcode;
    }
    /**
     * Constructs a <code>LocationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationRequest} obj Optional instance to populate.
     * @return {module:model/LocationRequest} The populated <code>LocationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocationRequest();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('zipcode')) {
          obj['zipcode'] = _ApiClient["default"].convertToType(data['zipcode'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LocationRequest;
}();
/**
 * @member {String} address
 */


LocationRequest.prototype['address'] = undefined;
/**
 * @member {String} city
 */

LocationRequest.prototype['city'] = undefined;
/**
 * @member {String} state
 */

LocationRequest.prototype['state'] = undefined;
/**
 * @member {Number} zipcode
 */

LocationRequest.prototype['zipcode'] = undefined;
/**
 * @member {String} name
 */

LocationRequest.prototype['name'] = undefined;
var _default = LocationRequest;
exports["default"] = _default;