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
// @generated from file google/ads/googleads/v17/errors/conversion_custom_variable_error.proto (package google.ads.googleads.v17.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/errors/conversion_custom_variable_error.proto.
 */
export const file_google_ads_googleads_v17_errors_conversion_custom_variable_error: GenFile = /*@__PURE__*/
  fileDesc("CkZnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZXJyb3JzL2NvbnZlcnNpb25fY3VzdG9tX3ZhcmlhYmxlX2Vycm9yLnByb3RvEh9nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZXJyb3JzIpsBCiFDb252ZXJzaW9uQ3VzdG9tVmFyaWFibGVFcnJvckVudW0idgodQ29udmVyc2lvbkN1c3RvbVZhcmlhYmxlRXJyb3ISDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESEgoORFVQTElDQVRFX05BTUUQAhIRCg1EVVBMSUNBVEVfVEFHEAMSEAoMUkVTRVJWRURfVEFHEARCggIKI2NvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZXJyb3JzQiJDb252ZXJzaW9uQ3VzdG9tVmFyaWFibGVFcnJvclByb3RvUAFaRWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTcvZXJyb3JzO2Vycm9yc6ICA0dBQaoCH0dvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5FcnJvcnPKAh9Hb29nbGVcQWRzXEdvb2dsZUFkc1xWMTdcRXJyb3Jz6gIjR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE3OjpFcnJvcnNiBnByb3RvMw");

/**
 * Container for enum describing possible conversion custom variable errors.
 *
 * @generated from message google.ads.googleads.v17.errors.ConversionCustomVariableErrorEnum
 */
export type ConversionCustomVariableErrorEnum = Message<"google.ads.googleads.v17.errors.ConversionCustomVariableErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.errors.ConversionCustomVariableErrorEnum.
 * Use `create(ConversionCustomVariableErrorEnumSchema)` to create a new message.
 */
export const ConversionCustomVariableErrorEnumSchema: GenMessage<ConversionCustomVariableErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_errors_conversion_custom_variable_error, 0);

/**
 * Enum describing possible conversion custom variable errors.
 *
 * @generated from enum google.ads.googleads.v17.errors.ConversionCustomVariableErrorEnum.ConversionCustomVariableError
 */
export enum ConversionCustomVariableErrorEnum_ConversionCustomVariableError {
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
   * A conversion custom variable with the specified name already exists.
   *
   * @generated from enum value: DUPLICATE_NAME = 2;
   */
  DUPLICATE_NAME = 2,

  /**
   * A conversion custom variable with the specified tag already exists.
   *
   * @generated from enum value: DUPLICATE_TAG = 3;
   */
  DUPLICATE_TAG = 3,

  /**
   * A conversion custom variable with the specified tag is reserved for other
   * uses.
   *
   * @generated from enum value: RESERVED_TAG = 4;
   */
  RESERVED_TAG = 4,
}

/**
 * Describes the enum google.ads.googleads.v17.errors.ConversionCustomVariableErrorEnum.ConversionCustomVariableError.
 */
export const ConversionCustomVariableErrorEnum_ConversionCustomVariableErrorSchema: GenEnum<ConversionCustomVariableErrorEnum_ConversionCustomVariableError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_errors_conversion_custom_variable_error, 0, 0);
