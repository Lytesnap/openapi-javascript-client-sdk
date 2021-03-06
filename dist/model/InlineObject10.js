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
 * The InlineObject10 model module.
 * @module model/InlineObject10
 * @version 1.0.12
 */
var InlineObject10 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject10</code>.
   * @alias module:model/InlineObject10
   */
  function InlineObject10() {
    _classCallCheck(this, InlineObject10);

    InlineObject10.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject10, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject10</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject10} obj Optional instance to populate.
     * @return {module:model/InlineObject10} The populated <code>InlineObject10</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject10();

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

  return InlineObject10;
}();
/**
 * @member {module:model/InlineObject10.ResultEnum} result
 */


InlineObject10.prototype['result'] = undefined;
/**
 * @member {String} reasonIfDeclined
 */

InlineObject10.prototype['reasonIfDeclined'] = undefined;
/**
 * Allowed values for the <code>result</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject10['ResultEnum'] = {
  /**
   * value: "accepted"
   * @const
   */
  "accepted": "accepted",

  /**
   * value: "declined"
   * @const
   */
  "declined": "declined"
};
var _default = InlineObject10;
exports["default"] = _default;