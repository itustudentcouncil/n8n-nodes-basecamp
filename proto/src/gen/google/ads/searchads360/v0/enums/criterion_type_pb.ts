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
// @generated from file google/ads/searchads360/v0/enums/criterion_type.proto (package google.ads.searchads360.v0.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/searchads360/v0/enums/criterion_type.proto.
 */
export const file_google_ads_searchads360_v0_enums_criterion_type: GenFile = /*@__PURE__*/
  fileDesc("CjVnb29nbGUvYWRzL3NlYXJjaGFkczM2MC92MC9lbnVtcy9jcml0ZXJpb25fdHlwZS5wcm90bxIgZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuZW51bXMi4gUKEUNyaXRlcmlvblR5cGVFbnVtIswFCg1Dcml0ZXJpb25UeXBlEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEgsKB0tFWVdPUkQQAhINCglQTEFDRU1FTlQQAxIXChNNT0JJTEVfQVBQX0NBVEVHT1JZEAQSFgoSTU9CSUxFX0FQUExJQ0FUSU9OEAUSCgoGREVWSUNFEAYSDAoITE9DQVRJT04QBxIRCg1MSVNUSU5HX0dST1VQEAgSDwoLQURfU0NIRURVTEUQCRINCglBR0VfUkFOR0UQChIKCgZHRU5ERVIQCxIQCgxJTkNPTUVfUkFOR0UQDBITCg9QQVJFTlRBTF9TVEFUVVMQDRIRCg1ZT1VUVUJFX1ZJREVPEA4SEwoPWU9VVFVCRV9DSEFOTkVMEA8SDQoJVVNFUl9MSVNUEBASDQoJUFJPWElNSVRZEBESCQoFVE9QSUMQEhIRCg1MSVNUSU5HX1NDT1BFEBMSDAoITEFOR1VBR0UQFBIMCghJUF9CTE9DSxAVEhEKDUNPTlRFTlRfTEFCRUwQFhILCgdDQVJSSUVSEBcSEQoNVVNFUl9JTlRFUkVTVBAYEgsKB1dFQlBBR0UQGRIcChhPUEVSQVRJTkdfU1lTVEVNX1ZFUlNJT04QGhIVChFBUFBfUEFZTUVOVF9NT0RFTBAbEhEKDU1PQklMRV9ERVZJQ0UQHBITCg9DVVNUT01fQUZGSU5JVFkQHRIRCg1DVVNUT01fSU5URU5UEB4SEgoOTE9DQVRJT05fR1JPVVAQHxITCg9DVVNUT01fQVVESUVOQ0UQIBIVChFDT01CSU5FRF9BVURJRU5DRRAhEhEKDUtFWVdPUkRfVEhFTUUQIhIMCghBVURJRU5DRRAjEhQKEExPQ0FMX1NFUlZJQ0VfSUQQJRIJCgVCUkFORBAnEg4KCkJSQU5EX0xJU1QQKBIOCgpMSUZFX0VWRU5UEClC+gEKJGNvbS5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5lbnVtc0ISQ3JpdGVyaW9uVHlwZVByb3RvUAFaRWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL3NlYXJjaGFkczM2MC92MC9lbnVtcztlbnVtc6ICB0dBU0EzNjCqAiBHb29nbGUuQWRzLlNlYXJjaEFkczM2MC5WMC5FbnVtc8oCIEdvb2dsZVxBZHNcU2VhcmNoQWRzMzYwXFYwXEVudW1z6gIkR29vZ2xlOjpBZHM6OlNlYXJjaEFkczM2MDo6VjA6OkVudW1zYgZwcm90bzM");

/**
 * The possible types of a criterion.
 *
 * @generated from message google.ads.searchads360.v0.enums.CriterionTypeEnum
 */
export type CriterionTypeEnum = Message<"google.ads.searchads360.v0.enums.CriterionTypeEnum"> & {
};

/**
 * Describes the message google.ads.searchads360.v0.enums.CriterionTypeEnum.
 * Use `create(CriterionTypeEnumSchema)` to create a new message.
 */
export const CriterionTypeEnumSchema: GenMessage<CriterionTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_enums_criterion_type, 0);

/**
 * Enum describing possible criterion types.
 *
 * @generated from enum google.ads.searchads360.v0.enums.CriterionTypeEnum.CriterionType
 */
export enum CriterionTypeEnum_CriterionType {
  /**
   * Not specified.
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
   * Keyword, for example, 'mars cruise'.
   *
   * @generated from enum value: KEYWORD = 2;
   */
  KEYWORD = 2,

  /**
   * Placement, also known as Website, for example, 'www.flowers4sale.com'
   *
   * @generated from enum value: PLACEMENT = 3;
   */
  PLACEMENT = 3,

  /**
   * Mobile application categories to target.
   *
   * @generated from enum value: MOBILE_APP_CATEGORY = 4;
   */
  MOBILE_APP_CATEGORY = 4,

  /**
   * Mobile applications to target.
   *
   * @generated from enum value: MOBILE_APPLICATION = 5;
   */
  MOBILE_APPLICATION = 5,

  /**
   * Devices to target.
   *
   * @generated from enum value: DEVICE = 6;
   */
  DEVICE = 6,

  /**
   * Locations to target.
   *
   * @generated from enum value: LOCATION = 7;
   */
  LOCATION = 7,

  /**
   * Listing groups to target.
   *
   * @generated from enum value: LISTING_GROUP = 8;
   */
  LISTING_GROUP = 8,

  /**
   * Ad Schedule.
   *
   * @generated from enum value: AD_SCHEDULE = 9;
   */
  AD_SCHEDULE = 9,

  /**
   * Age range.
   *
   * @generated from enum value: AGE_RANGE = 10;
   */
  AGE_RANGE = 10,

  /**
   * Gender.
   *
   * @generated from enum value: GENDER = 11;
   */
  GENDER = 11,

  /**
   * Income Range.
   *
   * @generated from enum value: INCOME_RANGE = 12;
   */
  INCOME_RANGE = 12,

  /**
   * Parental status.
   *
   * @generated from enum value: PARENTAL_STATUS = 13;
   */
  PARENTAL_STATUS = 13,

  /**
   * YouTube Video.
   *
   * @generated from enum value: YOUTUBE_VIDEO = 14;
   */
  YOUTUBE_VIDEO = 14,

  /**
   * YouTube Channel.
   *
   * @generated from enum value: YOUTUBE_CHANNEL = 15;
   */
  YOUTUBE_CHANNEL = 15,

  /**
   * User list.
   *
   * @generated from enum value: USER_LIST = 16;
   */
  USER_LIST = 16,

  /**
   * Proximity.
   *
   * @generated from enum value: PROXIMITY = 17;
   */
  PROXIMITY = 17,

  /**
   * A topic target on the display network (for example, "Pets & Animals").
   *
   * @generated from enum value: TOPIC = 18;
   */
  TOPIC = 18,

  /**
   * Listing scope to target.
   *
   * @generated from enum value: LISTING_SCOPE = 19;
   */
  LISTING_SCOPE = 19,

  /**
   * Language.
   *
   * @generated from enum value: LANGUAGE = 20;
   */
  LANGUAGE = 20,

  /**
   * IpBlock.
   *
   * @generated from enum value: IP_BLOCK = 21;
   */
  IP_BLOCK = 21,

  /**
   * Content Label for category exclusion.
   *
   * @generated from enum value: CONTENT_LABEL = 22;
   */
  CONTENT_LABEL = 22,

  /**
   * Carrier.
   *
   * @generated from enum value: CARRIER = 23;
   */
  CARRIER = 23,

  /**
   * A category the user is interested in.
   *
   * @generated from enum value: USER_INTEREST = 24;
   */
  USER_INTEREST = 24,

  /**
   * Webpage criterion for dynamic search ads.
   *
   * @generated from enum value: WEBPAGE = 25;
   */
  WEBPAGE = 25,

  /**
   * Operating system version.
   *
   * @generated from enum value: OPERATING_SYSTEM_VERSION = 26;
   */
  OPERATING_SYSTEM_VERSION = 26,

  /**
   * App payment model.
   *
   * @generated from enum value: APP_PAYMENT_MODEL = 27;
   */
  APP_PAYMENT_MODEL = 27,

  /**
   * Mobile device.
   *
   * @generated from enum value: MOBILE_DEVICE = 28;
   */
  MOBILE_DEVICE = 28,

  /**
   * Custom affinity.
   *
   * @generated from enum value: CUSTOM_AFFINITY = 29;
   */
  CUSTOM_AFFINITY = 29,

  /**
   * Custom intent.
   *
   * @generated from enum value: CUSTOM_INTENT = 30;
   */
  CUSTOM_INTENT = 30,

  /**
   * Location group.
   *
   * @generated from enum value: LOCATION_GROUP = 31;
   */
  LOCATION_GROUP = 31,

  /**
   * Custom audience
   *
   * @generated from enum value: CUSTOM_AUDIENCE = 32;
   */
  CUSTOM_AUDIENCE = 32,

  /**
   * Combined audience
   *
   * @generated from enum value: COMBINED_AUDIENCE = 33;
   */
  COMBINED_AUDIENCE = 33,

  /**
   * Smart Campaign keyword theme
   *
   * @generated from enum value: KEYWORD_THEME = 34;
   */
  KEYWORD_THEME = 34,

  /**
   * Audience
   *
   * @generated from enum value: AUDIENCE = 35;
   */
  AUDIENCE = 35,

  /**
   * Local Services Ads Service ID.
   *
   * @generated from enum value: LOCAL_SERVICE_ID = 37;
   */
  LOCAL_SERVICE_ID = 37,

  /**
   * Brand
   *
   * @generated from enum value: BRAND = 39;
   */
  BRAND = 39,

  /**
   * Brand List
   *
   * @generated from enum value: BRAND_LIST = 40;
   */
  BRAND_LIST = 40,

  /**
   * Life Event
   *
   * @generated from enum value: LIFE_EVENT = 41;
   */
  LIFE_EVENT = 41,
}

/**
 * Describes the enum google.ads.searchads360.v0.enums.CriterionTypeEnum.CriterionType.
 */
export const CriterionTypeEnum_CriterionTypeSchema: GenEnum<CriterionTypeEnum_CriterionType> = /*@__PURE__*/
  enumDesc(file_google_ads_searchads360_v0_enums_criterion_type, 0, 0);
