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
// @generated from file google/ads/googleads/v16/enums/asset_link_primary_status.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/asset_link_primary_status.proto.
 */
export const file_google_ads_googleads_v16_enums_asset_link_primary_status: GenFile = /*@__PURE__*/
  fileDesc("Cj5nb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMvYXNzZXRfbGlua19wcmltYXJ5X3N0YXR1cy5wcm90bxIeZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zIqgBChpBc3NldExpbmtQcmltYXJ5U3RhdHVzRW51bSKJAQoWQXNzZXRMaW5rUHJpbWFyeVN0YXR1cxIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIMCghFTElHSUJMRRACEgoKBlBBVVNFRBADEgsKB1JFTU9WRUQQBBILCgdQRU5ESU5HEAUSCwoHTElNSVRFRBAGEhAKDE5PVF9FTElHSUJMRRAHQvUBCiJjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zQhtBc3NldExpbmtQcmltYXJ5U3RhdHVzUHJvdG9QAVpDZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNi9lbnVtcztlbnVtc6ICA0dBQaoCHkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNi5FbnVtc8oCHkdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxNlxFbnVtc+oCIkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6RW51bXNiBnByb3RvMw");

/**
 * Provides the primary status of an asset link.
 * For example: a sitelink may be paused for a particular campaign.
 *
 * @generated from message google.ads.googleads.v16.enums.AssetLinkPrimaryStatusEnum
 */
export type AssetLinkPrimaryStatusEnum = Message<"google.ads.googleads.v16.enums.AssetLinkPrimaryStatusEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.AssetLinkPrimaryStatusEnum.
 * Use `create(AssetLinkPrimaryStatusEnumSchema)` to create a new message.
 */
export const AssetLinkPrimaryStatusEnumSchema: GenMessage<AssetLinkPrimaryStatusEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_asset_link_primary_status, 0);

/**
 * Enum Provides insight into why an asset is not serving or not serving
 * at full capacity for a particular link level. There could be one status
 * with multiple reasons. For example, a sitelink might be paused by the user,
 * but also limited in serving due to violation of an alcohol policy. In
 * this case, the PrimaryStatus will be returned as PAUSED, since the asset's
 * effective status is determined by its paused state.
 *
 * @generated from enum google.ads.googleads.v16.enums.AssetLinkPrimaryStatusEnum.AssetLinkPrimaryStatus
 */
export enum AssetLinkPrimaryStatusEnum_AssetLinkPrimaryStatus {
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
   * The asset is eligible to serve.
   *
   * @generated from enum value: ELIGIBLE = 2;
   */
  ELIGIBLE = 2,

  /**
   * The user-specified asset link status is paused.
   *
   * @generated from enum value: PAUSED = 3;
   */
  PAUSED = 3,

  /**
   * The user-specified asset link status is removed.
   *
   * @generated from enum value: REMOVED = 4;
   */
  REMOVED = 4,

  /**
   * The asset may serve in the future.
   *
   * @generated from enum value: PENDING = 5;
   */
  PENDING = 5,

  /**
   * The asset is serving in a partial capacity.
   *
   * @generated from enum value: LIMITED = 6;
   */
  LIMITED = 6,

  /**
   * The asset is not eligible to serve.
   *
   * @generated from enum value: NOT_ELIGIBLE = 7;
   */
  NOT_ELIGIBLE = 7,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.AssetLinkPrimaryStatusEnum.AssetLinkPrimaryStatus.
 */
export const AssetLinkPrimaryStatusEnum_AssetLinkPrimaryStatusSchema: GenEnum<AssetLinkPrimaryStatusEnum_AssetLinkPrimaryStatus> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_asset_link_primary_status, 0, 0);
