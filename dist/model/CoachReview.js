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
 * The CoachReview model module.
 * @module model/CoachReview
 * @version 1.0.4
 */
var CoachReview = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachReview</code>.
   * @alias module:model/CoachReview
   * @param id {String} 
   * @param studentName {String} 
   * @param overallRating {Number} 
   * @param tags {Array.<module:model/CoachReview.TagsEnum>} 
   * @param timestamp {String} 
   * @param studentId {String} 
   * @param photo {String} 
   * @param reviewText {String} 
   */
  function CoachReview(id, studentName, overallRating, tags, timestamp, studentId, photo, reviewText) {
    _classCallCheck(this, CoachReview);

    CoachReview.initialize(this, id, studentName, overallRating, tags, timestamp, studentId, photo, reviewText);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachReview, null, [{
    key: "initialize",
    value: function initialize(obj, id, studentName, overallRating, tags, timestamp, studentId, photo, reviewText) {
      obj['id'] = id;
      obj['studentName'] = studentName;
      obj['overallRating'] = overallRating;
      obj['tags'] = tags;
      obj['timestamp'] = timestamp;
      obj['studentId'] = studentId;
      obj['photo'] = photo;
      obj['reviewText'] = reviewText;
    }
    /**
     * Constructs a <code>CoachReview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachReview} obj Optional instance to populate.
     * @return {module:model/CoachReview} The populated <code>CoachReview</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachReview();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('studentName')) {
          obj['studentName'] = _ApiClient["default"].convertToType(data['studentName'], 'String');
        }

        if (data.hasOwnProperty('overallRating')) {
          obj['overallRating'] = _ApiClient["default"].convertToType(data['overallRating'], 'Number');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'String');
        }

        if (data.hasOwnProperty('studentId')) {
          obj['studentId'] = _ApiClient["default"].convertToType(data['studentId'], 'String');
        }

        if (data.hasOwnProperty('photo')) {
          obj['photo'] = _ApiClient["default"].convertToType(data['photo'], 'String');
        }

        if (data.hasOwnProperty('reviewText')) {
          obj['reviewText'] = _ApiClient["default"].convertToType(data['reviewText'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CoachReview;
}();
/**
 * @member {String} id
 */


CoachReview.prototype['id'] = undefined;
/**
 * @member {String} studentName
 */

CoachReview.prototype['studentName'] = undefined;
/**
 * @member {Number} overallRating
 */

CoachReview.prototype['overallRating'] = undefined;
/**
 * @member {Array.<module:model/CoachReview.TagsEnum>} tags
 */

CoachReview.prototype['tags'] = undefined;
/**
 * @member {String} timestamp
 */

CoachReview.prototype['timestamp'] = undefined;
/**
 * @member {String} studentId
 */

CoachReview.prototype['studentId'] = undefined;
/**
 * @member {String} photo
 */

CoachReview.prototype['photo'] = undefined;
/**
 * @member {String} reviewText
 */

CoachReview.prototype['reviewText'] = undefined;
/**
 * Allowed values for the <code>tags</code> property.
 * @enum {String}
 * @readonly
 */

CoachReview['TagsEnum'] = {
  /**
   * value: "Friendly to kids"
   * @const
   */
  "Friendly to kids": "Friendly to kids",

  /**
   * value: "Competitive"
   * @const
   */
  "Competitive": "Competitive",

  /**
   * value: "Caring"
   * @const
   */
  "Caring": "Caring",

  /**
   * value: "Discipline"
   * @const
   */
  "Discipline": "Discipline"
};
var _default = CoachReview;
exports["default"] = _default;