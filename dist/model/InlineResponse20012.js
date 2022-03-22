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
 * The InlineResponse20012 model module.
 * @module model/InlineResponse20012
 * @version 1.0.0
 */
var InlineResponse20012 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20012</code>.
   * @alias module:model/InlineResponse20012
   */
  function InlineResponse20012() {
    _classCallCheck(this, InlineResponse20012);

    InlineResponse20012.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20012, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20012</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20012} obj Optional instance to populate.
     * @return {module:model/InlineResponse20012} The populated <code>InlineResponse20012</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20012();

        if (data.hasOwnProperty('certificateName')) {
          obj['certificateName'] = _ApiClient["default"].convertToType(data['certificateName'], 'String');
        }

        if (data.hasOwnProperty('expirationDate')) {
          obj['expirationDate'] = _ApiClient["default"].convertToType(data['expirationDate'], 'String');
        }

        if (data.hasOwnProperty('certificatePhoto')) {
          obj['certificatePhoto'] = _ApiClient["default"].convertToType(data['certificatePhoto'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('certificateId')) {
          obj['certificateId'] = _ApiClient["default"].convertToType(data['certificateId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20012;
}();
/**
 * @member {String} certificateName
 */


InlineResponse20012.prototype['certificateName'] = undefined;
/**
 * @member {String} expirationDate
 */

InlineResponse20012.prototype['expirationDate'] = undefined;
/**
 * @member {String} certificatePhoto
 */

InlineResponse20012.prototype['certificatePhoto'] = undefined;
/**
 * @member {String} status
 */

InlineResponse20012.prototype['status'] = undefined;
/**
 * @member {String} certificateId
 */

InlineResponse20012.prototype['certificateId'] = undefined;
var _default = InlineResponse20012;
exports["default"] = _default;