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
// @generated from file google/ads/googleads/v16/enums/criterion_category_channel_availability_mode.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/criterion_category_channel_availability_mode.proto.
 */
export const file_google_ads_googleads_v16_enums_criterion_category_channel_availability_mode: GenFile = /*@__PURE__*/
  fileDesc("ClFnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMvY3JpdGVyaW9uX2NhdGVnb3J5X2NoYW5uZWxfYXZhaWxhYmlsaXR5X21vZGUucHJvdG8SHmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtcyLUAQosQ3JpdGVyaW9uQ2F0ZWdvcnlDaGFubmVsQXZhaWxhYmlsaXR5TW9kZUVudW0iowEKKENyaXRlcmlvbkNhdGVnb3J5Q2hhbm5lbEF2YWlsYWJpbGl0eU1vZGUSDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESEAoMQUxMX0NIQU5ORUxTEAISIQodQ0hBTk5FTF9UWVBFX0FORF9BTExfU1VCVFlQRVMQAxIkCiBDSEFOTkVMX1RZUEVfQU5EX1NVQlNFVF9TVUJUWVBFUxAEQocCCiJjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zQi1Dcml0ZXJpb25DYXRlZ29yeUNoYW5uZWxBdmFpbGFiaWxpdHlNb2RlUHJvdG9QAVpDZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNi9lbnVtcztlbnVtc6ICA0dBQaoCHkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNi5FbnVtc8oCHkdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxNlxFbnVtc+oCIkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6RW51bXNiBnByb3RvMw");

/**
 * Describes channel availability mode for a criterion availability - whether
 * the availability is meant to include all advertising channels, or a
 * particular channel with all its channel subtypes, or a channel with a certain
 * subset of channel subtypes.
 *
 * @generated from message google.ads.googleads.v16.enums.CriterionCategoryChannelAvailabilityModeEnum
 */
export type CriterionCategoryChannelAvailabilityModeEnum = Message<"google.ads.googleads.v16.enums.CriterionCategoryChannelAvailabilityModeEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.CriterionCategoryChannelAvailabilityModeEnum.
 * Use `create(CriterionCategoryChannelAvailabilityModeEnumSchema)` to create a new message.
 */
export const CriterionCategoryChannelAvailabilityModeEnumSchema: GenMessage<CriterionCategoryChannelAvailabilityModeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_criterion_category_channel_availability_mode, 0);

/**
 * Enum containing the possible CriterionCategoryChannelAvailabilityMode.
 *
 * @generated from enum google.ads.googleads.v16.enums.CriterionCategoryChannelAvailabilityModeEnum.CriterionCategoryChannelAvailabilityMode
 */
export enum CriterionCategoryChannelAvailabilityModeEnum_CriterionCategoryChannelAvailabilityMode {
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
   * The category is available to campaigns of all channel types and subtypes.
   *
   * @generated from enum value: ALL_CHANNELS = 2;
   */
  ALL_CHANNELS = 2,

  /**
   * The category is available to campaigns of a specific channel type,
   * including all subtypes under it.
   *
   * @generated from enum value: CHANNEL_TYPE_AND_ALL_SUBTYPES = 3;
   */
  CHANNEL_TYPE_AND_ALL_SUBTYPES = 3,

  /**
   * The category is available to campaigns of a specific channel type and
   * subtype(s).
   *
   * @generated from enum value: CHANNEL_TYPE_AND_SUBSET_SUBTYPES = 4;
   */
  CHANNEL_TYPE_AND_SUBSET_SUBTYPES = 4,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.CriterionCategoryChannelAvailabilityModeEnum.CriterionCategoryChannelAvailabilityMode.
 */
export const CriterionCategoryChannelAvailabilityModeEnum_CriterionCategoryChannelAvailabilityModeSchema: GenEnum<CriterionCategoryChannelAvailabilityModeEnum_CriterionCategoryChannelAvailabilityMode> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_criterion_category_channel_availability_mode, 0, 0);
