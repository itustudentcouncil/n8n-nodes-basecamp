// Copyright 2024 Google LLC
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
// @generated from file google/ads/googleads/v17/errors/field_error.proto (package google.ads.googleads.v17.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/errors/field_error.proto.
 */
export const file_google_ads_googleads_v17_errors_field_error: GenFile = /*@__PURE__*/
  fileDesc("CjFnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZXJyb3JzL2ZpZWxkX2Vycm9yLnByb3RvEh9nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZXJyb3JzIvcBCg5GaWVsZEVycm9yRW51bSLkAQoKRmllbGRFcnJvchIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIMCghSRVFVSVJFRBACEhMKD0lNTVVUQUJMRV9GSUVMRBADEhEKDUlOVkFMSURfVkFMVUUQBBIXChNWQUxVRV9NVVNUX0JFX1VOU0VUEAUSGgoWUkVRVUlSRURfTk9ORU1QVFlfTElTVBAGEhsKF0ZJRUxEX0NBTk5PVF9CRV9DTEVBUkVEEAcSEQoNQkxPQ0tFRF9WQUxVRRAJEh0KGUZJRUxEX0NBTl9PTkxZX0JFX0NMRUFSRUQQCkLvAQojY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lcnJvcnNCD0ZpZWxkRXJyb3JQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE3L2Vycm9ycztlcnJvcnOiAgNHQUGqAh9Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTcuRXJyb3JzygIfR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE3XEVycm9yc+oCI0dvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6RXJyb3JzYgZwcm90bzM");

/**
 * Container for enum describing possible field errors.
 *
 * @generated from message google.ads.googleads.v17.errors.FieldErrorEnum
 */
export type FieldErrorEnum = Message<"google.ads.googleads.v17.errors.FieldErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.errors.FieldErrorEnum.
 * Use `create(FieldErrorEnumSchema)` to create a new message.
 */
export const FieldErrorEnumSchema: GenMessage<FieldErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_errors_field_error, 0);

/**
 * Enum describing possible field errors.
 *
 * @generated from enum google.ads.googleads.v17.errors.FieldErrorEnum.FieldError
 */
export enum FieldErrorEnum_FieldError {
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
   * The required field was not present.
   *
   * @generated from enum value: REQUIRED = 2;
   */
  REQUIRED = 2,

  /**
   * The field attempted to be mutated is immutable.
   *
   * @generated from enum value: IMMUTABLE_FIELD = 3;
   */
  IMMUTABLE_FIELD = 3,

  /**
   * The field's value is invalid.
   *
   * @generated from enum value: INVALID_VALUE = 4;
   */
  INVALID_VALUE = 4,

  /**
   * The field cannot be set.
   *
   * @generated from enum value: VALUE_MUST_BE_UNSET = 5;
   */
  VALUE_MUST_BE_UNSET = 5,

  /**
   * The required repeated field was empty.
   *
   * @generated from enum value: REQUIRED_NONEMPTY_LIST = 6;
   */
  REQUIRED_NONEMPTY_LIST = 6,

  /**
   * The field cannot be cleared.
   *
   * @generated from enum value: FIELD_CANNOT_BE_CLEARED = 7;
   */
  FIELD_CANNOT_BE_CLEARED = 7,

  /**
   * The field's value is on a deny-list for this field.
   *
   * @generated from enum value: BLOCKED_VALUE = 9;
   */
  BLOCKED_VALUE = 9,

  /**
   * The field's value cannot be modified, except for clearing.
   *
   * @generated from enum value: FIELD_CAN_ONLY_BE_CLEARED = 10;
   */
  FIELD_CAN_ONLY_BE_CLEARED = 10,
}

/**
 * Describes the enum google.ads.googleads.v17.errors.FieldErrorEnum.FieldError.
 */
export const FieldErrorEnum_FieldErrorSchema: GenEnum<FieldErrorEnum_FieldError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_errors_field_error, 0, 0);
