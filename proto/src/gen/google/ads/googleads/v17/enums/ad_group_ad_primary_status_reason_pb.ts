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
// @generated from file google/ads/googleads/v17/enums/ad_group_ad_primary_status_reason.proto (package google.ads.googleads.v17.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/enums/ad_group_ad_primary_status_reason.proto.
 */
export const file_google_ads_googleads_v17_enums_ad_group_ad_primary_status_reason: GenFile = /*@__PURE__*/
  fileDesc("CkZnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZW51bXMvYWRfZ3JvdXBfYWRfcHJpbWFyeV9zdGF0dXNfcmVhc29uLnByb3RvEh5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXMi6gMKIEFkR3JvdXBBZFByaW1hcnlTdGF0dXNSZWFzb25FbnVtIsUDChxBZEdyb3VwQWRQcmltYXJ5U3RhdHVzUmVhc29uEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEhQKEENBTVBBSUdOX1JFTU9WRUQQAhITCg9DQU1QQUlHTl9QQVVTRUQQAxIUChBDQU1QQUlHTl9QRU5ESU5HEAQSEgoOQ0FNUEFJR05fRU5ERUQQBRITCg9BRF9HUk9VUF9QQVVTRUQQBhIUChBBRF9HUk9VUF9SRU1PVkVEEAcSFgoSQURfR1JPVVBfQURfUEFVU0VEEAgSFwoTQURfR1JPVVBfQURfUkVNT1ZFRBAJEhsKF0FEX0dST1VQX0FEX0RJU0FQUFJPVkVEEAoSHAoYQURfR1JPVVBfQURfVU5ERVJfUkVWSUVXEAsSHAoYQURfR1JPVVBfQURfUE9PUl9RVUFMSVRZEAwSFgoSQURfR1JPVVBfQURfTk9fQURTEA0SIAocQURfR1JPVVBfQURfQVBQUk9WRURfTEFCRUxFRBAOEiUKIUFEX0dST1VQX0FEX0FSRUFfT0ZfSU5URVJFU1RfT05MWRAPEhwKGEFEX0dST1VQX0FEX1VOREVSX0FQUEVBTBAQQvsBCiJjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LmVudW1zQiFBZEdyb3VwQWRQcmltYXJ5U3RhdHVzUmVhc29uUHJvdG9QAVpDZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNy9lbnVtcztlbnVtc6ICA0dBQaoCHkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5FbnVtc8oCHkdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxN1xFbnVtc+oCIkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6RW51bXNiBnByb3RvMw");

/**
 * AdGroupAd Primary Status Reason. Provides insight into why an ad group ad is
 * not serving or not serving optimally. These reasons are aggregated to
 * determine an overall AdGroupAdPrimaryStatus.
 *
 * @generated from message google.ads.googleads.v17.enums.AdGroupAdPrimaryStatusReasonEnum
 */
export type AdGroupAdPrimaryStatusReasonEnum = Message<"google.ads.googleads.v17.enums.AdGroupAdPrimaryStatusReasonEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.enums.AdGroupAdPrimaryStatusReasonEnum.
 * Use `create(AdGroupAdPrimaryStatusReasonEnumSchema)` to create a new message.
 */
export const AdGroupAdPrimaryStatusReasonEnumSchema: GenMessage<AdGroupAdPrimaryStatusReasonEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_enums_ad_group_ad_primary_status_reason, 0);

/**
 * Possible ad group ad status reasons.
 *
 * @generated from enum google.ads.googleads.v17.enums.AdGroupAdPrimaryStatusReasonEnum.AdGroupAdPrimaryStatusReason
 */
export enum AdGroupAdPrimaryStatusReasonEnum_AdGroupAdPrimaryStatusReason {
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
   * The user-specified campaign status is removed. Contributes to
   * AdGroupAdPrimaryStatus.REMOVED.
   *
   * @generated from enum value: CAMPAIGN_REMOVED = 2;
   */
  CAMPAIGN_REMOVED = 2,

  /**
   * The user-specified campaign status is paused. Contributes to
   * AdGroupAdPrimaryStatus.PAUSED.
   *
   * @generated from enum value: CAMPAIGN_PAUSED = 3;
   */
  CAMPAIGN_PAUSED = 3,

  /**
   * The user-specified time for this campaign to start is in the future.
   * Contributes to AdGroupAdPrimaryStatus.PENDING.
   *
   * @generated from enum value: CAMPAIGN_PENDING = 4;
   */
  CAMPAIGN_PENDING = 4,

  /**
   * The user-specified time for this campaign to end has passed. Contributes
   * to AdGroupAdPrimaryStatus.ENDED.
   *
   * @generated from enum value: CAMPAIGN_ENDED = 5;
   */
  CAMPAIGN_ENDED = 5,

  /**
   * The user-specified ad group status is paused. Contributes to
   * AdGroupAdPrimaryStatus.PAUSED.
   *
   * @generated from enum value: AD_GROUP_PAUSED = 6;
   */
  AD_GROUP_PAUSED = 6,

  /**
   * The user-specified ad group status is removed. Contributes to
   * AdGroupAdPrimaryStatus.REMOVED.
   *
   * @generated from enum value: AD_GROUP_REMOVED = 7;
   */
  AD_GROUP_REMOVED = 7,

  /**
   * The user-specified ad status is paused. Contributes to
   * AdGroupAdPrimaryStatus.PAUSED.
   *
   * @generated from enum value: AD_GROUP_AD_PAUSED = 8;
   */
  AD_GROUP_AD_PAUSED = 8,

  /**
   * The user-specified ad status is removed. Contributes to
   * AdGroupAdPrimaryStatus.REMOVED.
   *
   * @generated from enum value: AD_GROUP_AD_REMOVED = 9;
   */
  AD_GROUP_AD_REMOVED = 9,

  /**
   * The ad is disapproved. Contributes to
   * AdGroupAdPrimaryStatus.NOT_ELIGIBLE.
   *
   * @generated from enum value: AD_GROUP_AD_DISAPPROVED = 10;
   */
  AD_GROUP_AD_DISAPPROVED = 10,

  /**
   * The ad is under review. Contributes to AdGroupAdPrimaryStatus.PENDING.
   *
   * @generated from enum value: AD_GROUP_AD_UNDER_REVIEW = 11;
   */
  AD_GROUP_AD_UNDER_REVIEW = 11,

  /**
   * The ad is poor quality. This is determined by the serving stack that
   * served the Ad. Contributes to AdGroupAdPrimaryStatus.LIMITED.
   *
   * @generated from enum value: AD_GROUP_AD_POOR_QUALITY = 12;
   */
  AD_GROUP_AD_POOR_QUALITY = 12,

  /**
   * No eligible ads instances could be generated. Contributes to
   * AdGroupAdPrimaryStatus.PENDING.
   *
   * @generated from enum value: AD_GROUP_AD_NO_ADS = 13;
   */
  AD_GROUP_AD_NO_ADS = 13,

  /**
   * The ad is internally labeled with a limiting label. Contributes to
   * AdGroupAdPrimaryStatus.LIMITED.
   *
   * @generated from enum value: AD_GROUP_AD_APPROVED_LABELED = 14;
   */
  AD_GROUP_AD_APPROVED_LABELED = 14,

  /**
   * The ad is only serving in the user-specified area of interest.
   * Contributes to AdGroupAdPrimaryStatus.LIMITED.
   *
   * @generated from enum value: AD_GROUP_AD_AREA_OF_INTEREST_ONLY = 15;
   */
  AD_GROUP_AD_AREA_OF_INTEREST_ONLY = 15,

  /**
   * The ad is part of an ongoing appeal. This reason does not impact
   * AdGroupAdPrimaryStatus.
   *
   * @generated from enum value: AD_GROUP_AD_UNDER_APPEAL = 16;
   */
  AD_GROUP_AD_UNDER_APPEAL = 16,
}

/**
 * Describes the enum google.ads.googleads.v17.enums.AdGroupAdPrimaryStatusReasonEnum.AdGroupAdPrimaryStatusReason.
 */
export const AdGroupAdPrimaryStatusReasonEnum_AdGroupAdPrimaryStatusReasonSchema: GenEnum<AdGroupAdPrimaryStatusReasonEnum_AdGroupAdPrimaryStatusReason> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_enums_ad_group_ad_primary_status_reason, 0, 0);
