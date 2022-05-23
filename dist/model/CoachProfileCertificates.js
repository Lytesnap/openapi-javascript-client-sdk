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
 * The CoachProfileCertificates model module.
 * @module model/CoachProfileCertificates
 * @version 1.0.12
 */
var CoachProfileCertificates = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachProfileCertificates</code>.
   * @alias module:model/CoachProfileCertificates
   * @param name {String} 
   * @param expiration {String} 
   * @param id {String} 
   */
  function CoachProfileCertificates(name, expiration, id) {
    _classCallCheck(this, CoachProfileCertificates);

    CoachProfileCertificates.initialize(this, name, expiration, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachProfileCertificates, null, [{
    key: "initialize",
    value: function initialize(obj, name, expiration, id) {
      obj['name'] = name;
      obj['expiration'] = expiration;
      obj['id'] = id;
    }
    /**
     * Constructs a <code>CoachProfileCertificates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachProfileCertificates} obj Optional instance to populate.
     * @return {module:model/CoachProfileCertificates} The populated <code>CoachProfileCertificates</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachProfileCertificates();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('expiration')) {
          obj['expiration'] = _ApiClient["default"].convertToType(data['expiration'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CoachProfileCertificates;
}();
/**
 * @member {String} name
 */


CoachProfileCertificates.prototype['name'] = undefined;
/**
 * @member {String} expiration
 */

CoachProfileCertificates.prototype['expiration'] = undefined;
/**
 * @member {String} id
 */

CoachProfileCertificates.prototype['id'] = undefined;
var _default = CoachProfileCertificates;
exports["default"] = _default;