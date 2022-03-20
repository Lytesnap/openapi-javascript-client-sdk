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
    instance = new LytesnapBackendApi.LocationResponse();
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

  describe('LocationResponse', function() {
    it('should create an instance of LocationResponse', function() {
      // uncomment below and update the code to test LocationResponse
      //var instance = new LytesnapBackendApi.LocationResponse();
      //expect(instance).to.be.a(LytesnapBackendApi.LocationResponse);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new LytesnapBackendApi.LocationResponse();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instance = new LytesnapBackendApi.LocationResponse();
      //expect(instance).to.be();
    });

    it('should have the property longtitude (base name: "longtitude")', function() {
      // uncomment below and update the code to test the property longtitude
      //var instance = new LytesnapBackendApi.LocationResponse();
      //expect(instance).to.be();
    });

    it('should have the property coachId (base name: "coachId")', function() {
      // uncomment below and update the code to test the property coachId
      //var instance = new LytesnapBackendApi.LocationResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LytesnapBackendApi.LocationResponse();
      //expect(instance).to.be();
    });

  });

}));