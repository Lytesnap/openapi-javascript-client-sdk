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
 * The SignUpRequest model module.
 * @module model/SignUpRequest
 * @version 1.0.11
 */
var SignUpRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SignUpRequest</code>.
   * @alias module:model/SignUpRequest
   * @param fullName {String} 
   * @param email {String} 
   */
  function SignUpRequest(fullName, email) {
    _classCallCheck(this, SignUpRequest);

    SignUpRequest.initialize(this, fullName, email);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SignUpRequest, null, [{
    key: "initialize",
    value: function initialize(obj, fullName, email) {
      obj['fullName'] = fullName;
      obj['email'] = email;
    }
    /**
     * Constructs a <code>SignUpRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignUpRequest} obj Optional instance to populate.
     * @return {module:model/SignUpRequest} The populated <code>SignUpRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SignUpRequest();

        if (data.hasOwnProperty('fullName')) {
          obj['fullName'] = _ApiClient["default"].convertToType(data['fullName'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('phoneNumber')) {
          obj['phoneNumber'] = _ApiClient["default"].convertToType(data['phoneNumber'], 'String');
        }

        if (data.hasOwnProperty('dataOfBirth')) {
          obj['dataOfBirth'] = _ApiClient["default"].convertToType(data['dataOfBirth'], 'Date');
        }

        if (data.hasOwnProperty('profilePicture')) {
          obj['profilePicture'] = _ApiClient["default"].convertToType(data['profilePicture'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SignUpRequest;
}();
/**
 * @member {String} fullName
 */


SignUpRequest.prototype['fullName'] = undefined;
/**
 * @member {String} email
 */

SignUpRequest.prototype['email'] = undefined;
/**
 * @member {module:model/SignUpRequest.GenderEnum} gender
 */

SignUpRequest.prototype['gender'] = undefined;
/**
 * @member {String} phoneNumber
 */

SignUpRequest.prototype['phoneNumber'] = undefined;
/**
 * @member {Date} dataOfBirth
 */

SignUpRequest.prototype['dataOfBirth'] = undefined;
/**
 * @member {String} profilePicture
 */

SignUpRequest.prototype['profilePicture'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

SignUpRequest['GenderEnum'] = {
  /**
   * value: "male"
   * @const
   */
  "male": "male",

  /**
   * value: "female"
   * @const
   */
  "female": "female",

  /**
   * value: "other"
   * @const
   */
  "other": "other"
};
var _default = SignUpRequest;
exports["default"] = _default;