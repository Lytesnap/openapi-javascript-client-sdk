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
 * The InlineResponse20010CancellationReason model module.
 * @module model/InlineResponse20010CancellationReason
 * @version 1.0.12
 */
var InlineResponse20010CancellationReason = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20010CancellationReason</code>.
   * @alias module:model/InlineResponse20010CancellationReason
   */
  function InlineResponse20010CancellationReason() {
    _classCallCheck(this, InlineResponse20010CancellationReason);

    InlineResponse20010CancellationReason.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20010CancellationReason, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20010CancellationReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20010CancellationReason} obj Optional instance to populate.
     * @return {module:model/InlineResponse20010CancellationReason} The populated <code>InlineResponse20010CancellationReason</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20010CancellationReason();

        if (data.hasOwnProperty('reasonCategory')) {
          obj['reasonCategory'] = _ApiClient["default"].convertToType(data['reasonCategory'], 'String');
        }

        if (data.hasOwnProperty('explanation')) {
          obj['explanation'] = _ApiClient["default"].convertToType(data['explanation'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20010CancellationReason;
}();
/**
 * @member {String} reasonCategory
 */


InlineResponse20010CancellationReason.prototype['reasonCategory'] = undefined;
/**
 * @member {String} explanation
 */

InlineResponse20010CancellationReason.prototype['explanation'] = undefined;
/**
 * @member {String} date
 */

InlineResponse20010CancellationReason.prototype['date'] = undefined;
var _default = InlineResponse20010CancellationReason;
exports["default"] = _default;