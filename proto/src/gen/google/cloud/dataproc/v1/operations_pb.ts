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
// @generated from file google/cloud/dataproc/v1/operations.proto (package google.cloud.dataproc.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/dataproc/v1/operations.proto.
 */
export const file_google_cloud_dataproc_v1_operations: GenFile = /*@__PURE__*/
  fileDesc("Cilnb29nbGUvY2xvdWQvZGF0YXByb2MvdjEvb3BlcmF0aW9ucy5wcm90bxIYZ29vZ2xlLmNsb3VkLmRhdGFwcm9jLnYxIuMDChZCYXRjaE9wZXJhdGlvbk1ldGFkYXRhEg0KBWJhdGNoGAEgASgJEhIKCmJhdGNoX3V1aWQYAiABKAkSLwoLY3JlYXRlX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi0KCWRvbmVfdGltZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASWwoOb3BlcmF0aW9uX3R5cGUYBiABKA4yQy5nb29nbGUuY2xvdWQuZGF0YXByb2MudjEuQmF0Y2hPcGVyYXRpb25NZXRhZGF0YS5CYXRjaE9wZXJhdGlvblR5cGUSEwoLZGVzY3JpcHRpb24YByABKAkSTAoGbGFiZWxzGAggAygLMjwuZ29vZ2xlLmNsb3VkLmRhdGFwcm9jLnYxLkJhdGNoT3BlcmF0aW9uTWV0YWRhdGEuTGFiZWxzRW50cnkSEAoId2FybmluZ3MYCSADKAkaLQoLTGFiZWxzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ASJFChJCYXRjaE9wZXJhdGlvblR5cGUSJAogQkFUQ0hfT1BFUkFUSU9OX1RZUEVfVU5TUEVDSUZJRUQQABIJCgVCQVRDSBABIo8EChhTZXNzaW9uT3BlcmF0aW9uTWV0YWRhdGESDwoHc2Vzc2lvbhgBIAEoCRIUCgxzZXNzaW9uX3V1aWQYAiABKAkSLwoLY3JlYXRlX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi0KCWRvbmVfdGltZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASXwoOb3BlcmF0aW9uX3R5cGUYBiABKA4yRy5nb29nbGUuY2xvdWQuZGF0YXByb2MudjEuU2Vzc2lvbk9wZXJhdGlvbk1ldGFkYXRhLlNlc3Npb25PcGVyYXRpb25UeXBlEhMKC2Rlc2NyaXB0aW9uGAcgASgJEk4KBmxhYmVscxgIIAMoCzI+Lmdvb2dsZS5jbG91ZC5kYXRhcHJvYy52MS5TZXNzaW9uT3BlcmF0aW9uTWV0YWRhdGEuTGFiZWxzRW50cnkSEAoId2FybmluZ3MYCSADKAkaLQoLTGFiZWxzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ASJlChRTZXNzaW9uT3BlcmF0aW9uVHlwZRImCiJTRVNTSU9OX09QRVJBVElPTl9UWVBFX1VOU1BFQ0lGSUVEEAASCgoGQ1JFQVRFEAESDQoJVEVSTUlOQVRFEAISCgoGREVMRVRFEAMiiQIKFkNsdXN0ZXJPcGVyYXRpb25TdGF0dXMSSgoFc3RhdGUYASABKA4yNi5nb29nbGUuY2xvdWQuZGF0YXByb2MudjEuQ2x1c3Rlck9wZXJhdGlvblN0YXR1cy5TdGF0ZUID4EEDEhgKC2lubmVyX3N0YXRlGAIgASgJQgPgQQMSFAoHZGV0YWlscxgDIAEoCUID4EEDEjkKEHN0YXRlX3N0YXJ0X3RpbWUYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMiOAoFU3RhdGUSCwoHVU5LTk9XThAAEgsKB1BFTkRJTkcQARILCgdSVU5OSU5HEAISCAoERE9ORRADItoDChhDbHVzdGVyT3BlcmF0aW9uTWV0YWRhdGESGQoMY2x1c3Rlcl9uYW1lGAcgASgJQgPgQQMSGQoMY2x1c3Rlcl91dWlkGAggASgJQgPgQQMSRQoGc3RhdHVzGAkgASgLMjAuZ29vZ2xlLmNsb3VkLmRhdGFwcm9jLnYxLkNsdXN0ZXJPcGVyYXRpb25TdGF0dXNCA+BBAxJNCg5zdGF0dXNfaGlzdG9yeRgKIAMoCzIwLmdvb2dsZS5jbG91ZC5kYXRhcHJvYy52MS5DbHVzdGVyT3BlcmF0aW9uU3RhdHVzQgPgQQMSGwoOb3BlcmF0aW9uX3R5cGUYCyABKAlCA+BBAxIYCgtkZXNjcmlwdGlvbhgMIAEoCUID4EEDElMKBmxhYmVscxgNIAMoCzI+Lmdvb2dsZS5jbG91ZC5kYXRhcHJvYy52MS5DbHVzdGVyT3BlcmF0aW9uTWV0YWRhdGEuTGFiZWxzRW50cnlCA+BBAxIVCgh3YXJuaW5ncxgOIAMoCUID4EEDEiAKE2NoaWxkX29wZXJhdGlvbl9pZHMYDyADKAlCA+BBAxotCgtMYWJlbHNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBIvoEChpOb2RlR3JvdXBPcGVyYXRpb25NZXRhZGF0YRIaCg1ub2RlX2dyb3VwX2lkGAEgASgJQgPgQQMSGQoMY2x1c3Rlcl91dWlkGAIgASgJQgPgQQMSRQoGc3RhdHVzGAMgASgLMjAuZ29vZ2xlLmNsb3VkLmRhdGFwcm9jLnYxLkNsdXN0ZXJPcGVyYXRpb25TdGF0dXNCA+BBAxJNCg5zdGF0dXNfaGlzdG9yeRgEIAMoCzIwLmdvb2dsZS5jbG91ZC5kYXRhcHJvYy52MS5DbHVzdGVyT3BlcmF0aW9uU3RhdHVzQgPgQQMSYwoOb3BlcmF0aW9uX3R5cGUYBSABKA4ySy5nb29nbGUuY2xvdWQuZGF0YXByb2MudjEuTm9kZUdyb3VwT3BlcmF0aW9uTWV0YWRhdGEuTm9kZUdyb3VwT3BlcmF0aW9uVHlwZRIYCgtkZXNjcmlwdGlvbhgGIAEoCUID4EEDElUKBmxhYmVscxgHIAMoCzJALmdvb2dsZS5jbG91ZC5kYXRhcHJvYy52MS5Ob2RlR3JvdXBPcGVyYXRpb25NZXRhZGF0YS5MYWJlbHNFbnRyeUID4EEDEhUKCHdhcm5pbmdzGAggAygJQgPgQQMaLQoLTGFiZWxzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ASJzChZOb2RlR3JvdXBPcGVyYXRpb25UeXBlEikKJU5PREVfR1JPVVBfT1BFUkFUSU9OX1RZUEVfVU5TUEVDSUZJRUQQABIKCgZDUkVBVEUQARIKCgZVUERBVEUQAhIKCgZERUxFVEUQAxIKCgZSRVNJWkUQBEJuChxjb20uZ29vZ2xlLmNsb3VkLmRhdGFwcm9jLnYxQg9PcGVyYXRpb25zUHJvdG9QAVo7Y2xvdWQuZ29vZ2xlLmNvbS9nby9kYXRhcHJvYy92Mi9hcGl2MS9kYXRhcHJvY3BiO2RhdGFwcm9jcGJiBnByb3RvMw", [file_google_api_field_behavior, file_google_protobuf_timestamp]);

/**
 * Metadata describing the Batch operation.
 *
 * @generated from message google.cloud.dataproc.v1.BatchOperationMetadata
 */
export type BatchOperationMetadata = Message<"google.cloud.dataproc.v1.BatchOperationMetadata"> & {
  /**
   * Name of the batch for the operation.
   *
   * @generated from field: string batch = 1;
   */
  batch: string;

  /**
   * Batch UUID for the operation.
   *
   * @generated from field: string batch_uuid = 2;
   */
  batchUuid: string;

  /**
   * The time when the operation was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 3;
   */
  createTime?: Timestamp;

  /**
   * The time when the operation finished.
   *
   * @generated from field: google.protobuf.Timestamp done_time = 4;
   */
  doneTime?: Timestamp;

  /**
   * The operation type.
   *
   * @generated from field: google.cloud.dataproc.v1.BatchOperationMetadata.BatchOperationType operation_type = 6;
   */
  operationType: BatchOperationMetadata_BatchOperationType;

  /**
   * Short description of the operation.
   *
   * @generated from field: string description = 7;
   */
  description: string;

  /**
   * Labels associated with the operation.
   *
   * @generated from field: map<string, string> labels = 8;
   */
  labels: { [key: string]: string };

  /**
   * Warnings encountered during operation execution.
   *
   * @generated from field: repeated string warnings = 9;
   */
  warnings: string[];
};

/**
 * Describes the message google.cloud.dataproc.v1.BatchOperationMetadata.
 * Use `create(BatchOperationMetadataSchema)` to create a new message.
 */
export const BatchOperationMetadataSchema: GenMessage<BatchOperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_dataproc_v1_operations, 0);

/**
 * Operation type for Batch resources
 *
 * @generated from enum google.cloud.dataproc.v1.BatchOperationMetadata.BatchOperationType
 */
export enum BatchOperationMetadata_BatchOperationType {
  /**
   * Batch operation type is unknown.
   *
   * @generated from enum value: BATCH_OPERATION_TYPE_UNSPECIFIED = 0;
   */
  BATCH_OPERATION_TYPE_UNSPECIFIED = 0,

  /**
   * Batch operation type.
   *
   * @generated from enum value: BATCH = 1;
   */
  BATCH = 1,
}

/**
 * Describes the enum google.cloud.dataproc.v1.BatchOperationMetadata.BatchOperationType.
 */
export const BatchOperationMetadata_BatchOperationTypeSchema: GenEnum<BatchOperationMetadata_BatchOperationType> = /*@__PURE__*/
  enumDesc(file_google_cloud_dataproc_v1_operations, 0, 0);

/**
 * Metadata describing the Session operation.
 *
 * @generated from message google.cloud.dataproc.v1.SessionOperationMetadata
 */
export type SessionOperationMetadata = Message<"google.cloud.dataproc.v1.SessionOperationMetadata"> & {
  /**
   * Name of the session for the operation.
   *
   * @generated from field: string session = 1;
   */
  session: string;

  /**
   * Session UUID for the operation.
   *
   * @generated from field: string session_uuid = 2;
   */
  sessionUuid: string;

  /**
   * The time when the operation was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 3;
   */
  createTime?: Timestamp;

  /**
   * The time when the operation was finished.
   *
   * @generated from field: google.protobuf.Timestamp done_time = 4;
   */
  doneTime?: Timestamp;

  /**
   * The operation type.
   *
   * @generated from field: google.cloud.dataproc.v1.SessionOperationMetadata.SessionOperationType operation_type = 6;
   */
  operationType: SessionOperationMetadata_SessionOperationType;

  /**
   * Short description of the operation.
   *
   * @generated from field: string description = 7;
   */
  description: string;

  /**
   * Labels associated with the operation.
   *
   * @generated from field: map<string, string> labels = 8;
   */
  labels: { [key: string]: string };

  /**
   * Warnings encountered during operation execution.
   *
   * @generated from field: repeated string warnings = 9;
   */
  warnings: string[];
};

/**
 * Describes the message google.cloud.dataproc.v1.SessionOperationMetadata.
 * Use `create(SessionOperationMetadataSchema)` to create a new message.
 */
export const SessionOperationMetadataSchema: GenMessage<SessionOperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_dataproc_v1_operations, 1);

/**
 * Operation type for Session resources
 *
 * @generated from enum google.cloud.dataproc.v1.SessionOperationMetadata.SessionOperationType
 */
export enum SessionOperationMetadata_SessionOperationType {
  /**
   * Session operation type is unknown.
   *
   * @generated from enum value: SESSION_OPERATION_TYPE_UNSPECIFIED = 0;
   */
  SESSION_OPERATION_TYPE_UNSPECIFIED = 0,

  /**
   * Create Session operation type.
   *
   * @generated from enum value: CREATE = 1;
   */
  CREATE = 1,

  /**
   * Terminate Session operation type.
   *
   * @generated from enum value: TERMINATE = 2;
   */
  TERMINATE = 2,

  /**
   * Delete Session operation type.
   *
   * @generated from enum value: DELETE = 3;
   */
  DELETE = 3,
}

/**
 * Describes the enum google.cloud.dataproc.v1.SessionOperationMetadata.SessionOperationType.
 */
export const SessionOperationMetadata_SessionOperationTypeSchema: GenEnum<SessionOperationMetadata_SessionOperationType> = /*@__PURE__*/
  enumDesc(file_google_cloud_dataproc_v1_operations, 1, 0);

/**
 * The status of the operation.
 *
 * @generated from message google.cloud.dataproc.v1.ClusterOperationStatus
 */
export type ClusterOperationStatus = Message<"google.cloud.dataproc.v1.ClusterOperationStatus"> & {
  /**
   * Output only. A message containing the operation state.
   *
   * @generated from field: google.cloud.dataproc.v1.ClusterOperationStatus.State state = 1;
   */
  state: ClusterOperationStatus_State;

  /**
   * Output only. A message containing the detailed operation state.
   *
   * @generated from field: string inner_state = 2;
   */
  innerState: string;

  /**
   * Output only. A message containing any operation metadata details.
   *
   * @generated from field: string details = 3;
   */
  details: string;

  /**
   * Output only. The time this state was entered.
   *
   * @generated from field: google.protobuf.Timestamp state_start_time = 4;
   */
  stateStartTime?: Timestamp;
};

/**
 * Describes the message google.cloud.dataproc.v1.ClusterOperationStatus.
 * Use `create(ClusterOperationStatusSchema)` to create a new message.
 */
export const ClusterOperationStatusSchema: GenMessage<ClusterOperationStatus> = /*@__PURE__*/
  messageDesc(file_google_cloud_dataproc_v1_operations, 2);

/**
 * The operation state.
 *
 * @generated from enum google.cloud.dataproc.v1.ClusterOperationStatus.State
 */
export enum ClusterOperationStatus_State {
  /**
   * Unused.
   *
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * The operation has been created.
   *
   * @generated from enum value: PENDING = 1;
   */
  PENDING = 1,

  /**
   * The operation is running.
   *
   * @generated from enum value: RUNNING = 2;
   */
  RUNNING = 2,

  /**
   * The operation is done; either cancelled or completed.
   *
   * @generated from enum value: DONE = 3;
   */
  DONE = 3,
}

/**
 * Describes the enum google.cloud.dataproc.v1.ClusterOperationStatus.State.
 */
export const ClusterOperationStatus_StateSchema: GenEnum<ClusterOperationStatus_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_dataproc_v1_operations, 2, 0);

/**
 * Metadata describing the operation.
 *
 * @generated from message google.cloud.dataproc.v1.ClusterOperationMetadata
 */
export type ClusterOperationMetadata = Message<"google.cloud.dataproc.v1.ClusterOperationMetadata"> & {
  /**
   * Output only. Name of the cluster for the operation.
   *
   * @generated from field: string cluster_name = 7;
   */
  clusterName: string;

  /**
   * Output only. Cluster UUID for the operation.
   *
   * @generated from field: string cluster_uuid = 8;
   */
  clusterUuid: string;

  /**
   * Output only. Current operation status.
   *
   * @generated from field: google.cloud.dataproc.v1.ClusterOperationStatus status = 9;
   */
  status?: ClusterOperationStatus;

  /**
   * Output only. The previous operation status.
   *
   * @generated from field: repeated google.cloud.dataproc.v1.ClusterOperationStatus status_history = 10;
   */
  statusHistory: ClusterOperationStatus[];

  /**
   * Output only. The operation type.
   *
   * @generated from field: string operation_type = 11;
   */
  operationType: string;

  /**
   * Output only. Short description of operation.
   *
   * @generated from field: string description = 12;
   */
  description: string;

  /**
   * Output only. Labels associated with the operation
   *
   * @generated from field: map<string, string> labels = 13;
   */
  labels: { [key: string]: string };

  /**
   * Output only. Errors encountered during operation execution.
   *
   * @generated from field: repeated string warnings = 14;
   */
  warnings: string[];

  /**
   * Output only. Child operation ids
   *
   * @generated from field: repeated string child_operation_ids = 15;
   */
  childOperationIds: string[];
};

/**
 * Describes the message google.cloud.dataproc.v1.ClusterOperationMetadata.
 * Use `create(ClusterOperationMetadataSchema)` to create a new message.
 */
export const ClusterOperationMetadataSchema: GenMessage<ClusterOperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_dataproc_v1_operations, 3);

/**
 * Metadata describing the node group operation.
 *
 * @generated from message google.cloud.dataproc.v1.NodeGroupOperationMetadata
 */
export type NodeGroupOperationMetadata = Message<"google.cloud.dataproc.v1.NodeGroupOperationMetadata"> & {
  /**
   * Output only. Node group ID for the operation.
   *
   * @generated from field: string node_group_id = 1;
   */
  nodeGroupId: string;

  /**
   * Output only. Cluster UUID associated with the node group operation.
   *
   * @generated from field: string cluster_uuid = 2;
   */
  clusterUuid: string;

  /**
   * Output only. Current operation status.
   *
   * @generated from field: google.cloud.dataproc.v1.ClusterOperationStatus status = 3;
   */
  status?: ClusterOperationStatus;

  /**
   * Output only. The previous operation status.
   *
   * @generated from field: repeated google.cloud.dataproc.v1.ClusterOperationStatus status_history = 4;
   */
  statusHistory: ClusterOperationStatus[];

  /**
   * The operation type.
   *
   * @generated from field: google.cloud.dataproc.v1.NodeGroupOperationMetadata.NodeGroupOperationType operation_type = 5;
   */
  operationType: NodeGroupOperationMetadata_NodeGroupOperationType;

  /**
   * Output only. Short description of operation.
   *
   * @generated from field: string description = 6;
   */
  description: string;

  /**
   * Output only. Labels associated with the operation.
   *
   * @generated from field: map<string, string> labels = 7;
   */
  labels: { [key: string]: string };

  /**
   * Output only. Errors encountered during operation execution.
   *
   * @generated from field: repeated string warnings = 8;
   */
  warnings: string[];
};

/**
 * Describes the message google.cloud.dataproc.v1.NodeGroupOperationMetadata.
 * Use `create(NodeGroupOperationMetadataSchema)` to create a new message.
 */
export const NodeGroupOperationMetadataSchema: GenMessage<NodeGroupOperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_dataproc_v1_operations, 4);

/**
 * Operation type for node group resources.
 *
 * @generated from enum google.cloud.dataproc.v1.NodeGroupOperationMetadata.NodeGroupOperationType
 */
export enum NodeGroupOperationMetadata_NodeGroupOperationType {
  /**
   * Node group operation type is unknown.
   *
   * @generated from enum value: NODE_GROUP_OPERATION_TYPE_UNSPECIFIED = 0;
   */
  NODE_GROUP_OPERATION_TYPE_UNSPECIFIED = 0,

  /**
   * Create node group operation type.
   *
   * @generated from enum value: CREATE = 1;
   */
  CREATE = 1,

  /**
   * Update node group operation type.
   *
   * @generated from enum value: UPDATE = 2;
   */
  UPDATE = 2,

  /**
   * Delete node group operation type.
   *
   * @generated from enum value: DELETE = 3;
   */
  DELETE = 3,

  /**
   * Resize node group operation type.
   *
   * @generated from enum value: RESIZE = 4;
   */
  RESIZE = 4,
}

/**
 * Describes the enum google.cloud.dataproc.v1.NodeGroupOperationMetadata.NodeGroupOperationType.
 */
export const NodeGroupOperationMetadata_NodeGroupOperationTypeSchema: GenEnum<NodeGroupOperationMetadata_NodeGroupOperationType> = /*@__PURE__*/
  enumDesc(file_google_cloud_dataproc_v1_operations, 4, 0);
