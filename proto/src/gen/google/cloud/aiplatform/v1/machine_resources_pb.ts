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
// @generated from file google/cloud/aiplatform/v1/machine_resources.proto (package google.cloud.aiplatform.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { AcceleratorType } from "./accelerator_type_pb";
import { file_google_cloud_aiplatform_v1_accelerator_type } from "./accelerator_type_pb";
import type { ReservationAffinity } from "./reservation_affinity_pb";
import { file_google_cloud_aiplatform_v1_reservation_affinity } from "./reservation_affinity_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1/machine_resources.proto.
 */
export const file_google_cloud_aiplatform_v1_machine_resources: GenFile = /*@__PURE__*/
  fileDesc("CjJnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MS9tYWNoaW5lX3Jlc291cmNlcy5wcm90bxIaZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEigQIKC01hY2hpbmVTcGVjEhkKDG1hY2hpbmVfdHlwZRgBIAEoCUID4EEFEkoKEGFjY2VsZXJhdG9yX3R5cGUYAiABKA4yKy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5BY2NlbGVyYXRvclR5cGVCA+BBBRIZChFhY2NlbGVyYXRvcl9jb3VudBgDIAEoBRIZCgx0cHVfdG9wb2xvZ3kYBCABKAlCA+BBBRJVChRyZXNlcnZhdGlvbl9hZmZpbml0eRgFIAEoCzIvLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLlJlc2VydmF0aW9uQWZmaW5pdHlCBuBBBeBBASKLAgoSRGVkaWNhdGVkUmVzb3VyY2VzEkUKDG1hY2hpbmVfc3BlYxgBIAEoCzInLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLk1hY2hpbmVTcGVjQgbgQQLgQQUSIQoRbWluX3JlcGxpY2FfY291bnQYAiABKAVCBuBBAuBBBRIeChFtYXhfcmVwbGljYV9jb3VudBgDIAEoBUID4EEFElgKGGF1dG9zY2FsaW5nX21ldHJpY19zcGVjcxgEIAMoCzIxLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLkF1dG9zY2FsaW5nTWV0cmljU3BlY0ID4EEFEhEKBHNwb3QYBSABKAhCA+BBASJUChJBdXRvbWF0aWNSZXNvdXJjZXMSHgoRbWluX3JlcGxpY2FfY291bnQYASABKAVCA+BBBRIeChFtYXhfcmVwbGljYV9jb3VudBgCIAEoBUID4EEFIqUBChdCYXRjaERlZGljYXRlZFJlc291cmNlcxJFCgxtYWNoaW5lX3NwZWMYASABKAsyJy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5NYWNoaW5lU3BlY0IG4EEC4EEFEiMKFnN0YXJ0aW5nX3JlcGxpY2FfY291bnQYAiABKAVCA+BBBRIeChFtYXhfcmVwbGljYV9jb3VudBgDIAEoBUID4EEFIi8KEVJlc291cmNlc0NvbnN1bWVkEhoKDXJlcGxpY2FfaG91cnMYASABKAFCA+BBAyI9CghEaXNrU3BlYxIWCg5ib290X2Rpc2tfdHlwZRgBIAEoCRIZChFib290X2Rpc2tfc2l6ZV9nYhgCIAEoBSI9ChJQZXJzaXN0ZW50RGlza1NwZWMSEQoJZGlza190eXBlGAEgASgJEhQKDGRpc2tfc2l6ZV9nYhgCIAEoAyJMCghOZnNNb3VudBITCgZzZXJ2ZXIYASABKAlCA+BBAhIRCgRwYXRoGAIgASgJQgPgQQISGAoLbW91bnRfcG9pbnQYAyABKAlCA+BBAiJBChVBdXRvc2NhbGluZ01ldHJpY1NwZWMSGAoLbWV0cmljX25hbWUYASABKAlCA+BBAhIOCgZ0YXJnZXQYAiABKAUiLgoQU2hpZWxkZWRWbUNvbmZpZxIaChJlbmFibGVfc2VjdXJlX2Jvb3QYASABKAhC0wEKHmNvbS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MUIVTWFjaGluZVJlc291cmNlc1Byb3RvUAFaPmNsb3VkLmdvb2dsZS5jb20vZ28vYWlwbGF0Zm9ybS9hcGl2MS9haXBsYXRmb3JtcGI7YWlwbGF0Zm9ybXBiqgIaR29vZ2xlLkNsb3VkLkFJUGxhdGZvcm0uVjHKAhpHb29nbGVcQ2xvdWRcQUlQbGF0Zm9ybVxWMeoCHUdvb2dsZTo6Q2xvdWQ6OkFJUGxhdGZvcm06OlYxYgZwcm90bzM", [file_google_api_field_behavior, file_google_cloud_aiplatform_v1_accelerator_type, file_google_cloud_aiplatform_v1_reservation_affinity]);

/**
 * Specification of a single machine.
 *
 * @generated from message google.cloud.aiplatform.v1.MachineSpec
 */
export type MachineSpec = Message<"google.cloud.aiplatform.v1.MachineSpec"> & {
  /**
   * Immutable. The type of the machine.
   *
   * See the [list of machine types supported for
   * prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)
   *
   * See the [list of machine types supported for custom
   * training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).
   *
   * For [DeployedModel][google.cloud.aiplatform.v1.DeployedModel] this field is
   * optional, and the default value is `n1-standard-2`. For
   * [BatchPredictionJob][google.cloud.aiplatform.v1.BatchPredictionJob] or as
   * part of [WorkerPoolSpec][google.cloud.aiplatform.v1.WorkerPoolSpec] this
   * field is required.
   *
   * @generated from field: string machine_type = 1;
   */
  machineType: string;

  /**
   * Immutable. The type of accelerator(s) that may be attached to the machine
   * as per
   * [accelerator_count][google.cloud.aiplatform.v1.MachineSpec.accelerator_count].
   *
   * @generated from field: google.cloud.aiplatform.v1.AcceleratorType accelerator_type = 2;
   */
  acceleratorType: AcceleratorType;

  /**
   * The number of accelerators to attach to the machine.
   *
   * @generated from field: int32 accelerator_count = 3;
   */
  acceleratorCount: number;

  /**
   * Immutable. The topology of the TPUs. Corresponds to the TPU topologies
   * available from GKE. (Example: tpu_topology: "2x2x1").
   *
   * @generated from field: string tpu_topology = 4;
   */
  tpuTopology: string;

  /**
   * Optional. Immutable. Configuration controlling how this resource pool
   * consumes reservation.
   *
   * @generated from field: google.cloud.aiplatform.v1.ReservationAffinity reservation_affinity = 5;
   */
  reservationAffinity?: ReservationAffinity;
};

/**
 * Describes the message google.cloud.aiplatform.v1.MachineSpec.
 * Use `create(MachineSpecSchema)` to create a new message.
 */
export const MachineSpecSchema: GenMessage<MachineSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_machine_resources, 0);

/**
 * A description of resources that are dedicated to a DeployedModel, and
 * that need a higher degree of manual configuration.
 *
 * @generated from message google.cloud.aiplatform.v1.DedicatedResources
 */
export type DedicatedResources = Message<"google.cloud.aiplatform.v1.DedicatedResources"> & {
  /**
   * Required. Immutable. The specification of a single machine used by the
   * prediction.
   *
   * @generated from field: google.cloud.aiplatform.v1.MachineSpec machine_spec = 1;
   */
  machineSpec?: MachineSpec;

  /**
   * Required. Immutable. The minimum number of machine replicas this
   * DeployedModel will be always deployed on. This value must be greater than
   * or equal to 1.
   *
   * If traffic against the DeployedModel increases, it may dynamically be
   * deployed onto more replicas, and as traffic decreases, some of these extra
   * replicas may be freed.
   *
   * @generated from field: int32 min_replica_count = 2;
   */
  minReplicaCount: number;

  /**
   * Immutable. The maximum number of replicas this DeployedModel may be
   * deployed on when the traffic against it increases. If the requested value
   * is too large, the deployment will error, but if deployment succeeds then
   * the ability to scale the model to that many replicas is guaranteed (barring
   * service outages). If traffic against the DeployedModel increases beyond
   * what its replicas at maximum may handle, a portion of the traffic will be
   * dropped. If this value is not provided, will use
   * [min_replica_count][google.cloud.aiplatform.v1.DedicatedResources.min_replica_count]
   * as the default value.
   *
   * The value of this field impacts the charge against Vertex CPU and GPU
   * quotas. Specifically, you will be charged for (max_replica_count *
   * number of cores in the selected machine type) and (max_replica_count *
   * number of GPUs per replica in the selected machine type).
   *
   * @generated from field: int32 max_replica_count = 3;
   */
  maxReplicaCount: number;

  /**
   * Immutable. The metric specifications that overrides a resource
   * utilization metric (CPU utilization, accelerator's duty cycle, and so on)
   * target value (default to 60 if not set). At most one entry is allowed per
   * metric.
   *
   * If
   * [machine_spec.accelerator_count][google.cloud.aiplatform.v1.MachineSpec.accelerator_count]
   * is above 0, the autoscaling will be based on both CPU utilization and
   * accelerator's duty cycle metrics and scale up when either metrics exceeds
   * its target value while scale down if both metrics are under their target
   * value. The default target value is 60 for both metrics.
   *
   * If
   * [machine_spec.accelerator_count][google.cloud.aiplatform.v1.MachineSpec.accelerator_count]
   * is 0, the autoscaling will be based on CPU utilization metric only with
   * default target value 60 if not explicitly set.
   *
   * For example, in the case of Online Prediction, if you want to override
   * target CPU utilization to 80, you should set
   * [autoscaling_metric_specs.metric_name][google.cloud.aiplatform.v1.AutoscalingMetricSpec.metric_name]
   * to `aiplatform.googleapis.com/prediction/online/cpu/utilization` and
   * [autoscaling_metric_specs.target][google.cloud.aiplatform.v1.AutoscalingMetricSpec.target]
   * to `80`.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1.AutoscalingMetricSpec autoscaling_metric_specs = 4;
   */
  autoscalingMetricSpecs: AutoscalingMetricSpec[];

  /**
   * Optional. If true, schedule the deployment workload on [spot
   * VMs](https://cloud.google.com/kubernetes-engine/docs/concepts/spot-vms).
   *
   * @generated from field: bool spot = 5;
   */
  spot: boolean;
};

/**
 * Describes the message google.cloud.aiplatform.v1.DedicatedResources.
 * Use `create(DedicatedResourcesSchema)` to create a new message.
 */
export const DedicatedResourcesSchema: GenMessage<DedicatedResources> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_machine_resources, 1);

/**
 * A description of resources that to large degree are decided by Vertex AI,
 * and require only a modest additional configuration.
 * Each Model supporting these resources documents its specific guidelines.
 *
 * @generated from message google.cloud.aiplatform.v1.AutomaticResources
 */
export type AutomaticResources = Message<"google.cloud.aiplatform.v1.AutomaticResources"> & {
  /**
   * Immutable. The minimum number of replicas this DeployedModel will be always
   * deployed on. If traffic against it increases, it may dynamically be
   * deployed onto more replicas up to
   * [max_replica_count][google.cloud.aiplatform.v1.AutomaticResources.max_replica_count],
   * and as traffic decreases, some of these extra replicas may be freed. If the
   * requested value is too large, the deployment will error.
   *
   * @generated from field: int32 min_replica_count = 1;
   */
  minReplicaCount: number;

  /**
   * Immutable. The maximum number of replicas this DeployedModel may be
   * deployed on when the traffic against it increases. If the requested value
   * is too large, the deployment will error, but if deployment succeeds then
   * the ability to scale the model to that many replicas is guaranteed (barring
   * service outages). If traffic against the DeployedModel increases beyond
   * what its replicas at maximum may handle, a portion of the traffic will be
   * dropped. If this value is not provided, a no upper bound for scaling under
   * heavy traffic will be assume, though Vertex AI may be unable to scale
   * beyond certain replica number.
   *
   * @generated from field: int32 max_replica_count = 2;
   */
  maxReplicaCount: number;
};

/**
 * Describes the message google.cloud.aiplatform.v1.AutomaticResources.
 * Use `create(AutomaticResourcesSchema)` to create a new message.
 */
export const AutomaticResourcesSchema: GenMessage<AutomaticResources> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_machine_resources, 2);

/**
 * A description of resources that are used for performing batch operations, are
 * dedicated to a Model, and need manual configuration.
 *
 * @generated from message google.cloud.aiplatform.v1.BatchDedicatedResources
 */
export type BatchDedicatedResources = Message<"google.cloud.aiplatform.v1.BatchDedicatedResources"> & {
  /**
   * Required. Immutable. The specification of a single machine.
   *
   * @generated from field: google.cloud.aiplatform.v1.MachineSpec machine_spec = 1;
   */
  machineSpec?: MachineSpec;

  /**
   * Immutable. The number of machine replicas used at the start of the batch
   * operation. If not set, Vertex AI decides starting number, not greater than
   * [max_replica_count][google.cloud.aiplatform.v1.BatchDedicatedResources.max_replica_count]
   *
   * @generated from field: int32 starting_replica_count = 2;
   */
  startingReplicaCount: number;

  /**
   * Immutable. The maximum number of machine replicas the batch operation may
   * be scaled to. The default value is 10.
   *
   * @generated from field: int32 max_replica_count = 3;
   */
  maxReplicaCount: number;
};

/**
 * Describes the message google.cloud.aiplatform.v1.BatchDedicatedResources.
 * Use `create(BatchDedicatedResourcesSchema)` to create a new message.
 */
export const BatchDedicatedResourcesSchema: GenMessage<BatchDedicatedResources> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_machine_resources, 3);

/**
 * Statistics information about resource consumption.
 *
 * @generated from message google.cloud.aiplatform.v1.ResourcesConsumed
 */
export type ResourcesConsumed = Message<"google.cloud.aiplatform.v1.ResourcesConsumed"> & {
  /**
   * Output only. The number of replica hours used. Note that many replicas may
   * run in parallel, and additionally any given work may be queued for some
   * time. Therefore this value is not strictly related to wall time.
   *
   * @generated from field: double replica_hours = 1;
   */
  replicaHours: number;
};

/**
 * Describes the message google.cloud.aiplatform.v1.ResourcesConsumed.
 * Use `create(ResourcesConsumedSchema)` to create a new message.
 */
export const ResourcesConsumedSchema: GenMessage<ResourcesConsumed> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_machine_resources, 4);

/**
 * Represents the spec of disk options.
 *
 * @generated from message google.cloud.aiplatform.v1.DiskSpec
 */
export type DiskSpec = Message<"google.cloud.aiplatform.v1.DiskSpec"> & {
  /**
   * Type of the boot disk (default is "pd-ssd").
   * Valid values: "pd-ssd" (Persistent Disk Solid State Drive) or
   * "pd-standard" (Persistent Disk Hard Disk Drive).
   *
   * @generated from field: string boot_disk_type = 1;
   */
  bootDiskType: string;

  /**
   * Size in GB of the boot disk (default is 100GB).
   *
   * @generated from field: int32 boot_disk_size_gb = 2;
   */
  bootDiskSizeGb: number;
};

/**
 * Describes the message google.cloud.aiplatform.v1.DiskSpec.
 * Use `create(DiskSpecSchema)` to create a new message.
 */
export const DiskSpecSchema: GenMessage<DiskSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_machine_resources, 5);

/**
 * Represents the spec of [persistent
 * disk][https://cloud.google.com/compute/docs/disks/persistent-disks] options.
 *
 * @generated from message google.cloud.aiplatform.v1.PersistentDiskSpec
 */
export type PersistentDiskSpec = Message<"google.cloud.aiplatform.v1.PersistentDiskSpec"> & {
  /**
   * Type of the disk (default is "pd-standard").
   * Valid values: "pd-ssd" (Persistent Disk Solid State Drive)
   * "pd-standard" (Persistent Disk Hard Disk Drive)
   * "pd-balanced" (Balanced Persistent Disk)
   * "pd-extreme" (Extreme Persistent Disk)
   *
   * @generated from field: string disk_type = 1;
   */
  diskType: string;

  /**
   * Size in GB of the disk (default is 100GB).
   *
   * @generated from field: int64 disk_size_gb = 2;
   */
  diskSizeGb: bigint;
};

/**
 * Describes the message google.cloud.aiplatform.v1.PersistentDiskSpec.
 * Use `create(PersistentDiskSpecSchema)` to create a new message.
 */
export const PersistentDiskSpecSchema: GenMessage<PersistentDiskSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_machine_resources, 6);

/**
 * Represents a mount configuration for Network File System (NFS) to mount.
 *
 * @generated from message google.cloud.aiplatform.v1.NfsMount
 */
export type NfsMount = Message<"google.cloud.aiplatform.v1.NfsMount"> & {
  /**
   * Required. IP address of the NFS server.
   *
   * @generated from field: string server = 1;
   */
  server: string;

  /**
   * Required. Source path exported from NFS server.
   * Has to start with '/', and combined with the ip address, it indicates
   * the source mount path in the form of `server:path`
   *
   * @generated from field: string path = 2;
   */
  path: string;

  /**
   * Required. Destination mount path. The NFS will be mounted for the user
   * under /mnt/nfs/<mount_point>
   *
   * @generated from field: string mount_point = 3;
   */
  mountPoint: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1.NfsMount.
 * Use `create(NfsMountSchema)` to create a new message.
 */
export const NfsMountSchema: GenMessage<NfsMount> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_machine_resources, 7);

/**
 * The metric specification that defines the target resource utilization
 * (CPU utilization, accelerator's duty cycle, and so on) for calculating the
 * desired replica count.
 *
 * @generated from message google.cloud.aiplatform.v1.AutoscalingMetricSpec
 */
export type AutoscalingMetricSpec = Message<"google.cloud.aiplatform.v1.AutoscalingMetricSpec"> & {
  /**
   * Required. The resource metric name.
   * Supported metrics:
   *
   * * For Online Prediction:
   * * `aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle`
   * * `aiplatform.googleapis.com/prediction/online/cpu/utilization`
   *
   * @generated from field: string metric_name = 1;
   */
  metricName: string;

  /**
   * The target resource utilization in percentage (1% - 100%) for the given
   * metric; once the real usage deviates from the target by a certain
   * percentage, the machine replicas change. The default value is 60
   * (representing 60%) if not provided.
   *
   * @generated from field: int32 target = 2;
   */
  target: number;
};

/**
 * Describes the message google.cloud.aiplatform.v1.AutoscalingMetricSpec.
 * Use `create(AutoscalingMetricSpecSchema)` to create a new message.
 */
export const AutoscalingMetricSpecSchema: GenMessage<AutoscalingMetricSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_machine_resources, 8);

/**
 * A set of Shielded Instance options.
 * See [Images using supported Shielded VM
 * features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm).
 *
 * @generated from message google.cloud.aiplatform.v1.ShieldedVmConfig
 */
export type ShieldedVmConfig = Message<"google.cloud.aiplatform.v1.ShieldedVmConfig"> & {
  /**
   * Defines whether the instance has [Secure
   * Boot](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm#secure-boot)
   * enabled.
   *
   * Secure Boot helps ensure that the system only runs authentic software by
   * verifying the digital signature of all boot components, and halting the
   * boot process if signature verification fails.
   *
   * @generated from field: bool enable_secure_boot = 1;
   */
  enableSecureBoot: boolean;
};

/**
 * Describes the message google.cloud.aiplatform.v1.ShieldedVmConfig.
 * Use `create(ShieldedVmConfigSchema)` to create a new message.
 */
export const ShieldedVmConfigSchema: GenMessage<ShieldedVmConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_machine_resources, 9);
