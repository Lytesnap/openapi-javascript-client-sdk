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
 * The InlineObject14 model module.
 * @module model/InlineObject14
 * @version 1.0.12
 */
var InlineObject14 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject14</code>.
   * @alias module:model/InlineObject14
   * @param fullName {String} 
   * @param email {String} 
   */
  function InlineObject14(fullName, email) {
    _classCallCheck(this, InlineObject14);

    InlineObject14.initialize(this, fullName, email);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject14, null, [{
    key: "initialize",
    value: function initialize(obj, fullName, email) {
      obj['fullName'] = fullName;
      obj['email'] = email;
    }
    /**
     * Constructs a <code>InlineObject14</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject14} obj Optional instance to populate.
     * @return {module:model/InlineObject14} The populated <code>InlineObject14</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject14();

        if (data.hasOwnProperty('fullName')) {
          obj['fullName'] = _ApiClient["default"].convertToType(data['fullName'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('phoneNumber')) {
          obj['phoneNumber'] = _ApiClient["default"].convertToType(data['phoneNumber'], 'String');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
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

  return InlineObject14;
}();
/**
 * @member {String} fullName
 */


InlineObject14.prototype['fullName'] = undefined;
/**
 * @member {String} email
 */

InlineObject14.prototype['email'] = undefined;
/**
 * @member {String} phoneNumber
 */

InlineObject14.prototype['phoneNumber'] = undefined;
/**
 * @member {module:model/InlineObject14.GenderEnum} gender
 */

InlineObject14.prototype['gender'] = undefined;
/**
 * @member {Date} dataOfBirth
 */

InlineObject14.prototype['dataOfBirth'] = undefined;
/**
 * @member {String} profilePicture
 */

InlineObject14.prototype['profilePicture'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject14['GenderEnum'] = {
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
var _default = InlineObject14;
exports["default"] = _default;