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
// @generated from file google/cloud/aiplatform/v1/annotation_spec.proto (package google.cloud.aiplatform.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1/annotation_spec.proto.
 */
export const file_google_cloud_aiplatform_v1_annotation_spec: GenFile = /*@__PURE__*/
  fileDesc("CjBnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MS9hbm5vdGF0aW9uX3NwZWMucHJvdG8SGmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxIswCCg5Bbm5vdGF0aW9uU3BlYxIRCgRuYW1lGAEgASgJQgPgQQMSGQoMZGlzcGxheV9uYW1lGAIgASgJQgPgQQISNAoLY3JlYXRlX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSNAoLdXBkYXRlX3RpbWUYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSEQoEZXRhZxgFIAEoCUID4EEBOowB6kGIAQooYWlwbGF0Zm9ybS5nb29nbGVhcGlzLmNvbS9Bbm5vdGF0aW9uU3BlYxJccHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L2RhdGFzZXRzL3tkYXRhc2V0fS9hbm5vdGF0aW9uU3BlY3Mve2Fubm90YXRpb25fc3BlY31C0QEKHmNvbS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MUITQW5ub3RhdGlvblNwZWNQcm90b1ABWj5jbG91ZC5nb29nbGUuY29tL2dvL2FpcGxhdGZvcm0vYXBpdjEvYWlwbGF0Zm9ybXBiO2FpcGxhdGZvcm1wYqoCGkdvb2dsZS5DbG91ZC5BSVBsYXRmb3JtLlYxygIaR29vZ2xlXENsb3VkXEFJUGxhdGZvcm1cVjHqAh1Hb29nbGU6OkNsb3VkOjpBSVBsYXRmb3JtOjpWMWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp]);

/**
 * Identifies a concept with which DataItems may be annotated with.
 *
 * @generated from message google.cloud.aiplatform.v1.AnnotationSpec
 */
export type AnnotationSpec = Message<"google.cloud.aiplatform.v1.AnnotationSpec"> & {
  /**
   * Output only. Resource name of the AnnotationSpec.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The user-defined name of the AnnotationSpec.
   * The name can be up to 128 characters long and can consist of any UTF-8
   * characters.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Output only. Timestamp when this AnnotationSpec was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 3;
   */
  createTime?: Timestamp;

  /**
   * Output only. Timestamp when AnnotationSpec was last updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 4;
   */
  updateTime?: Timestamp;

  /**
   * Optional. Used to perform consistent read-modify-write updates. If not set,
   * a blind "overwrite" update happens.
   *
   * @generated from field: string etag = 5;
   */
  etag: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1.AnnotationSpec.
 * Use `create(AnnotationSpecSchema)` to create a new message.
 */
export const AnnotationSpecSchema: GenMessage<AnnotationSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_annotation_spec, 0);
