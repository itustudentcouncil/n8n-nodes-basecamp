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
// @generated from file google/ads/googleads/v17/enums/ad_destination_type.proto (package google.ads.googleads.v17.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/enums/ad_destination_type.proto.
 */
export const file_google_ads_googleads_v17_enums_ad_destination_type: GenFile = /*@__PURE__*/
  fileDesc("Cjhnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZW51bXMvYWRfZGVzdGluYXRpb25fdHlwZS5wcm90bxIeZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LmVudW1zIpACChVBZERlc3RpbmF0aW9uVHlwZUVudW0i9gEKEUFkRGVzdGluYXRpb25UeXBlEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEhIKDk5PVF9BUFBMSUNBQkxFEAISCwoHV0VCU0lURRADEhEKDUFQUF9ERUVQX0xJTksQBBINCglBUFBfU1RPUkUQBRIOCgpQSE9ORV9DQUxMEAYSEgoOTUFQX0RJUkVDVElPTlMQBxIUChBMT0NBVElPTl9MSVNUSU5HEAgSCwoHTUVTU0FHRRAJEg0KCUxFQURfRk9STRAKEgsKB1lPVVRVQkUQCxIdChlVTk1PREVMRURfRk9SX0NPTlZFUlNJT05TEAxC8AEKImNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXNCFkFkRGVzdGluYXRpb25UeXBlUHJvdG9QAVpDZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNy9lbnVtcztlbnVtc6ICA0dBQaoCHkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5FbnVtc8oCHkdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxN1xFbnVtc+oCIkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6RW51bXNiBnByb3RvMw");

/**
 * Container for enumeration of Google Ads destination types.
 *
 * @generated from message google.ads.googleads.v17.enums.AdDestinationTypeEnum
 */
export type AdDestinationTypeEnum = Message<"google.ads.googleads.v17.enums.AdDestinationTypeEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.enums.AdDestinationTypeEnum.
 * Use `create(AdDestinationTypeEnumSchema)` to create a new message.
 */
export const AdDestinationTypeEnumSchema: GenMessage<AdDestinationTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_enums_ad_destination_type, 0);

/**
 * Enumerates Google Ads destination types
 *
 * @generated from enum google.ads.googleads.v17.enums.AdDestinationTypeEnum.AdDestinationType
 */
export enum AdDestinationTypeEnum_AdDestinationType {
  /**
   * Not specified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The value is unknown in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * Ads that don't intend to drive users off from ads to other destinations
   *
   * @generated from enum value: NOT_APPLICABLE = 2;
   */
  NOT_APPLICABLE = 2,

  /**
   * Website
   *
   * @generated from enum value: WEBSITE = 3;
   */
  WEBSITE = 3,

  /**
   * App Deep Link
   *
   * @generated from enum value: APP_DEEP_LINK = 4;
   */
  APP_DEEP_LINK = 4,

  /**
   * iOS App Store or Play Store
   *
   * @generated from enum value: APP_STORE = 5;
   */
  APP_STORE = 5,

  /**
   * Call Dialer
   *
   * @generated from enum value: PHONE_CALL = 6;
   */
  PHONE_CALL = 6,

  /**
   * Map App
   *
   * @generated from enum value: MAP_DIRECTIONS = 7;
   */
  MAP_DIRECTIONS = 7,

  /**
   * Location Dedicated Page
   *
   * @generated from enum value: LOCATION_LISTING = 8;
   */
  LOCATION_LISTING = 8,

  /**
   * Text Message
   *
   * @generated from enum value: MESSAGE = 9;
   */
  MESSAGE = 9,

  /**
   * Lead Generation Form
   *
   * @generated from enum value: LEAD_FORM = 10;
   */
  LEAD_FORM = 10,

  /**
   * YouTube
   *
   * @generated from enum value: YOUTUBE = 11;
   */
  YOUTUBE = 11,

  /**
   * Ad Destination for Conversions with keys unknown
   *
   * @generated from enum value: UNMODELED_FOR_CONVERSIONS = 12;
   */
  UNMODELED_FOR_CONVERSIONS = 12,
}

/**
 * Describes the enum google.ads.googleads.v17.enums.AdDestinationTypeEnum.AdDestinationType.
 */
export const AdDestinationTypeEnum_AdDestinationTypeSchema: GenEnum<AdDestinationTypeEnum_AdDestinationType> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_enums_ad_destination_type, 0, 0);
