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
 * The InlineObject12 model module.
 * @module model/InlineObject12
 * @version 1.0.12
 */
var InlineObject12 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject12</code>.
   * @alias module:model/InlineObject12
   */
  function InlineObject12() {
    _classCallCheck(this, InlineObject12);

    InlineObject12.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject12, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject12</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject12} obj Optional instance to populate.
     * @return {module:model/InlineObject12} The populated <code>InlineObject12</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject12();

        if (data.hasOwnProperty('fullName')) {
          obj['fullName'] = _ApiClient["default"].convertToType(data['fullName'], 'String');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('phoneNumber')) {
          obj['phoneNumber'] = _ApiClient["default"].convertToType(data['phoneNumber'], 'String');
        }

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject12;
}();
/**
 * @member {String} fullName
 */


InlineObject12.prototype['fullName'] = undefined;
/**
 * @member {module:model/InlineObject12.GenderEnum} gender
 */

InlineObject12.prototype['gender'] = undefined;
/**
 * @member {String} phoneNumber
 */

InlineObject12.prototype['phoneNumber'] = undefined;
/**
 * @member {String} emailAddress
 */

InlineObject12.prototype['emailAddress'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject12['GenderEnum'] = {
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
var _default = InlineObject12;
exports["default"] = _default;