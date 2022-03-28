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
 * The InlineResponse20013 model module.
 * @module model/InlineResponse20013
 * @version 1.0.4
 */
var InlineResponse20013 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20013</code>.
   * @alias module:model/InlineResponse20013
   */
  function InlineResponse20013() {
    _classCallCheck(this, InlineResponse20013);

    InlineResponse20013.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20013, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20013</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20013} obj Optional instance to populate.
     * @return {module:model/InlineResponse20013} The populated <code>InlineResponse20013</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20013();

        if (data.hasOwnProperty('userName')) {
          obj['userName'] = _ApiClient["default"].convertToType(data['userName'], 'String');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'String');
        }

        if (data.hasOwnProperty('coachPhoto')) {
          obj['coachPhoto'] = _ApiClient["default"].convertToType(data['coachPhoto'], 'String');
        }

        if (data.hasOwnProperty('profileOnBoardingAccepted')) {
          obj['profileOnBoardingAccepted'] = _ApiClient["default"].convertToType(data['profileOnBoardingAccepted'], 'Boolean');
        }

        if (data.hasOwnProperty('backgroundCheckAccepted')) {
          obj['backgroundCheckAccepted'] = _ApiClient["default"].convertToType(data['backgroundCheckAccepted'], 'Boolean');
        }

        if (data.hasOwnProperty('profileStatus')) {
          obj['profileStatus'] = _ApiClient["default"].convertToType(data['profileStatus'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20013;
}();
/**
 * @member {String} userName
 */


InlineResponse20013.prototype['userName'] = undefined;
/**
 * @member {String} userId
 */

InlineResponse20013.prototype['userId'] = undefined;
/**
 * @member {String} coachPhoto
 */

InlineResponse20013.prototype['coachPhoto'] = undefined;
/**
 * @member {Boolean} profileOnBoardingAccepted
 */

InlineResponse20013.prototype['profileOnBoardingAccepted'] = undefined;
/**
 * @member {Boolean} backgroundCheckAccepted
 */

InlineResponse20013.prototype['backgroundCheckAccepted'] = undefined;
/**
 * @member {module:model/InlineResponse20013.ProfileStatusEnum} profileStatus
 */

InlineResponse20013.prototype['profileStatus'] = undefined;
/**
 * Allowed values for the <code>profileStatus</code> property.
 * @enum {String}
 * @readonly
 */

InlineResponse20013['ProfileStatusEnum'] = {
  /**
   * value: "Pending"
   * @const
   */
  "Pending": "Pending",

  /**
   * value: "Declined"
   * @const
   */
  "Declined": "Declined",

  /**
   * value: "Approved"
   * @const
   */
  "Approved": "Approved"
};
var _default = InlineResponse20013;
exports["default"] = _default;