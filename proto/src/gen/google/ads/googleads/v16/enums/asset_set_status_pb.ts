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
// @generated from file google/ads/googleads/v16/enums/asset_set_status.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/asset_set_status.proto.
 */
export const file_google_ads_googleads_v16_enums_asset_set_status: GenFile = /*@__PURE__*/
  fileDesc("CjVnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMvYXNzZXRfc2V0X3N0YXR1cy5wcm90bxIeZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zIl4KEkFzc2V0U2V0U3RhdHVzRW51bSJICg5Bc3NldFNldFN0YXR1cxIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARILCgdFTkFCTEVEEAISCwoHUkVNT1ZFRBADQu0BCiJjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zQhNBc3NldFNldFN0YXR1c1Byb3RvUAFaQ2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTYvZW51bXM7ZW51bXOiAgNHQUGqAh5Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuRW51bXPKAh5Hb29nbGVcQWRzXEdvb2dsZUFkc1xWMTZcRW51bXPqAiJHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTY6OkVudW1zYgZwcm90bzM");

/**
 * Container for enum describing possible statuses of an asset set.
 *
 * @generated from message google.ads.googleads.v16.enums.AssetSetStatusEnum
 */
export type AssetSetStatusEnum = Message<"google.ads.googleads.v16.enums.AssetSetStatusEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.AssetSetStatusEnum.
 * Use `create(AssetSetStatusEnumSchema)` to create a new message.
 */
export const AssetSetStatusEnumSchema: GenMessage<AssetSetStatusEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_asset_set_status, 0);

/**
 * The possible statuses of an asset set.
 *
 * @generated from enum google.ads.googleads.v16.enums.AssetSetStatusEnum.AssetSetStatus
 */
export enum AssetSetStatusEnum_AssetSetStatus {
  /**
   * The status has not been specified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The received value is not known in this version.
   * This is a response-only value.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * The asset set is enabled.
   *
   * @generated from enum value: ENABLED = 2;
   */
  ENABLED = 2,

  /**
   * The asset set is removed.
   *
   * @generated from enum value: REMOVED = 3;
   */
  REMOVED = 3,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.AssetSetStatusEnum.AssetSetStatus.
 */
export const AssetSetStatusEnum_AssetSetStatusSchema: GenEnum<AssetSetStatusEnum_AssetSetStatus> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_asset_set_status, 0, 0);
