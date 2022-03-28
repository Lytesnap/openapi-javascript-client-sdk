"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2001SomeoneMessagedMe = _interopRequireDefault(require("./InlineResponse2001SomeoneMessagedMe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineObject5 model module.
 * @module model/InlineObject5
 * @version 1.0.4
 */
var InlineObject5 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject5</code>.
   * @alias module:model/InlineObject5
   */
  function InlineObject5() {
    _classCallCheck(this, InlineObject5);

    InlineObject5.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject5, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject5} obj Optional instance to populate.
     * @return {module:model/InlineObject5} The populated <code>InlineObject5</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject5();

        if (data.hasOwnProperty('someoneMessagedMe')) {
          obj['someoneMessagedMe'] = _InlineResponse2001SomeoneMessagedMe["default"].constructFromObject(data['someoneMessagedMe']);
        }

        if (data.hasOwnProperty('anyoneLeftMeAReview')) {
          obj['anyoneLeftMeAReview'] = _InlineResponse2001SomeoneMessagedMe["default"].constructFromObject(data['anyoneLeftMeAReview']);
        }

        if (data.hasOwnProperty('anyoneCancelledLesson')) {
          obj['anyoneCancelledLesson'] = _InlineResponse2001SomeoneMessagedMe["default"].constructFromObject(data['anyoneCancelledLesson']);
        }

        if (data.hasOwnProperty('anyoneAcceptOrDeclineLesson')) {
          obj['anyoneAcceptOrDeclineLesson'] = _InlineResponse2001SomeoneMessagedMe["default"].constructFromObject(data['anyoneAcceptOrDeclineLesson']);
        }

        if (data.hasOwnProperty('getNewsAnnouncementAndProductUpdates')) {
          obj['getNewsAnnouncementAndProductUpdates'] = _InlineResponse2001SomeoneMessagedMe["default"].constructFromObject(data['getNewsAnnouncementAndProductUpdates']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject5;
}();
/**
 * @member {module:model/InlineResponse2001SomeoneMessagedMe} someoneMessagedMe
 */


InlineObject5.prototype['someoneMessagedMe'] = undefined;
/**
 * @member {module:model/InlineResponse2001SomeoneMessagedMe} anyoneLeftMeAReview
 */

InlineObject5.prototype['anyoneLeftMeAReview'] = undefined;
/**
 * @member {module:model/InlineResponse2001SomeoneMessagedMe} anyoneCancelledLesson
 */

InlineObject5.prototype['anyoneCancelledLesson'] = undefined;
/**
 * @member {module:model/InlineResponse2001SomeoneMessagedMe} anyoneAcceptOrDeclineLesson
 */

InlineObject5.prototype['anyoneAcceptOrDeclineLesson'] = undefined;
/**
 * @member {module:model/InlineResponse2001SomeoneMessagedMe} getNewsAnnouncementAndProductUpdates
 */

InlineObject5.prototype['getNewsAnnouncementAndProductUpdates'] = undefined;
var _default = InlineObject5;
exports["default"] = _default;