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
 * The StudentPaymentMethodCard model module.
 * @module model/StudentPaymentMethodCard
 * @version 1.0.0
 */
var StudentPaymentMethodCard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudentPaymentMethodCard</code>.
   * @alias module:model/StudentPaymentMethodCard
   * @param number {String} 
   * @param expMonth {Number} 
   * @param expYear {Number} 
   * @param cvc {String} 
   */
  function StudentPaymentMethodCard(number, expMonth, expYear, cvc) {
    _classCallCheck(this, StudentPaymentMethodCard);

    StudentPaymentMethodCard.initialize(this, number, expMonth, expYear, cvc);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudentPaymentMethodCard, null, [{
    key: "initialize",
    value: function initialize(obj, number, expMonth, expYear, cvc) {
      obj['number'] = number;
      obj['exp_month'] = expMonth;
      obj['exp_year'] = expYear;
      obj['cvc'] = cvc;
    }
    /**
     * Constructs a <code>StudentPaymentMethodCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentPaymentMethodCard} obj Optional instance to populate.
     * @return {module:model/StudentPaymentMethodCard} The populated <code>StudentPaymentMethodCard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudentPaymentMethodCard();

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'String');
        }

        if (data.hasOwnProperty('exp_month')) {
          obj['exp_month'] = _ApiClient["default"].convertToType(data['exp_month'], 'Number');
        }

        if (data.hasOwnProperty('exp_year')) {
          obj['exp_year'] = _ApiClient["default"].convertToType(data['exp_year'], 'Number');
        }

        if (data.hasOwnProperty('cvc')) {
          obj['cvc'] = _ApiClient["default"].convertToType(data['cvc'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StudentPaymentMethodCard;
}();
/**
 * @member {String} number
 */


StudentPaymentMethodCard.prototype['number'] = undefined;
/**
 * @member {Number} exp_month
 */

StudentPaymentMethodCard.prototype['exp_month'] = undefined;
/**
 * @member {Number} exp_year
 */

StudentPaymentMethodCard.prototype['exp_year'] = undefined;
/**
 * @member {String} cvc
 */

StudentPaymentMethodCard.prototype['cvc'] = undefined;
var _default = StudentPaymentMethodCard;
exports["default"] = _default;