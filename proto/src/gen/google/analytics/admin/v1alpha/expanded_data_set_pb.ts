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
// @generated from file google/analytics/admin/v1alpha/expanded_data_set.proto (package google.analytics.admin.v1alpha, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/analytics/admin/v1alpha/expanded_data_set.proto.
 */
export const file_google_analytics_admin_v1alpha_expanded_data_set: GenFile = /*@__PURE__*/
  fileDesc("CjZnb29nbGUvYW5hbHl0aWNzL2FkbWluL3YxYWxwaGEvZXhwYW5kZWRfZGF0YV9zZXQucHJvdG8SHmdvb2dsZS5hbmFseXRpY3MuYWRtaW4udjFhbHBoYSKmBAoVRXhwYW5kZWREYXRhU2V0RmlsdGVyElsKDXN0cmluZ19maWx0ZXIYAiABKAsyQi5nb29nbGUuYW5hbHl0aWNzLmFkbWluLnYxYWxwaGEuRXhwYW5kZWREYXRhU2V0RmlsdGVyLlN0cmluZ0ZpbHRlckgAElwKDmluX2xpc3RfZmlsdGVyGAMgASgLMkIuZ29vZ2xlLmFuYWx5dGljcy5hZG1pbi52MWFscGhhLkV4cGFuZGVkRGF0YVNldEZpbHRlci5Jbkxpc3RGaWx0ZXJIABIXCgpmaWVsZF9uYW1lGAEgASgJQgPgQQIa6AEKDFN0cmluZ0ZpbHRlchJlCgptYXRjaF90eXBlGAEgASgOMkwuZ29vZ2xlLmFuYWx5dGljcy5hZG1pbi52MWFscGhhLkV4cGFuZGVkRGF0YVNldEZpbHRlci5TdHJpbmdGaWx0ZXIuTWF0Y2hUeXBlQgPgQQISEgoFdmFsdWUYAiABKAlCA+BBAhIbCg5jYXNlX3NlbnNpdGl2ZRgDIAEoCEID4EEBIkAKCU1hdGNoVHlwZRIaChZNQVRDSF9UWVBFX1VOU1BFQ0lGSUVEEAASCQoFRVhBQ1QQARIMCghDT05UQUlOUxACGkAKDEluTGlzdEZpbHRlchITCgZ2YWx1ZXMYASADKAlCA+BBAhIbCg5jYXNlX3NlbnNpdGl2ZRgCIAEoCEID4EEBQgwKCm9uZV9maWx0ZXIipwIKH0V4cGFuZGVkRGF0YVNldEZpbHRlckV4cHJlc3Npb24SWAoJYW5kX2dyb3VwGAEgASgLMkMuZ29vZ2xlLmFuYWx5dGljcy5hZG1pbi52MWFscGhhLkV4cGFuZGVkRGF0YVNldEZpbHRlckV4cHJlc3Npb25MaXN0SAASWQoObm90X2V4cHJlc3Npb24YAiABKAsyPy5nb29nbGUuYW5hbHl0aWNzLmFkbWluLnYxYWxwaGEuRXhwYW5kZWREYXRhU2V0RmlsdGVyRXhwcmVzc2lvbkgAEkcKBmZpbHRlchgDIAEoCzI1Lmdvb2dsZS5hbmFseXRpY3MuYWRtaW4udjFhbHBoYS5FeHBhbmRlZERhdGFTZXRGaWx0ZXJIAEIGCgRleHByIoIBCiNFeHBhbmRlZERhdGFTZXRGaWx0ZXJFeHByZXNzaW9uTGlzdBJbChJmaWx0ZXJfZXhwcmVzc2lvbnMYASADKAsyPy5nb29nbGUuYW5hbHl0aWNzLmFkbWluLnYxYWxwaGEuRXhwYW5kZWREYXRhU2V0RmlsdGVyRXhwcmVzc2lvbiKyAwoPRXhwYW5kZWREYXRhU2V0EhEKBG5hbWUYASABKAlCA+BBAxIZCgxkaXNwbGF5X25hbWUYAiABKAlCA+BBAhIYCgtkZXNjcmlwdGlvbhgDIAEoCUID4EEBEhwKD2RpbWVuc2lvbl9uYW1lcxgEIAMoCUID4EEFEhkKDG1ldHJpY19uYW1lcxgFIAMoCUID4EEFEmkKG2RpbWVuc2lvbl9maWx0ZXJfZXhwcmVzc2lvbhgGIAEoCzI/Lmdvb2dsZS5hbmFseXRpY3MuYWRtaW4udjFhbHBoYS5FeHBhbmRlZERhdGFTZXRGaWx0ZXJFeHByZXNzaW9uQgPgQQUSQwoaZGF0YV9jb2xsZWN0aW9uX3N0YXJ0X3RpbWUYByABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQM6bupBawotYW5hbHl0aWNzYWRtaW4uZ29vZ2xlYXBpcy5jb20vRXhwYW5kZWREYXRhU2V0Ejpwcm9wZXJ0aWVzL3twcm9wZXJ0eX0vZXhwYW5kZWREYXRhU2V0cy97ZXhwYW5kZWRfZGF0YV9zZXR9QnwKImNvbS5nb29nbGUuYW5hbHl0aWNzLmFkbWluLnYxYWxwaGFCFEV4cGFuZGVkRGF0YVNldFByb3RvUAFaPmNsb3VkLmdvb2dsZS5jb20vZ28vYW5hbHl0aWNzL2FkbWluL2FwaXYxYWxwaGEvYWRtaW5wYjthZG1pbnBiYgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp]);

/**
 * A specific filter for a single dimension
 *
 * @generated from message google.analytics.admin.v1alpha.ExpandedDataSetFilter
 */
export type ExpandedDataSetFilter = Message<"google.analytics.admin.v1alpha.ExpandedDataSetFilter"> & {
  /**
   * One of the above filters.
   *
   * @generated from oneof google.analytics.admin.v1alpha.ExpandedDataSetFilter.one_filter
   */
  oneFilter: {
    /**
     * A filter for a string-type dimension that matches a particular pattern.
     *
     * @generated from field: google.analytics.admin.v1alpha.ExpandedDataSetFilter.StringFilter string_filter = 2;
     */
    value: ExpandedDataSetFilter_StringFilter;
    case: "stringFilter";
  } | {
    /**
     * A filter for a string dimension that matches a particular list of
     * options.
     *
     * @generated from field: google.analytics.admin.v1alpha.ExpandedDataSetFilter.InListFilter in_list_filter = 3;
     */
    value: ExpandedDataSetFilter_InListFilter;
    case: "inListFilter";
  } | { case: undefined; value?: undefined };

  /**
   * Required. The dimension name to filter.
   *
   * @generated from field: string field_name = 1;
   */
  fieldName: string;
};

/**
 * Describes the message google.analytics.admin.v1alpha.ExpandedDataSetFilter.
 * Use `create(ExpandedDataSetFilterSchema)` to create a new message.
 */
export const ExpandedDataSetFilterSchema: GenMessage<ExpandedDataSetFilter> = /*@__PURE__*/
  messageDesc(file_google_analytics_admin_v1alpha_expanded_data_set, 0);

/**
 * A filter for a string-type dimension that matches a particular pattern.
 *
 * @generated from message google.analytics.admin.v1alpha.ExpandedDataSetFilter.StringFilter
 */
export type ExpandedDataSetFilter_StringFilter = Message<"google.analytics.admin.v1alpha.ExpandedDataSetFilter.StringFilter"> & {
  /**
   * Required. The match type for the string filter.
   *
   * @generated from field: google.analytics.admin.v1alpha.ExpandedDataSetFilter.StringFilter.MatchType match_type = 1;
   */
  matchType: ExpandedDataSetFilter_StringFilter_MatchType;

  /**
   * Required. The string value to be matched against.
   *
   * @generated from field: string value = 2;
   */
  value: string;

  /**
   * Optional. If true, the match is case-sensitive. If false, the match is
   * case-insensitive.
   * Must be true when match_type is EXACT.
   * Must be false when match_type is CONTAINS.
   *
   * @generated from field: bool case_sensitive = 3;
   */
  caseSensitive: boolean;
};

/**
 * Describes the message google.analytics.admin.v1alpha.ExpandedDataSetFilter.StringFilter.
 * Use `create(ExpandedDataSetFilter_StringFilterSchema)` to create a new message.
 */
export const ExpandedDataSetFilter_StringFilterSchema: GenMessage<ExpandedDataSetFilter_StringFilter> = /*@__PURE__*/
  messageDesc(file_google_analytics_admin_v1alpha_expanded_data_set, 0, 0);

/**
 * The match type for the string filter.
 *
 * @generated from enum google.analytics.admin.v1alpha.ExpandedDataSetFilter.StringFilter.MatchType
 */
export enum ExpandedDataSetFilter_StringFilter_MatchType {
  /**
   * Unspecified
   *
   * @generated from enum value: MATCH_TYPE_UNSPECIFIED = 0;
   */
  MATCH_TYPE_UNSPECIFIED = 0,

  /**
   * Exact match of the string value.
   *
   * @generated from enum value: EXACT = 1;
   */
  EXACT = 1,

  /**
   * Contains the string value.
   *
   * @generated from enum value: CONTAINS = 2;
   */
  CONTAINS = 2,
}

/**
 * Describes the enum google.analytics.admin.v1alpha.ExpandedDataSetFilter.StringFilter.MatchType.
 */
export const ExpandedDataSetFilter_StringFilter_MatchTypeSchema: GenEnum<ExpandedDataSetFilter_StringFilter_MatchType> = /*@__PURE__*/
  enumDesc(file_google_analytics_admin_v1alpha_expanded_data_set, 0, 0, 0);

/**
 * A filter for a string dimension that matches a particular list of options.
 *
 * @generated from message google.analytics.admin.v1alpha.ExpandedDataSetFilter.InListFilter
 */
export type ExpandedDataSetFilter_InListFilter = Message<"google.analytics.admin.v1alpha.ExpandedDataSetFilter.InListFilter"> & {
  /**
   * Required. The list of possible string values to match against. Must be
   * non-empty.
   *
   * @generated from field: repeated string values = 1;
   */
  values: string[];

  /**
   * Optional. If true, the match is case-sensitive. If false, the match is
   * case-insensitive.
   * Must be true.
   *
   * @generated from field: bool case_sensitive = 2;
   */
  caseSensitive: boolean;
};

/**
 * Describes the message google.analytics.admin.v1alpha.ExpandedDataSetFilter.InListFilter.
 * Use `create(ExpandedDataSetFilter_InListFilterSchema)` to create a new message.
 */
export const ExpandedDataSetFilter_InListFilterSchema: GenMessage<ExpandedDataSetFilter_InListFilter> = /*@__PURE__*/
  messageDesc(file_google_analytics_admin_v1alpha_expanded_data_set, 0, 1);

/**
 * A logical expression of EnhancedDataSet dimension filters.
 *
 * @generated from message google.analytics.admin.v1alpha.ExpandedDataSetFilterExpression
 */
export type ExpandedDataSetFilterExpression = Message<"google.analytics.admin.v1alpha.ExpandedDataSetFilterExpression"> & {
  /**
   * The expression applied to a filter.
   *
   * @generated from oneof google.analytics.admin.v1alpha.ExpandedDataSetFilterExpression.expr
   */
  expr: {
    /**
     * A list of expressions to be AND’ed together. It must contain a
     * ExpandedDataSetFilterExpression with either not_expression or
     * dimension_filter. This must be set for the top level
     * ExpandedDataSetFilterExpression.
     *
     * @generated from field: google.analytics.admin.v1alpha.ExpandedDataSetFilterExpressionList and_group = 1;
     */
    value: ExpandedDataSetFilterExpressionList;
    case: "andGroup";
  } | {
    /**
     * A filter expression to be NOT'ed (that is, inverted, complemented). It
     * must include a dimension_filter. This cannot be set on the
     * top level ExpandedDataSetFilterExpression.
     *
     * @generated from field: google.analytics.admin.v1alpha.ExpandedDataSetFilterExpression not_expression = 2;
     */
    value: ExpandedDataSetFilterExpression;
    case: "notExpression";
  } | {
    /**
     * A filter on a single dimension. This cannot be set on the top
     * level ExpandedDataSetFilterExpression.
     *
     * @generated from field: google.analytics.admin.v1alpha.ExpandedDataSetFilter filter = 3;
     */
    value: ExpandedDataSetFilter;
    case: "filter";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.analytics.admin.v1alpha.ExpandedDataSetFilterExpression.
 * Use `create(ExpandedDataSetFilterExpressionSchema)` to create a new message.
 */
export const ExpandedDataSetFilterExpressionSchema: GenMessage<ExpandedDataSetFilterExpression> = /*@__PURE__*/
  messageDesc(file_google_analytics_admin_v1alpha_expanded_data_set, 1);

/**
 * A list of ExpandedDataSet filter expressions.
 *
 * @generated from message google.analytics.admin.v1alpha.ExpandedDataSetFilterExpressionList
 */
export type ExpandedDataSetFilterExpressionList = Message<"google.analytics.admin.v1alpha.ExpandedDataSetFilterExpressionList"> & {
  /**
   * A list of ExpandedDataSet filter expressions.
   *
   * @generated from field: repeated google.analytics.admin.v1alpha.ExpandedDataSetFilterExpression filter_expressions = 1;
   */
  filterExpressions: ExpandedDataSetFilterExpression[];
};

/**
 * Describes the message google.analytics.admin.v1alpha.ExpandedDataSetFilterExpressionList.
 * Use `create(ExpandedDataSetFilterExpressionListSchema)` to create a new message.
 */
export const ExpandedDataSetFilterExpressionListSchema: GenMessage<ExpandedDataSetFilterExpressionList> = /*@__PURE__*/
  messageDesc(file_google_analytics_admin_v1alpha_expanded_data_set, 2);

/**
 * A resource message representing a GA4 ExpandedDataSet.
 *
 * @generated from message google.analytics.admin.v1alpha.ExpandedDataSet
 */
export type ExpandedDataSet = Message<"google.analytics.admin.v1alpha.ExpandedDataSet"> & {
  /**
   * Output only. The resource name for this ExpandedDataSet resource.
   * Format: properties/{property_id}/expandedDataSets/{expanded_data_set}
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The display name of the ExpandedDataSet.
   * Max 200 chars.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Optional. The description of the ExpandedDataSet.
   * Max 50 chars.
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * Immutable. The list of dimensions included in the ExpandedDataSet.
   * See the [API
   * Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions)
   * for the list of dimension names.
   *
   * @generated from field: repeated string dimension_names = 4;
   */
  dimensionNames: string[];

  /**
   * Immutable. The list of metrics included in the ExpandedDataSet.
   * See the [API
   * Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics)
   * for the list of dimension names.
   *
   * @generated from field: repeated string metric_names = 5;
   */
  metricNames: string[];

  /**
   * Immutable. A logical expression of ExpandedDataSet filters applied to
   * dimension included in the ExpandedDataSet. This filter is used to reduce
   * the number of rows and thus the chance of encountering `other` row.
   *
   * @generated from field: google.analytics.admin.v1alpha.ExpandedDataSetFilterExpression dimension_filter_expression = 6;
   */
  dimensionFilterExpression?: ExpandedDataSetFilterExpression;

  /**
   * Output only. Time when expanded data set began (or will begin) collecing
   * data.
   *
   * @generated from field: google.protobuf.Timestamp data_collection_start_time = 7;
   */
  dataCollectionStartTime?: Timestamp;
};

/**
 * Describes the message google.analytics.admin.v1alpha.ExpandedDataSet.
 * Use `create(ExpandedDataSetSchema)` to create a new message.
 */
export const ExpandedDataSetSchema: GenMessage<ExpandedDataSet> = /*@__PURE__*/
  messageDesc(file_google_analytics_admin_v1alpha_expanded_data_set, 3);
