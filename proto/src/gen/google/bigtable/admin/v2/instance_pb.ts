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
// @generated from file google/bigtable/admin/v2/instance.proto (package google.bigtable.admin.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { StorageType } from "./common_pb";
import { file_google_bigtable_admin_v2_common } from "./common_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/bigtable/admin/v2/instance.proto.
 */
export const file_google_bigtable_admin_v2_instance: GenFile = /*@__PURE__*/
  fileDesc("Cidnb29nbGUvYmlndGFibGUvYWRtaW4vdjIvaW5zdGFuY2UucHJvdG8SGGdvb2dsZS5iaWd0YWJsZS5hZG1pbi52MiLGBAoISW5zdGFuY2USDAoEbmFtZRgBIAEoCRIZCgxkaXNwbGF5X25hbWUYAiABKAlCA+BBAhI3CgVzdGF0ZRgDIAEoDjIoLmdvb2dsZS5iaWd0YWJsZS5hZG1pbi52Mi5JbnN0YW5jZS5TdGF0ZRI1CgR0eXBlGAQgASgOMicuZ29vZ2xlLmJpZ3RhYmxlLmFkbWluLnYyLkluc3RhbmNlLlR5cGUSPgoGbGFiZWxzGAUgAygLMi4uZ29vZ2xlLmJpZ3RhYmxlLmFkbWluLnYyLkluc3RhbmNlLkxhYmVsc0VudHJ5EjQKC2NyZWF0ZV90aW1lGAcgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEh8KDXNhdGlzZmllc19wenMYCCABKAhCA+BBA0gAiAEBGi0KC0xhYmVsc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEiNQoFU3RhdGUSEwoPU1RBVEVfTk9UX0tOT1dOEAASCQoFUkVBRFkQARIMCghDUkVBVElORxACIj0KBFR5cGUSFAoQVFlQRV9VTlNQRUNJRklFRBAAEg4KClBST0RVQ1RJT04QARIPCgtERVZFTE9QTUVOVBACOlPqQVAKJWJpZ3RhYmxlYWRtaW4uZ29vZ2xlYXBpcy5jb20vSW5zdGFuY2USJ3Byb2plY3RzL3twcm9qZWN0fS9pbnN0YW5jZXMve2luc3RhbmNlfUIQCg5fc2F0aXNmaWVzX3B6cyJfChJBdXRvc2NhbGluZ1RhcmdldHMSHwoXY3B1X3V0aWxpemF0aW9uX3BlcmNlbnQYAiABKAUSKAogc3RvcmFnZV91dGlsaXphdGlvbl9naWJfcGVyX25vZGUYAyABKAUiTwoRQXV0b3NjYWxpbmdMaW1pdHMSHAoPbWluX3NlcnZlX25vZGVzGAEgASgFQgPgQQISHAoPbWF4X3NlcnZlX25vZGVzGAIgASgFQgPgQQIimgkKB0NsdXN0ZXISDAoEbmFtZRgBIAEoCRI7Cghsb2NhdGlvbhgCIAEoCUIp4EEF+kEjCiFsb2NhdGlvbnMuZ29vZ2xlYXBpcy5jb20vTG9jYXRpb24SOwoFc3RhdGUYAyABKA4yJy5nb29nbGUuYmlndGFibGUuYWRtaW4udjIuQ2x1c3Rlci5TdGF0ZUID4EEDEhMKC3NlcnZlX25vZGVzGAQgASgFElUKE25vZGVfc2NhbGluZ19mYWN0b3IYCSABKA4yMy5nb29nbGUuYmlndGFibGUuYWRtaW4udjIuQ2x1c3Rlci5Ob2RlU2NhbGluZ0ZhY3RvckID4EEFEkkKDmNsdXN0ZXJfY29uZmlnGAcgASgLMi8uZ29vZ2xlLmJpZ3RhYmxlLmFkbWluLnYyLkNsdXN0ZXIuQ2x1c3RlckNvbmZpZ0gAEkgKFGRlZmF1bHRfc3RvcmFnZV90eXBlGAUgASgOMiUuZ29vZ2xlLmJpZ3RhYmxlLmFkbWluLnYyLlN0b3JhZ2VUeXBlQgPgQQUSUgoRZW5jcnlwdGlvbl9jb25maWcYBiABKAsyMi5nb29nbGUuYmlndGFibGUuYWRtaW4udjIuQ2x1c3Rlci5FbmNyeXB0aW9uQ29uZmlnQgPgQQUauAEKGENsdXN0ZXJBdXRvc2NhbGluZ0NvbmZpZxJMChJhdXRvc2NhbGluZ19saW1pdHMYASABKAsyKy5nb29nbGUuYmlndGFibGUuYWRtaW4udjIuQXV0b3NjYWxpbmdMaW1pdHNCA+BBAhJOChNhdXRvc2NhbGluZ190YXJnZXRzGAIgASgLMiwuZ29vZ2xlLmJpZ3RhYmxlLmFkbWluLnYyLkF1dG9zY2FsaW5nVGFyZ2V0c0ID4EECGm8KDUNsdXN0ZXJDb25maWcSXgoaY2x1c3Rlcl9hdXRvc2NhbGluZ19jb25maWcYASABKAsyOi5nb29nbGUuYmlndGFibGUuYWRtaW4udjIuQ2x1c3Rlci5DbHVzdGVyQXV0b3NjYWxpbmdDb25maWcaUAoQRW5jcnlwdGlvbkNvbmZpZxI8CgxrbXNfa2V5X25hbWUYASABKAlCJvpBIwohY2xvdWRrbXMuZ29vZ2xlYXBpcy5jb20vQ3J5cHRvS2V5IlEKBVN0YXRlEhMKD1NUQVRFX05PVF9LTk9XThAAEgkKBVJFQURZEAESDAoIQ1JFQVRJTkcQAhIMCghSRVNJWklORxADEgwKCERJU0FCTEVEEAQicAoRTm9kZVNjYWxpbmdGYWN0b3ISIwofTk9ERV9TQ0FMSU5HX0ZBQ1RPUl9VTlNQRUNJRklFRBAAEhoKFk5PREVfU0NBTElOR19GQUNUT1JfMVgQARIaChZOT0RFX1NDQUxJTkdfRkFDVE9SXzJYEAI6ZepBYgokYmlndGFibGVhZG1pbi5nb29nbGVhcGlzLmNvbS9DbHVzdGVyEjpwcm9qZWN0cy97cHJvamVjdH0vaW5zdGFuY2VzL3tpbnN0YW5jZX0vY2x1c3RlcnMve2NsdXN0ZXJ9QggKBmNvbmZpZyLSCgoKQXBwUHJvZmlsZRIMCgRuYW1lGAEgASgJEgwKBGV0YWcYAiABKAkSEwoLZGVzY3JpcHRpb24YAyABKAkSZwodbXVsdGlfY2x1c3Rlcl9yb3V0aW5nX3VzZV9hbnkYBSABKAsyPi5nb29nbGUuYmlndGFibGUuYWRtaW4udjIuQXBwUHJvZmlsZS5NdWx0aUNsdXN0ZXJSb3V0aW5nVXNlQW55SAASWwoWc2luZ2xlX2NsdXN0ZXJfcm91dGluZxgGIAEoCzI5Lmdvb2dsZS5iaWd0YWJsZS5hZG1pbi52Mi5BcHBQcm9maWxlLlNpbmdsZUNsdXN0ZXJSb3V0aW5nSAASRQoIcHJpb3JpdHkYByABKA4yLS5nb29nbGUuYmlndGFibGUuYWRtaW4udjIuQXBwUHJvZmlsZS5Qcmlvcml0eUICGAFIARJUChJzdGFuZGFyZF9pc29sYXRpb24YCyABKAsyNi5nb29nbGUuYmlndGFibGUuYWRtaW4udjIuQXBwUHJvZmlsZS5TdGFuZGFyZElzb2xhdGlvbkgBEmkKHmRhdGFfYm9vc3RfaXNvbGF0aW9uX3JlYWRfb25seRgKIAEoCzI/Lmdvb2dsZS5iaWd0YWJsZS5hZG1pbi52Mi5BcHBQcm9maWxlLkRhdGFCb29zdElzb2xhdGlvblJlYWRPbmx5SAEarwEKGU11bHRpQ2x1c3RlclJvdXRpbmdVc2VBbnkSEwoLY2x1c3Rlcl9pZHMYASADKAkSYgoMcm93X2FmZmluaXR5GAMgASgLMkouZ29vZ2xlLmJpZ3RhYmxlLmFkbWluLnYyLkFwcFByb2ZpbGUuTXVsdGlDbHVzdGVyUm91dGluZ1VzZUFueS5Sb3dBZmZpbml0eUgAGg0KC1Jvd0FmZmluaXR5QgoKCGFmZmluaXR5Gk4KFFNpbmdsZUNsdXN0ZXJSb3V0aW5nEhIKCmNsdXN0ZXJfaWQYASABKAkSIgoaYWxsb3dfdHJhbnNhY3Rpb25hbF93cml0ZXMYAiABKAgaVAoRU3RhbmRhcmRJc29sYXRpb24SPwoIcHJpb3JpdHkYASABKA4yLS5nb29nbGUuYmlndGFibGUuYWRtaW4udjIuQXBwUHJvZmlsZS5Qcmlvcml0eRr8AQoaRGF0YUJvb3N0SXNvbGF0aW9uUmVhZE9ubHkSdwoVY29tcHV0ZV9iaWxsaW5nX293bmVyGAEgASgOMlMuZ29vZ2xlLmJpZ3RhYmxlLmFkbWluLnYyLkFwcFByb2ZpbGUuRGF0YUJvb3N0SXNvbGF0aW9uUmVhZE9ubHkuQ29tcHV0ZUJpbGxpbmdPd25lckgAiAEBIksKE0NvbXB1dGVCaWxsaW5nT3duZXISJQohQ09NUFVURV9CSUxMSU5HX09XTkVSX1VOU1BFQ0lGSUVEEAASDQoJSE9TVF9QQVlTEAFCGAoWX2NvbXB1dGVfYmlsbGluZ19vd25lciJeCghQcmlvcml0eRIYChRQUklPUklUWV9VTlNQRUNJRklFRBAAEhAKDFBSSU9SSVRZX0xPVxABEhMKD1BSSU9SSVRZX01FRElVTRACEhEKDVBSSU9SSVRZX0hJR0gQAzpv6kFsCidiaWd0YWJsZWFkbWluLmdvb2dsZWFwaXMuY29tL0FwcFByb2ZpbGUSQXByb2plY3RzL3twcm9qZWN0fS9pbnN0YW5jZXMve2luc3RhbmNlfS9hcHBQcm9maWxlcy97YXBwX3Byb2ZpbGV9QhAKDnJvdXRpbmdfcG9saWN5QgsKCWlzb2xhdGlvbiKIAwoJSG90VGFibGV0EgwKBG5hbWUYASABKAkSOwoKdGFibGVfbmFtZRgCIAEoCUIn+kEkCiJiaWd0YWJsZWFkbWluLmdvb2dsZWFwaXMuY29tL1RhYmxlEjMKCnN0YXJ0X3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSMQoIZW5kX3RpbWUYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSEQoJc3RhcnRfa2V5GAUgASgJEg8KB2VuZF9rZXkYBiABKAkSIwoWbm9kZV9jcHVfdXNhZ2VfcGVyY2VudBgHIAEoAkID4EEDOn/qQXwKJmJpZ3RhYmxlYWRtaW4uZ29vZ2xlYXBpcy5jb20vSG90VGFibGV0ElJwcm9qZWN0cy97cHJvamVjdH0vaW5zdGFuY2VzL3tpbnN0YW5jZX0vY2x1c3RlcnMve2NsdXN0ZXJ9L2hvdFRhYmxldHMve2hvdF90YWJsZXR9QssCChxjb20uZ29vZ2xlLmJpZ3RhYmxlLmFkbWluLnYyQg1JbnN0YW5jZVByb3RvUAFaOGNsb3VkLmdvb2dsZS5jb20vZ28vYmlndGFibGUvYWRtaW4vYXBpdjIvYWRtaW5wYjthZG1pbnBiqgIeR29vZ2xlLkNsb3VkLkJpZ3RhYmxlLkFkbWluLlYyygIeR29vZ2xlXENsb3VkXEJpZ3RhYmxlXEFkbWluXFYy6gIiR29vZ2xlOjpDbG91ZDo6QmlndGFibGU6OkFkbWluOjpWMupBeAohY2xvdWRrbXMuZ29vZ2xlYXBpcy5jb20vQ3J5cHRvS2V5ElNwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0va2V5UmluZ3Mve2tleV9yaW5nfS9jcnlwdG9LZXlzL3tjcnlwdG9fa2V5fWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_bigtable_admin_v2_common, file_google_protobuf_timestamp]);

/**
 * A collection of Bigtable [Tables][google.bigtable.admin.v2.Table] and
 * the resources that serve them.
 * All tables in an instance are served from all
 * [Clusters][google.bigtable.admin.v2.Cluster] in the instance.
 *
 * @generated from message google.bigtable.admin.v2.Instance
 */
export type Instance = Message<"google.bigtable.admin.v2.Instance"> & {
  /**
   * The unique name of the instance. Values are of the form
   * `projects/{project}/instances/[a-z][a-z0-9\\-]+[a-z0-9]`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The descriptive name for this instance as it appears in UIs.
   * Can be changed at any time, but should be kept globally unique
   * to avoid confusion.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * (`OutputOnly`)
   * The current state of the instance.
   *
   * @generated from field: google.bigtable.admin.v2.Instance.State state = 3;
   */
  state: Instance_State;

  /**
   * The type of the instance. Defaults to `PRODUCTION`.
   *
   * @generated from field: google.bigtable.admin.v2.Instance.Type type = 4;
   */
  type: Instance_Type;

  /**
   * Labels are a flexible and lightweight mechanism for organizing cloud
   * resources into groups that reflect a customer's organizational needs and
   * deployment strategies. They can be used to filter resources and aggregate
   * metrics.
   *
   * * Label keys must be between 1 and 63 characters long and must conform to
   *   the regular expression: `[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}`.
   * * Label values must be between 0 and 63 characters long and must conform to
   *   the regular expression: `[\p{Ll}\p{Lo}\p{N}_-]{0,63}`.
   * * No more than 64 labels can be associated with a given resource.
   * * Keys and values must both be under 128 bytes.
   *
   * @generated from field: map<string, string> labels = 5;
   */
  labels: { [key: string]: string };

  /**
   * Output only. A server-assigned timestamp representing when this Instance
   * was created. For instances created before this field was added (August
   * 2021), this value is `seconds: 0, nanos: 1`.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 7;
   */
  createTime?: Timestamp;

  /**
   * Output only. Reserved for future use.
   *
   * @generated from field: optional bool satisfies_pzs = 8;
   */
  satisfiesPzs?: boolean;
};

/**
 * Describes the message google.bigtable.admin.v2.Instance.
 * Use `create(InstanceSchema)` to create a new message.
 */
export const InstanceSchema: GenMessage<Instance> = /*@__PURE__*/
  messageDesc(file_google_bigtable_admin_v2_instance, 0);

/**
 * Possible states of an instance.
 *
 * @generated from enum google.bigtable.admin.v2.Instance.State
 */
export enum Instance_State {
  /**
   * The state of the instance could not be determined.
   *
   * @generated from enum value: STATE_NOT_KNOWN = 0;
   */
  STATE_NOT_KNOWN = 0,

  /**
   * The instance has been successfully created and can serve requests
   * to its tables.
   *
   * @generated from enum value: READY = 1;
   */
  READY = 1,

  /**
   * The instance is currently being created, and may be destroyed
   * if the creation process encounters an error.
   *
   * @generated from enum value: CREATING = 2;
   */
  CREATING = 2,
}

/**
 * Describes the enum google.bigtable.admin.v2.Instance.State.
 */
export const Instance_StateSchema: GenEnum<Instance_State> = /*@__PURE__*/
  enumDesc(file_google_bigtable_admin_v2_instance, 0, 0);

/**
 * The type of the instance.
 *
 * @generated from enum google.bigtable.admin.v2.Instance.Type
 */
export enum Instance_Type {
  /**
   * The type of the instance is unspecified. If set when creating an
   * instance, a `PRODUCTION` instance will be created. If set when updating
   * an instance, the type will be left unchanged.
   *
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  TYPE_UNSPECIFIED = 0,

  /**
   * An instance meant for production use. `serve_nodes` must be set
   * on the cluster.
   *
   * @generated from enum value: PRODUCTION = 1;
   */
  PRODUCTION = 1,

  /**
   * DEPRECATED: Prefer PRODUCTION for all use cases, as it no longer enforces
   * a higher minimum node count than DEVELOPMENT.
   *
   * @generated from enum value: DEVELOPMENT = 2;
   */
  DEVELOPMENT = 2,
}

/**
 * Describes the enum google.bigtable.admin.v2.Instance.Type.
 */
export const Instance_TypeSchema: GenEnum<Instance_Type> = /*@__PURE__*/
  enumDesc(file_google_bigtable_admin_v2_instance, 0, 1);

/**
 * The Autoscaling targets for a Cluster. These determine the recommended nodes.
 *
 * @generated from message google.bigtable.admin.v2.AutoscalingTargets
 */
export type AutoscalingTargets = Message<"google.bigtable.admin.v2.AutoscalingTargets"> & {
  /**
   * The cpu utilization that the Autoscaler should be trying to achieve.
   * This number is on a scale from 0 (no utilization) to
   * 100 (total utilization), and is limited between 10 and 80, otherwise it
   * will return INVALID_ARGUMENT error.
   *
   * @generated from field: int32 cpu_utilization_percent = 2;
   */
  cpuUtilizationPercent: number;

  /**
   * The storage utilization that the Autoscaler should be trying to achieve.
   * This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD
   * cluster and between 8192 (8TiB) and 16384 (16TiB) for an HDD cluster,
   * otherwise it will return INVALID_ARGUMENT error. If this value is set to 0,
   * it will be treated as if it were set to the default value: 2560 for SSD,
   * 8192 for HDD.
   *
   * @generated from field: int32 storage_utilization_gib_per_node = 3;
   */
  storageUtilizationGibPerNode: number;
};

/**
 * Describes the message google.bigtable.admin.v2.AutoscalingTargets.
 * Use `create(AutoscalingTargetsSchema)` to create a new message.
 */
export const AutoscalingTargetsSchema: GenMessage<AutoscalingTargets> = /*@__PURE__*/
  messageDesc(file_google_bigtable_admin_v2_instance, 1);

/**
 * Limits for the number of nodes a Cluster can autoscale up/down to.
 *
 * @generated from message google.bigtable.admin.v2.AutoscalingLimits
 */
export type AutoscalingLimits = Message<"google.bigtable.admin.v2.AutoscalingLimits"> & {
  /**
   * Required. Minimum number of nodes to scale down to.
   *
   * @generated from field: int32 min_serve_nodes = 1;
   */
  minServeNodes: number;

  /**
   * Required. Maximum number of nodes to scale up to.
   *
   * @generated from field: int32 max_serve_nodes = 2;
   */
  maxServeNodes: number;
};

/**
 * Describes the message google.bigtable.admin.v2.AutoscalingLimits.
 * Use `create(AutoscalingLimitsSchema)` to create a new message.
 */
export const AutoscalingLimitsSchema: GenMessage<AutoscalingLimits> = /*@__PURE__*/
  messageDesc(file_google_bigtable_admin_v2_instance, 2);

/**
 * A resizable group of nodes in a particular cloud location, capable
 * of serving all [Tables][google.bigtable.admin.v2.Table] in the parent
 * [Instance][google.bigtable.admin.v2.Instance].
 *
 * @generated from message google.bigtable.admin.v2.Cluster
 */
export type Cluster = Message<"google.bigtable.admin.v2.Cluster"> & {
  /**
   * The unique name of the cluster. Values are of the form
   * `projects/{project}/instances/{instance}/clusters/[a-z][-a-z0-9]*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Immutable. The location where this cluster's nodes and storage reside. For
   * best performance, clients should be located as close as possible to this
   * cluster. Currently only zones are supported, so values should be of the
   * form `projects/{project}/locations/{zone}`.
   *
   * @generated from field: string location = 2;
   */
  location: string;

  /**
   * Output only. The current state of the cluster.
   *
   * @generated from field: google.bigtable.admin.v2.Cluster.State state = 3;
   */
  state: Cluster_State;

  /**
   * The number of nodes allocated to this cluster. More nodes enable higher
   * throughput and more consistent performance.
   *
   * @generated from field: int32 serve_nodes = 4;
   */
  serveNodes: number;

  /**
   * Immutable. The node scaling factor of this cluster.
   *
   * @generated from field: google.bigtable.admin.v2.Cluster.NodeScalingFactor node_scaling_factor = 9;
   */
  nodeScalingFactor: Cluster_NodeScalingFactor;

  /**
   * @generated from oneof google.bigtable.admin.v2.Cluster.config
   */
  config: {
    /**
     * Configuration for this cluster.
     *
     * @generated from field: google.bigtable.admin.v2.Cluster.ClusterConfig cluster_config = 7;
     */
    value: Cluster_ClusterConfig;
    case: "clusterConfig";
  } | { case: undefined; value?: undefined };

  /**
   * Immutable. The type of storage used by this cluster to serve its
   * parent instance's tables, unless explicitly overridden.
   *
   * @generated from field: google.bigtable.admin.v2.StorageType default_storage_type = 5;
   */
  defaultStorageType: StorageType;

  /**
   * Immutable. The encryption configuration for CMEK-protected clusters.
   *
   * @generated from field: google.bigtable.admin.v2.Cluster.EncryptionConfig encryption_config = 6;
   */
  encryptionConfig?: Cluster_EncryptionConfig;
};

/**
 * Describes the message google.bigtable.admin.v2.Cluster.
 * Use `create(ClusterSchema)` to create a new message.
 */
export const ClusterSchema: GenMessage<Cluster> = /*@__PURE__*/
  messageDesc(file_google_bigtable_admin_v2_instance, 3);

/**
 * Autoscaling config for a cluster.
 *
 * @generated from message google.bigtable.admin.v2.Cluster.ClusterAutoscalingConfig
 */
export type Cluster_ClusterAutoscalingConfig = Message<"google.bigtable.admin.v2.Cluster.ClusterAutoscalingConfig"> & {
  /**
   * Required. Autoscaling limits for this cluster.
   *
   * @generated from field: google.bigtable.admin.v2.AutoscalingLimits autoscaling_limits = 1;
   */
  autoscalingLimits?: AutoscalingLimits;

  /**
   * Required. Autoscaling targets for this cluster.
   *
   * @generated from field: google.bigtable.admin.v2.AutoscalingTargets autoscaling_targets = 2;
   */
  autoscalingTargets?: AutoscalingTargets;
};

/**
 * Describes the message google.bigtable.admin.v2.Cluster.ClusterAutoscalingConfig.
 * Use `create(Cluster_ClusterAutoscalingConfigSchema)` to create a new message.
 */
export const Cluster_ClusterAutoscalingConfigSchema: GenMessage<Cluster_ClusterAutoscalingConfig> = /*@__PURE__*/
  messageDesc(file_google_bigtable_admin_v2_instance, 3, 0);

/**
 * Configuration for a cluster.
 *
 * @generated from message google.bigtable.admin.v2.Cluster.ClusterConfig
 */
export type Cluster_ClusterConfig = Message<"google.bigtable.admin.v2.Cluster.ClusterConfig"> & {
  /**
   * Autoscaling configuration for this cluster.
   *
   * @generated from field: google.bigtable.admin.v2.Cluster.ClusterAutoscalingConfig cluster_autoscaling_config = 1;
   */
  clusterAutoscalingConfig?: Cluster_ClusterAutoscalingConfig;
};

/**
 * Describes the message google.bigtable.admin.v2.Cluster.ClusterConfig.
 * Use `create(Cluster_ClusterConfigSchema)` to create a new message.
 */
export const Cluster_ClusterConfigSchema: GenMessage<Cluster_ClusterConfig> = /*@__PURE__*/
  messageDesc(file_google_bigtable_admin_v2_instance, 3, 1);

/**
 * Cloud Key Management Service (Cloud KMS) settings for a CMEK-protected
 * cluster.
 *
 * @generated from message google.bigtable.admin.v2.Cluster.EncryptionConfig
 */
export type Cluster_EncryptionConfig = Message<"google.bigtable.admin.v2.Cluster.EncryptionConfig"> & {
  /**
   * Describes the Cloud KMS encryption key that will be used to protect the
   * destination Bigtable cluster. The requirements for this key are:
   *  1) The Cloud Bigtable service account associated with the project that
   *  contains this cluster must be granted the
   *  `cloudkms.cryptoKeyEncrypterDecrypter` role on the CMEK key.
   *  2) Only regional keys can be used and the region of the CMEK key must
   *  match the region of the cluster.
   *  3) All clusters within an instance must use the same CMEK key.
   * Values are of the form
   * `projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}`
   *
   * @generated from field: string kms_key_name = 1;
   */
  kmsKeyName: string;
};

/**
 * Describes the message google.bigtable.admin.v2.Cluster.EncryptionConfig.
 * Use `create(Cluster_EncryptionConfigSchema)` to create a new message.
 */
export const Cluster_EncryptionConfigSchema: GenMessage<Cluster_EncryptionConfig> = /*@__PURE__*/
  messageDesc(file_google_bigtable_admin_v2_instance, 3, 2);

/**
 * Possible states of a cluster.
 *
 * @generated from enum google.bigtable.admin.v2.Cluster.State
 */
export enum Cluster_State {
  /**
   * The state of the cluster could not be determined.
   *
   * @generated from enum value: STATE_NOT_KNOWN = 0;
   */
  STATE_NOT_KNOWN = 0,

  /**
   * The cluster has been successfully created and is ready to serve requests.
   *
   * @generated from enum value: READY = 1;
   */
  READY = 1,

  /**
   * The cluster is currently being created, and may be destroyed
   * if the creation process encounters an error.
   * A cluster may not be able to serve requests while being created.
   *
   * @generated from enum value: CREATING = 2;
   */
  CREATING = 2,

  /**
   * The cluster is currently being resized, and may revert to its previous
   * node count if the process encounters an error.
   * A cluster is still capable of serving requests while being resized,
   * but may exhibit performance as if its number of allocated nodes is
   * between the starting and requested states.
   *
   * @generated from enum value: RESIZING = 3;
   */
  RESIZING = 3,

  /**
   * The cluster has no backing nodes. The data (tables) still
   * exist, but no operations can be performed on the cluster.
   *
   * @generated from enum value: DISABLED = 4;
   */
  DISABLED = 4,
}

/**
 * Describes the enum google.bigtable.admin.v2.Cluster.State.
 */
export const Cluster_StateSchema: GenEnum<Cluster_State> = /*@__PURE__*/
  enumDesc(file_google_bigtable_admin_v2_instance, 3, 0);

/**
 * Possible node scaling factors of the clusters. Node scaling delivers better
 * latency and more throughput by removing node boundaries.
 *
 * @generated from enum google.bigtable.admin.v2.Cluster.NodeScalingFactor
 */
export enum Cluster_NodeScalingFactor {
  /**
   * No node scaling specified. Defaults to NODE_SCALING_FACTOR_1X.
   *
   * @generated from enum value: NODE_SCALING_FACTOR_UNSPECIFIED = 0;
   */
  NODE_SCALING_FACTOR_UNSPECIFIED = 0,

  /**
   * The cluster is running with a scaling factor of 1.
   *
   * @generated from enum value: NODE_SCALING_FACTOR_1X = 1;
   */
  NODE_SCALING_FACTOR_1X = 1,

  /**
   * The cluster is running with a scaling factor of 2.
   * All node count values must be in increments of 2 with this scaling factor
   * enabled, otherwise an INVALID_ARGUMENT error will be returned.
   *
   * @generated from enum value: NODE_SCALING_FACTOR_2X = 2;
   */
  NODE_SCALING_FACTOR_2X = 2,
}

/**
 * Describes the enum google.bigtable.admin.v2.Cluster.NodeScalingFactor.
 */
export const Cluster_NodeScalingFactorSchema: GenEnum<Cluster_NodeScalingFactor> = /*@__PURE__*/
  enumDesc(file_google_bigtable_admin_v2_instance, 3, 1);

/**
 * A configuration object describing how Cloud Bigtable should treat traffic
 * from a particular end user application.
 *
 * @generated from message google.bigtable.admin.v2.AppProfile
 */
export type AppProfile = Message<"google.bigtable.admin.v2.AppProfile"> & {
  /**
   * The unique name of the app profile. Values are of the form
   * `projects/{project}/instances/{instance}/appProfiles/[_a-zA-Z0-9][-_.a-zA-Z0-9]*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Strongly validated etag for optimistic concurrency control. Preserve the
   * value returned from `GetAppProfile` when calling `UpdateAppProfile` to
   * fail the request if there has been a modification in the mean time. The
   * `update_mask` of the request need not include `etag` for this protection
   * to apply.
   * See [Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag) and
   * [RFC 7232](https://tools.ietf.org/html/rfc7232#section-2.3) for more
   * details.
   *
   * @generated from field: string etag = 2;
   */
  etag: string;

  /**
   * Long form description of the use case for this AppProfile.
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * The routing policy for all read/write requests that use this app profile.
   * A value must be explicitly set.
   *
   * @generated from oneof google.bigtable.admin.v2.AppProfile.routing_policy
   */
  routingPolicy: {
    /**
     * Use a multi-cluster routing policy.
     *
     * @generated from field: google.bigtable.admin.v2.AppProfile.MultiClusterRoutingUseAny multi_cluster_routing_use_any = 5;
     */
    value: AppProfile_MultiClusterRoutingUseAny;
    case: "multiClusterRoutingUseAny";
  } | {
    /**
     * Use a single-cluster routing policy.
     *
     * @generated from field: google.bigtable.admin.v2.AppProfile.SingleClusterRouting single_cluster_routing = 6;
     */
    value: AppProfile_SingleClusterRouting;
    case: "singleClusterRouting";
  } | { case: undefined; value?: undefined };

  /**
   * Options for isolating this app profile's traffic from other use cases.
   *
   * @generated from oneof google.bigtable.admin.v2.AppProfile.isolation
   */
  isolation: {
    /**
     * This field has been deprecated in favor of `standard_isolation.priority`.
     * If you set this field, `standard_isolation.priority` will be set instead.
     *
     * The priority of requests sent using this app profile.
     *
     * @generated from field: google.bigtable.admin.v2.AppProfile.Priority priority = 7 [deprecated = true];
     * @deprecated
     */
    value: AppProfile_Priority;
    case: "priority";
  } | {
    /**
     * The standard options used for isolating this app profile's traffic from
     * other use cases.
     *
     * @generated from field: google.bigtable.admin.v2.AppProfile.StandardIsolation standard_isolation = 11;
     */
    value: AppProfile_StandardIsolation;
    case: "standardIsolation";
  } | {
    /**
     * Specifies that this app profile is intended for read-only usage via the
     * Data Boost feature.
     *
     * @generated from field: google.bigtable.admin.v2.AppProfile.DataBoostIsolationReadOnly data_boost_isolation_read_only = 10;
     */
    value: AppProfile_DataBoostIsolationReadOnly;
    case: "dataBoostIsolationReadOnly";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.bigtable.admin.v2.AppProfile.
 * Use `create(AppProfileSchema)` to create a new message.
 */
export const AppProfileSchema: GenMessage<AppProfile> = /*@__PURE__*/
  messageDesc(file_google_bigtable_admin_v2_instance, 4);

/**
 * Read/write requests are routed to the nearest cluster in the instance, and
 * will fail over to the nearest cluster that is available in the event of
 * transient errors or delays. Clusters in a region are considered
 * equidistant. Choosing this option sacrifices read-your-writes consistency
 * to improve availability.
 *
 * @generated from message google.bigtable.admin.v2.AppProfile.MultiClusterRoutingUseAny
 */
export type AppProfile_MultiClusterRoutingUseAny = Message<"google.bigtable.admin.v2.AppProfile.MultiClusterRoutingUseAny"> & {
  /**
   * The set of clusters to route to. The order is ignored; clusters will be
   * tried in order of distance. If left empty, all clusters are eligible.
   *
   * @generated from field: repeated string cluster_ids = 1;
   */
  clusterIds: string[];

  /**
   * Possible algorithms for routing affinity. If enabled, Bigtable will
   * route between equidistant clusters in a deterministic order rather than
   * choosing randomly.
   *
   * This mechanism gives read-your-writes consistency for *most* requests
   * under *most* circumstances, without sacrificing availability. Consistency
   * is *not* guaranteed, as requests might still fail over between clusters
   * in the event of errors or latency.
   *
   * @generated from oneof google.bigtable.admin.v2.AppProfile.MultiClusterRoutingUseAny.affinity
   */
  affinity: {
    /**
     * Row affinity sticky routing based on the row key of the request.
     * Requests that span multiple rows are routed non-deterministically.
     *
     * @generated from field: google.bigtable.admin.v2.AppProfile.MultiClusterRoutingUseAny.RowAffinity row_affinity = 3;
     */
    value: AppProfile_MultiClusterRoutingUseAny_RowAffinity;
    case: "rowAffinity";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.bigtable.admin.v2.AppProfile.MultiClusterRoutingUseAny.
 * Use `create(AppProfile_MultiClusterRoutingUseAnySchema)` to create a new message.
 */
export const AppProfile_MultiClusterRoutingUseAnySchema: GenMessage<AppProfile_MultiClusterRoutingUseAny> = /*@__PURE__*/
  messageDesc(file_google_bigtable_admin_v2_instance, 4, 0);

/**
 * If enabled, Bigtable will route the request based on the row key of the
 * request, rather than randomly. Instead, each row key will be assigned
 * to a cluster, and will stick to that cluster. If clusters are added or
 * removed, then this may affect which row keys stick to which clusters.
 * To avoid this, users can use a cluster group to specify which clusters
 * are to be used. In this case, new clusters that are not a part of the
 * cluster group will not be routed to, and routing will be unaffected by
 * the new cluster. Moreover, clusters specified in the cluster group cannot
 * be deleted unless removed from the cluster group.
 *
 * @generated from message google.bigtable.admin.v2.AppProfile.MultiClusterRoutingUseAny.RowAffinity
 */
export type AppProfile_MultiClusterRoutingUseAny_RowAffinity = Message<"google.bigtable.admin.v2.AppProfile.MultiClusterRoutingUseAny.RowAffinity"> & {
};

/**
 * Describes the message google.bigtable.admin.v2.AppProfile.MultiClusterRoutingUseAny.RowAffinity.
 * Use `create(AppProfile_MultiClusterRoutingUseAny_RowAffinitySchema)` to create a new message.
 */
export const AppProfile_MultiClusterRoutingUseAny_RowAffinitySchema: GenMessage<AppProfile_MultiClusterRoutingUseAny_RowAffinity> = /*@__PURE__*/
  messageDesc(file_google_bigtable_admin_v2_instance, 4, 0, 0);

/**
 * Unconditionally routes all read/write requests to a specific cluster.
 * This option preserves read-your-writes consistency but does not improve
 * availability.
 *
 * @generated from message google.bigtable.admin.v2.AppProfile.SingleClusterRouting
 */
export type AppProfile_SingleClusterRouting = Message<"google.bigtable.admin.v2.AppProfile.SingleClusterRouting"> & {
  /**
   * The cluster to which read/write requests should be routed.
   *
   * @generated from field: string cluster_id = 1;
   */
  clusterId: string;

  /**
   * Whether or not `CheckAndMutateRow` and `ReadModifyWriteRow` requests are
   * allowed by this app profile. It is unsafe to send these requests to
   * the same table/row/column in multiple clusters.
   *
   * @generated from field: bool allow_transactional_writes = 2;
   */
  allowTransactionalWrites: boolean;
};

/**
 * Describes the message google.bigtable.admin.v2.AppProfile.SingleClusterRouting.
 * Use `create(AppProfile_SingleClusterRoutingSchema)` to create a new message.
 */
export const AppProfile_SingleClusterRoutingSchema: GenMessage<AppProfile_SingleClusterRouting> = /*@__PURE__*/
  messageDesc(file_google_bigtable_admin_v2_instance, 4, 1);

/**
 * Standard options for isolating this app profile's traffic from other use
 * cases.
 *
 * @generated from message google.bigtable.admin.v2.AppProfile.StandardIsolation
 */
export type AppProfile_StandardIsolation = Message<"google.bigtable.admin.v2.AppProfile.StandardIsolation"> & {
  /**
   * The priority of requests sent using this app profile.
   *
   * @generated from field: google.bigtable.admin.v2.AppProfile.Priority priority = 1;
   */
  priority: AppProfile_Priority;
};

/**
 * Describes the message google.bigtable.admin.v2.AppProfile.StandardIsolation.
 * Use `create(AppProfile_StandardIsolationSchema)` to create a new message.
 */
export const AppProfile_StandardIsolationSchema: GenMessage<AppProfile_StandardIsolation> = /*@__PURE__*/
  messageDesc(file_google_bigtable_admin_v2_instance, 4, 2);

/**
 * Data Boost is a serverless compute capability that lets you run
 * high-throughput read jobs on your Bigtable data, without impacting the
 * performance of the clusters that handle your application traffic.
 * Currently, Data Boost exclusively supports read-only use-cases with
 * single-cluster routing.
 *
 * Data Boost reads are only guaranteed to see the results of writes that
 * were written at least 30 minutes ago. This means newly written values may
 * not become visible for up to 30m, and also means that old values may
 * remain visible for up to 30m after being deleted or overwritten. To
 * mitigate the staleness of the data, users may either wait 30m, or use
 * CheckConsistency.
 *
 * @generated from message google.bigtable.admin.v2.AppProfile.DataBoostIsolationReadOnly
 */
export type AppProfile_DataBoostIsolationReadOnly = Message<"google.bigtable.admin.v2.AppProfile.DataBoostIsolationReadOnly"> & {
  /**
   * The Compute Billing Owner for this Data Boost App Profile.
   *
   * @generated from field: optional google.bigtable.admin.v2.AppProfile.DataBoostIsolationReadOnly.ComputeBillingOwner compute_billing_owner = 1;
   */
  computeBillingOwner?: AppProfile_DataBoostIsolationReadOnly_ComputeBillingOwner;
};

/**
 * Describes the message google.bigtable.admin.v2.AppProfile.DataBoostIsolationReadOnly.
 * Use `create(AppProfile_DataBoostIsolationReadOnlySchema)` to create a new message.
 */
export const AppProfile_DataBoostIsolationReadOnlySchema: GenMessage<AppProfile_DataBoostIsolationReadOnly> = /*@__PURE__*/
  messageDesc(file_google_bigtable_admin_v2_instance, 4, 3);

/**
 * Compute Billing Owner specifies how usage should be accounted when using
 * Data Boost. Compute Billing Owner also configures which Cloud Project is
 * charged for relevant quota.
 *
 * @generated from enum google.bigtable.admin.v2.AppProfile.DataBoostIsolationReadOnly.ComputeBillingOwner
 */
export enum AppProfile_DataBoostIsolationReadOnly_ComputeBillingOwner {
  /**
   * Unspecified value.
   *
   * @generated from enum value: COMPUTE_BILLING_OWNER_UNSPECIFIED = 0;
   */
  COMPUTE_BILLING_OWNER_UNSPECIFIED = 0,

  /**
   * The host Cloud Project containing the targeted Bigtable Instance /
   * Table pays for compute.
   *
   * @generated from enum value: HOST_PAYS = 1;
   */
  HOST_PAYS = 1,
}

/**
 * Describes the enum google.bigtable.admin.v2.AppProfile.DataBoostIsolationReadOnly.ComputeBillingOwner.
 */
export const AppProfile_DataBoostIsolationReadOnly_ComputeBillingOwnerSchema: GenEnum<AppProfile_DataBoostIsolationReadOnly_ComputeBillingOwner> = /*@__PURE__*/
  enumDesc(file_google_bigtable_admin_v2_instance, 4, 3, 0);

/**
 * Possible priorities for an app profile. Note that higher priority writes
 * can sometimes queue behind lower priority writes to the same tablet, as
 * writes must be strictly sequenced in the durability log.
 *
 * @generated from enum google.bigtable.admin.v2.AppProfile.Priority
 */
export enum AppProfile_Priority {
  /**
   * Default value. Mapped to PRIORITY_HIGH (the legacy behavior) on creation.
   *
   * @generated from enum value: PRIORITY_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PRIORITY_LOW = 1;
   */
  LOW = 1,

  /**
   * @generated from enum value: PRIORITY_MEDIUM = 2;
   */
  MEDIUM = 2,

  /**
   * @generated from enum value: PRIORITY_HIGH = 3;
   */
  HIGH = 3,
}

/**
 * Describes the enum google.bigtable.admin.v2.AppProfile.Priority.
 */
export const AppProfile_PrioritySchema: GenEnum<AppProfile_Priority> = /*@__PURE__*/
  enumDesc(file_google_bigtable_admin_v2_instance, 4, 0);

/**
 * A tablet is a defined by a start and end key and is explained in
 * https://cloud.google.com/bigtable/docs/overview#architecture and
 * https://cloud.google.com/bigtable/docs/performance#optimization.
 * A Hot tablet is a tablet that exhibits high average cpu usage during the time
 * interval from start time to end time.
 *
 * @generated from message google.bigtable.admin.v2.HotTablet
 */
export type HotTablet = Message<"google.bigtable.admin.v2.HotTablet"> & {
  /**
   * The unique name of the hot tablet. Values are of the form
   * `projects/{project}/instances/{instance}/clusters/{cluster}/hotTablets/[a-zA-Z0-9_-]*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Name of the table that contains the tablet. Values are of the form
   * `projects/{project}/instances/{instance}/tables/[_a-zA-Z0-9][-_.a-zA-Z0-9]*`.
   *
   * @generated from field: string table_name = 2;
   */
  tableName: string;

  /**
   * Output only. The start time of the hot tablet.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 3;
   */
  startTime?: Timestamp;

  /**
   * Output only. The end time of the hot tablet.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 4;
   */
  endTime?: Timestamp;

  /**
   * Tablet Start Key (inclusive).
   *
   * @generated from field: string start_key = 5;
   */
  startKey: string;

  /**
   * Tablet End Key (inclusive).
   *
   * @generated from field: string end_key = 6;
   */
  endKey: string;

  /**
   * Output only. The average CPU usage spent by a node on this tablet over the
   * start_time to end_time time range. The percentage is the amount of CPU used
   * by the node to serve the tablet, from 0% (tablet was not interacted with)
   * to 100% (the node spent all cycles serving the hot tablet).
   *
   * @generated from field: float node_cpu_usage_percent = 7;
   */
  nodeCpuUsagePercent: number;
};

/**
 * Describes the message google.bigtable.admin.v2.HotTablet.
 * Use `create(HotTabletSchema)` to create a new message.
 */
export const HotTabletSchema: GenMessage<HotTablet> = /*@__PURE__*/
  messageDesc(file_google_bigtable_admin_v2_instance, 5);
