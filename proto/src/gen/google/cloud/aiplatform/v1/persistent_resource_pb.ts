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
// @generated from file google/cloud/aiplatform/v1/persistent_resource.proto (package google.cloud.aiplatform.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { EncryptionSpec } from "./encryption_spec_pb";
import { file_google_cloud_aiplatform_v1_encryption_spec } from "./encryption_spec_pb";
import type { DiskSpec, MachineSpec } from "./machine_resources_pb";
import { file_google_cloud_aiplatform_v1_machine_resources } from "./machine_resources_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Status } from "../../../rpc/status_pb";
import { file_google_rpc_status } from "../../../rpc/status_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1/persistent_resource.proto.
 */
export const file_google_cloud_aiplatform_v1_persistent_resource: GenFile = /*@__PURE__*/
  fileDesc("CjRnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MS9wZXJzaXN0ZW50X3Jlc291cmNlLnByb3RvEhpnb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MSLeCAoSUGVyc2lzdGVudFJlc291cmNlEhEKBG5hbWUYASABKAlCA+BBBRIZCgxkaXNwbGF5X25hbWUYAiABKAlCA+BBARJFCg5yZXNvdXJjZV9wb29scxgEIAMoCzIoLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLlJlc291cmNlUG9vbEID4EECEkgKBXN0YXRlGAUgASgOMjQuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuUGVyc2lzdGVudFJlc291cmNlLlN0YXRlQgPgQQMSJgoFZXJyb3IYBiABKAsyEi5nb29nbGUucnBjLlN0YXR1c0ID4EEDEjQKC2NyZWF0ZV90aW1lGAcgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjMKCnN0YXJ0X3RpbWUYCCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSNAoLdXBkYXRlX3RpbWUYCSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSTwoGbGFiZWxzGAogAygLMjouZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuUGVyc2lzdGVudFJlc291cmNlLkxhYmVsc0VudHJ5QgPgQQESNwoHbmV0d29yaxgLIAEoCUIm4EEB+kEgCh5jb21wdXRlLmdvb2dsZWFwaXMuY29tL05ldHdvcmsSSAoPZW5jcnlwdGlvbl9zcGVjGAwgASgLMiouZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuRW5jcnlwdGlvblNwZWNCA+BBARJTChVyZXNvdXJjZV9ydW50aW1lX3NwZWMYDSABKAsyLy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5SZXNvdXJjZVJ1bnRpbWVTcGVjQgPgQQESSgoQcmVzb3VyY2VfcnVudGltZRgOIAEoCzIrLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLlJlc291cmNlUnVudGltZUID4EEDEh8KEnJlc2VydmVkX2lwX3JhbmdlcxgPIAMoCUID4EEBGi0KC0xhYmVsc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEicwoFU3RhdGUSFQoRU1RBVEVfVU5TUEVDSUZJRUQQABIQCgxQUk9WSVNJT05JTkcQARILCgdSVU5OSU5HEAMSDAoIU1RPUFBJTkcQBBIJCgVFUlJPUhAFEg0KCVJFQk9PVElORxAGEgwKCFVQREFUSU5HEAc6hQHqQYEBCixhaXBsYXRmb3JtLmdvb2dsZWFwaXMuY29tL1BlcnNpc3RlbnRSZXNvdXJjZRJRcHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L3BlcnNpc3RlbnRSZXNvdXJjZXMve3BlcnNpc3RlbnRfcmVzb3VyY2V9ItsDCgxSZXNvdXJjZVBvb2wSDwoCaWQYASABKAlCA+BBBRJFCgxtYWNoaW5lX3NwZWMYAiABKAsyJy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5NYWNoaW5lU3BlY0IG4EEC4EEFEh8KDXJlcGxpY2FfY291bnQYAyABKANCA+BBAUgAiAEBEjwKCWRpc2tfc3BlYxgEIAEoCzIkLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLkRpc2tTcGVjQgPgQQESHwoSdXNlZF9yZXBsaWNhX2NvdW50GAYgASgDQgPgQQMSVwoQYXV0b3NjYWxpbmdfc3BlYxgHIAEoCzI4Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLlJlc291cmNlUG9vbC5BdXRvc2NhbGluZ1NwZWNCA+BBARqHAQoPQXV0b3NjYWxpbmdTcGVjEiMKEW1pbl9yZXBsaWNhX2NvdW50GAEgASgDQgPgQQFIAIgBARIjChFtYXhfcmVwbGljYV9jb3VudBgCIAEoA0ID4EEBSAGIAQFCFAoSX21pbl9yZXBsaWNhX2NvdW50QhQKEl9tYXhfcmVwbGljYV9jb3VudEIQCg5fcmVwbGljYV9jb3VudCKkAQoTUmVzb3VyY2VSdW50aW1lU3BlYxJRChRzZXJ2aWNlX2FjY291bnRfc3BlYxgCIAEoCzIuLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLlNlcnZpY2VBY2NvdW50U3BlY0ID4EEBEjoKCHJheV9zcGVjGAEgASgLMiMuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuUmF5U3BlY0ID4EEBIvMCCgdSYXlTcGVjEhYKCWltYWdlX3VyaRgBIAEoCUID4EEBEl4KFHJlc291cmNlX3Bvb2xfaW1hZ2VzGAYgAygLMjsuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuUmF5U3BlYy5SZXNvdXJjZVBvb2xJbWFnZXNFbnRyeUID4EEBEicKGmhlYWRfbm9kZV9yZXNvdXJjZV9wb29sX2lkGAcgASgJQgPgQQESRwoPcmF5X21ldHJpY19zcGVjGAggASgLMikuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuUmF5TWV0cmljU3BlY0ID4EEBEkMKDXJheV9sb2dzX3NwZWMYCiABKAsyJy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5SYXlMb2dzU3BlY0ID4EEBGjkKF1Jlc291cmNlUG9vbEltYWdlc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEimwEKD1Jlc291cmNlUnVudGltZRJVCgthY2Nlc3NfdXJpcxgBIAMoCzI7Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLlJlc291cmNlUnVudGltZS5BY2Nlc3NVcmlzRW50cnlCA+BBAxoxCg9BY2Nlc3NVcmlzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ASJeChJTZXJ2aWNlQWNjb3VudFNwZWMSKgodZW5hYmxlX2N1c3RvbV9zZXJ2aWNlX2FjY291bnQYASABKAhCA+BBAhIcCg9zZXJ2aWNlX2FjY291bnQYAiABKAlCA+BBASImCg1SYXlNZXRyaWNTcGVjEhUKCGRpc2FibGVkGAEgASgIQgPgQQEiJAoLUmF5TG9nc1NwZWMSFQoIZGlzYWJsZWQYASABKAhCA+BBAULVAQoeY29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxQhdQZXJzaXN0ZW50UmVzb3VyY2VQcm90b1ABWj5jbG91ZC5nb29nbGUuY29tL2dvL2FpcGxhdGZvcm0vYXBpdjEvYWlwbGF0Zm9ybXBiO2FpcGxhdGZvcm1wYqoCGkdvb2dsZS5DbG91ZC5BSVBsYXRmb3JtLlYxygIaR29vZ2xlXENsb3VkXEFJUGxhdGZvcm1cVjHqAh1Hb29nbGU6OkNsb3VkOjpBSVBsYXRmb3JtOjpWMWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_aiplatform_v1_encryption_spec, file_google_cloud_aiplatform_v1_machine_resources, file_google_protobuf_timestamp, file_google_rpc_status]);

/**
 * Represents long-lasting resources that are dedicated to users to runs custom
 * workloads.
 * A PersistentResource can have multiple node pools and each node
 * pool can have its own machine spec.
 *
 * @generated from message google.cloud.aiplatform.v1.PersistentResource
 */
export type PersistentResource = Message<"google.cloud.aiplatform.v1.PersistentResource"> & {
  /**
   * Immutable. Resource name of a PersistentResource.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. The display name of the PersistentResource.
   * The name can be up to 128 characters long and can consist of any UTF-8
   * characters.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Required. The spec of the pools of different resources.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1.ResourcePool resource_pools = 4;
   */
  resourcePools: ResourcePool[];

  /**
   * Output only. The detailed state of a Study.
   *
   * @generated from field: google.cloud.aiplatform.v1.PersistentResource.State state = 5;
   */
  state: PersistentResource_State;

  /**
   * Output only. Only populated when persistent resource's state is `STOPPING`
   * or `ERROR`.
   *
   * @generated from field: google.rpc.Status error = 6;
   */
  error?: Status;

  /**
   * Output only. Time when the PersistentResource was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 7;
   */
  createTime?: Timestamp;

  /**
   * Output only. Time when the PersistentResource for the first time entered
   * the `RUNNING` state.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 8;
   */
  startTime?: Timestamp;

  /**
   * Output only. Time when the PersistentResource was most recently updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 9;
   */
  updateTime?: Timestamp;

  /**
   * Optional. The labels with user-defined metadata to organize
   * PersistentResource.
   *
   * Label keys and values can be no longer than 64 characters
   * (Unicode codepoints), can only contain lowercase letters, numeric
   * characters, underscores and dashes. International characters are allowed.
   *
   * See https://goo.gl/xmQnxf for more information and examples of labels.
   *
   * @generated from field: map<string, string> labels = 10;
   */
  labels: { [key: string]: string };

  /**
   * Optional. The full name of the Compute Engine
   * [network](/compute/docs/networks-and-firewalls#networks) to peered with
   * Vertex AI to host the persistent resources.
   * For example, `projects/12345/global/networks/myVPC`.
   * [Format](/compute/docs/reference/rest/v1/networks/insert)
   * is of the form `projects/{project}/global/networks/{network}`.
   * Where {project} is a project number, as in `12345`, and {network} is a
   * network name.
   *
   * To specify this field, you must have already [configured VPC Network
   * Peering for Vertex
   * AI](https://cloud.google.com/vertex-ai/docs/general/vpc-peering).
   *
   * If this field is left unspecified, the resources aren't peered with any
   * network.
   *
   * @generated from field: string network = 11;
   */
  network: string;

  /**
   * Optional. Customer-managed encryption key spec for a PersistentResource.
   * If set, this PersistentResource and all sub-resources of this
   * PersistentResource will be secured by this key.
   *
   * @generated from field: google.cloud.aiplatform.v1.EncryptionSpec encryption_spec = 12;
   */
  encryptionSpec?: EncryptionSpec;

  /**
   * Optional. Persistent Resource runtime spec.
   * For example, used for Ray cluster configuration.
   *
   * @generated from field: google.cloud.aiplatform.v1.ResourceRuntimeSpec resource_runtime_spec = 13;
   */
  resourceRuntimeSpec?: ResourceRuntimeSpec;

  /**
   * Output only. Runtime information of the Persistent Resource.
   *
   * @generated from field: google.cloud.aiplatform.v1.ResourceRuntime resource_runtime = 14;
   */
  resourceRuntime?: ResourceRuntime;

  /**
   * Optional. A list of names for the reserved IP ranges under the VPC network
   * that can be used for this persistent resource.
   *
   * If set, we will deploy the persistent resource within the provided IP
   * ranges. Otherwise, the persistent resource is deployed to any IP
   * ranges under the provided VPC network.
   *
   * Example: ['vertex-ai-ip-range'].
   *
   * @generated from field: repeated string reserved_ip_ranges = 15;
   */
  reservedIpRanges: string[];
};

/**
 * Describes the message google.cloud.aiplatform.v1.PersistentResource.
 * Use `create(PersistentResourceSchema)` to create a new message.
 */
export const PersistentResourceSchema: GenMessage<PersistentResource> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_persistent_resource, 0);

/**
 * Describes the PersistentResource state.
 *
 * @generated from enum google.cloud.aiplatform.v1.PersistentResource.State
 */
export enum PersistentResource_State {
  /**
   * Not set.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * The PROVISIONING state indicates the persistent resources is being
   * created.
   *
   * @generated from enum value: PROVISIONING = 1;
   */
  PROVISIONING = 1,

  /**
   * The RUNNING state indicates the persistent resource is healthy and fully
   * usable.
   *
   * @generated from enum value: RUNNING = 3;
   */
  RUNNING = 3,

  /**
   * The STOPPING state indicates the persistent resource is being deleted.
   *
   * @generated from enum value: STOPPING = 4;
   */
  STOPPING = 4,

  /**
   * The ERROR state indicates the persistent resource may be unusable.
   * Details can be found in the `error` field.
   *
   * @generated from enum value: ERROR = 5;
   */
  ERROR = 5,

  /**
   * The REBOOTING state indicates the persistent resource is being rebooted
   * (PR is not available right now but is expected to be ready again later).
   *
   * @generated from enum value: REBOOTING = 6;
   */
  REBOOTING = 6,

  /**
   * The UPDATING state indicates the persistent resource is being updated.
   *
   * @generated from enum value: UPDATING = 7;
   */
  UPDATING = 7,
}

/**
 * Describes the enum google.cloud.aiplatform.v1.PersistentResource.State.
 */
export const PersistentResource_StateSchema: GenEnum<PersistentResource_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_aiplatform_v1_persistent_resource, 0, 0);

/**
 * Represents the spec of a group of resources of the same type,
 * for example machine type, disk, and accelerators, in a PersistentResource.
 *
 * @generated from message google.cloud.aiplatform.v1.ResourcePool
 */
export type ResourcePool = Message<"google.cloud.aiplatform.v1.ResourcePool"> & {
  /**
   * Immutable. The unique ID in a PersistentResource for referring to this
   * resource pool. User can specify it if necessary. Otherwise, it's generated
   * automatically.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Required. Immutable. The specification of a single machine.
   *
   * @generated from field: google.cloud.aiplatform.v1.MachineSpec machine_spec = 2;
   */
  machineSpec?: MachineSpec;

  /**
   * Optional. The total number of machines to use for this resource pool.
   *
   * @generated from field: optional int64 replica_count = 3;
   */
  replicaCount?: bigint;

  /**
   * Optional. Disk spec for the machine in this node pool.
   *
   * @generated from field: google.cloud.aiplatform.v1.DiskSpec disk_spec = 4;
   */
  diskSpec?: DiskSpec;

  /**
   * Output only. The number of machines currently in use by training jobs for
   * this resource pool. Will replace idle_replica_count.
   *
   * @generated from field: int64 used_replica_count = 6;
   */
  usedReplicaCount: bigint;

  /**
   * Optional. Optional spec to configure GKE or Ray-on-Vertex autoscaling
   *
   * @generated from field: google.cloud.aiplatform.v1.ResourcePool.AutoscalingSpec autoscaling_spec = 7;
   */
  autoscalingSpec?: ResourcePool_AutoscalingSpec;
};

/**
 * Describes the message google.cloud.aiplatform.v1.ResourcePool.
 * Use `create(ResourcePoolSchema)` to create a new message.
 */
export const ResourcePoolSchema: GenMessage<ResourcePool> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_persistent_resource, 1);

/**
 * The min/max number of replicas allowed if enabling autoscaling
 *
 * @generated from message google.cloud.aiplatform.v1.ResourcePool.AutoscalingSpec
 */
export type ResourcePool_AutoscalingSpec = Message<"google.cloud.aiplatform.v1.ResourcePool.AutoscalingSpec"> & {
  /**
   * Optional. min replicas in the node pool,
   * must be ≤ replica_count and < max_replica_count or will throw error.
   * For autoscaling enabled Ray-on-Vertex, we allow min_replica_count of a
   * resource_pool to be 0 to match the OSS Ray
   * behavior(https://docs.ray.io/en/latest/cluster/vms/user-guides/configuring-autoscaling.html#cluster-config-parameters).
   * As for Persistent Resource, the min_replica_count must be > 0, we added
   * a corresponding validation inside
   * CreatePersistentResourceRequestValidator.java.
   *
   * @generated from field: optional int64 min_replica_count = 1;
   */
  minReplicaCount?: bigint;

  /**
   * Optional. max replicas in the node pool,
   * must be ≥ replica_count and > min_replica_count or will throw error
   *
   * @generated from field: optional int64 max_replica_count = 2;
   */
  maxReplicaCount?: bigint;
};

/**
 * Describes the message google.cloud.aiplatform.v1.ResourcePool.AutoscalingSpec.
 * Use `create(ResourcePool_AutoscalingSpecSchema)` to create a new message.
 */
export const ResourcePool_AutoscalingSpecSchema: GenMessage<ResourcePool_AutoscalingSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_persistent_resource, 1, 0);

/**
 * Configuration for the runtime on a PersistentResource instance, including
 * but not limited to:
 *
 * * Service accounts used to run the workloads.
 * * Whether to make it a dedicated Ray Cluster.
 *
 * @generated from message google.cloud.aiplatform.v1.ResourceRuntimeSpec
 */
export type ResourceRuntimeSpec = Message<"google.cloud.aiplatform.v1.ResourceRuntimeSpec"> & {
  /**
   * Optional. Configure the use of workload identity on the PersistentResource
   *
   * @generated from field: google.cloud.aiplatform.v1.ServiceAccountSpec service_account_spec = 2;
   */
  serviceAccountSpec?: ServiceAccountSpec;

  /**
   * Optional. Ray cluster configuration.
   * Required when creating a dedicated RayCluster on the PersistentResource.
   *
   * @generated from field: google.cloud.aiplatform.v1.RaySpec ray_spec = 1;
   */
  raySpec?: RaySpec;
};

/**
 * Describes the message google.cloud.aiplatform.v1.ResourceRuntimeSpec.
 * Use `create(ResourceRuntimeSpecSchema)` to create a new message.
 */
export const ResourceRuntimeSpecSchema: GenMessage<ResourceRuntimeSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_persistent_resource, 2);

/**
 * Configuration information for the Ray cluster.
 * For experimental launch, Ray cluster creation and Persistent
 * cluster creation are 1:1 mapping: We will provision all the nodes within the
 * Persistent cluster as Ray nodes.
 *
 * @generated from message google.cloud.aiplatform.v1.RaySpec
 */
export type RaySpec = Message<"google.cloud.aiplatform.v1.RaySpec"> & {
  /**
   * Optional. Default image for user to choose a preferred ML framework
   * (for example, TensorFlow or Pytorch) by choosing from [Vertex prebuilt
   * images](https://cloud.google.com/vertex-ai/docs/training/pre-built-containers).
   * Either this or the resource_pool_images is required. Use this field if
   * you need all the resource pools to have the same Ray image. Otherwise, use
   * the {@code resource_pool_images} field.
   *
   * @generated from field: string image_uri = 1;
   */
  imageUri: string;

  /**
   * Optional. Required if image_uri isn't set. A map of resource_pool_id to
   * prebuild Ray image if user need to use different images for different
   * head/worker pools. This map needs to cover all the resource pool ids.
   * Example:
   * {
   *   "ray_head_node_pool": "head image"
   *   "ray_worker_node_pool1": "worker image"
   *   "ray_worker_node_pool2": "another worker image"
   * }
   *
   * @generated from field: map<string, string> resource_pool_images = 6;
   */
  resourcePoolImages: { [key: string]: string };

  /**
   * Optional. This will be used to indicate which resource pool will serve as
   * the Ray head node(the first node within that pool). Will use the machine
   * from the first workerpool as the head node by default if this field isn't
   * set.
   *
   * @generated from field: string head_node_resource_pool_id = 7;
   */
  headNodeResourcePoolId: string;

  /**
   * Optional. Ray metrics configurations.
   *
   * @generated from field: google.cloud.aiplatform.v1.RayMetricSpec ray_metric_spec = 8;
   */
  rayMetricSpec?: RayMetricSpec;

  /**
   * Optional. OSS Ray logging configurations.
   *
   * @generated from field: google.cloud.aiplatform.v1.RayLogsSpec ray_logs_spec = 10;
   */
  rayLogsSpec?: RayLogsSpec;
};

/**
 * Describes the message google.cloud.aiplatform.v1.RaySpec.
 * Use `create(RaySpecSchema)` to create a new message.
 */
export const RaySpecSchema: GenMessage<RaySpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_persistent_resource, 3);

/**
 * Persistent Cluster runtime information as output
 *
 * @generated from message google.cloud.aiplatform.v1.ResourceRuntime
 */
export type ResourceRuntime = Message<"google.cloud.aiplatform.v1.ResourceRuntime"> & {
  /**
   * Output only. URIs for user to connect to the Cluster.
   * Example:
   * {
   *   "RAY_HEAD_NODE_INTERNAL_IP": "head-node-IP:10001"
   *   "RAY_DASHBOARD_URI": "ray-dashboard-address:8888"
   * }
   *
   * @generated from field: map<string, string> access_uris = 1;
   */
  accessUris: { [key: string]: string };
};

/**
 * Describes the message google.cloud.aiplatform.v1.ResourceRuntime.
 * Use `create(ResourceRuntimeSchema)` to create a new message.
 */
export const ResourceRuntimeSchema: GenMessage<ResourceRuntime> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_persistent_resource, 4);

/**
 * Configuration for the use of custom service account to run the workloads.
 *
 * @generated from message google.cloud.aiplatform.v1.ServiceAccountSpec
 */
export type ServiceAccountSpec = Message<"google.cloud.aiplatform.v1.ServiceAccountSpec"> & {
  /**
   * Required. If true, custom user-managed service account is enforced to run
   * any workloads (for example, Vertex Jobs) on the resource. Otherwise, uses
   * the [Vertex AI Custom Code Service
   * Agent](https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents).
   *
   * @generated from field: bool enable_custom_service_account = 1;
   */
  enableCustomServiceAccount: boolean;

  /**
   * Optional. Required when all below conditions are met
   *  * `enable_custom_service_account` is true;
   *  * any runtime is specified via `ResourceRuntimeSpec` on creation time,
   *    for example, Ray
   *
   * The users must have `iam.serviceAccounts.actAs` permission on this service
   * account and then the specified runtime containers will run as it.
   *
   * Do not set this field if you want to submit jobs using custom service
   * account to this PersistentResource after creation, but only specify the
   * `service_account` inside the job.
   *
   * @generated from field: string service_account = 2;
   */
  serviceAccount: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1.ServiceAccountSpec.
 * Use `create(ServiceAccountSpecSchema)` to create a new message.
 */
export const ServiceAccountSpecSchema: GenMessage<ServiceAccountSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_persistent_resource, 5);

/**
 * Configuration for the Ray metrics.
 *
 * @generated from message google.cloud.aiplatform.v1.RayMetricSpec
 */
export type RayMetricSpec = Message<"google.cloud.aiplatform.v1.RayMetricSpec"> & {
  /**
   * Optional. Flag to disable the Ray metrics collection.
   *
   * @generated from field: bool disabled = 1;
   */
  disabled: boolean;
};

/**
 * Describes the message google.cloud.aiplatform.v1.RayMetricSpec.
 * Use `create(RayMetricSpecSchema)` to create a new message.
 */
export const RayMetricSpecSchema: GenMessage<RayMetricSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_persistent_resource, 6);

/**
 * Configuration for the Ray OSS Logs.
 *
 * @generated from message google.cloud.aiplatform.v1.RayLogsSpec
 */
export type RayLogsSpec = Message<"google.cloud.aiplatform.v1.RayLogsSpec"> & {
  /**
   * Optional. Flag to disable the export of Ray OSS logs to Cloud Logging.
   *
   * @generated from field: bool disabled = 1;
   */
  disabled: boolean;
};

/**
 * Describes the message google.cloud.aiplatform.v1.RayLogsSpec.
 * Use `create(RayLogsSpecSchema)` to create a new message.
 */
export const RayLogsSpecSchema: GenMessage<RayLogsSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_persistent_resource, 7);
