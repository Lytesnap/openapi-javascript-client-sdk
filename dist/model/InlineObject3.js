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
 * The InlineObject3 model module.
 * @module model/InlineObject3
 * @version 1.0.0
 */
var InlineObject3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject3</code>.
   * @alias module:model/InlineObject3
   * @param cardNumber {String} 
   * @param expirationDate {String} 
   * @param CVV {String} 
   * @param cardType {module:model/InlineObject3.CardTypeEnum} 
   */
  function InlineObject3(cardNumber, expirationDate, CVV, cardType) {
    _classCallCheck(this, InlineObject3);

    InlineObject3.initialize(this, cardNumber, expirationDate, CVV, cardType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject3, null, [{
    key: "initialize",
    value: function initialize(obj, cardNumber, expirationDate, CVV, cardType) {
      obj['cardNumber'] = cardNumber;
      obj['expirationDate'] = expirationDate;
      obj['CVV'] = CVV;
      obj['cardType'] = cardType;
    }
    /**
     * Constructs a <code>InlineObject3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject3} obj Optional instance to populate.
     * @return {module:model/InlineObject3} The populated <code>InlineObject3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject3();

        if (data.hasOwnProperty('cardNumber')) {
          obj['cardNumber'] = _ApiClient["default"].convertToType(data['cardNumber'], 'String');
        }

        if (data.hasOwnProperty('expirationDate')) {
          obj['expirationDate'] = _ApiClient["default"].convertToType(data['expirationDate'], 'String');
        }

        if (data.hasOwnProperty('CVV')) {
          obj['CVV'] = _ApiClient["default"].convertToType(data['CVV'], 'String');
        }

        if (data.hasOwnProperty('cardType')) {
          obj['cardType'] = _ApiClient["default"].convertToType(data['cardType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject3;
}();
/**
 * @member {String} cardNumber
 */


InlineObject3.prototype['cardNumber'] = undefined;
/**
 * @member {String} expirationDate
 */

InlineObject3.prototype['expirationDate'] = undefined;
/**
 * @member {String} CVV
 */

InlineObject3.prototype['CVV'] = undefined;
/**
 * @member {module:model/InlineObject3.CardTypeEnum} cardType
 */

InlineObject3.prototype['cardType'] = undefined;
/**
 * Allowed values for the <code>cardType</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject3['CardTypeEnum'] = {
  /**
   * value: "Visa"
   * @const
   */
  "Visa": "Visa",

  /**
   * value: "MasterCard"
   * @const
   */
  "MasterCard": "MasterCard",

  /**
   * value: "American Express"
   * @const
   */
  "American Express": "American Express",

  /**
   * value: "Diners Club"
   * @const
   */
  "Diners Club": "Diners Club",

  /**
   * value: "Discover"
   * @const
   */
  "Discover": "Discover",

  /**
   * value: "JCB"
   * @const
   */
  "JCB": "JCB"
};
var _default = InlineObject3;
exports["default"] = _default;