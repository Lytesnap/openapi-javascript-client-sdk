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
 * The InlineResponse2014Data model module.
 * @module model/InlineResponse2014Data
 * @version 1.0.12
 */
var InlineResponse2014Data = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2014Data</code>.
   * @alias module:model/InlineResponse2014Data
   * @param locationId {String} 
   */
  function InlineResponse2014Data(locationId) {
    _classCallCheck(this, InlineResponse2014Data);

    InlineResponse2014Data.initialize(this, locationId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2014Data, null, [{
    key: "initialize",
    value: function initialize(obj, locationId) {
      obj['locationId'] = locationId;
    }
    /**
     * Constructs a <code>InlineResponse2014Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2014Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2014Data} The populated <code>InlineResponse2014Data</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2014Data();

        if (data.hasOwnProperty('locationId')) {
          obj['locationId'] = _ApiClient["default"].convertToType(data['locationId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2014Data;
}();
/**
 * @member {String} locationId
 */


InlineResponse2014Data.prototype['locationId'] = undefined;
var _default = InlineResponse2014Data;
exports["default"] = _default;