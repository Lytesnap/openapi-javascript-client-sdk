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
 * The InlineResponse403 model module.
 * @module model/InlineResponse403
 * @version 1.0.4
 */
var InlineResponse403 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse403</code>.
   * @alias module:model/InlineResponse403
   * @param message {String} 
   */
  function InlineResponse403(message) {
    _classCallCheck(this, InlineResponse403);

    InlineResponse403.initialize(this, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse403, null, [{
    key: "initialize",
    value: function initialize(obj, message) {
      obj['message'] = message;
    }
    /**
     * Constructs a <code>InlineResponse403</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse403} obj Optional instance to populate.
     * @return {module:model/InlineResponse403} The populated <code>InlineResponse403</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse403();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse403;
}();
/**
 * @member {String} message
 */


InlineResponse403.prototype['message'] = undefined;
var _default = InlineResponse403;
exports["default"] = _default;