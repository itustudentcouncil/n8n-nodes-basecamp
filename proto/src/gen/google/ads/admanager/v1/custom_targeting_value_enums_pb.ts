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
// @generated from file google/ads/admanager/v1/custom_targeting_value_enums.proto (package google.ads.admanager.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/admanager/v1/custom_targeting_value_enums.proto.
 */
export const file_google_ads_admanager_v1_custom_targeting_value_enums: GenFile = /*@__PURE__*/
  fileDesc("Cjpnb29nbGUvYWRzL2FkbWFuYWdlci92MS9jdXN0b21fdGFyZ2V0aW5nX3ZhbHVlX2VudW1zLnByb3RvEhdnb29nbGUuYWRzLmFkbWFuYWdlci52MSKHAQoeQ3VzdG9tVGFyZ2V0aW5nVmFsdWVTdGF0dXNFbnVtImUKGkN1c3RvbVRhcmdldGluZ1ZhbHVlU3RhdHVzEi0KKUNVU1RPTV9UQVJHRVRJTkdfVkFMVUVfU1RBVFVTX1VOU1BFQ0lGSUVEEAASCgoGQUNUSVZFEAESDAoISU5BQ1RJVkUQAiLGAQohQ3VzdG9tVGFyZ2V0aW5nVmFsdWVNYXRjaFR5cGVFbnVtIqABCh1DdXN0b21UYXJnZXRpbmdWYWx1ZU1hdGNoVHlwZRIxCi1DVVNUT01fVEFSR0VUSU5HX1ZBTFVFX01BVENIX1RZUEVfVU5TUEVDSUZJRUQQABIJCgVFWEFDVBABEgkKBUJST0FEEAISCgoGUFJFRklYEAMSEAoMQlJPQURfUFJFRklYEAQSCgoGU1VGRklYEAUSDAoIQ09OVEFJTlMQBkK7AQobY29tLmdvb2dsZS5hZHMuYWRtYW5hZ2VyLnYxQh5DdXN0b21UYXJnZXRpbmdWYWx1ZUVudW1zUHJvdG9QAVpAZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvYWRtYW5hZ2VyL3YxO2FkbWFuYWdlcqICA0dBQaoCF0dvb2dsZS5BZHMuQWRNYW5hZ2VyLlYxygIXR29vZ2xlXEFkc1xBZE1hbmFnZXJcVjFiBnByb3RvMw");

/**
 * Wrapper message for
 * [CustomTargetingValueStatus][google.ads.admanager.v1.CustomTargetingValueStatusEnum.CustomTargetingValueStatus]
 *
 * @generated from message google.ads.admanager.v1.CustomTargetingValueStatusEnum
 */
export type CustomTargetingValueStatusEnum = Message<"google.ads.admanager.v1.CustomTargetingValueStatusEnum"> & {
};

/**
 * Describes the message google.ads.admanager.v1.CustomTargetingValueStatusEnum.
 * Use `create(CustomTargetingValueStatusEnumSchema)` to create a new message.
 */
export const CustomTargetingValueStatusEnumSchema: GenMessage<CustomTargetingValueStatusEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_admanager_v1_custom_targeting_value_enums, 0);

/**
 * Status of the custom targeting value.
 *
 * @generated from enum google.ads.admanager.v1.CustomTargetingValueStatusEnum.CustomTargetingValueStatus
 */
export enum CustomTargetingValueStatusEnum_CustomTargetingValueStatus {
  /**
   * Not specified value.
   *
   * @generated from enum value: CUSTOM_TARGETING_VALUE_STATUS_UNSPECIFIED = 0;
   */
  CUSTOM_TARGETING_VALUE_STATUS_UNSPECIFIED = 0,

  /**
   * Custom targeting value is active.
   *
   * @generated from enum value: ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * Custom targeting value is inactive.
   *
   * @generated from enum value: INACTIVE = 2;
   */
  INACTIVE = 2,
}

/**
 * Describes the enum google.ads.admanager.v1.CustomTargetingValueStatusEnum.CustomTargetingValueStatus.
 */
export const CustomTargetingValueStatusEnum_CustomTargetingValueStatusSchema: GenEnum<CustomTargetingValueStatusEnum_CustomTargetingValueStatus> = /*@__PURE__*/
  enumDesc(file_google_ads_admanager_v1_custom_targeting_value_enums, 0, 0);

/**
 * Wrapper message for
 * [CustomTargetingValueMatchType][google.ads.admanager.v1.CustomTargetingValueMatchTypeEnum.CustomTargetingValueMatchType]
 *
 * @generated from message google.ads.admanager.v1.CustomTargetingValueMatchTypeEnum
 */
export type CustomTargetingValueMatchTypeEnum = Message<"google.ads.admanager.v1.CustomTargetingValueMatchTypeEnum"> & {
};

/**
 * Describes the message google.ads.admanager.v1.CustomTargetingValueMatchTypeEnum.
 * Use `create(CustomTargetingValueMatchTypeEnumSchema)` to create a new message.
 */
export const CustomTargetingValueMatchTypeEnumSchema: GenMessage<CustomTargetingValueMatchTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_admanager_v1_custom_targeting_value_enums, 1);

/**
 * Match type of the custom targeting value.
 *
 * @generated from enum google.ads.admanager.v1.CustomTargetingValueMatchTypeEnum.CustomTargetingValueMatchType
 */
export enum CustomTargetingValueMatchTypeEnum_CustomTargetingValueMatchType {
  /**
   * Not specified value.
   *
   * @generated from enum value: CUSTOM_TARGETING_VALUE_MATCH_TYPE_UNSPECIFIED = 0;
   */
  CUSTOM_TARGETING_VALUE_MATCH_TYPE_UNSPECIFIED = 0,

  /**
   * Used for exact matching. For example, the targeting value car=honda will
   * only match to the ad request car=honda.
   *
   * @generated from enum value: EXACT = 1;
   */
  EXACT = 1,

  /**
   * Used for lenient matching when at least one of the words in the ad
   * request matches the targeted value. The targeting value car=honda will
   * match to ad requests containing the word honda. So ad requests car=honda
   * or car=honda civic or car=buy honda or car=how much does a honda cost
   * will all have the line item delivered.
   * This match type can not be used within an audience segment rule.
   *
   * @generated from enum value: BROAD = 2;
   */
  BROAD = 2,

  /**
   * Used for 'starts with' matching when the first few characters in the ad
   * request match all of the characters in the targeted value. The targeting
   * value car=honda will match to ad requests car=honda or car=hondas for
   * sale but not to car=I want a honda.
   *
   * @generated from enum value: PREFIX = 3;
   */
  PREFIX = 3,

  /**
   * This is a combination of MatchType#BROAD and MatchType#PREFIX matching.
   * The targeting value car=honda will match to ad requests that contain
   * words that start with the characters in the targeted value, for example
   * with car=civic hondas.
   * This match type can not be used within an audience segment rule.
   *
   * @generated from enum value: BROAD_PREFIX = 4;
   */
  BROAD_PREFIX = 4,

  /**
   * Used for 'ends with' matching when the last characters in the ad request
   * match all of the characters in the targeted value. The targeting value
   * car=honda will match with ad requests car=honda or car=I want a honda but
   * not to car=hondas for sale.
   * This match type can not be used within line item targeting.
   *
   * @generated from enum value: SUFFIX = 5;
   */
  SUFFIX = 5,

  /**
   * Used for 'within' matching when the string in the ad request contains the
   * string in the targeted value. The targeting value car=honda will match
   * with ad requests car=honda, car=I want a honda, and also with car=hondas
   * for sale, but not with car=misspelled hond a. This match type can not be
   * used within line item targeting.
   *
   * @generated from enum value: CONTAINS = 6;
   */
  CONTAINS = 6,
}

/**
 * Describes the enum google.ads.admanager.v1.CustomTargetingValueMatchTypeEnum.CustomTargetingValueMatchType.
 */
export const CustomTargetingValueMatchTypeEnum_CustomTargetingValueMatchTypeSchema: GenEnum<CustomTargetingValueMatchTypeEnum_CustomTargetingValueMatchType> = /*@__PURE__*/
  enumDesc(file_google_ads_admanager_v1_custom_targeting_value_enums, 1, 0);
