/**
 * lytesnap-backend-api
 * This document details all the API endpoints that are consumed exclusively by lytesnap frontend.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: ylin@lytesnap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LytesnapBackendApi);
  }
}(this, function(expect, LytesnapBackendApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LytesnapBackendApi.StudentPaymentMethodCard();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StudentPaymentMethodCard', function() {
    it('should create an instance of StudentPaymentMethodCard', function() {
      // uncomment below and update the code to test StudentPaymentMethodCard
      //var instance = new LytesnapBackendApi.StudentPaymentMethodCard();
      //expect(instance).to.be.a(LytesnapBackendApi.StudentPaymentMethodCard);
    });

    it('should have the property number (base name: "number")', function() {
      // uncomment below and update the code to test the property number
      //var instance = new LytesnapBackendApi.StudentPaymentMethodCard();
      //expect(instance).to.be();
    });

    it('should have the property expMonth (base name: "exp_month")', function() {
      // uncomment below and update the code to test the property expMonth
      //var instance = new LytesnapBackendApi.StudentPaymentMethodCard();
      //expect(instance).to.be();
    });

    it('should have the property expYear (base name: "exp_year")', function() {
      // uncomment below and update the code to test the property expYear
      //var instance = new LytesnapBackendApi.StudentPaymentMethodCard();
      //expect(instance).to.be();
    });

    it('should have the property cvc (base name: "cvc")', function() {
      // uncomment below and update the code to test the property cvc
      //var instance = new LytesnapBackendApi.StudentPaymentMethodCard();
      //expect(instance).to.be();
    });

  });

}));
