// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file google/ads/googleads/v16/errors/date_range_error.proto (package google.ads.googleads.v16.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/errors/date_range_error.proto.
 */
export const file_google_ads_googleads_v16_errors_date_range_error: GenFile = /*@__PURE__*/
  fileDesc("CjZnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZXJyb3JzL2RhdGVfcmFuZ2VfZXJyb3IucHJvdG8SH2dvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lcnJvcnMi5gEKEkRhdGVSYW5nZUVycm9yRW51bSLPAQoORGF0ZVJhbmdlRXJyb3ISDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESEAoMSU5WQUxJRF9EQVRFEAISHQoZU1RBUlRfREFURV9BRlRFUl9FTkRfREFURRADEhsKF0NBTk5PVF9TRVRfREFURV9UT19QQVNUEAQSIAocQUZURVJfTUFYSU1VTV9BTExPV0FCTEVfREFURRAFEi8KK0NBTk5PVF9NT0RJRllfU1RBUlRfREFURV9JRl9BTFJFQURZX1NUQVJURUQQBkLzAQojY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lcnJvcnNCE0RhdGVSYW5nZUVycm9yUHJvdG9QAVpFZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNi9lcnJvcnM7ZXJyb3JzogIDR0FBqgIfR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LkVycm9yc8oCH0dvb2dsZVxBZHNcR29vZ2xlQWRzXFYxNlxFcnJvcnPqAiNHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTY6OkVycm9yc2IGcHJvdG8z");

/**
 * Container for enum describing possible date range errors.
 *
 * @generated from message google.ads.googleads.v16.errors.DateRangeErrorEnum
 */
export type DateRangeErrorEnum = Message<"google.ads.googleads.v16.errors.DateRangeErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.errors.DateRangeErrorEnum.
 * Use `create(DateRangeErrorEnumSchema)` to create a new message.
 */
export const DateRangeErrorEnumSchema: GenMessage<DateRangeErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_errors_date_range_error, 0);

/**
 * Enum describing possible date range errors.
 *
 * @generated from enum google.ads.googleads.v16.errors.DateRangeErrorEnum.DateRangeError
 */
export enum DateRangeErrorEnum_DateRangeError {
  /**
   * Enum unspecified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The received error code is not known in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * Invalid date.
   *
   * @generated from enum value: INVALID_DATE = 2;
   */
  INVALID_DATE = 2,

  /**
   * The start date was after the end date.
   *
   * @generated from enum value: START_DATE_AFTER_END_DATE = 3;
   */
  START_DATE_AFTER_END_DATE = 3,

  /**
   * Cannot set date to past time
   *
   * @generated from enum value: CANNOT_SET_DATE_TO_PAST = 4;
   */
  CANNOT_SET_DATE_TO_PAST = 4,

  /**
   * A date was used that is past the system "last" date.
   *
   * @generated from enum value: AFTER_MAXIMUM_ALLOWABLE_DATE = 5;
   */
  AFTER_MAXIMUM_ALLOWABLE_DATE = 5,

  /**
   * Trying to change start date on a resource that has started.
   *
   * @generated from enum value: CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED = 6;
   */
  CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED = 6,
}

/**
 * Describes the enum google.ads.googleads.v16.errors.DateRangeErrorEnum.DateRangeError.
 */
export const DateRangeErrorEnum_DateRangeErrorSchema: GenEnum<DateRangeErrorEnum_DateRangeError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_errors_date_range_error, 0, 0);
