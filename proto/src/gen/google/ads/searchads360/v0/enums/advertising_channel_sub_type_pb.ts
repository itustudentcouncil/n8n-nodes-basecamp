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
// @generated from file google/ads/searchads360/v0/enums/advertising_channel_sub_type.proto (package google.ads.searchads360.v0.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/searchads360/v0/enums/advertising_channel_sub_type.proto.
 */
export const file_google_ads_searchads360_v0_enums_advertising_channel_sub_type: GenFile = /*@__PURE__*/
  fileDesc("CkNnb29nbGUvYWRzL3NlYXJjaGFkczM2MC92MC9lbnVtcy9hZHZlcnRpc2luZ19jaGFubmVsX3N1Yl90eXBlLnByb3RvEiBnb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5lbnVtcyLUBAodQWR2ZXJ0aXNpbmdDaGFubmVsU3ViVHlwZUVudW0isgQKGUFkdmVydGlzaW5nQ2hhbm5lbFN1YlR5cGUSDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESFQoRU0VBUkNIX01PQklMRV9BUFAQAhIWChJESVNQTEFZX01PQklMRV9BUFAQAxISCg5TRUFSQ0hfRVhQUkVTUxAEEhMKD0RJU1BMQVlfRVhQUkVTUxAFEhYKElNIT1BQSU5HX1NNQVJUX0FEUxAGEhQKEERJU1BMQVlfR01BSUxfQUQQBxIaChZESVNQTEFZX1NNQVJUX0NBTVBBSUdOEAgSEwoPVklERU9fT1VUU1RSRUFNEAkSEAoMVklERU9fQUNUSU9OEAoSFwoTVklERU9fTk9OX1NLSVBQQUJMRRALEhAKDEFQUF9DQU1QQUlHThAMEh8KG0FQUF9DQU1QQUlHTl9GT1JfRU5HQUdFTUVOVBANEhIKDkxPQ0FMX0NBTVBBSUdOEA4SIwofU0hPUFBJTkdfQ09NUEFSSVNPTl9MSVNUSU5HX0FEUxAPEhIKDlNNQVJUX0NBTVBBSUdOEBASEgoOVklERU9fU0VRVUVOQ0UQERIlCiFBUFBfQ0FNUEFJR05fRk9SX1BSRV9SRUdJU1RSQVRJT04QEhIgChxWSURFT19SRUFDSF9UQVJHRVRfRlJFUVVFTkNZEBMSFQoRVFJBVkVMX0FDVElWSVRJRVMQFBIhCh1TT0NJQUxfRkFDRUJPT0tfVFJBQ0tJTkdfT05MWRAVQoYCCiRjb20uZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuZW51bXNCHkFkdmVydGlzaW5nQ2hhbm5lbFN1YlR5cGVQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9zZWFyY2hhZHMzNjAvdjAvZW51bXM7ZW51bXOiAgdHQVNBMzYwqgIgR29vZ2xlLkFkcy5TZWFyY2hBZHMzNjAuVjAuRW51bXPKAiBHb29nbGVcQWRzXFNlYXJjaEFkczM2MFxWMFxFbnVtc+oCJEdvb2dsZTo6QWRzOjpTZWFyY2hBZHMzNjA6OlYwOjpFbnVtc2IGcHJvdG8z");

/**
 * An immutable specialization of an Advertising Channel.
 *
 * @generated from message google.ads.searchads360.v0.enums.AdvertisingChannelSubTypeEnum
 */
export type AdvertisingChannelSubTypeEnum = Message<"google.ads.searchads360.v0.enums.AdvertisingChannelSubTypeEnum"> & {
};

/**
 * Describes the message google.ads.searchads360.v0.enums.AdvertisingChannelSubTypeEnum.
 * Use `create(AdvertisingChannelSubTypeEnumSchema)` to create a new message.
 */
export const AdvertisingChannelSubTypeEnumSchema: GenMessage<AdvertisingChannelSubTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_enums_advertising_channel_sub_type, 0);

/**
 * Enum describing the different channel subtypes.
 *
 * @generated from enum google.ads.searchads360.v0.enums.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType
 */
export enum AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType {
  /**
   * Not specified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Used as a return value only. Represents value unknown in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * Mobile app campaigns for Search.
   *
   * @generated from enum value: SEARCH_MOBILE_APP = 2;
   */
  SEARCH_MOBILE_APP = 2,

  /**
   * Mobile app campaigns for Display.
   *
   * @generated from enum value: DISPLAY_MOBILE_APP = 3;
   */
  DISPLAY_MOBILE_APP = 3,

  /**
   * AdWords express campaigns for search.
   *
   * @generated from enum value: SEARCH_EXPRESS = 4;
   */
  SEARCH_EXPRESS = 4,

  /**
   * AdWords Express campaigns for display.
   *
   * @generated from enum value: DISPLAY_EXPRESS = 5;
   */
  DISPLAY_EXPRESS = 5,

  /**
   * Smart Shopping campaigns.
   *
   * @generated from enum value: SHOPPING_SMART_ADS = 6;
   */
  SHOPPING_SMART_ADS = 6,

  /**
   * Gmail Ad campaigns.
   *
   * @generated from enum value: DISPLAY_GMAIL_AD = 7;
   */
  DISPLAY_GMAIL_AD = 7,

  /**
   * Smart display campaigns. New campaigns of this sub type cannot be
   * created.
   *
   * @generated from enum value: DISPLAY_SMART_CAMPAIGN = 8;
   */
  DISPLAY_SMART_CAMPAIGN = 8,

  /**
   * Video Outstream campaigns.
   *
   * @generated from enum value: VIDEO_OUTSTREAM = 9;
   */
  VIDEO_OUTSTREAM = 9,

  /**
   * Video TrueView for Action campaigns.
   *
   * @generated from enum value: VIDEO_ACTION = 10;
   */
  VIDEO_ACTION = 10,

  /**
   * Video campaigns with non-skippable video ads.
   *
   * @generated from enum value: VIDEO_NON_SKIPPABLE = 11;
   */
  VIDEO_NON_SKIPPABLE = 11,

  /**
   * App Campaign that lets you easily promote your Android or iOS app
   * across Google's top properties including Search, Play, YouTube, and the
   * Google Display Network.
   *
   * @generated from enum value: APP_CAMPAIGN = 12;
   */
  APP_CAMPAIGN = 12,

  /**
   * App Campaign for engagement, focused on driving re-engagement with the
   * app across several of Google's top properties including Search, YouTube,
   * and the Google Display Network.
   *
   * @generated from enum value: APP_CAMPAIGN_FOR_ENGAGEMENT = 13;
   */
  APP_CAMPAIGN_FOR_ENGAGEMENT = 13,

  /**
   * Campaigns specialized for local advertising.
   *
   * @generated from enum value: LOCAL_CAMPAIGN = 14;
   */
  LOCAL_CAMPAIGN = 14,

  /**
   * Shopping Comparison Listing campaigns.
   *
   * @generated from enum value: SHOPPING_COMPARISON_LISTING_ADS = 15;
   */
  SHOPPING_COMPARISON_LISTING_ADS = 15,

  /**
   * Standard Smart campaigns.
   *
   * @generated from enum value: SMART_CAMPAIGN = 16;
   */
  SMART_CAMPAIGN = 16,

  /**
   * Video campaigns with sequence video ads.
   *
   * @generated from enum value: VIDEO_SEQUENCE = 17;
   */
  VIDEO_SEQUENCE = 17,

  /**
   * App Campaign for pre registration, specialized for advertising mobile
   * app pre-registration, that targets multiple advertising channels across
   * Google Play, YouTube and Display Network.
   *
   * @generated from enum value: APP_CAMPAIGN_FOR_PRE_REGISTRATION = 18;
   */
  APP_CAMPAIGN_FOR_PRE_REGISTRATION = 18,

  /**
   * Video reach campaign with Target Frequency bidding strategy.
   *
   * @generated from enum value: VIDEO_REACH_TARGET_FREQUENCY = 19;
   */
  VIDEO_REACH_TARGET_FREQUENCY = 19,

  /**
   * Travel Activities campaigns.
   *
   * @generated from enum value: TRAVEL_ACTIVITIES = 20;
   */
  TRAVEL_ACTIVITIES = 20,

  /**
   * Facebook tracking only social campaigns.
   *
   * @generated from enum value: SOCIAL_FACEBOOK_TRACKING_ONLY = 21;
   */
  SOCIAL_FACEBOOK_TRACKING_ONLY = 21,
}

/**
 * Describes the enum google.ads.searchads360.v0.enums.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType.
 */
export const AdvertisingChannelSubTypeEnum_AdvertisingChannelSubTypeSchema: GenEnum<AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType> = /*@__PURE__*/
  enumDesc(file_google_ads_searchads360_v0_enums_advertising_channel_sub_type, 0, 0);
