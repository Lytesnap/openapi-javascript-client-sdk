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
    instance = new LytesnapBackendApi.Lesson();
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

  describe('Lesson', function() {
    it('should create an instance of Lesson', function() {
      // uncomment below and update the code to test Lesson
      //var instance = new LytesnapBackendApi.Lesson();
      //expect(instance).to.be.a(LytesnapBackendApi.Lesson);
    });

    it('should have the property lessonId (base name: "lessonId")', function() {
      // uncomment below and update the code to test the property lessonId
      //var instance = new LytesnapBackendApi.Lesson();
      //expect(instance).to.be();
    });

    it('should have the property lessonType (base name: "lessonType")', function() {
      // uncomment below and update the code to test the property lessonType
      //var instance = new LytesnapBackendApi.Lesson();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instance = new LytesnapBackendApi.Lesson();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "endTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instance = new LytesnapBackendApi.Lesson();
      //expect(instance).to.be();
    });

    it('should have the property locationId (base name: "locationId")', function() {
      // uncomment below and update the code to test the property locationId
      //var instance = new LytesnapBackendApi.Lesson();
      //expect(instance).to.be();
    });

    it('should have the property coachId (base name: "coachId")', function() {
      // uncomment below and update the code to test the property coachId
      //var instance = new LytesnapBackendApi.Lesson();
      //expect(instance).to.be();
    });

    it('should have the property bookerId (base name: "bookerId")', function() {
      // uncomment below and update the code to test the property bookerId
      //var instance = new LytesnapBackendApi.Lesson();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethodId (base name: "paymentMethodId")', function() {
      // uncomment below and update the code to test the property paymentMethodId
      //var instance = new LytesnapBackendApi.Lesson();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new LytesnapBackendApi.Lesson();
      //expect(instance).to.be();
    });

    it('should have the property studentInfo (base name: "studentInfo")', function() {
      // uncomment below and update the code to test the property studentInfo
      //var instance = new LytesnapBackendApi.Lesson();
      //expect(instance).to.be();
    });

  });

}));