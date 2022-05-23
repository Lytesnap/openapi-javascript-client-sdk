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
 * The LessonCancelRequest model module.
 * @module model/LessonCancelRequest
 * @version 1.0.12
 */
var LessonCancelRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LessonCancelRequest</code>.
   * This is the payload to use to submit a lesson cancel request.
   * @alias module:model/LessonCancelRequest
   * @param cancelReason {module:model/LessonCancelRequest.CancelReasonEnum} 
   */
  function LessonCancelRequest(cancelReason) {
    _classCallCheck(this, LessonCancelRequest);

    LessonCancelRequest.initialize(this, cancelReason);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LessonCancelRequest, null, [{
    key: "initialize",
    value: function initialize(obj, cancelReason) {
      obj['cancelReason'] = cancelReason;
    }
    /**
     * Constructs a <code>LessonCancelRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LessonCancelRequest} obj Optional instance to populate.
     * @return {module:model/LessonCancelRequest} The populated <code>LessonCancelRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LessonCancelRequest();

        if (data.hasOwnProperty('cancelReason')) {
          obj['cancelReason'] = _ApiClient["default"].convertToType(data['cancelReason'], 'String');
        }

        if (data.hasOwnProperty('optionalComment')) {
          obj['optionalComment'] = _ApiClient["default"].convertToType(data['optionalComment'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LessonCancelRequest;
}();
/**
 * @member {module:model/LessonCancelRequest.CancelReasonEnum} cancelReason
 */


LessonCancelRequest.prototype['cancelReason'] = undefined;
/**
 * @member {String} optionalComment
 */

LessonCancelRequest.prototype['optionalComment'] = undefined;
/**
 * Allowed values for the <code>cancelReason</code> property.
 * @enum {String}
 * @readonly
 */

LessonCancelRequest['CancelReasonEnum'] = {
  /**
   * value: "Medical emergency"
   * @const
   */
  "Medical emergency": "Medical emergency",

  /**
   * value: "Weather"
   * @const
   */
  "Weather": "Weather",

  /**
   * value: "Other"
   * @const
   */
  "Other": "Other"
};
var _default = LessonCancelRequest;
exports["default"] = _default;