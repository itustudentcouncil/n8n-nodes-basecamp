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
// @generated from file google/ads/googleads/v17/enums/flight_placeholder_field.proto (package google.ads.googleads.v17.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/enums/flight_placeholder_field.proto.
 */
export const file_google_ads_googleads_v17_enums_flight_placeholder_field: GenFile = /*@__PURE__*/
  fileDesc("Cj1nb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZW51bXMvZmxpZ2h0X3BsYWNlaG9sZGVyX2ZpZWxkLnByb3RvEh5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXMisgMKGkZsaWdodFBsYWNlaG9sZGVyRmllbGRFbnVtIpMDChZGbGlnaHRQbGFjZWhvbGRlckZpZWxkEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEhIKDkRFU1RJTkFUSU9OX0lEEAISDQoJT1JJR0lOX0lEEAMSFgoSRkxJR0hUX0RFU0NSSVBUSU9OEAQSDwoLT1JJR0lOX05BTUUQBRIUChBERVNUSU5BVElPTl9OQU1FEAYSEAoMRkxJR0hUX1BSSUNFEAcSEwoPRk9STUFUVEVEX1BSSUNFEAgSFQoRRkxJR0hUX1NBTEVfUFJJQ0UQCRIYChRGT1JNQVRURURfU0FMRV9QUklDRRAKEg0KCUlNQUdFX1VSTBALEg4KCkZJTkFMX1VSTFMQDBIVChFGSU5BTF9NT0JJTEVfVVJMUxANEhAKDFRSQUNLSU5HX1VSTBAOEhQKEEFORFJPSURfQVBQX0xJTksQDxIbChdTSU1JTEFSX0RFU1RJTkFUSU9OX0lEUxAQEhAKDElPU19BUFBfTElOSxAREhQKEElPU19BUFBfU1RPUkVfSUQQEkL2AQoiY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lbnVtc0IcRmxpZ2h0c1BsYWNlaG9sZGVyRmllbGRQcm90b1ABWkNnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE3L2VudW1zO2VudW1zogIDR0FBqgIeR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE3LkVudW1zygIeR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE3XEVudW1z6gIiR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE3OjpFbnVtc2IGcHJvdG8z");

/**
 * Values for Flight placeholder fields.
 * For more information about dynamic remarketing feeds, see
 * https://support.google.com/google-ads/answer/6053288.
 *
 * @generated from message google.ads.googleads.v17.enums.FlightPlaceholderFieldEnum
 */
export type FlightPlaceholderFieldEnum = Message<"google.ads.googleads.v17.enums.FlightPlaceholderFieldEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.enums.FlightPlaceholderFieldEnum.
 * Use `create(FlightPlaceholderFieldEnumSchema)` to create a new message.
 */
export const FlightPlaceholderFieldEnumSchema: GenMessage<FlightPlaceholderFieldEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_enums_flight_placeholder_field, 0);

/**
 * Possible values for Flight placeholder fields.
 *
 * @generated from enum google.ads.googleads.v17.enums.FlightPlaceholderFieldEnum.FlightPlaceholderField
 */
export enum FlightPlaceholderFieldEnum_FlightPlaceholderField {
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
   * Data Type: STRING. Required. Destination id. Example: PAR, LON.
   * For feed items that only have destination id, destination id must be a
   * unique key. For feed items that have both destination id and origin id,
   * then the combination must be a unique key.
   *
   * @generated from enum value: DESTINATION_ID = 2;
   */
  DESTINATION_ID = 2,

  /**
   * Data Type: STRING. Origin id. Example: PAR, LON.
   * Optional. Combination of destination id and origin id must be unique per
   * offer.
   *
   * @generated from enum value: ORIGIN_ID = 3;
   */
  ORIGIN_ID = 3,

  /**
   * Data Type: STRING. Required. Main headline with product name to be shown
   * in dynamic ad.
   *
   * @generated from enum value: FLIGHT_DESCRIPTION = 4;
   */
  FLIGHT_DESCRIPTION = 4,

  /**
   * Data Type: STRING. Shorter names are recommended.
   *
   * @generated from enum value: ORIGIN_NAME = 5;
   */
  ORIGIN_NAME = 5,

  /**
   * Data Type: STRING. Shorter names are recommended.
   *
   * @generated from enum value: DESTINATION_NAME = 6;
   */
  DESTINATION_NAME = 6,

  /**
   * Data Type: STRING. Price to be shown in the ad.
   * Example: "100.00 USD"
   *
   * @generated from enum value: FLIGHT_PRICE = 7;
   */
  FLIGHT_PRICE = 7,

  /**
   * Data Type: STRING. Formatted price to be shown in the ad.
   * Example: "Starting at $100.00 USD", "$80 - $100"
   *
   * @generated from enum value: FORMATTED_PRICE = 8;
   */
  FORMATTED_PRICE = 8,

  /**
   * Data Type: STRING. Sale price to be shown in the ad.
   * Example: "80.00 USD"
   *
   * @generated from enum value: FLIGHT_SALE_PRICE = 9;
   */
  FLIGHT_SALE_PRICE = 9,

  /**
   * Data Type: STRING. Formatted sale price to be shown in the ad.
   * Example: "On sale for $80.00", "$60 - $80"
   *
   * @generated from enum value: FORMATTED_SALE_PRICE = 10;
   */
  FORMATTED_SALE_PRICE = 10,

  /**
   * Data Type: URL. Image to be displayed in the ad.
   *
   * @generated from enum value: IMAGE_URL = 11;
   */
  IMAGE_URL = 11,

  /**
   * Data Type: URL_LIST. Required. Final URLs for the ad when using Upgraded
   * URLs. User will be redirected to these URLs when they click on an ad, or
   * when they click on a specific flight for ads that show multiple
   * flights.
   *
   * @generated from enum value: FINAL_URLS = 12;
   */
  FINAL_URLS = 12,

  /**
   * Data Type: URL_LIST. Final mobile URLs for the ad when using Upgraded
   * URLs.
   *
   * @generated from enum value: FINAL_MOBILE_URLS = 13;
   */
  FINAL_MOBILE_URLS = 13,

  /**
   * Data Type: URL. Tracking template for the ad when using Upgraded URLs.
   *
   * @generated from enum value: TRACKING_URL = 14;
   */
  TRACKING_URL = 14,

  /**
   * Data Type: STRING. Android app link. Must be formatted as:
   * android-app://{package_id}/{scheme}/{host_path}.
   * The components are defined as follows:
   * package_id: app ID as specified in Google Play.
   * scheme: the scheme to pass to the application. Can be HTTP, or a custom
   *   scheme.
   * host_path: identifies the specific content within your application.
   *
   * @generated from enum value: ANDROID_APP_LINK = 15;
   */
  ANDROID_APP_LINK = 15,

  /**
   * Data Type: STRING_LIST. List of recommended destination IDs to show
   * together with this item.
   *
   * @generated from enum value: SIMILAR_DESTINATION_IDS = 16;
   */
  SIMILAR_DESTINATION_IDS = 16,

  /**
   * Data Type: STRING. iOS app link.
   *
   * @generated from enum value: IOS_APP_LINK = 17;
   */
  IOS_APP_LINK = 17,

  /**
   * Data Type: INT64. iOS app store ID.
   *
   * @generated from enum value: IOS_APP_STORE_ID = 18;
   */
  IOS_APP_STORE_ID = 18,
}

/**
 * Describes the enum google.ads.googleads.v17.enums.FlightPlaceholderFieldEnum.FlightPlaceholderField.
 */
export const FlightPlaceholderFieldEnum_FlightPlaceholderFieldSchema: GenEnum<FlightPlaceholderFieldEnum_FlightPlaceholderField> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_enums_flight_placeholder_field, 0, 0);
