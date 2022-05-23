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
 * The InlineObject13 model module.
 * @module model/InlineObject13
 * @version 1.0.12
 */
var InlineObject13 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject13</code>.
   * @alias module:model/InlineObject13
   * @param fullName {String} 
   * @param email {String} 
   */
  function InlineObject13(fullName, email) {
    _classCallCheck(this, InlineObject13);

    InlineObject13.initialize(this, fullName, email);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject13, null, [{
    key: "initialize",
    value: function initialize(obj, fullName, email) {
      obj['fullName'] = fullName;
      obj['email'] = email;
    }
    /**
     * Constructs a <code>InlineObject13</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject13} obj Optional instance to populate.
     * @return {module:model/InlineObject13} The populated <code>InlineObject13</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject13();

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

  return InlineObject13;
}();
/**
 * @member {String} fullName
 */


InlineObject13.prototype['fullName'] = undefined;
/**
 * @member {String} email
 */

InlineObject13.prototype['email'] = undefined;
/**
 * @member {String} phoneNumber
 */

InlineObject13.prototype['phoneNumber'] = undefined;
/**
 * @member {module:model/InlineObject13.GenderEnum} gender
 */

InlineObject13.prototype['gender'] = undefined;
/**
 * @member {Date} dataOfBirth
 */

InlineObject13.prototype['dataOfBirth'] = undefined;
/**
 * @member {String} profilePicture
 */

InlineObject13.prototype['profilePicture'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject13['GenderEnum'] = {
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
var _default = InlineObject13;
exports["default"] = _default;