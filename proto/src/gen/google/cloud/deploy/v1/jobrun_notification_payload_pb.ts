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
// @generated from file google/cloud/deploy/v1/jobrun_notification_payload.proto (package google.cloud.deploy.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Type } from "./log_enums_pb";
import { file_google_cloud_deploy_v1_log_enums } from "./log_enums_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/deploy/v1/jobrun_notification_payload.proto.
 */
export const file_google_cloud_deploy_v1_jobrun_notification_payload: GenFile = /*@__PURE__*/
  fileDesc("Cjhnb29nbGUvY2xvdWQvZGVwbG95L3YxL2pvYnJ1bl9ub3RpZmljYXRpb25fcGF5bG9hZC5wcm90bxIWZ29vZ2xlLmNsb3VkLmRlcGxveS52MSLcAQoXSm9iUnVuTm90aWZpY2F0aW9uRXZlbnQSDwoHbWVzc2FnZRgBIAEoCRIPCgdqb2JfcnVuGAIgASgJEhQKDHBpcGVsaW5lX3VpZBgDIAEoCRITCgtyZWxlYXNlX3VpZBgEIAEoCRIPCgdyZWxlYXNlGAggASgJEhMKC3JvbGxvdXRfdWlkGAUgASgJEg8KB3JvbGxvdXQYCSABKAkSEQoJdGFyZ2V0X2lkGAYgASgJEioKBHR5cGUYByABKA4yHC5nb29nbGUuY2xvdWQuZGVwbG95LnYxLlR5cGVCcgoaY29tLmdvb2dsZS5jbG91ZC5kZXBsb3kudjFCHkpvYlJ1bk5vdGlmaWNhdGlvblBheWxvYWRQcm90b1ABWjJjbG91ZC5nb29nbGUuY29tL2dvL2RlcGxveS9hcGl2MS9kZXBsb3lwYjtkZXBsb3lwYmIGcHJvdG8z", [file_google_cloud_deploy_v1_log_enums]);

/**
 * Payload proto for "clouddeploy.googleapis.com/jobrun_notification"
 * Platform Log event that describes the failure to send JobRun resource update
 * Pub/Sub notification.
 *
 * @generated from message google.cloud.deploy.v1.JobRunNotificationEvent
 */
export type JobRunNotificationEvent = Message<"google.cloud.deploy.v1.JobRunNotificationEvent"> & {
  /**
   * Debug message for when a notification fails to send.
   *
   * @generated from field: string message = 1;
   */
  message: string;

  /**
   * The name of the `JobRun`.
   *
   * @generated from field: string job_run = 2;
   */
  jobRun: string;

  /**
   * Unique identifier of the `DeliveryPipeline`.
   *
   * @generated from field: string pipeline_uid = 3;
   */
  pipelineUid: string;

  /**
   * Unique identifier of the `Release`.
   *
   * @generated from field: string release_uid = 4;
   */
  releaseUid: string;

  /**
   * The name of the `Release`.
   *
   * @generated from field: string release = 8;
   */
  release: string;

  /**
   * Unique identifier of the `Rollout`.
   *
   * @generated from field: string rollout_uid = 5;
   */
  rolloutUid: string;

  /**
   * The name of the `Rollout`.
   *
   * @generated from field: string rollout = 9;
   */
  rollout: string;

  /**
   * ID of the `Target`.
   *
   * @generated from field: string target_id = 6;
   */
  targetId: string;

  /**
   * Type of this notification, e.g. for a Pub/Sub failure.
   *
   * @generated from field: google.cloud.deploy.v1.Type type = 7;
   */
  type: Type;
};

/**
 * Describes the message google.cloud.deploy.v1.JobRunNotificationEvent.
 * Use `create(JobRunNotificationEventSchema)` to create a new message.
 */
export const JobRunNotificationEventSchema: GenMessage<JobRunNotificationEvent> = /*@__PURE__*/
  messageDesc(file_google_cloud_deploy_v1_jobrun_notification_payload, 0);
