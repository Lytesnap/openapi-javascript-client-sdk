"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CoachProfile = _interopRequireDefault(require("./CoachProfile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse200 model module.
 * @module model/InlineResponse200
 * @version 1.0.12
 */
var InlineResponse200 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:model/InlineResponse200
   * @param message {String} 
   * @param data {module:model/CoachProfile} 
   */
  function InlineResponse200(message, data) {
    _classCallCheck(this, InlineResponse200);

    InlineResponse200.initialize(this, message, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200, null, [{
    key: "initialize",
    value: function initialize(obj, message, data) {
      obj['message'] = message || 'Get Coach Own Profile Success';
      obj['data'] = data;
    }
    /**
     * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200} obj Optional instance to populate.
     * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _CoachProfile["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200;
}();
/**
 * @member {String} message
 * @default 'Get Coach Own Profile Success'
 */


InlineResponse200.prototype['message'] = 'Get Coach Own Profile Success';
/**
 * @member {module:model/CoachProfile} data
 */

InlineResponse200.prototype['data'] = undefined;
var _default = InlineResponse200;
exports["default"] = _default;