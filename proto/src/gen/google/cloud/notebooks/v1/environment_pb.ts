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
// @generated from file google/cloud/notebooks/v1/environment.proto (package google.cloud.notebooks.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/notebooks/v1/environment.proto.
 */
export const file_google_cloud_notebooks_v1_environment: GenFile = /*@__PURE__*/
  fileDesc("Citnb29nbGUvY2xvdWQvbm90ZWJvb2tzL3YxL2Vudmlyb25tZW50LnByb3RvEhlnb29nbGUuY2xvdWQubm90ZWJvb2tzLnYxIoQDCgtFbnZpcm9ubWVudBIRCgRuYW1lGAEgASgJQgPgQQMSFAoMZGlzcGxheV9uYW1lGAIgASgJEhMKC2Rlc2NyaXB0aW9uGAMgASgJEjYKCHZtX2ltYWdlGAYgASgLMiIuZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52MS5WbUltYWdlSAASRAoPY29udGFpbmVyX2ltYWdlGAcgASgLMikuZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52MS5Db250YWluZXJJbWFnZUgAEhsKE3Bvc3Rfc3RhcnR1cF9zY3JpcHQYCCABKAkSNAoLY3JlYXRlX3RpbWUYCSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQM6WOpBVQokbm90ZWJvb2tzLmdvb2dsZWFwaXMuY29tL0Vudmlyb25tZW50Ei1wcm9qZWN0cy97cHJvamVjdH0vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudH1CDAoKaW1hZ2VfdHlwZSJWCgdWbUltYWdlEhQKB3Byb2plY3QYASABKAlCA+BBAhIUCgppbWFnZV9uYW1lGAIgASgJSAASFgoMaW1hZ2VfZmFtaWx5GAMgASgJSABCBwoFaW1hZ2UiNgoOQ29udGFpbmVySW1hZ2USFwoKcmVwb3NpdG9yeRgBIAEoCUID4EECEgsKA3RhZxgCIAEoCULHAQodY29tLmdvb2dsZS5jbG91ZC5ub3RlYm9va3MudjFCEEVudmlyb25tZW50UHJvdG9QAVo7Y2xvdWQuZ29vZ2xlLmNvbS9nby9ub3RlYm9va3MvYXBpdjEvbm90ZWJvb2tzcGI7bm90ZWJvb2tzcGKqAhlHb29nbGUuQ2xvdWQuTm90ZWJvb2tzLlYxygIZR29vZ2xlXENsb3VkXE5vdGVib29rc1xWMeoCHEdvb2dsZTo6Q2xvdWQ6Ok5vdGVib29rczo6VjFiBnByb3RvMw", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp]);

/**
 * Definition of a software environment that is used to start a notebook
 * instance.
 *
 * @generated from message google.cloud.notebooks.v1.Environment
 */
export type Environment = Message<"google.cloud.notebooks.v1.Environment"> & {
  /**
   * Output only. Name of this environment.
   * Format:
   * `projects/{project_id}/locations/{location}/environments/{environment_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Display name of this environment for the UI.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * A brief description of this environment.
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * Type of the environment; can be one of VM image, or container image.
   *
   * @generated from oneof google.cloud.notebooks.v1.Environment.image_type
   */
  imageType: {
    /**
     * Use a Compute Engine VM image to start the notebook instance.
     *
     * @generated from field: google.cloud.notebooks.v1.VmImage vm_image = 6;
     */
    value: VmImage;
    case: "vmImage";
  } | {
    /**
     * Use a container image to start the notebook instance.
     *
     * @generated from field: google.cloud.notebooks.v1.ContainerImage container_image = 7;
     */
    value: ContainerImage;
    case: "containerImage";
  } | { case: undefined; value?: undefined };

  /**
   * Path to a Bash script that automatically runs after a notebook instance
   * fully boots up. The path must be a URL or
   * Cloud Storage path. Example: `"gs://path-to-file/file-name"`
   *
   * @generated from field: string post_startup_script = 8;
   */
  postStartupScript: string;

  /**
   * Output only. The time at which this environment was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 9;
   */
  createTime?: Timestamp;
};

/**
 * Describes the message google.cloud.notebooks.v1.Environment.
 * Use `create(EnvironmentSchema)` to create a new message.
 */
export const EnvironmentSchema: GenMessage<Environment> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v1_environment, 0);

/**
 * Definition of a custom Compute Engine virtual machine image for starting a
 * notebook instance with the environment installed directly on the VM.
 *
 * @generated from message google.cloud.notebooks.v1.VmImage
 */
export type VmImage = Message<"google.cloud.notebooks.v1.VmImage"> & {
  /**
   * Required. The name of the Google Cloud project that this VM image belongs to.
   * Format: `{project_id}`
   *
   * @generated from field: string project = 1;
   */
  project: string;

  /**
   * The reference to an external Compute Engine VM image.
   *
   * @generated from oneof google.cloud.notebooks.v1.VmImage.image
   */
  image: {
    /**
     * Use VM image name to find the image.
     *
     * @generated from field: string image_name = 2;
     */
    value: string;
    case: "imageName";
  } | {
    /**
     * Use this VM image family to find the image; the newest image in this
     * family will be used.
     *
     * @generated from field: string image_family = 3;
     */
    value: string;
    case: "imageFamily";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.notebooks.v1.VmImage.
 * Use `create(VmImageSchema)` to create a new message.
 */
export const VmImageSchema: GenMessage<VmImage> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v1_environment, 1);

/**
 * Definition of a container image for starting a notebook instance with the
 * environment installed in a container.
 *
 * @generated from message google.cloud.notebooks.v1.ContainerImage
 */
export type ContainerImage = Message<"google.cloud.notebooks.v1.ContainerImage"> & {
  /**
   * Required. The path to the container image repository. For example:
   * `gcr.io/{project_id}/{image_name}`
   *
   * @generated from field: string repository = 1;
   */
  repository: string;

  /**
   * The tag of the container image. If not specified, this defaults
   * to the latest tag.
   *
   * @generated from field: string tag = 2;
   */
  tag: string;
};

/**
 * Describes the message google.cloud.notebooks.v1.ContainerImage.
 * Use `create(ContainerImageSchema)` to create a new message.
 */
export const ContainerImageSchema: GenMessage<ContainerImage> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v1_environment, 2);
