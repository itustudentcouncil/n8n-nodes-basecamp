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
// @generated from file google/ads/googleads/v16/errors/user_data_error.proto (package google.ads.googleads.v16.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/errors/user_data_error.proto.
 */
export const file_google_ads_googleads_v16_errors_user_data_error: GenFile = /*@__PURE__*/
  fileDesc("CjVnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZXJyb3JzL3VzZXJfZGF0YV9lcnJvci5wcm90bxIfZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVycm9ycyKvAQoRVXNlckRhdGFFcnJvckVudW0imQEKDVVzZXJEYXRhRXJyb3ISDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESLQopT1BFUkFUSU9OU19GT1JfQ1VTVE9NRVJfTUFUQ0hfTk9UX0FMTE9XRUQQAhIdChlUT09fTUFOWV9VU0VSX0lERU5USUZJRVJTEAMSHAoYVVNFUl9MSVNUX05PVF9BUFBMSUNBQkxFEARC8gEKI2NvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZXJyb3JzQhJVc2VyRGF0YUVycm9yUHJvdG9QAVpFZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNi9lcnJvcnM7ZXJyb3JzogIDR0FBqgIfR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LkVycm9yc8oCH0dvb2dsZVxBZHNcR29vZ2xlQWRzXFYxNlxFcnJvcnPqAiNHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTY6OkVycm9yc2IGcHJvdG8z");

/**
 * Container for enum describing possible user data errors.
 *
 * @generated from message google.ads.googleads.v16.errors.UserDataErrorEnum
 */
export type UserDataErrorEnum = Message<"google.ads.googleads.v16.errors.UserDataErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.errors.UserDataErrorEnum.
 * Use `create(UserDataErrorEnumSchema)` to create a new message.
 */
export const UserDataErrorEnumSchema: GenMessage<UserDataErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_errors_user_data_error, 0);

/**
 * Enum describing possible request errors.
 *
 * @generated from enum google.ads.googleads.v16.errors.UserDataErrorEnum.UserDataError
 */
export enum UserDataErrorEnum_UserDataError {
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
   * Customer is not allowed to perform operations related to Customer Match.
   *
   * @generated from enum value: OPERATIONS_FOR_CUSTOMER_MATCH_NOT_ALLOWED = 2;
   */
  OPERATIONS_FOR_CUSTOMER_MATCH_NOT_ALLOWED = 2,

  /**
   * Maximum number of user identifiers allowed for each request is 100 and
   * for each operation is 20.
   *
   * @generated from enum value: TOO_MANY_USER_IDENTIFIERS = 3;
   */
  TOO_MANY_USER_IDENTIFIERS = 3,

  /**
   * Current user list is not applicable for the given customer.
   *
   * @generated from enum value: USER_LIST_NOT_APPLICABLE = 4;
   */
  USER_LIST_NOT_APPLICABLE = 4,
}

/**
 * Describes the enum google.ads.googleads.v16.errors.UserDataErrorEnum.UserDataError.
 */
export const UserDataErrorEnum_UserDataErrorSchema: GenEnum<UserDataErrorEnum_UserDataError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_errors_user_data_error, 0, 0);
