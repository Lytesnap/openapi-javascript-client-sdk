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
 * The CoachPaymentMethod model module.
 * @module model/CoachPaymentMethod
 * @version 1.0.4
 */
var CoachPaymentMethod = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachPaymentMethod</code>.
   * @alias module:model/CoachPaymentMethod
   */
  function CoachPaymentMethod() {
    _classCallCheck(this, CoachPaymentMethod);

    CoachPaymentMethod.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachPaymentMethod, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CoachPaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachPaymentMethod} obj Optional instance to populate.
     * @return {module:model/CoachPaymentMethod} The populated <code>CoachPaymentMethod</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachPaymentMethod();

        if (data.hasOwnProperty('paymentMethodId')) {
          obj['paymentMethodId'] = _ApiClient["default"].convertToType(data['paymentMethodId'], 'String');
        }

        if (data.hasOwnProperty('brandImage')) {
          obj['brandImage'] = _ApiClient["default"].convertToType(data['brandImage'], 'String');
        }

        if (data.hasOwnProperty('cardType')) {
          obj['cardType'] = _ApiClient["default"].convertToType(data['cardType'], 'String');
        }

        if (data.hasOwnProperty('last4digits')) {
          obj['last4digits'] = _ApiClient["default"].convertToType(data['last4digits'], 'String');
        }

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CoachPaymentMethod;
}();
/**
 * @member {String} paymentMethodId
 */


CoachPaymentMethod.prototype['paymentMethodId'] = undefined;
/**
 * @member {String} brandImage
 */

CoachPaymentMethod.prototype['brandImage'] = undefined;
/**
 * @member {String} cardType
 */

CoachPaymentMethod.prototype['cardType'] = undefined;
/**
 * @member {String} last4digits
 */

CoachPaymentMethod.prototype['last4digits'] = undefined;
/**
 * @member {Boolean} default
 */

CoachPaymentMethod.prototype['default'] = undefined;
var _default = CoachPaymentMethod;
exports["default"] = _default;