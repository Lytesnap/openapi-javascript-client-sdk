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
 * The InlineResponse4001 model module.
 * @module model/InlineResponse4001
 * @version 1.0.0
 */
var InlineResponse4001 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse4001</code>.
   * @alias module:model/InlineResponse4001
   * @param message {String} 
   * @param errors {Array.<Object>} 
   */
  function InlineResponse4001(message, errors) {
    _classCallCheck(this, InlineResponse4001);

    InlineResponse4001.initialize(this, message, errors);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse4001, null, [{
    key: "initialize",
    value: function initialize(obj, message, errors) {
      obj['message'] = message;
      obj['errors'] = errors;
    }
    /**
     * Constructs a <code>InlineResponse4001</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse4001} obj Optional instance to populate.
     * @return {module:model/InlineResponse4001} The populated <code>InlineResponse4001</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse4001();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse4001;
}();
/**
 * @member {String} message
 */


InlineResponse4001.prototype['message'] = undefined;
/**
 * @member {Array.<Object>} errors
 */

InlineResponse4001.prototype['errors'] = undefined;
var _default = InlineResponse4001;
exports["default"] = _default;