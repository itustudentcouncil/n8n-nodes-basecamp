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
// @generated from file google/cloud/integrations/v1alpha/task_config.proto (package google.cloud.integrations.v1alpha, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { Coordinate } from "./coordinate_pb";
import { file_google_cloud_integrations_v1alpha_coordinate } from "./coordinate_pb";
import type { EventParameter } from "./event_parameter_pb";
import { file_google_cloud_integrations_v1alpha_event_parameter } from "./event_parameter_pb";
import type { JsonValidationOption } from "./json_validation_pb";
import { file_google_cloud_integrations_v1alpha_json_validation } from "./json_validation_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/integrations/v1alpha/task_config.proto.
 */
export const file_google_cloud_integrations_v1alpha_task_config: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvY2xvdWQvaW50ZWdyYXRpb25zL3YxYWxwaGEvdGFza19jb25maWcucHJvdG8SIWdvb2dsZS5jbG91ZC5pbnRlZ3JhdGlvbnMudjFhbHBoYSLtCwoKVGFza0NvbmZpZxIRCgR0YXNrGAEgASgJQgPgQQESFAoHdGFza19pZBgCIAEoCUID4EECElYKCnBhcmFtZXRlcnMYAyADKAsyPS5nb29nbGUuY2xvdWQuaW50ZWdyYXRpb25zLnYxYWxwaGEuVGFza0NvbmZpZy5QYXJhbWV0ZXJzRW50cnlCA+BBARJNCg5mYWlsdXJlX3BvbGljeRgEIAEoCzIwLmdvb2dsZS5jbG91ZC5pbnRlZ3JhdGlvbnMudjFhbHBoYS5GYWlsdXJlUG9saWN5QgPgQQESXgofc3luY2hyb25vdXNfY2FsbF9mYWlsdXJlX3BvbGljeRgFIAEoCzIwLmdvb2dsZS5jbG91ZC5pbnRlZ3JhdGlvbnMudjFhbHBoYS5GYWlsdXJlUG9saWN5QgPgQQESRAoKbmV4dF90YXNrcxgGIAMoCzIrLmdvb2dsZS5jbG91ZC5pbnRlZ3JhdGlvbnMudjFhbHBoYS5OZXh0VGFza0ID4EEBEnAKG25leHRfdGFza3NfZXhlY3V0aW9uX3BvbGljeRgHIAEoDjJGLmdvb2dsZS5jbG91ZC5pbnRlZ3JhdGlvbnMudjFhbHBoYS5UYXNrQ29uZmlnLk5leHRUYXNrc0V4ZWN1dGlvblBvbGljeUID4EEBEmkKF3Rhc2tfZXhlY3V0aW9uX3N0cmF0ZWd5GAggASgOMkMuZ29vZ2xlLmNsb3VkLmludGVncmF0aW9ucy52MWFscGhhLlRhc2tDb25maWcuVGFza0V4ZWN1dGlvblN0cmF0ZWd5QgPgQQESGQoMZGlzcGxheV9uYW1lGAkgASgJQgPgQQESTQoOc3VjY2Vzc19wb2xpY3kYCiABKAsyMC5nb29nbGUuY2xvdWQuaW50ZWdyYXRpb25zLnYxYWxwaGEuU3VjY2Vzc1BvbGljeUID4EEBElwKFmpzb25fdmFsaWRhdGlvbl9vcHRpb24YCyABKA4yNy5nb29nbGUuY2xvdWQuaW50ZWdyYXRpb25zLnYxYWxwaGEuSnNvblZhbGlkYXRpb25PcHRpb25CA+BBARIYCgtkZXNjcmlwdGlvbhgMIAEoCUID4EEBEhoKDXRhc2tfdGVtcGxhdGUYDSABKAlCA+BBARIdChBlcnJvcl9jYXRjaGVyX2lkGBEgASgJQgPgQQESXwoSZXh0ZXJuYWxfdGFza190eXBlGA8gASgOMj4uZ29vZ2xlLmNsb3VkLmludGVncmF0aW9ucy52MWFscGhhLlRhc2tDb25maWcuRXh0ZXJuYWxUYXNrVHlwZUID4EEBEkQKCHBvc2l0aW9uGBAgASgLMi0uZ29vZ2xlLmNsb3VkLmludGVncmF0aW9ucy52MWFscGhhLkNvb3JkaW5hdGVCA+BBARpkCg9QYXJhbWV0ZXJzRW50cnkSCwoDa2V5GAEgASgJEkAKBXZhbHVlGAIgASgLMjEuZ29vZ2xlLmNsb3VkLmludGVncmF0aW9ucy52MWFscGhhLkV2ZW50UGFyYW1ldGVyOgI4ASJvChhOZXh0VGFza3NFeGVjdXRpb25Qb2xpY3kSKwonTkVYVF9UQVNLU19FWEVDVVRJT05fUE9MSUNZX1VOU1BFQ0lGSUVEEAASEQoNUlVOX0FMTF9NQVRDSBABEhMKD1JVTl9GSVJTVF9NQVRDSBACIpcBChVUYXNrRXhlY3V0aW9uU3RyYXRlZ3kSJwojVEFTS19FWEVDVVRJT05fU1RSQVRFR1lfVU5TUEVDSUZJRUQQABIUChBXSEVOX0FMTF9TVUNDRUVEEAESFAoQV0hFTl9BTllfU1VDQ0VFRBACEikKJVdIRU5fQUxMX1RBU0tTX0FORF9DT05ESVRJT05TX1NVQ0NFRUQQAyJXChBFeHRlcm5hbFRhc2tUeXBlEiIKHkVYVEVSTkFMX1RBU0tfVFlQRV9VTlNQRUNJRklFRBAAEg8KC05PUk1BTF9UQVNLEAESDgoKRVJST1JfVEFTSxACIqoBCg1TdWNjZXNzUG9saWN5ElAKC2ZpbmFsX3N0YXRlGAEgASgOMjsuZ29vZ2xlLmNsb3VkLmludGVncmF0aW9ucy52MWFscGhhLlN1Y2Nlc3NQb2xpY3kuRmluYWxTdGF0ZSJHCgpGaW5hbFN0YXRlEhsKF0ZJTkFMX1NUQVRFX1VOU1BFQ0lGSUVEEAASDQoJU1VDQ0VFREVEEAESDQoJU1VTUEVOREVEEAIi6QIKDUZhaWx1cmVQb2xpY3kSVgoOcmV0cnlfc3RyYXRlZ3kYASABKA4yPi5nb29nbGUuY2xvdWQuaW50ZWdyYXRpb25zLnYxYWxwaGEuRmFpbHVyZVBvbGljeS5SZXRyeVN0cmF0ZWd5EhMKC21heF9yZXRyaWVzGAIgASgFEjEKDWludGVydmFsX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wIrcBCg1SZXRyeVN0cmF0ZWd5Eh4KGlJFVFJZX1NUUkFURUdZX1VOU1BFQ0lGSUVEEAASCgoGSUdOT1JFEAESCAoETk9ORRACEgkKBUZBVEFMEAMSEgoORklYRURfSU5URVJWQUwQBBISCg5MSU5FQVJfQkFDS09GRhAFEhcKE0VYUE9ORU5USUFMX0JBQ0tPRkYQBhIkCiBSRVNUQVJUX0lOVEVHUkFUSU9OX1dJVEhfQkFDS09GRhAHInEKCE5leHRUYXNrEhYKDnRhc2tfY29uZmlnX2lkGAEgASgJEg8KB3Rhc2tfaWQYAiABKAkSEQoJY29uZGl0aW9uGAMgASgJEhQKDGRpc3BsYXlfbmFtZRgEIAEoCRITCgtkZXNjcmlwdGlvbhgFIAEoCUKpAQolY29tLmdvb2dsZS5jbG91ZC5pbnRlZ3JhdGlvbnMudjFhbHBoYUIPVGFza0NvbmZpZ1Byb3RvUAFaSWNsb3VkLmdvb2dsZS5jb20vZ28vaW50ZWdyYXRpb25zL2FwaXYxYWxwaGEvaW50ZWdyYXRpb25zcGI7aW50ZWdyYXRpb25zcGKqAiFHb29nbGUuQ2xvdWQuSW50ZWdyYXRpb25zLlYxQWxwaGFiBnByb3RvMw", [file_google_api_field_behavior, file_google_cloud_integrations_v1alpha_coordinate, file_google_cloud_integrations_v1alpha_event_parameter, file_google_cloud_integrations_v1alpha_json_validation, file_google_protobuf_timestamp]);

/**
 * The task configuration details. This is not the implementation of Task.
 * There might be multiple TaskConfigs for the same Task.
 *
 * @generated from message google.cloud.integrations.v1alpha.TaskConfig
 */
export type TaskConfig = Message<"google.cloud.integrations.v1alpha.TaskConfig"> & {
  /**
   * Optional. The name for the task.
   *
   * @generated from field: string task = 1;
   */
  task: string;

  /**
   * Required. The identifier of this task within its parent event config,
   * specified by the client. This should be unique among all the tasks belong
   * to the same event config. We use this field as the identifier to
   * find next tasks (via field `next_tasks.task_id`).
   *
   * @generated from field: string task_id = 2;
   */
  taskId: string;

  /**
   * Optional. The customized parameters the user can pass to this task.
   *
   * @generated from field: map<string, google.cloud.integrations.v1alpha.EventParameter> parameters = 3;
   */
  parameters: { [key: string]: EventParameter };

  /**
   * Optional. Determines the number of times the
   * task will be retried on failure and with what retry strategy.
   * This is applicable for asynchronous calls to Eventbus alone (Post To
   * Queue, Schedule etc.).
   *
   * @generated from field: google.cloud.integrations.v1alpha.FailurePolicy failure_policy = 4;
   */
  failurePolicy?: FailurePolicy;

  /**
   * Optional. Determines the number of times the
   * task will be retried on failure and with what retry strategy.
   * This is applicable for synchronous calls to Eventbus alone (Post).
   *
   * @generated from field: google.cloud.integrations.v1alpha.FailurePolicy synchronous_call_failure_policy = 5;
   */
  synchronousCallFailurePolicy?: FailurePolicy;

  /**
   * Optional. The set of tasks that are next in line to be executed as per the
   * execution graph defined for the parent event, specified by
   * `event_config_id`. Each of these next tasks are executed
   * only if the condition associated with them evaluates to true.
   *
   * @generated from field: repeated google.cloud.integrations.v1alpha.NextTask next_tasks = 6;
   */
  nextTasks: NextTask[];

  /**
   * Optional. The policy dictating the execution of the next set of tasks for
   * the current task.
   *
   * @generated from field: google.cloud.integrations.v1alpha.TaskConfig.NextTasksExecutionPolicy next_tasks_execution_policy = 7;
   */
  nextTasksExecutionPolicy: TaskConfig_NextTasksExecutionPolicy;

  /**
   * Optional. The policy dictating the execution strategy of this task.
   *
   * @generated from field: google.cloud.integrations.v1alpha.TaskConfig.TaskExecutionStrategy task_execution_strategy = 8;
   */
  taskExecutionStrategy: TaskConfig_TaskExecutionStrategy;

  /**
   * Optional. User-provided label that is attached to this TaskConfig in the
   * UI.
   *
   * @generated from field: string display_name = 9;
   */
  displayName: string;

  /**
   * Optional. Determines what action to take upon successful task completion.
   *
   * @generated from field: google.cloud.integrations.v1alpha.SuccessPolicy success_policy = 10;
   */
  successPolicy?: SuccessPolicy;

  /**
   * Optional. If set, overrides the option configured in the Task
   * implementation class.
   *
   * @generated from field: google.cloud.integrations.v1alpha.JsonValidationOption json_validation_option = 11;
   */
  jsonValidationOption: JsonValidationOption;

  /**
   * Optional. User-provided description intended to give additional business
   * context about the task.
   *
   * @generated from field: string description = 12;
   */
  description: string;

  /**
   * Optional. Used to define task-template name if task is of type
   * task-template
   *
   * @generated from field: string task_template = 13;
   */
  taskTemplate: string;

  /**
   * Optional. Optional
   * Error catcher id of the error catch flow which will be executed when
   * execution error happens in the task
   *
   * @generated from field: string error_catcher_id = 17;
   */
  errorCatcherId: string;

  /**
   * Optional. External task type of the task
   *
   * @generated from field: google.cloud.integrations.v1alpha.TaskConfig.ExternalTaskType external_task_type = 15;
   */
  externalTaskType: TaskConfig_ExternalTaskType;

  /**
   * Optional. Informs the front-end application where to draw this error
   * catcher config on the UI.
   *
   * @generated from field: google.cloud.integrations.v1alpha.Coordinate position = 16;
   */
  position?: Coordinate;
};

/**
 * Describes the message google.cloud.integrations.v1alpha.TaskConfig.
 * Use `create(TaskConfigSchema)` to create a new message.
 */
export const TaskConfigSchema: GenMessage<TaskConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_integrations_v1alpha_task_config, 0);

/**
 * Various policies for executing the next set of tasks.
 *
 * @generated from enum google.cloud.integrations.v1alpha.TaskConfig.NextTasksExecutionPolicy
 */
export enum TaskConfig_NextTasksExecutionPolicy {
  /**
   * Default.
   *
   * @generated from enum value: NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED = 0;
   */
  NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED = 0,

  /**
   * Execute all the tasks that satisfy their associated condition.
   *
   * @generated from enum value: RUN_ALL_MATCH = 1;
   */
  RUN_ALL_MATCH = 1,

  /**
   * Execute the first task that satisfies the associated condition.
   *
   * @generated from enum value: RUN_FIRST_MATCH = 2;
   */
  RUN_FIRST_MATCH = 2,
}

/**
 * Describes the enum google.cloud.integrations.v1alpha.TaskConfig.NextTasksExecutionPolicy.
 */
export const TaskConfig_NextTasksExecutionPolicySchema: GenEnum<TaskConfig_NextTasksExecutionPolicy> = /*@__PURE__*/
  enumDesc(file_google_cloud_integrations_v1alpha_task_config, 0, 0);

/**
 * Various policies to trigger the execution of this task.
 *
 * @generated from enum google.cloud.integrations.v1alpha.TaskConfig.TaskExecutionStrategy
 */
export enum TaskConfig_TaskExecutionStrategy {
  /**
   * Default. If the strategy is not set explicitly, it will default to
   * `WHEN_ALL_SUCCEED`.
   *
   * @generated from enum value: TASK_EXECUTION_STRATEGY_UNSPECIFIED = 0;
   */
  TASK_EXECUTION_STRATEGY_UNSPECIFIED = 0,

  /**
   * Wait until all of its previous tasks finished execution, then verify at
   * least one of the edge conditions is met, and execute if possible. This
   * should be considered as WHEN_ALL_TASKS_SUCCEED.
   *
   * @generated from enum value: WHEN_ALL_SUCCEED = 1;
   */
  WHEN_ALL_SUCCEED = 1,

  /**
   * Start execution as long as any of its previous tasks finished execution
   * and the corresponding edge condition is met (since we will execute if
   * only that succeeding edge condition is met).
   *
   * @generated from enum value: WHEN_ANY_SUCCEED = 2;
   */
  WHEN_ANY_SUCCEED = 2,

  /**
   * Wait until all of its previous tasks finished execution, then verify
   * the all edge conditions are met and execute if possible.
   *
   * @generated from enum value: WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED = 3;
   */
  WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED = 3,
}

/**
 * Describes the enum google.cloud.integrations.v1alpha.TaskConfig.TaskExecutionStrategy.
 */
export const TaskConfig_TaskExecutionStrategySchema: GenEnum<TaskConfig_TaskExecutionStrategy> = /*@__PURE__*/
  enumDesc(file_google_cloud_integrations_v1alpha_task_config, 0, 1);

/**
 * Defines the type of the task for external customer
 *
 * @generated from enum google.cloud.integrations.v1alpha.TaskConfig.ExternalTaskType
 */
export enum TaskConfig_ExternalTaskType {
  /**
   * Default value. External task type is not specified
   *
   * @generated from enum value: EXTERNAL_TASK_TYPE_UNSPECIFIED = 0;
   */
  EXTERNAL_TASK_TYPE_UNSPECIFIED = 0,

  /**
   * Tasks belongs to the normal task flows
   *
   * @generated from enum value: NORMAL_TASK = 1;
   */
  NORMAL_TASK = 1,

  /**
   * Task belongs to the error catch task flows
   *
   * @generated from enum value: ERROR_TASK = 2;
   */
  ERROR_TASK = 2,
}

/**
 * Describes the enum google.cloud.integrations.v1alpha.TaskConfig.ExternalTaskType.
 */
export const TaskConfig_ExternalTaskTypeSchema: GenEnum<TaskConfig_ExternalTaskType> = /*@__PURE__*/
  enumDesc(file_google_cloud_integrations_v1alpha_task_config, 0, 2);

/**
 * Policy that dictates the behavior for the task after it completes
 * successfully.
 *
 * @generated from message google.cloud.integrations.v1alpha.SuccessPolicy
 */
export type SuccessPolicy = Message<"google.cloud.integrations.v1alpha.SuccessPolicy"> & {
  /**
   * State to which the execution snapshot status will be set if the task
   * succeeds.
   *
   * @generated from field: google.cloud.integrations.v1alpha.SuccessPolicy.FinalState final_state = 1;
   */
  finalState: SuccessPolicy_FinalState;
};

/**
 * Describes the message google.cloud.integrations.v1alpha.SuccessPolicy.
 * Use `create(SuccessPolicySchema)` to create a new message.
 */
export const SuccessPolicySchema: GenMessage<SuccessPolicy> = /*@__PURE__*/
  messageDesc(file_google_cloud_integrations_v1alpha_task_config, 1);

/**
 * The state of execution.
 *
 * @generated from enum google.cloud.integrations.v1alpha.SuccessPolicy.FinalState
 */
export enum SuccessPolicy_FinalState {
  /**
   * UNSPECIFIED.
   *
   * @generated from enum value: FINAL_STATE_UNSPECIFIED = 0;
   */
  FINAL_STATE_UNSPECIFIED = 0,

  /**
   * The default behavior, where successful tasks will be marked as SUCCEEDED.
   *
   * @generated from enum value: SUCCEEDED = 1;
   */
  SUCCEEDED = 1,

  /**
   * Sets the state to SUSPENDED after executing.  This is required for
   * SuspensionTask; event execution will continue once the user calls
   * ResolveSuspensions with the event_execution_info_id and the task number.
   *
   * @generated from enum value: SUSPENDED = 2;
   */
  SUSPENDED = 2,
}

/**
 * Describes the enum google.cloud.integrations.v1alpha.SuccessPolicy.FinalState.
 */
export const SuccessPolicy_FinalStateSchema: GenEnum<SuccessPolicy_FinalState> = /*@__PURE__*/
  enumDesc(file_google_cloud_integrations_v1alpha_task_config, 1, 0);

/**
 * Policy that defines the task retry logic and failure type. If no
 * FailurePolicy is defined for a task, all its dependent tasks will not be
 * executed (i.e, a `retry_strategy` of NONE will be applied).
 *
 * @generated from message google.cloud.integrations.v1alpha.FailurePolicy
 */
export type FailurePolicy = Message<"google.cloud.integrations.v1alpha.FailurePolicy"> & {
  /**
   * Defines what happens to the task upon failure.
   *
   * @generated from field: google.cloud.integrations.v1alpha.FailurePolicy.RetryStrategy retry_strategy = 1;
   */
  retryStrategy: FailurePolicy_RetryStrategy;

  /**
   * Required if retry_strategy is FIXED_INTERVAL or
   * LINEAR/EXPONENTIAL_BACKOFF/RESTART_INTEGRATION_WITH_BACKOFF. Defines the
   * number of times the task will be retried if failed.
   *
   * @generated from field: int32 max_retries = 2;
   */
  maxRetries: number;

  /**
   * Required if retry_strategy is FIXED_INTERVAL or
   * LINEAR/EXPONENTIAL_BACKOFF/RESTART_INTEGRATION_WITH_BACKOFF. Defines the
   * initial interval in seconds for backoff.
   *
   * @generated from field: google.protobuf.Timestamp interval_time = 3;
   */
  intervalTime?: Timestamp;
};

/**
 * Describes the message google.cloud.integrations.v1alpha.FailurePolicy.
 * Use `create(FailurePolicySchema)` to create a new message.
 */
export const FailurePolicySchema: GenMessage<FailurePolicy> = /*@__PURE__*/
  messageDesc(file_google_cloud_integrations_v1alpha_task_config, 2);

/**
 * The behavior when the taks failed.
 *
 * @generated from enum google.cloud.integrations.v1alpha.FailurePolicy.RetryStrategy
 */
export enum FailurePolicy_RetryStrategy {
  /**
   * UNSPECIFIED.
   *
   * @generated from enum value: RETRY_STRATEGY_UNSPECIFIED = 0;
   */
  RETRY_STRATEGY_UNSPECIFIED = 0,

  /**
   * Ignores the failure of this task. The rest of the integration will be
   * executed Assuming this task succeeded.
   *
   * @generated from enum value: IGNORE = 1;
   */
  IGNORE = 1,

  /**
   * Causes a permanent failure of the task. However, if the last task(s)
   * of event was successfully completed despite the failure of this task,
   * it has no impact on the integration.
   *
   * @generated from enum value: NONE = 2;
   */
  NONE = 2,

  /**
   * Causes a permanent failure of the event. It is different from NONE
   * because this will mark the event as FAILED by shutting down the
   * event execution.
   *
   * @generated from enum value: FATAL = 3;
   */
  FATAL = 3,

  /**
   * The task will be retried from the failed task onwards after a fixed
   * delay. A max-retry count is required to be specified with this
   * strategy. A jitter is added to each exponential interval so that
   * concurrently failing tasks of the same type do not end up retrying
   * after the exact same exponential interval. max_retries and
   * interval_in_seconds must be specified.
   *
   * @generated from enum value: FIXED_INTERVAL = 4;
   */
  FIXED_INTERVAL = 4,

  /**
   * The task will be retried from the failed task onwards after a fixed
   * delay that linearly increases with each retry attempt. A jitter is
   * added to each exponential interval so that concurrently failing tasks
   * of the same type do not end up retrying after the exact same
   * exponential interval. A max-retry count is required to be specified
   * with this strategy. max_retries and interval_in_seconds must be
   * specified.
   *
   * @generated from enum value: LINEAR_BACKOFF = 5;
   */
  LINEAR_BACKOFF = 5,

  /**
   * The task will be retried after an exponentially increasing period of
   * time with each failure. A jitter is added to each exponential interval
   * so that concurrently failing tasks of the same type do not end up
   * retrying after the exact same exponential interval. A max-retry count
   * is required to be specified with this strategy. `max_retries` and
   * `interval_in_seconds` must be specified.
   *
   * @generated from enum value: EXPONENTIAL_BACKOFF = 6;
   */
  EXPONENTIAL_BACKOFF = 6,

  /**
   * The entire integration will be restarted with the initial parameters that
   * were set when the event was fired. A max-retry count is required to be
   * specified with this strategy. `max_retries` and `interval_in_seconds`
   * must be specified.
   *
   * @generated from enum value: RESTART_INTEGRATION_WITH_BACKOFF = 7;
   */
  RESTART_INTEGRATION_WITH_BACKOFF = 7,
}

/**
 * Describes the enum google.cloud.integrations.v1alpha.FailurePolicy.RetryStrategy.
 */
export const FailurePolicy_RetryStrategySchema: GenEnum<FailurePolicy_RetryStrategy> = /*@__PURE__*/
  enumDesc(file_google_cloud_integrations_v1alpha_task_config, 2, 0);

/**
 * The task that is next in line to be executed, if the
 * condition specified evaluated to true.
 *
 * @generated from message google.cloud.integrations.v1alpha.NextTask
 */
export type NextTask = Message<"google.cloud.integrations.v1alpha.NextTask"> & {
  /**
   * ID of the next task.
   *
   * @generated from field: string task_config_id = 1;
   */
  taskConfigId: string;

  /**
   * Task number of the next task.
   *
   * @generated from field: string task_id = 2;
   */
  taskId: string;

  /**
   * Standard filter expression for this task to become an eligible next task.
   *
   * @generated from field: string condition = 3;
   */
  condition: string;

  /**
   * User-provided label that is attached to this edge in the UI.
   *
   * @generated from field: string display_name = 4;
   */
  displayName: string;

  /**
   * User-provided description intended to give additional business context
   * about the task.
   *
   * @generated from field: string description = 5;
   */
  description: string;
};

/**
 * Describes the message google.cloud.integrations.v1alpha.NextTask.
 * Use `create(NextTaskSchema)` to create a new message.
 */
export const NextTaskSchema: GenMessage<NextTask> = /*@__PURE__*/
  messageDesc(file_google_cloud_integrations_v1alpha_task_config, 3);
