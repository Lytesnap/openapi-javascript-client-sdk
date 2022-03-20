# LytesnapBackendApi.Lesson

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lessonId** | **String** |  | [readonly] 
**lessonType** | **String** |  | [readonly] 
**startTime** | **Date** |  | [readonly] 
**endTime** | **Date** |  | 
**locationId** | **String** |  | [readonly] 
**coachId** | **String** |  | [readonly] 
**bookerId** | **String** |  | [readonly] 
**paymentMethodId** | **String** |  | [readonly] 
**status** | **String** |  | [readonly] 
**studentInfo** | [**LessonStudentInfo**](LessonStudentInfo.md) |  | [optional] 



## Enum: LessonTypeEnum


* `1-on-1` (value: `"1-on-1"`)





## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `accepted` (value: `"accepted"`)

* `rejected` (value: `"rejected"`)

* `cancelled` (value: `"cancelled"`)




