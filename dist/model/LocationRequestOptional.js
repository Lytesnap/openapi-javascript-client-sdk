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
 * The LocationRequestOptional model module.
 * @module model/LocationRequestOptional
 * @version 1.0.12
 */
var LocationRequestOptional = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LocationRequestOptional</code>.
   * A training location resource - request
   * @alias module:model/LocationRequestOptional
   */
  function LocationRequestOptional() {
    _classCallCheck(this, LocationRequestOptional);

    LocationRequestOptional.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LocationRequestOptional, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LocationRequestOptional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationRequestOptional} obj Optional instance to populate.
     * @return {module:model/LocationRequestOptional} The populated <code>LocationRequestOptional</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocationRequestOptional();

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

  return LocationRequestOptional;
}();
/**
 * @member {String} address
 */


LocationRequestOptional.prototype['address'] = undefined;
/**
 * @member {String} city
 */

LocationRequestOptional.prototype['city'] = undefined;
/**
 * @member {String} state
 */

LocationRequestOptional.prototype['state'] = undefined;
/**
 * @member {Number} zipcode
 */

LocationRequestOptional.prototype['zipcode'] = undefined;
/**
 * @member {String} name
 */

LocationRequestOptional.prototype['name'] = undefined;
var _default = LocationRequestOptional;
exports["default"] = _default;