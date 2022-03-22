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
 * The InlineResponse20011 model module.
 * @module model/InlineResponse20011
 * @version 1.0.0
 */
var InlineResponse20011 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20011</code>.
   * @alias module:model/InlineResponse20011
   */
  function InlineResponse20011() {
    _classCallCheck(this, InlineResponse20011);

    InlineResponse20011.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20011, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20011</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20011} obj Optional instance to populate.
     * @return {module:model/InlineResponse20011} The populated <code>InlineResponse20011</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20011();

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'String');
        }

        if (data.hasOwnProperty('userName')) {
          obj['userName'] = _ApiClient["default"].convertToType(data['userName'], 'String');
        }

        if (data.hasOwnProperty('numCertificates')) {
          obj['numCertificates'] = _ApiClient["default"].convertToType(data['numCertificates'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20011;
}();
/**
 * @member {String} userId
 */


InlineResponse20011.prototype['userId'] = undefined;
/**
 * @member {String} userName
 */

InlineResponse20011.prototype['userName'] = undefined;
/**
 * @member {Number} numCertificates
 */

InlineResponse20011.prototype['numCertificates'] = undefined;
/**
 * @member {module:model/InlineResponse20011.StatusEnum} status
 */

InlineResponse20011.prototype['status'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

InlineResponse20011['StatusEnum'] = {
  /**
   * value: "pending"
   * @const
   */
  "pending": "pending",

  /**
   * value: "declined"
   * @const
   */
  "declined": "declined",

  /**
   * value: "approved"
   * @const
   */
  "approved": "approved"
};
var _default = InlineResponse20011;
exports["default"] = _default;