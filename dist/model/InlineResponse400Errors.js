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
 * The InlineResponse400Errors model module.
 * @module model/InlineResponse400Errors
 * @version 1.0.0
 */
var InlineResponse400Errors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse400Errors</code>.
   * @alias module:model/InlineResponse400Errors
   */
  function InlineResponse400Errors() {
    _classCallCheck(this, InlineResponse400Errors);

    InlineResponse400Errors.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse400Errors, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse400Errors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse400Errors} obj Optional instance to populate.
     * @return {module:model/InlineResponse400Errors} The populated <code>InlineResponse400Errors</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse400Errors();

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('errorCode')) {
          obj['errorCode'] = _ApiClient["default"].convertToType(data['errorCode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse400Errors;
}();
/**
 * @member {String} path
 */


InlineResponse400Errors.prototype['path'] = undefined;
/**
 * @member {String} message
 */

InlineResponse400Errors.prototype['message'] = undefined;
/**
 * @member {String} errorCode
 */

InlineResponse400Errors.prototype['errorCode'] = undefined;
var _default = InlineResponse400Errors;
exports["default"] = _default;