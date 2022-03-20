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


import ApiClient from './ApiClient';
import CoachAvailability from './model/CoachAvailability';
import CoachAvailabilityLocation from './model/CoachAvailabilityLocation';
import CoachAvailabilityPut from './model/CoachAvailabilityPut';
import CoachNotification from './model/CoachNotification';
import CoachNotificationAdditionalInfo from './model/CoachNotificationAdditionalInfo';
import CoachNotificationAdditionalInfoLessonInfo from './model/CoachNotificationAdditionalInfoLessonInfo';
import CoachPaymentMethod from './model/CoachPaymentMethod';
import CoachProfile from './model/CoachProfile';
import CoachProfileAboutMe from './model/CoachProfileAboutMe';
import CoachProfileCertificates from './model/CoachProfileCertificates';
import CoachProfileCredentialsAndExperience from './model/CoachProfileCredentialsAndExperience';
import CoachProfileFaq from './model/CoachProfileFaq';
import CoachProfileSettingsPrivacyResetPassword from './model/CoachProfileSettingsPrivacyResetPassword';
import CoachProfileTrainingLocations from './model/CoachProfileTrainingLocations';
import CoachReview from './model/CoachReview';
import CoachSession from './model/CoachSession';
import CoachSessionProvided from './model/CoachSessionProvided';
import CoachSessionPut from './model/CoachSessionPut';
import CoachSessionPutProvided from './model/CoachSessionPutProvided';
import CoachSessionPutWhatToBring from './model/CoachSessionPutWhatToBring';
import CoachSessionWhatToBring from './model/CoachSessionWhatToBring';
import Filter from './model/Filter';
import FilterFocusTags from './model/FilterFocusTags';
import FilterPriceRange from './model/FilterPriceRange';
import FilterSchedule from './model/FilterSchedule';
import FilterSpecialties from './model/FilterSpecialties';
import InlineObject from './model/InlineObject';
import InlineObject1 from './model/InlineObject1';
import InlineObject10 from './model/InlineObject10';
import InlineObject11 from './model/InlineObject11';
import InlineObject12 from './model/InlineObject12';
import InlineObject2 from './model/InlineObject2';
import InlineObject3 from './model/InlineObject3';
import InlineObject4 from './model/InlineObject4';
import InlineObject5 from './model/InlineObject5';
import InlineObject6 from './model/InlineObject6';
import InlineObject7 from './model/InlineObject7';
import InlineObject8 from './model/InlineObject8';
import InlineObject9 from './model/InlineObject9';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse20010 from './model/InlineResponse20010';
import InlineResponse20011 from './model/InlineResponse20011';
import InlineResponse20012 from './model/InlineResponse20012';
import InlineResponse20013 from './model/InlineResponse20013';
import InlineResponse20014 from './model/InlineResponse20014';
import InlineResponse20015 from './model/InlineResponse20015';
import InlineResponse20016 from './model/InlineResponse20016';
import InlineResponse20017 from './model/InlineResponse20017';
import InlineResponse20018 from './model/InlineResponse20018';
import InlineResponse20018Data from './model/InlineResponse20018Data';
import InlineResponse2001SomeoneMessagedMe from './model/InlineResponse2001SomeoneMessagedMe';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse2005 from './model/InlineResponse2005';
import InlineResponse2006 from './model/InlineResponse2006';
import InlineResponse2006TopCities from './model/InlineResponse2006TopCities';
import InlineResponse2006TopStates from './model/InlineResponse2006TopStates';
import InlineResponse2007 from './model/InlineResponse2007';
import InlineResponse2008 from './model/InlineResponse2008';
import InlineResponse2008CancellationReason from './model/InlineResponse2008CancellationReason';
import InlineResponse2009 from './model/InlineResponse2009';
import InlineResponse201 from './model/InlineResponse201';
import InlineResponse2011 from './model/InlineResponse2011';
import InlineResponse2012 from './model/InlineResponse2012';
import InlineResponse2013 from './model/InlineResponse2013';
import InlineResponse400 from './model/InlineResponse400';
import InlineResponse4001 from './model/InlineResponse4001';
import InlineResponse400Errors from './model/InlineResponse400Errors';
import InlineResponse403 from './model/InlineResponse403';
import InlineResponse500 from './model/InlineResponse500';
import InlineResponse500Errors from './model/InlineResponse500Errors';
import Lesson from './model/Lesson';
import LessonCancelRequest from './model/LessonCancelRequest';
import LessonProblemReport from './model/LessonProblemReport';
import LessonStudentInfo from './model/LessonStudentInfo';
import LocationRequest from './model/LocationRequest';
import LocationRequestOptional from './model/LocationRequestOptional';
import LocationResponse from './model/LocationResponse';
import StudentNotificationFilter from './model/StudentNotificationFilter';
import StudentNotificationFilterFilter from './model/StudentNotificationFilterFilter';
import StudentPaymentMethod from './model/StudentPaymentMethod';
import StudentPaymentMethodCard from './model/StudentPaymentMethodCard';
import StudentProfile from './model/StudentProfile';
import StudentProfileBasicInfo from './model/StudentProfileBasicInfo';
import StudentProfileExperience from './model/StudentProfileExperience';
import StudentProfileNotificationSettings from './model/StudentProfileNotificationSettings';
import StudentProfileNotifications from './model/StudentProfileNotifications';
import StudentProfilePaymentMethods from './model/StudentProfilePaymentMethods';
import StudentProfilePost from './model/StudentProfilePost';
import StudentProfilePostExperience from './model/StudentProfilePostExperience';
import StudentProfilePostNotificationSettings from './model/StudentProfilePostNotificationSettings';
import StudentProfilePostPaymentMethods from './model/StudentProfilePostPaymentMethods';
import User from './model/User';
import DefaultApi from './api/DefaultApi';


/**
* This_document_details_all_the_API_endpoints_that_are_consumed_exclusively_by_lytesnap_frontend_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var LytesnapBackendApi = require('index'); // See note below*.
* var xxxSvc = new LytesnapBackendApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new LytesnapBackendApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new LytesnapBackendApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new LytesnapBackendApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CoachAvailability model constructor.
     * @property {module:model/CoachAvailability}
     */
    CoachAvailability,

    /**
     * The CoachAvailabilityLocation model constructor.
     * @property {module:model/CoachAvailabilityLocation}
     */
    CoachAvailabilityLocation,

    /**
     * The CoachAvailabilityPut model constructor.
     * @property {module:model/CoachAvailabilityPut}
     */
    CoachAvailabilityPut,

    /**
     * The CoachNotification model constructor.
     * @property {module:model/CoachNotification}
     */
    CoachNotification,

    /**
     * The CoachNotificationAdditionalInfo model constructor.
     * @property {module:model/CoachNotificationAdditionalInfo}
     */
    CoachNotificationAdditionalInfo,

    /**
     * The CoachNotificationAdditionalInfoLessonInfo model constructor.
     * @property {module:model/CoachNotificationAdditionalInfoLessonInfo}
     */
    CoachNotificationAdditionalInfoLessonInfo,

    /**
     * The CoachPaymentMethod model constructor.
     * @property {module:model/CoachPaymentMethod}
     */
    CoachPaymentMethod,

    /**
     * The CoachProfile model constructor.
     * @property {module:model/CoachProfile}
     */
    CoachProfile,

    /**
     * The CoachProfileAboutMe model constructor.
     * @property {module:model/CoachProfileAboutMe}
     */
    CoachProfileAboutMe,

    /**
     * The CoachProfileCertificates model constructor.
     * @property {module:model/CoachProfileCertificates}
     */
    CoachProfileCertificates,

    /**
     * The CoachProfileCredentialsAndExperience model constructor.
     * @property {module:model/CoachProfileCredentialsAndExperience}
     */
    CoachProfileCredentialsAndExperience,

    /**
     * The CoachProfileFaq model constructor.
     * @property {module:model/CoachProfileFaq}
     */
    CoachProfileFaq,

    /**
     * The CoachProfileSettingsPrivacyResetPassword model constructor.
     * @property {module:model/CoachProfileSettingsPrivacyResetPassword}
     */
    CoachProfileSettingsPrivacyResetPassword,

    /**
     * The CoachProfileTrainingLocations model constructor.
     * @property {module:model/CoachProfileTrainingLocations}
     */
    CoachProfileTrainingLocations,

    /**
     * The CoachReview model constructor.
     * @property {module:model/CoachReview}
     */
    CoachReview,

    /**
     * The CoachSession model constructor.
     * @property {module:model/CoachSession}
     */
    CoachSession,

    /**
     * The CoachSessionProvided model constructor.
     * @property {module:model/CoachSessionProvided}
     */
    CoachSessionProvided,

    /**
     * The CoachSessionPut model constructor.
     * @property {module:model/CoachSessionPut}
     */
    CoachSessionPut,

    /**
     * The CoachSessionPutProvided model constructor.
     * @property {module:model/CoachSessionPutProvided}
     */
    CoachSessionPutProvided,

    /**
     * The CoachSessionPutWhatToBring model constructor.
     * @property {module:model/CoachSessionPutWhatToBring}
     */
    CoachSessionPutWhatToBring,

    /**
     * The CoachSessionWhatToBring model constructor.
     * @property {module:model/CoachSessionWhatToBring}
     */
    CoachSessionWhatToBring,

    /**
     * The Filter model constructor.
     * @property {module:model/Filter}
     */
    Filter,

    /**
     * The FilterFocusTags model constructor.
     * @property {module:model/FilterFocusTags}
     */
    FilterFocusTags,

    /**
     * The FilterPriceRange model constructor.
     * @property {module:model/FilterPriceRange}
     */
    FilterPriceRange,

    /**
     * The FilterSchedule model constructor.
     * @property {module:model/FilterSchedule}
     */
    FilterSchedule,

    /**
     * The FilterSpecialties model constructor.
     * @property {module:model/FilterSpecialties}
     */
    FilterSpecialties,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The InlineObject1 model constructor.
     * @property {module:model/InlineObject1}
     */
    InlineObject1,

    /**
     * The InlineObject10 model constructor.
     * @property {module:model/InlineObject10}
     */
    InlineObject10,

    /**
     * The InlineObject11 model constructor.
     * @property {module:model/InlineObject11}
     */
    InlineObject11,

    /**
     * The InlineObject12 model constructor.
     * @property {module:model/InlineObject12}
     */
    InlineObject12,

    /**
     * The InlineObject2 model constructor.
     * @property {module:model/InlineObject2}
     */
    InlineObject2,

    /**
     * The InlineObject3 model constructor.
     * @property {module:model/InlineObject3}
     */
    InlineObject3,

    /**
     * The InlineObject4 model constructor.
     * @property {module:model/InlineObject4}
     */
    InlineObject4,

    /**
     * The InlineObject5 model constructor.
     * @property {module:model/InlineObject5}
     */
    InlineObject5,

    /**
     * The InlineObject6 model constructor.
     * @property {module:model/InlineObject6}
     */
    InlineObject6,

    /**
     * The InlineObject7 model constructor.
     * @property {module:model/InlineObject7}
     */
    InlineObject7,

    /**
     * The InlineObject8 model constructor.
     * @property {module:model/InlineObject8}
     */
    InlineObject8,

    /**
     * The InlineObject9 model constructor.
     * @property {module:model/InlineObject9}
     */
    InlineObject9,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010,

    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011,

    /**
     * The InlineResponse20012 model constructor.
     * @property {module:model/InlineResponse20012}
     */
    InlineResponse20012,

    /**
     * The InlineResponse20013 model constructor.
     * @property {module:model/InlineResponse20013}
     */
    InlineResponse20013,

    /**
     * The InlineResponse20014 model constructor.
     * @property {module:model/InlineResponse20014}
     */
    InlineResponse20014,

    /**
     * The InlineResponse20015 model constructor.
     * @property {module:model/InlineResponse20015}
     */
    InlineResponse20015,

    /**
     * The InlineResponse20016 model constructor.
     * @property {module:model/InlineResponse20016}
     */
    InlineResponse20016,

    /**
     * The InlineResponse20017 model constructor.
     * @property {module:model/InlineResponse20017}
     */
    InlineResponse20017,

    /**
     * The InlineResponse20018 model constructor.
     * @property {module:model/InlineResponse20018}
     */
    InlineResponse20018,

    /**
     * The InlineResponse20018Data model constructor.
     * @property {module:model/InlineResponse20018Data}
     */
    InlineResponse20018Data,

    /**
     * The InlineResponse2001SomeoneMessagedMe model constructor.
     * @property {module:model/InlineResponse2001SomeoneMessagedMe}
     */
    InlineResponse2001SomeoneMessagedMe,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The InlineResponse2006TopCities model constructor.
     * @property {module:model/InlineResponse2006TopCities}
     */
    InlineResponse2006TopCities,

    /**
     * The InlineResponse2006TopStates model constructor.
     * @property {module:model/InlineResponse2006TopStates}
     */
    InlineResponse2006TopStates,

    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007,

    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008,

    /**
     * The InlineResponse2008CancellationReason model constructor.
     * @property {module:model/InlineResponse2008CancellationReason}
     */
    InlineResponse2008CancellationReason,

    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009,

    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201,

    /**
     * The InlineResponse2011 model constructor.
     * @property {module:model/InlineResponse2011}
     */
    InlineResponse2011,

    /**
     * The InlineResponse2012 model constructor.
     * @property {module:model/InlineResponse2012}
     */
    InlineResponse2012,

    /**
     * The InlineResponse2013 model constructor.
     * @property {module:model/InlineResponse2013}
     */
    InlineResponse2013,

    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400,

    /**
     * The InlineResponse4001 model constructor.
     * @property {module:model/InlineResponse4001}
     */
    InlineResponse4001,

    /**
     * The InlineResponse400Errors model constructor.
     * @property {module:model/InlineResponse400Errors}
     */
    InlineResponse400Errors,

    /**
     * The InlineResponse403 model constructor.
     * @property {module:model/InlineResponse403}
     */
    InlineResponse403,

    /**
     * The InlineResponse500 model constructor.
     * @property {module:model/InlineResponse500}
     */
    InlineResponse500,

    /**
     * The InlineResponse500Errors model constructor.
     * @property {module:model/InlineResponse500Errors}
     */
    InlineResponse500Errors,

    /**
     * The Lesson model constructor.
     * @property {module:model/Lesson}
     */
    Lesson,

    /**
     * The LessonCancelRequest model constructor.
     * @property {module:model/LessonCancelRequest}
     */
    LessonCancelRequest,

    /**
     * The LessonProblemReport model constructor.
     * @property {module:model/LessonProblemReport}
     */
    LessonProblemReport,

    /**
     * The LessonStudentInfo model constructor.
     * @property {module:model/LessonStudentInfo}
     */
    LessonStudentInfo,

    /**
     * The LocationRequest model constructor.
     * @property {module:model/LocationRequest}
     */
    LocationRequest,

    /**
     * The LocationRequestOptional model constructor.
     * @property {module:model/LocationRequestOptional}
     */
    LocationRequestOptional,

    /**
     * The LocationResponse model constructor.
     * @property {module:model/LocationResponse}
     */
    LocationResponse,

    /**
     * The StudentNotificationFilter model constructor.
     * @property {module:model/StudentNotificationFilter}
     */
    StudentNotificationFilter,

    /**
     * The StudentNotificationFilterFilter model constructor.
     * @property {module:model/StudentNotificationFilterFilter}
     */
    StudentNotificationFilterFilter,

    /**
     * The StudentPaymentMethod model constructor.
     * @property {module:model/StudentPaymentMethod}
     */
    StudentPaymentMethod,

    /**
     * The StudentPaymentMethodCard model constructor.
     * @property {module:model/StudentPaymentMethodCard}
     */
    StudentPaymentMethodCard,

    /**
     * The StudentProfile model constructor.
     * @property {module:model/StudentProfile}
     */
    StudentProfile,

    /**
     * The StudentProfileBasicInfo model constructor.
     * @property {module:model/StudentProfileBasicInfo}
     */
    StudentProfileBasicInfo,

    /**
     * The StudentProfileExperience model constructor.
     * @property {module:model/StudentProfileExperience}
     */
    StudentProfileExperience,

    /**
     * The StudentProfileNotificationSettings model constructor.
     * @property {module:model/StudentProfileNotificationSettings}
     */
    StudentProfileNotificationSettings,

    /**
     * The StudentProfileNotifications model constructor.
     * @property {module:model/StudentProfileNotifications}
     */
    StudentProfileNotifications,

    /**
     * The StudentProfilePaymentMethods model constructor.
     * @property {module:model/StudentProfilePaymentMethods}
     */
    StudentProfilePaymentMethods,

    /**
     * The StudentProfilePost model constructor.
     * @property {module:model/StudentProfilePost}
     */
    StudentProfilePost,

    /**
     * The StudentProfilePostExperience model constructor.
     * @property {module:model/StudentProfilePostExperience}
     */
    StudentProfilePostExperience,

    /**
     * The StudentProfilePostNotificationSettings model constructor.
     * @property {module:model/StudentProfilePostNotificationSettings}
     */
    StudentProfilePostNotificationSettings,

    /**
     * The StudentProfilePostPaymentMethods model constructor.
     * @property {module:model/StudentProfilePostPaymentMethods}
     */
    StudentProfilePostPaymentMethods,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
