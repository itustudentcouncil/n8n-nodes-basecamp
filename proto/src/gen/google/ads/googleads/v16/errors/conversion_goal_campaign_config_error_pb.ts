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
// @generated from file google/ads/googleads/v16/errors/conversion_goal_campaign_config_error.proto (package google.ads.googleads.v16.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/errors/conversion_goal_campaign_config_error.proto.
 */
export const file_google_ads_googleads_v16_errors_conversion_goal_campaign_config_error: GenFile = /*@__PURE__*/
  fileDesc("Cktnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZXJyb3JzL2NvbnZlcnNpb25fZ29hbF9jYW1wYWlnbl9jb25maWdfZXJyb3IucHJvdG8SH2dvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lcnJvcnMirQMKJUNvbnZlcnNpb25Hb2FsQ2FtcGFpZ25Db25maWdFcnJvckVudW0igwMKIUNvbnZlcnNpb25Hb2FsQ2FtcGFpZ25Db25maWdFcnJvchIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARJACjxDQU5OT1RfVVNFX0NBTVBBSUdOX0dPQUxfRk9SX1NFQVJDSF9BRFNfMzYwX01BTkFHRURfQ0FNUEFJR04QAhJBCj1DVVNUT01fR09BTF9ET0VTX05PVF9CRUxPTkdfVE9fR09PR0xFX0FEU19DT05WRVJTSU9OX0NVU1RPTUVSEAMSJQohQ0FNUEFJR05fQ0FOTk9UX1VTRV9VTklGSUVEX0dPQUxTEAQSGgoWRU1QVFlfQ09OVkVSU0lPTl9HT0FMUxAFEjIKLlNUT1JFX1NBTEVfU1RPUkVfVklTSVRfQ0FOTk9UX0JFX0JPVEhfSU5DTFVERUQQBhJECkBQRVJGT1JNQU5DRV9NQVhfQ0FNUEFJR05fQ0FOTk9UX1VTRV9DVVNUT01fR09BTF9XSVRIX1NUT1JFX1NBTEVTEAdChgIKI2NvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZXJyb3JzQiZDb252ZXJzaW9uR29hbENhbXBhaWduQ29uZmlnRXJyb3JQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L2Vycm9ycztlcnJvcnOiAgNHQUGqAh9Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuRXJyb3JzygIfR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XEVycm9yc+oCI0dvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6RXJyb3JzYgZwcm90bzM");

/**
 * Container for enum describing possible conversion goal campaign config
 * errors.
 *
 * @generated from message google.ads.googleads.v16.errors.ConversionGoalCampaignConfigErrorEnum
 */
export type ConversionGoalCampaignConfigErrorEnum = Message<"google.ads.googleads.v16.errors.ConversionGoalCampaignConfigErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.errors.ConversionGoalCampaignConfigErrorEnum.
 * Use `create(ConversionGoalCampaignConfigErrorEnumSchema)` to create a new message.
 */
export const ConversionGoalCampaignConfigErrorEnumSchema: GenMessage<ConversionGoalCampaignConfigErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_errors_conversion_goal_campaign_config_error, 0);

/**
 * Enum describing possible conversion goal campaign config errors.
 *
 * @generated from enum google.ads.googleads.v16.errors.ConversionGoalCampaignConfigErrorEnum.ConversionGoalCampaignConfigError
 */
export enum ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError {
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
   * Campaign is managed by Search Ads 360 but uses Unified Goal.
   *
   * @generated from enum value: CANNOT_USE_CAMPAIGN_GOAL_FOR_SEARCH_ADS_360_MANAGED_CAMPAIGN = 2;
   */
  CANNOT_USE_CAMPAIGN_GOAL_FOR_SEARCH_ADS_360_MANAGED_CAMPAIGN = 2,

  /**
   * The campaign is using a custom goal that does not belong to its Google
   * Ads conversion customer (conversion tracking customer).
   *
   * @generated from enum value: CUSTOM_GOAL_DOES_NOT_BELONG_TO_GOOGLE_ADS_CONVERSION_CUSTOMER = 3;
   */
  CUSTOM_GOAL_DOES_NOT_BELONG_TO_GOOGLE_ADS_CONVERSION_CUSTOMER = 3,

  /**
   * The campaign is not allowed to use unified goals.
   *
   * @generated from enum value: CAMPAIGN_CANNOT_USE_UNIFIED_GOALS = 4;
   */
  CAMPAIGN_CANNOT_USE_UNIFIED_GOALS = 4,

  /**
   * The campaign is using campaign override goals but has no goals
   * configured.
   *
   * @generated from enum value: EMPTY_CONVERSION_GOALS = 5;
   */
  EMPTY_CONVERSION_GOALS = 5,

  /**
   * STORE_SALE and STORE_VISIT conversion types cannot be both included in
   * campaign level goal.
   *
   * @generated from enum value: STORE_SALE_STORE_VISIT_CANNOT_BE_BOTH_INCLUDED = 6;
   */
  STORE_SALE_STORE_VISIT_CANNOT_BE_BOTH_INCLUDED = 6,

  /**
   * Performance Max campaign is not allowed to use custom goal with store
   * sales conversion type.
   *
   * @generated from enum value: PERFORMANCE_MAX_CAMPAIGN_CANNOT_USE_CUSTOM_GOAL_WITH_STORE_SALES = 7;
   */
  PERFORMANCE_MAX_CAMPAIGN_CANNOT_USE_CUSTOM_GOAL_WITH_STORE_SALES = 7,
}

/**
 * Describes the enum google.ads.googleads.v16.errors.ConversionGoalCampaignConfigErrorEnum.ConversionGoalCampaignConfigError.
 */
export const ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigErrorSchema: GenEnum<ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_errors_conversion_goal_campaign_config_error, 0, 0);
