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
// @generated from file google/cloud/osconfig/v1alpha/os_policy_assignments.proto (package google.cloud.osconfig.v1alpha, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { OSPolicy } from "./os_policy_pb";
import { file_google_cloud_osconfig_v1alpha_os_policy } from "./os_policy_pb";
import type { FixedOrPercent } from "./osconfig_common_pb";
import { file_google_cloud_osconfig_v1alpha_osconfig_common } from "./osconfig_common_pb";
import type { Duration, FieldMask, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration, file_google_protobuf_field_mask, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/osconfig/v1alpha/os_policy_assignments.proto.
 */
export const file_google_cloud_osconfig_v1alpha_os_policy_assignments: GenFile = /*@__PURE__*/
  fileDesc("Cjlnb29nbGUvY2xvdWQvb3Njb25maWcvdjFhbHBoYS9vc19wb2xpY3lfYXNzaWdubWVudHMucHJvdG8SHWdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhIuwLChJPU1BvbGljeUFzc2lnbm1lbnQSDAoEbmFtZRgBIAEoCRITCgtkZXNjcmlwdGlvbhgCIAEoCRJBCgtvc19wb2xpY2llcxgDIAMoCzInLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhLk9TUG9saWN5QgPgQQISXgoPaW5zdGFuY2VfZmlsdGVyGAQgASgLMkAuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYWxwaGEuT1NQb2xpY3lBc3NpZ25tZW50Lkluc3RhbmNlRmlsdGVyQgPgQQISTwoHcm9sbG91dBgFIAEoCzI5Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhLk9TUG9saWN5QXNzaWdubWVudC5Sb2xsb3V0QgPgQQISGAoLcmV2aXNpb25faWQYBiABKAlCA+BBAxI9ChRyZXZpc2lvbl9jcmVhdGVfdGltZRgHIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxIMCgRldGFnGAggASgJEloKDXJvbGxvdXRfc3RhdGUYCSABKA4yPi5nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYS5PU1BvbGljeUFzc2lnbm1lbnQuUm9sbG91dFN0YXRlQgPgQQMSFQoIYmFzZWxpbmUYCiABKAhCA+BBAxIUCgdkZWxldGVkGAsgASgIQgPgQQMSGAoLcmVjb25jaWxpbmcYDCABKAhCA+BBAxIQCgN1aWQYDSABKAlCA+BBAxqRAQoITGFiZWxTZXQSVgoGbGFiZWxzGAEgAygLMkYuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYWxwaGEuT1NQb2xpY3lBc3NpZ25tZW50LkxhYmVsU2V0LkxhYmVsc0VudHJ5Gi0KC0xhYmVsc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEagwMKDkluc3RhbmNlRmlsdGVyEgsKA2FsbBgBIAEoCBIaCg5vc19zaG9ydF9uYW1lcxgCIAMoCUICGAESVAoQaW5jbHVzaW9uX2xhYmVscxgDIAMoCzI6Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhLk9TUG9saWN5QXNzaWdubWVudC5MYWJlbFNldBJUChBleGNsdXNpb25fbGFiZWxzGAQgAygLMjouZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYWxwaGEuT1NQb2xpY3lBc3NpZ25tZW50LkxhYmVsU2V0El8KC2ludmVudG9yaWVzGAUgAygLMkouZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYWxwaGEuT1NQb2xpY3lBc3NpZ25tZW50Lkluc3RhbmNlRmlsdGVyLkludmVudG9yeRo7CglJbnZlbnRvcnkSGgoNb3Nfc2hvcnRfbmFtZRgBIAEoCUID4EECEhIKCm9zX3ZlcnNpb24YAiABKAkakwEKB1JvbGxvdXQSTQoRZGlzcnVwdGlvbl9idWRnZXQYASABKAsyLS5nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYS5GaXhlZE9yUGVyY2VudEID4EECEjkKEW1pbl93YWl0X2R1cmF0aW9uGAIgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uQgPgQQIibAoMUm9sbG91dFN0YXRlEh0KGVJPTExPVVRfU1RBVEVfVU5TUEVDSUZJRUQQABIPCgtJTl9QUk9HUkVTUxABEg4KCkNBTkNFTExJTkcQAhINCglDQU5DRUxMRUQQAxINCglTVUNDRUVERUQQBDqEAepBgAEKKm9zY29uZmlnLmdvb2dsZWFwaXMuY29tL09TUG9saWN5QXNzaWdubWVudBJScHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L29zUG9saWN5QXNzaWdubWVudHMve29zX3BvbGljeV9hc3NpZ25tZW50fSLqBAojT1NQb2xpY3lBc3NpZ25tZW50T3BlcmF0aW9uTWV0YWRhdGESTQoUb3NfcG9saWN5X2Fzc2lnbm1lbnQYASABKAlCL/pBLAoqb3Njb25maWcuZ29vZ2xlYXBpcy5jb20vT1NQb2xpY3lBc3NpZ25tZW50EmAKCmFwaV9tZXRob2QYAiABKA4yTC5nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYS5PU1BvbGljeUFzc2lnbm1lbnRPcGVyYXRpb25NZXRhZGF0YS5BUElNZXRob2QSZgoNcm9sbG91dF9zdGF0ZRgDIAEoDjJPLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhLk9TUG9saWN5QXNzaWdubWVudE9wZXJhdGlvbk1ldGFkYXRhLlJvbGxvdXRTdGF0ZRI2ChJyb2xsb3V0X3N0YXJ0X3RpbWUYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEjcKE3JvbGxvdXRfdXBkYXRlX3RpbWUYBSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wIksKCUFQSU1ldGhvZBIaChZBUElfTUVUSE9EX1VOU1BFQ0lGSUVEEAASCgoGQ1JFQVRFEAESCgoGVVBEQVRFEAISCgoGREVMRVRFEAMibAoMUm9sbG91dFN0YXRlEh0KGVJPTExPVVRfU1RBVEVfVU5TUEVDSUZJRUQQABIPCgtJTl9QUk9HUkVTUxABEg4KCkNBTkNFTExJTkcQAhINCglDQU5DRUxMRUQQAxINCglTVUNDRUVERUQQBCLYAQofQ3JlYXRlT1NQb2xpY3lBc3NpZ25tZW50UmVxdWVzdBI5CgZwYXJlbnQYASABKAlCKeBBAvpBIwohbG9jYXRpb25zLmdvb2dsZWFwaXMuY29tL0xvY2F0aW9uElQKFG9zX3BvbGljeV9hc3NpZ25tZW50GAIgASgLMjEuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYWxwaGEuT1NQb2xpY3lBc3NpZ25tZW50QgPgQQISJAoXb3NfcG9saWN5X2Fzc2lnbm1lbnRfaWQYAyABKAlCA+BBAiKtAQofVXBkYXRlT1NQb2xpY3lBc3NpZ25tZW50UmVxdWVzdBJUChRvc19wb2xpY3lfYXNzaWdubWVudBgBIAEoCzIxLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhLk9TUG9saWN5QXNzaWdubWVudEID4EECEjQKC3VwZGF0ZV9tYXNrGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFza0ID4EEBImAKHEdldE9TUG9saWN5QXNzaWdubWVudFJlcXVlc3QSQAoEbmFtZRgBIAEoCUIy4EEC+kEsCipvc2NvbmZpZy5nb29nbGVhcGlzLmNvbS9PU1BvbGljeUFzc2lnbm1lbnQiggEKHkxpc3RPU1BvbGljeUFzc2lnbm1lbnRzUmVxdWVzdBI5CgZwYXJlbnQYASABKAlCKeBBAvpBIwohbG9jYXRpb25zLmdvb2dsZWFwaXMuY29tL0xvY2F0aW9uEhEKCXBhZ2Vfc2l6ZRgCIAEoBRISCgpwYWdlX3Rva2VuGAMgASgJIowBCh9MaXN0T1NQb2xpY3lBc3NpZ25tZW50c1Jlc3BvbnNlElAKFW9zX3BvbGljeV9hc3NpZ25tZW50cxgBIAMoCzIxLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhLk9TUG9saWN5QXNzaWdubWVudBIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkikQEKJkxpc3RPU1BvbGljeUFzc2lnbm1lbnRSZXZpc2lvbnNSZXF1ZXN0EkAKBG5hbWUYASABKAlCMuBBAvpBLAoqb3Njb25maWcuZ29vZ2xlYXBpcy5jb20vT1NQb2xpY3lBc3NpZ25tZW50EhEKCXBhZ2Vfc2l6ZRgCIAEoBRISCgpwYWdlX3Rva2VuGAMgASgJIpQBCidMaXN0T1NQb2xpY3lBc3NpZ25tZW50UmV2aXNpb25zUmVzcG9uc2USUAoVb3NfcG9saWN5X2Fzc2lnbm1lbnRzGAEgAygLMjEuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYWxwaGEuT1NQb2xpY3lBc3NpZ25tZW50EhcKD25leHRfcGFnZV90b2tlbhgCIAEoCSJjCh9EZWxldGVPU1BvbGljeUFzc2lnbm1lbnRSZXF1ZXN0EkAKBG5hbWUYASABKAlCMuBBAvpBLAoqb3Njb25maWcuZ29vZ2xlYXBpcy5jb20vT1NQb2xpY3lBc3NpZ25tZW50QuEBCiFjb20uZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYWxwaGFCGE9zUG9saWN5QXNzaWdubWVudHNQcm90b1ABWj1jbG91ZC5nb29nbGUuY29tL2dvL29zY29uZmlnL2FwaXYxYWxwaGEvb3Njb25maWdwYjtvc2NvbmZpZ3BiqgIdR29vZ2xlLkNsb3VkLk9zQ29uZmlnLlYxQWxwaGHKAh1Hb29nbGVcQ2xvdWRcT3NDb25maWdcVjFhbHBoYeoCIEdvb2dsZTo6Q2xvdWQ6Ok9zQ29uZmlnOjpWMWFscGhhYgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_osconfig_v1alpha_os_policy, file_google_cloud_osconfig_v1alpha_osconfig_common, file_google_protobuf_duration, file_google_protobuf_field_mask, file_google_protobuf_timestamp]);

/**
 * OS policy assignment is an API resource that is used to
 * apply a set of OS policies to a dynamically targeted group of Compute Engine
 * VM instances.
 *
 * An OS policy is used to define the desired state configuration for a
 * Compute Engine VM instance through a set of configuration resources that
 * provide capabilities such as installing or removing software packages, or
 * executing a script.
 *
 * For more information, see [OS policy and OS policy
 * assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
 *
 * @generated from message google.cloud.osconfig.v1alpha.OSPolicyAssignment
 */
export type OSPolicyAssignment = Message<"google.cloud.osconfig.v1alpha.OSPolicyAssignment"> & {
  /**
   * Resource name.
   *
   * Format:
   * `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id}`
   *
   * This field is ignored when you create an OS policy assignment.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * OS policy assignment description.
   * Length of the description is limited to 1024 characters.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * Required. List of OS policies to be applied to the VMs.
   *
   * @generated from field: repeated google.cloud.osconfig.v1alpha.OSPolicy os_policies = 3;
   */
  osPolicies: OSPolicy[];

  /**
   * Required. Filter to select VMs.
   *
   * @generated from field: google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter instance_filter = 4;
   */
  instanceFilter?: OSPolicyAssignment_InstanceFilter;

  /**
   * Required. Rollout to deploy the OS policy assignment.
   * A rollout is triggered in the following situations:
   * 1) OSPolicyAssignment is created.
   * 2) OSPolicyAssignment is updated and the update contains changes to one of
   * the following fields:
   *    - instance_filter
   *    - os_policies
   * 3) OSPolicyAssignment is deleted.
   *
   * @generated from field: google.cloud.osconfig.v1alpha.OSPolicyAssignment.Rollout rollout = 5;
   */
  rollout?: OSPolicyAssignment_Rollout;

  /**
   * Output only. The assignment revision ID
   * A new revision is committed whenever a rollout is triggered for a OS policy
   * assignment
   *
   * @generated from field: string revision_id = 6;
   */
  revisionId: string;

  /**
   * Output only. The timestamp that the revision was created.
   *
   * @generated from field: google.protobuf.Timestamp revision_create_time = 7;
   */
  revisionCreateTime?: Timestamp;

  /**
   * The etag for this OS policy assignment.
   * If this is provided on update, it must match the server's etag.
   *
   * @generated from field: string etag = 8;
   */
  etag: string;

  /**
   * Output only. OS policy assignment rollout state
   *
   * @generated from field: google.cloud.osconfig.v1alpha.OSPolicyAssignment.RolloutState rollout_state = 9;
   */
  rolloutState: OSPolicyAssignment_RolloutState;

  /**
   * Output only. Indicates that this revision has been successfully rolled out in this zone
   * and new VMs will be assigned OS policies from this revision.
   *
   * For a given OS policy assignment, there is only one revision with a value
   * of `true` for this field.
   *
   * @generated from field: bool baseline = 10;
   */
  baseline: boolean;

  /**
   * Output only. Indicates that this revision deletes the OS policy assignment.
   *
   * @generated from field: bool deleted = 11;
   */
  deleted: boolean;

  /**
   * Output only. Indicates that reconciliation is in progress for the revision.
   * This value is `true` when the `rollout_state` is one of:
   * * IN_PROGRESS
   * * CANCELLING
   *
   * @generated from field: bool reconciling = 12;
   */
  reconciling: boolean;

  /**
   * Output only. Server generated unique id for the OS policy assignment resource.
   *
   * @generated from field: string uid = 13;
   */
  uid: string;
};

/**
 * Describes the message google.cloud.osconfig.v1alpha.OSPolicyAssignment.
 * Use `create(OSPolicyAssignmentSchema)` to create a new message.
 */
export const OSPolicyAssignmentSchema: GenMessage<OSPolicyAssignment> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 0);

/**
 * Message representing label set.
 * * A label is a key value pair set for a VM.
 * * A LabelSet is a set of labels.
 * * Labels within a LabelSet are ANDed. In other words, a LabelSet is
 *   applicable for a VM only if it matches all the labels in the
 *   LabelSet.
 * * Example: A LabelSet with 2 labels: `env=prod` and `type=webserver` will
 *            only be applicable for those VMs with both labels
 *            present.
 *
 * @generated from message google.cloud.osconfig.v1alpha.OSPolicyAssignment.LabelSet
 */
export type OSPolicyAssignment_LabelSet = Message<"google.cloud.osconfig.v1alpha.OSPolicyAssignment.LabelSet"> & {
  /**
   * Labels are identified by key/value pairs in this map.
   * A VM should contain all the key/value pairs specified in this
   * map to be selected.
   *
   * @generated from field: map<string, string> labels = 1;
   */
  labels: { [key: string]: string };
};

/**
 * Describes the message google.cloud.osconfig.v1alpha.OSPolicyAssignment.LabelSet.
 * Use `create(OSPolicyAssignment_LabelSetSchema)` to create a new message.
 */
export const OSPolicyAssignment_LabelSetSchema: GenMessage<OSPolicyAssignment_LabelSet> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 0, 0);

/**
 * Filters to select target VMs for an assignment.
 *
 * If more than one filter criteria is specified below, a VM will be selected
 * if and only if it satisfies all of them.
 *
 * @generated from message google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter
 */
export type OSPolicyAssignment_InstanceFilter = Message<"google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter"> & {
  /**
   * Target all VMs in the project. If true, no other criteria is
   * permitted.
   *
   * @generated from field: bool all = 1;
   */
  all: boolean;

  /**
   * Deprecated. Use the `inventories` field instead.
   * A VM is selected if it's OS short name matches with any of the
   * values provided in this list.
   *
   * @generated from field: repeated string os_short_names = 2 [deprecated = true];
   * @deprecated
   */
  osShortNames: string[];

  /**
   * List of label sets used for VM inclusion.
   *
   * If the list has more than one `LabelSet`, the VM is included if any
   * of the label sets are applicable for the VM.
   *
   * @generated from field: repeated google.cloud.osconfig.v1alpha.OSPolicyAssignment.LabelSet inclusion_labels = 3;
   */
  inclusionLabels: OSPolicyAssignment_LabelSet[];

  /**
   * List of label sets used for VM exclusion.
   *
   * If the list has more than one label set, the VM is excluded if any
   * of the label sets are applicable for the VM.
   *
   * @generated from field: repeated google.cloud.osconfig.v1alpha.OSPolicyAssignment.LabelSet exclusion_labels = 4;
   */
  exclusionLabels: OSPolicyAssignment_LabelSet[];

  /**
   * List of inventories to select VMs.
   *
   * A VM is selected if its inventory data matches at least one of the
   * following inventories.
   *
   * @generated from field: repeated google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.Inventory inventories = 5;
   */
  inventories: OSPolicyAssignment_InstanceFilter_Inventory[];
};

/**
 * Describes the message google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.
 * Use `create(OSPolicyAssignment_InstanceFilterSchema)` to create a new message.
 */
export const OSPolicyAssignment_InstanceFilterSchema: GenMessage<OSPolicyAssignment_InstanceFilter> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 0, 1);

/**
 * VM inventory details.
 *
 * @generated from message google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.Inventory
 */
export type OSPolicyAssignment_InstanceFilter_Inventory = Message<"google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.Inventory"> & {
  /**
   * Required. The OS short name
   *
   * @generated from field: string os_short_name = 1;
   */
  osShortName: string;

  /**
   * The OS version
   *
   * Prefix matches are supported if asterisk(*) is provided as the
   * last character. For example, to match all versions with a major
   * version of `7`, specify the following value for this field `7.*`
   *
   * An empty string matches all OS versions.
   *
   * @generated from field: string os_version = 2;
   */
  osVersion: string;
};

/**
 * Describes the message google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.Inventory.
 * Use `create(OSPolicyAssignment_InstanceFilter_InventorySchema)` to create a new message.
 */
export const OSPolicyAssignment_InstanceFilter_InventorySchema: GenMessage<OSPolicyAssignment_InstanceFilter_Inventory> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 0, 1, 0);

/**
 * Message to configure the rollout at the zonal level for the OS policy
 * assignment.
 *
 * @generated from message google.cloud.osconfig.v1alpha.OSPolicyAssignment.Rollout
 */
export type OSPolicyAssignment_Rollout = Message<"google.cloud.osconfig.v1alpha.OSPolicyAssignment.Rollout"> & {
  /**
   * Required. The maximum number (or percentage) of VMs per zone to disrupt at
   * any given moment.
   *
   * @generated from field: google.cloud.osconfig.v1alpha.FixedOrPercent disruption_budget = 1;
   */
  disruptionBudget?: FixedOrPercent;

  /**
   * Required. This determines the minimum duration of time to wait after the
   * configuration changes are applied through the current rollout. A
   * VM continues to count towards the `disruption_budget` at least
   * until this duration of time has passed after configuration changes are
   * applied.
   *
   * @generated from field: google.protobuf.Duration min_wait_duration = 2;
   */
  minWaitDuration?: Duration;
};

/**
 * Describes the message google.cloud.osconfig.v1alpha.OSPolicyAssignment.Rollout.
 * Use `create(OSPolicyAssignment_RolloutSchema)` to create a new message.
 */
export const OSPolicyAssignment_RolloutSchema: GenMessage<OSPolicyAssignment_Rollout> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 0, 2);

/**
 * OS policy assignment rollout state
 *
 * @generated from enum google.cloud.osconfig.v1alpha.OSPolicyAssignment.RolloutState
 */
export enum OSPolicyAssignment_RolloutState {
  /**
   * Invalid value
   *
   * @generated from enum value: ROLLOUT_STATE_UNSPECIFIED = 0;
   */
  ROLLOUT_STATE_UNSPECIFIED = 0,

  /**
   * The rollout is in progress.
   *
   * @generated from enum value: IN_PROGRESS = 1;
   */
  IN_PROGRESS = 1,

  /**
   * The rollout is being cancelled.
   *
   * @generated from enum value: CANCELLING = 2;
   */
  CANCELLING = 2,

  /**
   * The rollout is cancelled.
   *
   * @generated from enum value: CANCELLED = 3;
   */
  CANCELLED = 3,

  /**
   * The rollout has completed successfully.
   *
   * @generated from enum value: SUCCEEDED = 4;
   */
  SUCCEEDED = 4,
}

/**
 * Describes the enum google.cloud.osconfig.v1alpha.OSPolicyAssignment.RolloutState.
 */
export const OSPolicyAssignment_RolloutStateSchema: GenEnum<OSPolicyAssignment_RolloutState> = /*@__PURE__*/
  enumDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 0, 0);

/**
 * OS policy assignment operation metadata provided by OS policy assignment API
 * methods that return long running operations.
 *
 * @generated from message google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata
 */
export type OSPolicyAssignmentOperationMetadata = Message<"google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata"> & {
  /**
   * Reference to the `OSPolicyAssignment` API resource.
   *
   * Format:
   * `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}`
   *
   * @generated from field: string os_policy_assignment = 1;
   */
  osPolicyAssignment: string;

  /**
   * The OS policy assignment API method.
   *
   * @generated from field: google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.APIMethod api_method = 2;
   */
  apiMethod: OSPolicyAssignmentOperationMetadata_APIMethod;

  /**
   * State of the rollout
   *
   * @generated from field: google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.RolloutState rollout_state = 3;
   */
  rolloutState: OSPolicyAssignmentOperationMetadata_RolloutState;

  /**
   * Rollout start time
   *
   * @generated from field: google.protobuf.Timestamp rollout_start_time = 4;
   */
  rolloutStartTime?: Timestamp;

  /**
   * Rollout update time
   *
   * @generated from field: google.protobuf.Timestamp rollout_update_time = 5;
   */
  rolloutUpdateTime?: Timestamp;
};

/**
 * Describes the message google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.
 * Use `create(OSPolicyAssignmentOperationMetadataSchema)` to create a new message.
 */
export const OSPolicyAssignmentOperationMetadataSchema: GenMessage<OSPolicyAssignmentOperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 1);

/**
 * The OS policy assignment API method.
 *
 * @generated from enum google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.APIMethod
 */
export enum OSPolicyAssignmentOperationMetadata_APIMethod {
  /**
   * Invalid value
   *
   * @generated from enum value: API_METHOD_UNSPECIFIED = 0;
   */
  API_METHOD_UNSPECIFIED = 0,

  /**
   * Create OS policy assignment API method
   *
   * @generated from enum value: CREATE = 1;
   */
  CREATE = 1,

  /**
   * Update OS policy assignment API method
   *
   * @generated from enum value: UPDATE = 2;
   */
  UPDATE = 2,

  /**
   * Delete OS policy assignment API method
   *
   * @generated from enum value: DELETE = 3;
   */
  DELETE = 3,
}

/**
 * Describes the enum google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.APIMethod.
 */
export const OSPolicyAssignmentOperationMetadata_APIMethodSchema: GenEnum<OSPolicyAssignmentOperationMetadata_APIMethod> = /*@__PURE__*/
  enumDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 1, 0);

/**
 * State of the rollout
 *
 * @generated from enum google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.RolloutState
 */
export enum OSPolicyAssignmentOperationMetadata_RolloutState {
  /**
   * Invalid value
   *
   * @generated from enum value: ROLLOUT_STATE_UNSPECIFIED = 0;
   */
  ROLLOUT_STATE_UNSPECIFIED = 0,

  /**
   * The rollout is in progress.
   *
   * @generated from enum value: IN_PROGRESS = 1;
   */
  IN_PROGRESS = 1,

  /**
   * The rollout is being cancelled.
   *
   * @generated from enum value: CANCELLING = 2;
   */
  CANCELLING = 2,

  /**
   * The rollout is cancelled.
   *
   * @generated from enum value: CANCELLED = 3;
   */
  CANCELLED = 3,

  /**
   * The rollout has completed successfully.
   *
   * @generated from enum value: SUCCEEDED = 4;
   */
  SUCCEEDED = 4,
}

/**
 * Describes the enum google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.RolloutState.
 */
export const OSPolicyAssignmentOperationMetadata_RolloutStateSchema: GenEnum<OSPolicyAssignmentOperationMetadata_RolloutState> = /*@__PURE__*/
  enumDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 1, 1);

/**
 * A request message to create an OS policy assignment
 *
 * @generated from message google.cloud.osconfig.v1alpha.CreateOSPolicyAssignmentRequest
 */
export type CreateOSPolicyAssignmentRequest = Message<"google.cloud.osconfig.v1alpha.CreateOSPolicyAssignmentRequest"> & {
  /**
   * Required. The parent resource name in the form:
   * projects/{project}/locations/{location}
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The OS policy assignment to be created.
   *
   * @generated from field: google.cloud.osconfig.v1alpha.OSPolicyAssignment os_policy_assignment = 2;
   */
  osPolicyAssignment?: OSPolicyAssignment;

  /**
   * Required. The logical name of the OS policy assignment in the project
   * with the following restrictions:
   *
   * * Must contain only lowercase letters, numbers, and hyphens.
   * * Must start with a letter.
   * * Must be between 1-63 characters.
   * * Must end with a number or a letter.
   * * Must be unique within the project.
   *
   * @generated from field: string os_policy_assignment_id = 3;
   */
  osPolicyAssignmentId: string;
};

/**
 * Describes the message google.cloud.osconfig.v1alpha.CreateOSPolicyAssignmentRequest.
 * Use `create(CreateOSPolicyAssignmentRequestSchema)` to create a new message.
 */
export const CreateOSPolicyAssignmentRequestSchema: GenMessage<CreateOSPolicyAssignmentRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 2);

/**
 * A request message to update an OS policy assignment
 *
 * @generated from message google.cloud.osconfig.v1alpha.UpdateOSPolicyAssignmentRequest
 */
export type UpdateOSPolicyAssignmentRequest = Message<"google.cloud.osconfig.v1alpha.UpdateOSPolicyAssignmentRequest"> & {
  /**
   * Required. The updated OS policy assignment.
   *
   * @generated from field: google.cloud.osconfig.v1alpha.OSPolicyAssignment os_policy_assignment = 1;
   */
  osPolicyAssignment?: OSPolicyAssignment;

  /**
   * Optional. Field mask that controls which fields of the assignment should be updated.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.cloud.osconfig.v1alpha.UpdateOSPolicyAssignmentRequest.
 * Use `create(UpdateOSPolicyAssignmentRequestSchema)` to create a new message.
 */
export const UpdateOSPolicyAssignmentRequestSchema: GenMessage<UpdateOSPolicyAssignmentRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 3);

/**
 * A request message to get an OS policy assignment
 *
 * @generated from message google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentRequest
 */
export type GetOSPolicyAssignmentRequest = Message<"google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentRequest"> & {
  /**
   * Required. The resource name of OS policy assignment.
   *
   * Format:
   * `projects/{project}/locations/{location}/osPolicyAssignments/{os_policy_assignment}@{revisionId}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentRequest.
 * Use `create(GetOSPolicyAssignmentRequestSchema)` to create a new message.
 */
export const GetOSPolicyAssignmentRequestSchema: GenMessage<GetOSPolicyAssignmentRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 4);

/**
 * A request message to list OS policy assignments for a parent resource
 *
 * @generated from message google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsRequest
 */
export type ListOSPolicyAssignmentsRequest = Message<"google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsRequest"> & {
  /**
   * Required. The parent resource name.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The maximum number of assignments to return.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * A pagination token returned from a previous call to
   * `ListOSPolicyAssignments` that indicates where this listing should continue
   * from.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsRequest.
 * Use `create(ListOSPolicyAssignmentsRequestSchema)` to create a new message.
 */
export const ListOSPolicyAssignmentsRequestSchema: GenMessage<ListOSPolicyAssignmentsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 5);

/**
 * A response message for listing all assignments under given parent.
 *
 * @generated from message google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsResponse
 */
export type ListOSPolicyAssignmentsResponse = Message<"google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsResponse"> & {
  /**
   * The list of assignments
   *
   * @generated from field: repeated google.cloud.osconfig.v1alpha.OSPolicyAssignment os_policy_assignments = 1;
   */
  osPolicyAssignments: OSPolicyAssignment[];

  /**
   * The pagination token to retrieve the next page of OS policy assignments.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsResponse.
 * Use `create(ListOSPolicyAssignmentsResponseSchema)` to create a new message.
 */
export const ListOSPolicyAssignmentsResponseSchema: GenMessage<ListOSPolicyAssignmentsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 6);

/**
 * A request message to list revisions for a OS policy assignment
 *
 * @generated from message google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsRequest
 */
export type ListOSPolicyAssignmentRevisionsRequest = Message<"google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsRequest"> & {
  /**
   * Required. The name of the OS policy assignment to list revisions for.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The maximum number of revisions to return.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * A pagination token returned from a previous call to
   * `ListOSPolicyAssignmentRevisions` that indicates where this listing should
   * continue from.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsRequest.
 * Use `create(ListOSPolicyAssignmentRevisionsRequestSchema)` to create a new message.
 */
export const ListOSPolicyAssignmentRevisionsRequestSchema: GenMessage<ListOSPolicyAssignmentRevisionsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 7);

/**
 * A response message for listing all revisions for a OS policy assignment.
 *
 * @generated from message google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsResponse
 */
export type ListOSPolicyAssignmentRevisionsResponse = Message<"google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsResponse"> & {
  /**
   * The OS policy assignment revisions
   *
   * @generated from field: repeated google.cloud.osconfig.v1alpha.OSPolicyAssignment os_policy_assignments = 1;
   */
  osPolicyAssignments: OSPolicyAssignment[];

  /**
   * The pagination token to retrieve the next page of OS policy assignment
   * revisions.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsResponse.
 * Use `create(ListOSPolicyAssignmentRevisionsResponseSchema)` to create a new message.
 */
export const ListOSPolicyAssignmentRevisionsResponseSchema: GenMessage<ListOSPolicyAssignmentRevisionsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 8);

/**
 * A request message for deleting a OS policy assignment.
 *
 * @generated from message google.cloud.osconfig.v1alpha.DeleteOSPolicyAssignmentRequest
 */
export type DeleteOSPolicyAssignmentRequest = Message<"google.cloud.osconfig.v1alpha.DeleteOSPolicyAssignmentRequest"> & {
  /**
   * Required. The name of the OS policy assignment to be deleted
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.osconfig.v1alpha.DeleteOSPolicyAssignmentRequest.
 * Use `create(DeleteOSPolicyAssignmentRequestSchema)` to create a new message.
 */
export const DeleteOSPolicyAssignmentRequestSchema: GenMessage<DeleteOSPolicyAssignmentRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_v1alpha_os_policy_assignments, 9);
