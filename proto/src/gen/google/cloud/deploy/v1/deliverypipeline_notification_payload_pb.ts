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
// @generated from file google/cloud/deploy/v1/deliverypipeline_notification_payload.proto (package google.cloud.deploy.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Type } from "./log_enums_pb";
import { file_google_cloud_deploy_v1_log_enums } from "./log_enums_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/deploy/v1/deliverypipeline_notification_payload.proto.
 */
export const file_google_cloud_deploy_v1_deliverypipeline_notification_payload: GenFile = /*@__PURE__*/
  fileDesc("CkJnb29nbGUvY2xvdWQvZGVwbG95L3YxL2RlbGl2ZXJ5cGlwZWxpbmVfbm90aWZpY2F0aW9uX3BheWxvYWQucHJvdG8SFmdvb2dsZS5jbG91ZC5kZXBsb3kudjEikQEKIURlbGl2ZXJ5UGlwZWxpbmVOb3RpZmljYXRpb25FdmVudBIPCgdtZXNzYWdlGAEgASgJEhQKDHBpcGVsaW5lX3VpZBgEIAEoCRIZChFkZWxpdmVyeV9waXBlbGluZRgCIAEoCRIqCgR0eXBlGAMgASgOMhwuZ29vZ2xlLmNsb3VkLmRlcGxveS52MS5UeXBlQnwKGmNvbS5nb29nbGUuY2xvdWQuZGVwbG95LnYxQihEZWxpdmVyeVBpcGVsaW5lTm90aWZpY2F0aW9uUGF5bG9hZFByb3RvUAFaMmNsb3VkLmdvb2dsZS5jb20vZ28vZGVwbG95L2FwaXYxL2RlcGxveXBiO2RlcGxveXBiYgZwcm90bzM", [file_google_cloud_deploy_v1_log_enums]);

/**
 * Payload proto for "clouddeploy.googleapis.com/deliverypipeline_notification"
 * Platform Log event that describes the failure to send delivery pipeline
 * status change Pub/Sub notification.
 *
 * @generated from message google.cloud.deploy.v1.DeliveryPipelineNotificationEvent
 */
export type DeliveryPipelineNotificationEvent = Message<"google.cloud.deploy.v1.DeliveryPipelineNotificationEvent"> & {
  /**
   * Debug message for when a notification fails to send.
   *
   * @generated from field: string message = 1;
   */
  message: string;

  /**
   * Unique identifier of the `DeliveryPipeline`.
   *
   * @generated from field: string pipeline_uid = 4;
   */
  pipelineUid: string;

  /**
   * The name of the `Delivery Pipeline`.
   *
   * @generated from field: string delivery_pipeline = 2;
   */
  deliveryPipeline: string;

  /**
   * Type of this notification, e.g. for a Pub/Sub failure.
   *
   * @generated from field: google.cloud.deploy.v1.Type type = 3;
   */
  type: Type;
};

/**
 * Describes the message google.cloud.deploy.v1.DeliveryPipelineNotificationEvent.
 * Use `create(DeliveryPipelineNotificationEventSchema)` to create a new message.
 */
export const DeliveryPipelineNotificationEventSchema: GenMessage<DeliveryPipelineNotificationEvent> = /*@__PURE__*/
  messageDesc(file_google_cloud_deploy_v1_deliverypipeline_notification_payload, 0);
