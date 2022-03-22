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
 * The InlineObject11 model module.
 * @module model/InlineObject11
 * @version 1.0.0
 */
var InlineObject11 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject11</code>.
   * @alias module:model/InlineObject11
   * @param result {module:model/InlineObject11.ResultEnum} 
   */
  function InlineObject11(result) {
    _classCallCheck(this, InlineObject11);

    InlineObject11.initialize(this, result);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject11, null, [{
    key: "initialize",
    value: function initialize(obj, result) {
      obj['result'] = result;
    }
    /**
     * Constructs a <code>InlineObject11</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject11} obj Optional instance to populate.
     * @return {module:model/InlineObject11} The populated <code>InlineObject11</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject11();

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ApiClient["default"].convertToType(data['result'], 'String');
        }

        if (data.hasOwnProperty('reasonIfDeclined')) {
          obj['reasonIfDeclined'] = _ApiClient["default"].convertToType(data['reasonIfDeclined'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject11;
}();
/**
 * @member {module:model/InlineObject11.ResultEnum} result
 */


InlineObject11.prototype['result'] = undefined;
/**
 * @member {String} reasonIfDeclined
 */

InlineObject11.prototype['reasonIfDeclined'] = undefined;
/**
 * Allowed values for the <code>result</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject11['ResultEnum'] = {
  /**
   * value: "approved"
   * @const
   */
  "approved": "approved",

  /**
   * value: "declined"
   * @const
   */
  "declined": "declined"
};
var _default = InlineObject11;
exports["default"] = _default;