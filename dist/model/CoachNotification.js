"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CoachNotificationAdditionalInfo = _interopRequireDefault(require("./CoachNotificationAdditionalInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CoachNotification model module.
 * @module model/CoachNotification
 * @version 1.0.12
 */
var CoachNotification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachNotification</code>.
   * @alias module:model/CoachNotification
   * @param type {module:model/CoachNotification.TypeEnum} 
   * @param message {String} 
   * @param dateCreated {Date} 
   * @param read {Boolean} 
   */
  function CoachNotification(type, message, dateCreated, read) {
    _classCallCheck(this, CoachNotification);

    CoachNotification.initialize(this, type, message, dateCreated, read);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachNotification, null, [{
    key: "initialize",
    value: function initialize(obj, type, message, dateCreated, read) {
      obj['type'] = type;
      obj['message'] = message;
      obj['dateCreated'] = dateCreated;
      obj['read'] = read;
    }
    /**
     * Constructs a <code>CoachNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachNotification} obj Optional instance to populate.
     * @return {module:model/CoachNotification} The populated <code>CoachNotification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachNotification();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('additionalInfo')) {
          obj['additionalInfo'] = _CoachNotificationAdditionalInfo["default"].constructFromObject(data['additionalInfo']);
        }

        if (data.hasOwnProperty('dateCreated')) {
          obj['dateCreated'] = _ApiClient["default"].convertToType(data['dateCreated'], 'Date');
        }

        if (data.hasOwnProperty('read')) {
          obj['read'] = _ApiClient["default"].convertToType(data['read'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CoachNotification;
}();
/**
 * @member {module:model/CoachNotification.TypeEnum} type
 */


CoachNotification.prototype['type'] = undefined;
/**
 * @member {String} message
 */

CoachNotification.prototype['message'] = undefined;
/**
 * @member {module:model/CoachNotificationAdditionalInfo} additionalInfo
 */

CoachNotification.prototype['additionalInfo'] = undefined;
/**
 * @member {Date} dateCreated
 */

CoachNotification.prototype['dateCreated'] = undefined;
/**
 * @member {Boolean} read
 */

CoachNotification.prototype['read'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

CoachNotification['TypeEnum'] = {
  /**
   * value: "Lesson approved"
   * @const
   */
  "Lesson approved": "Lesson approved",

  /**
   * value: "Lesson cancelled"
   * @const
   */
  "Lesson cancelled": "Lesson cancelled",

  /**
   * value: "Lesson declined"
   * @const
   */
  "Lesson declined": "Lesson declined",

  /**
   * value: "Payment update"
   * @const
   */
  "Payment update": "Payment update",

  /**
   * value: "Announcement"
   * @const
   */
  "Announcement": "Announcement",

  /**
   * value: "Training report"
   * @const
   */
  "Training report": "Training report",

  /**
   * value: "Reviews"
   * @const
   */
  "Reviews": "Reviews"
};
var _default = CoachNotification;
exports["default"] = _default;