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
// @generated from file google/ads/searchads360/v0/enums/ad_group_ad_rotation_mode.proto (package google.ads.searchads360.v0.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/searchads360/v0/enums/ad_group_ad_rotation_mode.proto.
 */
export const file_google_ads_searchads360_v0_enums_ad_group_ad_rotation_mode: GenFile = /*@__PURE__*/
  fileDesc("CkBnb29nbGUvYWRzL3NlYXJjaGFkczM2MC92MC9lbnVtcy9hZF9ncm91cF9hZF9yb3RhdGlvbl9tb2RlLnByb3RvEiBnb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5lbnVtcyJ0ChlBZEdyb3VwQWRSb3RhdGlvbk1vZGVFbnVtIlcKFUFkR3JvdXBBZFJvdGF0aW9uTW9kZRIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIMCghPUFRJTUlaRRACEhIKDlJPVEFURV9GT1JFVkVSEANCggIKJGNvbS5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5lbnVtc0IaQWRHcm91cEFkUm90YXRpb25Nb2RlUHJvdG9QAVpFZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvc2VhcmNoYWRzMzYwL3YwL2VudW1zO2VudW1zogIHR0FTQTM2MKoCIEdvb2dsZS5BZHMuU2VhcmNoQWRzMzYwLlYwLkVudW1zygIgR29vZ2xlXEFkc1xTZWFyY2hBZHMzNjBcVjBcRW51bXPqAiRHb29nbGU6OkFkczo6U2VhcmNoQWRzMzYwOjpWMDo6RW51bXNiBnByb3RvMw");

/**
 * Container for enum describing possible ad rotation modes of ads within an
 * ad group.
 *
 * @generated from message google.ads.searchads360.v0.enums.AdGroupAdRotationModeEnum
 */
export type AdGroupAdRotationModeEnum = Message<"google.ads.searchads360.v0.enums.AdGroupAdRotationModeEnum"> & {
};

/**
 * Describes the message google.ads.searchads360.v0.enums.AdGroupAdRotationModeEnum.
 * Use `create(AdGroupAdRotationModeEnumSchema)` to create a new message.
 */
export const AdGroupAdRotationModeEnumSchema: GenMessage<AdGroupAdRotationModeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_enums_ad_group_ad_rotation_mode, 0);

/**
 * The possible ad rotation modes of an ad group.
 *
 * @generated from enum google.ads.searchads360.v0.enums.AdGroupAdRotationModeEnum.AdGroupAdRotationMode
 */
export enum AdGroupAdRotationModeEnum_AdGroupAdRotationMode {
  /**
   * The ad rotation mode has not been specified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The received value is not known in this version.
   *
   * This is a response-only value.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * Optimize ad group ads based on clicks or conversions.
   *
   * @generated from enum value: OPTIMIZE = 2;
   */
  OPTIMIZE = 2,

  /**
   * Rotate evenly forever.
   *
   * @generated from enum value: ROTATE_FOREVER = 3;
   */
  ROTATE_FOREVER = 3,
}

/**
 * Describes the enum google.ads.searchads360.v0.enums.AdGroupAdRotationModeEnum.AdGroupAdRotationMode.
 */
export const AdGroupAdRotationModeEnum_AdGroupAdRotationModeSchema: GenEnum<AdGroupAdRotationModeEnum_AdGroupAdRotationMode> = /*@__PURE__*/
  enumDesc(file_google_ads_searchads360_v0_enums_ad_group_ad_rotation_mode, 0, 0);
