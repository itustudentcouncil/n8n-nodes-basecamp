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
// @generated from file google/cloud/osconfig/agentendpoint/v1/agentendpoint.proto (package google.cloud.osconfig.agentendpoint.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../../api/annotations_pb";
import { file_google_api_client } from "../../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import type { Inventory } from "./inventory_pb";
import { file_google_cloud_osconfig_agentendpoint_v1_inventory } from "./inventory_pb";
import type { ApplyConfigTaskOutput, ApplyConfigTaskProgress, ApplyPatchesTaskOutput, ApplyPatchesTaskProgress, ExecStepTaskOutput, ExecStepTaskProgress, Task, TaskDirective, TaskType } from "./tasks_pb";
import { file_google_cloud_osconfig_agentendpoint_v1_tasks } from "./tasks_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/osconfig/agentendpoint/v1/agentendpoint.proto.
 */
export const file_google_cloud_osconfig_agentendpoint_v1_agentendpoint: GenFile = /*@__PURE__*/
  fileDesc("Cjpnb29nbGUvY2xvdWQvb3Njb25maWcvYWdlbnRlbmRwb2ludC92MS9hZ2VudGVuZHBvaW50LnByb3RvEiZnb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MSJcCh5SZWNlaXZlVGFza05vdGlmaWNhdGlvblJlcXVlc3QSHgoRaW5zdGFuY2VfaWRfdG9rZW4YASABKAlCA+BBAhIaCg1hZ2VudF92ZXJzaW9uGAIgASgJQgPgQQIiIQofUmVjZWl2ZVRhc2tOb3RpZmljYXRpb25SZXNwb25zZSI2ChRTdGFydE5leHRUYXNrUmVxdWVzdBIeChFpbnN0YW5jZV9pZF90b2tlbhgBIAEoCUID4EECIlMKFVN0YXJ0TmV4dFRhc2tSZXNwb25zZRI6CgR0YXNrGAEgASgLMiwuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuVGFzayLYAwoZUmVwb3J0VGFza1Byb2dyZXNzUmVxdWVzdBIeChFpbnN0YW5jZV9pZF90b2tlbhgBIAEoCUID4EECEhQKB3Rhc2tfaWQYAiABKAlCA+BBAhJICgl0YXNrX3R5cGUYAyABKA4yMC5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5UYXNrVHlwZUID4EECEmcKG2FwcGx5X3BhdGNoZXNfdGFza19wcm9ncmVzcxgEIAEoCzJALmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkFwcGx5UGF0Y2hlc1Rhc2tQcm9ncmVzc0gAEl8KF2V4ZWNfc3RlcF90YXNrX3Byb2dyZXNzGAUgASgLMjwuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuRXhlY1N0ZXBUYXNrUHJvZ3Jlc3NIABJlChphcHBseV9jb25maWdfdGFza19wcm9ncmVzcxgGIAEoCzI/Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkFwcGx5Q29uZmlnVGFza1Byb2dyZXNzSABCCgoIcHJvZ3Jlc3MiawoaUmVwb3J0VGFza1Byb2dyZXNzUmVzcG9uc2USTQoOdGFza19kaXJlY3RpdmUYASABKA4yNS5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5UYXNrRGlyZWN0aXZlIuEDChlSZXBvcnRUYXNrQ29tcGxldGVSZXF1ZXN0Eh4KEWluc3RhbmNlX2lkX3Rva2VuGAEgASgJQgPgQQISFAoHdGFza19pZBgCIAEoCUID4EECEkgKCXRhc2tfdHlwZRgDIAEoDjIwLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLlRhc2tUeXBlQgPgQQISFQoNZXJyb3JfbWVzc2FnZRgEIAEoCRJjChlhcHBseV9wYXRjaGVzX3Rhc2tfb3V0cHV0GAUgASgLMj4uZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuQXBwbHlQYXRjaGVzVGFza091dHB1dEgAElsKFWV4ZWNfc3RlcF90YXNrX291dHB1dBgGIAEoCzI6Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkV4ZWNTdGVwVGFza091dHB1dEgAEmEKGGFwcGx5X2NvbmZpZ190YXNrX291dHB1dBgHIAEoCzI9Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkFwcGx5Q29uZmlnVGFza091dHB1dEgAQggKBm91dHB1dCIcChpSZXBvcnRUYXNrQ29tcGxldGVSZXNwb25zZSLRAQoUUmVnaXN0ZXJBZ2VudFJlcXVlc3QSHgoRaW5zdGFuY2VfaWRfdG9rZW4YASABKAlCA+BBAhIaCg1hZ2VudF92ZXJzaW9uGAIgASgJQgPgQQISIwoWc3VwcG9ydGVkX2NhcGFiaWxpdGllcxgDIAMoCUID4EECEhQKDG9zX2xvbmdfbmFtZRgEIAEoCRIVCg1vc19zaG9ydF9uYW1lGAUgASgJEhIKCm9zX3ZlcnNpb24YBiABKAkSFwoPb3NfYXJjaGl0ZWN0dXJlGAcgASgJIhcKFVJlZ2lzdGVyQWdlbnRSZXNwb25zZSKkAQoWUmVwb3J0SW52ZW50b3J5UmVxdWVzdBIeChFpbnN0YW5jZV9pZF90b2tlbhgBIAEoCUID4EECEh8KEmludmVudG9yeV9jaGVja3N1bRgCIAEoCUID4EECEkkKCWludmVudG9yeRgDIAEoCzIxLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkludmVudG9yeUID4EEBIjgKF1JlcG9ydEludmVudG9yeVJlc3BvbnNlEh0KFXJlcG9ydF9mdWxsX2ludmVudG9yeRgBIAEoCDLWCQoUQWdlbnRFbmRwb2ludFNlcnZpY2US0AEKF1JlY2VpdmVUYXNrTm90aWZpY2F0aW9uEkYuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuUmVjZWl2ZVRhc2tOb3RpZmljYXRpb25SZXF1ZXN0GkcuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuUmVjZWl2ZVRhc2tOb3RpZmljYXRpb25SZXNwb25zZSIi2kEfaW5zdGFuY2VfaWRfdG9rZW4sYWdlbnRfdmVyc2lvbjABEqIBCg1TdGFydE5leHRUYXNrEjwuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuU3RhcnROZXh0VGFza1JlcXVlc3QaPS5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5TdGFydE5leHRUYXNrUmVzcG9uc2UiFNpBEWluc3RhbmNlX2lkX3Rva2VuEsMBChJSZXBvcnRUYXNrUHJvZ3Jlc3MSQS5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5SZXBvcnRUYXNrUHJvZ3Jlc3NSZXF1ZXN0GkIuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuUmVwb3J0VGFza1Byb2dyZXNzUmVzcG9uc2UiJtpBI2luc3RhbmNlX2lkX3Rva2VuLHRhc2tfaWQsdGFza190eXBlEtEBChJSZXBvcnRUYXNrQ29tcGxldGUSQS5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5SZXBvcnRUYXNrQ29tcGxldGVSZXF1ZXN0GkIuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuUmVwb3J0VGFza0NvbXBsZXRlUmVzcG9uc2UiNNpBMWluc3RhbmNlX2lkX3Rva2VuLHRhc2tfaWQsdGFza190eXBlLGVycm9yX21lc3NhZ2USxwEKDVJlZ2lzdGVyQWdlbnQSPC5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5SZWdpc3RlckFnZW50UmVxdWVzdBo9Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLlJlZ2lzdGVyQWdlbnRSZXNwb25zZSI52kE2aW5zdGFuY2VfaWRfdG9rZW4sYWdlbnRfdmVyc2lvbixzdXBwb3J0ZWRfY2FwYWJpbGl0aWVzEsUBCg9SZXBvcnRJbnZlbnRvcnkSPi5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5SZXBvcnRJbnZlbnRvcnlSZXF1ZXN0Gj8uZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuUmVwb3J0SW52ZW50b3J5UmVzcG9uc2UiMdpBLmluc3RhbmNlX2lkX3Rva2VuLGludmVudG9yeV9jaGVja3N1bSxpbnZlbnRvcnkaGspBF29zY29uZmlnLmdvb2dsZWFwaXMuY29tQpQBCipjb20uZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjFCEkFnZW50RW5kcG9pbnRQcm90b1ABWlBjbG91ZC5nb29nbGUuY29tL2dvL29zY29uZmlnL2FnZW50ZW5kcG9pbnQvYXBpdjEvYWdlbnRlbmRwb2ludHBiO2FnZW50ZW5kcG9pbnRwYmIGcHJvdG8z", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_cloud_osconfig_agentendpoint_v1_inventory, file_google_cloud_osconfig_agentendpoint_v1_tasks]);

/**
 * A request message to receive task notifications.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ReceiveTaskNotificationRequest
 */
export type ReceiveTaskNotificationRequest = Message<"google.cloud.osconfig.agentendpoint.v1.ReceiveTaskNotificationRequest"> & {
  /**
   * Required. This is the Compute Engine instance identity token described in
   * https://cloud.google.com/compute/docs/instances/verifying-instance-identity
   * where the audience is 'osconfig.googleapis.com' and the format is 'full'.
   *
   * @generated from field: string instance_id_token = 1;
   */
  instanceIdToken: string;

  /**
   * Required. The version of the agent making the request.
   *
   * @generated from field: string agent_version = 2;
   */
  agentVersion: string;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ReceiveTaskNotificationRequest.
 * Use `create(ReceiveTaskNotificationRequestSchema)` to create a new message.
 */
export const ReceiveTaskNotificationRequestSchema: GenMessage<ReceiveTaskNotificationRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_agentendpoint, 0);

/**
 * The streaming rpc message that will notify the agent when it has a task
 * it needs to perform on the instance.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ReceiveTaskNotificationResponse
 */
export type ReceiveTaskNotificationResponse = Message<"google.cloud.osconfig.agentendpoint.v1.ReceiveTaskNotificationResponse"> & {
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ReceiveTaskNotificationResponse.
 * Use `create(ReceiveTaskNotificationResponseSchema)` to create a new message.
 */
export const ReceiveTaskNotificationResponseSchema: GenMessage<ReceiveTaskNotificationResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_agentendpoint, 1);

/**
 * A request message for signaling the start of a task execution.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.StartNextTaskRequest
 */
export type StartNextTaskRequest = Message<"google.cloud.osconfig.agentendpoint.v1.StartNextTaskRequest"> & {
  /**
   * Required. This is the Compute Engine instance identity token described in
   * https://cloud.google.com/compute/docs/instances/verifying-instance-identity
   * where the audience is 'osconfig.googleapis.com' and the format is 'full'.
   *
   * @generated from field: string instance_id_token = 1;
   */
  instanceIdToken: string;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.StartNextTaskRequest.
 * Use `create(StartNextTaskRequestSchema)` to create a new message.
 */
export const StartNextTaskRequestSchema: GenMessage<StartNextTaskRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_agentendpoint, 2);

/**
 * A response message that contains the details of the task to work on.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.StartNextTaskResponse
 */
export type StartNextTaskResponse = Message<"google.cloud.osconfig.agentendpoint.v1.StartNextTaskResponse"> & {
  /**
   * The details of the task that should be worked on.  Can be empty if there
   * is no new task to work on.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.Task task = 1;
   */
  task?: Task;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.StartNextTaskResponse.
 * Use `create(StartNextTaskResponseSchema)` to create a new message.
 */
export const StartNextTaskResponseSchema: GenMessage<StartNextTaskResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_agentendpoint, 3);

/**
 * A request message for reporting the progress of current task.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ReportTaskProgressRequest
 */
export type ReportTaskProgressRequest = Message<"google.cloud.osconfig.agentendpoint.v1.ReportTaskProgressRequest"> & {
  /**
   * Required. This is the Compute Engine instance identity token described in
   * https://cloud.google.com/compute/docs/instances/verifying-instance-identity
   * where the audience is 'osconfig.googleapis.com' and the format is 'full'.
   *
   * @generated from field: string instance_id_token = 1;
   */
  instanceIdToken: string;

  /**
   * Required. Unique identifier of the task this applies to.
   *
   * @generated from field: string task_id = 2;
   */
  taskId: string;

  /**
   * Required. The type of task to report progress on.
   *
   * Progress must include the appropriate message based on this enum as
   * specified below:
   * `APPLY_PATCHES` = ApplyPatchesTaskProgress
   * `EXEC_STEP` = Progress not supported for this type.
   * `APPLY_CONFIG_TASK` = ApplyConfigTaskProgress
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.TaskType task_type = 3;
   */
  taskType: TaskType;

  /**
   * Intermediate progress of the current task.
   *
   * @generated from oneof google.cloud.osconfig.agentendpoint.v1.ReportTaskProgressRequest.progress
   */
  progress: {
    /**
     * Details about the progress of the apply patches task.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTaskProgress apply_patches_task_progress = 4;
     */
    value: ApplyPatchesTaskProgress;
    case: "applyPatchesTaskProgress";
  } | {
    /**
     * Details about the progress of the exec step task.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.ExecStepTaskProgress exec_step_task_progress = 5;
     */
    value: ExecStepTaskProgress;
    case: "execStepTaskProgress";
  } | {
    /**
     * Details about the progress of the apply config task.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskProgress apply_config_task_progress = 6;
     */
    value: ApplyConfigTaskProgress;
    case: "applyConfigTaskProgress";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ReportTaskProgressRequest.
 * Use `create(ReportTaskProgressRequestSchema)` to create a new message.
 */
export const ReportTaskProgressRequestSchema: GenMessage<ReportTaskProgressRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_agentendpoint, 4);

/**
 * The response message after the agent reported the current task progress.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ReportTaskProgressResponse
 */
export type ReportTaskProgressResponse = Message<"google.cloud.osconfig.agentendpoint.v1.ReportTaskProgressResponse"> & {
  /**
   * Instructs agent to continue or not.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.TaskDirective task_directive = 1;
   */
  taskDirective: TaskDirective;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ReportTaskProgressResponse.
 * Use `create(ReportTaskProgressResponseSchema)` to create a new message.
 */
export const ReportTaskProgressResponseSchema: GenMessage<ReportTaskProgressResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_agentendpoint, 5);

/**
 * A request message for signaling the completion of a task execution.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ReportTaskCompleteRequest
 */
export type ReportTaskCompleteRequest = Message<"google.cloud.osconfig.agentendpoint.v1.ReportTaskCompleteRequest"> & {
  /**
   * Required. This is the Compute Engine instance identity token described in
   * https://cloud.google.com/compute/docs/instances/verifying-instance-identity
   * where the audience is 'osconfig.googleapis.com' and the format is 'full'.
   *
   * @generated from field: string instance_id_token = 1;
   */
  instanceIdToken: string;

  /**
   * Required. Unique identifier of the task this applies to.
   *
   * @generated from field: string task_id = 2;
   */
  taskId: string;

  /**
   * Required. The type of task to report completed.
   *
   * Output must include the appropriate message based on this enum as
   * specified below:
   * APPLY_PATCHES = ApplyPatchesTaskOutput
   * EXEC_STEP = ExecStepTaskOutput
   * APPLY_CONFIG_TASK = ApplyConfigTaskOutput
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.TaskType task_type = 3;
   */
  taskType: TaskType;

  /**
   * Descriptive error message if the task execution ended in error.
   *
   * @generated from field: string error_message = 4;
   */
  errorMessage: string;

  /**
   * Final output details of the current task.
   *
   * @generated from oneof google.cloud.osconfig.agentendpoint.v1.ReportTaskCompleteRequest.output
   */
  output: {
    /**
     * Final output details of the apply patches task;
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTaskOutput apply_patches_task_output = 5;
     */
    value: ApplyPatchesTaskOutput;
    case: "applyPatchesTaskOutput";
  } | {
    /**
     * Final output details of the exec step task;
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.ExecStepTaskOutput exec_step_task_output = 6;
     */
    value: ExecStepTaskOutput;
    case: "execStepTaskOutput";
  } | {
    /**
     * Final output details of the apply config task;
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskOutput apply_config_task_output = 7;
     */
    value: ApplyConfigTaskOutput;
    case: "applyConfigTaskOutput";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ReportTaskCompleteRequest.
 * Use `create(ReportTaskCompleteRequestSchema)` to create a new message.
 */
export const ReportTaskCompleteRequestSchema: GenMessage<ReportTaskCompleteRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_agentendpoint, 6);

/**
 * The response message after the agent signaled the current task complete.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ReportTaskCompleteResponse
 */
export type ReportTaskCompleteResponse = Message<"google.cloud.osconfig.agentendpoint.v1.ReportTaskCompleteResponse"> & {
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ReportTaskCompleteResponse.
 * Use `create(ReportTaskCompleteResponseSchema)` to create a new message.
 */
export const ReportTaskCompleteResponseSchema: GenMessage<ReportTaskCompleteResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_agentendpoint, 7);

/**
 * The request message for registering the agent.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.RegisterAgentRequest
 */
export type RegisterAgentRequest = Message<"google.cloud.osconfig.agentendpoint.v1.RegisterAgentRequest"> & {
  /**
   * Required. This is the Compute Engine instance identity token described in
   * https://cloud.google.com/compute/docs/instances/verifying-instance-identity
   * where the audience is 'osconfig.googleapis.com' and the format is 'full'.
   *
   * @generated from field: string instance_id_token = 1;
   */
  instanceIdToken: string;

  /**
   * Required. The version of the agent.
   *
   * @generated from field: string agent_version = 2;
   */
  agentVersion: string;

  /**
   * Required. The capabilities supported by the agent. Supported values are:
   * PATCH_GA
   * GUEST_POLICY_BETA
   * CONFIG_V1
   *
   * @generated from field: repeated string supported_capabilities = 3;
   */
  supportedCapabilities: string[];

  /**
   * The operating system long name.
   * For example 'Debian GNU/Linux 9' or 'Microsoft Window Server 2019
   * Datacenter'.
   *
   * @generated from field: string os_long_name = 4;
   */
  osLongName: string;

  /**
   * The operating system short name.
   * For example, 'windows' or 'debian'.
   *
   * @generated from field: string os_short_name = 5;
   */
  osShortName: string;

  /**
   * The version of the operating system.
   *
   * @generated from field: string os_version = 6;
   */
  osVersion: string;

  /**
   * The system architecture of the operating system.
   *
   * @generated from field: string os_architecture = 7;
   */
  osArchitecture: string;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.RegisterAgentRequest.
 * Use `create(RegisterAgentRequestSchema)` to create a new message.
 */
export const RegisterAgentRequestSchema: GenMessage<RegisterAgentRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_agentendpoint, 8);

/**
 * The response message after the agent registered.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.RegisterAgentResponse
 */
export type RegisterAgentResponse = Message<"google.cloud.osconfig.agentendpoint.v1.RegisterAgentResponse"> & {
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.RegisterAgentResponse.
 * Use `create(RegisterAgentResponseSchema)` to create a new message.
 */
export const RegisterAgentResponseSchema: GenMessage<RegisterAgentResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_agentendpoint, 9);

/**
 * The request message for having the agent report inventory.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ReportInventoryRequest
 */
export type ReportInventoryRequest = Message<"google.cloud.osconfig.agentendpoint.v1.ReportInventoryRequest"> & {
  /**
   * Required. This is the Compute Engine instance identity token described in
   * https://cloud.google.com/compute/docs/instances/verifying-instance-identity
   * where the audience is 'osconfig.googleapis.com' and the format is 'full'.
   *
   * @generated from field: string instance_id_token = 1;
   */
  instanceIdToken: string;

  /**
   * Required. This is a client created checksum that should be generated based
   * on the contents of the reported inventory.  This will be used by the
   * service to determine if it has the latest version of inventory.
   *
   * @generated from field: string inventory_checksum = 2;
   */
  inventoryChecksum: string;

  /**
   * Optional. This is the details of the inventory.  Should only be provided if
   * the inventory has changed since the last report, or if instructed by the
   * service to provide full inventory.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.Inventory inventory = 3;
   */
  inventory?: Inventory;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ReportInventoryRequest.
 * Use `create(ReportInventoryRequestSchema)` to create a new message.
 */
export const ReportInventoryRequestSchema: GenMessage<ReportInventoryRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_agentendpoint, 10);

/**
 * The response message after the agent has reported inventory.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ReportInventoryResponse
 */
export type ReportInventoryResponse = Message<"google.cloud.osconfig.agentendpoint.v1.ReportInventoryResponse"> & {
  /**
   * If true, the full inventory should be reported back to the server.
   *
   * @generated from field: bool report_full_inventory = 1;
   */
  reportFullInventory: boolean;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ReportInventoryResponse.
 * Use `create(ReportInventoryResponseSchema)` to create a new message.
 */
export const ReportInventoryResponseSchema: GenMessage<ReportInventoryResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_agentendpoint, 11);

/**
 * OS Config agent endpoint API.
 *
 * @generated from service google.cloud.osconfig.agentendpoint.v1.AgentEndpointService
 */
export const AgentEndpointService: GenService<{
  /**
   * Stream established by client to receive Task notifications.
   *
   * @generated from rpc google.cloud.osconfig.agentendpoint.v1.AgentEndpointService.ReceiveTaskNotification
   */
  receiveTaskNotification: {
    methodKind: "server_streaming";
    input: typeof ReceiveTaskNotificationRequestSchema;
    output: typeof ReceiveTaskNotificationResponseSchema;
  },
  /**
   * Signals the start of a task execution and returns the task info.
   *
   * @generated from rpc google.cloud.osconfig.agentendpoint.v1.AgentEndpointService.StartNextTask
   */
  startNextTask: {
    methodKind: "unary";
    input: typeof StartNextTaskRequestSchema;
    output: typeof StartNextTaskResponseSchema;
  },
  /**
   * Signals an intermediary progress checkpoint in task execution.
   *
   * @generated from rpc google.cloud.osconfig.agentendpoint.v1.AgentEndpointService.ReportTaskProgress
   */
  reportTaskProgress: {
    methodKind: "unary";
    input: typeof ReportTaskProgressRequestSchema;
    output: typeof ReportTaskProgressResponseSchema;
  },
  /**
   * Signals that the task execution is complete and optionally returns the next
   * task.
   *
   * @generated from rpc google.cloud.osconfig.agentendpoint.v1.AgentEndpointService.ReportTaskComplete
   */
  reportTaskComplete: {
    methodKind: "unary";
    input: typeof ReportTaskCompleteRequestSchema;
    output: typeof ReportTaskCompleteResponseSchema;
  },
  /**
   * Registers the agent running on the VM.
   *
   * @generated from rpc google.cloud.osconfig.agentendpoint.v1.AgentEndpointService.RegisterAgent
   */
  registerAgent: {
    methodKind: "unary";
    input: typeof RegisterAgentRequestSchema;
    output: typeof RegisterAgentResponseSchema;
  },
  /**
   * Reports the VMs current inventory.
   *
   * @generated from rpc google.cloud.osconfig.agentendpoint.v1.AgentEndpointService.ReportInventory
   */
  reportInventory: {
    methodKind: "unary";
    input: typeof ReportInventoryRequestSchema;
    output: typeof ReportInventoryResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_osconfig_agentendpoint_v1_agentendpoint, 0);
