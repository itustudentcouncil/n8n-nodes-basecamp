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
// @generated from file google/ads/googleads/v16/enums/keyword_plan_aggregate_metric_type.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/keyword_plan_aggregate_metric_type.proto.
 */
export const file_google_ads_googleads_v16_enums_keyword_plan_aggregate_metric_type: GenFile = /*@__PURE__*/
  fileDesc("Ckdnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMva2V5d29yZF9wbGFuX2FnZ3JlZ2F0ZV9tZXRyaWNfdHlwZS5wcm90bxIeZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zInAKIktleXdvcmRQbGFuQWdncmVnYXRlTWV0cmljVHlwZUVudW0iSgoeS2V5d29yZFBsYW5BZ2dyZWdhdGVNZXRyaWNUeXBlEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEgoKBkRFVklDRRACQv0BCiJjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zQiNLZXl3b3JkUGxhbkFnZ3JlZ2F0ZU1ldHJpY1R5cGVQcm90b1ABWkNnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L2VudW1zO2VudW1zogIDR0FBqgIeR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LkVudW1zygIeR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XEVudW1z6gIiR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE2OjpFbnVtc2IGcHJvdG8z");

/**
 * The enumeration of keyword plan aggregate metric types.
 *
 * @generated from message google.ads.googleads.v16.enums.KeywordPlanAggregateMetricTypeEnum
 */
export type KeywordPlanAggregateMetricTypeEnum = Message<"google.ads.googleads.v16.enums.KeywordPlanAggregateMetricTypeEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.KeywordPlanAggregateMetricTypeEnum.
 * Use `create(KeywordPlanAggregateMetricTypeEnumSchema)` to create a new message.
 */
export const KeywordPlanAggregateMetricTypeEnumSchema: GenMessage<KeywordPlanAggregateMetricTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_keyword_plan_aggregate_metric_type, 0);

/**
 * Aggregate fields.
 *
 * @generated from enum google.ads.googleads.v16.enums.KeywordPlanAggregateMetricTypeEnum.KeywordPlanAggregateMetricType
 */
export enum KeywordPlanAggregateMetricTypeEnum_KeywordPlanAggregateMetricType {
  /**
   * Not specified.
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
   * The device breakdown of aggregate search volume.
   *
   * @generated from enum value: DEVICE = 2;
   */
  DEVICE = 2,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.KeywordPlanAggregateMetricTypeEnum.KeywordPlanAggregateMetricType.
 */
export const KeywordPlanAggregateMetricTypeEnum_KeywordPlanAggregateMetricTypeSchema: GenEnum<KeywordPlanAggregateMetricTypeEnum_KeywordPlanAggregateMetricType> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_keyword_plan_aggregate_metric_type, 0, 0);
