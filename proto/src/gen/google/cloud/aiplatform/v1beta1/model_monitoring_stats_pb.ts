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
// @generated from file google/cloud/aiplatform/v1beta1/model_monitoring_stats.proto (package google.cloud.aiplatform.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp, Value } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_struct, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/model_monitoring_stats.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_model_monitoring_stats: GenFile = /*@__PURE__*/
  fileDesc("Cjxnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL21vZGVsX21vbml0b3Jpbmdfc3RhdHMucHJvdG8SH2dvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEidgoUTW9kZWxNb25pdG9yaW5nU3RhdHMSVQoNdGFidWxhcl9zdGF0cxgBIAEoCzI8Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuTW9kZWxNb25pdG9yaW5nVGFidWxhclN0YXRzSABCBwoFc3RhdHMinAUKHU1vZGVsTW9uaXRvcmluZ1N0YXRzRGF0YVBvaW50EmAKDWN1cnJlbnRfc3RhdHMYASABKAsySS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLk1vZGVsTW9uaXRvcmluZ1N0YXRzRGF0YVBvaW50LlR5cGVkVmFsdWUSYQoOYmFzZWxpbmVfc3RhdHMYAiABKAsySS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLk1vZGVsTW9uaXRvcmluZ1N0YXRzRGF0YVBvaW50LlR5cGVkVmFsdWUSFwoPdGhyZXNob2xkX3ZhbHVlGAMgASgBEhMKC2hhc19hbm9tYWx5GAQgASgIEhwKFG1vZGVsX21vbml0b3Jpbmdfam9iGAUgASgJEhAKCHNjaGVkdWxlGAYgASgJEi8KC2NyZWF0ZV90aW1lGAcgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIRCglhbGdvcml0aG0YCCABKAkakwIKClR5cGVkVmFsdWUSFgoMZG91YmxlX3ZhbHVlGAEgASgBSAASfQoSZGlzdHJpYnV0aW9uX3ZhbHVlGAIgASgLMl8uZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5Nb2RlbE1vbml0b3JpbmdTdGF0c0RhdGFQb2ludC5UeXBlZFZhbHVlLkRpc3RyaWJ1dGlvbkRhdGFWYWx1ZUgAGmUKFURpc3RyaWJ1dGlvbkRhdGFWYWx1ZRIsCgxkaXN0cmlidXRpb24YASABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWUSHgoWZGlzdHJpYnV0aW9uX2RldmlhdGlvbhgCIAEoAUIHCgV2YWx1ZSKeAQobTW9kZWxNb25pdG9yaW5nVGFidWxhclN0YXRzEhIKCnN0YXRzX25hbWUYASABKAkSFgoOb2JqZWN0aXZlX3R5cGUYAiABKAkSUwoLZGF0YV9wb2ludHMYAyADKAsyPi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLk1vZGVsTW9uaXRvcmluZ1N0YXRzRGF0YVBvaW50IrkCCiBTZWFyY2hNb2RlbE1vbml0b3JpbmdTdGF0c0ZpbHRlchJ0ChR0YWJ1bGFyX3N0YXRzX2ZpbHRlchgBIAEoCzJULmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuU2VhcmNoTW9kZWxNb25pdG9yaW5nU3RhdHNGaWx0ZXIuVGFidWxhclN0YXRzRmlsdGVySAAalAEKElRhYnVsYXJTdGF0c0ZpbHRlchISCgpzdGF0c19uYW1lGAEgASgJEhYKDm9iamVjdGl2ZV90eXBlGAIgASgJEhwKFG1vZGVsX21vbml0b3Jpbmdfam9iGAMgASgJEiEKGW1vZGVsX21vbml0b3Jpbmdfc2NoZWR1bGUYBCABKAkSEQoJYWxnb3JpdGhtGAUgASgJQggKBmZpbHRlckLwAQojY29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTFCGU1vZGVsTW9uaXRvcmluZ1N0YXRzUHJvdG9QAVpDY2xvdWQuZ29vZ2xlLmNvbS9nby9haXBsYXRmb3JtL2FwaXYxYmV0YTEvYWlwbGF0Zm9ybXBiO2FpcGxhdGZvcm1wYqoCH0dvb2dsZS5DbG91ZC5BSVBsYXRmb3JtLlYxQmV0YTHKAh9Hb29nbGVcQ2xvdWRcQUlQbGF0Zm9ybVxWMWJldGEx6gIiR29vZ2xlOjpDbG91ZDo6QUlQbGF0Zm9ybTo6VjFiZXRhMWIGcHJvdG8z", [file_google_protobuf_struct, file_google_protobuf_timestamp]);

/**
 * Represents the collection of statistics for a metric.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ModelMonitoringStats
 */
export type ModelMonitoringStats = Message<"google.cloud.aiplatform.v1beta1.ModelMonitoringStats"> & {
  /**
   * @generated from oneof google.cloud.aiplatform.v1beta1.ModelMonitoringStats.stats
   */
  stats: {
    /**
     * Generated tabular statistics.
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.ModelMonitoringTabularStats tabular_stats = 1;
     */
    value: ModelMonitoringTabularStats;
    case: "tabularStats";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ModelMonitoringStats.
 * Use `create(ModelMonitoringStatsSchema)` to create a new message.
 */
export const ModelMonitoringStatsSchema: GenMessage<ModelMonitoringStats> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_model_monitoring_stats, 0);

/**
 * Represents a single statistics data point.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ModelMonitoringStatsDataPoint
 */
export type ModelMonitoringStatsDataPoint = Message<"google.cloud.aiplatform.v1beta1.ModelMonitoringStatsDataPoint"> & {
  /**
   * Statistics from current dataset.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.ModelMonitoringStatsDataPoint.TypedValue current_stats = 1;
   */
  currentStats?: ModelMonitoringStatsDataPoint_TypedValue;

  /**
   * Statistics from baseline dataset.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.ModelMonitoringStatsDataPoint.TypedValue baseline_stats = 2;
   */
  baselineStats?: ModelMonitoringStatsDataPoint_TypedValue;

  /**
   * Threshold value.
   *
   * @generated from field: double threshold_value = 3;
   */
  thresholdValue: number;

  /**
   * Indicate if the statistics has anomaly.
   *
   * @generated from field: bool has_anomaly = 4;
   */
  hasAnomaly: boolean;

  /**
   * Model monitoring job resource name.
   *
   * @generated from field: string model_monitoring_job = 5;
   */
  modelMonitoringJob: string;

  /**
   * Schedule resource name.
   *
   * @generated from field: string schedule = 6;
   */
  schedule: string;

  /**
   * Statistics create time.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 7;
   */
  createTime?: Timestamp;

  /**
   * Algorithm used to calculated the metrics, eg: jensen_shannon_divergence,
   * l_infinity.
   *
   * @generated from field: string algorithm = 8;
   */
  algorithm: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ModelMonitoringStatsDataPoint.
 * Use `create(ModelMonitoringStatsDataPointSchema)` to create a new message.
 */
export const ModelMonitoringStatsDataPointSchema: GenMessage<ModelMonitoringStatsDataPoint> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_model_monitoring_stats, 1);

/**
 * Typed value of the statistics.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ModelMonitoringStatsDataPoint.TypedValue
 */
export type ModelMonitoringStatsDataPoint_TypedValue = Message<"google.cloud.aiplatform.v1beta1.ModelMonitoringStatsDataPoint.TypedValue"> & {
  /**
   * The typed value.
   *
   * @generated from oneof google.cloud.aiplatform.v1beta1.ModelMonitoringStatsDataPoint.TypedValue.value
   */
  value: {
    /**
     * Double.
     *
     * @generated from field: double double_value = 1;
     */
    value: number;
    case: "doubleValue";
  } | {
    /**
     * Distribution.
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.ModelMonitoringStatsDataPoint.TypedValue.DistributionDataValue distribution_value = 2;
     */
    value: ModelMonitoringStatsDataPoint_TypedValue_DistributionDataValue;
    case: "distributionValue";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ModelMonitoringStatsDataPoint.TypedValue.
 * Use `create(ModelMonitoringStatsDataPoint_TypedValueSchema)` to create a new message.
 */
export const ModelMonitoringStatsDataPoint_TypedValueSchema: GenMessage<ModelMonitoringStatsDataPoint_TypedValue> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_model_monitoring_stats, 1, 0);

/**
 * Summary statistics for a population of values.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ModelMonitoringStatsDataPoint.TypedValue.DistributionDataValue
 */
export type ModelMonitoringStatsDataPoint_TypedValue_DistributionDataValue = Message<"google.cloud.aiplatform.v1beta1.ModelMonitoringStatsDataPoint.TypedValue.DistributionDataValue"> & {
  /**
   * Predictive monitoring drift distribution in
   * `tensorflow.metadata.v0.DatasetFeatureStatistics` format.
   *
   * @generated from field: google.protobuf.Value distribution = 1;
   */
  distribution?: Value;

  /**
   * Distribution distance deviation from the current dataset's statistics
   * to baseline dataset's statistics.
   *   * For categorical feature, the distribution distance is calculated
   *     by L-inifinity norm or Jensen–Shannon divergence.
   *   * For numerical feature, the distribution distance is calculated by
   *     Jensen–Shannon divergence.
   *
   * @generated from field: double distribution_deviation = 2;
   */
  distributionDeviation: number;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ModelMonitoringStatsDataPoint.TypedValue.DistributionDataValue.
 * Use `create(ModelMonitoringStatsDataPoint_TypedValue_DistributionDataValueSchema)` to create a new message.
 */
export const ModelMonitoringStatsDataPoint_TypedValue_DistributionDataValueSchema: GenMessage<ModelMonitoringStatsDataPoint_TypedValue_DistributionDataValue> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_model_monitoring_stats, 1, 0, 0);

/**
 * A collection of data points that describes the time-varying values of a
 * tabular metric.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ModelMonitoringTabularStats
 */
export type ModelMonitoringTabularStats = Message<"google.cloud.aiplatform.v1beta1.ModelMonitoringTabularStats"> & {
  /**
   * The stats name.
   *
   * @generated from field: string stats_name = 1;
   */
  statsName: string;

  /**
   * One of the supported monitoring objectives:
   * `raw-feature-drift`
   * `prediction-output-drift`
   * `feature-attribution`
   *
   * @generated from field: string objective_type = 2;
   */
  objectiveType: string;

  /**
   * The data points of this time series. When listing time series, points are
   * returned in reverse time order.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.ModelMonitoringStatsDataPoint data_points = 3;
   */
  dataPoints: ModelMonitoringStatsDataPoint[];
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ModelMonitoringTabularStats.
 * Use `create(ModelMonitoringTabularStatsSchema)` to create a new message.
 */
export const ModelMonitoringTabularStatsSchema: GenMessage<ModelMonitoringTabularStats> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_model_monitoring_stats, 2);

/**
 * Filter for searching ModelMonitoringStats.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.SearchModelMonitoringStatsFilter
 */
export type SearchModelMonitoringStatsFilter = Message<"google.cloud.aiplatform.v1beta1.SearchModelMonitoringStatsFilter"> & {
  /**
   * @generated from oneof google.cloud.aiplatform.v1beta1.SearchModelMonitoringStatsFilter.filter
   */
  filter: {
    /**
     * Tabular statistics filter.
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.SearchModelMonitoringStatsFilter.TabularStatsFilter tabular_stats_filter = 1;
     */
    value: SearchModelMonitoringStatsFilter_TabularStatsFilter;
    case: "tabularStatsFilter";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.SearchModelMonitoringStatsFilter.
 * Use `create(SearchModelMonitoringStatsFilterSchema)` to create a new message.
 */
export const SearchModelMonitoringStatsFilterSchema: GenMessage<SearchModelMonitoringStatsFilter> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_model_monitoring_stats, 3);

/**
 * Tabular statistics filter.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.SearchModelMonitoringStatsFilter.TabularStatsFilter
 */
export type SearchModelMonitoringStatsFilter_TabularStatsFilter = Message<"google.cloud.aiplatform.v1beta1.SearchModelMonitoringStatsFilter.TabularStatsFilter"> & {
  /**
   * If not specified, will return all the stats_names.
   *
   * @generated from field: string stats_name = 1;
   */
  statsName: string;

  /**
   * One of the supported monitoring objectives:
   * `raw-feature-drift`
   * `prediction-output-drift`
   * `feature-attribution`
   *
   * @generated from field: string objective_type = 2;
   */
  objectiveType: string;

  /**
   * From a particular monitoring job.
   *
   * @generated from field: string model_monitoring_job = 3;
   */
  modelMonitoringJob: string;

  /**
   * From a particular monitoring schedule.
   *
   * @generated from field: string model_monitoring_schedule = 4;
   */
  modelMonitoringSchedule: string;

  /**
   * Specify the algorithm type used for distance calculation, eg:
   * jensen_shannon_divergence, l_infinity.
   *
   * @generated from field: string algorithm = 5;
   */
  algorithm: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.SearchModelMonitoringStatsFilter.TabularStatsFilter.
 * Use `create(SearchModelMonitoringStatsFilter_TabularStatsFilterSchema)` to create a new message.
 */
export const SearchModelMonitoringStatsFilter_TabularStatsFilterSchema: GenMessage<SearchModelMonitoringStatsFilter_TabularStatsFilter> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_model_monitoring_stats, 3, 0);
