import localVarRequest from 'request';

export * from './coachAvailability';
export * from './coachAvailabilityLocation';
export * from './coachAvailabilityPut';
export * from './coachNotification';
export * from './coachNotificationAdditionalInfo';
export * from './coachNotificationAdditionalInfoLessonInfo';
export * from './coachPaymentMethod';
export * from './coachProfile';
export * from './coachProfileAboutMe';
export * from './coachProfileCertificates';
export * from './coachProfileCredentialsAndExperience';
export * from './coachProfileFaq';
export * from './coachProfileSettingsPrivacyResetPassword';
export * from './coachProfileTrainingLocations';
export * from './coachReview';
export * from './coachSession';
export * from './coachSessionProvided';
export * from './coachSessionPut';
export * from './coachSessionPutProvided';
export * from './coachSessionPutWhatToBring';
export * from './coachSessionWhatToBring';
export * from './filter';
export * from './filterFocusTags';
export * from './filterPriceRange';
export * from './filterSchedule';
export * from './filterSpecialties';
export * from './inlineObject';
export * from './inlineObject1';
export * from './inlineObject10';
export * from './inlineObject11';
export * from './inlineObject12';
export * from './inlineObject2';
export * from './inlineObject3';
export * from './inlineObject4';
export * from './inlineObject5';
export * from './inlineObject6';
export * from './inlineObject7';
export * from './inlineObject8';
export * from './inlineObject9';
export * from './inlineResponse200';
export * from './inlineResponse2001';
export * from './inlineResponse20010';
export * from './inlineResponse20011';
export * from './inlineResponse20012';
export * from './inlineResponse20013';
export * from './inlineResponse20014';
export * from './inlineResponse20015';
export * from './inlineResponse20016';
export * from './inlineResponse20017';
export * from './inlineResponse20018';
export * from './inlineResponse20018Data';
export * from './inlineResponse2001SomeoneMessagedMe';
export * from './inlineResponse2002';
export * from './inlineResponse2003';
export * from './inlineResponse2004';
export * from './inlineResponse2005';
export * from './inlineResponse2006';
export * from './inlineResponse2006TopCities';
export * from './inlineResponse2006TopStates';
export * from './inlineResponse2007';
export * from './inlineResponse2008';
export * from './inlineResponse2008CancellationReason';
export * from './inlineResponse2009';
export * from './inlineResponse201';
export * from './inlineResponse2011';
export * from './inlineResponse2012';
export * from './inlineResponse2013';
export * from './inlineResponse400';
export * from './inlineResponse4001';
export * from './inlineResponse400Errors';
export * from './inlineResponse403';
export * from './inlineResponse500';
export * from './inlineResponse500Errors';
export * from './lesson';
export * from './lessonCancelRequest';
export * from './lessonProblemReport';
export * from './lessonStudentInfo';
export * from './locationRequest';
export * from './locationRequestOptional';
export * from './locationResponse';
export * from './studentNotificationFilter';
export * from './studentNotificationFilterFilter';
export * from './studentPaymentMethod';
export * from './studentPaymentMethodCard';
export * from './studentProfile';
export * from './studentProfileBasicInfo';
export * from './studentProfileExperience';
export * from './studentProfileNotificationSettings';
export * from './studentProfileNotifications';
export * from './studentProfilePaymentMethods';
export * from './studentProfilePost';
export * from './studentProfilePostExperience';
export * from './studentProfilePostNotificationSettings';
export * from './studentProfilePostPaymentMethods';
export * from './user';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { CoachAvailability } from './coachAvailability';
import { CoachAvailabilityLocation } from './coachAvailabilityLocation';
import { CoachAvailabilityPut } from './coachAvailabilityPut';
import { CoachNotification } from './coachNotification';
import { CoachNotificationAdditionalInfo } from './coachNotificationAdditionalInfo';
import { CoachNotificationAdditionalInfoLessonInfo } from './coachNotificationAdditionalInfoLessonInfo';
import { CoachPaymentMethod } from './coachPaymentMethod';
import { CoachProfile } from './coachProfile';
import { CoachProfileAboutMe } from './coachProfileAboutMe';
import { CoachProfileCertificates } from './coachProfileCertificates';
import { CoachProfileCredentialsAndExperience } from './coachProfileCredentialsAndExperience';
import { CoachProfileFaq } from './coachProfileFaq';
import { CoachProfileSettingsPrivacyResetPassword } from './coachProfileSettingsPrivacyResetPassword';
import { CoachProfileTrainingLocations } from './coachProfileTrainingLocations';
import { CoachReview } from './coachReview';
import { CoachSession } from './coachSession';
import { CoachSessionProvided } from './coachSessionProvided';
import { CoachSessionPut } from './coachSessionPut';
import { CoachSessionPutProvided } from './coachSessionPutProvided';
import { CoachSessionPutWhatToBring } from './coachSessionPutWhatToBring';
import { CoachSessionWhatToBring } from './coachSessionWhatToBring';
import { Filter } from './filter';
import { FilterFocusTags } from './filterFocusTags';
import { FilterPriceRange } from './filterPriceRange';
import { FilterSchedule } from './filterSchedule';
import { FilterSpecialties } from './filterSpecialties';
import { InlineObject } from './inlineObject';
import { InlineObject1 } from './inlineObject1';
import { InlineObject10 } from './inlineObject10';
import { InlineObject11 } from './inlineObject11';
import { InlineObject12 } from './inlineObject12';
import { InlineObject2 } from './inlineObject2';
import { InlineObject3 } from './inlineObject3';
import { InlineObject4 } from './inlineObject4';
import { InlineObject5 } from './inlineObject5';
import { InlineObject6 } from './inlineObject6';
import { InlineObject7 } from './inlineObject7';
import { InlineObject8 } from './inlineObject8';
import { InlineObject9 } from './inlineObject9';
import { InlineResponse200 } from './inlineResponse200';
import { InlineResponse2001 } from './inlineResponse2001';
import { InlineResponse20010 } from './inlineResponse20010';
import { InlineResponse20011 } from './inlineResponse20011';
import { InlineResponse20012 } from './inlineResponse20012';
import { InlineResponse20013 } from './inlineResponse20013';
import { InlineResponse20014 } from './inlineResponse20014';
import { InlineResponse20015 } from './inlineResponse20015';
import { InlineResponse20016 } from './inlineResponse20016';
import { InlineResponse20017 } from './inlineResponse20017';
import { InlineResponse20018 } from './inlineResponse20018';
import { InlineResponse20018Data } from './inlineResponse20018Data';
import { InlineResponse2001SomeoneMessagedMe } from './inlineResponse2001SomeoneMessagedMe';
import { InlineResponse2002 } from './inlineResponse2002';
import { InlineResponse2003 } from './inlineResponse2003';
import { InlineResponse2004 } from './inlineResponse2004';
import { InlineResponse2005 } from './inlineResponse2005';
import { InlineResponse2006 } from './inlineResponse2006';
import { InlineResponse2006TopCities } from './inlineResponse2006TopCities';
import { InlineResponse2006TopStates } from './inlineResponse2006TopStates';
import { InlineResponse2007 } from './inlineResponse2007';
import { InlineResponse2008 } from './inlineResponse2008';
import { InlineResponse2008CancellationReason } from './inlineResponse2008CancellationReason';
import { InlineResponse2009 } from './inlineResponse2009';
import { InlineResponse201 } from './inlineResponse201';
import { InlineResponse2011 } from './inlineResponse2011';
import { InlineResponse2012 } from './inlineResponse2012';
import { InlineResponse2013 } from './inlineResponse2013';
import { InlineResponse400 } from './inlineResponse400';
import { InlineResponse4001 } from './inlineResponse4001';
import { InlineResponse400Errors } from './inlineResponse400Errors';
import { InlineResponse403 } from './inlineResponse403';
import { InlineResponse500 } from './inlineResponse500';
import { InlineResponse500Errors } from './inlineResponse500Errors';
import { Lesson } from './lesson';
import { LessonCancelRequest } from './lessonCancelRequest';
import { LessonProblemReport } from './lessonProblemReport';
import { LessonStudentInfo } from './lessonStudentInfo';
import { LocationRequest } from './locationRequest';
import { LocationRequestOptional } from './locationRequestOptional';
import { LocationResponse } from './locationResponse';
import { StudentNotificationFilter } from './studentNotificationFilter';
import { StudentNotificationFilterFilter } from './studentNotificationFilterFilter';
import { StudentPaymentMethod } from './studentPaymentMethod';
import { StudentPaymentMethodCard } from './studentPaymentMethodCard';
import { StudentProfile } from './studentProfile';
import { StudentProfileBasicInfo } from './studentProfileBasicInfo';
import { StudentProfileExperience } from './studentProfileExperience';
import { StudentProfileNotificationSettings } from './studentProfileNotificationSettings';
import { StudentProfileNotifications } from './studentProfileNotifications';
import { StudentProfilePaymentMethods } from './studentProfilePaymentMethods';
import { StudentProfilePost } from './studentProfilePost';
import { StudentProfilePostExperience } from './studentProfilePostExperience';
import { StudentProfilePostNotificationSettings } from './studentProfilePostNotificationSettings';
import { StudentProfilePostPaymentMethods } from './studentProfilePostPaymentMethods';
import { User } from './user';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "CoachAvailability.RepetitionEnum": CoachAvailability.RepetitionEnum,
        "CoachAvailabilityPut.RepetitionEnum": CoachAvailabilityPut.RepetitionEnum,
        "CoachNotification.TypeEnum": CoachNotification.TypeEnum,
        "CoachProfile.SportEnum": CoachProfile.SportEnum,
        "CoachProfile.GenderEnum": CoachProfile.GenderEnum,
        "CoachProfileAboutMe.TeachesEnum": CoachProfileAboutMe.TeachesEnum,
        "CoachProfileAboutMe.LevelsEnum": CoachProfileAboutMe.LevelsEnum,
        "CoachProfileAboutMe.SpecializationEnum": CoachProfileAboutMe.SpecializationEnum,
        "CoachReview.TagsEnum": CoachReview.TagsEnum,
        "CoachSession.SportEnum": CoachSession.SportEnum,
        "CoachSession.SessionTypeEnum": CoachSession.SessionTypeEnum,
        "CoachSessionPut.SportEnum": CoachSessionPut.SportEnum,
        "CoachSessionPut.SessionTypeEnum": CoachSessionPut.SessionTypeEnum,
        "Filter.GenderEnum": Filter.GenderEnum,
        "FilterFocusTags.SportEnum": FilterFocusTags.SportEnum,
        "FilterFocusTags.SkillEnum": FilterFocusTags.SkillEnum,
        "FilterSchedule.TimeOfTheDayEnum": FilterSchedule.TimeOfTheDayEnum,
        "FilterSchedule.DayOfTheWeekEnum": FilterSchedule.DayOfTheWeekEnum,
        "FilterSpecialties.SkillLevelEnum": FilterSpecialties.SkillLevelEnum,
        "FilterSpecialties.AgeRangeEnum": FilterSpecialties.AgeRangeEnum,
        "InlineObject10.ResultEnum": InlineObject10.ResultEnum,
        "InlineObject11.ResultEnum": InlineObject11.ResultEnum,
        "InlineObject12.GenderEnum": InlineObject12.GenderEnum,
        "InlineObject3.CardTypeEnum": InlineObject3.CardTypeEnum,
        "InlineObject6.ReasonEnum": InlineObject6.ReasonEnum,
        "InlineObject8.ResultEnum": InlineObject8.ResultEnum,
        "InlineObject9.ResultEnum": InlineObject9.ResultEnum,
        "InlineResponse20010.UserTypeEnum": InlineResponse20010.UserTypeEnum,
        "InlineResponse20011.StatusEnum": InlineResponse20011.StatusEnum,
        "InlineResponse20013.ProfileStatusEnum": InlineResponse20013.ProfileStatusEnum,
        "InlineResponse20015.TypeEnum": InlineResponse20015.TypeEnum,
        "InlineResponse20016.GenderEnum": InlineResponse20016.GenderEnum,
        "InlineResponse2008.UserTypeEnum": InlineResponse2008.UserTypeEnum,
        "InlineResponse2008.CancellationReasonEnum": InlineResponse2008.CancellationReasonEnum,
        "InlineResponse2008.StatusEnum": InlineResponse2008.StatusEnum,
        "InlineResponse2009.UserTypeEnum": InlineResponse2009.UserTypeEnum,
        "InlineResponse2009.ReasonEnum": InlineResponse2009.ReasonEnum,
        "InlineResponse2009.StatusEnum": InlineResponse2009.StatusEnum,
        "Lesson.LessonTypeEnum": Lesson.LessonTypeEnum,
        "Lesson.StatusEnum": Lesson.StatusEnum,
        "LessonCancelRequest.CancelReasonEnum": LessonCancelRequest.CancelReasonEnum,
        "LessonProblemReport.ProblemEnum": LessonProblemReport.ProblemEnum,
        "StudentPaymentMethod.TypeEnum": StudentPaymentMethod.TypeEnum,
        "StudentProfile.GenderEnum": StudentProfile.GenderEnum,
        "StudentProfileBasicInfo.GenderEnum": StudentProfileBasicInfo.GenderEnum,
        "StudentProfileExperience.SportTypeEnum": StudentProfileExperience.SportTypeEnum,
        "StudentProfileExperience.ExperienceLevelEnum": StudentProfileExperience.ExperienceLevelEnum,
        "StudentProfilePost.GenderEnum": StudentProfilePost.GenderEnum,
        "StudentProfilePostExperience.SportTypeEnum": StudentProfilePostExperience.SportTypeEnum,
        "StudentProfilePostExperience.ExperienceLevelEnum": StudentProfilePostExperience.ExperienceLevelEnum,
}

let typeMap: {[index: string]: any} = {
    "CoachAvailability": CoachAvailability,
    "CoachAvailabilityLocation": CoachAvailabilityLocation,
    "CoachAvailabilityPut": CoachAvailabilityPut,
    "CoachNotification": CoachNotification,
    "CoachNotificationAdditionalInfo": CoachNotificationAdditionalInfo,
    "CoachNotificationAdditionalInfoLessonInfo": CoachNotificationAdditionalInfoLessonInfo,
    "CoachPaymentMethod": CoachPaymentMethod,
    "CoachProfile": CoachProfile,
    "CoachProfileAboutMe": CoachProfileAboutMe,
    "CoachProfileCertificates": CoachProfileCertificates,
    "CoachProfileCredentialsAndExperience": CoachProfileCredentialsAndExperience,
    "CoachProfileFaq": CoachProfileFaq,
    "CoachProfileSettingsPrivacyResetPassword": CoachProfileSettingsPrivacyResetPassword,
    "CoachProfileTrainingLocations": CoachProfileTrainingLocations,
    "CoachReview": CoachReview,
    "CoachSession": CoachSession,
    "CoachSessionProvided": CoachSessionProvided,
    "CoachSessionPut": CoachSessionPut,
    "CoachSessionPutProvided": CoachSessionPutProvided,
    "CoachSessionPutWhatToBring": CoachSessionPutWhatToBring,
    "CoachSessionWhatToBring": CoachSessionWhatToBring,
    "Filter": Filter,
    "FilterFocusTags": FilterFocusTags,
    "FilterPriceRange": FilterPriceRange,
    "FilterSchedule": FilterSchedule,
    "FilterSpecialties": FilterSpecialties,
    "InlineObject": InlineObject,
    "InlineObject1": InlineObject1,
    "InlineObject10": InlineObject10,
    "InlineObject11": InlineObject11,
    "InlineObject12": InlineObject12,
    "InlineObject2": InlineObject2,
    "InlineObject3": InlineObject3,
    "InlineObject4": InlineObject4,
    "InlineObject5": InlineObject5,
    "InlineObject6": InlineObject6,
    "InlineObject7": InlineObject7,
    "InlineObject8": InlineObject8,
    "InlineObject9": InlineObject9,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse20010": InlineResponse20010,
    "InlineResponse20011": InlineResponse20011,
    "InlineResponse20012": InlineResponse20012,
    "InlineResponse20013": InlineResponse20013,
    "InlineResponse20014": InlineResponse20014,
    "InlineResponse20015": InlineResponse20015,
    "InlineResponse20016": InlineResponse20016,
    "InlineResponse20017": InlineResponse20017,
    "InlineResponse20018": InlineResponse20018,
    "InlineResponse20018Data": InlineResponse20018Data,
    "InlineResponse2001SomeoneMessagedMe": InlineResponse2001SomeoneMessagedMe,
    "InlineResponse2002": InlineResponse2002,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse2004": InlineResponse2004,
    "InlineResponse2005": InlineResponse2005,
    "InlineResponse2006": InlineResponse2006,
    "InlineResponse2006TopCities": InlineResponse2006TopCities,
    "InlineResponse2006TopStates": InlineResponse2006TopStates,
    "InlineResponse2007": InlineResponse2007,
    "InlineResponse2008": InlineResponse2008,
    "InlineResponse2008CancellationReason": InlineResponse2008CancellationReason,
    "InlineResponse2009": InlineResponse2009,
    "InlineResponse201": InlineResponse201,
    "InlineResponse2011": InlineResponse2011,
    "InlineResponse2012": InlineResponse2012,
    "InlineResponse2013": InlineResponse2013,
    "InlineResponse400": InlineResponse400,
    "InlineResponse4001": InlineResponse4001,
    "InlineResponse400Errors": InlineResponse400Errors,
    "InlineResponse403": InlineResponse403,
    "InlineResponse500": InlineResponse500,
    "InlineResponse500Errors": InlineResponse500Errors,
    "Lesson": Lesson,
    "LessonCancelRequest": LessonCancelRequest,
    "LessonProblemReport": LessonProblemReport,
    "LessonStudentInfo": LessonStudentInfo,
    "LocationRequest": LocationRequest,
    "LocationRequestOptional": LocationRequestOptional,
    "LocationResponse": LocationResponse,
    "StudentNotificationFilter": StudentNotificationFilter,
    "StudentNotificationFilterFilter": StudentNotificationFilterFilter,
    "StudentPaymentMethod": StudentPaymentMethod,
    "StudentPaymentMethodCard": StudentPaymentMethodCard,
    "StudentProfile": StudentProfile,
    "StudentProfileBasicInfo": StudentProfileBasicInfo,
    "StudentProfileExperience": StudentProfileExperience,
    "StudentProfileNotificationSettings": StudentProfileNotificationSettings,
    "StudentProfileNotifications": StudentProfileNotifications,
    "StudentProfilePaymentMethods": StudentProfilePaymentMethods,
    "StudentProfilePost": StudentProfilePost,
    "StudentProfilePostExperience": StudentProfilePostExperience,
    "StudentProfilePostNotificationSettings": StudentProfilePostNotificationSettings,
    "StudentProfilePostPaymentMethods": StudentProfilePostPaymentMethods,
    "User": User,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
