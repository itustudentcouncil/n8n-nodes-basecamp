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
// @generated from file google/ads/googleads/v16/enums/shared_set_type.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/shared_set_type.proto.
 */
export const file_google_ads_googleads_v16_enums_shared_set_type: GenFile = /*@__PURE__*/
  fileDesc("CjRnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMvc2hhcmVkX3NldF90eXBlLnByb3RvEh5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMipAEKEVNoYXJlZFNldFR5cGVFbnVtIo4BCg1TaGFyZWRTZXRUeXBlEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEhUKEU5FR0FUSVZFX0tFWVdPUkRTEAISFwoTTkVHQVRJVkVfUExBQ0VNRU5UUxADEiMKH0FDQ09VTlRfTEVWRUxfTkVHQVRJVkVfS0VZV09SRFMQBBIKCgZCUkFORFMQBULsAQoiY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtc0ISU2hhcmVkU2V0VHlwZVByb3RvUAFaQ2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTYvZW51bXM7ZW51bXOiAgNHQUGqAh5Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuRW51bXPKAh5Hb29nbGVcQWRzXEdvb2dsZUFkc1xWMTZcRW51bXPqAiJHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTY6OkVudW1zYgZwcm90bzM");

/**
 * Container for enum describing types of shared sets.
 *
 * @generated from message google.ads.googleads.v16.enums.SharedSetTypeEnum
 */
export type SharedSetTypeEnum = Message<"google.ads.googleads.v16.enums.SharedSetTypeEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.SharedSetTypeEnum.
 * Use `create(SharedSetTypeEnumSchema)` to create a new message.
 */
export const SharedSetTypeEnumSchema: GenMessage<SharedSetTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_shared_set_type, 0);

/**
 * Enum listing the possible shared set types.
 *
 * @generated from enum google.ads.googleads.v16.enums.SharedSetTypeEnum.SharedSetType
 */
export enum SharedSetTypeEnum_SharedSetType {
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
   * A set of keywords that can be excluded from targeting.
   *
   * @generated from enum value: NEGATIVE_KEYWORDS = 2;
   */
  NEGATIVE_KEYWORDS = 2,

  /**
   * A set of placements that can be excluded from targeting.
   *
   * @generated from enum value: NEGATIVE_PLACEMENTS = 3;
   */
  NEGATIVE_PLACEMENTS = 3,

  /**
   * An account-level set of keywords that can be excluded from targeting.
   *
   * @generated from enum value: ACCOUNT_LEVEL_NEGATIVE_KEYWORDS = 4;
   */
  ACCOUNT_LEVEL_NEGATIVE_KEYWORDS = 4,

  /**
   * A set of brands can be included or excluded from targeting.
   *
   * @generated from enum value: BRANDS = 5;
   */
  BRANDS = 5,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.SharedSetTypeEnum.SharedSetType.
 */
export const SharedSetTypeEnum_SharedSetTypeSchema: GenEnum<SharedSetTypeEnum_SharedSetType> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_shared_set_type, 0, 0);
