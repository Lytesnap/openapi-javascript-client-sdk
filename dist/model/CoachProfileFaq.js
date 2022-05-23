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
 * The CoachProfileFaq model module.
 * @module model/CoachProfileFaq
 * @version 1.0.12
 */
var CoachProfileFaq = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoachProfileFaq</code>.
   * @alias module:model/CoachProfileFaq
   * @param question {String} 
   * @param answer {String} 
   */
  function CoachProfileFaq(question, answer) {
    _classCallCheck(this, CoachProfileFaq);

    CoachProfileFaq.initialize(this, question, answer);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoachProfileFaq, null, [{
    key: "initialize",
    value: function initialize(obj, question, answer) {
      obj['question'] = question;
      obj['answer'] = answer;
    }
    /**
     * Constructs a <code>CoachProfileFaq</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoachProfileFaq} obj Optional instance to populate.
     * @return {module:model/CoachProfileFaq} The populated <code>CoachProfileFaq</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoachProfileFaq();

        if (data.hasOwnProperty('question')) {
          obj['question'] = _ApiClient["default"].convertToType(data['question'], 'String');
        }

        if (data.hasOwnProperty('answer')) {
          obj['answer'] = _ApiClient["default"].convertToType(data['answer'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CoachProfileFaq;
}();
/**
 * @member {String} question
 */


CoachProfileFaq.prototype['question'] = undefined;
/**
 * @member {String} answer
 */

CoachProfileFaq.prototype['answer'] = undefined;
var _default = CoachProfileFaq;
exports["default"] = _default;