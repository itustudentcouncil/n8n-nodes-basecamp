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
// @generated from file google/ads/googleads/v16/enums/bidding_source.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/bidding_source.proto.
 */
export const file_google_ads_googleads_v16_enums_bidding_source: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMvYmlkZGluZ19zb3VyY2UucHJvdG8SHmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtcyKHAQoRQmlkZGluZ1NvdXJjZUVudW0icgoNQmlkZGluZ1NvdXJjZRIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIdChlDQU1QQUlHTl9CSURESU5HX1NUUkFURUdZEAUSDAoIQURfR1JPVVAQBhIWChJBRF9HUk9VUF9DUklURVJJT04QB0LsAQoiY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtc0ISQmlkZGluZ1NvdXJjZVByb3RvUAFaQ2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTYvZW51bXM7ZW51bXOiAgNHQUGqAh5Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuRW51bXPKAh5Hb29nbGVcQWRzXEdvb2dsZUFkc1xWMTZcRW51bXPqAiJHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTY6OkVudW1zYgZwcm90bzM");

/**
 * Container for enum describing possible bidding sources.
 *
 * @generated from message google.ads.googleads.v16.enums.BiddingSourceEnum
 */
export type BiddingSourceEnum = Message<"google.ads.googleads.v16.enums.BiddingSourceEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.BiddingSourceEnum.
 * Use `create(BiddingSourceEnumSchema)` to create a new message.
 */
export const BiddingSourceEnumSchema: GenMessage<BiddingSourceEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_bidding_source, 0);

/**
 * Indicates where a bid or target is defined. For example, an ad group
 * criterion may define a cpc bid directly, or it can inherit its cpc bid from
 * the ad group.
 *
 * @generated from enum google.ads.googleads.v16.enums.BiddingSourceEnum.BiddingSource
 */
export enum BiddingSourceEnum_BiddingSource {
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
   * Effective bid or target is inherited from campaign bidding strategy.
   *
   * @generated from enum value: CAMPAIGN_BIDDING_STRATEGY = 5;
   */
  CAMPAIGN_BIDDING_STRATEGY = 5,

  /**
   * The bid or target is defined on the ad group.
   *
   * @generated from enum value: AD_GROUP = 6;
   */
  AD_GROUP = 6,

  /**
   * The bid or target is defined on the ad group criterion.
   *
   * @generated from enum value: AD_GROUP_CRITERION = 7;
   */
  AD_GROUP_CRITERION = 7,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.BiddingSourceEnum.BiddingSource.
 */
export const BiddingSourceEnum_BiddingSourceSchema: GenEnum<BiddingSourceEnum_BiddingSource> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_bidding_source, 0, 0);
