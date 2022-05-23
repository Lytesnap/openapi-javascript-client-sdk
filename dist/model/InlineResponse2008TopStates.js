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
 * The InlineResponse2008TopStates model module.
 * @module model/InlineResponse2008TopStates
 * @version 1.0.12
 */
var InlineResponse2008TopStates = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2008TopStates</code>.
   * @alias module:model/InlineResponse2008TopStates
   */
  function InlineResponse2008TopStates() {
    _classCallCheck(this, InlineResponse2008TopStates);

    InlineResponse2008TopStates.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2008TopStates, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2008TopStates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008TopStates} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008TopStates} The populated <code>InlineResponse2008TopStates</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2008TopStates();

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('percentage')) {
          obj['percentage'] = _ApiClient["default"].convertToType(data['percentage'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2008TopStates;
}();
/**
 * @member {String} state
 */


InlineResponse2008TopStates.prototype['state'] = undefined;
/**
 * @member {Number} percentage
 */

InlineResponse2008TopStates.prototype['percentage'] = undefined;
var _default = InlineResponse2008TopStates;
exports["default"] = _default;