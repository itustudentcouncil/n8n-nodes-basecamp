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
// @generated from file google/api/monitoring.proto (package google.api, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/api/monitoring.proto.
 */
export const file_google_api_monitoring: GenFile = /*@__PURE__*/
  fileDesc("Chtnb29nbGUvYXBpL21vbml0b3JpbmcucHJvdG8SCmdvb2dsZS5hcGki7AEKCk1vbml0b3JpbmcSSwoVcHJvZHVjZXJfZGVzdGluYXRpb25zGAEgAygLMiwuZ29vZ2xlLmFwaS5Nb25pdG9yaW5nLk1vbml0b3JpbmdEZXN0aW5hdGlvbhJLChVjb25zdW1lcl9kZXN0aW5hdGlvbnMYAiADKAsyLC5nb29nbGUuYXBpLk1vbml0b3JpbmcuTW9uaXRvcmluZ0Rlc3RpbmF0aW9uGkQKFU1vbml0b3JpbmdEZXN0aW5hdGlvbhIaChJtb25pdG9yZWRfcmVzb3VyY2UYASABKAkSDwoHbWV0cmljcxgCIAMoCUJxCg5jb20uZ29vZ2xlLmFwaUIPTW9uaXRvcmluZ1Byb3RvUAFaRWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYXBpL3NlcnZpY2Vjb25maWc7c2VydmljZWNvbmZpZ6ICBEdBUEliBnByb3RvMw");

/**
 * Monitoring configuration of the service.
 *
 * The example below shows how to configure monitored resources and metrics
 * for monitoring. In the example, a monitored resource and two metrics are
 * defined. The `library.googleapis.com/book/returned_count` metric is sent
 * to both producer and consumer projects, whereas the
 * `library.googleapis.com/book/num_overdue` metric is only sent to the
 * consumer project.
 *
 *     monitored_resources:
 *     - type: library.googleapis.com/Branch
 *       display_name: "Library Branch"
 *       description: "A branch of a library."
 *       launch_stage: GA
 *       labels:
 *       - key: resource_container
 *         description: "The Cloud container (ie. project id) for the Branch."
 *       - key: location
 *         description: "The location of the library branch."
 *       - key: branch_id
 *         description: "The id of the branch."
 *     metrics:
 *     - name: library.googleapis.com/book/returned_count
 *       display_name: "Books Returned"
 *       description: "The count of books that have been returned."
 *       launch_stage: GA
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *       labels:
 *       - key: customer_id
 *         description: "The id of the customer."
 *     - name: library.googleapis.com/book/num_overdue
 *       display_name: "Books Overdue"
 *       description: "The current number of overdue books."
 *       launch_stage: GA
 *       metric_kind: GAUGE
 *       value_type: INT64
 *       unit: "1"
 *       labels:
 *       - key: customer_id
 *         description: "The id of the customer."
 *     monitoring:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/Branch
 *         metrics:
 *         - library.googleapis.com/book/returned_count
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/Branch
 *         metrics:
 *         - library.googleapis.com/book/returned_count
 *         - library.googleapis.com/book/num_overdue
 *
 * @generated from message google.api.Monitoring
 */
export type Monitoring = Message<"google.api.Monitoring"> & {
  /**
   * Monitoring configurations for sending metrics to the producer project.
   * There can be multiple producer destinations. A monitored resource type may
   * appear in multiple monitoring destinations if different aggregations are
   * needed for different sets of metrics associated with that monitored
   * resource type. A monitored resource and metric pair may only be used once
   * in the Monitoring configuration.
   *
   * @generated from field: repeated google.api.Monitoring.MonitoringDestination producer_destinations = 1;
   */
  producerDestinations: Monitoring_MonitoringDestination[];

  /**
   * Monitoring configurations for sending metrics to the consumer project.
   * There can be multiple consumer destinations. A monitored resource type may
   * appear in multiple monitoring destinations if different aggregations are
   * needed for different sets of metrics associated with that monitored
   * resource type. A monitored resource and metric pair may only be used once
   * in the Monitoring configuration.
   *
   * @generated from field: repeated google.api.Monitoring.MonitoringDestination consumer_destinations = 2;
   */
  consumerDestinations: Monitoring_MonitoringDestination[];
};

/**
 * Describes the message google.api.Monitoring.
 * Use `create(MonitoringSchema)` to create a new message.
 */
export const MonitoringSchema: GenMessage<Monitoring> = /*@__PURE__*/
  messageDesc(file_google_api_monitoring, 0);

/**
 * Configuration of a specific monitoring destination (the producer project
 * or the consumer project).
 *
 * @generated from message google.api.Monitoring.MonitoringDestination
 */
export type Monitoring_MonitoringDestination = Message<"google.api.Monitoring.MonitoringDestination"> & {
  /**
   * The monitored resource type. The type must be defined in
   * [Service.monitored_resources][google.api.Service.monitored_resources]
   * section.
   *
   * @generated from field: string monitored_resource = 1;
   */
  monitoredResource: string;

  /**
   * Types of the metrics to report to this monitoring destination.
   * Each type must be defined in
   * [Service.metrics][google.api.Service.metrics] section.
   *
   * @generated from field: repeated string metrics = 2;
   */
  metrics: string[];
};

/**
 * Describes the message google.api.Monitoring.MonitoringDestination.
 * Use `create(Monitoring_MonitoringDestinationSchema)` to create a new message.
 */
export const Monitoring_MonitoringDestinationSchema: GenMessage<Monitoring_MonitoringDestination> = /*@__PURE__*/
  messageDesc(file_google_api_monitoring, 0, 0);
