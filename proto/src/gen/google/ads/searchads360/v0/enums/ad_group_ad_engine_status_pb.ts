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
// @generated from file google/ads/searchads360/v0/enums/ad_group_ad_engine_status.proto (package google.ads.searchads360.v0.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/searchads360/v0/enums/ad_group_ad_engine_status.proto.
 */
export const file_google_ads_searchads360_v0_enums_ad_group_ad_engine_status: GenFile = /*@__PURE__*/
  fileDesc("CkBnb29nbGUvYWRzL3NlYXJjaGFkczM2MC92MC9lbnVtcy9hZF9ncm91cF9hZF9lbmdpbmVfc3RhdHVzLnByb3RvEiBnb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5lbnVtcyLmBAoZQWRHcm91cEFkRW5naW5lU3RhdHVzRW51bSLIBAoVQWRHcm91cEFkRW5naW5lU3RhdHVzEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEhwKFEFEX0dST1VQX0FEX0VMSUdJQkxFEAIaAggBEioKJkFEX0dST1VQX0FEX0lOQVBQUk9QUklBVEVfRk9SX0NBTVBBSUdOEAMSJwojQURfR1JPVVBfQURfTU9CSUxFX1VSTF9VTkRFUl9SRVZJRVcQBBIhCh1BRF9HUk9VUF9BRF9QQVJUSUFMTFlfSU5WQUxJRBAFEh8KG0FEX0dST1VQX0FEX1RPX0JFX0FDVElWQVRFRBAGEhwKGEFEX0dST1VQX0FEX05PVF9SRVZJRVdFRBAHEhsKE0FEX0dST1VQX0FEX09OX0hPTEQQCBoCCAESFgoSQURfR1JPVVBfQURfUEFVU0VEEAkSFwoTQURfR1JPVVBfQURfUkVNT1ZFRBAKEh4KGkFEX0dST1VQX0FEX1BFTkRJTkdfUkVWSUVXEAsSHAoYQURfR1JPVVBfQURfVU5ERVJfUkVWSUVXEAwSGAoUQURfR1JPVVBfQURfQVBQUk9WRUQQDRIbChdBRF9HUk9VUF9BRF9ESVNBUFBST1ZFRBAOEhcKE0FEX0dST1VQX0FEX1NFUlZJTkcQDxIeChpBRF9HUk9VUF9BRF9BQ0NPVU5UX1BBVVNFRBAQEh8KG0FEX0dST1VQX0FEX0NBTVBBSUdOX1BBVVNFRBAREh8KG0FEX0dST1VQX0FEX0FEX0dST1VQX1BBVVNFRBASQoICCiRjb20uZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuZW51bXNCGkFkR3JvdXBBZEVuZ2luZVN0YXR1c1Byb3RvUAFaRWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL3NlYXJjaGFkczM2MC92MC9lbnVtcztlbnVtc6ICB0dBU0EzNjCqAiBHb29nbGUuQWRzLlNlYXJjaEFkczM2MC5WMC5FbnVtc8oCIEdvb2dsZVxBZHNcU2VhcmNoQWRzMzYwXFYwXEVudW1z6gIkR29vZ2xlOjpBZHM6OlNlYXJjaEFkczM2MDo6VjA6OkVudW1zYgZwcm90bzM");

/**
 * Container for enum describing possible AdGroupAd engine statuses.
 *
 * @generated from message google.ads.searchads360.v0.enums.AdGroupAdEngineStatusEnum
 */
export type AdGroupAdEngineStatusEnum = Message<"google.ads.searchads360.v0.enums.AdGroupAdEngineStatusEnum"> & {
};

/**
 * Describes the message google.ads.searchads360.v0.enums.AdGroupAdEngineStatusEnum.
 * Use `create(AdGroupAdEngineStatusEnumSchema)` to create a new message.
 */
export const AdGroupAdEngineStatusEnumSchema: GenMessage<AdGroupAdEngineStatusEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_enums_ad_group_ad_engine_status, 0);

/**
 * Enumerates AdGroupAd engine statuses.
 *
 * @generated from enum google.ads.searchads360.v0.enums.AdGroupAdEngineStatusEnum.AdGroupAdEngineStatus
 */
export enum AdGroupAdEngineStatusEnum_AdGroupAdEngineStatus {
  /**
   * No value has been specified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Used for return value only. Represents value unknown in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * Deprecated. Do not use.
   *
   * @generated from enum value: AD_GROUP_AD_ELIGIBLE = 2 [deprecated = true];
   * @deprecated
   */
  AD_GROUP_AD_ELIGIBLE = 2,

  /**
   * Baidu: Creative was not approved.
   *
   * @generated from enum value: AD_GROUP_AD_INAPPROPRIATE_FOR_CAMPAIGN = 3;
   */
  AD_GROUP_AD_INAPPROPRIATE_FOR_CAMPAIGN = 3,

  /**
   * Baidu: Mobile URL in process to be reviewed.
   *
   * @generated from enum value: AD_GROUP_AD_MOBILE_URL_UNDER_REVIEW = 4;
   */
  AD_GROUP_AD_MOBILE_URL_UNDER_REVIEW = 4,

  /**
   * Baidu: Creative is invalid on mobile device but valid on desktop.
   *
   * @generated from enum value: AD_GROUP_AD_PARTIALLY_INVALID = 5;
   */
  AD_GROUP_AD_PARTIALLY_INVALID = 5,

  /**
   * Baidu: Creative is ready for activation.
   *
   * @generated from enum value: AD_GROUP_AD_TO_BE_ACTIVATED = 6;
   */
  AD_GROUP_AD_TO_BE_ACTIVATED = 6,

  /**
   * Baidu: Creative not reviewed.
   *
   * @generated from enum value: AD_GROUP_AD_NOT_REVIEWED = 7;
   */
  AD_GROUP_AD_NOT_REVIEWED = 7,

  /**
   * Deprecated. Do not use. Previously used by Gemini
   *
   * @generated from enum value: AD_GROUP_AD_ON_HOLD = 8 [deprecated = true];
   * @deprecated
   */
  AD_GROUP_AD_ON_HOLD = 8,

  /**
   * Creative has been paused.
   *
   * @generated from enum value: AD_GROUP_AD_PAUSED = 9;
   */
  AD_GROUP_AD_PAUSED = 9,

  /**
   * Creative has been removed.
   *
   * @generated from enum value: AD_GROUP_AD_REMOVED = 10;
   */
  AD_GROUP_AD_REMOVED = 10,

  /**
   * Creative is pending review.
   *
   * @generated from enum value: AD_GROUP_AD_PENDING_REVIEW = 11;
   */
  AD_GROUP_AD_PENDING_REVIEW = 11,

  /**
   * Creative is under review.
   *
   * @generated from enum value: AD_GROUP_AD_UNDER_REVIEW = 12;
   */
  AD_GROUP_AD_UNDER_REVIEW = 12,

  /**
   * Creative has been approved.
   *
   * @generated from enum value: AD_GROUP_AD_APPROVED = 13;
   */
  AD_GROUP_AD_APPROVED = 13,

  /**
   * Creative has been disapproved.
   *
   * @generated from enum value: AD_GROUP_AD_DISAPPROVED = 14;
   */
  AD_GROUP_AD_DISAPPROVED = 14,

  /**
   * Creative is serving.
   *
   * @generated from enum value: AD_GROUP_AD_SERVING = 15;
   */
  AD_GROUP_AD_SERVING = 15,

  /**
   * Creative has been paused because the account is paused.
   *
   * @generated from enum value: AD_GROUP_AD_ACCOUNT_PAUSED = 16;
   */
  AD_GROUP_AD_ACCOUNT_PAUSED = 16,

  /**
   * Creative has been paused because the campaign is paused.
   *
   * @generated from enum value: AD_GROUP_AD_CAMPAIGN_PAUSED = 17;
   */
  AD_GROUP_AD_CAMPAIGN_PAUSED = 17,

  /**
   * Creative has been paused because the ad group is paused.
   *
   * @generated from enum value: AD_GROUP_AD_AD_GROUP_PAUSED = 18;
   */
  AD_GROUP_AD_AD_GROUP_PAUSED = 18,
}

/**
 * Describes the enum google.ads.searchads360.v0.enums.AdGroupAdEngineStatusEnum.AdGroupAdEngineStatus.
 */
export const AdGroupAdEngineStatusEnum_AdGroupAdEngineStatusSchema: GenEnum<AdGroupAdEngineStatusEnum_AdGroupAdEngineStatus> = /*@__PURE__*/
  enumDesc(file_google_ads_searchads360_v0_enums_ad_group_ad_engine_status, 0, 0);
