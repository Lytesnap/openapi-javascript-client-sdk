"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20010CancellationReason = _interopRequireDefault(require("./InlineResponse20010CancellationReason"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20010 model module.
 * @module model/InlineResponse20010
 * @version 1.0.12
 */
var InlineResponse20010 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20010</code>.
   * @alias module:model/InlineResponse20010
   */
  function InlineResponse20010() {
    _classCallCheck(this, InlineResponse20010);

    InlineResponse20010.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20010, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20010</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20010} obj Optional instance to populate.
     * @return {module:model/InlineResponse20010} The populated <code>InlineResponse20010</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20010();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('photo')) {
          obj['photo'] = _ApiClient["default"].convertToType(data['photo'], 'String');
        }

        if (data.hasOwnProperty('userType')) {
          obj['userType'] = _ApiClient["default"].convertToType(data['userType'], 'String');
        }

        if (data.hasOwnProperty('numCancellations')) {
          obj['numCancellations'] = _ApiClient["default"].convertToType(data['numCancellations'], 'Number');
        }

        if (data.hasOwnProperty('cancellationReason')) {
          obj['cancellationReason'] = _ApiClient["default"].convertToType(data['cancellationReason'], [_InlineResponse20010CancellationReason["default"]]);
        }

        if (data.hasOwnProperty('rating')) {
          obj['rating'] = _ApiClient["default"].convertToType(data['rating'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20010;
}();
/**
 * @member {String} name
 */


InlineResponse20010.prototype['name'] = undefined;
/**
 * @member {String} photo
 */

InlineResponse20010.prototype['photo'] = undefined;
/**
 * @member {module:model/InlineResponse20010.UserTypeEnum} userType
 */

InlineResponse20010.prototype['userType'] = undefined;
/**
 * @member {Number} numCancellations
 */

InlineResponse20010.prototype['numCancellations'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20010CancellationReason>} cancellationReason
 */

InlineResponse20010.prototype['cancellationReason'] = undefined;
/**
 * @member {Number} rating
 */

InlineResponse20010.prototype['rating'] = undefined;
/**
 * @member {module:model/InlineResponse20010.StatusEnum} status
 */

InlineResponse20010.prototype['status'] = undefined;
/**
 * @member {String} userId
 */

InlineResponse20010.prototype['userId'] = undefined;
/**
 * Allowed values for the <code>userType</code> property.
 * @enum {String}
 * @readonly
 */

InlineResponse20010['UserTypeEnum'] = {
  /**
   * value: "student"
   * @const
   */
  "student": "student",

  /**
   * value: "coach"
   * @const
   */
  "coach": "coach"
};
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

InlineResponse20010['StatusEnum'] = {
  /**
   * value: "banned"
   * @const
   */
  "banned": "banned",

  /**
   * value: "active"
   * @const
   */
  "active": "active"
};
var _default = InlineResponse20010;
exports["default"] = _default;