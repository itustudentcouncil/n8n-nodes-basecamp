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
// @generated from file google/ads/googleads/v16/errors/campaign_lifecycle_goal_error.proto (package google.ads.googleads.v16.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/errors/campaign_lifecycle_goal_error.proto.
 */
export const file_google_ads_googleads_v16_errors_campaign_lifecycle_goal_error: GenFile = /*@__PURE__*/
  fileDesc("CkNnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZXJyb3JzL2NhbXBhaWduX2xpZmVjeWNsZV9nb2FsX2Vycm9yLnByb3RvEh9nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZXJyb3JzIrUECh5DYW1wYWlnbkxpZmVjeWNsZUdvYWxFcnJvckVudW0ikgQKGkNhbXBhaWduTGlmZWN5Y2xlR29hbEVycm9yEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEhQKEENBTVBBSUdOX01JU1NJTkcQAhIUChBJTlZBTElEX0NBTVBBSUdOEAMSMgouQ1VTVE9NRVJfQUNRVUlTSVRJT05fSU5WQUxJRF9PUFRJTUlaQVRJT05fTU9ERRAEEiEKHUlOQ09NUEFUSUJMRV9CSURESU5HX1NUUkFURUdZEAUSGQoVTUlTU0lOR19QVVJDSEFTRV9HT0FMEAYSNAowQ1VTVE9NRVJfQUNRVUlTSVRJT05fSU5WQUxJRF9ISUdIX0xJRkVUSU1FX1ZBTFVFEAcSMgouQ1VTVE9NRVJfQUNRVUlTSVRJT05fVU5TVVBQT1JURURfQ0FNUEFJR05fVFlQRRAIEiYKIkNVU1RPTUVSX0FDUVVJU0lUSU9OX0lOVkFMSURfVkFMVUUQCRImCiJDVVNUT01FUl9BQ1FVSVNJVElPTl9WQUxVRV9NSVNTSU5HEAoSPQo5Q1VTVE9NRVJfQUNRVUlTSVRJT05fTUlTU0lOR19FWElTVElOR19DVVNUT01FUl9ERUZJTklUSU9OEAsSPwo7Q1VTVE9NRVJfQUNRVUlTSVRJT05fTUlTU0lOR19ISUdIX1ZBTFVFX0NVU1RPTUVSX0RFRklOSVRJT04QDEL/AQojY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lcnJvcnNCH0NhbXBhaWduTGlmZWN5Y2xlR29hbEVycm9yUHJvdG9QAVpFZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNi9lcnJvcnM7ZXJyb3JzogIDR0FBqgIfR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LkVycm9yc8oCH0dvb2dsZVxBZHNcR29vZ2xlQWRzXFYxNlxFcnJvcnPqAiNHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTY6OkVycm9yc2IGcHJvdG8z");

/**
 * Container for enum describing possible campaign lifecycle goal errors.
 *
 * @generated from message google.ads.googleads.v16.errors.CampaignLifecycleGoalErrorEnum
 */
export type CampaignLifecycleGoalErrorEnum = Message<"google.ads.googleads.v16.errors.CampaignLifecycleGoalErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.errors.CampaignLifecycleGoalErrorEnum.
 * Use `create(CampaignLifecycleGoalErrorEnumSchema)` to create a new message.
 */
export const CampaignLifecycleGoalErrorEnumSchema: GenMessage<CampaignLifecycleGoalErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_errors_campaign_lifecycle_goal_error, 0);

/**
 * Enum describing possible campaign lifecycle goal errors.
 *
 * @generated from enum google.ads.googleads.v16.errors.CampaignLifecycleGoalErrorEnum.CampaignLifecycleGoalError
 */
export enum CampaignLifecycleGoalErrorEnum_CampaignLifecycleGoalError {
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
   * Campaign is not specified.
   *
   * @generated from enum value: CAMPAIGN_MISSING = 2;
   */
  CAMPAIGN_MISSING = 2,

  /**
   * Cannot find the specified campaign.
   *
   * @generated from enum value: INVALID_CAMPAIGN = 3;
   */
  INVALID_CAMPAIGN = 3,

  /**
   * Optimization mode is unspecified or invalid.
   *
   * @generated from enum value: CUSTOMER_ACQUISITION_INVALID_OPTIMIZATION_MODE = 4;
   */
  CUSTOMER_ACQUISITION_INVALID_OPTIMIZATION_MODE = 4,

  /**
   * The configured lifecycle goal setting is not compatible with the bidding
   * strategy the campaign is using. Specifically, BID_HIGHER_FOR_NEW_CUSTOMER
   * requires conversion-value based bidding strategy type such as
   * MAXIMIZE_CONVERSION_VALUE.
   *
   * @generated from enum value: INCOMPATIBLE_BIDDING_STRATEGY = 5;
   */
  INCOMPATIBLE_BIDDING_STRATEGY = 5,

  /**
   * Lifecycle goals require the campaign to optimize towards purchase
   * conversion goal.
   *
   * @generated from enum value: MISSING_PURCHASE_GOAL = 6;
   */
  MISSING_PURCHASE_GOAL = 6,

  /**
   * CampaignLifecycleGoal.customer_acquisition_goal_settings.value_settings.high_lifetime_value
   * is invalid or not allowed, such as when the specified value is smaller
   * than 0.01, when the optimization mode is not BID_HIGHER_FOR_NEW_CUSTOMER,
   * or when
   * CampaignLifecycleGoal.customer_acquisition_goal_settings.value_settings.high_lifetime_value
   * is specified smaller than/without
   * CampaignLifecycleGoal.customer_acquisition_goal_settings.value_settings.value.
   *
   * @generated from enum value: CUSTOMER_ACQUISITION_INVALID_HIGH_LIFETIME_VALUE = 7;
   */
  CUSTOMER_ACQUISITION_INVALID_HIGH_LIFETIME_VALUE = 7,

  /**
   * Customer acquisition goal is not supported on this campaign type.
   *
   * @generated from enum value: CUSTOMER_ACQUISITION_UNSUPPORTED_CAMPAIGN_TYPE = 8;
   */
  CUSTOMER_ACQUISITION_UNSUPPORTED_CAMPAIGN_TYPE = 8,

  /**
   * CampaignLifecycleGoal.customer_acquisition_goal_settings.value_settings.value
   * is invalid or not allowed, such as when the specified value is smaller
   * than 0.01, or when the optimization mode is not
   * BID_HIGHER_FOR_NEW_CUSTOMER.
   *
   * @generated from enum value: CUSTOMER_ACQUISITION_INVALID_VALUE = 9;
   */
  CUSTOMER_ACQUISITION_INVALID_VALUE = 9,

  /**
   * To use BID_HIGHER_FOR_NEW_CUSTOMER mode, either
   * CampaignLifecycleGoal.customer_acquisition_goal_settings.value_settings.value
   * or CustomerLifecycleGoal.customer_acquisition_goal_value_settings.value
   * must have been specified. If a manager account is managing your account's
   * conversion tracking, then only the CustomerLifecycleGoal of that manager
   * account is used.
   *
   * @generated from enum value: CUSTOMER_ACQUISITION_VALUE_MISSING = 10;
   */
  CUSTOMER_ACQUISITION_VALUE_MISSING = 10,

  /**
   * In order for a campaign to adopt the customer acquisition goal,
   * CustomerLifecycleGoal.lifecycle_goal_customer_definition_settings.existing_user_lists
   * must include active and accessible userlist with more than 1000 members
   * in the Search/Youtube network. If a manager account is managing your
   * account's conversion tracking, then only the CustomerLifecycleGoal of
   * that manager account is used. Also make sure that the manager account
   * shares audience segments with sub-accounts with continuous audience
   * sharing.
   *
   * @generated from enum value: CUSTOMER_ACQUISITION_MISSING_EXISTING_CUSTOMER_DEFINITION = 11;
   */
  CUSTOMER_ACQUISITION_MISSING_EXISTING_CUSTOMER_DEFINITION = 11,

  /**
   * In order for a campaign to adopt the customer acquisition goal with high
   * lifetime value optimization,
   * CustomerLifecycleGoal.lifecycle_goal_customer_definition_settings.high_lifetime_value_user_lists
   * must include active and accessible userlist with more than 1000 members
   * in the Search/Youtube network. If a manager account is managing your
   * account's conversion tracking, then only the CustomerLifecycleGoal of
   * that manager account is used. Also make sure that the manager account
   * shares audience segments with sub-accounts using continuous audience
   * sharing.
   *
   * @generated from enum value: CUSTOMER_ACQUISITION_MISSING_HIGH_VALUE_CUSTOMER_DEFINITION = 12;
   */
  CUSTOMER_ACQUISITION_MISSING_HIGH_VALUE_CUSTOMER_DEFINITION = 12,
}

/**
 * Describes the enum google.ads.googleads.v16.errors.CampaignLifecycleGoalErrorEnum.CampaignLifecycleGoalError.
 */
export const CampaignLifecycleGoalErrorEnum_CampaignLifecycleGoalErrorSchema: GenEnum<CampaignLifecycleGoalErrorEnum_CampaignLifecycleGoalError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_errors_campaign_lifecycle_goal_error, 0, 0);
