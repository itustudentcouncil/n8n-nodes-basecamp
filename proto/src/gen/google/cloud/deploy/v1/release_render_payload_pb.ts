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
// @generated from file google/cloud/deploy/v1/release_render_payload.proto (package google.cloud.deploy.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Release_RenderState } from "./cloud_deploy_pb";
import { file_google_cloud_deploy_v1_cloud_deploy } from "./cloud_deploy_pb";
import type { Type } from "./log_enums_pb";
import { file_google_cloud_deploy_v1_log_enums } from "./log_enums_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/deploy/v1/release_render_payload.proto.
 */
export const file_google_cloud_deploy_v1_release_render_payload: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvY2xvdWQvZGVwbG95L3YxL3JlbGVhc2VfcmVuZGVyX3BheWxvYWQucHJvdG8SFmdvb2dsZS5jbG91ZC5kZXBsb3kudjEiwwEKElJlbGVhc2VSZW5kZXJFdmVudBIPCgdtZXNzYWdlGAEgASgJEhQKDHBpcGVsaW5lX3VpZBgEIAEoCRIPCgdyZWxlYXNlGAIgASgJEioKBHR5cGUYBSABKA4yHC5nb29nbGUuY2xvdWQuZGVwbG95LnYxLlR5cGUSSQoUcmVsZWFzZV9yZW5kZXJfc3RhdGUYAyABKA4yKy5nb29nbGUuY2xvdWQuZGVwbG95LnYxLlJlbGVhc2UuUmVuZGVyU3RhdGVCbQoaY29tLmdvb2dsZS5jbG91ZC5kZXBsb3kudjFCGVJlbGVhc2VSZW5kZXJQYXlsb2FkUHJvdG9QAVoyY2xvdWQuZ29vZ2xlLmNvbS9nby9kZXBsb3kvYXBpdjEvZGVwbG95cGI7ZGVwbG95cGJiBnByb3RvMw", [file_google_cloud_deploy_v1_cloud_deploy, file_google_cloud_deploy_v1_log_enums]);

/**
 * Payload proto for "clouddeploy.googleapis.com/release_render"
 * Platform Log event that describes the render status change.
 *
 * @generated from message google.cloud.deploy.v1.ReleaseRenderEvent
 */
export type ReleaseRenderEvent = Message<"google.cloud.deploy.v1.ReleaseRenderEvent"> & {
  /**
   * Debug message for when a render transition occurs. Provides further
   * details as rendering progresses through render states.
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
   * The name of the release.
   * release_uid is not in this log message because we write some of these log
   * messages at release creation time, before we've generated the uid.
   *
   * @generated from field: string release = 2;
   */
  release: string;

  /**
   * Type of this notification, e.g. for a release render state change event.
   *
   * @generated from field: google.cloud.deploy.v1.Type type = 5;
   */
  type: Type;

  /**
   * The state of the release render.
   *
   * @generated from field: google.cloud.deploy.v1.Release.RenderState release_render_state = 3;
   */
  releaseRenderState: Release_RenderState;
};

/**
 * Describes the message google.cloud.deploy.v1.ReleaseRenderEvent.
 * Use `create(ReleaseRenderEventSchema)` to create a new message.
 */
export const ReleaseRenderEventSchema: GenMessage<ReleaseRenderEvent> = /*@__PURE__*/
  messageDesc(file_google_cloud_deploy_v1_release_render_payload, 0);
