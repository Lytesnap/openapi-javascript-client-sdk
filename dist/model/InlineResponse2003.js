"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2003SomeoneMessagedMe = _interopRequireDefault(require("./InlineResponse2003SomeoneMessagedMe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse2003 model module.
 * @module model/InlineResponse2003
 * @version 1.0.12
 */
var InlineResponse2003 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2003</code>.
   * @alias module:model/InlineResponse2003
   * @param someoneMessagedMe {module:model/InlineResponse2003SomeoneMessagedMe} 
   * @param anyoneLeftMeAReview {module:model/InlineResponse2003SomeoneMessagedMe} 
   * @param anyoneCancelledLesson {module:model/InlineResponse2003SomeoneMessagedMe} 
   * @param anyoneAcceptOrDeclineLesson {module:model/InlineResponse2003SomeoneMessagedMe} 
   * @param getNewsAnnouncementAndProductUpdates {module:model/InlineResponse2003SomeoneMessagedMe} 
   */
  function InlineResponse2003(someoneMessagedMe, anyoneLeftMeAReview, anyoneCancelledLesson, anyoneAcceptOrDeclineLesson, getNewsAnnouncementAndProductUpdates) {
    _classCallCheck(this, InlineResponse2003);

    InlineResponse2003.initialize(this, someoneMessagedMe, anyoneLeftMeAReview, anyoneCancelledLesson, anyoneAcceptOrDeclineLesson, getNewsAnnouncementAndProductUpdates);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2003, null, [{
    key: "initialize",
    value: function initialize(obj, someoneMessagedMe, anyoneLeftMeAReview, anyoneCancelledLesson, anyoneAcceptOrDeclineLesson, getNewsAnnouncementAndProductUpdates) {
      obj['someoneMessagedMe'] = someoneMessagedMe;
      obj['anyoneLeftMeAReview'] = anyoneLeftMeAReview;
      obj['anyoneCancelledLesson'] = anyoneCancelledLesson;
      obj['anyoneAcceptOrDeclineLesson'] = anyoneAcceptOrDeclineLesson;
      obj['getNewsAnnouncementAndProductUpdates'] = getNewsAnnouncementAndProductUpdates;
    }
    /**
     * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2003();

        if (data.hasOwnProperty('someoneMessagedMe')) {
          obj['someoneMessagedMe'] = _InlineResponse2003SomeoneMessagedMe["default"].constructFromObject(data['someoneMessagedMe']);
        }

        if (data.hasOwnProperty('anyoneLeftMeAReview')) {
          obj['anyoneLeftMeAReview'] = _InlineResponse2003SomeoneMessagedMe["default"].constructFromObject(data['anyoneLeftMeAReview']);
        }

        if (data.hasOwnProperty('anyoneCancelledLesson')) {
          obj['anyoneCancelledLesson'] = _InlineResponse2003SomeoneMessagedMe["default"].constructFromObject(data['anyoneCancelledLesson']);
        }

        if (data.hasOwnProperty('anyoneAcceptOrDeclineLesson')) {
          obj['anyoneAcceptOrDeclineLesson'] = _InlineResponse2003SomeoneMessagedMe["default"].constructFromObject(data['anyoneAcceptOrDeclineLesson']);
        }

        if (data.hasOwnProperty('getNewsAnnouncementAndProductUpdates')) {
          obj['getNewsAnnouncementAndProductUpdates'] = _InlineResponse2003SomeoneMessagedMe["default"].constructFromObject(data['getNewsAnnouncementAndProductUpdates']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2003;
}();
/**
 * @member {module:model/InlineResponse2003SomeoneMessagedMe} someoneMessagedMe
 */


InlineResponse2003.prototype['someoneMessagedMe'] = undefined;
/**
 * @member {module:model/InlineResponse2003SomeoneMessagedMe} anyoneLeftMeAReview
 */

InlineResponse2003.prototype['anyoneLeftMeAReview'] = undefined;
/**
 * @member {module:model/InlineResponse2003SomeoneMessagedMe} anyoneCancelledLesson
 */

InlineResponse2003.prototype['anyoneCancelledLesson'] = undefined;
/**
 * @member {module:model/InlineResponse2003SomeoneMessagedMe} anyoneAcceptOrDeclineLesson
 */

InlineResponse2003.prototype['anyoneAcceptOrDeclineLesson'] = undefined;
/**
 * @member {module:model/InlineResponse2003SomeoneMessagedMe} getNewsAnnouncementAndProductUpdates
 */

InlineResponse2003.prototype['getNewsAnnouncementAndProductUpdates'] = undefined;
var _default = InlineResponse2003;
exports["default"] = _default;