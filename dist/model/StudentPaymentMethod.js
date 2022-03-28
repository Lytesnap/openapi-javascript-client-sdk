"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StudentPaymentMethodCard = _interopRequireDefault(require("./StudentPaymentMethodCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The StudentPaymentMethod model module.
 * @module model/StudentPaymentMethod
 * @version 1.0.4
 */
var StudentPaymentMethod = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudentPaymentMethod</code>.
   * create new paymentMethod
   * @alias module:model/StudentPaymentMethod
   * @param type {module:model/StudentPaymentMethod.TypeEnum} 
   * @param card {module:model/StudentPaymentMethodCard} 
   */
  function StudentPaymentMethod(type, card) {
    _classCallCheck(this, StudentPaymentMethod);

    StudentPaymentMethod.initialize(this, type, card);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudentPaymentMethod, null, [{
    key: "initialize",
    value: function initialize(obj, type, card) {
      obj['type'] = type;
      obj['card'] = card;
    }
    /**
     * Constructs a <code>StudentPaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentPaymentMethod} obj Optional instance to populate.
     * @return {module:model/StudentPaymentMethod} The populated <code>StudentPaymentMethod</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudentPaymentMethod();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('card')) {
          obj['card'] = _StudentPaymentMethodCard["default"].constructFromObject(data['card']);
        }
      }

      return obj;
    }
  }]);

  return StudentPaymentMethod;
}();
/**
 * @member {module:model/StudentPaymentMethod.TypeEnum} type
 */


StudentPaymentMethod.prototype['type'] = undefined;
/**
 * @member {module:model/StudentPaymentMethodCard} card
 */

StudentPaymentMethod.prototype['card'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

StudentPaymentMethod['TypeEnum'] = {
  /**
   * value: "card"
   * @const
   */
  "card": "card"
};
var _default = StudentPaymentMethod;
exports["default"] = _default;