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
    instance = new LytesnapBackendApi.InlineResponse500Errors();
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

  describe('InlineResponse500Errors', function() {
    it('should create an instance of InlineResponse500Errors', function() {
      // uncomment below and update the code to test InlineResponse500Errors
      //var instance = new LytesnapBackendApi.InlineResponse500Errors();
      //expect(instance).to.be.a(LytesnapBackendApi.InlineResponse500Errors);
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new LytesnapBackendApi.InlineResponse500Errors();
      //expect(instance).to.be();
    });

  });

}));
