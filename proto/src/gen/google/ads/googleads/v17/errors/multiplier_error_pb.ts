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
// @generated from file google/ads/googleads/v17/errors/multiplier_error.proto (package google.ads.googleads.v17.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/errors/multiplier_error.proto.
 */
export const file_google_ads_googleads_v17_errors_multiplier_error: GenFile = /*@__PURE__*/
  fileDesc("CjZnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZXJyb3JzL211bHRpcGxpZXJfZXJyb3IucHJvdG8SH2dvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lcnJvcnMizwQKE011bHRpcGxpZXJFcnJvckVudW0itwQKD011bHRpcGxpZXJFcnJvchIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIXChNNVUxUSVBMSUVSX1RPT19ISUdIEAISFgoSTVVMVElQTElFUl9UT09fTE9XEAMSHgoaVE9PX01BTllfRlJBQ1RJT05BTF9ESUdJVFMQBBIvCitNVUxUSVBMSUVSX05PVF9BTExPV0VEX0ZPUl9CSURESU5HX1NUUkFURUdZEAUSMwovTVVMVElQTElFUl9OT1RfQUxMT1dFRF9XSEVOX0JBU0VfQklEX0lTX01JU1NJTkcQBhIbChdOT19NVUxUSVBMSUVSX1NQRUNJRklFRBAHEjAKLE1VTFRJUExJRVJfQ0FVU0VTX0JJRF9UT19FWENFRURfREFJTFlfQlVER0VUEAgSMgouTVVMVElQTElFUl9DQVVTRVNfQklEX1RPX0VYQ0VFRF9NT05USExZX0JVREdFVBAJEjEKLU1VTFRJUExJRVJfQ0FVU0VTX0JJRF9UT19FWENFRURfQ1VTVE9NX0JVREdFVBAKEjMKL01VTFRJUExJRVJfQ0FVU0VTX0JJRF9UT19FWENFRURfTUFYX0FMTE9XRURfQklEEAsSMQotQklEX0xFU1NfVEhBTl9NSU5fQUxMT1dFRF9CSURfV0lUSF9NVUxUSVBMSUVSEAwSMQotTVVMVElQTElFUl9BTkRfQklERElOR19TVFJBVEVHWV9UWVBFX01JU01BVENIEA1C9AEKI2NvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZXJyb3JzQhRNdWx0aXBsaWVyRXJyb3JQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE3L2Vycm9ycztlcnJvcnOiAgNHQUGqAh9Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTcuRXJyb3JzygIfR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE3XEVycm9yc+oCI0dvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6RXJyb3JzYgZwcm90bzM");

/**
 * Container for enum describing possible multiplier errors.
 *
 * @generated from message google.ads.googleads.v17.errors.MultiplierErrorEnum
 */
export type MultiplierErrorEnum = Message<"google.ads.googleads.v17.errors.MultiplierErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.errors.MultiplierErrorEnum.
 * Use `create(MultiplierErrorEnumSchema)` to create a new message.
 */
export const MultiplierErrorEnumSchema: GenMessage<MultiplierErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_errors_multiplier_error, 0);

/**
 * Enum describing possible multiplier errors.
 *
 * @generated from enum google.ads.googleads.v17.errors.MultiplierErrorEnum.MultiplierError
 */
export enum MultiplierErrorEnum_MultiplierError {
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
   * Multiplier value is too high
   *
   * @generated from enum value: MULTIPLIER_TOO_HIGH = 2;
   */
  MULTIPLIER_TOO_HIGH = 2,

  /**
   * Multiplier value is too low
   *
   * @generated from enum value: MULTIPLIER_TOO_LOW = 3;
   */
  MULTIPLIER_TOO_LOW = 3,

  /**
   * Too many fractional digits
   *
   * @generated from enum value: TOO_MANY_FRACTIONAL_DIGITS = 4;
   */
  TOO_MANY_FRACTIONAL_DIGITS = 4,

  /**
   * A multiplier cannot be set for this bidding strategy
   *
   * @generated from enum value: MULTIPLIER_NOT_ALLOWED_FOR_BIDDING_STRATEGY = 5;
   */
  MULTIPLIER_NOT_ALLOWED_FOR_BIDDING_STRATEGY = 5,

  /**
   * A multiplier cannot be set when there is no base bid (for example,
   * content max cpc)
   *
   * @generated from enum value: MULTIPLIER_NOT_ALLOWED_WHEN_BASE_BID_IS_MISSING = 6;
   */
  MULTIPLIER_NOT_ALLOWED_WHEN_BASE_BID_IS_MISSING = 6,

  /**
   * A bid multiplier must be specified
   *
   * @generated from enum value: NO_MULTIPLIER_SPECIFIED = 7;
   */
  NO_MULTIPLIER_SPECIFIED = 7,

  /**
   * Multiplier causes bid to exceed daily budget
   *
   * @generated from enum value: MULTIPLIER_CAUSES_BID_TO_EXCEED_DAILY_BUDGET = 8;
   */
  MULTIPLIER_CAUSES_BID_TO_EXCEED_DAILY_BUDGET = 8,

  /**
   * Multiplier causes bid to exceed monthly budget
   *
   * @generated from enum value: MULTIPLIER_CAUSES_BID_TO_EXCEED_MONTHLY_BUDGET = 9;
   */
  MULTIPLIER_CAUSES_BID_TO_EXCEED_MONTHLY_BUDGET = 9,

  /**
   * Multiplier causes bid to exceed custom budget
   *
   * @generated from enum value: MULTIPLIER_CAUSES_BID_TO_EXCEED_CUSTOM_BUDGET = 10;
   */
  MULTIPLIER_CAUSES_BID_TO_EXCEED_CUSTOM_BUDGET = 10,

  /**
   * Multiplier causes bid to exceed maximum allowed bid
   *
   * @generated from enum value: MULTIPLIER_CAUSES_BID_TO_EXCEED_MAX_ALLOWED_BID = 11;
   */
  MULTIPLIER_CAUSES_BID_TO_EXCEED_MAX_ALLOWED_BID = 11,

  /**
   * Multiplier causes bid to become less than the minimum bid allowed
   *
   * @generated from enum value: BID_LESS_THAN_MIN_ALLOWED_BID_WITH_MULTIPLIER = 12;
   */
  BID_LESS_THAN_MIN_ALLOWED_BID_WITH_MULTIPLIER = 12,

  /**
   * Multiplier type (cpc versus cpm) needs to match campaign's bidding
   * strategy
   *
   * @generated from enum value: MULTIPLIER_AND_BIDDING_STRATEGY_TYPE_MISMATCH = 13;
   */
  MULTIPLIER_AND_BIDDING_STRATEGY_TYPE_MISMATCH = 13,
}

/**
 * Describes the enum google.ads.googleads.v17.errors.MultiplierErrorEnum.MultiplierError.
 */
export const MultiplierErrorEnum_MultiplierErrorSchema: GenEnum<MultiplierErrorEnum_MultiplierError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_errors_multiplier_error, 0, 0);
