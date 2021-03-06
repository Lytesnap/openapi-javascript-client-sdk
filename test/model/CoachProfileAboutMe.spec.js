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
    instance = new LytesnapBackendApi.CoachProfileAboutMe();
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

  describe('CoachProfileAboutMe', function() {
    it('should create an instance of CoachProfileAboutMe', function() {
      // uncomment below and update the code to test CoachProfileAboutMe
      //var instance = new LytesnapBackendApi.CoachProfileAboutMe();
      //expect(instance).to.be.a(LytesnapBackendApi.CoachProfileAboutMe);
    });

    it('should have the property bio (base name: "bio")', function() {
      // uncomment below and update the code to test the property bio
      //var instance = new LytesnapBackendApi.CoachProfileAboutMe();
      //expect(instance).to.be();
    });

    it('should have the property teaches (base name: "teaches")', function() {
      // uncomment below and update the code to test the property teaches
      //var instance = new LytesnapBackendApi.CoachProfileAboutMe();
      //expect(instance).to.be();
    });

    it('should have the property levels (base name: "levels")', function() {
      // uncomment below and update the code to test the property levels
      //var instance = new LytesnapBackendApi.CoachProfileAboutMe();
      //expect(instance).to.be();
    });

    it('should have the property specialization (base name: "specialization")', function() {
      // uncomment below and update the code to test the property specialization
      //var instance = new LytesnapBackendApi.CoachProfileAboutMe();
      //expect(instance).to.be();
    });

    it('should have the property fastResponseRate (base name: "fastResponseRate")', function() {
      // uncomment below and update the code to test the property fastResponseRate
      //var instance = new LytesnapBackendApi.CoachProfileAboutMe();
      //expect(instance).to.be();
    });

  });

}));
