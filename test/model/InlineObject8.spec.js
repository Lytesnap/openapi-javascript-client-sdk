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
    instance = new LytesnapBackendApi.InlineObject8();
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

  describe('InlineObject8', function() {
    it('should create an instance of InlineObject8', function() {
      // uncomment below and update the code to test InlineObject8
      //var instance = new LytesnapBackendApi.InlineObject8();
      //expect(instance).to.be.a(LytesnapBackendApi.InlineObject8);
    });

    it('should have the property result (base name: "result")', function() {
      // uncomment below and update the code to test the property result
      //var instance = new LytesnapBackendApi.InlineObject8();
      //expect(instance).to.be();
    });

    it('should have the property certificateId (base name: "certificateId")', function() {
      // uncomment below and update the code to test the property certificateId
      //var instance = new LytesnapBackendApi.InlineObject8();
      //expect(instance).to.be();
    });

    it('should have the property reasonIfDeclined (base name: "reasonIfDeclined")', function() {
      // uncomment below and update the code to test the property reasonIfDeclined
      //var instance = new LytesnapBackendApi.InlineObject8();
      //expect(instance).to.be();
    });

  });

}));