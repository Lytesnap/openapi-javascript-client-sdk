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
 * The InlineResponse2001 model module.
 * @module model/InlineResponse2001
 * @version 1.0.0
 */
var InlineResponse2001 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2001</code>.
   * @alias module:model/InlineResponse2001
   * @param someoneMessagedMe {module:model/InlineResponse2001SomeoneMessagedMe} 
   * @param anyoneLeftMeAReview {module:model/InlineResponse2001SomeoneMessagedMe} 
   * @param anyoneCancelledLesson {module:model/InlineResponse2001SomeoneMessagedMe} 
   * @param anyoneAcceptOrDeclineLesson {module:model/InlineResponse2001SomeoneMessagedMe} 
   * @param getNewsAnnouncementAndProductUpdates {module:model/InlineResponse2001SomeoneMessagedMe} 
   */
  function InlineResponse2001(someoneMessagedMe, anyoneLeftMeAReview, anyoneCancelledLesson, anyoneAcceptOrDeclineLesson, getNewsAnnouncementAndProductUpdates) {
    _classCallCheck(this, InlineResponse2001);

    InlineResponse2001.initialize(this, someoneMessagedMe, anyoneLeftMeAReview, anyoneCancelledLesson, anyoneAcceptOrDeclineLesson, getNewsAnnouncementAndProductUpdates);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2001, null, [{
    key: "initialize",
    value: function initialize(obj, someoneMessagedMe, anyoneLeftMeAReview, anyoneCancelledLesson, anyoneAcceptOrDeclineLesson, getNewsAnnouncementAndProductUpdates) {
      obj['someoneMessagedMe'] = someoneMessagedMe;
      obj['anyoneLeftMeAReview'] = anyoneLeftMeAReview;
      obj['anyoneCancelledLesson'] = anyoneCancelledLesson;
      obj['anyoneAcceptOrDeclineLesson'] = anyoneAcceptOrDeclineLesson;
      obj['getNewsAnnouncementAndProductUpdates'] = getNewsAnnouncementAndProductUpdates;
    }
    /**
     * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2001();

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

  return InlineResponse2001;
}();
/**
 * @member {module:model/InlineResponse2001SomeoneMessagedMe} someoneMessagedMe
 */


InlineResponse2001.prototype['someoneMessagedMe'] = undefined;
/**
 * @member {module:model/InlineResponse2001SomeoneMessagedMe} anyoneLeftMeAReview
 */

InlineResponse2001.prototype['anyoneLeftMeAReview'] = undefined;
/**
 * @member {module:model/InlineResponse2001SomeoneMessagedMe} anyoneCancelledLesson
 */

InlineResponse2001.prototype['anyoneCancelledLesson'] = undefined;
/**
 * @member {module:model/InlineResponse2001SomeoneMessagedMe} anyoneAcceptOrDeclineLesson
 */

InlineResponse2001.prototype['anyoneAcceptOrDeclineLesson'] = undefined;
/**
 * @member {module:model/InlineResponse2001SomeoneMessagedMe} getNewsAnnouncementAndProductUpdates
 */

InlineResponse2001.prototype['getNewsAnnouncementAndProductUpdates'] = undefined;
var _default = InlineResponse2001;
exports["default"] = _default;