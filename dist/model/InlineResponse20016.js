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
 * The InlineResponse20016 model module.
 * @module model/InlineResponse20016
 * @version 1.0.12
 */
var InlineResponse20016 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20016</code>.
   * @alias module:model/InlineResponse20016
   */
  function InlineResponse20016() {
    _classCallCheck(this, InlineResponse20016);

    InlineResponse20016.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20016, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20016</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20016} obj Optional instance to populate.
     * @return {module:model/InlineResponse20016} The populated <code>InlineResponse20016</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20016();

        if (data.hasOwnProperty('featureName')) {
          obj['featureName'] = _ApiClient["default"].convertToType(data['featureName'], 'String');
        }

        if (data.hasOwnProperty('featureId')) {
          obj['featureId'] = _ApiClient["default"].convertToType(data['featureId'], 'String');
        }

        if (data.hasOwnProperty('dateImplemented')) {
          obj['dateImplemented'] = _ApiClient["default"].convertToType(data['dateImplemented'], 'String');
        }

        if (data.hasOwnProperty('numberOfFeedback')) {
          obj['numberOfFeedback'] = _ApiClient["default"].convertToType(data['numberOfFeedback'], 'Number');
        }

        if (data.hasOwnProperty('averageRating')) {
          obj['averageRating'] = _ApiClient["default"].convertToType(data['averageRating'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20016;
}();
/**
 * @member {String} featureName
 */


InlineResponse20016.prototype['featureName'] = undefined;
/**
 * @member {String} featureId
 */

InlineResponse20016.prototype['featureId'] = undefined;
/**
 * @member {String} dateImplemented
 */

InlineResponse20016.prototype['dateImplemented'] = undefined;
/**
 * @member {Number} numberOfFeedback
 */

InlineResponse20016.prototype['numberOfFeedback'] = undefined;
/**
 * @member {Number} averageRating
 */

InlineResponse20016.prototype['averageRating'] = undefined;
var _default = InlineResponse20016;
exports["default"] = _default;