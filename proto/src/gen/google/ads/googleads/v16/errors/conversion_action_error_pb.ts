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
// @generated from file google/ads/googleads/v16/errors/conversion_action_error.proto (package google.ads.googleads.v16.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/errors/conversion_action_error.proto.
 */
export const file_google_ads_googleads_v16_errors_conversion_action_error: GenFile = /*@__PURE__*/
  fileDesc("Cj1nb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZXJyb3JzL2NvbnZlcnNpb25fYWN0aW9uX2Vycm9yLnByb3RvEh9nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZXJyb3JzItMDChlDb252ZXJzaW9uQWN0aW9uRXJyb3JFbnVtIrUDChVDb252ZXJzaW9uQWN0aW9uRXJyb3ISDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESEgoORFVQTElDQVRFX05BTUUQAhIUChBEVVBMSUNBVEVfQVBQX0lEEAMSNwozVFdPX0NPTlZFUlNJT05fQUNUSU9OU19CSURESU5HX09OX1NBTUVfQVBQX0RPV05MT0FEEAQSMQotQklERElOR19PTl9TQU1FX0FQUF9ET1dOTE9BRF9BU19HTE9CQUxfQUNUSU9OEAUSKQolREFUQV9EUklWRU5fTU9ERUxfV0FTX05FVkVSX0dFTkVSQVRFRBAGEh0KGURBVEFfRFJJVkVOX01PREVMX0VYUElSRUQQBxIbChdEQVRBX0RSSVZFTl9NT0RFTF9TVEFMRRAIEh0KGURBVEFfRFJJVkVOX01PREVMX1VOS05PV04QCRIaChZDUkVBVElPTl9OT1RfU1VQUE9SVEVEEAoSGAoUVVBEQVRFX05PVF9TVVBQT1JURUQQCxIsCihDQU5OT1RfU0VUX1JVTEVfQkFTRURfQVRUUklCVVRJT05fTU9ERUxTEAxC+gEKI2NvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZXJyb3JzQhpDb252ZXJzaW9uQWN0aW9uRXJyb3JQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L2Vycm9ycztlcnJvcnOiAgNHQUGqAh9Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuRXJyb3JzygIfR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XEVycm9yc+oCI0dvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6RXJyb3JzYgZwcm90bzM");

/**
 * Container for enum describing possible conversion action errors.
 *
 * @generated from message google.ads.googleads.v16.errors.ConversionActionErrorEnum
 */
export type ConversionActionErrorEnum = Message<"google.ads.googleads.v16.errors.ConversionActionErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.errors.ConversionActionErrorEnum.
 * Use `create(ConversionActionErrorEnumSchema)` to create a new message.
 */
export const ConversionActionErrorEnumSchema: GenMessage<ConversionActionErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_errors_conversion_action_error, 0);

/**
 * Enum describing possible conversion action errors.
 *
 * @generated from enum google.ads.googleads.v16.errors.ConversionActionErrorEnum.ConversionActionError
 */
export enum ConversionActionErrorEnum_ConversionActionError {
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
   * The specified conversion action name already exists.
   *
   * @generated from enum value: DUPLICATE_NAME = 2;
   */
  DUPLICATE_NAME = 2,

  /**
   * Another conversion action with the specified app id already exists.
   *
   * @generated from enum value: DUPLICATE_APP_ID = 3;
   */
  DUPLICATE_APP_ID = 3,

  /**
   * Android first open action conflicts with Google play codeless download
   * action tracking the same app.
   *
   * @generated from enum value: TWO_CONVERSION_ACTIONS_BIDDING_ON_SAME_APP_DOWNLOAD = 4;
   */
  TWO_CONVERSION_ACTIONS_BIDDING_ON_SAME_APP_DOWNLOAD = 4,

  /**
   * Android first open action conflicts with Google play codeless download
   * action tracking the same app.
   *
   * @generated from enum value: BIDDING_ON_SAME_APP_DOWNLOAD_AS_GLOBAL_ACTION = 5;
   */
  BIDDING_ON_SAME_APP_DOWNLOAD_AS_GLOBAL_ACTION = 5,

  /**
   * The attribution model cannot be set to DATA_DRIVEN because a data-driven
   * model has never been generated.
   *
   * @generated from enum value: DATA_DRIVEN_MODEL_WAS_NEVER_GENERATED = 6;
   */
  DATA_DRIVEN_MODEL_WAS_NEVER_GENERATED = 6,

  /**
   * The attribution model cannot be set to DATA_DRIVEN because the
   * data-driven model is expired.
   *
   * @generated from enum value: DATA_DRIVEN_MODEL_EXPIRED = 7;
   */
  DATA_DRIVEN_MODEL_EXPIRED = 7,

  /**
   * The attribution model cannot be set to DATA_DRIVEN because the
   * data-driven model is stale.
   *
   * @generated from enum value: DATA_DRIVEN_MODEL_STALE = 8;
   */
  DATA_DRIVEN_MODEL_STALE = 8,

  /**
   * The attribution model cannot be set to DATA_DRIVEN because the
   * data-driven model is unavailable or the conversion action was newly
   * added.
   *
   * @generated from enum value: DATA_DRIVEN_MODEL_UNKNOWN = 9;
   */
  DATA_DRIVEN_MODEL_UNKNOWN = 9,

  /**
   * Creation of this conversion action type isn't supported by Google
   * Ads API.
   *
   * @generated from enum value: CREATION_NOT_SUPPORTED = 10;
   */
  CREATION_NOT_SUPPORTED = 10,

  /**
   * Update of this conversion action isn't supported by Google Ads API.
   *
   * @generated from enum value: UPDATE_NOT_SUPPORTED = 11;
   */
  UPDATE_NOT_SUPPORTED = 11,

  /**
   * Rule-based attribution models are deprecated and not allowed to be set
   * by conversion action.
   *
   * @generated from enum value: CANNOT_SET_RULE_BASED_ATTRIBUTION_MODELS = 12;
   */
  CANNOT_SET_RULE_BASED_ATTRIBUTION_MODELS = 12,
}

/**
 * Describes the enum google.ads.googleads.v16.errors.ConversionActionErrorEnum.ConversionActionError.
 */
export const ConversionActionErrorEnum_ConversionActionErrorSchema: GenEnum<ConversionActionErrorEnum_ConversionActionError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_errors_conversion_action_error, 0, 0);
