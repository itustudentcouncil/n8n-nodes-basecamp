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
// @generated from file google/monitoring/dashboard/v1/scorecard.proto (package google.monitoring.dashboard.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { SparkChartType, Threshold, TimeSeriesQuery } from "./metrics_pb";
import { file_google_monitoring_dashboard_v1_metrics } from "./metrics_pb";
import type { Duration, Empty } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration, file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/monitoring/dashboard/v1/scorecard.proto.
 */
export const file_google_monitoring_dashboard_v1_scorecard: GenFile = /*@__PURE__*/
  fileDesc("Ci5nb29nbGUvbW9uaXRvcmluZy9kYXNoYm9hcmQvdjEvc2NvcmVjYXJkLnByb3RvEh5nb29nbGUubW9uaXRvcmluZy5kYXNoYm9hcmQudjEiyQQKCVNjb3JlY2FyZBJPChF0aW1lX3Nlcmllc19xdWVyeRgBIAEoCzIvLmdvb2dsZS5tb25pdG9yaW5nLmRhc2hib2FyZC52MS5UaW1lU2VyaWVzUXVlcnlCA+BBAhJJCgpnYXVnZV92aWV3GAQgASgLMjMuZ29vZ2xlLm1vbml0b3JpbmcuZGFzaGJvYXJkLnYxLlNjb3JlY2FyZC5HYXVnZVZpZXdIABJUChBzcGFya19jaGFydF92aWV3GAUgASgLMjguZ29vZ2xlLm1vbml0b3JpbmcuZGFzaGJvYXJkLnYxLlNjb3JlY2FyZC5TcGFya0NoYXJ0Vmlld0gAEiwKCmJsYW5rX3ZpZXcYByABKAsyFi5nb29nbGUucHJvdG9idWYuRW1wdHlIABI9Cgp0aHJlc2hvbGRzGAYgAygLMikuZ29vZ2xlLm1vbml0b3JpbmcuZGFzaGJvYXJkLnYxLlRocmVzaG9sZBo1CglHYXVnZVZpZXcSEwoLbG93ZXJfYm91bmQYASABKAESEwoLdXBwZXJfYm91bmQYAiABKAEamAEKDlNwYXJrQ2hhcnRWaWV3Ek0KEHNwYXJrX2NoYXJ0X3R5cGUYASABKA4yLi5nb29nbGUubW9uaXRvcmluZy5kYXNoYm9hcmQudjEuU3BhcmtDaGFydFR5cGVCA+BBAhI3ChRtaW5fYWxpZ25tZW50X3BlcmlvZBgCIAEoCzIZLmdvb2dsZS5wcm90b2J1Zi5EdXJhdGlvbkILCglkYXRhX3ZpZXdC9wEKImNvbS5nb29nbGUubW9uaXRvcmluZy5kYXNoYm9hcmQudjFCDlNjb3JlY2FyZFByb3RvUAFaRmNsb3VkLmdvb2dsZS5jb20vZ28vbW9uaXRvcmluZy9kYXNoYm9hcmQvYXBpdjEvZGFzaGJvYXJkcGI7ZGFzaGJvYXJkcGKqAiRHb29nbGUuQ2xvdWQuTW9uaXRvcmluZy5EYXNoYm9hcmQuVjHKAiRHb29nbGVcQ2xvdWRcTW9uaXRvcmluZ1xEYXNoYm9hcmRcVjHqAihHb29nbGU6OkNsb3VkOjpNb25pdG9yaW5nOjpEYXNoYm9hcmQ6OlYxYgZwcm90bzM", [file_google_api_field_behavior, file_google_monitoring_dashboard_v1_metrics, file_google_protobuf_duration, file_google_protobuf_empty]);

/**
 * A widget showing the latest value of a metric, and how this value relates to
 * one or more thresholds.
 *
 * @generated from message google.monitoring.dashboard.v1.Scorecard
 */
export type Scorecard = Message<"google.monitoring.dashboard.v1.Scorecard"> & {
  /**
   * Required. Fields for querying time series data from the
   * Stackdriver metrics API.
   *
   * @generated from field: google.monitoring.dashboard.v1.TimeSeriesQuery time_series_query = 1;
   */
  timeSeriesQuery?: TimeSeriesQuery;

  /**
   * Defines the optional additional chart shown on the scorecard. If
   * neither is included - then a default scorecard is shown.
   *
   * @generated from oneof google.monitoring.dashboard.v1.Scorecard.data_view
   */
  dataView: {
    /**
     * Will cause the scorecard to show a gauge chart.
     *
     * @generated from field: google.monitoring.dashboard.v1.Scorecard.GaugeView gauge_view = 4;
     */
    value: Scorecard_GaugeView;
    case: "gaugeView";
  } | {
    /**
     * Will cause the scorecard to show a spark chart.
     *
     * @generated from field: google.monitoring.dashboard.v1.Scorecard.SparkChartView spark_chart_view = 5;
     */
    value: Scorecard_SparkChartView;
    case: "sparkChartView";
  } | {
    /**
     * Will cause the `Scorecard` to show only the value, with no indicator to
     * its value relative to its thresholds.
     *
     * @generated from field: google.protobuf.Empty blank_view = 7;
     */
    value: Empty;
    case: "blankView";
  } | { case: undefined; value?: undefined };

  /**
   * The thresholds used to determine the state of the scorecard given the
   * time series' current value. For an actual value x, the scorecard is in a
   * danger state if x is less than or equal to a danger threshold that triggers
   * below, or greater than or equal to a danger threshold that triggers above.
   * Similarly, if x is above/below a warning threshold that triggers
   * above/below, then the scorecard is in a warning state - unless x also puts
   * it in a danger state. (Danger trumps warning.)
   *
   * As an example, consider a scorecard with the following four thresholds:
   *
   * ```
   * {
   *   value: 90,
   *   category: 'DANGER',
   *   trigger: 'ABOVE',
   * },
   * {
   *   value: 70,
   *   category: 'WARNING',
   *   trigger: 'ABOVE',
   * },
   * {
   *   value: 10,
   *   category: 'DANGER',
   *   trigger: 'BELOW',
   * },
   * {
   *   value: 20,
   *   category: 'WARNING',
   *   trigger: 'BELOW',
   * }
   * ```
   *
   * Then: values less than or equal to 10 would put the scorecard in a DANGER
   * state, values greater than 10 but less than or equal to 20 a WARNING state,
   * values strictly between 20 and 70 an OK state, values greater than or equal
   * to 70 but less than 90 a WARNING state, and values greater than or equal to
   * 90 a DANGER state.
   *
   * @generated from field: repeated google.monitoring.dashboard.v1.Threshold thresholds = 6;
   */
  thresholds: Threshold[];
};

/**
 * Describes the message google.monitoring.dashboard.v1.Scorecard.
 * Use `create(ScorecardSchema)` to create a new message.
 */
export const ScorecardSchema: GenMessage<Scorecard> = /*@__PURE__*/
  messageDesc(file_google_monitoring_dashboard_v1_scorecard, 0);

/**
 * A gauge chart shows where the current value sits within a pre-defined
 * range. The upper and lower bounds should define the possible range of
 * values for the scorecard's query (inclusive).
 *
 * @generated from message google.monitoring.dashboard.v1.Scorecard.GaugeView
 */
export type Scorecard_GaugeView = Message<"google.monitoring.dashboard.v1.Scorecard.GaugeView"> & {
  /**
   * The lower bound for this gauge chart. The value of the chart should
   * always be greater than or equal to this.
   *
   * @generated from field: double lower_bound = 1;
   */
  lowerBound: number;

  /**
   * The upper bound for this gauge chart. The value of the chart should
   * always be less than or equal to this.
   *
   * @generated from field: double upper_bound = 2;
   */
  upperBound: number;
};

/**
 * Describes the message google.monitoring.dashboard.v1.Scorecard.GaugeView.
 * Use `create(Scorecard_GaugeViewSchema)` to create a new message.
 */
export const Scorecard_GaugeViewSchema: GenMessage<Scorecard_GaugeView> = /*@__PURE__*/
  messageDesc(file_google_monitoring_dashboard_v1_scorecard, 0, 0);

/**
 * A sparkChart is a small chart suitable for inclusion in a table-cell or
 * inline in text. This message contains the configuration for a sparkChart
 * to show up on a Scorecard, showing recent trends of the scorecard's
 * timeseries.
 *
 * @generated from message google.monitoring.dashboard.v1.Scorecard.SparkChartView
 */
export type Scorecard_SparkChartView = Message<"google.monitoring.dashboard.v1.Scorecard.SparkChartView"> & {
  /**
   * Required. The type of sparkchart to show in this chartView.
   *
   * @generated from field: google.monitoring.dashboard.v1.SparkChartType spark_chart_type = 1;
   */
  sparkChartType: SparkChartType;

  /**
   * The lower bound on data point frequency in the chart implemented by
   * specifying the minimum alignment period to use in a time series query.
   * For example, if the data is published once every 10 minutes it would not
   * make sense to fetch and align data at one minute intervals. This field is
   * optional and exists only as a hint.
   *
   * @generated from field: google.protobuf.Duration min_alignment_period = 2;
   */
  minAlignmentPeriod?: Duration;
};

/**
 * Describes the message google.monitoring.dashboard.v1.Scorecard.SparkChartView.
 * Use `create(Scorecard_SparkChartViewSchema)` to create a new message.
 */
export const Scorecard_SparkChartViewSchema: GenMessage<Scorecard_SparkChartView> = /*@__PURE__*/
  messageDesc(file_google_monitoring_dashboard_v1_scorecard, 0, 1);
