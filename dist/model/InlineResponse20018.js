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
 * The InlineResponse20018 model module.
 * @module model/InlineResponse20018
 * @version 1.0.12
 */
var InlineResponse20018 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20018</code>.
   * @alias module:model/InlineResponse20018
   */
  function InlineResponse20018() {
    _classCallCheck(this, InlineResponse20018);

    InlineResponse20018.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20018, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20018</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20018} obj Optional instance to populate.
     * @return {module:model/InlineResponse20018} The populated <code>InlineResponse20018</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20018();

        if (data.hasOwnProperty('fullName')) {
          obj['fullName'] = _ApiClient["default"].convertToType(data['fullName'], 'String');
        }

        if (data.hasOwnProperty('phoneNumber')) {
          obj['phoneNumber'] = _ApiClient["default"].convertToType(data['phoneNumber'], 'String');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20018;
}();
/**
 * @member {String} fullName
 */


InlineResponse20018.prototype['fullName'] = undefined;
/**
 * @member {String} phoneNumber
 */

InlineResponse20018.prototype['phoneNumber'] = undefined;
/**
 * @member {module:model/InlineResponse20018.GenderEnum} gender
 */

InlineResponse20018.prototype['gender'] = undefined;
/**
 * @member {String} emailAddress
 */

InlineResponse20018.prototype['emailAddress'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

InlineResponse20018['GenderEnum'] = {
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
var _default = InlineResponse20018;
exports["default"] = _default;