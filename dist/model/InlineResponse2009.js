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
 * The InlineResponse2009 model module.
 * @module model/InlineResponse2009
 * @version 1.0.12
 */
var InlineResponse2009 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2009</code>.
   * @alias module:model/InlineResponse2009
   */
  function InlineResponse2009() {
    _classCallCheck(this, InlineResponse2009);

    InlineResponse2009.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2009, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2009</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009} The populated <code>InlineResponse2009</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2009();

        if (data.hasOwnProperty('filterName')) {
          obj['filterName'] = _ApiClient["default"].convertToType(data['filterName'], 'String');
        }

        if (data.hasOwnProperty('filterID')) {
          obj['filterID'] = _ApiClient["default"].convertToType(data['filterID'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2009;
}();
/**
 * @member {String} filterName
 */


InlineResponse2009.prototype['filterName'] = undefined;
/**
 * @member {String} filterID
 */

InlineResponse2009.prototype['filterID'] = undefined;
var _default = InlineResponse2009;
exports["default"] = _default;