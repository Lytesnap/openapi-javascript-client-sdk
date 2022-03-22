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

var _InlineObject6 = _interopRequireDefault(require("../model/InlineObject2"));

var _InlineObject7 = _interopRequireDefault(require("../model/InlineObject3"));

var _InlineObject8 = _interopRequireDefault(require("../model/InlineObject4"));

var _InlineObject9 = _interopRequireDefault(require("../model/InlineObject5"));

var _InlineObject10 = _interopRequireDefault(require("../model/InlineObject6"));

var _InlineObject11 = _interopRequireDefault(require("../model/InlineObject7"));

var _InlineObject12 = _interopRequireDefault(require("../model/InlineObject8"));

var _InlineObject13 = _interopRequireDefault(require("../model/InlineObject9"));

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

var _InlineResponse12 = _interopRequireDefault(require("../model/InlineResponse2002"));

var _InlineResponse13 = _interopRequireDefault(require("../model/InlineResponse2003"));

var _InlineResponse14 = _interopRequireDefault(require("../model/InlineResponse2004"));

var _InlineResponse15 = _interopRequireDefault(require("../model/InlineResponse2005"));

var _InlineResponse16 = _interopRequireDefault(require("../model/InlineResponse2006"));

var _InlineResponse17 = _interopRequireDefault(require("../model/InlineResponse2007"));

var _InlineResponse18 = _interopRequireDefault(require("../model/InlineResponse2008"));

var _InlineResponse19 = _interopRequireDefault(require("../model/InlineResponse2009"));

var _InlineResponse20 = _interopRequireDefault(require("../model/InlineResponse201"));

var _InlineResponse21 = _interopRequireDefault(require("../model/InlineResponse2011"));

var _InlineResponse22 = _interopRequireDefault(require("../model/InlineResponse2012"));

var _InlineResponse23 = _interopRequireDefault(require("../model/InlineResponse2013"));

var _InlineResponse24 = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse25 = _interopRequireDefault(require("../model/InlineResponse4001"));

var _InlineResponse26 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse27 = _interopRequireDefault(require("../model/InlineResponse500"));

var _Lesson = _interopRequireDefault(require("../model/Lesson"));

var _LessonCancelRequest = _interopRequireDefault(require("../model/LessonCancelRequest"));

var _LessonProblemReport = _interopRequireDefault(require("../model/LessonProblemReport"));

var _LocationRequest = _interopRequireDefault(require("../model/LocationRequest"));

var _LocationRequestOptional = _interopRequireDefault(require("../model/LocationRequestOptional"));

var _LocationResponse = _interopRequireDefault(require("../model/LocationResponse"));

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
* @version 1.0.0
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
   * Callback function to receive the result of the deleteLocationLocationId operation.
   * @callback module:api/DefaultApi~deleteLocationLocationIdCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete location information by locationId
   * Coach can use this endpoint to delete their location.
   * @param {String} locationId 
   * @param {module:api/DefaultApi~deleteLocationLocationIdCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(DefaultApi, [{
    key: "deleteLocationLocationId",
    value: function deleteLocationLocationId(locationId, callback) {
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
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/location/{locationId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteUserCoachAvailabilityAvailabilityId operation.
     * @callback module:api/DefaultApi~deleteUserCoachAvailabilityAvailabilityIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a coach availability by ID
     * @param {String} availabilityId 
     * @param {module:api/DefaultApi~deleteUserCoachAvailabilityAvailabilityIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "deleteUserCoachAvailabilityAvailabilityId",
    value: function deleteUserCoachAvailabilityAvailabilityId(availabilityId, callback) {
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
      return this.apiClient.callApi('/coach/availability/{availabilityId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteUserCoachProfileSettingsPayoutPaymentMethodId operation.
     * @callback module:api/DefaultApi~deleteUserCoachProfileSettingsPayoutPaymentMethodIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Coach delete payment method Id
     * Coach deletes their listed payment method
     * @param {String} paymentMethodId 
     * @param {module:api/DefaultApi~deleteUserCoachProfileSettingsPayoutPaymentMethodIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteUserCoachProfileSettingsPayoutPaymentMethodId",
    value: function deleteUserCoachProfileSettingsPayoutPaymentMethodId(paymentMethodId, callback) {
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
      return this.apiClient.callApi('/coach/profile-settings/payout/{paymentMethodId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteUserFilterFilterName operation.
     * @callback module:api/DefaultApi~deleteUserFilterFilterNameCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete user filter by ID
     * Delete user filter by name
     * @param {String} filterId 
     * @param {module:api/DefaultApi~deleteUserFilterFilterNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "deleteUserFilterFilterName",
    value: function deleteUserFilterFilterName(filterId, callback) {
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
      return this.apiClient.callApi('/student/filter/{filterId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId operation.
     * @callback module:api/DefaultApi~deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete payment method by payment ID
     * Delete payment method by ID
     * @param {String} studentId 
     * @param {String} paymentMethodId 
     * @param {module:api/DefaultApi~deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId",
    value: function deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId(studentId, paymentMethodId, callback) {
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
      return this.apiClient.callApi('/student/profile-settings/payment-methods/{studentId}/{paymentMethodId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getCoach operation.
     * @callback module:api/DefaultApi~getCoachCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CoachProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get coach's own profile
     * This fetches the information of the coach profile
     * @param {module:api/DefaultApi~getCoachCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CoachProfile}
     */

  }, {
    key: "getCoach",
    value: function getCoach(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CoachProfile["default"];
      return this.apiClient.callApi('/coach/profile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getLocation operation.
     * @callback module:api/DefaultApi~getLocationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20017} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all saved locations by coach
     * Coach can invoke this endpoint to get all the training locations he/she saved in the pass
     * @param {module:api/DefaultApi~getLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20017}
     */

  }, {
    key: "getLocation",
    value: function getLocation(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse10["default"];
      return this.apiClient.callApi('/location', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getLocationLocationId operation.
     * @callback module:api/DefaultApi~getLocationLocationIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get location information by locationId
     * Both student and coach can use this endpoint to fetch location information.
     * @param {String} locationId 
     * @param {module:api/DefaultApi~getLocationLocationIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationResponse}
     */

  }, {
    key: "getLocationLocationId",
    value: function getLocationLocationId(locationId, callback) {
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
      var returnType = _LocationResponse["default"];
      return this.apiClient.callApi('/location/{locationId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserAdmin operation.
     * @callback module:api/DefaultApi~getUserAdminCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Number>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Bookings
     * Get list of bookings
     * @param {Object} opts Optional parameters
     * @param {String} opts.location This is the city locations of the bookings
     * @param {String} opts.startTime This is the startTime of the booking range
     * @param {String} opts.endTime This is the endTime of the booking
     * @param {module:model/String} opts.bookingType This is your booking parameter
     * @param {String} opts.filterID This is the filter id of the filter that you saved
     * @param {module:api/DefaultApi~getUserAdminCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Number>}
     */

  }, {
    key: "getUserAdmin",
    value: function getUserAdmin(opts, callback) {
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
      return this.apiClient.callApi('/admin/bookings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserAdminBookingLocationPercentage operation.
     * @callback module:api/DefaultApi~getUserAdminBookingLocationPercentageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Your GET endpoint
     * Get dashboard location percentage
     * @param {module:model/String} reachedType This is the type of information that you want to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.startTime This is the start range of the period
     * @param {String} opts.endTime This is the end range of the period
     * @param {Number} opts.numItems This determines how many results you want to return
     * @param {module:api/DefaultApi~getUserAdminBookingLocationPercentageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */

  }, {
    key: "getUserAdminBookingLocationPercentage",
    value: function getUserAdminBookingLocationPercentage(reachedType, opts, callback) {
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
      var returnType = _InlineResponse16["default"];
      return this.apiClient.callApi('/admin/dashboard-location-percentage', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserAdminCertificate operation.
     * @callback module:api/DefaultApi~getUserAdminCertificateCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20011>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Admin get certificates
     * Get coach's certificates
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status This is the filter for requests
     * @param {String} opts.numItems This is the number of items to return
     * @param {module:api/DefaultApi~getUserAdminCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20011>}
     */

  }, {
    key: "getUserAdminCertificate",
    value: function getUserAdminCertificate(opts, callback) {
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
      var returnType = [_InlineResponse4["default"]];
      return this.apiClient.callApi('/admin/certificate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserAdminCertificateCoachId operation.
     * @callback module:api/DefaultApi~getUserAdminCertificateCoachIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20012>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Admin get certificate from coachId
     * Retrieve coach certificate
     * @param {String} coachId 
     * @param {module:api/DefaultApi~getUserAdminCertificateCoachIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20012>}
     */

  }, {
    key: "getUserAdminCertificateCoachId",
    value: function getUserAdminCertificateCoachId(coachId, callback) {
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
      var returnType = [_InlineResponse5["default"]];
      return this.apiClient.callApi('/admin/certificate/{coachId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserAdminComplaintUserId operation.
     * @callback module:api/DefaultApi~getUserAdminComplaintUserIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get complaint from user
     * Get user complains
     * @param {String} userId 
     * @param {module:api/DefaultApi~getUserAdminComplaintUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */

  }, {
    key: "getUserAdminComplaintUserId",
    value: function getUserAdminComplaintUserId(userId, callback) {
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
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/admin/complaint/{userId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserAdminDashboardFilter operation.
     * @callback module:api/DefaultApi~getUserAdminDashboardFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2007>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This get the dashboard filter names
     * Get admin dashbord filter names
     * @param {module:api/DefaultApi~getUserAdminDashboardFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2007>}
     */

  }, {
    key: "getUserAdminDashboardFilter",
    value: function getUserAdminDashboardFilter(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse17["default"]];
      return this.apiClient.callApi('/admin/dashboard-filter', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserAdminDashboardLocationState operation.
     * @callback module:api/DefaultApi~getUserAdminDashboardLocationStateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

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
     * @param {module:api/DefaultApi~getUserAdminDashboardLocationStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */

  }, {
    key: "getUserAdminDashboardLocationState",
    value: function getUserAdminDashboardLocationState(state, reachedType, opts, callback) {
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
      var returnType = _InlineResponse15["default"];
      return this.apiClient.callApi('/admin/dashboard-location', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserAdminProfile operation.
     * @callback module:api/DefaultApi~getUserAdminProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20016} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Admin get profile
     * Get profile of admin
     * @param {module:api/DefaultApi~getUserAdminProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20016}
     */

  }, {
    key: "getUserAdminProfile",
    value: function getUserAdminProfile(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse9["default"];
      return this.apiClient.callApi('/admin/profile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserAdminProfileCheck operation.
     * @callback module:api/DefaultApi~getUserAdminProfileCheckCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20013>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Admin get Profile-Check
     * Get the status of the coach's profile check
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status This is the profiles to filter on 
     * @param {String} opts.numItems This is the number of items that you want to return
     * @param {module:api/DefaultApi~getUserAdminProfileCheckCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20013>}
     */

  }, {
    key: "getUserAdminProfileCheck",
    value: function getUserAdminProfileCheck(opts, callback) {
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
      return this.apiClient.callApi('/admin/profile-check', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserAdminUserComplaints operation.
     * @callback module:api/DefaultApi~getUserAdminUserComplaintsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2009>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Admin gets user complaints
     * Get users complaints
     * @param {Object} opts Optional parameters
     * @param {Number} opts.numItems This is the number of items that you want to fetch
     * @param {module:api/DefaultApi~getUserAdminUserComplaintsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2009>}
     */

  }, {
    key: "getUserAdminUserComplaints",
    value: function getUserAdminUserComplaints(opts, callback) {
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
      var returnType = [_InlineResponse19["default"]];
      return this.apiClient.callApi('/admin/complaint', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserAdminUserFeedback operation.
     * @callback module:api/DefaultApi~getUserAdminUserFeedbackCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20014>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Admin get user feedback
     * Get list of user feedback
     * @param {Object} opts Optional parameters
     * @param {Number} opts.rating This is used to filter feature by rating
     * @param {String} opts.startTime This is the start time of the range
     * @param {String} opts.endTime This is the end time of the range
     * @param {module:api/DefaultApi~getUserAdminUserFeedbackCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20014>}
     */

  }, {
    key: "getUserAdminUserFeedback",
    value: function getUserAdminUserFeedback(opts, callback) {
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
      var returnType = [_InlineResponse7["default"]];
      return this.apiClient.callApi('/admin/user-feedback', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserAdminUserFeedbackFeedbackId operation.
     * @callback module:api/DefaultApi~getUserAdminUserFeedbackFeedbackIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20015>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Admin get feedback for specific feature
     * Get feedback for a specific feature
     * @param {String} featureId 
     * @param {module:api/DefaultApi~getUserAdminUserFeedbackFeedbackIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20015>}
     */

  }, {
    key: "getUserAdminUserFeedbackFeedbackId",
    value: function getUserAdminUserFeedbackFeedbackId(featureId, callback) {
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
      var returnType = [_InlineResponse8["default"]];
      return this.apiClient.callApi('/admin/user-feedback/{featureId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserAdminUsersManagement operation.
     * @callback module:api/DefaultApi~getUserAdminUsersManagementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Your GET endpoint
     * Get user management
     * @param {Object} opts Optional parameters
     * @param {Number} opts.cancellations This is the cancellation parameter to filter the user
     * @param {module:model/String} opts.status This is the status to filter
     * @param {Number} opts.rating This is the rating to filter
     * @param {module:model/String} opts.userType This is the user type to filter
     * @param {Number} opts.numItems This is the number of items to return
     * @param {module:api/DefaultApi~getUserAdminUsersManagementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2008}
     */

  }, {
    key: "getUserAdminUsersManagement",
    value: function getUserAdminUsersManagement(opts, callback) {
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
      var returnType = _InlineResponse18["default"];
      return this.apiClient.callApi('/admin/users-management', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserCoachAvailability operation.
     * @callback module:api/DefaultApi~getUserCoachAvailabilityCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Coach gets own availability
     * Retrieve the coach's availability
     * @param {Object} opts Optional parameters
     * @param {String} opts.startTime This is the start range of availability items you want to fetch
     * @param {String} opts.endTime This is the end range of availability items you want to fetch
     * @param {module:api/DefaultApi~getUserCoachAvailabilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */

  }, {
    key: "getUserCoachAvailability",
    value: function getUserCoachAvailability(opts, callback) {
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
      return this.apiClient.callApi('/coach/availability/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserCoachAvailabilityInfo operation.
     * @callback module:api/DefaultApi~getUserCoachAvailabilityInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Availability Info
     * This gets the coach's availability options
     * @param {module:api/DefaultApi~getUserCoachAvailabilityInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */

  }, {
    key: "getUserCoachAvailabilityInfo",
    value: function getUserCoachAvailabilityInfo(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/coach/availability-options', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserCoachInsights operation.
     * @callback module:api/DefaultApi~getUserCoachInsightsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get coach analytics insight
     * Get coach insights
     * @param {String} locationID This is the location from where you are going to retrieve analytics.  It can be all if you want to retrieve all notifications
     * @param {String} startTime This  is the start range of data to perform analytics
     * @param {String} endTime This is the end range of data to perform analytics
     * @param {module:api/DefaultApi~getUserCoachInsightsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */

  }, {
    key: "getUserCoachInsights",
    value: function getUserCoachInsights(locationID, startTime, endTime, callback) {
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
      var returnType = _InlineResponse12["default"];
      return this.apiClient.callApi('/coach/insights/analytics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserCoachNotifications operation.
     * @callback module:api/DefaultApi~getUserCoachNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2003>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Coach Notifications
     * Retrieve coach notification
     * @param {Object} opts Optional parameters
     * @param {Number} opts.numItems This is the number of notifications that you want to return
     * @param {module:api/DefaultApi~getUserCoachNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2003>}
     */

  }, {
    key: "getUserCoachNotifications",
    value: function getUserCoachNotifications(opts, callback) {
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
      var returnType = [_InlineResponse13["default"]];
      return this.apiClient.callApi('/coach/notifications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserCoachProfileCoachId operation.
     * @callback module:api/DefaultApi~getUserCoachProfileCoachIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CoachProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Your GET endpoint
     * Get coach profile data
     * @param {String} coachId 
     * @param {module:api/DefaultApi~getUserCoachProfileCoachIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CoachProfile}
     */

  }, {
    key: "getUserCoachProfileCoachId",
    value: function getUserCoachProfileCoachId(coachId, callback) {
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
      var returnType = _CoachProfile["default"];
      return this.apiClient.callApi('/coach/profile/{coachId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserCoachProfileSettingsNotifications operation.
     * @callback module:api/DefaultApi~getUserCoachProfileSettingsNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get coach notifications settings
     * Retrieve coach notification settings
     * @param {module:api/DefaultApi~getUserCoachProfileSettingsNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */

  }, {
    key: "getUserCoachProfileSettingsNotifications",
    value: function getUserCoachProfileSettingsNotifications(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/coach/profile-settings/notifications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserCoachProfileSettingsPayout operation.
     * @callback module:api/DefaultApi~getUserCoachProfileSettingsPayoutCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CoachPaymentMethod>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Coach Payout Methods
     * Get payout settings
     * @param {module:api/DefaultApi~getUserCoachProfileSettingsPayoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CoachPaymentMethod>}
     */

  }, {
    key: "getUserCoachProfileSettingsPayout",
    value: function getUserCoachProfileSettingsPayout(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CoachPaymentMethod["default"]];
      return this.apiClient.callApi('/coach/profile-settings/payout', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserCoachReview operation.
     * @callback module:api/DefaultApi~getUserCoachReviewCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CoachReview>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Coach Get Reviews
     * Get list of coach reviews
     * @param {Object} opts Optional parameters
     * @param {Number} opts.numItems This is the number of reviews that you want to fetch
     * @param {module:api/DefaultApi~getUserCoachReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CoachReview>}
     */

  }, {
    key: "getUserCoachReview",
    value: function getUserCoachReview(opts, callback) {
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
      return this.apiClient.callApi('/coach/review', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserCoachSession operation.
     * @callback module:api/DefaultApi~getUserCoachSessionCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CoachSession>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get coach session info
     * Get coach session plans
     * @param {module:api/DefaultApi~getUserCoachSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CoachSession>}
     */

  }, {
    key: "getUserCoachSession",
    value: function getUserCoachSession(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CoachSession["default"]];
      return this.apiClient.callApi('/coach/session-plans', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserFilter operation.
     * @callback module:api/DefaultApi~getUserFilterCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user saved filters
     * Get user's saved filter
     * @param {module:api/DefaultApi~getUserFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "getUserFilter",
    value: function getUserFilter(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/student/filter', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserFilterFilterName operation.
     * @callback module:api/DefaultApi~getUserFilterFilterNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Filter} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user filter by ID
     * Get user saved filter by filter name
     * @param {String} filterId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterId2 
     * @param {module:api/DefaultApi~getUserFilterFilterNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Filter}
     */

  }, {
    key: "getUserFilterFilterName",
    value: function getUserFilterFilterName(filterId, opts, callback) {
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
      return this.apiClient.callApi('/student/filter/{filterId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserLessonsLessonId operation.
     * @callback module:api/DefaultApi~getUserLessonsLessonIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Lesson} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a lesson
     * Get a lesson based on lessonId
     * @param {String} lessonId 
     * @param {module:api/DefaultApi~getUserLessonsLessonIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Lesson}
     */

  }, {
    key: "getUserLessonsLessonId",
    value: function getUserLessonsLessonId(lessonId, callback) {
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
      return this.apiClient.callApi('/lessons/{lessonId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserStudentNotificationFilter operation.
     * @callback module:api/DefaultApi~getUserStudentNotificationFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StudentNotificationFilter} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get student notification filter by studentId
     * get notification filter by studentId
     * @param {String} studentId 
     * @param {module:api/DefaultApi~getUserStudentNotificationFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StudentNotificationFilter}
     */

  }, {
    key: "getUserStudentNotificationFilter",
    value: function getUserStudentNotificationFilter(studentId, callback) {
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
      return this.apiClient.callApi('/student/notification-filter/{studentId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserStudentProfileSettingsBasicInfoStudentId operation.
     * @callback module:api/DefaultApi~getUserStudentProfileSettingsBasicInfoStudentIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StudentProfileBasicInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get student basic information
     * Get student basic information
     * @param {String} studentId 
     * @param {module:api/DefaultApi~getUserStudentProfileSettingsBasicInfoStudentIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StudentProfileBasicInfo}
     */

  }, {
    key: "getUserStudentProfileSettingsBasicInfoStudentId",
    value: function getUserStudentProfileSettingsBasicInfoStudentId(studentId, callback) {
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
      return this.apiClient.callApi('/student/profile-settings/basic-info/{studentId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserStudentProfileSettingsNotificationSettingsStudentId operation.
     * @callback module:api/DefaultApi~getUserStudentProfileSettingsNotificationSettingsStudentIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StudentProfileNotifications} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get student profile notification settings by ID
     * Retrieve student profile notification settings
     * @param {String} studentId 
     * @param {module:api/DefaultApi~getUserStudentProfileSettingsNotificationSettingsStudentIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StudentProfileNotifications}
     */

  }, {
    key: "getUserStudentProfileSettingsNotificationSettingsStudentId",
    value: function getUserStudentProfileSettingsNotificationSettingsStudentId(studentId, callback) {
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
      return this.apiClient.callApi('/student/profile-settings/notification-settings/{studentId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserStudentProfileSettingsPaymentMethodsStudentId operation.
     * @callback module:api/DefaultApi~getUserStudentProfileSettingsPaymentMethodsStudentIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2004>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get student payment methods
     * Get the registered payment methods
     * @param {String} studentId 
     * @param {module:api/DefaultApi~getUserStudentProfileSettingsPaymentMethodsStudentIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2004>}
     */

  }, {
    key: "getUserStudentProfileSettingsPaymentMethodsStudentId",
    value: function getUserStudentProfileSettingsPaymentMethodsStudentId(studentId, callback) {
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
      var returnType = [_InlineResponse14["default"]];
      return this.apiClient.callApi('/student/profile-settings/payment-methods/{studentId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserStudentProfileSettingsStudentId operation.
     * @callback module:api/DefaultApi~getUserStudentProfileSettingsStudentIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StudentProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get student profile by student ID
     * Retrieve student's profile
     * @param {String} studentId 
     * @param {module:api/DefaultApi~getUserStudentProfileSettingsStudentIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StudentProfile}
     */

  }, {
    key: "getUserStudentProfileSettingsStudentId",
    value: function getUserStudentProfileSettingsStudentId(studentId, callback) {
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
      return this.apiClient.callApi('/student/profile-settings/{studentId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUsersLessons operation.
     * @callback module:api/DefaultApi~getUsersLessonsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Lesson} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user lessons
     * Get current user lesssons information
     * @param {module:api/DefaultApi~getUsersLessonsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Lesson}
     */

  }, {
    key: "getUsersLessons",
    value: function getUsersLessons(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Lesson["default"];
      return this.apiClient.callApi('/lessons', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the patchLocationLocationId operation.
     * @callback module:api/DefaultApi~patchLocationLocationIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit location information by locationId
     * Coach can use this endpoint to edit their location.
     * @param {String} locationId 
     * @param {Object} opts Optional parameters
     * @param {module:model/LocationRequestOptional} opts.locationRequestOptional Location Request Model
     * @param {module:api/DefaultApi~patchLocationLocationIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "patchLocationLocationId",
    value: function patchLocationLocationId(locationId, opts, callback) {
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
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/location/{locationId}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the patchUserAdminCertificateCoachId operation.
     * @callback module:api/DefaultApi~patchUserAdminCertificateCoachIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Admin update certificate status
     * Update the coach's certificate status
     * @param {String} coachId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject9} opts.inlineObject9 
     * @param {module:api/DefaultApi~patchUserAdminCertificateCoachIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "patchUserAdminCertificateCoachId",
    value: function patchUserAdminCertificateCoachId(coachId, opts, callback) {
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
      return this.apiClient.callApi('/admin/certificate/{coachId}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the patchUserAdminProfile operation.
     * @callback module:api/DefaultApi~patchUserAdminProfileCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Admin update profile
     * Update admin profile
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject12} opts.inlineObject12 
     * @param {module:api/DefaultApi~patchUserAdminProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "patchUserAdminProfile",
    value: function patchUserAdminProfile(opts, callback) {
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
      return this.apiClient.callApi('/admin/profile', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the patchUserAdminProfileCheckCoachId operation.
     * @callback module:api/DefaultApi~patchUserAdminProfileCheckCoachIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the status of the coach's profile check
     * @param {String} coachId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject11} opts.inlineObject11 
     * @param {module:api/DefaultApi~patchUserAdminProfileCheckCoachIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "patchUserAdminProfileCheckCoachId",
    value: function patchUserAdminProfileCheckCoachId(coachId, opts, callback) {
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
      return this.apiClient.callApi('/admin/profile-onboarding/{coachId}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the patchUserCoachAvailability operation.
     * @callback module:api/DefaultApi~patchUserCoachAvailabilityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a coach availability by ID
     * @param {String} availabilityId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachAvailabilityPut} opts.coachAvailabilityPut 
     * @param {module:api/DefaultApi~patchUserCoachAvailabilityCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "patchUserCoachAvailability",
    value: function patchUserCoachAvailability(availabilityId, opts, callback) {
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
      return this.apiClient.callApi('/coach/availability/{availabilityId}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the patchUserCoachNotificationsRead operation.
     * @callback module:api/DefaultApi~patchUserCoachNotificationsReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set list of notifications as read
     * Mark the list of notifications as read
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/InlineObject>} opts.inlineObject 
     * @param {module:api/DefaultApi~patchUserCoachNotificationsReadCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "patchUserCoachNotificationsRead",
    value: function patchUserCoachNotificationsRead(opts, callback) {
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
      return this.apiClient.callApi('/coach/notifications/read', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the patchUserCoachProfileSettings operation.
     * @callback module:api/DefaultApi~patchUserCoachProfileSettingsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update coach privacy settings
     * Update coach privacy settings
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.inlineObject2 
     * @param {module:api/DefaultApi~patchUserCoachProfileSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "patchUserCoachProfileSettings",
    value: function patchUserCoachProfileSettings(opts, callback) {
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
      return this.apiClient.callApi('/coach/profile-settings/privacy', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the patchUserCoachProfileSettingsNotifications operation.
     * @callback module:api/DefaultApi~patchUserCoachProfileSettingsNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update coach profile notification settings
     * Update coach profile notification settings
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject5} opts.inlineObject5 
     * @param {module:api/DefaultApi~patchUserCoachProfileSettingsNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "patchUserCoachProfileSettingsNotifications",
    value: function patchUserCoachProfileSettingsNotifications(opts, callback) {
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
      return this.apiClient.callApi('/coach/profile-settings/notifications', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postCoachProfile operation.
     * @callback module:api/DefaultApi~postCoachProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This endpoint is used to create the coach profile if it doesn't exist
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachProfile} opts.coachProfile 
     * @param {module:api/DefaultApi~postCoachProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "postCoachProfile",
    value: function postCoachProfile(opts, callback) {
      opts = opts || {};
      var postBody = opts['coachProfile'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse20["default"];
      return this.apiClient.callApi('/coach/profile', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postLocation operation.
     * @callback module:api/DefaultApi~postLocationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20018} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a location
     * This endpoint allow coach to add/saved a training location
     * @param {Object} opts Optional parameters
     * @param {module:model/LocationRequest} opts.locationRequest location request object
     * @param {module:api/DefaultApi~postLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20018}
     */

  }, {
    key: "postLocation",
    value: function postLocation(opts, callback) {
      opts = opts || {};
      var postBody = opts['locationRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse11["default"];
      return this.apiClient.callApi('/location', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserAdminCertificateCoachId operation.
     * @callback module:api/DefaultApi~postUserAdminCertificateCoachIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Admin set certificate status
     * Sets the coach's ceritifcate status
     * @param {String} coachId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject8} opts.inlineObject8 
     * @param {module:api/DefaultApi~postUserAdminCertificateCoachIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "postUserAdminCertificateCoachId",
    value: function postUserAdminCertificateCoachId(coachId, opts, callback) {
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
      var returnType = _InlineResponse20["default"];
      return this.apiClient.callApi('/admin/certificate/{coachId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserAdminDashboardFilter operation.
     * @callback module:api/DefaultApi~postUserAdminDashboardFilterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save admin dashboard filter
     * Save admin dashbord filter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject7} opts.inlineObject7 
     * @param {module:api/DefaultApi~postUserAdminDashboardFilterCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "postUserAdminDashboardFilter",
    value: function postUserAdminDashboardFilter(opts, callback) {
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
      return this.apiClient.callApi('/admin/dashboard-filter', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserAdminProfileCheckCoachId operation.
     * @callback module:api/DefaultApi~postUserAdminProfileCheckCoachIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Admin set coach status
     * Sets the coach's status
     * @param {String} coachId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject10} opts.inlineObject10 
     * @param {module:api/DefaultApi~postUserAdminProfileCheckCoachIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "postUserAdminProfileCheckCoachId",
    value: function postUserAdminProfileCheckCoachId(coachId, opts, callback) {
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
      return this.apiClient.callApi('/admin/profile-onboarding/{coachId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserAdminSendWarningEmail operation.
     * @callback module:api/DefaultApi~postUserAdminSendWarningEmailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Admin send warning email
     * Send a warning email
     * @param {String} userId This is the userID to send warning email to.
     * @param {Object} opts Optional parameters
     * @param {String} opts.message This is an optional email message for the user. Otherwise, it will use the default emails.
     * @param {module:api/DefaultApi~postUserAdminSendWarningEmailCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "postUserAdminSendWarningEmail",
    value: function postUserAdminSendWarningEmail(userId, opts, callback) {
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
      return this.apiClient.callApi('/admin/send-warning-email', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserCoachAvailability operation.
     * @callback module:api/DefaultApi~postUserCoachAvailabilityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create coach availability
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachAvailability} opts.coachAvailability 
     * @param {module:api/DefaultApi~postUserCoachAvailabilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "postUserCoachAvailability",
    value: function postUserCoachAvailability(opts, callback) {
      opts = opts || {};
      var postBody = opts['coachAvailability'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse20["default"];
      return this.apiClient.callApi('/coach/availability/list', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserCoachAvailabilityInfo operation.
     * @callback module:api/DefaultApi~postUserCoachAvailabilityInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set Coach Availability Options
     * This sets the coach's availability options
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @param {module:api/DefaultApi~postUserCoachAvailabilityInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "postUserCoachAvailabilityInfo",
    value: function postUserCoachAvailabilityInfo(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject1'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse20["default"];
      return this.apiClient.callApi('/coach/availability-options', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserCoachProfileSettingsPayout operation.
     * @callback module:api/DefaultApi~postUserCoachProfileSettingsPayoutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Payment Method
     * Add a payment method to user
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject3} opts.inlineObject3 
     * @param {module:api/DefaultApi~postUserCoachProfileSettingsPayoutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "postUserCoachProfileSettingsPayout",
    value: function postUserCoachProfileSettingsPayout(opts, callback) {
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
      return this.apiClient.callApi('/coach/profile-settings/payout', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserCoachSession operation.
     * @callback module:api/DefaultApi~postUserCoachSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new session between user and coach
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachSession} opts.coachSession 
     * @param {module:api/DefaultApi~postUserCoachSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "postUserCoachSession",
    value: function postUserCoachSession(opts, callback) {
      opts = opts || {};
      var postBody = opts['coachSession'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse20["default"];
      return this.apiClient.callApi('/coach/session-plans', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserFilter operation.
     * @callback module:api/DefaultApi~postUserFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save a user filter
     * Save a new filter for user
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter} opts.filter Filter data in JSON
     * @param {module:api/DefaultApi~postUserFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "postUserFilter",
    value: function postUserFilter(opts, callback) {
      opts = opts || {};
      var postBody = opts['filter'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse20["default"];
      return this.apiClient.callApi('/student/filter', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserLessonLessonIdCancelRequest operation.
     * @callback module:api/DefaultApi~postUserLessonLessonIdCancelRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2012} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit a lesson cancel request
     * This endpoint process lesson cancel request.
     * @param {String} lessonId 
     * @param {Object} opts Optional parameters
     * @param {module:model/LessonCancelRequest} opts.lessonCancelRequest Lesson Cancel Request
     * @param {module:api/DefaultApi~postUserLessonLessonIdCancelRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2012}
     */

  }, {
    key: "postUserLessonLessonIdCancelRequest",
    value: function postUserLessonLessonIdCancelRequest(lessonId, opts, callback) {
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
      var returnType = _InlineResponse22["default"];
      return this.apiClient.callApi('/lesson/{lessonId}/cancel-request', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserLessons operation.
     * @callback module:api/DefaultApi~postUserLessonsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Book a new lesson
     * User use this endpoint to book a new lesson
     * @param {Object} opts Optional parameters
     * @param {module:model/Lesson} opts.lesson User detailed booking information
     * @param {module:api/DefaultApi~postUserLessonsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2011}
     */

  }, {
    key: "postUserLessons",
    value: function postUserLessons(opts, callback) {
      opts = opts || {};
      var postBody = opts['lesson'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse21["default"];
      return this.apiClient.callApi('/lessons', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserLessonsLessonIdProblemReport operation.
     * @callback module:api/DefaultApi~postUserLessonsLessonIdProblemReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2013} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Report a problem with a lesson
     * Report a problem with a lesson
     * @param {String} lessonId 
     * @param {Object} opts Optional parameters
     * @param {module:model/LessonProblemReport} opts.lessonProblemReport Report a problem
     * @param {module:api/DefaultApi~postUserLessonsLessonIdProblemReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2013}
     */

  }, {
    key: "postUserLessonsLessonIdProblemReport",
    value: function postUserLessonsLessonIdProblemReport(lessonId, opts, callback) {
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
      var returnType = _InlineResponse23["default"];
      return this.apiClient.callApi('/lessons/{lessonId}/problem-report', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserStudentNotificationFilter operation.
     * @callback module:api/DefaultApi~postUserStudentNotificationFilterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create student notification filter with studentId
     * Create a student notification filter
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentNotificationFilter} opts.studentNotificationFilter 
     * @param {module:api/DefaultApi~postUserStudentNotificationFilterCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "postUserStudentNotificationFilter",
    value: function postUserStudentNotificationFilter(opts, callback) {
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
      return this.apiClient.callApi('/student/notification-filter', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserStudentProfileSettingsProfileCreate operation.
     * @callback module:api/DefaultApi~postUserStudentProfileSettingsProfileCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create student profile
     * Create a student profile
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentProfilePost} opts.studentProfilePost 
     * @param {module:api/DefaultApi~postUserStudentProfileSettingsProfileCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "postUserStudentProfileSettingsProfileCreate",
    value: function postUserStudentProfileSettingsProfileCreate(opts, callback) {
      opts = opts || {};
      var postBody = opts['studentProfilePost'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse20["default"];
      return this.apiClient.callApi('/student/profile-settings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserAdminBanUser operation.
     * @callback module:api/DefaultApi~putUserAdminBanUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Admin ban user
     * Updates list of banned users
     * @param {Object} opts Optional parameters
     * @param {String} opts.userId This is the userID to ban
     * @param {String} opts.reason This is the reason why the user was banned
     * @param {module:api/DefaultApi~putUserAdminBanUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "putUserAdminBanUser",
    value: function putUserAdminBanUser(opts, callback) {
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
      return this.apiClient.callApi('/admin/ban-user', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserAdminUnbanUser operation.
     * @callback module:api/DefaultApi~putUserAdminUnbanUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unban user
     * Unban a user
     * @param {String} userId This is the userID to unban
     * @param {module:api/DefaultApi~putUserAdminUnbanUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "putUserAdminUnbanUser",
    value: function putUserAdminUnbanUser(userId, callback) {
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
      return this.apiClient.callApi('/admin/unban-user', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserCoachAvailabilityOptions operation.
     * @callback module:api/DefaultApi~putUserCoachAvailabilityOptionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Availability Options
     * Update coach's availability options
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @param {module:api/DefaultApi~putUserCoachAvailabilityOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "putUserCoachAvailabilityOptions",
    value: function putUserCoachAvailabilityOptions(opts, callback) {
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
      return this.apiClient.callApi('/coach/availability-options', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserCoachProfile operation.
     * @callback module:api/DefaultApi~putUserCoachProfileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update coach profile attributes
     * This endpoint is to overwrite the properties of the coach 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @param {module:api/DefaultApi~putUserCoachProfileCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "putUserCoachProfile",
    value: function putUserCoachProfile(opts, callback) {
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
      return this.apiClient.callApi('/coach/profile', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserCoachProfileSettingsDisable operation.
     * @callback module:api/DefaultApi~putUserCoachProfileSettingsDisableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disable Coach Account
     * Disable the coach account
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject6} opts.inlineObject6 
     * @param {module:api/DefaultApi~putUserCoachProfileSettingsDisableCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "putUserCoachProfileSettingsDisable",
    value: function putUserCoachProfileSettingsDisable(opts, callback) {
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
      return this.apiClient.callApi('/coach/profile-settings/disable', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserCoachProfileSettingsEnable operation.
     * @callback module:api/DefaultApi~putUserCoachProfileSettingsEnableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable Coach Account
     * Activate coach account
     * @param {module:api/DefaultApi~putUserCoachProfileSettingsEnableCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "putUserCoachProfileSettingsEnable",
    value: function putUserCoachProfileSettingsEnable(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/coach/profile-settings/enable', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserCoachProfileSettingsNotifications operation.
     * @callback module:api/DefaultApi~putUserCoachProfileSettingsNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Overwrite coach notification settings
     * User updates their notification settings
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject4} opts.inlineObject4 
     * @param {module:api/DefaultApi~putUserCoachProfileSettingsNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "putUserCoachProfileSettingsNotifications",
    value: function putUserCoachProfileSettingsNotifications(opts, callback) {
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
      return this.apiClient.callApi('/coach/profile-settings/notifications', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserCoachProfileSettingsPayoutPaymentMethodId operation.
     * @callback module:api/DefaultApi~putUserCoachProfileSettingsPayoutPaymentMethodIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Coach set default payment method
     * User sets their payment method
     * @param {String} paymentMethodId 
     * @param {module:api/DefaultApi~putUserCoachProfileSettingsPayoutPaymentMethodIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "putUserCoachProfileSettingsPayoutPaymentMethodId",
    value: function putUserCoachProfileSettingsPayoutPaymentMethodId(paymentMethodId, callback) {
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
      return this.apiClient.callApi('/coach/profile-settings/payout/{paymentMethodId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserCoachSession operation.
     * @callback module:api/DefaultApi~putUserCoachSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user-coach session''
     * @param {Object} opts Optional parameters
     * @param {module:model/CoachSessionPut} opts.coachSessionPut 
     * @param {module:api/DefaultApi~putUserCoachSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "putUserCoachSession",
    value: function putUserCoachSession(opts, callback) {
      opts = opts || {};
      var postBody = opts['coachSessionPut'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse20["default"];
      return this.apiClient.callApi('/coach/session-plans', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserStudentNotificationFilterStudentId operation.
     * @callback module:api/DefaultApi~putUserStudentNotificationFilterStudentIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update student notification filter by studentId
     * Update student notifications with studentId
     * @param {String} studentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentNotificationFilter} opts.studentNotificationFilter 
     * @param {module:api/DefaultApi~putUserStudentNotificationFilterStudentIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "putUserStudentNotificationFilterStudentId",
    value: function putUserStudentNotificationFilterStudentId(studentId, opts, callback) {
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
      return this.apiClient.callApi('/student/notification-filter/{studentId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserStudentProfileSettingsBasicInfo operation.
     * @callback module:api/DefaultApi~putUserStudentProfileSettingsBasicInfoCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit student basic information
     * Edit student's information
     * @param {String} studentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentProfileBasicInfo} opts.studentProfileBasicInfo 
     * @param {module:api/DefaultApi~putUserStudentProfileSettingsBasicInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "putUserStudentProfileSettingsBasicInfo",
    value: function putUserStudentProfileSettingsBasicInfo(studentId, opts, callback) {
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
      return this.apiClient.callApi('/student/profile-settings/basic-info/{studentId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserStudentProfileSettingsDisable operation.
     * @callback module:api/DefaultApi~putUserStudentProfileSettingsDisableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disable student profile settings
     * @param {module:api/DefaultApi~putUserStudentProfileSettingsDisableCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "putUserStudentProfileSettingsDisable",
    value: function putUserStudentProfileSettingsDisable(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/student/profile-settings/disable', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserStudentProfileSettingsEnable operation.
     * @callback module:api/DefaultApi~putUserStudentProfileSettingsEnableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable student profile settings
     * @param {module:api/DefaultApi~putUserStudentProfileSettingsEnableCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "putUserStudentProfileSettingsEnable",
    value: function putUserStudentProfileSettingsEnable(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/student/profile-settings/enable', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserStudentProfileSettingsNotificationSettings operation.
     * @callback module:api/DefaultApi~putUserStudentProfileSettingsNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the user notification settings
     * @param {String} studentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentProfileNotifications} opts.studentProfileNotifications 
     * @param {module:api/DefaultApi~putUserStudentProfileSettingsNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "putUserStudentProfileSettingsNotificationSettings",
    value: function putUserStudentProfileSettingsNotificationSettings(studentId, opts, callback) {
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
      return this.apiClient.callApi('/student/profile-settings/notification-settings/{studentId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserStudentProfileSettingsPayment operation.
     * @callback module:api/DefaultApi~putUserStudentProfileSettingsPaymentCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new payment method
     * Create a new payment method
     * @param {String} studentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/StudentPaymentMethod} opts.studentPaymentMethod 
     * @param {module:api/DefaultApi~putUserStudentProfileSettingsPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "putUserStudentProfileSettingsPayment",
    value: function putUserStudentProfileSettingsPayment(studentId, opts, callback) {
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
      return this.apiClient.callApi('/student/profile-settings/payment-methods/{studentId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId operation.
     * @callback module:api/DefaultApi~putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set student payment method to default by payment ID
     * Update student's payment method
     * @param {String} studentId 
     * @param {String} paymentMethodId 
     * @param {module:api/DefaultApi~putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId",
    value: function putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId(studentId, paymentMethodId, callback) {
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
      return this.apiClient.callApi('/student/profile-settings/payment-methods/{studentId}/{paymentMethodId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DefaultApi;
}();

exports["default"] = DefaultApi;