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
// @generated from file google/api/quota.proto (package google.api, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/api/quota.proto.
 */
export const file_google_api_quota: GenFile = /*@__PURE__*/
  fileDesc("ChZnb29nbGUvYXBpL3F1b3RhLnByb3RvEgpnb29nbGUuYXBpIl0KBVF1b3RhEiYKBmxpbWl0cxgDIAMoCzIWLmdvb2dsZS5hcGkuUXVvdGFMaW1pdBIsCgxtZXRyaWNfcnVsZXMYBCADKAsyFi5nb29nbGUuYXBpLk1ldHJpY1J1bGUikQEKCk1ldHJpY1J1bGUSEAoIc2VsZWN0b3IYASABKAkSPQoMbWV0cmljX2Nvc3RzGAIgAygLMicuZ29vZ2xlLmFwaS5NZXRyaWNSdWxlLk1ldHJpY0Nvc3RzRW50cnkaMgoQTWV0cmljQ29zdHNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAM6AjgBIpUCCgpRdW90YUxpbWl0EgwKBG5hbWUYBiABKAkSEwoLZGVzY3JpcHRpb24YAiABKAkSFQoNZGVmYXVsdF9saW1pdBgDIAEoAxIRCgltYXhfbGltaXQYBCABKAMSEQoJZnJlZV90aWVyGAcgASgDEhAKCGR1cmF0aW9uGAUgASgJEg4KBm1ldHJpYxgIIAEoCRIMCgR1bml0GAkgASgJEjIKBnZhbHVlcxgKIAMoCzIiLmdvb2dsZS5hcGkuUXVvdGFMaW1pdC5WYWx1ZXNFbnRyeRIUCgxkaXNwbGF5X25hbWUYDCABKAkaLQoLVmFsdWVzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgDOgI4AUJsCg5jb20uZ29vZ2xlLmFwaUIKUXVvdGFQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2FwaS9zZXJ2aWNlY29uZmlnO3NlcnZpY2Vjb25maWeiAgRHQVBJYgZwcm90bzM");

/**
 * Quota configuration helps to achieve fairness and budgeting in service
 * usage.
 *
 * The metric based quota configuration works this way:
 * - The service configuration defines a set of metrics.
 * - For API calls, the quota.metric_rules maps methods to metrics with
 *   corresponding costs.
 * - The quota.limits defines limits on the metrics, which will be used for
 *   quota checks at runtime.
 *
 * An example quota configuration in yaml format:
 *
 *    quota:
 *      limits:
 *
 *      - name: apiWriteQpsPerProject
 *        metric: library.googleapis.com/write_calls
 *        unit: "1/min/{project}"  # rate limit for consumer projects
 *        values:
 *          STANDARD: 10000
 *
 *
 *      (The metric rules bind all methods to the read_calls metric,
 *       except for the UpdateBook and DeleteBook methods. These two methods
 *       are mapped to the write_calls metric, with the UpdateBook method
 *       consuming at twice rate as the DeleteBook method.)
 *      metric_rules:
 *      - selector: "*"
 *        metric_costs:
 *          library.googleapis.com/read_calls: 1
 *      - selector: google.example.library.v1.LibraryService.UpdateBook
 *        metric_costs:
 *          library.googleapis.com/write_calls: 2
 *      - selector: google.example.library.v1.LibraryService.DeleteBook
 *        metric_costs:
 *          library.googleapis.com/write_calls: 1
 *
 *  Corresponding Metric definition:
 *
 *      metrics:
 *      - name: library.googleapis.com/read_calls
 *        display_name: Read requests
 *        metric_kind: DELTA
 *        value_type: INT64
 *
 *      - name: library.googleapis.com/write_calls
 *        display_name: Write requests
 *        metric_kind: DELTA
 *        value_type: INT64
 *
 *
 *
 * @generated from message google.api.Quota
 */
export type Quota = Message<"google.api.Quota"> & {
  /**
   * List of QuotaLimit definitions for the service.
   *
   * @generated from field: repeated google.api.QuotaLimit limits = 3;
   */
  limits: QuotaLimit[];

  /**
   * List of MetricRule definitions, each one mapping a selected method to one
   * or more metrics.
   *
   * @generated from field: repeated google.api.MetricRule metric_rules = 4;
   */
  metricRules: MetricRule[];
};

/**
 * Describes the message google.api.Quota.
 * Use `create(QuotaSchema)` to create a new message.
 */
export const QuotaSchema: GenMessage<Quota> = /*@__PURE__*/
  messageDesc(file_google_api_quota, 0);

/**
 * Bind API methods to metrics. Binding a method to a metric causes that
 * metric's configured quota behaviors to apply to the method call.
 *
 * @generated from message google.api.MetricRule
 */
export type MetricRule = Message<"google.api.MetricRule"> & {
  /**
   * Selects the methods to which this rule applies.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax
   * details.
   *
   * @generated from field: string selector = 1;
   */
  selector: string;

  /**
   * Metrics to update when the selected methods are called, and the associated
   * cost applied to each metric.
   *
   * The key of the map is the metric name, and the values are the amount
   * increased for the metric against which the quota limits are defined.
   * The value must not be negative.
   *
   * @generated from field: map<string, int64> metric_costs = 2;
   */
  metricCosts: { [key: string]: bigint };
};

/**
 * Describes the message google.api.MetricRule.
 * Use `create(MetricRuleSchema)` to create a new message.
 */
export const MetricRuleSchema: GenMessage<MetricRule> = /*@__PURE__*/
  messageDesc(file_google_api_quota, 1);

/**
 * `QuotaLimit` defines a specific limit that applies over a specified duration
 * for a limit type. There can be at most one limit for a duration and limit
 * type combination defined within a `QuotaGroup`.
 *
 * @generated from message google.api.QuotaLimit
 */
export type QuotaLimit = Message<"google.api.QuotaLimit"> & {
  /**
   * Name of the quota limit.
   *
   * The name must be provided, and it must be unique within the service. The
   * name can only include alphanumeric characters as well as '-'.
   *
   * The maximum length of the limit name is 64 characters.
   *
   * @generated from field: string name = 6;
   */
  name: string;

  /**
   * Optional. User-visible, extended description for this quota limit.
   * Should be used only when more context is needed to understand this limit
   * than provided by the limit's display name (see: `display_name`).
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * Default number of tokens that can be consumed during the specified
   * duration. This is the number of tokens assigned when a client
   * application developer activates the service for his/her project.
   *
   * Specifying a value of 0 will block all requests. This can be used if you
   * are provisioning quota to selected consumers and blocking others.
   * Similarly, a value of -1 will indicate an unlimited quota. No other
   * negative values are allowed.
   *
   * Used by group-based quotas only.
   *
   * @generated from field: int64 default_limit = 3;
   */
  defaultLimit: bigint;

  /**
   * Maximum number of tokens that can be consumed during the specified
   * duration. Client application developers can override the default limit up
   * to this maximum. If specified, this value cannot be set to a value less
   * than the default limit. If not specified, it is set to the default limit.
   *
   * To allow clients to apply overrides with no upper bound, set this to -1,
   * indicating unlimited maximum quota.
   *
   * Used by group-based quotas only.
   *
   * @generated from field: int64 max_limit = 4;
   */
  maxLimit: bigint;

  /**
   * Free tier value displayed in the Developers Console for this limit.
   * The free tier is the number of tokens that will be subtracted from the
   * billed amount when billing is enabled.
   * This field can only be set on a limit with duration "1d", in a billable
   * group; it is invalid on any other limit. If this field is not set, it
   * defaults to 0, indicating that there is no free tier for this service.
   *
   * Used by group-based quotas only.
   *
   * @generated from field: int64 free_tier = 7;
   */
  freeTier: bigint;

  /**
   * Duration of this limit in textual notation. Must be "100s" or "1d".
   *
   * Used by group-based quotas only.
   *
   * @generated from field: string duration = 5;
   */
  duration: string;

  /**
   * The name of the metric this quota limit applies to. The quota limits with
   * the same metric will be checked together during runtime. The metric must be
   * defined within the service config.
   *
   * @generated from field: string metric = 8;
   */
  metric: string;

  /**
   * Specify the unit of the quota limit. It uses the same syntax as
   * [Metric.unit][]. The supported unit kinds are determined by the quota
   * backend system.
   *
   * Here are some examples:
   * * "1/min/{project}" for quota per minute per project.
   *
   * Note: the order of unit components is insignificant.
   * The "1" at the beginning is required to follow the metric unit syntax.
   *
   * @generated from field: string unit = 9;
   */
  unit: string;

  /**
   * Tiered limit values. You must specify this as a key:value pair, with an
   * integer value that is the maximum number of requests allowed for the
   * specified unit. Currently only STANDARD is supported.
   *
   * @generated from field: map<string, int64> values = 10;
   */
  values: { [key: string]: bigint };

  /**
   * User-visible display name for this limit.
   * Optional. If not set, the UI will provide a default display name based on
   * the quota configuration. This field can be used to override the default
   * display name generated from the configuration.
   *
   * @generated from field: string display_name = 12;
   */
  displayName: string;
};

/**
 * Describes the message google.api.QuotaLimit.
 * Use `create(QuotaLimitSchema)` to create a new message.
 */
export const QuotaLimitSchema: GenMessage<QuotaLimit> = /*@__PURE__*/
  messageDesc(file_google_api_quota, 2);
