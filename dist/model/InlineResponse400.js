"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse400Errors = _interopRequireDefault(require("./InlineResponse400Errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse400 model module.
 * @module model/InlineResponse400
 * @version 1.0.12
 */
var InlineResponse400 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse400</code>.
   * @alias module:model/InlineResponse400
   */
  function InlineResponse400() {
    _classCallCheck(this, InlineResponse400);

    InlineResponse400.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse400, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse400</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse400} obj Optional instance to populate.
     * @return {module:model/InlineResponse400} The populated <code>InlineResponse400</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse400();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [_InlineResponse400Errors["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse400;
}();
/**
 * @member {String} message
 */


InlineResponse400.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse400Errors>} errors
 */

InlineResponse400.prototype['errors'] = undefined;
var _default = InlineResponse400;
exports["default"] = _default;