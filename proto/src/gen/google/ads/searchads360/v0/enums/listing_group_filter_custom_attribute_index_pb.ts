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
// @generated from file google/ads/searchads360/v0/enums/listing_group_filter_custom_attribute_index.proto (package google.ads.searchads360.v0.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/searchads360/v0/enums/listing_group_filter_custom_attribute_index.proto.
 */
export const file_google_ads_searchads360_v0_enums_listing_group_filter_custom_attribute_index: GenFile = /*@__PURE__*/
  fileDesc("ClJnb29nbGUvYWRzL3NlYXJjaGFkczM2MC92MC9lbnVtcy9saXN0aW5nX2dyb3VwX2ZpbHRlcl9jdXN0b21fYXR0cmlidXRlX2luZGV4LnByb3RvEiBnb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5lbnVtcyKxAQoqTGlzdGluZ0dyb3VwRmlsdGVyQ3VzdG9tQXR0cmlidXRlSW5kZXhFbnVtIoIBCiZMaXN0aW5nR3JvdXBGaWx0ZXJDdXN0b21BdHRyaWJ1dGVJbmRleBIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIKCgZJTkRFWDAQAhIKCgZJTkRFWDEQAxIKCgZJTkRFWDIQBBIKCgZJTkRFWDMQBRIKCgZJTkRFWDQQBkKTAgokY29tLmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLmVudW1zQitMaXN0aW5nR3JvdXBGaWx0ZXJDdXN0b21BdHRyaWJ1dGVJbmRleFByb3RvUAFaRWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL3NlYXJjaGFkczM2MC92MC9lbnVtcztlbnVtc6ICB0dBU0EzNjCqAiBHb29nbGUuQWRzLlNlYXJjaEFkczM2MC5WMC5FbnVtc8oCIEdvb2dsZVxBZHNcU2VhcmNoQWRzMzYwXFYwXEVudW1z6gIkR29vZ2xlOjpBZHM6OlNlYXJjaEFkczM2MDo6VjA6OkVudW1zYgZwcm90bzM");

/**
 * Container for enum describing the indexes of custom attribute used in
 * ListingGroupFilterDimension.
 *
 * @generated from message google.ads.searchads360.v0.enums.ListingGroupFilterCustomAttributeIndexEnum
 */
export type ListingGroupFilterCustomAttributeIndexEnum = Message<"google.ads.searchads360.v0.enums.ListingGroupFilterCustomAttributeIndexEnum"> & {
};

/**
 * Describes the message google.ads.searchads360.v0.enums.ListingGroupFilterCustomAttributeIndexEnum.
 * Use `create(ListingGroupFilterCustomAttributeIndexEnumSchema)` to create a new message.
 */
export const ListingGroupFilterCustomAttributeIndexEnumSchema: GenMessage<ListingGroupFilterCustomAttributeIndexEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_enums_listing_group_filter_custom_attribute_index, 0);

/**
 * The index of customer attributes.
 *
 * @generated from enum google.ads.searchads360.v0.enums.ListingGroupFilterCustomAttributeIndexEnum.ListingGroupFilterCustomAttributeIndex
 */
export enum ListingGroupFilterCustomAttributeIndexEnum_ListingGroupFilterCustomAttributeIndex {
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
   * First listing group filter custom attribute.
   *
   * @generated from enum value: INDEX0 = 2;
   */
  INDEX0 = 2,

  /**
   * Second listing group filter custom attribute.
   *
   * @generated from enum value: INDEX1 = 3;
   */
  INDEX1 = 3,

  /**
   * Third listing group filter custom attribute.
   *
   * @generated from enum value: INDEX2 = 4;
   */
  INDEX2 = 4,

  /**
   * Fourth listing group filter custom attribute.
   *
   * @generated from enum value: INDEX3 = 5;
   */
  INDEX3 = 5,

  /**
   * Fifth listing group filter custom attribute.
   *
   * @generated from enum value: INDEX4 = 6;
   */
  INDEX4 = 6,
}

/**
 * Describes the enum google.ads.searchads360.v0.enums.ListingGroupFilterCustomAttributeIndexEnum.ListingGroupFilterCustomAttributeIndex.
 */
export const ListingGroupFilterCustomAttributeIndexEnum_ListingGroupFilterCustomAttributeIndexSchema: GenEnum<ListingGroupFilterCustomAttributeIndexEnum_ListingGroupFilterCustomAttributeIndex> = /*@__PURE__*/
  enumDesc(file_google_ads_searchads360_v0_enums_listing_group_filter_custom_attribute_index, 0, 0);
