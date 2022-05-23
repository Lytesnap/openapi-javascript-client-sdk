"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CoachAvailability = _interopRequireDefault(require("../model/CoachAvailability"));

var _CoachAvailabilityPut = _interopRequireDefault(require("../model/CoachAvailabilityPut"));

var _CoachPaymentMethod = _interopRequireDefault(require("../model/CoachPaymentMethod"));

var _CoachProfile = _interopRequireDefault(require("../model/CoachProfile"));

var _CoachReview = _interopRequireDefault(require("../model/CoachReview"));

var _CoachSession = _interopRequireDefault(require("../model/CoachSession"));

var _CoachSessionPut = _interopRequireDefault(require("../model/CoachSessionPut"));

var _Filter = _interopRequireDefault(require("../model/Filter"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject1"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject10"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject11"));

var _InlineObject5 = _interopRequireDefault(require("../model/InlineObject12"));

var _InlineObject6 = _interopRequireDefault(require("../model/InlineObject13"));

var _InlineObject7 = _interopRequireDefault(require("../model/InlineObject14"));

var _InlineObject8 = _interopRequireDefault(require("../model/InlineObject15"));

var _InlineObject9 = _interopRequireDefault(require("../model/InlineObject16"));

var _InlineObject10 = _interopRequireDefault(require("../model/InlineObject2"));

var _InlineObject11 = _interopRequireDefault(require("../model/InlineObject3"));

var _InlineObject12 = _interopRequireDefault(require("../model/InlineObject4"));

var _InlineObject13 = _interopRequireDefault(require("../model/InlineObject5"));

var _InlineObject14 = _interopRequireDefault(require("../model/InlineObject6"));

var _InlineObject15 = _interopRequireDefault(require("../model/InlineObject7"));

var _InlineObject16 = _interopRequireDefault(require("../model/InlineObject8"));

var _InlineObject17 = _interopRequireDefault(require("../model/InlineObject9"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2001"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse20010"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse20011"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse20012"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse20013"));

var _InlineResponse7 = _interopRequireDefault(require("../model/InlineResponse20014"));

var _InlineResponse8 = _interopRequireDefault(require("../model/InlineResponse20015"));

var _InlineResponse9 = _interopRequireDefault(require("../model/InlineResponse20016"));

var _InlineResponse10 = _interopRequireDefault(require("../model/InlineResponse20017"));

var _InlineResponse11 = _interopRequireDefault(require("../model/InlineResponse20018"));

var _InlineResponse12 = _interopRequireDefault(require("../model/InlineResponse20019"));

var _InlineResponse13 = _interopRequireDefault(require("../model/InlineResponse2002"));

var _InlineResponse14 = _interopRequireDefault(require("../model/InlineResponse20020"));

var _InlineResponse15 = _interopRequireDefault(require("../model/InlineResponse20021"));

var _InlineResponse16 = _interopRequireDefault(require("../model/InlineResponse2003"));

var _InlineResponse17 = _interopRequireDefault(require("../model/InlineResponse2004"));

var _InlineResponse18 = _interopRequireDefault(require("../model/InlineResponse2005"));

var _InlineResponse19 = _interopRequireDefault(require("../model/InlineResponse2006"));

var _InlineResponse20 = _interopRequireDefault(require("../model/InlineResponse2007"));

var _InlineResponse21 = _interopRequireDefault(require("../model/InlineResponse2008"));

var _InlineResponse22 = _interopRequireDefault(require("../model/InlineResponse2009"));

var _InlineResponse23 = _interopRequireDefault(require("../model/InlineResponse201"));

var _InlineResponse24 = _interopRequireDefault(require("../model/InlineResponse2011"));

var _InlineResponse25 = _interopRequireDefault(require("../model/InlineResponse2012"));

var _InlineResponse26 = _interopRequireDefault(require("../model/InlineResponse2013"));

var _InlineResponse27 = _interopRequireDefault(require("../model/InlineResponse2014"));

var _InlineResponse28 = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse29 = _interopRequireDefault(require("../model/InlineResponse4001"));

var _InlineResponse30 = _interopRequireDefault(require("../model/InlineResponse500"));

var _Lesson = _interopRequireDefault(require("../model/Lesson"));

var _LessonCancelRequest = _interopRequireDefault(require("../model/LessonCancelRequest"));

var _LessonProblemReport = _interopRequireDefault(require("../model/LessonProblemReport"));

var _LocationRequest = _interopRequireDefault(require("../model/LocationRequest"));

var _LocationRequestOptional = _interopRequireDefault(require("../model/LocationRequestOptional"));

var _StudentNotificationFilter = _interopRequireDefault(require("../model/StudentNotificationFilter"));

var _StudentPaymentMethod = _interopRequireDefault(require("../model/StudentPaymentMethod"));

var _StudentProfile = _interopRequireDefault(require("../model/StudentProfile"));

var _StudentProfileBasicInfo = _interopRequireDefault(require("../model/StudentProfileBasicInfo"));

var _StudentProfileNotifications = _interopRequireDefault(require("../model/StudentProfileNotifications"));

var _StudentProfilePost = _interopRequireDefault(require("../model/StudentProfilePost"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.12
*/
var DefaultApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete location information by locationId
   * Coach can use this endpoint to delete their location.
   * @param {String} locationId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(DefaultApi, [{
    key: "deleteLocationLocationIdWithHttpInfo",
    value: function deleteLocationLocationIdWithHttpInfo(locationId) {
      var postBody = null; // verify the required parameter 'locationId' is set

      if (locationId === undefined || locationId === null) {
        throw new Error("Missing the required parameter 'locationId' when calling deleteLocationLocationId");
      }

      var pathParams = {
        'locationId': locationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/location/{locationId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete location information by locationId
     * Coach can use this endpoint to delete their location.
     * @param {String} locationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteLocationLocationId",
    value: function deleteLocationLocationId(locationId) {
      return this.deleteLocationLocationIdWithHttpInfo(locationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Deletes a coach availability by ID
     * @param {String} availabilityId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteUserCoachAvailabilityAvailabilityIdWithHttpInfo",
    value: function deleteUserCoachAvailabilityAvailabilityIdWithHttpInfo(availabilityId) {
      var postBody = null; // verify the required parameter 'availabilityId' is set

      if (availabilityId === undefined || availabilityId === null) {
        throw new Error("Missing the required parameter 'availabilityId' when calling deleteUserCoachAvailabilityAvailabilityId");
      }

      var pathParams = {
        'availabilityId': availabilityId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/coach/availability/{availabilityId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Deletes a coach availability by ID
     * @param {String} availabilityId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteUserCoachAvailabilityAvailabilityId",
    value: function deleteUserCoachAvailabilityAvailabilityId(availabilityId) {
      return this.deleteUserCoachAvailabilityAvailabilityIdWithHttpInfo(availabilityId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Coach delete payment method Id
     * Coach deletes their listed payment method
     * @param {String} paymentMethodId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteUserCoachProfileSettingsPayoutPaymentMethodIdWithHttpInfo",
    value: function deleteUserCoachProfileSettingsPayoutPaymentMethodIdWithHttpInfo(paymentMethodId) {
      var postBody = null; // verify the required parameter 'paymentMethodId' is set

      if (paymentMethodId === undefined || paymentMethodId === null) {
        throw new Error("Missing the required parameter 'paymentMethodId' when calling deleteUserCoachProfileSettingsPayoutPaymentMethodId");
      }

      var pathParams = {
        'paymentMethodId': paymentMethodId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/coach/profile/settings/payout/{paymentMethodId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Coach delete payment method Id
     * Coach deletes their listed payment method
     * @param {String} paymentMethodId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteUserCoachProfileSettingsPayoutPaymentMethodId",
    value: function deleteUserCoachProfileSettingsPayoutPaymentMethodId(paymentMethodId) {
      return this.deleteUserCoachProfileSettingsPayoutPaymentMethodIdWithHttpInfo(paymentMethodId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete user filter by ID
     * Delete user filter by name
     * @param {String} filterId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteUserFilterFilterNameWithHttpInfo",
    value: function deleteUserFilterFilterNameWithHttpInfo(filterId) {
      var postBody = null; // verify the required parameter 'filterId' is set

      if (filterId === undefined || filterId === null) {
        throw new Error("Missing the required parameter 'filterId' when calling deleteUserFilterFilterName");
      }

      var pathParams = {
        'filterId': filterId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml'];
      var returnType = Object;
      return this.apiClient.callApi('/student/filter/{filterId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete user filter by ID
     * Delete user filter by name
     * @param {String} filterId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteUserFilterFilterName",
    value: function deleteUserFilterFilterName(filterId) {
      return this.deleteUserFilterFilterNameWithHttpInfo(filterId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete payment method by payment ID
     * Delete payment method by ID
     * @param {String} studentId 
     * @param {String} paymentMethodId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodIdWithHttpInfo",
    value: function deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodIdWithHttpInfo(studentId, paymentMethodId) {
      var postBody = null; // verify the required parameter 'studentId' is set

      if (studentId === undefined || studentId === null) {
        throw new Error("Missing the required parameter 'studentId' when calling deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId");
      } // verify the required parameter 'paymentMethodId' is set


      if (paymentMethodId === undefined || paymentMethodId === null) {
        throw new Error("Missing the required parameter 'paymentMethodId' when calling deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId");
      }

      var pathParams = {
        'studentId': studentId,
        'paymentMethodId': paymentMethodId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/student/profile/payment-methods/{studentId}/{paymentMethodId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete payment method by payment ID
     * Delete payment method by ID
     * @param {String} studentId 
     * @param {String} paymentMethodId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId",
    value: function deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId(studentId, paymentMethodId) {
      return this.deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodIdWithHttpInfo(studentId, paymentMethodId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get coach's own profile
     * This fetches the information of the coach profile
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "getCoachWithHttpInfo",
    value: function getCoachWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/coach/profile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get coach's own profile
     * This fetches the information of the coach profile
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "getCoach",
    value: function getCoach() {
      return this.getCoachWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Signup student with basic information
     * Create basic coach profile and set coach firebase custom claims - {\"role\":\"coach-pending\"}
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject14} opts.inlineObject14 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "getCoachSignupWithHttpInfo",
    value: function getCoachSignupWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject14'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/coach/signup', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Signup student with basic information
     * Create basic coach profile and set coach firebase custom claims - {\"role\":\"coach-pending\"}
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject14} opts.inlineObject14 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "getCoachSignup",
    value: function getCoachSignup(opts) {
      return this.getCoachSignupWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get all saved locations by coach
     * Coach can invoke this endpoint to get all the training locations he/she saved in the pass
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20019} and HTTP response
     */

  }, {
    key: "getLocationWithHttpInfo",
    value: function getLocationWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse12["default"];
      return this.apiClient.callApi('/location', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all saved locations by coach
     * Coach can invoke this endpoint to get all the training locations he/she saved in the pass
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20019}
     */

  }, {
    key: "getLocation",
    value: function getLocation() {
      return this.getLocationWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get location information by locationId
     * Both student and coach can use this endpoint to fetch location information.
     * @param {String} locationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20020} and HTTP response
     */

  }, {
    key: "getLocationLocationIdWithHttpInfo",
    value: function getLocationLocationIdWithHttpInfo(locationId) {
      var postBody = null; // verify the required parameter 'locationId' is set

      if (locationId === undefined || locationId === null) {
        throw new Error("Missing the required parameter 'locationId' when calling getLocationLocationId");
      }

      var pathParams = {
        'locationId': locationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse14["default"];
      return this.apiClient.callApi('/location/{locationId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get location information by locationId
     * Both student and coach can use this endpoint to fetch location information.
     * @param {String} locationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20020}
     */

  }, {
    key: "getLocationLocationId",
    value: function getLocationLocationId(locationId) {
      return this.getLocationLocationIdWithHttpInfo(locationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Bookings
     * Get list of bookings
     * @param {Object} opts Optional parameters
     * @param {String} opts.location This is the city locations of the bookings
     * @param {String} opts.startTime This is the startTime of the booking range
     * @param {String} opts.endTime This is the endTime of the booking
     * @param {module:model/String} opts.bookingType This is your booking parameter
     * @param {String} opts.filterID This is the filter id of the filter that you saved
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Number>} and HTTP response
     */

  }, {
    key: "getUserAdminWithHttpInfo",
    value: function getUserAdminWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'location': opts['location'],
        'startTime': opts['startTime'],
        'endTime': opts['endTime'],
        'bookingType': opts['bookingType'],
        'filterID': opts['filterID']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['Number'];
      return this.apiClient.callApi('/admin/bookings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Bookings
     * Get list of bookings
     * @param {Object} opts Optional parameters
     * @param {String} opts.location This is the city locations of the bookings
     * @param {String} opts.startTime This is the startTime of the booking range
     * @param {String} opts.endTime This is the endTime of the booking
     * @param {module:model/String} opts.bookingType This is your booking parameter
     * @param {String} opts.filterID This is the filter id of the filter that you saved
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Number>}
     */

  }, {
    key: "getUserAdmin",
    value: function getUserAdmin(opts) {
      return this.getUserAdminWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Your GET endpoint
     * Get dashboard location percentage
     * @param {module:model/String} reachedType This is the type of information that you want to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.startTime This is the start range of the period
     * @param {String} opts.endTime This is the end range of the period
     * @param {Number} opts.numItems This determines how many results you want to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2008} and HTTP response
     */

  }, {
    key: "getUserAdminBookingLocationPercentageWithHttpInfo",
    value: function getUserAdminBookingLocationPercentageWithHttpInfo(reachedType, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'reachedType' is set

      if (reachedType === undefined || reachedType === null) {
        throw new Error("Missing the required parameter 'reachedType' when calling getUserAdminBookingLocationPercentage");
      }

      var pathParams = {};
      var queryParams = {
        'startTime': opts['startTime'],
        'endTime': opts['endTime'],
        'numItems': opts['numItems'],
        'reachedType': reachedType
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse21["default"];
      return this.apiClient.callApi('/admin/dashboard-location-percentage', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Your GET endpoint
     * Get dashboard location percentage
     * @param {module:model/String} reachedType This is the type of information that you want to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.startTime This is the start range of the period
     * @param {String} opts.endTime This is the end range of the period
     * @param {Number} opts.numItems This determines how many results you want to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2008}
     */

  }, {
    key: "getUserAdminBookingLocationPercentage",
    value: function getUserAdminBookingLocationPercentage(reachedType, opts) {
      return this.getUserAdminBookingLocationPercentageWithHttpInfo(reachedType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Admin get certificates
     * Get coach's certificates
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status This is the filter for requests
     * @param {String} opts.numItems This is the number of items to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InlineResponse20013>} and HTTP response
     */

  }, {
    key: "getUserAdminCertificateWithHttpInfo",
    value: function getUserAdminCertificateWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'status': opts['status'],
        'numItems': opts['numItems']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse6["default"]];
      return this.apiClient.callApi('/admin/certificate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Admin get certificates
     * Get coach's certificates
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status This is the filter for requests
     * @param {String} opts.numItems This is the number of items to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse20013>}
     */

  }, {
    key: "getUserAdminCertificate",
    value: function getUserAdminCertificate(opts) {
      return this.getUserAdminCertificateWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Admin get certificate from coachId
     * Retrieve coach certificate
     * @param {String} coachId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InlineResponse20014>} and HTTP response
     */

  }, {
    key: "getUserAdminCertificateCoachIdWithHttpInfo",
    value: function getUserAdminCertificateCoachIdWithHttpInfo(coachId) {
      var postBody = null; // verify the required parameter 'coachId' is set

      if (coachId === undefined || coachId === null) {
        throw new Error("Missing the required parameter 'coachId' when calling getUserAdminCertificateCoachId");
      }

      var pathParams = {
        'coachId': coachId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse7["default"]];
      return this.apiClient.callApi('/admin/certificate/{coachId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Admin get certificate from coachId
     * Retrieve coach certificate
     * @param {String} coachId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse20014>}
     */

  }, {
    key: "getUserAdminCertificateCoachId",
    value: function getUserAdminCertificateCoachId(coachId) {
      return this.getUserAdminCertificateCoachIdWithHttpInfo(coachId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get complaint from user
     * Get user complains
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20012} and HTTP response
     */

  }, {
    key: "getUserAdminComplaintUserIdWithHttpInfo",
    value: function getUserAdminComplaintUserIdWithHttpInfo(userId) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserAdminComplaintUserId");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse5["default"];
      return this.apiClient.callApi('/admin/complaint/{userId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get complaint from user
     * Get user complains
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20012}
     */

  }, {
    key: "getUserAdminComplaintUserId",
    value: function getUserAdminComplaintUserId(userId) {
      return this.getUserAdminComplaintUserIdWithHttpInfo(userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * This get the dashboard filter names
     * Get admin dashbord filter names
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InlineResponse2009>} and HTTP response
     */

  }, {
    key: "getUserAdminDashboardFilterWithHttpInfo",
    value: function getUserAdminDashboardFilterWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse22["default"]];
      return this.apiClient.callApi('/admin/dashboard-filter', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * This get the dashboard filter names
     * Get admin dashbord filter names
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse2009>}
     */

  }, {
    key: "getUserAdminDashboardFilter",
    value: function getUserAdminDashboardFilter() {
      return this.getUserAdminDashboardFilterWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Your GET endpoint
     * Retrieve dashboard location
     * @param {String} state This is the state from where to fetch data
     * @param {module:model/String} reachedType This is the type of information that you want to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.city This is an optional field to pick the city
     * @param {String} opts.startTime This is the start range of the period
     * @param {String} opts.endTime This is the end range of the period
     * @param {String} opts.filterID This is the filter id that represents the saved filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
     */

  }, {
    key: "getUserAdminDashboardLocationStateWithHttpInfo",
    value: function getUserAdminDashboardLocationStateWithHttpInfo(state, reachedType, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'state' is set

      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling getUserAdminDashboardLocationState");
      } // verify the required parameter 'reachedType' is set


      if (reachedType === undefined || reachedType === null) {
        throw new Error("Missing the required parameter 'reachedType' when calling getUserAdminDashboardLocationState");
      }

      var pathParams = {};
      var queryParams = {
        'state': state,
        'city': opts['city'],
        'reachedType': reachedType,
        'startTime': opts['startTime'],
        'endTime': opts['endTime'],
        'filterID': opts['filterID']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse20["default"];
      return this.apiClient.callApi('/admin/dashboard-location', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Your GET endpoint
     * Retrieve dashboard location
     * @param {String} state This is the state from where to fetch data
     * @param {module:model/String} reachedType This is the type of information that you want to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.city This is an optional field to pick the city
     * @param {String} opts.startTime This is the start range of the period
     * @param {String} opts.endTime This is the end range of the period
     * @param {String} opts.filterID This is the filter id that represents the saved filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2007}
     */

  }, {
    key: "getUserAdminDashboardLocationState",
    value: function getUserAdminDashboardLocationState(state, reachedType, opts) {
      return this.getUserAdminDashboardLocationStateWithHttpInfo(state, reachedType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Admin get profile
     * Get profile of admin
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20018} and HTTP response
     */

  }, {
    key: "getUserAdminProfileWithHttpInfo",
    value: function getUserAdminProfileWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse11["default"];
      return this.apiClient.callApi('/admin/profile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Admin get profile
     * Get profile of admin
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20018}
     */

  }, {
    key: "getUserAdminProfile",
    value: function getUserAdminProfile() {
      return this.getUserAdminProfileWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Admin get Profile-Check
     * Get the status of the coach's profile check
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status This is the profiles to filter on 
     * @param {String} opts.numItems This is the number of items that you want to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InlineResponse20015>} and HTTP response
     */

  }, {
    key: "getUserAdminProfileCheckWithHttpInfo",
    value: function getUserAdminProfileCheckWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'status': opts['status'],
        'numItems': opts['numItems']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse8["default"]];
      return this.apiClient.callApi('/admin/profile-check', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Admin get Profile-Check
     * Get the status of the coach's profile check
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status This is the profiles to filter on 
     * @param {String} opts.numItems This is the number of items that you want to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse20015>}
     */

  }, {
    key: "getUserAdminProfileCheck",
    value: function getUserAdminProfileCheck(opts) {
      return this.getUserAdminProfileCheckWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Admin gets user complaints
     * Get users complaints
     * @param {Object} opts Optional parameters
     * @param {Number} opts.numItems This is the number of items that you want to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InlineResponse20011>} and HTTP response
     */

  }, {
    key: "getUserAdminUserComplaintsWithHttpInfo",
    value: function getUserAdminUserComplaintsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'numItems': opts['numItems']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse4["default"]];
      return this.apiClient.callApi('/admin/complaint', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Admin gets user complaints
     * Get users complaints
     * @param {Object} opts Optional parameters
     * @param {Number} opts.numItems This is the number of items that you want to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse20011>}
     */

  }, {
    key: "getUserAdminUserComplaints",
    value: function getUserAdminUserComplaints(opts) {
      return this.getUserAdminUserComplaintsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Admin get user feedback
     * Get list of user feedback
     * @param {Object} opts Optional parameters
     * @param {Number} opts.rating This is used to filter feature by rating
     * @param {String} opts.startTime This is the start time of the range
     * @param {String} opts.endTime This is the end time of the range
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InlineResponse20016>} and HTTP response
     */

  }, {
    key: "getUserAdminUserFeedbackWithHttpInfo",
    value: function getUserAdminUserFeedbackWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'rating': opts['rating'],
        'startTime': opts['startTime'],
        'endTime': opts['endTime']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse9["default"]];
      return this.apiClient.callApi('/admin/user-feedback', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Admin get user feedback
     * Get list of user feedback
     * @param {Object} opts Optional parameters
     * @param {Number} opts.rating This is used to filter feature by rating
     * @param {String} opts.startTime This is the start time of the range
     * @param {String} opts.endTime This is the end time of the range
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse20016>}
     */

  }, {
    key: "getUserAdminUserFeedback",
    value: function getUserAdminUserFeedback(opts) {
      return this.getUserAdminUserFeedbackWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Admin get feedback for specific feature
     * Get feedback for a specific feature
     * @param {String} featureId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InlineResponse20017>} and HTTP response
     */

  }, {
    key: "getUserAdminUserFeedbackFeedbackIdWithHttpInfo",
    value: function getUserAdminUserFeedbackFeedbackIdWithHttpInfo(featureId) {
      var postBody = null; // verify the required parameter 'featureId' is set

      if (featureId === undefined || featureId === null) {
        throw new Error("Missing the required parameter 'featureId' when calling getUserAdminUserFeedbackFeedbackId");
      }

      var pathParams = {
        'featureId': featureId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse10["default"]];
      return this.apiClient.callApi('/admin/user-feedback/{featureId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Admin get feedback for specific feature
     * Get feedback for a specific feature
     * @param {String} featureId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse20017>}
     */

  }, {
    key: "getUserAdminUserFeedbackFeedbackId",
    value: function getUserAdminUserFeedbackFeedbackId(featureId) {
      return this.getUserAdminUserFeedbackFeedbackIdWithHttpInfo(featureId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Your GET endpoint
     * Get user management
     * @param {Object} opts Optional parameters
     * @param {Number} opts.cancellations This is the cancellation parameter to filter the user
     * @param {module:model/String} opts.status This is the status to filter
     * @param {Number} opts.rating This is the rating to filter
     * @param {module:model/String} opts.userType This is the user type to filter
     * @param {Number} opts.numItems This is the number of items to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20010} and HTTP response
     */

  }, {
    key: "getUserAdminUsersManagementWithHttpInfo",
    value: function getUserAdminUsersManagementWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'Cancellations': opts['cancellations'],
        'Status': opts['status'],
        'Rating': opts['rating'],
        'UserType': opts['userType'],
        'numItems': opts['numItems']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/admin/users-management', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Your GET endpoint
     * Get user management
     * @param {Object} opts Optional parameters
     * @param {Number} opts.cancellations This is the cancellation parameter to filter the user
     * @param {module:model/String} opts.status This is the status to filter
     * @param {Number} opts.rating This is the rating to filter
     * @param {module:model/String} opts.userType This is the user type to filter
     * @param {Number} opts.numItems This is the number of items to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20010}
     */

  }, {
    key: "getUserAdminUsersManagement",
    value: function getUserAdminUsersManagement(opts) {
      return this.getUserAdminUsersManagementWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Coach gets own availability
     * Retrieve the coach's availability
     * @param {Object} opts Optional parameters
     * @param {String} opts.startTime This is the start range of availability items you want to fetch
     * @param {String} opts.endTime This is the end range of availability items you want to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */

  }, {
    key: "getUserCoachAvailabilityWithHttpInfo",
    value: function getUserCoachAvailabilityWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'startTime': opts['startTime'],
        'endTime': opts['endTime']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Object];
      return this.apiClient.callApi('/coach/availability/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Coach gets own availability
     * Retrieve the coach's availability
     * @param {Object} opts Optional parameters
     * @param {String} opts.startTime This is the start range of availability items you want to fetch
     * @param {String} opts.endTime This is the end range of availability items you want to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */

  }, {
    key: "getUserCoachAvailability",
    value: function getUserCoachAvailability(opts) {
      return this.getUserCoachAvailabilityWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Availability Info
     * This gets the coach's availability options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */

  }, {
    key: "getUserCoachAvailabilityInfoWithHttpInfo",
    value: function getUserCoachAvailabilityInfoWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse13["default"];
      return this.apiClient.callApi('/coach/availability-options', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Availability Info
     * This gets the coach's availability options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */

  }, {
    key: "getUserCoachAvailabilityInfo",
    value: function getUserCoachAvailabilityInfo() {
      return this.getUserCoachAvailabilityInfoWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get coach analytics insight
     * Get coach insights
     * @param {String} locationID This is the location from where you are going to retrieve analytics.  It can be all if you want to retrieve all notifications
     * @param {String} startTime This  is the start range of data to perform analytics
     * @param {String} endTime This is the end range of data to perform analytics
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */

  }, {
    key: "getUserCoachInsightsWithHttpInfo",
    value: function getUserCoachInsightsWithHttpInfo(locationID, startTime, endTime) {
      var postBody = null; // verify the required parameter 'locationID' is set

      if (locationID === undefined || locationID === null) {
        throw new Error("Missing the required parameter 'locationID' when calling getUserCoachInsights");
      } // verify the required parameter 'startTime' is set


      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling getUserCoachInsights");
      } // verify the required parameter 'endTime' is set


      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling getUserCoachInsights");
      }

      var pathParams = {};
      var queryParams = {
        'locationID': locationID,
        'startTime': startTime,
        'endTime': endTime
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse17["default"];
      return this.apiClient.callApi('/coach/insights/analytics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get coach analytics insight
     * Get coach insights
     * @param {String} locationID This is the location from where you are going to retrieve analytics.  It can be all if you want to retrieve all notifications
     * @param {String} startTime This  is the start range of data to perform analytics
     * @param {String} endTime This is the end range of data to perform analytics
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */

  }, {
    key: "getUserCoachInsights",
    value: function getUserCoachInsights(locationID, startTime, endTime) {
      return this.getUserCoachInsightsWithHttpInfo(locationID, startTime, endTime).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Coach Notifications
     * Retrieve coach notification
     * @param {Object} opts Optional parameters
     * @param {Number} opts.numItems This is the number of notifications that you want to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InlineResponse2005>} and HTTP response
     */

  }, {
    key: "getUserCoachNotificationsWithHttpInfo",
    value: function getUserCoachNotificationsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'numItems': opts['numItems']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse18["default"]];
      return this.apiClient.callApi('/coach/notifications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Coach Notifications
     * Retrieve coach notification
     * @param {Object} opts Optional parameters
     * @param {Number} opts.numItems This is the number of notifications that you want to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse2005>}
     */

  }, {
    key: "getUserCoachNotifications",
    value: function getUserCoachNotifications(opts) {
      return this.getUserCoachNotificationsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get coach profile by Id
     * Get coach profile data
     * @param {String} coachId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */

  }, {
    key: "getUserCoachProfileCoachIdWithHttpInfo",
    value: function getUserCoachProfileCoachIdWithHttpInfo(coachId) {
      var postBody = null; // verify the required parameter 'coachId' is set

      if (coachId === undefined || coachId === null) {
        throw new Error("Missing the required parameter 'coachId' when calling getUserCoachProfileCoachId");
      }

      var pathParams = {
        'coachId': coachId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/coach/profile/{coachId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get coach profile by Id
     * Get coach profile data
     * @param {String} coachId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */

  }, {
    key: "getUserCoachProfileCoachId",
    value: function getUserCoachProfileCoachId(coachId) {
      return this.getUserCoachProfileCoachIdWithHttpInfo(coachId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get coach notifications settings
     * Retrieve coach notification settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */

  }, {
    key: "getUserCoachProfileSettingsNotificationsWithHttpInfo",
    value: function getUserCoachProfileSettingsNotificationsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse16["default"];
      return this.apiClient.callApi('/coach/profile/settings/notifications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get coach notifications settings
     * Retrieve coach notification settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */

  }, {
    key: "getUserCoachProfileSettingsNotifications",
    value: function getUserCoachProfileSettingsNotifications() {
      return this.getUserCoachProfileSettingsNotificationsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Coach Payout Methods
     * Get payout settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CoachPaymentMethod>} and HTTP response
     */

  }, {
    key: "getUserCoachProfileSettingsPayoutWithHttpInfo",
    value: function getUserCoachProfileSettingsPayoutWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CoachPaymentMethod["default"]];
      return this.apiClient.callApi('/coach/profile/settings/payout', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Coach Payout Methods
     * Get payout settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CoachPaymentMethod>}
     */

  }, {
    key: "getUserCoachProfileSettingsPayout",
    value: function getUserCoachProfileSettingsPayout() {
      return this.getUserCoachProfileSettingsPayoutWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Coach Get Reviews
     * Get list of coach reviews
     * @param {Object} opts Optional parameters
     * @param {Number} opts.numItems This is the number of reviews that you want to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CoachReview>} and HTTP response
     */

  }, {
    key: "getUserCoachReviewWithHttpInfo",
    value: function getUserCoachReviewWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'numItems': opts['numItems']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CoachReview["default"]];
      return this.apiClient.callApi('/coach/review', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Coach Get Reviews
     * Get list of coach reviews
     * @param {Object} opts Optional parameters
     * @param {Number} opts.numItems This is the number of reviews that you want to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CoachReview>}
     */

  }, {
    key: "getUserCoachReview",
    value: function getUserCoachReview(opts) {
      return this.getUserCoachReviewWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get coach session info
     * Get coach session plans
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CoachSession>} and HTTP response
     */

  }, {
    key: "getUserCoachSessionWithHttpInfo",
    value: function getUserCoachSessionWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CoachSession["default"]];
      return this.apiClient.callApi('/coach/session-plans', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get coach session info
     * Get coach session plans
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CoachSession>}
     */

  }, {
    key: "getUserCoachSession",
    value: function getUserCoachSession() {
      return this.getUserCoachSessionWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get user saved filters
     * Get user's saved filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "getUserFilterWithHttpInfo",
    value: function getUserFilterWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/student/filter', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get user saved filters
     * Get user's saved filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "getUserFilter",
    value: function getUserFilter() {
      return this.getUserFilterWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get user filter by ID
     * Get user saved filter by filter name
     * @param {String} filterId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterId2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Filter} and HTTP response
     */

  }, {
    key: "getUserFilterFilterNameWithHttpInfo",
    value: function getUserFilterFilterNameWithHttpInfo(filterId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'filterId' is set

      if (filterId === undefined || filterId === null) {
        throw new Error("Missing the required parameter 'filterId' when calling getUserFilterFilterName");
      }

      var pathParams = {
        'filterId': filterId
      };
      var queryParams = {
        'filterId': opts['filterId2']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Filter["default"];
      return this.apiClient.callApi('/student/filter/{filterId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get user filter by ID
     * Get user saved filter by filter name
     * @param {String} filterId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterId2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Filter}
     */

  }, {
    key: "getUserFilterFilterName",
    value: function getUserFilterFilterName(filterId, opts) {
      return this.getUserFilterFilterNameWithHttpInfo(filterId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a lesson
     * Get a lesson based on lessonId
     * @param {String} lessonId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Lesson} and HTTP response
     */

  }, {
    key: "getUserLessonsLessonIdWithHttpInfo",
    value: function getUserLessonsLessonIdWithHttpInfo(lessonId) {
      var postBody = null; // verify the required parameter 'lessonId' is set

      if (lessonId === undefined || lessonId === null) {
        throw new Error("Missing the required parameter 'lessonId' when calling getUserLessonsLessonId");
      }

      var pathParams = {
        'lessonId': lessonId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Lesson["default"];
      return this.apiClient.callApi('/lessons/{lessonId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a lesson
     * Get a lesson based on lessonId
     * @param {String} lessonId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Lesson}
     */

  }, {
    key: "getUserLessonsLessonId",
    value: function getUserLessonsLessonId(lessonId) {
      return this.getUserLessonsLessonIdWithHttpInfo(lessonId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get student notification filter by studentId
     * get notification filter by studentId
     * @param {String} studentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StudentNotificationFilter} and HTTP response
     */

  }, {
    key: "getUserStudentNotificationFilterWithHttpInfo",
    value: function getUserStudentNotificationFilterWithHttpInfo(studentId) {
      var postBody = null; // verify the required parameter 'studentId' is set

      if (studentId === undefined || studentId === null) {
        throw new Error("Missing the required parameter 'studentId' when calling getUserStudentNotificationFilter");
      }

      var pathParams = {
        'studentId': studentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StudentNotificationFilter["default"];
      return this.apiClient.callApi('/student/settings/notification-filter/{studentId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get student notification filter by studentId
     * get notification filter by studentId
     * @param {String} studentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StudentNotificationFilter}
     */

  }, {
    key: "getUserStudentNotificationFilter",
    value: function getUserStudentNotificationFilter(studentId) {
      return this.getUserStudentNotificationFilterWithHttpInfo(studentId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get student basic information
     * Get student basic information
     * @param {String} studentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StudentProfileBasicInfo} and HTTP response
     */

  }, {
    key: "getUserStudentProfileSettingsBasicInfoStudentIdWithHttpInfo",
    value: function getUserStudentProfileSettingsBasicInfoStudentIdWithHttpInfo(studentId) {
      var postBody = null; // verify the required parameter 'studentId' is set

      if (studentId === undefined || studentId === null) {
        throw new Error("Missing the required parameter 'studentId' when calling getUserStudentProfileSettingsBasicInfoStudentId");
      }

      var pathParams = {
        'studentId': studentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StudentProfileBasicInfo["default"];
      return this.apiClient.callApi('/student/profile/basic-info/{studentId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get student basic information
     * Get student basic information
     * @param {String} studentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StudentProfileBasicInfo}
     */

  }, {
    key: "getUserStudentProfileSettingsBasicInfoStudentId",
    value: function getUserStudentProfileSettingsBasicInfoStudentId(studentId) {
      return this.getUserStudentProfileSettingsBasicInfoStudentIdWithHttpInfo(studentId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * get student profile notification settings by ID
     * Retrieve student profile notification settings
     * @param {String} studentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StudentProfileNotifications} and HTTP response
     */

  }, {
    key: "getUserStudentProfileSettingsNotificationSettingsStudentIdWithHttpInfo",
    value: function getUserStudentProfileSettingsNotificationSettingsStudentIdWithHttpInfo(studentId) {
      var postBody = null; // verify the required parameter 'studentId' is set

      if (studentId === undefined || studentId === null) {
        throw new Error("Missing the required parameter 'studentId' when calling getUserStudentProfileSettingsNotificationSettingsStudentId");
      }

      var pathParams = {
        'studentId': studentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StudentProfileNotifications["default"];
      return this.apiClient.callApi('/student/profile/notification-settings/{studentId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * get student profile notification settings by ID
     * Retrieve student profile notification settings
     * @param {String} studentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StudentProfileNotifications}
     */

  }, {
    key: "getUserStudentProfileSettingsNotificationSettingsStudentId",
    value: function getUserStudentProfileSettingsNotificationSettingsStudentId(studentId) {
      return this.getUserStudentProfileSettingsNotificationSettingsStudentIdWithHttpInfo(studentId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get student payment methods
     * Get the registered payment methods
     * @param {String} studentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InlineResponse2006>} and HTTP response
     */

  }, {
    key: "getUserStudentProfileSettingsPaymentMethodsStudentIdWithHttpInfo",
    value: function getUserStudentProfileSettingsPaymentMethodsStudentIdWithHttpInfo(studentId) {
      var postBody = null; // verify the required parameter 'studentId' is set

      if (studentId === undefined || studentId === null) {
        throw new Error("Missing the required parameter 'studentId' when calling getUserStudentProfileSettingsPaymentMethodsStudentId");
      }

      var pathParams = {
        'studentId': studentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse19["default"]];
      return this.apiClient.callApi('/student/profile/payment-methods/{studentId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get student payment methods
     * Get the registered payment methods
     * @param {String} studentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse2006>}
     */

  }, {
    key: "getUserStudentProfileSettingsPaymentMethodsStudentId",
    value: function getUserStudentProfileSettingsPaymentMethodsStudentId(studentId) {
      return this.getUserStudentProfileSettingsPaymentMethodsStudentIdWithHttpInfo(studentId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get student profile by student ID
     * Retrieve student's profile
     * @param {String} studentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StudentProfile} and HTTP response
     */

  }, {
    key: "getUserStudentProfileSettingsStudentIdWithHttpInfo",
    value: function getUserStudentProfileSettingsStudentIdWithHttpInfo(studentId) {
      var postBody = null; // verify the required parameter 'studentId' is set

      if (studentId === undefined || studentId === null) {
        throw new Error("Missing the required parameter 'studentId' when calling getUserStudentProfileSettingsStudentId");
      }

      var pathParams = {
        'studentId': studentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StudentProfile["default"];
      return this.apiClient.callApi('/student/profile/{studentId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get student profile by student ID
     * Retrieve student's profile
     * @param {String} studentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StudentProfile}
     */

  }, {
    key: "getUserStudentProfileSettingsStudentId",
    value: function getUserStudentProfileSettingsStudentId(studentId) {
      return this.getUserStudentProfileSettingsStudentIdWithHttpInfo(studentId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get user lessons
     * Get current user lesssons information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Lesson} and HTTP response
     */

  }, {
    key: "getUsersLessonsWithHttpInfo",
    value: function getUsersLessonsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Lesson["default"];
      return this.apiClient.callApi('/lessons', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get user lessons
     * Get current user lesssons information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Lesson}
     */

  }, {
    key: "getUsersLessons",
    value: function getUsersLessons() {
      return this.getUsersLessonsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Edit location information by locationId
     * Coach can use this endpoint to edit their location.
     * @param {String} locationId 
     * @param {Object} opts Optional parameters
     * @param {module:model/LocationRequestOptional} opts.locationRequestOptional Location Request Model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "patchLocationLocationIdWithHttpInfo",
    value: function patchLocationLocationIdWithHttpInfo(locationId, opts) {
      opts = opts || {};
      var postBody = opts['locationRequestOptional']; // verify the required parameter 'locationId' is set

      if (locationId === undefined || locationId === null) {
        throw new Error("Missing the required parameter 'locationId' when calling patchLocationLocationId");
      }

      var pathParams = {
        'locationId': locationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/location/{locationId}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Edit location information by locationId
     * Coach can use this endpoint to edit their location.
     * @param {String} locationId 
     * @param {Object} opts Optional parameters
     * @param {module:model/LocationRequestOptional} opts.locationRequestOptional Location Request Model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "patchLocationLocationId",
    value: function patchLocationLocationId(locationId, opts) {
      return this.patchLocationLocationIdWithHttpInfo(locationId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Admin update certificate status
     * Update the coach's certificate status
     * @param {String} coachId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject9} opts.inlineObject9 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "patchUserAdminCertificateCoachIdWithHttpInfo",
    value: function patchUserAdminCertificateCoachIdWithHttpInfo(coachId, opts) {
      opts = opts || {};
      var postBody = opts['inlineObject9']; // verify the required parameter 'coachId' is set

      if (coachId === undefined || coachId === null) {
        throw new Error("Missing the required parameter 'coachId' when calling patchUserAdminCertificateCoachId");
      }

      var pathParams = {
        'coachId': coachId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/admin/certificate/{coachId}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Admin update certificate status
     * Update the coach's certificate status
     * @param {String} coachId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject9} opts.inlineObject9 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "patchUserAdminCertificateCoachId",
    value: function patchUserAdminCertificateCoachId(coachId, opts) {
      return this.patchUserAdminCertificateCoachIdWithHttpInfo(coachId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Admin update profile
     * Update admin profile
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject12} opts.inlineObject12 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "patchUserAdminProfileWithHttpInfo",
    value: function patchUserAdminProfileWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject12'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/admin/profile', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Admin update profile
     * Update admin profile
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject12} opts.inlineObject12 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "patchUserAdminProfile",
    value: function patchUserAdminProfile(opts) {
      return this.patchUserAdminProfileWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the status of the coach's profile check
     * @param {String} coachId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject11} opts.inlineObject11 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "patchUserAdminProfileCheckCoachIdWithHttpInfo",
    value: function patchUserAdminProfileCheckCoachIdWithHttpInfo(coachId, opts) {
      opts = opts || {};
      var postBody = opts['inlineObject11']; // verify the required parameter 'coachId' is set

      if (coachId === undefined || coachId === null) {
        throw new Error("Missing the required parameter 'coachId' when calling patchUserAdminProfileCheckCoachId");
      }

      var pathParams = {
        'coachId': coachId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/admin/profile-onboarding/{coachId}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the status of the coach's profile check
     * @param {String} coachId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject11} opts.inlineObject11 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "patchUserAdminProfileCheckCoachId",
    value: function patchUserAdminProfileCheckCoachId(coachId, opts) {
      return this.patchUserAdminProfileCheckCoachIdWithHttpInfo(coachId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Updates a coach availability by ID
     * @param {String} availabilityId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachAvailabilityPut} opts.coachAvailabilityPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "patchUserCoachAvailabilityWithHttpInfo",
    value: function patchUserCoachAvailabilityWithHttpInfo(availabilityId, opts) {
      opts = opts || {};
      var postBody = opts['coachAvailabilityPut']; // verify the required parameter 'availabilityId' is set

      if (availabilityId === undefined || availabilityId === null) {
        throw new Error("Missing the required parameter 'availabilityId' when calling patchUserCoachAvailability");
      }

      var pathParams = {
        'availabilityId': availabilityId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/coach/availability/{availabilityId}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Updates a coach availability by ID
     * @param {String} availabilityId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachAvailabilityPut} opts.coachAvailabilityPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "patchUserCoachAvailability",
    value: function patchUserCoachAvailability(availabilityId, opts) {
      return this.patchUserCoachAvailabilityWithHttpInfo(availabilityId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Set list of notifications as read
     * Mark the list of notifications as read
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/InlineObject>} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "patchUserCoachNotificationsReadWithHttpInfo",
    value: function patchUserCoachNotificationsReadWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/coach/notifications/read', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Set list of notifications as read
     * Mark the list of notifications as read
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/InlineObject>} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "patchUserCoachNotificationsRead",
    value: function patchUserCoachNotificationsRead(opts) {
      return this.patchUserCoachNotificationsReadWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update coach privacy settings
     * Update coach privacy settings
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.inlineObject2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "patchUserCoachProfileSettingsWithHttpInfo",
    value: function patchUserCoachProfileSettingsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject2'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/coach/profile/settings/privacy', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update coach privacy settings
     * Update coach privacy settings
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.inlineObject2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "patchUserCoachProfileSettings",
    value: function patchUserCoachProfileSettings(opts) {
      return this.patchUserCoachProfileSettingsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update coach profile notification settings
     * Update coach profile notification settings
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject5} opts.inlineObject5 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "patchUserCoachProfileSettingsNotificationsWithHttpInfo",
    value: function patchUserCoachProfileSettingsNotificationsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject5'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/coach/profile/settings/notifications', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update coach profile notification settings
     * Update coach profile notification settings
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject5} opts.inlineObject5 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "patchUserCoachProfileSettingsNotifications",
    value: function patchUserCoachProfileSettingsNotifications(opts) {
      return this.patchUserCoachProfileSettingsNotificationsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Send email verification email to user
     * Provided user email, send a email verification link to user email.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject16} opts.inlineObject16 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20021} and HTTP response
     */

  }, {
    key: "postAuthEmailVerificationWithHttpInfo",
    value: function postAuthEmailVerificationWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject16'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse15["default"];
      return this.apiClient.callApi('/auth/emailVerification', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Send email verification email to user
     * Provided user email, send a email verification link to user email.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject16} opts.inlineObject16 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20021}
     */

  }, {
    key: "postAuthEmailVerification",
    value: function postAuthEmailVerification(opts) {
      return this.postAuthEmailVerificationWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Send password reset email to user
     * Provided user email, send a password reset link to user email.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject15} opts.inlineObject15 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20021} and HTTP response
     */

  }, {
    key: "postAuthPasswordResetWithHttpInfo",
    value: function postAuthPasswordResetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject15'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse15["default"];
      return this.apiClient.callApi('/auth/passwordReset', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Send password reset email to user
     * Provided user email, send a password reset link to user email.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject15} opts.inlineObject15 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20021}
     */

  }, {
    key: "postAuthPasswordReset",
    value: function postAuthPasswordReset(opts) {
      return this.postAuthPasswordResetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * This endpoint is used to create the coach profile if it doesn't exist
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachProfile} opts.coachProfile 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */

  }, {
    key: "postCoachProfileWithHttpInfo",
    value: function postCoachProfileWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['coachProfile'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse23["default"];
      return this.apiClient.callApi('/coach/profile', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * This endpoint is used to create the coach profile if it doesn't exist
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachProfile} opts.coachProfile 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */

  }, {
    key: "postCoachProfile",
    value: function postCoachProfile(opts) {
      return this.postCoachProfileWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Add a location
     * This endpoint allow coach to add/saved a training location
     * @param {Object} opts Optional parameters
     * @param {module:model/LocationRequest} opts.locationRequest location request object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2014} and HTTP response
     */

  }, {
    key: "postLocationWithHttpInfo",
    value: function postLocationWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['locationRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse27["default"];
      return this.apiClient.callApi('/location', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add a location
     * This endpoint allow coach to add/saved a training location
     * @param {Object} opts Optional parameters
     * @param {module:model/LocationRequest} opts.locationRequest location request object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2014}
     */

  }, {
    key: "postLocation",
    value: function postLocation(opts) {
      return this.postLocationWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Signup student with basic information
     * Create basic student profile and set student firebase custom claims - {\"role\": \"student\"}
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject13} opts.inlineObject13 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "postStudentSignupWithHttpInfo",
    value: function postStudentSignupWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject13'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/student/signup', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Signup student with basic information
     * Create basic student profile and set student firebase custom claims - {\"role\": \"student\"}
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject13} opts.inlineObject13 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "postStudentSignup",
    value: function postStudentSignup(opts) {
      return this.postStudentSignupWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Admin set certificate status
     * Sets the coach's ceritifcate status
     * @param {String} coachId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject8} opts.inlineObject8 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */

  }, {
    key: "postUserAdminCertificateCoachIdWithHttpInfo",
    value: function postUserAdminCertificateCoachIdWithHttpInfo(coachId, opts) {
      opts = opts || {};
      var postBody = opts['inlineObject8']; // verify the required parameter 'coachId' is set

      if (coachId === undefined || coachId === null) {
        throw new Error("Missing the required parameter 'coachId' when calling postUserAdminCertificateCoachId");
      }

      var pathParams = {
        'coachId': coachId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse23["default"];
      return this.apiClient.callApi('/admin/certificate/{coachId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Admin set certificate status
     * Sets the coach's ceritifcate status
     * @param {String} coachId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject8} opts.inlineObject8 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */

  }, {
    key: "postUserAdminCertificateCoachId",
    value: function postUserAdminCertificateCoachId(coachId, opts) {
      return this.postUserAdminCertificateCoachIdWithHttpInfo(coachId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Save admin dashboard filter
     * Save admin dashbord filter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject7} opts.inlineObject7 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "postUserAdminDashboardFilterWithHttpInfo",
    value: function postUserAdminDashboardFilterWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject7'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/admin/dashboard-filter', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Save admin dashboard filter
     * Save admin dashbord filter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject7} opts.inlineObject7 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "postUserAdminDashboardFilter",
    value: function postUserAdminDashboardFilter(opts) {
      return this.postUserAdminDashboardFilterWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Admin set coach status
     * Sets the coach's status
     * @param {String} coachId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject10} opts.inlineObject10 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "postUserAdminProfileCheckCoachIdWithHttpInfo",
    value: function postUserAdminProfileCheckCoachIdWithHttpInfo(coachId, opts) {
      opts = opts || {};
      var postBody = opts['inlineObject10']; // verify the required parameter 'coachId' is set

      if (coachId === undefined || coachId === null) {
        throw new Error("Missing the required parameter 'coachId' when calling postUserAdminProfileCheckCoachId");
      }

      var pathParams = {
        'coachId': coachId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/admin/profile-onboarding/{coachId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Admin set coach status
     * Sets the coach's status
     * @param {String} coachId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject10} opts.inlineObject10 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "postUserAdminProfileCheckCoachId",
    value: function postUserAdminProfileCheckCoachId(coachId, opts) {
      return this.postUserAdminProfileCheckCoachIdWithHttpInfo(coachId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Admin send warning email
     * Send a warning email
     * @param {String} userId This is the userID to send warning email to.
     * @param {Object} opts Optional parameters
     * @param {String} opts.message This is an optional email message for the user. Otherwise, it will use the default emails.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "postUserAdminSendWarningEmailWithHttpInfo",
    value: function postUserAdminSendWarningEmailWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling postUserAdminSendWarningEmail");
      }

      var pathParams = {};
      var queryParams = {
        'userId': userId,
        'message': opts['message']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/admin/send-warning-email', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Admin send warning email
     * Send a warning email
     * @param {String} userId This is the userID to send warning email to.
     * @param {Object} opts Optional parameters
     * @param {String} opts.message This is an optional email message for the user. Otherwise, it will use the default emails.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "postUserAdminSendWarningEmail",
    value: function postUserAdminSendWarningEmail(userId, opts) {
      return this.postUserAdminSendWarningEmailWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create coach availability
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachAvailability} opts.coachAvailability 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */

  }, {
    key: "postUserCoachAvailabilityWithHttpInfo",
    value: function postUserCoachAvailabilityWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['coachAvailability'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse23["default"];
      return this.apiClient.callApi('/coach/availability/list', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create coach availability
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachAvailability} opts.coachAvailability 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */

  }, {
    key: "postUserCoachAvailability",
    value: function postUserCoachAvailability(opts) {
      return this.postUserCoachAvailabilityWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Set Coach Availability Options
     * This sets the coach's availability options
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */

  }, {
    key: "postUserCoachAvailabilityInfoWithHttpInfo",
    value: function postUserCoachAvailabilityInfoWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject1'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse23["default"];
      return this.apiClient.callApi('/coach/availability-options', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Set Coach Availability Options
     * This sets the coach's availability options
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */

  }, {
    key: "postUserCoachAvailabilityInfo",
    value: function postUserCoachAvailabilityInfo(opts) {
      return this.postUserCoachAvailabilityInfoWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Add Payment Method
     * Add a payment method to user
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject3} opts.inlineObject3 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "postUserCoachProfileSettingsPayoutWithHttpInfo",
    value: function postUserCoachProfileSettingsPayoutWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject3'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/coach/profile/settings/payout', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add Payment Method
     * Add a payment method to user
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject3} opts.inlineObject3 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "postUserCoachProfileSettingsPayout",
    value: function postUserCoachProfileSettingsPayout(opts) {
      return this.postUserCoachProfileSettingsPayoutWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a new session between user and coach
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachSession} opts.coachSession 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */

  }, {
    key: "postUserCoachSessionWithHttpInfo",
    value: function postUserCoachSessionWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['coachSession'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse23["default"];
      return this.apiClient.callApi('/coach/session-plans', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a new session between user and coach
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachSession} opts.coachSession 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */

  }, {
    key: "postUserCoachSession",
    value: function postUserCoachSession(opts) {
      return this.postUserCoachSessionWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Save a user filter
     * Save a new filter for user
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter} opts.filter Filter data in JSON
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */

  }, {
    key: "postUserFilterWithHttpInfo",
    value: function postUserFilterWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['filter'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse23["default"];
      return this.apiClient.callApi('/student/filter', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Save a user filter
     * Save a new filter for user
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter} opts.filter Filter data in JSON
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */

  }, {
    key: "postUserFilter",
    value: function postUserFilter(opts) {
      return this.postUserFilterWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Submit a lesson cancel request
     * This endpoint process lesson cancel request.
     * @param {String} lessonId 
     * @param {Object} opts Optional parameters
     * @param {module:model/LessonCancelRequest} opts.lessonCancelRequest Lesson Cancel Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2012} and HTTP response
     */

  }, {
    key: "postUserLessonLessonIdCancelRequestWithHttpInfo",
    value: function postUserLessonLessonIdCancelRequestWithHttpInfo(lessonId, opts) {
      opts = opts || {};
      var postBody = opts['lessonCancelRequest']; // verify the required parameter 'lessonId' is set

      if (lessonId === undefined || lessonId === null) {
        throw new Error("Missing the required parameter 'lessonId' when calling postUserLessonLessonIdCancelRequest");
      }

      var pathParams = {
        'lessonId': lessonId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse25["default"];
      return this.apiClient.callApi('/lesson/{lessonId}/cancel-request', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Submit a lesson cancel request
     * This endpoint process lesson cancel request.
     * @param {String} lessonId 
     * @param {Object} opts Optional parameters
     * @param {module:model/LessonCancelRequest} opts.lessonCancelRequest Lesson Cancel Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2012}
     */

  }, {
    key: "postUserLessonLessonIdCancelRequest",
    value: function postUserLessonLessonIdCancelRequest(lessonId, opts) {
      return this.postUserLessonLessonIdCancelRequestWithHttpInfo(lessonId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Book a new lesson
     * User use this endpoint to book a new lesson
     * @param {Object} opts Optional parameters
     * @param {module:model/Lesson} opts.lesson User detailed booking information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2011} and HTTP response
     */

  }, {
    key: "postUserLessonsWithHttpInfo",
    value: function postUserLessonsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['lesson'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse24["default"];
      return this.apiClient.callApi('/lessons', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Book a new lesson
     * User use this endpoint to book a new lesson
     * @param {Object} opts Optional parameters
     * @param {module:model/Lesson} opts.lesson User detailed booking information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2011}
     */

  }, {
    key: "postUserLessons",
    value: function postUserLessons(opts) {
      return this.postUserLessonsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Report a problem with a lesson
     * Report a problem with a lesson
     * @param {String} lessonId 
     * @param {Object} opts Optional parameters
     * @param {module:model/LessonProblemReport} opts.lessonProblemReport Report a problem
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2013} and HTTP response
     */

  }, {
    key: "postUserLessonsLessonIdProblemReportWithHttpInfo",
    value: function postUserLessonsLessonIdProblemReportWithHttpInfo(lessonId, opts) {
      opts = opts || {};
      var postBody = opts['lessonProblemReport']; // verify the required parameter 'lessonId' is set

      if (lessonId === undefined || lessonId === null) {
        throw new Error("Missing the required parameter 'lessonId' when calling postUserLessonsLessonIdProblemReport");
      }

      var pathParams = {
        'lessonId': lessonId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse26["default"];
      return this.apiClient.callApi('/lessons/{lessonId}/problem-report', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Report a problem with a lesson
     * Report a problem with a lesson
     * @param {String} lessonId 
     * @param {Object} opts Optional parameters
     * @param {module:model/LessonProblemReport} opts.lessonProblemReport Report a problem
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2013}
     */

  }, {
    key: "postUserLessonsLessonIdProblemReport",
    value: function postUserLessonsLessonIdProblemReport(lessonId, opts) {
      return this.postUserLessonsLessonIdProblemReportWithHttpInfo(lessonId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * create student notification filter with studentId
     * Create a student notification filter
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentNotificationFilter} opts.studentNotificationFilter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "postUserStudentNotificationFilterWithHttpInfo",
    value: function postUserStudentNotificationFilterWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['studentNotificationFilter'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/student/settings/notification-filter', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * create student notification filter with studentId
     * Create a student notification filter
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentNotificationFilter} opts.studentNotificationFilter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "postUserStudentNotificationFilter",
    value: function postUserStudentNotificationFilter(opts) {
      return this.postUserStudentNotificationFilterWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * create student profile
     * Create a student profile
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentProfilePost} opts.studentProfilePost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */

  }, {
    key: "postUserStudentProfileSettingsProfileCreateWithHttpInfo",
    value: function postUserStudentProfileSettingsProfileCreateWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['studentProfilePost'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse23["default"];
      return this.apiClient.callApi('/student/profile', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * create student profile
     * Create a student profile
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentProfilePost} opts.studentProfilePost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */

  }, {
    key: "postUserStudentProfileSettingsProfileCreate",
    value: function postUserStudentProfileSettingsProfileCreate(opts) {
      return this.postUserStudentProfileSettingsProfileCreateWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Admin ban user
     * Updates list of banned users
     * @param {Object} opts Optional parameters
     * @param {String} opts.userId This is the userID to ban
     * @param {String} opts.reason This is the reason why the user was banned
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "putUserAdminBanUserWithHttpInfo",
    value: function putUserAdminBanUserWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'userId': opts['userId'],
        'reason': opts['reason']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/admin/ban-user', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Admin ban user
     * Updates list of banned users
     * @param {Object} opts Optional parameters
     * @param {String} opts.userId This is the userID to ban
     * @param {String} opts.reason This is the reason why the user was banned
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "putUserAdminBanUser",
    value: function putUserAdminBanUser(opts) {
      return this.putUserAdminBanUserWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Unban user
     * Unban a user
     * @param {String} userId This is the userID to unban
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "putUserAdminUnbanUserWithHttpInfo",
    value: function putUserAdminUnbanUserWithHttpInfo(userId) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling putUserAdminUnbanUser");
      }

      var pathParams = {};
      var queryParams = {
        'userId': userId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/admin/unban-user', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Unban user
     * Unban a user
     * @param {String} userId This is the userID to unban
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "putUserAdminUnbanUser",
    value: function putUserAdminUnbanUser(userId) {
      return this.putUserAdminUnbanUserWithHttpInfo(userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update Availability Options
     * Update coach's availability options
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "putUserCoachAvailabilityOptionsWithHttpInfo",
    value: function putUserCoachAvailabilityOptionsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/coach/availability-options', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update Availability Options
     * Update coach's availability options
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "putUserCoachAvailabilityOptions",
    value: function putUserCoachAvailabilityOptions(opts) {
      return this.putUserCoachAvailabilityOptionsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update coach profile attributes
     * This endpoint is to overwrite the properties of the coach 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "putUserCoachProfileWithHttpInfo",
    value: function putUserCoachProfileWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/coach/profile', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update coach profile attributes
     * This endpoint is to overwrite the properties of the coach 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "putUserCoachProfile",
    value: function putUserCoachProfile(opts) {
      return this.putUserCoachProfileWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Disable Coach Account
     * Disable the coach account
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject6} opts.inlineObject6 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "putUserCoachProfileSettingsDisableWithHttpInfo",
    value: function putUserCoachProfileSettingsDisableWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject6'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/coach/profile/settings/disable', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Disable Coach Account
     * Disable the coach account
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject6} opts.inlineObject6 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "putUserCoachProfileSettingsDisable",
    value: function putUserCoachProfileSettingsDisable(opts) {
      return this.putUserCoachProfileSettingsDisableWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Enable Coach Account
     * Activate coach account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "putUserCoachProfileSettingsEnableWithHttpInfo",
    value: function putUserCoachProfileSettingsEnableWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/coach/profile/settings/enable', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Enable Coach Account
     * Activate coach account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "putUserCoachProfileSettingsEnable",
    value: function putUserCoachProfileSettingsEnable() {
      return this.putUserCoachProfileSettingsEnableWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Overwrite coach notification settings
     * User updates their notification settings
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject4} opts.inlineObject4 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "putUserCoachProfileSettingsNotificationsWithHttpInfo",
    value: function putUserCoachProfileSettingsNotificationsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject4'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/coach/profile/settings/notifications', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Overwrite coach notification settings
     * User updates their notification settings
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject4} opts.inlineObject4 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "putUserCoachProfileSettingsNotifications",
    value: function putUserCoachProfileSettingsNotifications(opts) {
      return this.putUserCoachProfileSettingsNotificationsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Coach set default payment method
     * User sets their payment method
     * @param {String} paymentMethodId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "putUserCoachProfileSettingsPayoutPaymentMethodIdWithHttpInfo",
    value: function putUserCoachProfileSettingsPayoutPaymentMethodIdWithHttpInfo(paymentMethodId) {
      var postBody = null; // verify the required parameter 'paymentMethodId' is set

      if (paymentMethodId === undefined || paymentMethodId === null) {
        throw new Error("Missing the required parameter 'paymentMethodId' when calling putUserCoachProfileSettingsPayoutPaymentMethodId");
      }

      var pathParams = {
        'paymentMethodId': paymentMethodId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/coach/profile/settings/payout/{paymentMethodId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Coach set default payment method
     * User sets their payment method
     * @param {String} paymentMethodId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "putUserCoachProfileSettingsPayoutPaymentMethodId",
    value: function putUserCoachProfileSettingsPayoutPaymentMethodId(paymentMethodId) {
      return this.putUserCoachProfileSettingsPayoutPaymentMethodIdWithHttpInfo(paymentMethodId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update user-coach session''
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachSessionPut} opts.coachSessionPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */

  }, {
    key: "putUserCoachSessionWithHttpInfo",
    value: function putUserCoachSessionWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['coachSessionPut'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse23["default"];
      return this.apiClient.callApi('/coach/session-plans', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update user-coach session''
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachSessionPut} opts.coachSessionPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */

  }, {
    key: "putUserCoachSession",
    value: function putUserCoachSession(opts) {
      return this.putUserCoachSessionWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * update student notification filter by studentId
     * Update student notifications with studentId
     * @param {String} studentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentNotificationFilter} opts.studentNotificationFilter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "putUserStudentNotificationFilterStudentIdWithHttpInfo",
    value: function putUserStudentNotificationFilterStudentIdWithHttpInfo(studentId, opts) {
      opts = opts || {};
      var postBody = opts['studentNotificationFilter']; // verify the required parameter 'studentId' is set

      if (studentId === undefined || studentId === null) {
        throw new Error("Missing the required parameter 'studentId' when calling putUserStudentNotificationFilterStudentId");
      }

      var pathParams = {
        'studentId': studentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/student/settings/notification-filter/{studentId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * update student notification filter by studentId
     * Update student notifications with studentId
     * @param {String} studentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentNotificationFilter} opts.studentNotificationFilter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "putUserStudentNotificationFilterStudentId",
    value: function putUserStudentNotificationFilterStudentId(studentId, opts) {
      return this.putUserStudentNotificationFilterStudentIdWithHttpInfo(studentId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Edit student basic information
     * Edit student's information
     * @param {String} studentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentProfileBasicInfo} opts.studentProfileBasicInfo 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "putUserStudentProfileSettingsBasicInfoWithHttpInfo",
    value: function putUserStudentProfileSettingsBasicInfoWithHttpInfo(studentId, opts) {
      opts = opts || {};
      var postBody = opts['studentProfileBasicInfo']; // verify the required parameter 'studentId' is set

      if (studentId === undefined || studentId === null) {
        throw new Error("Missing the required parameter 'studentId' when calling putUserStudentProfileSettingsBasicInfo");
      }

      var pathParams = {
        'studentId': studentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/student/profile/basic-info/{studentId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Edit student basic information
     * Edit student's information
     * @param {String} studentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentProfileBasicInfo} opts.studentProfileBasicInfo 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "putUserStudentProfileSettingsBasicInfo",
    value: function putUserStudentProfileSettingsBasicInfo(studentId, opts) {
      return this.putUserStudentProfileSettingsBasicInfoWithHttpInfo(studentId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Disable student profile settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "putUserStudentProfileSettingsDisableWithHttpInfo",
    value: function putUserStudentProfileSettingsDisableWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/student/profile/settings/disable', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Disable student profile settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "putUserStudentProfileSettingsDisable",
    value: function putUserStudentProfileSettingsDisable() {
      return this.putUserStudentProfileSettingsDisableWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Enable student profile settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "putUserStudentProfileSettingsEnableWithHttpInfo",
    value: function putUserStudentProfileSettingsEnableWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/student/profile/settings/enable', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Enable student profile settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "putUserStudentProfileSettingsEnable",
    value: function putUserStudentProfileSettingsEnable() {
      return this.putUserStudentProfileSettingsEnableWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the user notification settings
     * @param {String} studentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentProfileNotifications} opts.studentProfileNotifications 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "putUserStudentProfileSettingsNotificationSettingsWithHttpInfo",
    value: function putUserStudentProfileSettingsNotificationSettingsWithHttpInfo(studentId, opts) {
      opts = opts || {};
      var postBody = opts['studentProfileNotifications']; // verify the required parameter 'studentId' is set

      if (studentId === undefined || studentId === null) {
        throw new Error("Missing the required parameter 'studentId' when calling putUserStudentProfileSettingsNotificationSettings");
      }

      var pathParams = {
        'studentId': studentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/student/profile/notification-settings/{studentId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the user notification settings
     * @param {String} studentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentProfileNotifications} opts.studentProfileNotifications 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "putUserStudentProfileSettingsNotificationSettings",
    value: function putUserStudentProfileSettingsNotificationSettings(studentId, opts) {
      return this.putUserStudentProfileSettingsNotificationSettingsWithHttpInfo(studentId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create new payment method
     * Create a new payment method
     * @param {String} studentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentPaymentMethod} opts.studentPaymentMethod 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "putUserStudentProfileSettingsPaymentWithHttpInfo",
    value: function putUserStudentProfileSettingsPaymentWithHttpInfo(studentId, opts) {
      opts = opts || {};
      var postBody = opts['studentPaymentMethod']; // verify the required parameter 'studentId' is set

      if (studentId === undefined || studentId === null) {
        throw new Error("Missing the required parameter 'studentId' when calling putUserStudentProfileSettingsPayment");
      }

      var pathParams = {
        'studentId': studentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/student/profile/payment-methods/{studentId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create new payment method
     * Create a new payment method
     * @param {String} studentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentPaymentMethod} opts.studentPaymentMethod 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "putUserStudentProfileSettingsPayment",
    value: function putUserStudentProfileSettingsPayment(studentId, opts) {
      return this.putUserStudentProfileSettingsPaymentWithHttpInfo(studentId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Set student payment method to default by payment ID
     * Update student's payment method
     * @param {String} studentId 
     * @param {String} paymentMethodId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodIdWithHttpInfo",
    value: function putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodIdWithHttpInfo(studentId, paymentMethodId) {
      var postBody = null; // verify the required parameter 'studentId' is set

      if (studentId === undefined || studentId === null) {
        throw new Error("Missing the required parameter 'studentId' when calling putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId");
      } // verify the required parameter 'paymentMethodId' is set


      if (paymentMethodId === undefined || paymentMethodId === null) {
        throw new Error("Missing the required parameter 'paymentMethodId' when calling putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId");
      }

      var pathParams = {
        'studentId': studentId,
        'paymentMethodId': paymentMethodId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/student/profile/payment-methods/{studentId}/{paymentMethodId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Set student payment method to default by payment ID
     * Update student's payment method
     * @param {String} studentId 
     * @param {String} paymentMethodId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId",
    value: function putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId(studentId, paymentMethodId) {
      return this.putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodIdWithHttpInfo(studentId, paymentMethodId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DefaultApi;
}();

exports["default"] = DefaultApi;