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
// @generated from file google/ads/googleads/v16/common/asset_usage.proto (package google.ads.googleads.v16.common, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { ServedAssetFieldTypeEnum_ServedAssetFieldType } from "../enums/served_asset_field_type_pb";
import { file_google_ads_googleads_v16_enums_served_asset_field_type } from "../enums/served_asset_field_type_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/common/asset_usage.proto.
 */
export const file_google_ads_googleads_v16_common_asset_usage: GenFile = /*@__PURE__*/
  fileDesc("CjFnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvY29tbW9uL2Fzc2V0X3VzYWdlLnByb3RvEh9nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuY29tbW9uIosBCgpBc3NldFVzYWdlEg0KBWFzc2V0GAEgASgJEm4KF3NlcnZlZF9hc3NldF9maWVsZF90eXBlGAIgASgOMk0uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zLlNlcnZlZEFzc2V0RmllbGRUeXBlRW51bS5TZXJ2ZWRBc3NldEZpZWxkVHlwZULvAQojY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5jb21tb25CD0Fzc2V0VXNhZ2VQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L2NvbW1vbjtjb21tb26iAgNHQUGqAh9Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuQ29tbW9uygIfR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XENvbW1vbuoCI0dvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6Q29tbW9uYgZwcm90bzM", [file_google_ads_googleads_v16_enums_served_asset_field_type]);

/**
 * Contains the usage information of the asset.
 *
 * @generated from message google.ads.googleads.v16.common.AssetUsage
 */
export type AssetUsage = Message<"google.ads.googleads.v16.common.AssetUsage"> & {
  /**
   * Resource name of the asset.
   *
   * @generated from field: string asset = 1;
   */
  asset: string;

  /**
   * The served field type of the asset.
   *
   * @generated from field: google.ads.googleads.v16.enums.ServedAssetFieldTypeEnum.ServedAssetFieldType served_asset_field_type = 2;
   */
  servedAssetFieldType: ServedAssetFieldTypeEnum_ServedAssetFieldType;
};

/**
 * Describes the message google.ads.googleads.v16.common.AssetUsage.
 * Use `create(AssetUsageSchema)` to create a new message.
 */
export const AssetUsageSchema: GenMessage<AssetUsage> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_common_asset_usage, 0);
