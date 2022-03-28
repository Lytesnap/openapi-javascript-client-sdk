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
 * The StudentProfilePostPaymentMethods model module.
 * @module model/StudentProfilePostPaymentMethods
 * @version 1.0.4
 */
var StudentProfilePostPaymentMethods = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudentProfilePostPaymentMethods</code>.
   * @alias module:model/StudentProfilePostPaymentMethods
   * @param _default {Boolean} 
   * @param paymentMethodId {String} 
   */
  function StudentProfilePostPaymentMethods(_default, paymentMethodId) {
    _classCallCheck(this, StudentProfilePostPaymentMethods);

    StudentProfilePostPaymentMethods.initialize(this, _default, paymentMethodId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudentProfilePostPaymentMethods, null, [{
    key: "initialize",
    value: function initialize(obj, _default, paymentMethodId) {
      obj['default'] = _default || true;
      obj['paymentMethodId'] = paymentMethodId;
    }
    /**
     * Constructs a <code>StudentProfilePostPaymentMethods</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudentProfilePostPaymentMethods} obj Optional instance to populate.
     * @return {module:model/StudentProfilePostPaymentMethods} The populated <code>StudentProfilePostPaymentMethods</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudentProfilePostPaymentMethods();

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'Boolean');
        }

        if (data.hasOwnProperty('paymentMethodId')) {
          obj['paymentMethodId'] = _ApiClient["default"].convertToType(data['paymentMethodId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StudentProfilePostPaymentMethods;
}();
/**
 * @member {Boolean} default
 * @default true
 */


StudentProfilePostPaymentMethods.prototype['default'] = true;
/**
 * @member {String} paymentMethodId
 */

StudentProfilePostPaymentMethods.prototype['paymentMethodId'] = undefined;
var _default2 = StudentProfilePostPaymentMethods;
exports["default"] = _default2;