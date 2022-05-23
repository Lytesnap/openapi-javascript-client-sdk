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
 * The CoachProfileSettingsPrivacyResetPassword model module.
 * @module model/CoachProfileSettingsPrivacyResetPassword
 * @version 1.0.12
 */
var CoachProfileSettingsPrivacyResetPassword = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachProfileSettingsPrivacyResetPassword</code>.
   * @alias module:model/CoachProfileSettingsPrivacyResetPassword
   * @param currentPassword {String} 
   * @param newPassword1 {String} 
   * @param newPassword2 {String} 
   */
  function CoachProfileSettingsPrivacyResetPassword(currentPassword, newPassword1, newPassword2) {
    _classCallCheck(this, CoachProfileSettingsPrivacyResetPassword);

    CoachProfileSettingsPrivacyResetPassword.initialize(this, currentPassword, newPassword1, newPassword2);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachProfileSettingsPrivacyResetPassword, null, [{
    key: "initialize",
    value: function initialize(obj, currentPassword, newPassword1, newPassword2) {
      obj['currentPassword'] = currentPassword;
      obj['newPassword1'] = newPassword1;
      obj['newPassword2'] = newPassword2;
    }
    /**
     * Constructs a <code>CoachProfileSettingsPrivacyResetPassword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachProfileSettingsPrivacyResetPassword} obj Optional instance to populate.
     * @return {module:model/CoachProfileSettingsPrivacyResetPassword} The populated <code>CoachProfileSettingsPrivacyResetPassword</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachProfileSettingsPrivacyResetPassword();

        if (data.hasOwnProperty('currentPassword')) {
          obj['currentPassword'] = _ApiClient["default"].convertToType(data['currentPassword'], 'String');
        }

        if (data.hasOwnProperty('newPassword1')) {
          obj['newPassword1'] = _ApiClient["default"].convertToType(data['newPassword1'], 'String');
        }

        if (data.hasOwnProperty('newPassword2')) {
          obj['newPassword2'] = _ApiClient["default"].convertToType(data['newPassword2'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CoachProfileSettingsPrivacyResetPassword;
}();
/**
 * @member {String} currentPassword
 */


CoachProfileSettingsPrivacyResetPassword.prototype['currentPassword'] = undefined;
/**
 * @member {String} newPassword1
 */

CoachProfileSettingsPrivacyResetPassword.prototype['newPassword1'] = undefined;
/**
 * @member {String} newPassword2
 */

CoachProfileSettingsPrivacyResetPassword.prototype['newPassword2'] = undefined;
var _default = CoachProfileSettingsPrivacyResetPassword;
exports["default"] = _default;