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
// @generated from file google/ads/googleads/v17/common/feed_item_set_filter_type_infos.proto (package google.ads.googleads.v17.common, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { FeedItemSetStringFilterTypeEnum_FeedItemSetStringFilterType } from "../enums/feed_item_set_string_filter_type_pb";
import { file_google_ads_googleads_v17_enums_feed_item_set_string_filter_type } from "../enums/feed_item_set_string_filter_type_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/common/feed_item_set_filter_type_infos.proto.
 */
export const file_google_ads_googleads_v17_common_feed_item_set_filter_type_infos: GenFile = /*@__PURE__*/
  fileDesc("CkVnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvY29tbW9uL2ZlZWRfaXRlbV9zZXRfZmlsdGVyX3R5cGVfaW5mb3MucHJvdG8SH2dvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5jb21tb24ifQoYRHluYW1pY0xvY2F0aW9uU2V0RmlsdGVyEg4KBmxhYmVscxgBIAMoCRJRChRidXNpbmVzc19uYW1lX2ZpbHRlchgCIAEoCzIzLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5jb21tb24uQnVzaW5lc3NOYW1lRmlsdGVyIp0BChJCdXNpbmVzc05hbWVGaWx0ZXISFQoNYnVzaW5lc3NfbmFtZRgBIAEoCRJwCgtmaWx0ZXJfdHlwZRgCIAEoDjJbLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lbnVtcy5GZWVkSXRlbVNldFN0cmluZ0ZpbHRlclR5cGVFbnVtLkZlZWRJdGVtU2V0U3RyaW5nRmlsdGVyVHlwZSI2CiFEeW5hbWljQWZmaWxpYXRlTG9jYXRpb25TZXRGaWx0ZXISEQoJY2hhaW5faWRzGAEgAygDQv8BCiNjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LmNvbW1vbkIfRmVlZEl0ZW1TZXRGaWx0ZXJUeXBlSW5mb3NQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE3L2NvbW1vbjtjb21tb26iAgNHQUGqAh9Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTcuQ29tbW9uygIfR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE3XENvbW1vbuoCI0dvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6Q29tbW9uYgZwcm90bzM", [file_google_ads_googleads_v17_enums_feed_item_set_string_filter_type]);

/**
 * Represents a filter on locations in a feed item set.
 * Only applicable if the parent Feed of the FeedItemSet is a LOCATION feed.
 *
 * @generated from message google.ads.googleads.v17.common.DynamicLocationSetFilter
 */
export type DynamicLocationSetFilter = Message<"google.ads.googleads.v17.common.DynamicLocationSetFilter"> & {
  /**
   * If multiple labels are set, then only feeditems marked with all the labels
   * will be added to the FeedItemSet.
   *
   * @generated from field: repeated string labels = 1;
   */
  labels: string[];

  /**
   * Business name filter.
   *
   * @generated from field: google.ads.googleads.v17.common.BusinessNameFilter business_name_filter = 2;
   */
  businessNameFilter?: BusinessNameFilter;
};

/**
 * Describes the message google.ads.googleads.v17.common.DynamicLocationSetFilter.
 * Use `create(DynamicLocationSetFilterSchema)` to create a new message.
 */
export const DynamicLocationSetFilterSchema: GenMessage<DynamicLocationSetFilter> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_common_feed_item_set_filter_type_infos, 0);

/**
 * Represents a business name filter on locations in a FeedItemSet.
 *
 * @generated from message google.ads.googleads.v17.common.BusinessNameFilter
 */
export type BusinessNameFilter = Message<"google.ads.googleads.v17.common.BusinessNameFilter"> & {
  /**
   * Business name string to use for filtering.
   *
   * @generated from field: string business_name = 1;
   */
  businessName: string;

  /**
   * The type of string matching to use when filtering with business_name.
   *
   * @generated from field: google.ads.googleads.v17.enums.FeedItemSetStringFilterTypeEnum.FeedItemSetStringFilterType filter_type = 2;
   */
  filterType: FeedItemSetStringFilterTypeEnum_FeedItemSetStringFilterType;
};

/**
 * Describes the message google.ads.googleads.v17.common.BusinessNameFilter.
 * Use `create(BusinessNameFilterSchema)` to create a new message.
 */
export const BusinessNameFilterSchema: GenMessage<BusinessNameFilter> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_common_feed_item_set_filter_type_infos, 1);

/**
 * Represents a filter on affiliate locations in a FeedItemSet.
 * Only applicable if the parent Feed of the FeedItemSet is an
 * AFFILIATE_LOCATION feed.
 *
 * @generated from message google.ads.googleads.v17.common.DynamicAffiliateLocationSetFilter
 */
export type DynamicAffiliateLocationSetFilter = Message<"google.ads.googleads.v17.common.DynamicAffiliateLocationSetFilter"> & {
  /**
   * Used to filter affiliate locations by chain ids. Only affiliate locations
   * that belong to the specified chain(s) will be added to the FeedItemSet.
   *
   * @generated from field: repeated int64 chain_ids = 1;
   */
  chainIds: bigint[];
};

/**
 * Describes the message google.ads.googleads.v17.common.DynamicAffiliateLocationSetFilter.
 * Use `create(DynamicAffiliateLocationSetFilterSchema)` to create a new message.
 */
export const DynamicAffiliateLocationSetFilterSchema: GenMessage<DynamicAffiliateLocationSetFilter> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_common_feed_item_set_filter_type_infos, 2);
