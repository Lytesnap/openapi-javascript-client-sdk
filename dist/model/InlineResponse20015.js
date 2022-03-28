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
 * The InlineResponse20015 model module.
 * @module model/InlineResponse20015
 * @version 1.0.4
 */
var InlineResponse20015 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20015</code>.
   * @alias module:model/InlineResponse20015
   */
  function InlineResponse20015() {
    _classCallCheck(this, InlineResponse20015);

    InlineResponse20015.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20015, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20015</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20015} obj Optional instance to populate.
     * @return {module:model/InlineResponse20015} The populated <code>InlineResponse20015</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20015();

        if (data.hasOwnProperty('featureName')) {
          obj['featureName'] = _ApiClient["default"].convertToType(data['featureName'], 'String');
        }

        if (data.hasOwnProperty('feedback')) {
          obj['feedback'] = _ApiClient["default"].convertToType(data['feedback'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('userID')) {
          obj['userID'] = _ApiClient["default"].convertToType(data['userID'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('rating')) {
          obj['rating'] = _ApiClient["default"].convertToType(data['rating'], 'Number');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20015;
}();
/**
 * @member {String} featureName
 */


InlineResponse20015.prototype['featureName'] = undefined;
/**
 * @member {String} feedback
 */

InlineResponse20015.prototype['feedback'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20015.prototype['name'] = undefined;
/**
 * @member {String} userID
 */

InlineResponse20015.prototype['userID'] = undefined;
/**
 * @member {module:model/InlineResponse20015.TypeEnum} type
 */

InlineResponse20015.prototype['type'] = undefined;
/**
 * @member {Number} rating
 */

InlineResponse20015.prototype['rating'] = undefined;
/**
 * @member {String} date
 */

InlineResponse20015.prototype['date'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

InlineResponse20015['TypeEnum'] = {
  /**
   * value: "coach"
   * @const
   */
  "coach": "coach",

  /**
   * value: "student"
   * @const
   */
  "student": "student"
};
var _default = InlineResponse20015;
exports["default"] = _default;