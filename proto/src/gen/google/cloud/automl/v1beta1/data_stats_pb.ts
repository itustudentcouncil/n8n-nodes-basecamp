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
// @generated from file google/cloud/automl/v1beta1/data_stats.proto (package google.cloud.automl.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/automl/v1beta1/data_stats.proto.
 */
export const file_google_cloud_automl_v1beta1_data_stats: GenFile = /*@__PURE__*/
  fileDesc("Cixnb29nbGUvY2xvdWQvYXV0b21sL3YxYmV0YTEvZGF0YV9zdGF0cy5wcm90bxIbZ29vZ2xlLmNsb3VkLmF1dG9tbC52MWJldGExIv0DCglEYXRhU3RhdHMSQgoNZmxvYXQ2NF9zdGF0cxgDIAEoCzIpLmdvb2dsZS5jbG91ZC5hdXRvbWwudjFiZXRhMS5GbG9hdDY0U3RhdHNIABJACgxzdHJpbmdfc3RhdHMYBCABKAsyKC5nb29nbGUuY2xvdWQuYXV0b21sLnYxYmV0YTEuU3RyaW5nU3RhdHNIABJGCg90aW1lc3RhbXBfc3RhdHMYBSABKAsyKy5nb29nbGUuY2xvdWQuYXV0b21sLnYxYmV0YTEuVGltZXN0YW1wU3RhdHNIABI+CgthcnJheV9zdGF0cxgGIAEoCzInLmdvb2dsZS5jbG91ZC5hdXRvbWwudjFiZXRhMS5BcnJheVN0YXRzSAASQAoMc3RydWN0X3N0YXRzGAcgASgLMiguZ29vZ2xlLmNsb3VkLmF1dG9tbC52MWJldGExLlN0cnVjdFN0YXRzSAASRAoOY2F0ZWdvcnlfc3RhdHMYCCABKAsyKi5nb29nbGUuY2xvdWQuYXV0b21sLnYxYmV0YTEuQ2F0ZWdvcnlTdGF0c0gAEhwKFGRpc3RpbmN0X3ZhbHVlX2NvdW50GAEgASgDEhgKEG51bGxfdmFsdWVfY291bnQYAiABKAMSGQoRdmFsaWRfdmFsdWVfY291bnQYCSABKANCBwoFc3RhdHMi3QEKDEZsb2F0NjRTdGF0cxIMCgRtZWFuGAEgASgBEhoKEnN0YW5kYXJkX2RldmlhdGlvbhgCIAEoARIRCglxdWFudGlsZXMYAyADKAESVAoRaGlzdG9ncmFtX2J1Y2tldHMYBCADKAsyOS5nb29nbGUuY2xvdWQuYXV0b21sLnYxYmV0YTEuRmxvYXQ2NFN0YXRzLkhpc3RvZ3JhbUJ1Y2tldBo6Cg9IaXN0b2dyYW1CdWNrZXQSCwoDbWluGAEgASgBEgsKA21heBgCIAEoARINCgVjb3VudBgDIAEoAyKNAQoLU3RyaW5nU3RhdHMSUAoRdG9wX3VuaWdyYW1fc3RhdHMYASADKAsyNS5nb29nbGUuY2xvdWQuYXV0b21sLnYxYmV0YTEuU3RyaW5nU3RhdHMuVW5pZ3JhbVN0YXRzGiwKDFVuaWdyYW1TdGF0cxINCgV2YWx1ZRgBIAEoCRINCgVjb3VudBgCIAEoAyL0AgoOVGltZXN0YW1wU3RhdHMSVgoOZ3JhbnVsYXJfc3RhdHMYASADKAsyPi5nb29nbGUuY2xvdWQuYXV0b21sLnYxYmV0YTEuVGltZXN0YW1wU3RhdHMuR3JhbnVsYXJTdGF0c0VudHJ5GpgBCg1HcmFudWxhclN0YXRzElcKB2J1Y2tldHMYASADKAsyRi5nb29nbGUuY2xvdWQuYXV0b21sLnYxYmV0YTEuVGltZXN0YW1wU3RhdHMuR3JhbnVsYXJTdGF0cy5CdWNrZXRzRW50cnkaLgoMQnVja2V0c0VudHJ5EgsKA2tleRgBIAEoBRINCgV2YWx1ZRgCIAEoAzoCOAEabwoSR3JhbnVsYXJTdGF0c0VudHJ5EgsKA2tleRgBIAEoCRJICgV2YWx1ZRgCIAEoCzI5Lmdvb2dsZS5jbG91ZC5hdXRvbWwudjFiZXRhMS5UaW1lc3RhbXBTdGF0cy5HcmFudWxhclN0YXRzOgI4ASJKCgpBcnJheVN0YXRzEjwKDG1lbWJlcl9zdGF0cxgCIAEoCzImLmdvb2dsZS5jbG91ZC5hdXRvbWwudjFiZXRhMS5EYXRhU3RhdHMitwEKC1N0cnVjdFN0YXRzEk0KC2ZpZWxkX3N0YXRzGAEgAygLMjguZ29vZ2xlLmNsb3VkLmF1dG9tbC52MWJldGExLlN0cnVjdFN0YXRzLkZpZWxkU3RhdHNFbnRyeRpZCg9GaWVsZFN0YXRzRW50cnkSCwoDa2V5GAEgASgJEjUKBXZhbHVlGAIgASgLMiYuZ29vZ2xlLmNsb3VkLmF1dG9tbC52MWJldGExLkRhdGFTdGF0czoCOAEioAEKDUNhdGVnb3J5U3RhdHMSWgoSdG9wX2NhdGVnb3J5X3N0YXRzGAEgAygLMj4uZ29vZ2xlLmNsb3VkLmF1dG9tbC52MWJldGExLkNhdGVnb3J5U3RhdHMuU2luZ2xlQ2F0ZWdvcnlTdGF0cxozChNTaW5nbGVDYXRlZ29yeVN0YXRzEg0KBXZhbHVlGAEgASgJEg0KBWNvdW50GAIgASgDIiUKEENvcnJlbGF0aW9uU3RhdHMSEQoJY3JhbWVyc192GAEgASgBQpsBCh9jb20uZ29vZ2xlLmNsb3VkLmF1dG9tbC52MWJldGExUAFaN2Nsb3VkLmdvb2dsZS5jb20vZ28vYXV0b21sL2FwaXYxYmV0YTEvYXV0b21scGI7YXV0b21scGLKAhtHb29nbGVcQ2xvdWRcQXV0b01sXFYxYmV0YTHqAh5Hb29nbGU6OkNsb3VkOjpBdXRvTUw6OlYxYmV0YTFiBnByb3RvMw");

/**
 * The data statistics of a series of values that share the same DataType.
 *
 * @generated from message google.cloud.automl.v1beta1.DataStats
 */
export type DataStats = Message<"google.cloud.automl.v1beta1.DataStats"> & {
  /**
   * The data statistics specific to a DataType.
   *
   * @generated from oneof google.cloud.automl.v1beta1.DataStats.stats
   */
  stats: {
    /**
     * The statistics for FLOAT64 DataType.
     *
     * @generated from field: google.cloud.automl.v1beta1.Float64Stats float64_stats = 3;
     */
    value: Float64Stats;
    case: "float64Stats";
  } | {
    /**
     * The statistics for STRING DataType.
     *
     * @generated from field: google.cloud.automl.v1beta1.StringStats string_stats = 4;
     */
    value: StringStats;
    case: "stringStats";
  } | {
    /**
     * The statistics for TIMESTAMP DataType.
     *
     * @generated from field: google.cloud.automl.v1beta1.TimestampStats timestamp_stats = 5;
     */
    value: TimestampStats;
    case: "timestampStats";
  } | {
    /**
     * The statistics for ARRAY DataType.
     *
     * @generated from field: google.cloud.automl.v1beta1.ArrayStats array_stats = 6;
     */
    value: ArrayStats;
    case: "arrayStats";
  } | {
    /**
     * The statistics for STRUCT DataType.
     *
     * @generated from field: google.cloud.automl.v1beta1.StructStats struct_stats = 7;
     */
    value: StructStats;
    case: "structStats";
  } | {
    /**
     * The statistics for CATEGORY DataType.
     *
     * @generated from field: google.cloud.automl.v1beta1.CategoryStats category_stats = 8;
     */
    value: CategoryStats;
    case: "categoryStats";
  } | { case: undefined; value?: undefined };

  /**
   * The number of distinct values.
   *
   * @generated from field: int64 distinct_value_count = 1;
   */
  distinctValueCount: bigint;

  /**
   * The number of values that are null.
   *
   * @generated from field: int64 null_value_count = 2;
   */
  nullValueCount: bigint;

  /**
   * The number of values that are valid.
   *
   * @generated from field: int64 valid_value_count = 9;
   */
  validValueCount: bigint;
};

/**
 * Describes the message google.cloud.automl.v1beta1.DataStats.
 * Use `create(DataStatsSchema)` to create a new message.
 */
export const DataStatsSchema: GenMessage<DataStats> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_data_stats, 0);

/**
 * The data statistics of a series of FLOAT64 values.
 *
 * @generated from message google.cloud.automl.v1beta1.Float64Stats
 */
export type Float64Stats = Message<"google.cloud.automl.v1beta1.Float64Stats"> & {
  /**
   * The mean of the series.
   *
   * @generated from field: double mean = 1;
   */
  mean: number;

  /**
   * The standard deviation of the series.
   *
   * @generated from field: double standard_deviation = 2;
   */
  standardDeviation: number;

  /**
   * Ordered from 0 to k k-quantile values of the data series of n values.
   * The value at index i is, approximately, the i*n/k-th smallest value in the
   * series; for i = 0 and i = k these are, respectively, the min and max
   * values.
   *
   * @generated from field: repeated double quantiles = 3;
   */
  quantiles: number[];

  /**
   * Histogram buckets of the data series. Sorted by the min value of the
   * bucket, ascendingly, and the number of the buckets is dynamically
   * generated. The buckets are non-overlapping and completely cover whole
   * FLOAT64 range with min of first bucket being `"-Infinity"`, and max of
   * the last one being `"Infinity"`.
   *
   * @generated from field: repeated google.cloud.automl.v1beta1.Float64Stats.HistogramBucket histogram_buckets = 4;
   */
  histogramBuckets: Float64Stats_HistogramBucket[];
};

/**
 * Describes the message google.cloud.automl.v1beta1.Float64Stats.
 * Use `create(Float64StatsSchema)` to create a new message.
 */
export const Float64StatsSchema: GenMessage<Float64Stats> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_data_stats, 1);

/**
 * A bucket of a histogram.
 *
 * @generated from message google.cloud.automl.v1beta1.Float64Stats.HistogramBucket
 */
export type Float64Stats_HistogramBucket = Message<"google.cloud.automl.v1beta1.Float64Stats.HistogramBucket"> & {
  /**
   * The minimum value of the bucket, inclusive.
   *
   * @generated from field: double min = 1;
   */
  min: number;

  /**
   * The maximum value of the bucket, exclusive unless max = `"Infinity"`, in
   * which case it's inclusive.
   *
   * @generated from field: double max = 2;
   */
  max: number;

  /**
   * The number of data values that are in the bucket, i.e. are between
   * min and max values.
   *
   * @generated from field: int64 count = 3;
   */
  count: bigint;
};

/**
 * Describes the message google.cloud.automl.v1beta1.Float64Stats.HistogramBucket.
 * Use `create(Float64Stats_HistogramBucketSchema)` to create a new message.
 */
export const Float64Stats_HistogramBucketSchema: GenMessage<Float64Stats_HistogramBucket> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_data_stats, 1, 0);

/**
 * The data statistics of a series of STRING values.
 *
 * @generated from message google.cloud.automl.v1beta1.StringStats
 */
export type StringStats = Message<"google.cloud.automl.v1beta1.StringStats"> & {
  /**
   * The statistics of the top 20 unigrams, ordered by
   * [count][google.cloud.automl.v1beta1.StringStats.UnigramStats.count].
   *
   * @generated from field: repeated google.cloud.automl.v1beta1.StringStats.UnigramStats top_unigram_stats = 1;
   */
  topUnigramStats: StringStats_UnigramStats[];
};

/**
 * Describes the message google.cloud.automl.v1beta1.StringStats.
 * Use `create(StringStatsSchema)` to create a new message.
 */
export const StringStatsSchema: GenMessage<StringStats> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_data_stats, 2);

/**
 * The statistics of a unigram.
 *
 * @generated from message google.cloud.automl.v1beta1.StringStats.UnigramStats
 */
export type StringStats_UnigramStats = Message<"google.cloud.automl.v1beta1.StringStats.UnigramStats"> & {
  /**
   * The unigram.
   *
   * @generated from field: string value = 1;
   */
  value: string;

  /**
   * The number of occurrences of this unigram in the series.
   *
   * @generated from field: int64 count = 2;
   */
  count: bigint;
};

/**
 * Describes the message google.cloud.automl.v1beta1.StringStats.UnigramStats.
 * Use `create(StringStats_UnigramStatsSchema)` to create a new message.
 */
export const StringStats_UnigramStatsSchema: GenMessage<StringStats_UnigramStats> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_data_stats, 2, 0);

/**
 * The data statistics of a series of TIMESTAMP values.
 *
 * @generated from message google.cloud.automl.v1beta1.TimestampStats
 */
export type TimestampStats = Message<"google.cloud.automl.v1beta1.TimestampStats"> & {
  /**
   * The string key is the pre-defined granularity. Currently supported:
   * hour_of_day, day_of_week, month_of_year.
   * Granularities finer that the granularity of timestamp data are not
   * populated (e.g. if timestamps are at day granularity, then hour_of_day
   * is not populated).
   *
   * @generated from field: map<string, google.cloud.automl.v1beta1.TimestampStats.GranularStats> granular_stats = 1;
   */
  granularStats: { [key: string]: TimestampStats_GranularStats };
};

/**
 * Describes the message google.cloud.automl.v1beta1.TimestampStats.
 * Use `create(TimestampStatsSchema)` to create a new message.
 */
export const TimestampStatsSchema: GenMessage<TimestampStats> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_data_stats, 3);

/**
 * Stats split by a defined in context granularity.
 *
 * @generated from message google.cloud.automl.v1beta1.TimestampStats.GranularStats
 */
export type TimestampStats_GranularStats = Message<"google.cloud.automl.v1beta1.TimestampStats.GranularStats"> & {
  /**
   * A map from granularity key to example count for that key.
   * E.g. for hour_of_day `13` means 1pm, or for month_of_year `5` means May).
   *
   * @generated from field: map<int32, int64> buckets = 1;
   */
  buckets: { [key: number]: bigint };
};

/**
 * Describes the message google.cloud.automl.v1beta1.TimestampStats.GranularStats.
 * Use `create(TimestampStats_GranularStatsSchema)` to create a new message.
 */
export const TimestampStats_GranularStatsSchema: GenMessage<TimestampStats_GranularStats> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_data_stats, 3, 0);

/**
 * The data statistics of a series of ARRAY values.
 *
 * @generated from message google.cloud.automl.v1beta1.ArrayStats
 */
export type ArrayStats = Message<"google.cloud.automl.v1beta1.ArrayStats"> & {
  /**
   * Stats of all the values of all arrays, as if they were a single long
   * series of data. The type depends on the element type of the array.
   *
   * @generated from field: google.cloud.automl.v1beta1.DataStats member_stats = 2;
   */
  memberStats?: DataStats;
};

/**
 * Describes the message google.cloud.automl.v1beta1.ArrayStats.
 * Use `create(ArrayStatsSchema)` to create a new message.
 */
export const ArrayStatsSchema: GenMessage<ArrayStats> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_data_stats, 4);

/**
 * The data statistics of a series of STRUCT values.
 *
 * @generated from message google.cloud.automl.v1beta1.StructStats
 */
export type StructStats = Message<"google.cloud.automl.v1beta1.StructStats"> & {
  /**
   * Map from a field name of the struct to data stats aggregated over series
   * of all data in that field across all the structs.
   *
   * @generated from field: map<string, google.cloud.automl.v1beta1.DataStats> field_stats = 1;
   */
  fieldStats: { [key: string]: DataStats };
};

/**
 * Describes the message google.cloud.automl.v1beta1.StructStats.
 * Use `create(StructStatsSchema)` to create a new message.
 */
export const StructStatsSchema: GenMessage<StructStats> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_data_stats, 5);

/**
 * The data statistics of a series of CATEGORY values.
 *
 * @generated from message google.cloud.automl.v1beta1.CategoryStats
 */
export type CategoryStats = Message<"google.cloud.automl.v1beta1.CategoryStats"> & {
  /**
   * The statistics of the top 20 CATEGORY values, ordered by
   *
   * [count][google.cloud.automl.v1beta1.CategoryStats.SingleCategoryStats.count].
   *
   * @generated from field: repeated google.cloud.automl.v1beta1.CategoryStats.SingleCategoryStats top_category_stats = 1;
   */
  topCategoryStats: CategoryStats_SingleCategoryStats[];
};

/**
 * Describes the message google.cloud.automl.v1beta1.CategoryStats.
 * Use `create(CategoryStatsSchema)` to create a new message.
 */
export const CategoryStatsSchema: GenMessage<CategoryStats> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_data_stats, 6);

/**
 * The statistics of a single CATEGORY value.
 *
 * @generated from message google.cloud.automl.v1beta1.CategoryStats.SingleCategoryStats
 */
export type CategoryStats_SingleCategoryStats = Message<"google.cloud.automl.v1beta1.CategoryStats.SingleCategoryStats"> & {
  /**
   * The CATEGORY value.
   *
   * @generated from field: string value = 1;
   */
  value: string;

  /**
   * The number of occurrences of this value in the series.
   *
   * @generated from field: int64 count = 2;
   */
  count: bigint;
};

/**
 * Describes the message google.cloud.automl.v1beta1.CategoryStats.SingleCategoryStats.
 * Use `create(CategoryStats_SingleCategoryStatsSchema)` to create a new message.
 */
export const CategoryStats_SingleCategoryStatsSchema: GenMessage<CategoryStats_SingleCategoryStats> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_data_stats, 6, 0);

/**
 * A correlation statistics between two series of DataType values. The series
 * may have differing DataType-s, but within a single series the DataType must
 * be the same.
 *
 * @generated from message google.cloud.automl.v1beta1.CorrelationStats
 */
export type CorrelationStats = Message<"google.cloud.automl.v1beta1.CorrelationStats"> & {
  /**
   * The correlation value using the Cramer's V measure.
   *
   * @generated from field: double cramers_v = 1;
   */
  cramersV: number;
};

/**
 * Describes the message google.cloud.automl.v1beta1.CorrelationStats.
 * Use `create(CorrelationStatsSchema)` to create a new message.
 */
export const CorrelationStatsSchema: GenMessage<CorrelationStats> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_data_stats, 7);
