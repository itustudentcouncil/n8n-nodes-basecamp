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
// @generated from file google/ads/googleads/v16/enums/asset_performance_label.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/asset_performance_label.proto.
 */
export const file_google_ads_googleads_v16_enums_asset_performance_label: GenFile = /*@__PURE__*/
  fileDesc("Cjxnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMvYXNzZXRfcGVyZm9ybWFuY2VfbGFiZWwucHJvdG8SHmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtcyKKAQoZQXNzZXRQZXJmb3JtYW5jZUxhYmVsRW51bSJtChVBc3NldFBlcmZvcm1hbmNlTGFiZWwSDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESCwoHUEVORElORxACEgwKCExFQVJOSU5HEAMSBwoDTE9XEAQSCAoER09PRBAFEggKBEJFU1QQBkL0AQoiY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtc0IaQXNzZXRQZXJmb3JtYW5jZUxhYmVsUHJvdG9QAVpDZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNi9lbnVtcztlbnVtc6ICA0dBQaoCHkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNi5FbnVtc8oCHkdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxNlxFbnVtc+oCIkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6RW51bXNiBnByb3RvMw");

/**
 * Container for enum describing the performance label of an asset.
 *
 * @generated from message google.ads.googleads.v16.enums.AssetPerformanceLabelEnum
 */
export type AssetPerformanceLabelEnum = Message<"google.ads.googleads.v16.enums.AssetPerformanceLabelEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.AssetPerformanceLabelEnum.
 * Use `create(AssetPerformanceLabelEnumSchema)` to create a new message.
 */
export const AssetPerformanceLabelEnumSchema: GenMessage<AssetPerformanceLabelEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_asset_performance_label, 0);

/**
 * Enum describing the possible performance labels of an asset, usually
 * computed in the context of a linkage.
 *
 * @generated from enum google.ads.googleads.v16.enums.AssetPerformanceLabelEnum.AssetPerformanceLabel
 */
export enum AssetPerformanceLabelEnum_AssetPerformanceLabel {
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
   * This asset does not yet have any performance informantion. This may be
   * because it is still under review.
   *
   * @generated from enum value: PENDING = 2;
   */
  PENDING = 2,

  /**
   * The asset has started getting impressions but the stats are not
   * statistically significant enough to get an asset performance label.
   *
   * @generated from enum value: LEARNING = 3;
   */
  LEARNING = 3,

  /**
   * Worst performing assets.
   *
   * @generated from enum value: LOW = 4;
   */
  LOW = 4,

  /**
   * Good performing assets.
   *
   * @generated from enum value: GOOD = 5;
   */
  GOOD = 5,

  /**
   * Best performing assets.
   *
   * @generated from enum value: BEST = 6;
   */
  BEST = 6,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.AssetPerformanceLabelEnum.AssetPerformanceLabel.
 */
export const AssetPerformanceLabelEnum_AssetPerformanceLabelSchema: GenEnum<AssetPerformanceLabelEnum_AssetPerformanceLabel> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_asset_performance_label, 0, 0);
