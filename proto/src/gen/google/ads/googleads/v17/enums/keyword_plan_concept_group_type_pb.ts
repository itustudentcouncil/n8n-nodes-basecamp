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
// @generated from file google/ads/googleads/v17/enums/keyword_plan_concept_group_type.proto (package google.ads.googleads.v17.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/enums/keyword_plan_concept_group_type.proto.
 */
export const file_google_ads_googleads_v17_enums_keyword_plan_concept_group_type: GenFile = /*@__PURE__*/
  fileDesc("CkRnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZW51bXMva2V5d29yZF9wbGFuX2NvbmNlcHRfZ3JvdXBfdHlwZS5wcm90bxIeZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LmVudW1zIooBCh9LZXl3b3JkUGxhbkNvbmNlcHRHcm91cFR5cGVFbnVtImcKG0tleXdvcmRQbGFuQ29uY2VwdEdyb3VwVHlwZRIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIJCgVCUkFORBACEhAKDE9USEVSX0JSQU5EUxADEg0KCU5PTl9CUkFORBAEQvoBCiJjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LmVudW1zQiBLZXl3b3JkUGxhbkNvbmNlcHRHcm91cFR5cGVQcm90b1ABWkNnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE3L2VudW1zO2VudW1zogIDR0FBqgIeR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE3LkVudW1zygIeR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE3XEVudW1z6gIiR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE3OjpFbnVtc2IGcHJvdG8z");

/**
 * Container for enumeration of keyword plan concept group types.
 *
 * @generated from message google.ads.googleads.v17.enums.KeywordPlanConceptGroupTypeEnum
 */
export type KeywordPlanConceptGroupTypeEnum = Message<"google.ads.googleads.v17.enums.KeywordPlanConceptGroupTypeEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.enums.KeywordPlanConceptGroupTypeEnum.
 * Use `create(KeywordPlanConceptGroupTypeEnumSchema)` to create a new message.
 */
export const KeywordPlanConceptGroupTypeEnumSchema: GenMessage<KeywordPlanConceptGroupTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_enums_keyword_plan_concept_group_type, 0);

/**
 * Enumerates keyword plan concept group types.
 *
 * @generated from enum google.ads.googleads.v17.enums.KeywordPlanConceptGroupTypeEnum.KeywordPlanConceptGroupType
 */
export enum KeywordPlanConceptGroupTypeEnum_KeywordPlanConceptGroupType {
  /**
   * The concept group classification different from brand/non-brand.
   * This is a catch all bucket for all classifications that are none of the
   * below.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The value is unknown in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * The concept group classification is based on BRAND.
   *
   * @generated from enum value: BRAND = 2;
   */
  BRAND = 2,

  /**
   * The concept group classification based on BRAND, that didn't fit well
   * with the BRAND classifications. These are generally outliers and can have
   * very few keywords in this type of classification.
   *
   * @generated from enum value: OTHER_BRANDS = 3;
   */
  OTHER_BRANDS = 3,

  /**
   * These concept group classification is not based on BRAND. This is
   * returned for generic keywords that don't have a brand association.
   *
   * @generated from enum value: NON_BRAND = 4;
   */
  NON_BRAND = 4,
}

/**
 * Describes the enum google.ads.googleads.v17.enums.KeywordPlanConceptGroupTypeEnum.KeywordPlanConceptGroupType.
 */
export const KeywordPlanConceptGroupTypeEnum_KeywordPlanConceptGroupTypeSchema: GenEnum<KeywordPlanConceptGroupTypeEnum_KeywordPlanConceptGroupType> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_enums_keyword_plan_concept_group_type, 0, 0);
