/**
 * lytesnap-backend-api
 * This document details all the API endpoints that are consumed exclusively by lytesnap frontend.
 *
 * The version of the OpenAPI document: 1.0.0
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
    instance = new LytesnapBackendApi.InlineResponse2003SomeoneMessagedMe();
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

  describe('InlineResponse2003SomeoneMessagedMe', function() {
    it('should create an instance of InlineResponse2003SomeoneMessagedMe', function() {
      // uncomment below and update the code to test InlineResponse2003SomeoneMessagedMe
      //var instance = new LytesnapBackendApi.InlineResponse2003SomeoneMessagedMe();
      //expect(instance).to.be.a(LytesnapBackendApi.InlineResponse2003SomeoneMessagedMe);
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new LytesnapBackendApi.InlineResponse2003SomeoneMessagedMe();
      //expect(instance).to.be();
    });

    it('should have the property desktopAndMobile (base name: "desktopAndMobile")', function() {
      // uncomment below and update the code to test the property desktopAndMobile
      //var instance = new LytesnapBackendApi.InlineResponse2003SomeoneMessagedMe();
      //expect(instance).to.be();
    });

  });

}));
