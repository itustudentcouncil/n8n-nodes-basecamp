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
// @generated from file google/ads/googleads/v17/enums/age_range_type.proto (package google.ads.googleads.v17.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/enums/age_range_type.proto.
 */
export const file_google_ads_googleads_v17_enums_age_range_type: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZW51bXMvYWdlX3JhbmdlX3R5cGUucHJvdG8SHmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lbnVtcyLpAQoQQWdlUmFuZ2VUeXBlRW51bSLUAQoMQWdlUmFuZ2VUeXBlEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEhUKD0FHRV9SQU5HRV8xOF8yNBDZ2R4SFQoPQUdFX1JBTkdFXzI1XzM0ENrZHhIVCg9BR0VfUkFOR0VfMzVfNDQQ29keEhUKD0FHRV9SQU5HRV80NV81NBDc2R4SFQoPQUdFX1JBTkdFXzU1XzY0EN3ZHhIVCg9BR0VfUkFOR0VfNjVfVVAQ3tkeEhwKFkFHRV9SQU5HRV9VTkRFVEVSTUlORUQQv+EeQusBCiJjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LmVudW1zQhFBZ2VSYW5nZVR5cGVQcm90b1ABWkNnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE3L2VudW1zO2VudW1zogIDR0FBqgIeR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE3LkVudW1zygIeR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE3XEVudW1z6gIiR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE3OjpFbnVtc2IGcHJvdG8z");

/**
 * Container for enum describing the type of demographic age ranges.
 *
 * @generated from message google.ads.googleads.v17.enums.AgeRangeTypeEnum
 */
export type AgeRangeTypeEnum = Message<"google.ads.googleads.v17.enums.AgeRangeTypeEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.enums.AgeRangeTypeEnum.
 * Use `create(AgeRangeTypeEnumSchema)` to create a new message.
 */
export const AgeRangeTypeEnumSchema: GenMessage<AgeRangeTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_enums_age_range_type, 0);

/**
 * The type of demographic age ranges (for example, between 18 and 24 years
 * old).
 *
 * @generated from enum google.ads.googleads.v17.enums.AgeRangeTypeEnum.AgeRangeType
 */
export enum AgeRangeTypeEnum_AgeRangeType {
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
   * Between 18 and 24 years old.
   *
   * @generated from enum value: AGE_RANGE_18_24 = 503001;
   */
  AGE_RANGE_18_24 = 503001,

  /**
   * Between 25 and 34 years old.
   *
   * @generated from enum value: AGE_RANGE_25_34 = 503002;
   */
  AGE_RANGE_25_34 = 503002,

  /**
   * Between 35 and 44 years old.
   *
   * @generated from enum value: AGE_RANGE_35_44 = 503003;
   */
  AGE_RANGE_35_44 = 503003,

  /**
   * Between 45 and 54 years old.
   *
   * @generated from enum value: AGE_RANGE_45_54 = 503004;
   */
  AGE_RANGE_45_54 = 503004,

  /**
   * Between 55 and 64 years old.
   *
   * @generated from enum value: AGE_RANGE_55_64 = 503005;
   */
  AGE_RANGE_55_64 = 503005,

  /**
   * 65 years old and beyond.
   *
   * @generated from enum value: AGE_RANGE_65_UP = 503006;
   */
  AGE_RANGE_65_UP = 503006,

  /**
   * Undetermined age range.
   *
   * @generated from enum value: AGE_RANGE_UNDETERMINED = 503999;
   */
  AGE_RANGE_UNDETERMINED = 503999,
}

/**
 * Describes the enum google.ads.googleads.v17.enums.AgeRangeTypeEnum.AgeRangeType.
 */
export const AgeRangeTypeEnum_AgeRangeTypeSchema: GenEnum<AgeRangeTypeEnum_AgeRangeType> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_enums_age_range_type, 0, 0);
