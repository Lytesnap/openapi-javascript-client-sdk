# LytesnapBackendApi.DefaultApi

All URIs are relative to *http://localhost:5000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteLocationLocationId**](DefaultApi.md#deleteLocationLocationId) | **DELETE** /location/{locationId} | Delete location information by locationId
[**deleteUserCoachAvailabilityAvailabilityId**](DefaultApi.md#deleteUserCoachAvailabilityAvailabilityId) | **DELETE** /coach/availability/{availabilityId} | 
[**deleteUserCoachProfileSettingsPayoutPaymentMethodId**](DefaultApi.md#deleteUserCoachProfileSettingsPayoutPaymentMethodId) | **DELETE** /coach/profile-settings/payout/{paymentMethodId} | Coach delete payment method Id
[**deleteUserFilterFilterName**](DefaultApi.md#deleteUserFilterFilterName) | **DELETE** /student/filter/{filterId} | Delete user filter by ID
[**deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId**](DefaultApi.md#deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId) | **DELETE** /student/profile-settings/payment-methods/{studentId}/{paymentMethodId} | Delete payment method by payment ID
[**getCoach**](DefaultApi.md#getCoach) | **GET** /coach/profile | Get coach&#39;s own profile
[**getLocation**](DefaultApi.md#getLocation) | **GET** /location | Get all saved locations by coach
[**getLocationLocationId**](DefaultApi.md#getLocationLocationId) | **GET** /location/{locationId} | Get location information by locationId
[**getUserAdmin**](DefaultApi.md#getUserAdmin) | **GET** /admin/bookings | Get Bookings
[**getUserAdminBookingLocationPercentage**](DefaultApi.md#getUserAdminBookingLocationPercentage) | **GET** /admin/dashboard-location-percentage | Your GET endpoint
[**getUserAdminCertificate**](DefaultApi.md#getUserAdminCertificate) | **GET** /admin/certificate | Admin get certificates
[**getUserAdminCertificateCoachId**](DefaultApi.md#getUserAdminCertificateCoachId) | **GET** /admin/certificate/{coachId} | Admin get certificate from coachId
[**getUserAdminComplaintUserId**](DefaultApi.md#getUserAdminComplaintUserId) | **GET** /admin/complaint/{userId} | Get complaint from user
[**getUserAdminDashboardFilter**](DefaultApi.md#getUserAdminDashboardFilter) | **GET** /admin/dashboard-filter | This get the dashboard filter names
[**getUserAdminDashboardLocationState**](DefaultApi.md#getUserAdminDashboardLocationState) | **GET** /admin/dashboard-location | Your GET endpoint
[**getUserAdminProfile**](DefaultApi.md#getUserAdminProfile) | **GET** /admin/profile | Admin get profile
[**getUserAdminProfileCheck**](DefaultApi.md#getUserAdminProfileCheck) | **GET** /admin/profile-check | Admin get Profile-Check
[**getUserAdminUserComplaints**](DefaultApi.md#getUserAdminUserComplaints) | **GET** /admin/complaint | Admin gets user complaints
[**getUserAdminUserFeedback**](DefaultApi.md#getUserAdminUserFeedback) | **GET** /admin/user-feedback | Admin get user feedback
[**getUserAdminUserFeedbackFeedbackId**](DefaultApi.md#getUserAdminUserFeedbackFeedbackId) | **GET** /admin/user-feedback/{featureId} | Admin get feedback for specific feature
[**getUserAdminUsersManagement**](DefaultApi.md#getUserAdminUsersManagement) | **GET** /admin/users-management | Your GET endpoint
[**getUserCoachAvailability**](DefaultApi.md#getUserCoachAvailability) | **GET** /coach/availability/list | Coach gets own availability
[**getUserCoachAvailabilityInfo**](DefaultApi.md#getUserCoachAvailabilityInfo) | **GET** /coach/availability-options | Get Availability Info
[**getUserCoachInsights**](DefaultApi.md#getUserCoachInsights) | **GET** /coach/insights/analytics | Get coach analytics insight
[**getUserCoachNotifications**](DefaultApi.md#getUserCoachNotifications) | **GET** /coach/notifications | Get Coach Notifications
[**getUserCoachProfileCoachId**](DefaultApi.md#getUserCoachProfileCoachId) | **GET** /coach/profile/{coachId} | Your GET endpoint
[**getUserCoachProfileSettingsNotifications**](DefaultApi.md#getUserCoachProfileSettingsNotifications) | **GET** /coach/profile-settings/notifications | Get coach notifications settings
[**getUserCoachProfileSettingsPayout**](DefaultApi.md#getUserCoachProfileSettingsPayout) | **GET** /coach/profile-settings/payout | Get Coach Payout Methods
[**getUserCoachReview**](DefaultApi.md#getUserCoachReview) | **GET** /coach/review | Coach Get Reviews
[**getUserCoachSession**](DefaultApi.md#getUserCoachSession) | **GET** /coach/session-plans | Get coach session info
[**getUserFilter**](DefaultApi.md#getUserFilter) | **GET** /student/filter | Get user saved filters
[**getUserFilterFilterName**](DefaultApi.md#getUserFilterFilterName) | **GET** /student/filter/{filterId} | Get user filter by ID
[**getUserLessonsLessonId**](DefaultApi.md#getUserLessonsLessonId) | **GET** /lessons/{lessonId} | Get a lesson
[**getUserStudentNotificationFilter**](DefaultApi.md#getUserStudentNotificationFilter) | **GET** /student/notification-filter/{studentId} | Get student notification filter by studentId
[**getUserStudentProfileSettingsBasicInfoStudentId**](DefaultApi.md#getUserStudentProfileSettingsBasicInfoStudentId) | **GET** /student/profile-settings/basic-info/{studentId} | Get student basic information
[**getUserStudentProfileSettingsNotificationSettingsStudentId**](DefaultApi.md#getUserStudentProfileSettingsNotificationSettingsStudentId) | **GET** /student/profile-settings/notification-settings/{studentId} | get student profile notification settings by ID
[**getUserStudentProfileSettingsPaymentMethodsStudentId**](DefaultApi.md#getUserStudentProfileSettingsPaymentMethodsStudentId) | **GET** /student/profile-settings/payment-methods/{studentId} | Get student payment methods
[**getUserStudentProfileSettingsStudentId**](DefaultApi.md#getUserStudentProfileSettingsStudentId) | **GET** /student/profile-settings/{studentId} | Get student profile by student ID
[**getUsersLessons**](DefaultApi.md#getUsersLessons) | **GET** /lessons | Get user lessons
[**patchLocationLocationId**](DefaultApi.md#patchLocationLocationId) | **PATCH** /location/{locationId} | Edit location information by locationId
[**patchUserAdminCertificateCoachId**](DefaultApi.md#patchUserAdminCertificateCoachId) | **PATCH** /admin/certificate/{coachId} | Admin update certificate status
[**patchUserAdminProfile**](DefaultApi.md#patchUserAdminProfile) | **PATCH** /admin/profile | Admin update profile
[**patchUserAdminProfileCheckCoachId**](DefaultApi.md#patchUserAdminProfileCheckCoachId) | **PATCH** /admin/profile-onboarding/{coachId} | 
[**patchUserCoachAvailability**](DefaultApi.md#patchUserCoachAvailability) | **PATCH** /coach/availability/{availabilityId} | 
[**patchUserCoachNotificationsRead**](DefaultApi.md#patchUserCoachNotificationsRead) | **PATCH** /coach/notifications/read | Set list of notifications as read
[**patchUserCoachProfileSettings**](DefaultApi.md#patchUserCoachProfileSettings) | **PATCH** /coach/profile-settings/privacy | Update coach privacy settings
[**patchUserCoachProfileSettingsNotifications**](DefaultApi.md#patchUserCoachProfileSettingsNotifications) | **PATCH** /coach/profile-settings/notifications | Update coach profile notification settings
[**postCoachProfile**](DefaultApi.md#postCoachProfile) | **POST** /coach/profile | 
[**postLocation**](DefaultApi.md#postLocation) | **POST** /location | Add a location
[**postUserAdminCertificateCoachId**](DefaultApi.md#postUserAdminCertificateCoachId) | **POST** /admin/certificate/{coachId} | Admin set certificate status
[**postUserAdminDashboardFilter**](DefaultApi.md#postUserAdminDashboardFilter) | **POST** /admin/dashboard-filter | Save admin dashboard filter
[**postUserAdminProfileCheckCoachId**](DefaultApi.md#postUserAdminProfileCheckCoachId) | **POST** /admin/profile-onboarding/{coachId} | Admin set coach status
[**postUserAdminSendWarningEmail**](DefaultApi.md#postUserAdminSendWarningEmail) | **POST** /admin/send-warning-email | Admin send warning email
[**postUserCoachAvailability**](DefaultApi.md#postUserCoachAvailability) | **POST** /coach/availability/list | 
[**postUserCoachAvailabilityInfo**](DefaultApi.md#postUserCoachAvailabilityInfo) | **POST** /coach/availability-options | Set Coach Availability Options
[**postUserCoachProfileSettingsPayout**](DefaultApi.md#postUserCoachProfileSettingsPayout) | **POST** /coach/profile-settings/payout | Add Payment Method
[**postUserCoachSession**](DefaultApi.md#postUserCoachSession) | **POST** /coach/session-plans | 
[**postUserFilter**](DefaultApi.md#postUserFilter) | **POST** /student/filter | Save a user filter
[**postUserLessonLessonIdCancelRequest**](DefaultApi.md#postUserLessonLessonIdCancelRequest) | **POST** /lesson/{lessonId}/cancel-request | Submit a lesson cancel request
[**postUserLessons**](DefaultApi.md#postUserLessons) | **POST** /lessons | Book a new lesson
[**postUserLessonsLessonIdProblemReport**](DefaultApi.md#postUserLessonsLessonIdProblemReport) | **POST** /lessons/{lessonId}/problem-report | Report a problem with a lesson
[**postUserStudentNotificationFilter**](DefaultApi.md#postUserStudentNotificationFilter) | **POST** /student/notification-filter | create student notification filter with studentId
[**postUserStudentProfileSettingsProfileCreate**](DefaultApi.md#postUserStudentProfileSettingsProfileCreate) | **POST** /student/profile-settings | create student profile
[**putUserAdminBanUser**](DefaultApi.md#putUserAdminBanUser) | **PUT** /admin/ban-user | Admin ban user
[**putUserAdminUnbanUser**](DefaultApi.md#putUserAdminUnbanUser) | **PUT** /admin/unban-user | Unban user
[**putUserCoachAvailabilityOptions**](DefaultApi.md#putUserCoachAvailabilityOptions) | **PUT** /coach/availability-options | Update Availability Options
[**putUserCoachProfile**](DefaultApi.md#putUserCoachProfile) | **PUT** /coach/profile | Update coach profile attributes
[**putUserCoachProfileSettingsDisable**](DefaultApi.md#putUserCoachProfileSettingsDisable) | **PUT** /coach/profile-settings/disable | Disable Coach Account
[**putUserCoachProfileSettingsEnable**](DefaultApi.md#putUserCoachProfileSettingsEnable) | **PUT** /coach/profile-settings/enable | Enable Coach Account
[**putUserCoachProfileSettingsNotifications**](DefaultApi.md#putUserCoachProfileSettingsNotifications) | **PUT** /coach/profile-settings/notifications | Overwrite coach notification settings
[**putUserCoachProfileSettingsPayoutPaymentMethodId**](DefaultApi.md#putUserCoachProfileSettingsPayoutPaymentMethodId) | **PUT** /coach/profile-settings/payout/{paymentMethodId} | Coach set default payment method
[**putUserCoachSession**](DefaultApi.md#putUserCoachSession) | **PUT** /coach/session-plans | 
[**putUserStudentNotificationFilterStudentId**](DefaultApi.md#putUserStudentNotificationFilterStudentId) | **PUT** /student/notification-filter/{studentId} | update student notification filter by studentId
[**putUserStudentProfileSettingsBasicInfo**](DefaultApi.md#putUserStudentProfileSettingsBasicInfo) | **PUT** /student/profile-settings/basic-info/{studentId} | Edit student basic information
[**putUserStudentProfileSettingsDisable**](DefaultApi.md#putUserStudentProfileSettingsDisable) | **PUT** /student/profile-settings/disable | 
[**putUserStudentProfileSettingsEnable**](DefaultApi.md#putUserStudentProfileSettingsEnable) | **PUT** /student/profile-settings/enable | 
[**putUserStudentProfileSettingsNotificationSettings**](DefaultApi.md#putUserStudentProfileSettingsNotificationSettings) | **PUT** /student/profile-settings/notification-settings/{studentId} | 
[**putUserStudentProfileSettingsPayment**](DefaultApi.md#putUserStudentProfileSettingsPayment) | **PUT** /student/profile-settings/payment-methods/{studentId} | Create new payment method
[**putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId**](DefaultApi.md#putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId) | **PUT** /student/profile-settings/payment-methods/{studentId}/{paymentMethodId} | Set student payment method to default by payment ID



## deleteLocationLocationId

> deleteLocationLocationId(locationId)

Delete location information by locationId

Coach can use this endpoint to delete their location.

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let locationId = "locationId_example"; // String | 
apiInstance.deleteLocationLocationId(locationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUserCoachAvailabilityAvailabilityId

> Object deleteUserCoachAvailabilityAvailabilityId(availabilityId)



Deletes a coach availability by ID

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let availabilityId = "availabilityId_example"; // String | 
apiInstance.deleteUserCoachAvailabilityAvailabilityId(availabilityId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **availabilityId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUserCoachProfileSettingsPayoutPaymentMethodId

> deleteUserCoachProfileSettingsPayoutPaymentMethodId(paymentMethodId)

Coach delete payment method Id

Coach deletes their listed payment method

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let paymentMethodId = "paymentMethodId_example"; // String | 
apiInstance.deleteUserCoachProfileSettingsPayoutPaymentMethodId(paymentMethodId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethodId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteUserFilterFilterName

> Object deleteUserFilterFilterName(filterId)

Delete user filter by ID

Delete user filter by name

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let filterId = "filterId_example"; // String | 
apiInstance.deleteUserFilterFilterName(filterId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterId** | **String**|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId

> Object deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId(studentId, paymentMethodId)

Delete payment method by payment ID

Delete payment method by ID

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let studentId = "studentId_example"; // String | 
let paymentMethodId = "paymentMethodId_example"; // String | 
apiInstance.deleteUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId(studentId, paymentMethodId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentId** | **String**|  | 
 **paymentMethodId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCoach

> CoachProfile getCoach()

Get coach&#39;s own profile

This fetches the information of the coach profile

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
apiInstance.getCoach((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CoachProfile**](CoachProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLocation

> InlineResponse20017 getLocation()

Get all saved locations by coach

Coach can invoke this endpoint to get all the training locations he/she saved in the pass

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
apiInstance.getLocation((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLocationLocationId

> LocationResponse getLocationLocationId(locationId)

Get location information by locationId

Both student and coach can use this endpoint to fetch location information.

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let locationId = "locationId_example"; // String | 
apiInstance.getLocationLocationId(locationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**|  | 

### Return type

[**LocationResponse**](LocationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserAdmin

> [Number] getUserAdmin(opts)

Get Bookings

Get list of bookings

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'location': New York, NY, // String | This is the city locations of the bookings
  'startTime': 2017-09-14T04:07:11.532-04:00, // String | This is the startTime of the booking range
  'endTime': 2017-09-14T04:07:11.532-04:00, // String | This is the endTime of the booking
  'bookingType': "bookingType_example", // String | This is your booking parameter
  'filterID': "filterID_example" // String | This is the filter id of the filter that you saved
};
apiInstance.getUserAdmin(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **String**| This is the city locations of the bookings | [optional] 
 **startTime** | **String**| This is the startTime of the booking range | [optional] 
 **endTime** | **String**| This is the endTime of the booking | [optional] 
 **bookingType** | **String**| This is your booking parameter | [optional] 
 **filterID** | **String**| This is the filter id of the filter that you saved | [optional] 

### Return type

**[Number]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserAdminBookingLocationPercentage

> InlineResponse2006 getUserAdminBookingLocationPercentage(reachedType, opts)

Your GET endpoint

Get dashboard location percentage

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let reachedType = "reachedType_example"; // String | This is the type of information that you want to fetch
let opts = {
  'startTime': 2017-09-14T04:07:11.532-04:00, // String | This is the start range of the period
  'endTime': 2017-09-14T04:07:11.532-04:00, // String | This is the end range of the period
  'numItems': 56 // Number | This determines how many results you want to return
};
apiInstance.getUserAdminBookingLocationPercentage(reachedType, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reachedType** | **String**| This is the type of information that you want to fetch | 
 **startTime** | **String**| This is the start range of the period | [optional] 
 **endTime** | **String**| This is the end range of the period | [optional] 
 **numItems** | **Number**| This determines how many results you want to return | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserAdminCertificate

> [InlineResponse20011] getUserAdminCertificate(opts)

Admin get certificates

Get coach&#39;s certificates

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'status': "status_example", // String | This is the filter for requests
  'numItems': "numItems_example" // String | This is the number of items to return
};
apiInstance.getUserAdminCertificate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| This is the filter for requests | [optional] 
 **numItems** | **String**| This is the number of items to return | [optional] 

### Return type

[**[InlineResponse20011]**](InlineResponse20011.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserAdminCertificateCoachId

> [InlineResponse20012] getUserAdminCertificateCoachId(coachId)

Admin get certificate from coachId

Retrieve coach certificate

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let coachId = "coachId_example"; // String | 
apiInstance.getUserAdminCertificateCoachId(coachId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coachId** | **String**|  | 

### Return type

[**[InlineResponse20012]**](InlineResponse20012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserAdminComplaintUserId

> InlineResponse20010 getUserAdminComplaintUserId(userId)

Get complaint from user

Get user complains

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let userId = "userId_example"; // String | 
apiInstance.getUserAdminComplaintUserId(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserAdminDashboardFilter

> [InlineResponse2007] getUserAdminDashboardFilter()

This get the dashboard filter names

Get admin dashbord filter names

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
apiInstance.getUserAdminDashboardFilter((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[InlineResponse2007]**](InlineResponse2007.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserAdminDashboardLocationState

> InlineResponse2005 getUserAdminDashboardLocationState(state, reachedType, opts)

Your GET endpoint

Retrieve dashboard location

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let state = "state_example"; // String | This is the state from where to fetch data
let reachedType = "reachedType_example"; // String | This is the type of information that you want to fetch
let opts = {
  'city': "city_example", // String | This is an optional field to pick the city
  'startTime': 2017-09-14T04:07:11.532-04:00, // String | This is the start range of the period
  'endTime': 2017-09-14T04:07:11.532-04:00, // String | This is the end range of the period
  'filterID': "filterID_example" // String | This is the filter id that represents the saved filter
};
apiInstance.getUserAdminDashboardLocationState(state, reachedType, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **String**| This is the state from where to fetch data | 
 **reachedType** | **String**| This is the type of information that you want to fetch | 
 **city** | **String**| This is an optional field to pick the city | [optional] 
 **startTime** | **String**| This is the start range of the period | [optional] 
 **endTime** | **String**| This is the end range of the period | [optional] 
 **filterID** | **String**| This is the filter id that represents the saved filter | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserAdminProfile

> InlineResponse20016 getUserAdminProfile()

Admin get profile

Get profile of admin

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
apiInstance.getUserAdminProfile((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserAdminProfileCheck

> [InlineResponse20013] getUserAdminProfileCheck(opts)

Admin get Profile-Check

Get the status of the coach&#39;s profile check

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'status': "status_example", // String | This is the profiles to filter on 
  'numItems': "numItems_example" // String | This is the number of items that you want to return
};
apiInstance.getUserAdminProfileCheck(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| This is the profiles to filter on  | [optional] 
 **numItems** | **String**| This is the number of items that you want to return | [optional] 

### Return type

[**[InlineResponse20013]**](InlineResponse20013.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserAdminUserComplaints

> [InlineResponse2009] getUserAdminUserComplaints(opts)

Admin gets user complaints

Get users complaints

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'numItems': 56 // Number | This is the number of items that you want to fetch
};
apiInstance.getUserAdminUserComplaints(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numItems** | **Number**| This is the number of items that you want to fetch | [optional] 

### Return type

[**[InlineResponse2009]**](InlineResponse2009.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserAdminUserFeedback

> [InlineResponse20014] getUserAdminUserFeedback(opts)

Admin get user feedback

Get list of user feedback

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'rating': 56, // Number | This is used to filter feature by rating
  'startTime': 2021-12-20T07:30:00-08:00, // String | This is the start time of the range
  'endTime': 2021-12-20T07:30:00-08:00 // String | This is the end time of the range
};
apiInstance.getUserAdminUserFeedback(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rating** | **Number**| This is used to filter feature by rating | [optional] 
 **startTime** | **String**| This is the start time of the range | [optional] 
 **endTime** | **String**| This is the end time of the range | [optional] 

### Return type

[**[InlineResponse20014]**](InlineResponse20014.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserAdminUserFeedbackFeedbackId

> [InlineResponse20015] getUserAdminUserFeedbackFeedbackId(featureId)

Admin get feedback for specific feature

Get feedback for a specific feature

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let featureId = "featureId_example"; // String | 
apiInstance.getUserAdminUserFeedbackFeedbackId(featureId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featureId** | **String**|  | 

### Return type

[**[InlineResponse20015]**](InlineResponse20015.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserAdminUsersManagement

> InlineResponse2008 getUserAdminUsersManagement(opts)

Your GET endpoint

Get user management

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'cancellations': 56, // Number | This is the cancellation parameter to filter the user
  'status': "status_example", // String | This is the status to filter
  'rating': 56, // Number | This is the rating to filter
  'userType': "userType_example", // String | This is the user type to filter
  'numItems': 56 // Number | This is the number of items to return
};
apiInstance.getUserAdminUsersManagement(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancellations** | **Number**| This is the cancellation parameter to filter the user | [optional] 
 **status** | **String**| This is the status to filter | [optional] 
 **rating** | **Number**| This is the rating to filter | [optional] 
 **userType** | **String**| This is the user type to filter | [optional] 
 **numItems** | **Number**| This is the number of items to return | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserCoachAvailability

> [Object] getUserCoachAvailability(opts)

Coach gets own availability

Retrieve the coach&#39;s availability

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'startTime': 2017-09-14T04:07:11.532-04:00, // String | This is the start range of availability items you want to fetch
  'endTime': 2017-09-14T04:07:11.532-04:00 // String | This is the end range of availability items you want to fetch
};
apiInstance.getUserCoachAvailability(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | **String**| This is the start range of availability items you want to fetch | [optional] 
 **endTime** | **String**| This is the end range of availability items you want to fetch | [optional] 

### Return type

**[Object]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserCoachAvailabilityInfo

> InlineResponse200 getUserCoachAvailabilityInfo()

Get Availability Info

This gets the coach&#39;s availability options

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
apiInstance.getUserCoachAvailabilityInfo((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserCoachInsights

> InlineResponse2002 getUserCoachInsights(locationID, startTime, endTime)

Get coach analytics insight

Get coach insights

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let locationID = GhQRAvqicvyeHXWu6gSa; // String | This is the location from where you are going to retrieve analytics.  It can be all if you want to retrieve all notifications
let startTime = 2021-12-20T07:30:00-08:00; // String | This  is the start range of data to perform analytics
let endTime = 2021-12-20T07:30:00-08:00; // String | This is the end range of data to perform analytics
apiInstance.getUserCoachInsights(locationID, startTime, endTime, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationID** | **String**| This is the location from where you are going to retrieve analytics.  It can be all if you want to retrieve all notifications | 
 **startTime** | **String**| This  is the start range of data to perform analytics | 
 **endTime** | **String**| This is the end range of data to perform analytics | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserCoachNotifications

> [InlineResponse2003] getUserCoachNotifications(opts)

Get Coach Notifications

Retrieve coach notification

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'numItems': 56 // Number | This is the number of notifications that you want to return
};
apiInstance.getUserCoachNotifications(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numItems** | **Number**| This is the number of notifications that you want to return | [optional] 

### Return type

[**[InlineResponse2003]**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserCoachProfileCoachId

> CoachProfile getUserCoachProfileCoachId(coachId)

Your GET endpoint

Get coach profile data

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let coachId = "coachId_example"; // String | 
apiInstance.getUserCoachProfileCoachId(coachId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coachId** | **String**|  | 

### Return type

[**CoachProfile**](CoachProfile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserCoachProfileSettingsNotifications

> InlineResponse2001 getUserCoachProfileSettingsNotifications()

Get coach notifications settings

Retrieve coach notification settings

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
apiInstance.getUserCoachProfileSettingsNotifications((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserCoachProfileSettingsPayout

> [CoachPaymentMethod] getUserCoachProfileSettingsPayout()

Get Coach Payout Methods

Get payout settings

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
apiInstance.getUserCoachProfileSettingsPayout((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[CoachPaymentMethod]**](CoachPaymentMethod.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserCoachReview

> [CoachReview] getUserCoachReview(opts)

Coach Get Reviews

Get list of coach reviews

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'numItems': 56 // Number | This is the number of reviews that you want to fetch
};
apiInstance.getUserCoachReview(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numItems** | **Number**| This is the number of reviews that you want to fetch | [optional] 

### Return type

[**[CoachReview]**](CoachReview.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserCoachSession

> [CoachSession] getUserCoachSession()

Get coach session info

Get coach session plans

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
apiInstance.getUserCoachSession((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[CoachSession]**](CoachSession.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserFilter

> Object getUserFilter()

Get user saved filters

Get user&#39;s saved filter

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
apiInstance.getUserFilter((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserFilterFilterName

> Filter getUserFilterFilterName(filterId, opts)

Get user filter by ID

Get user saved filter by filter name

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let filterId = "filterId_example"; // String | 
let opts = {
  'filterId2': "filterId_example" // String | 
};
apiInstance.getUserFilterFilterName(filterId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterId** | **String**|  | 
 **filterId2** | **String**|  | [optional] 

### Return type

[**Filter**](Filter.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserLessonsLessonId

> Lesson getUserLessonsLessonId(lessonId)

Get a lesson

Get a lesson based on lessonId

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let lessonId = "lessonId_example"; // String | 
apiInstance.getUserLessonsLessonId(lessonId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lessonId** | **String**|  | 

### Return type

[**Lesson**](Lesson.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserStudentNotificationFilter

> StudentNotificationFilter getUserStudentNotificationFilter(studentId)

Get student notification filter by studentId

get notification filter by studentId

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let studentId = "studentId_example"; // String | 
apiInstance.getUserStudentNotificationFilter(studentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentId** | **String**|  | 

### Return type

[**StudentNotificationFilter**](StudentNotificationFilter.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserStudentProfileSettingsBasicInfoStudentId

> StudentProfileBasicInfo getUserStudentProfileSettingsBasicInfoStudentId(studentId)

Get student basic information

Get student basic information

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let studentId = "studentId_example"; // String | 
apiInstance.getUserStudentProfileSettingsBasicInfoStudentId(studentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentId** | **String**|  | 

### Return type

[**StudentProfileBasicInfo**](StudentProfileBasicInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserStudentProfileSettingsNotificationSettingsStudentId

> StudentProfileNotifications getUserStudentProfileSettingsNotificationSettingsStudentId(studentId)

get student profile notification settings by ID

Retrieve student profile notification settings

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let studentId = "studentId_example"; // String | 
apiInstance.getUserStudentProfileSettingsNotificationSettingsStudentId(studentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentId** | **String**|  | 

### Return type

[**StudentProfileNotifications**](StudentProfileNotifications.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserStudentProfileSettingsPaymentMethodsStudentId

> [InlineResponse2004] getUserStudentProfileSettingsPaymentMethodsStudentId(studentId)

Get student payment methods

Get the registered payment methods

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let studentId = "studentId_example"; // String | 
apiInstance.getUserStudentProfileSettingsPaymentMethodsStudentId(studentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentId** | **String**|  | 

### Return type

[**[InlineResponse2004]**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserStudentProfileSettingsStudentId

> StudentProfile getUserStudentProfileSettingsStudentId(studentId)

Get student profile by student ID

Retrieve student&#39;s profile

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let studentId = "studentId_example"; // String | 
apiInstance.getUserStudentProfileSettingsStudentId(studentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentId** | **String**|  | 

### Return type

[**StudentProfile**](StudentProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsersLessons

> Lesson getUsersLessons()

Get user lessons

Get current user lesssons information

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
apiInstance.getUsersLessons((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Lesson**](Lesson.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchLocationLocationId

> patchLocationLocationId(locationId, opts)

Edit location information by locationId

Coach can use this endpoint to edit their location.

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let locationId = "locationId_example"; // String | 
let opts = {
  'locationRequestOptional': {"address":"string","city":"string","state":"string","zipcode":0,"name":"string"} // LocationRequestOptional | Location Request Model
};
apiInstance.patchLocationLocationId(locationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**|  | 
 **locationRequestOptional** | [**LocationRequestOptional**](LocationRequestOptional.md)| Location Request Model | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchUserAdminCertificateCoachId

> Object patchUserAdminCertificateCoachId(coachId, opts)

Admin update certificate status

Update the coach&#39;s certificate status

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let coachId = "coachId_example"; // String | 
let opts = {
  'inlineObject9': new LytesnapBackendApi.InlineObject9() // InlineObject9 | 
};
apiInstance.patchUserAdminCertificateCoachId(coachId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coachId** | **String**|  | 
 **inlineObject9** | [**InlineObject9**](InlineObject9.md)|  | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchUserAdminProfile

> Object patchUserAdminProfile(opts)

Admin update profile

Update admin profile

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'inlineObject12': new LytesnapBackendApi.InlineObject12() // InlineObject12 | 
};
apiInstance.patchUserAdminProfile(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject12** | [**InlineObject12**](InlineObject12.md)|  | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchUserAdminProfileCheckCoachId

> patchUserAdminProfileCheckCoachId(coachId, opts)



Update the status of the coach&#39;s profile check

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let coachId = "coachId_example"; // String | 
let opts = {
  'inlineObject11': new LytesnapBackendApi.InlineObject11() // InlineObject11 | 
};
apiInstance.patchUserAdminProfileCheckCoachId(coachId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coachId** | **String**|  | 
 **inlineObject11** | [**InlineObject11**](InlineObject11.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## patchUserCoachAvailability

> patchUserCoachAvailability(availabilityId, opts)



Updates a coach availability by ID

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let availabilityId = "availabilityId_example"; // String | 
let opts = {
  'coachAvailabilityPut': new LytesnapBackendApi.CoachAvailabilityPut() // CoachAvailabilityPut | 
};
apiInstance.patchUserCoachAvailability(availabilityId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **availabilityId** | **String**|  | 
 **coachAvailabilityPut** | [**CoachAvailabilityPut**](CoachAvailabilityPut.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchUserCoachNotificationsRead

> patchUserCoachNotificationsRead(opts)

Set list of notifications as read

Mark the list of notifications as read

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'inlineObject': [new LytesnapBackendApi.InlineObject()] // [InlineObject] | 
};
apiInstance.patchUserCoachNotificationsRead(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**[InlineObject]**](InlineObject.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchUserCoachProfileSettings

> patchUserCoachProfileSettings(opts)

Update coach privacy settings

Update coach privacy settings

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'inlineObject2': new LytesnapBackendApi.InlineObject2() // InlineObject2 | 
};
apiInstance.patchUserCoachProfileSettings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## patchUserCoachProfileSettingsNotifications

> Object patchUserCoachProfileSettingsNotifications(opts)

Update coach profile notification settings

Update coach profile notification settings

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'inlineObject5': new LytesnapBackendApi.InlineObject5() // InlineObject5 | 
};
apiInstance.patchUserCoachProfileSettingsNotifications(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject5** | [**InlineObject5**](InlineObject5.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCoachProfile

> InlineResponse201 postCoachProfile(opts)



This endpoint is used to create the coach profile if it doesn&#39;t exist

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'coachProfile': new LytesnapBackendApi.CoachProfile() // CoachProfile | 
};
apiInstance.postCoachProfile(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coachProfile** | [**CoachProfile**](CoachProfile.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postLocation

> InlineResponse20018 postLocation(opts)

Add a location

This endpoint allow coach to add/saved a training location

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'locationRequest': new LytesnapBackendApi.LocationRequest() // LocationRequest | location request object
};
apiInstance.postLocation(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationRequest** | [**LocationRequest**](LocationRequest.md)| location request object | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserAdminCertificateCoachId

> InlineResponse201 postUserAdminCertificateCoachId(coachId, opts)

Admin set certificate status

Sets the coach&#39;s ceritifcate status

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let coachId = "coachId_example"; // String | 
let opts = {
  'inlineObject8': new LytesnapBackendApi.InlineObject8() // InlineObject8 | 
};
apiInstance.postUserAdminCertificateCoachId(coachId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coachId** | **String**|  | 
 **inlineObject8** | [**InlineObject8**](InlineObject8.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserAdminDashboardFilter

> postUserAdminDashboardFilter(opts)

Save admin dashboard filter

Save admin dashbord filter

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'inlineObject7': new LytesnapBackendApi.InlineObject7() // InlineObject7 | 
};
apiInstance.postUserAdminDashboardFilter(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject7** | [**InlineObject7**](InlineObject7.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserAdminProfileCheckCoachId

> postUserAdminProfileCheckCoachId(coachId, opts)

Admin set coach status

Sets the coach&#39;s status

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let coachId = "coachId_example"; // String | 
let opts = {
  'inlineObject10': new LytesnapBackendApi.InlineObject10() // InlineObject10 | 
};
apiInstance.postUserAdminProfileCheckCoachId(coachId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coachId** | **String**|  | 
 **inlineObject10** | [**InlineObject10**](InlineObject10.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserAdminSendWarningEmail

> postUserAdminSendWarningEmail(userId, opts)

Admin send warning email

Send a warning email

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let userId = "userId_example"; // String | This is the userID to send warning email to.
let opts = {
  'message': "message_example" // String | This is an optional email message for the user. Otherwise, it will use the default emails.
};
apiInstance.postUserAdminSendWarningEmail(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| This is the userID to send warning email to. | 
 **message** | **String**| This is an optional email message for the user. Otherwise, it will use the default emails. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postUserCoachAvailability

> InlineResponse201 postUserCoachAvailability(opts)



Create coach availability

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'coachAvailability': new LytesnapBackendApi.CoachAvailability() // CoachAvailability | 
};
apiInstance.postUserCoachAvailability(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coachAvailability** | [**CoachAvailability**](CoachAvailability.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserCoachAvailabilityInfo

> InlineResponse201 postUserCoachAvailabilityInfo(opts)

Set Coach Availability Options

This sets the coach&#39;s availability options

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'inlineObject1': new LytesnapBackendApi.InlineObject1() // InlineObject1 | 
};
apiInstance.postUserCoachAvailabilityInfo(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## postUserCoachProfileSettingsPayout

> postUserCoachProfileSettingsPayout(opts)

Add Payment Method

Add a payment method to user

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'inlineObject3': new LytesnapBackendApi.InlineObject3() // InlineObject3 | 
};
apiInstance.postUserCoachProfileSettingsPayout(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserCoachSession

> InlineResponse201 postUserCoachSession(opts)



Create a new session between user and coach

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'coachSession': new LytesnapBackendApi.CoachSession() // CoachSession | 
};
apiInstance.postUserCoachSession(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coachSession** | [**CoachSession**](CoachSession.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserFilter

> InlineResponse201 postUserFilter(opts)

Save a user filter

Save a new filter for user

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'filter': new LytesnapBackendApi.Filter() // Filter | Filter data in JSON
};
apiInstance.postUserFilter(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter**](Filter.md)| Filter data in JSON | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserLessonLessonIdCancelRequest

> InlineResponse2012 postUserLessonLessonIdCancelRequest(lessonId, opts)

Submit a lesson cancel request

This endpoint process lesson cancel request.

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let lessonId = "lessonId_example"; // String | 
let opts = {
  'lessonCancelRequest': new LytesnapBackendApi.LessonCancelRequest() // LessonCancelRequest | Lesson Cancel Request
};
apiInstance.postUserLessonLessonIdCancelRequest(lessonId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lessonId** | **String**|  | 
 **lessonCancelRequest** | [**LessonCancelRequest**](LessonCancelRequest.md)| Lesson Cancel Request | [optional] 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserLessons

> InlineResponse2011 postUserLessons(opts)

Book a new lesson

User use this endpoint to book a new lesson

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'lesson': new LytesnapBackendApi.Lesson() // Lesson | User detailed booking information
};
apiInstance.postUserLessons(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lesson** | [**Lesson**](Lesson.md)| User detailed booking information | [optional] 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserLessonsLessonIdProblemReport

> InlineResponse2013 postUserLessonsLessonIdProblemReport(lessonId, opts)

Report a problem with a lesson

Report a problem with a lesson

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let lessonId = "lessonId_example"; // String | 
let opts = {
  'lessonProblemReport': new LytesnapBackendApi.LessonProblemReport() // LessonProblemReport | Report a problem
};
apiInstance.postUserLessonsLessonIdProblemReport(lessonId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lessonId** | **String**|  | 
 **lessonProblemReport** | [**LessonProblemReport**](LessonProblemReport.md)| Report a problem | [optional] 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserStudentNotificationFilter

> postUserStudentNotificationFilter(opts)

create student notification filter with studentId

Create a student notification filter

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'studentNotificationFilter': new LytesnapBackendApi.StudentNotificationFilter() // StudentNotificationFilter | 
};
apiInstance.postUserStudentNotificationFilter(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentNotificationFilter** | [**StudentNotificationFilter**](StudentNotificationFilter.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postUserStudentProfileSettingsProfileCreate

> InlineResponse201 postUserStudentProfileSettingsProfileCreate(opts)

create student profile

Create a student profile

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'studentProfilePost': new LytesnapBackendApi.StudentProfilePost() // StudentProfilePost | 
};
apiInstance.postUserStudentProfileSettingsProfileCreate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentProfilePost** | [**StudentProfilePost**](StudentProfilePost.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putUserAdminBanUser

> putUserAdminBanUser(opts)

Admin ban user

Updates list of banned users

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'userId': "userId_example", // String | This is the userID to ban
  'reason': "reason_example" // String | This is the reason why the user was banned
};
apiInstance.putUserAdminBanUser(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| This is the userID to ban | [optional] 
 **reason** | **String**| This is the reason why the user was banned | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putUserAdminUnbanUser

> putUserAdminUnbanUser(userId)

Unban user

Unban a user

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let userId = "userId_example"; // String | This is the userID to unban
apiInstance.putUserAdminUnbanUser(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| This is the userID to unban | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putUserCoachAvailabilityOptions

> putUserCoachAvailabilityOptions(opts)

Update Availability Options

Update coach&#39;s availability options

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'inlineObject': new LytesnapBackendApi.InlineObject() // InlineObject | 
};
apiInstance.putUserCoachAvailabilityOptions(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putUserCoachProfile

> putUserCoachProfile(opts)

Update coach profile attributes

This endpoint is to overwrite the properties of the coach 

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.putUserCoachProfile(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putUserCoachProfileSettingsDisable

> putUserCoachProfileSettingsDisable(opts)

Disable Coach Account

Disable the coach account

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'inlineObject6': new LytesnapBackendApi.InlineObject6() // InlineObject6 | 
};
apiInstance.putUserCoachProfileSettingsDisable(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject6** | [**InlineObject6**](InlineObject6.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putUserCoachProfileSettingsEnable

> putUserCoachProfileSettingsEnable()

Enable Coach Account

Activate coach account

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
apiInstance.putUserCoachProfileSettingsEnable((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putUserCoachProfileSettingsNotifications

> Object putUserCoachProfileSettingsNotifications(opts)

Overwrite coach notification settings

User updates their notification settings

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'inlineObject4': new LytesnapBackendApi.InlineObject4() // InlineObject4 | 
};
apiInstance.putUserCoachProfileSettingsNotifications(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putUserCoachProfileSettingsPayoutPaymentMethodId

> putUserCoachProfileSettingsPayoutPaymentMethodId(paymentMethodId)

Coach set default payment method

User sets their payment method

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';

let apiInstance = new LytesnapBackendApi.DefaultApi();
let paymentMethodId = "paymentMethodId_example"; // String | 
apiInstance.putUserCoachProfileSettingsPayoutPaymentMethodId(paymentMethodId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethodId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putUserCoachSession

> InlineResponse201 putUserCoachSession(opts)



Update user-coach session&#39;&#39;

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let opts = {
  'coachSessionPut': new LytesnapBackendApi.CoachSessionPut() // CoachSessionPut | 
};
apiInstance.putUserCoachSession(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coachSessionPut** | [**CoachSessionPut**](CoachSessionPut.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putUserStudentNotificationFilterStudentId

> putUserStudentNotificationFilterStudentId(studentId, opts)

update student notification filter by studentId

Update student notifications with studentId

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let studentId = "studentId_example"; // String | 
let opts = {
  'studentNotificationFilter': new LytesnapBackendApi.StudentNotificationFilter() // StudentNotificationFilter | 
};
apiInstance.putUserStudentNotificationFilterStudentId(studentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentId** | **String**|  | 
 **studentNotificationFilter** | [**StudentNotificationFilter**](StudentNotificationFilter.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putUserStudentProfileSettingsBasicInfo

> Object putUserStudentProfileSettingsBasicInfo(studentId, opts)

Edit student basic information

Edit student&#39;s information

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let studentId = "studentId_example"; // String | 
let opts = {
  'studentProfileBasicInfo': new LytesnapBackendApi.StudentProfileBasicInfo() // StudentProfileBasicInfo | 
};
apiInstance.putUserStudentProfileSettingsBasicInfo(studentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentId** | **String**|  | 
 **studentProfileBasicInfo** | [**StudentProfileBasicInfo**](StudentProfileBasicInfo.md)|  | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putUserStudentProfileSettingsDisable

> putUserStudentProfileSettingsDisable()



Disable student profile settings

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
apiInstance.putUserStudentProfileSettingsDisable((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putUserStudentProfileSettingsEnable

> putUserStudentProfileSettingsEnable()



Enable student profile settings

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
apiInstance.putUserStudentProfileSettingsEnable((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putUserStudentProfileSettingsNotificationSettings

> Object putUserStudentProfileSettingsNotificationSettings(studentId, opts)



Update the user notification settings

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let studentId = "studentId_example"; // String | 
let opts = {
  'studentProfileNotifications': new LytesnapBackendApi.StudentProfileNotifications() // StudentProfileNotifications | 
};
apiInstance.putUserStudentProfileSettingsNotificationSettings(studentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentId** | **String**|  | 
 **studentProfileNotifications** | [**StudentProfileNotifications**](StudentProfileNotifications.md)|  | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putUserStudentProfileSettingsPayment

> Object putUserStudentProfileSettingsPayment(studentId, opts)

Create new payment method

Create a new payment method

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let studentId = "studentId_example"; // String | 
let opts = {
  'studentPaymentMethod': new LytesnapBackendApi.StudentPaymentMethod() // StudentPaymentMethod | 
};
apiInstance.putUserStudentProfileSettingsPayment(studentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentId** | **String**|  | 
 **studentPaymentMethod** | [**StudentPaymentMethod**](StudentPaymentMethod.md)|  | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId

> Object putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId(studentId, paymentMethodId)

Set student payment method to default by payment ID

Update student&#39;s payment method

### Example

```javascript
import LytesnapBackendApi from 'lytesnap_backend_api';
let defaultClient = LytesnapBackendApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LytesnapBackendApi.DefaultApi();
let studentId = "studentId_example"; // String | 
let paymentMethodId = "paymentMethodId_example"; // String | 
apiInstance.putUserStudentProfileSettingsPaymentMethodsStudentIdPaymentMethodId(studentId, paymentMethodId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentId** | **String**|  | 
 **paymentMethodId** | **String**|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

