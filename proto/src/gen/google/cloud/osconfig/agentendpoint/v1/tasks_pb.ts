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
// @generated from file google/cloud/osconfig/agentendpoint/v1/tasks.proto (package google.cloud.osconfig.agentendpoint.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { OSPolicyResourceCompliance } from "./config_common_pb";
import { file_google_cloud_osconfig_agentendpoint_v1_config_common } from "./config_common_pb";
import type { OSPolicy_Mode, OSPolicy_Resource } from "./os_policy_pb";
import { file_google_cloud_osconfig_agentendpoint_v1_os_policy } from "./os_policy_pb";
import type { ExecStep, PatchConfig } from "./patch_jobs_pb";
import { file_google_cloud_osconfig_agentendpoint_v1_patch_jobs } from "./patch_jobs_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/osconfig/agentendpoint/v1/tasks.proto.
 */
export const file_google_cloud_osconfig_agentendpoint_v1_tasks: GenFile = /*@__PURE__*/
  fileDesc("CjJnb29nbGUvY2xvdWQvb3Njb25maWcvYWdlbnRlbmRwb2ludC92MS90YXNrcy5wcm90bxImZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEiyAQKBFRhc2sSDwoHdGFza19pZBgBIAEoCRJDCgl0YXNrX3R5cGUYAiABKA4yMC5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5UYXNrVHlwZRJNCg50YXNrX2RpcmVjdGl2ZRgDIAEoDjI1Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLlRhc2tEaXJlY3RpdmUSVgoSYXBwbHlfcGF0Y2hlc190YXNrGAQgASgLMjguZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuQXBwbHlQYXRjaGVzVGFza0gAEk4KDmV4ZWNfc3RlcF90YXNrGAUgASgLMjQuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuRXhlY1N0ZXBUYXNrSAASVAoRYXBwbHlfY29uZmlnX3Rhc2sYByABKAsyNy5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5BcHBseUNvbmZpZ1Rhc2tIABJXCg5zZXJ2aWNlX2xhYmVscxgGIAMoCzI/Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLlRhc2suU2VydmljZUxhYmVsc0VudHJ5GjQKElNlcnZpY2VMYWJlbHNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBQg4KDHRhc2tfZGV0YWlscyJuChBBcHBseVBhdGNoZXNUYXNrEkkKDHBhdGNoX2NvbmZpZxgBIAEoCzIzLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLlBhdGNoQ29uZmlnEg8KB2RyeV9ydW4YAyABKAgi4QEKGEFwcGx5UGF0Y2hlc1Rhc2tQcm9ncmVzcxJaCgVzdGF0ZRgBIAEoDjJGLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkFwcGx5UGF0Y2hlc1Rhc2tQcm9ncmVzcy5TdGF0ZUID4EECImkKBVN0YXRlEhUKEVNUQVRFX1VOU1BFQ0lGSUVEEAASCwoHU1RBUlRFRBAEEhcKE0RPV05MT0FESU5HX1BBVENIRVMQARIUChBBUFBMWUlOR19QQVRDSEVTEAISDQoJUkVCT09USU5HEAMizAEKFkFwcGx5UGF0Y2hlc1Rhc2tPdXRwdXQSWAoFc3RhdGUYASABKA4yRC5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5BcHBseVBhdGNoZXNUYXNrT3V0cHV0LlN0YXRlQgPgQQIiWAoFU3RhdGUSFQoRU1RBVEVfVU5TUEVDSUZJRUQQABINCglTVUNDRUVERUQQARIdChlTVUNDRUVERURfUkVCT09UX1JFUVVJUkVEEAISCgoGRkFJTEVEEAMiUwoMRXhlY1N0ZXBUYXNrEkMKCWV4ZWNfc3RlcBgBIAEoCzIwLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkV4ZWNTdGVwIpsBChRFeGVjU3RlcFRhc2tQcm9ncmVzcxJWCgVzdGF0ZRgBIAEoDjJCLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkV4ZWNTdGVwVGFza1Byb2dyZXNzLlN0YXRlQgPgQQIiKwoFU3RhdGUSFQoRU1RBVEVfVU5TUEVDSUZJRUQQABILCgdTVEFSVEVEEAEizwEKEkV4ZWNTdGVwVGFza091dHB1dBJUCgVzdGF0ZRgBIAEoDjJALmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkV4ZWNTdGVwVGFza091dHB1dC5TdGF0ZUID4EECEhYKCWV4aXRfY29kZRgCIAEoBUID4EECIksKBVN0YXRlEhUKEVNUQVRFX1VOU1BFQ0lGSUVEEAASDQoJQ09NUExFVEVEEAESDQoJVElNRURfT1VUEAISDQoJQ0FOQ0VMTEVEEAMi4wIKD0FwcGx5Q29uZmlnVGFzaxJVCgtvc19wb2xpY2llcxgBIAMoCzJALmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkFwcGx5Q29uZmlnVGFzay5PU1BvbGljeRr4AQoIT1NQb2xpY3kSCgoCaWQYASABKAkSQwoEbW9kZRgCIAEoDjI1Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLk9TUG9saWN5Lk1vZGUSTQoUb3NfcG9saWN5X2Fzc2lnbm1lbnQYAyABKAlCL/pBLAoqb3Njb25maWcuZ29vZ2xlYXBpcy5jb20vT1NQb2xpY3lBc3NpZ25tZW50EkwKCXJlc291cmNlcxgEIAMoCzI5Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLk9TUG9saWN5LlJlc291cmNlIrEBChdBcHBseUNvbmZpZ1Rhc2tQcm9ncmVzcxJUCgVzdGF0ZRgBIAEoDjJFLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkFwcGx5Q29uZmlnVGFza1Byb2dyZXNzLlN0YXRlIkAKBVN0YXRlEhUKEVNUQVRFX1VOU1BFQ0lGSUVEEAASCwoHU1RBUlRFRBABEhMKD0FQUExZSU5HX0NPTkZJRxACIocEChVBcHBseUNvbmZpZ1Rhc2tPdXRwdXQSVwoFc3RhdGUYASABKA4yQy5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5BcHBseUNvbmZpZ1Rhc2tPdXRwdXQuU3RhdGVCA+BBAhJnChFvc19wb2xpY3lfcmVzdWx0cxgCIAMoCzJMLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkFwcGx5Q29uZmlnVGFza091dHB1dC5PU1BvbGljeVJlc3VsdBrhAQoOT1NQb2xpY3lSZXN1bHQSFAoMb3NfcG9saWN5X2lkGAEgASgJEk0KFG9zX3BvbGljeV9hc3NpZ25tZW50GAIgASgJQi/6QSwKKm9zY29uZmlnLmdvb2dsZWFwaXMuY29tL09TUG9saWN5QXNzaWdubWVudBJqCh5vc19wb2xpY3lfcmVzb3VyY2VfY29tcGxpYW5jZXMYAyADKAsyQi5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5PU1BvbGljeVJlc291cmNlQ29tcGxpYW5jZSJICgVTdGF0ZRIVChFTVEFURV9VTlNQRUNJRklFRBAAEg0KCVNVQ0NFRURFRBABEgoKBkZBSUxFRBACEg0KCUNBTkNFTExFRBADKkcKDVRhc2tEaXJlY3RpdmUSHgoaVEFTS19ESVJFQ1RJVkVfVU5TUEVDSUZJRUQQABIMCghDT05USU5VRRABEggKBFNUT1AQAipjCghUYXNrVHlwZRIZChVUQVNLX1RZUEVfVU5TUEVDSUZJRUQQABIRCg1BUFBMWV9QQVRDSEVTEAESEgoORVhFQ19TVEVQX1RBU0sQAhIVChFBUFBMWV9DT05GSUdfVEFTSxADQosCCipjb20uZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjFCBVRhc2tzUAFaUGNsb3VkLmdvb2dsZS5jb20vZ28vb3Njb25maWcvYWdlbnRlbmRwb2ludC9hcGl2MS9hZ2VudGVuZHBvaW50cGI7YWdlbnRlbmRwb2ludHBi6kGAAQoqb3Njb25maWcuZ29vZ2xlYXBpcy5jb20vT1NQb2xpY3lBc3NpZ25tZW50ElJwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vb3NQb2xpY3lBc3NpZ25tZW50cy97b3NfcG9saWN5X2Fzc2lnbm1lbnR9YgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_osconfig_agentendpoint_v1_config_common, file_google_cloud_osconfig_agentendpoint_v1_os_policy, file_google_cloud_osconfig_agentendpoint_v1_patch_jobs]);

/**
 * A unit of work to be performed by the agent.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.Task
 */
export type Task = Message<"google.cloud.osconfig.agentendpoint.v1.Task"> & {
  /**
   * Unique task id.
   *
   * @generated from field: string task_id = 1;
   */
  taskId: string;

  /**
   * The type of task to perform.
   *
   * Task details must include the appropriate message based on this enum as
   * specified below:
   * APPLY_PATCHES = ApplyPatchesTask
   * EXEC_STEP = ExecStepTask
   * APPLY_CONFIG_TASK = ApplyConfigTask
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.TaskType task_type = 2;
   */
  taskType: TaskType;

  /**
   * Current directive to the agent.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.TaskDirective task_directive = 3;
   */
  taskDirective: TaskDirective;

  /**
   * Specific details about the current task to perform.
   *
   * @generated from oneof google.cloud.osconfig.agentendpoint.v1.Task.task_details
   */
  taskDetails: {
    /**
     * Details about the apply patches task to perform.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTask apply_patches_task = 4;
     */
    value: ApplyPatchesTask;
    case: "applyPatchesTask";
  } | {
    /**
     * Details about the exec step task to perform.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.ExecStepTask exec_step_task = 5;
     */
    value: ExecStepTask;
    case: "execStepTask";
  } | {
    /**
     * Details about the apply config step task to perform.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.ApplyConfigTask apply_config_task = 7;
     */
    value: ApplyConfigTask;
    case: "applyConfigTask";
  } | { case: undefined; value?: undefined };

  /**
   * Labels describing the task.  Used for logging by the agent.
   *
   * @generated from field: map<string, string> service_labels = 6;
   */
  serviceLabels: { [key: string]: string };
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.Task.
 * Use `create(TaskSchema)` to create a new message.
 */
export const TaskSchema: GenMessage<Task> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 0);

/**
 * Message which instructs agent to apply patches.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTask
 */
export type ApplyPatchesTask = Message<"google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTask"> & {
  /**
   * Specific information about how patches should be applied.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.PatchConfig patch_config = 1;
   */
  patchConfig?: PatchConfig;

  /**
   * If true, the agent will report its status as it goes through the motions
   * but won't actually run any updates or perform any reboots.
   *
   * @generated from field: bool dry_run = 3;
   */
  dryRun: boolean;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTask.
 * Use `create(ApplyPatchesTaskSchema)` to create a new message.
 */
export const ApplyPatchesTaskSchema: GenMessage<ApplyPatchesTask> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 1);

/**
 * Information reported from the agent about applying patches execution.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTaskProgress
 */
export type ApplyPatchesTaskProgress = Message<"google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTaskProgress"> & {
  /**
   * Required. The current state of this patch execution.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTaskProgress.State state = 1;
   */
  state: ApplyPatchesTaskProgress_State;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTaskProgress.
 * Use `create(ApplyPatchesTaskProgressSchema)` to create a new message.
 */
export const ApplyPatchesTaskProgressSchema: GenMessage<ApplyPatchesTaskProgress> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 2);

/**
 * The intermediate states of applying patches.
 *
 * @generated from enum google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTaskProgress.State
 */
export enum ApplyPatchesTaskProgress_State {
  /**
   * Unspecified is invalid.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * The agent has started the patch task.
   *
   * @generated from enum value: STARTED = 4;
   */
  STARTED = 4,

  /**
   * The agent is currently downloading patches.
   *
   * @generated from enum value: DOWNLOADING_PATCHES = 1;
   */
  DOWNLOADING_PATCHES = 1,

  /**
   * The agent is currently applying patches.
   *
   * @generated from enum value: APPLYING_PATCHES = 2;
   */
  APPLYING_PATCHES = 2,

  /**
   * The agent is currently rebooting the instance.
   *
   * @generated from enum value: REBOOTING = 3;
   */
  REBOOTING = 3,
}

/**
 * Describes the enum google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTaskProgress.State.
 */
export const ApplyPatchesTaskProgress_StateSchema: GenEnum<ApplyPatchesTaskProgress_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 2, 0);

/**
 * Information reported from the agent about applying patches execution.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTaskOutput
 */
export type ApplyPatchesTaskOutput = Message<"google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTaskOutput"> & {
  /**
   * Required. The final state of this task.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTaskOutput.State state = 1;
   */
  state: ApplyPatchesTaskOutput_State;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTaskOutput.
 * Use `create(ApplyPatchesTaskOutputSchema)` to create a new message.
 */
export const ApplyPatchesTaskOutputSchema: GenMessage<ApplyPatchesTaskOutput> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 3);

/**
 * The final states of applying patches.
 *
 * @generated from enum google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTaskOutput.State
 */
export enum ApplyPatchesTaskOutput_State {
  /**
   * Unspecified is invalid.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * Applying patches completed successfully.
   *
   * @generated from enum value: SUCCEEDED = 1;
   */
  SUCCEEDED = 1,

  /**
   * Applying patches completed successfully, but a reboot is required.
   *
   * @generated from enum value: SUCCEEDED_REBOOT_REQUIRED = 2;
   */
  SUCCEEDED_REBOOT_REQUIRED = 2,

  /**
   * Applying patches failed.
   *
   * @generated from enum value: FAILED = 3;
   */
  FAILED = 3,
}

/**
 * Describes the enum google.cloud.osconfig.agentendpoint.v1.ApplyPatchesTaskOutput.State.
 */
export const ApplyPatchesTaskOutput_StateSchema: GenEnum<ApplyPatchesTaskOutput_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 3, 0);

/**
 * Message which instructs agent to execute the following command.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ExecStepTask
 */
export type ExecStepTask = Message<"google.cloud.osconfig.agentendpoint.v1.ExecStepTask"> & {
  /**
   * Details of the exec step to run.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.ExecStep exec_step = 1;
   */
  execStep?: ExecStep;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ExecStepTask.
 * Use `create(ExecStepTaskSchema)` to create a new message.
 */
export const ExecStepTaskSchema: GenMessage<ExecStepTask> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 4);

/**
 * Information reported from the agent about the exec step execution.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ExecStepTaskProgress
 */
export type ExecStepTaskProgress = Message<"google.cloud.osconfig.agentendpoint.v1.ExecStepTaskProgress"> & {
  /**
   * Required. The current state of this exec step.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.ExecStepTaskProgress.State state = 1;
   */
  state: ExecStepTaskProgress_State;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ExecStepTaskProgress.
 * Use `create(ExecStepTaskProgressSchema)` to create a new message.
 */
export const ExecStepTaskProgressSchema: GenMessage<ExecStepTaskProgress> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 5);

/**
 * The intermediate states of exec steps.
 *
 * @generated from enum google.cloud.osconfig.agentendpoint.v1.ExecStepTaskProgress.State
 */
export enum ExecStepTaskProgress_State {
  /**
   * Unspecified is invalid.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * The agent has started the exec step task.
   *
   * @generated from enum value: STARTED = 1;
   */
  STARTED = 1,
}

/**
 * Describes the enum google.cloud.osconfig.agentendpoint.v1.ExecStepTaskProgress.State.
 */
export const ExecStepTaskProgress_StateSchema: GenEnum<ExecStepTaskProgress_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 5, 0);

/**
 * Information reported from the agent about the exec step execution.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ExecStepTaskOutput
 */
export type ExecStepTaskOutput = Message<"google.cloud.osconfig.agentendpoint.v1.ExecStepTaskOutput"> & {
  /**
   * Required. The final state of the exec step.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.ExecStepTaskOutput.State state = 1;
   */
  state: ExecStepTaskOutput_State;

  /**
   * Required. The exit code received from the script which ran as part of the
   * exec step.
   *
   * @generated from field: int32 exit_code = 2;
   */
  exitCode: number;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ExecStepTaskOutput.
 * Use `create(ExecStepTaskOutputSchema)` to create a new message.
 */
export const ExecStepTaskOutputSchema: GenMessage<ExecStepTaskOutput> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 6);

/**
 * The final states of exec steps.
 *
 * @generated from enum google.cloud.osconfig.agentendpoint.v1.ExecStepTaskOutput.State
 */
export enum ExecStepTaskOutput_State {
  /**
   * Unspecified is invalid.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * The exec step completed normally.
   *
   * @generated from enum value: COMPLETED = 1;
   */
  COMPLETED = 1,

  /**
   * The exec step was terminated because it took too long.
   *
   * @generated from enum value: TIMED_OUT = 2;
   */
  TIMED_OUT = 2,

  /**
   * The exec step task was cancelled before it started.
   *
   * @generated from enum value: CANCELLED = 3;
   */
  CANCELLED = 3,
}

/**
 * Describes the enum google.cloud.osconfig.agentendpoint.v1.ExecStepTaskOutput.State.
 */
export const ExecStepTaskOutput_StateSchema: GenEnum<ExecStepTaskOutput_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 6, 0);

/**
 * Message which instructs OS Config agent to apply the desired state
 * configuration.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ApplyConfigTask
 */
export type ApplyConfigTask = Message<"google.cloud.osconfig.agentendpoint.v1.ApplyConfigTask"> & {
  /**
   * List of os policies to be applied for the instance.
   *
   * @generated from field: repeated google.cloud.osconfig.agentendpoint.v1.ApplyConfigTask.OSPolicy os_policies = 1;
   */
  osPolicies: ApplyConfigTask_OSPolicy[];
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ApplyConfigTask.
 * Use `create(ApplyConfigTaskSchema)` to create a new message.
 */
export const ApplyConfigTaskSchema: GenMessage<ApplyConfigTask> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 7);

/**
 * Message representing an OS policy.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ApplyConfigTask.OSPolicy
 */
export type ApplyConfigTask_OSPolicy = Message<"google.cloud.osconfig.agentendpoint.v1.ApplyConfigTask.OSPolicy"> & {
  /**
   * User provided policy id.
   * Used for reporting and logging by the agent.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * The policy mode
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.OSPolicy.Mode mode = 2;
   */
  mode: OSPolicy_Mode;

  /**
   * Reference to the `OSPolicyAssignment` API resource that this `OSPolicy`
   * belongs to.
   * Format:
   * projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}
   * Used for reporting and logging by the agent.
   *
   * @generated from field: string os_policy_assignment = 3;
   */
  osPolicyAssignment: string;

  /**
   * List of resources associated with the policy to be set to their
   * desired state.
   *
   * @generated from field: repeated google.cloud.osconfig.agentendpoint.v1.OSPolicy.Resource resources = 4;
   */
  resources: OSPolicy_Resource[];
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ApplyConfigTask.OSPolicy.
 * Use `create(ApplyConfigTask_OSPolicySchema)` to create a new message.
 */
export const ApplyConfigTask_OSPolicySchema: GenMessage<ApplyConfigTask_OSPolicy> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 7, 0);

/**
 * Information reported from the agent regarding the progress of the task of
 * applying desired state configuration.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskProgress
 */
export type ApplyConfigTaskProgress = Message<"google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskProgress"> & {
  /**
   * The current state of this task.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskProgress.State state = 1;
   */
  state: ApplyConfigTaskProgress_State;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskProgress.
 * Use `create(ApplyConfigTaskProgressSchema)` to create a new message.
 */
export const ApplyConfigTaskProgressSchema: GenMessage<ApplyConfigTaskProgress> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 8);

/**
 * The intermediate states of apply config task.
 *
 * @generated from enum google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskProgress.State
 */
export enum ApplyConfigTaskProgress_State {
  /**
   * Invalid state
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * The agent has started the task.
   *
   * @generated from enum value: STARTED = 1;
   */
  STARTED = 1,

  /**
   * The agent is in the process of applying the configuration.
   *
   * @generated from enum value: APPLYING_CONFIG = 2;
   */
  APPLYING_CONFIG = 2,
}

/**
 * Describes the enum google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskProgress.State.
 */
export const ApplyConfigTaskProgress_StateSchema: GenEnum<ApplyConfigTaskProgress_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 8, 0);

/**
 * Information reported from the agent regarding the output of the task of
 * applying desired state configuration.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskOutput
 */
export type ApplyConfigTaskOutput = Message<"google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskOutput"> & {
  /**
   * Required. The final state of this task.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskOutput.State state = 1;
   */
  state: ApplyConfigTaskOutput_State;

  /**
   * Results of applying desired state config for the OS policies.
   *
   * @generated from field: repeated google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskOutput.OSPolicyResult os_policy_results = 2;
   */
  osPolicyResults: ApplyConfigTaskOutput_OSPolicyResult[];
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskOutput.
 * Use `create(ApplyConfigTaskOutputSchema)` to create a new message.
 */
export const ApplyConfigTaskOutputSchema: GenMessage<ApplyConfigTaskOutput> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 9);

/**
 * Result of applying desired state config for an OS policy.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskOutput.OSPolicyResult
 */
export type ApplyConfigTaskOutput_OSPolicyResult = Message<"google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskOutput.OSPolicyResult"> & {
  /**
   * The OS policy id
   *
   * @generated from field: string os_policy_id = 1;
   */
  osPolicyId: string;

  /**
   * Reference to the `OSPolicyAssignment` API resource that this `OSPolicy`
   * belongs to.
   * Format:
   * projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}
   * Used for reporting and logging by the agent.
   *
   * @generated from field: string os_policy_assignment = 2;
   */
  osPolicyAssignment: string;

  /**
   * Results of applying desired state config for the OS policy resources.
   *
   * @generated from field: repeated google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceCompliance os_policy_resource_compliances = 3;
   */
  osPolicyResourceCompliances: OSPolicyResourceCompliance[];
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskOutput.OSPolicyResult.
 * Use `create(ApplyConfigTaskOutput_OSPolicyResultSchema)` to create a new message.
 */
export const ApplyConfigTaskOutput_OSPolicyResultSchema: GenMessage<ApplyConfigTaskOutput_OSPolicyResult> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 9, 0);

/**
 * The final state of this task.
 *
 * @generated from enum google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskOutput.State
 */
export enum ApplyConfigTaskOutput_State {
  /**
   * Unspecified is invalid.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * The apply config task completed successfully.
   *
   * @generated from enum value: SUCCEEDED = 1;
   */
  SUCCEEDED = 1,

  /**
   * The apply config task failed.
   *
   * @generated from enum value: FAILED = 2;
   */
  FAILED = 2,

  /**
   * The apply config task was cancelled.
   *
   * @generated from enum value: CANCELLED = 3;
   */
  CANCELLED = 3,
}

/**
 * Describes the enum google.cloud.osconfig.agentendpoint.v1.ApplyConfigTaskOutput.State.
 */
export const ApplyConfigTaskOutput_StateSchema: GenEnum<ApplyConfigTaskOutput_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 9, 0);

/**
 * Specifies the current agent behavior.
 *
 * @generated from enum google.cloud.osconfig.agentendpoint.v1.TaskDirective
 */
export enum TaskDirective {
  /**
   * Unspecified is invalid.
   *
   * @generated from enum value: TASK_DIRECTIVE_UNSPECIFIED = 0;
   */
  TASK_DIRECTIVE_UNSPECIFIED = 0,

  /**
   * The task should continue to progress.
   *
   * @generated from enum value: CONTINUE = 1;
   */
  CONTINUE = 1,

  /**
   * Task should not be started, or if already in progress, should stop
   * at first safe stopping point.  Task should be considered done and will
   * never repeat.
   *
   * @generated from enum value: STOP = 2;
   */
  STOP = 2,
}

/**
 * Describes the enum google.cloud.osconfig.agentendpoint.v1.TaskDirective.
 */
export const TaskDirectiveSchema: GenEnum<TaskDirective> = /*@__PURE__*/
  enumDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 0);

/**
 * Specifies the type of task to perform.
 *
 * @generated from enum google.cloud.osconfig.agentendpoint.v1.TaskType
 */
export enum TaskType {
  /**
   * Unspecified is invalid.
   *
   * @generated from enum value: TASK_TYPE_UNSPECIFIED = 0;
   */
  TASK_TYPE_UNSPECIFIED = 0,

  /**
   * The apply patches task.
   *
   * @generated from enum value: APPLY_PATCHES = 1;
   */
  APPLY_PATCHES = 1,

  /**
   * The exec step task.
   *
   * @generated from enum value: EXEC_STEP_TASK = 2;
   */
  EXEC_STEP_TASK = 2,

  /**
   * The apply config task
   *
   * @generated from enum value: APPLY_CONFIG_TASK = 3;
   */
  APPLY_CONFIG_TASK = 3,
}

/**
 * Describes the enum google.cloud.osconfig.agentendpoint.v1.TaskType.
 */
export const TaskTypeSchema: GenEnum<TaskType> = /*@__PURE__*/
  enumDesc(file_google_cloud_osconfig_agentendpoint_v1_tasks, 1);
