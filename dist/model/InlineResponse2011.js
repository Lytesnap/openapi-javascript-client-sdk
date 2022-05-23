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
 * The InlineResponse2011 model module.
 * @module model/InlineResponse2011
 * @version 1.0.12
 */
var InlineResponse2011 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2011</code>.
   * @alias module:model/InlineResponse2011
   * @param message {String} 
   * @param lessonId {String} 
   */
  function InlineResponse2011(message, lessonId) {
    _classCallCheck(this, InlineResponse2011);

    InlineResponse2011.initialize(this, message, lessonId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2011, null, [{
    key: "initialize",
    value: function initialize(obj, message, lessonId) {
      obj['message'] = message;
      obj['lessonId'] = lessonId;
    }
    /**
     * Constructs a <code>InlineResponse2011</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2011} obj Optional instance to populate.
     * @return {module:model/InlineResponse2011} The populated <code>InlineResponse2011</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2011();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('lessonId')) {
          obj['lessonId'] = _ApiClient["default"].convertToType(data['lessonId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2011;
}();
/**
 * @member {String} message
 */


InlineResponse2011.prototype['message'] = undefined;
/**
 * @member {String} lessonId
 */

InlineResponse2011.prototype['lessonId'] = undefined;
var _default = InlineResponse2011;
exports["default"] = _default;