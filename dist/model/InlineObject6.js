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
 * The InlineObject6 model module.
 * @module model/InlineObject6
 * @version 1.0.12
 */
var InlineObject6 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject6</code>.
   * @alias module:model/InlineObject6
   * @param reason {module:model/InlineObject6.ReasonEnum} 
   */
  function InlineObject6(reason) {
    _classCallCheck(this, InlineObject6);

    InlineObject6.initialize(this, reason);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject6, null, [{
    key: "initialize",
    value: function initialize(obj, reason) {
      obj['reason'] = reason;
    }
    /**
     * Constructs a <code>InlineObject6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject6} obj Optional instance to populate.
     * @return {module:model/InlineObject6} The populated <code>InlineObject6</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject6();

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }

        if (data.hasOwnProperty('additionalReason')) {
          obj['additionalReason'] = _ApiClient["default"].convertToType(data['additionalReason'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject6;
}();
/**
 * @member {module:model/InlineObject6.ReasonEnum} reason
 */


InlineObject6.prototype['reason'] = undefined;
/**
 * @member {String} additionalReason
 */

InlineObject6.prototype['additionalReason'] = undefined;
/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject6['ReasonEnum'] = {
  /**
   * value: "Students rarely book lessons"
   * @const
   */
  "Students rarely book lessons": "Students rarely book lessons",

  /**
   * value: "Privacy concerns"
   * @const
   */
  "Privacy concerns": "Privacy concerns",

  /**
   * value: "Just need a break"
   * @const
   */
  "Just need a break": "Just need a break",

  /**
   * value: "Something else"
   * @const
   */
  "Something else": "Something else"
};
var _default = InlineObject6;
exports["default"] = _default;