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
// @generated from file google/cloud/servicedirectory/v1beta1/namespace.proto (package google.cloud.servicedirectory.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/servicedirectory/v1beta1/namespace.proto.
 */
export const file_google_cloud_servicedirectory_v1beta1_namespace: GenFile = /*@__PURE__*/
  fileDesc("CjVnb29nbGUvY2xvdWQvc2VydmljZWRpcmVjdG9yeS92MWJldGExL25hbWVzcGFjZS5wcm90bxIlZ29vZ2xlLmNsb3VkLnNlcnZpY2VkaXJlY3RvcnkudjFiZXRhMSKOAwoJTmFtZXNwYWNlEhEKBG5hbWUYASABKAlCA+BBBRJRCgZsYWJlbHMYAiADKAsyPC5nb29nbGUuY2xvdWQuc2VydmljZWRpcmVjdG9yeS52MWJldGExLk5hbWVzcGFjZS5MYWJlbHNFbnRyeUID4EEBEjQKC2NyZWF0ZV90aW1lGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjQKC3VwZGF0ZV90aW1lGAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEhAKA3VpZBgGIAEoCUID4EEDGi0KC0xhYmVsc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAE6bupBawopc2VydmljZWRpcmVjdG9yeS5nb29nbGVhcGlzLmNvbS9OYW1lc3BhY2USPnByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9uYW1lc3BhY2VzL3tuYW1lc3BhY2V9QpICCiljb20uZ29vZ2xlLmNsb3VkLnNlcnZpY2VkaXJlY3RvcnkudjFiZXRhMUIOTmFtZXNwYWNlUHJvdG9QAVpVY2xvdWQuZ29vZ2xlLmNvbS9nby9zZXJ2aWNlZGlyZWN0b3J5L2FwaXYxYmV0YTEvc2VydmljZWRpcmVjdG9yeXBiO3NlcnZpY2VkaXJlY3RvcnlwYvgBAaoCJUdvb2dsZS5DbG91ZC5TZXJ2aWNlRGlyZWN0b3J5LlYxQmV0YTHKAiVHb29nbGVcQ2xvdWRcU2VydmljZURpcmVjdG9yeVxWMWJldGEx6gIoR29vZ2xlOjpDbG91ZDo6U2VydmljZURpcmVjdG9yeTo6VjFiZXRhMWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp]);

/**
 * A container for [services][google.cloud.servicedirectory.v1beta1.Service].
 * Namespaces allow administrators to group services together and define
 * permissions for a collection of services.
 *
 * @generated from message google.cloud.servicedirectory.v1beta1.Namespace
 */
export type Namespace = Message<"google.cloud.servicedirectory.v1beta1.Namespace"> & {
  /**
   * Immutable. The resource name for the namespace in the format
   * `projects/*\/locations/*\/namespaces/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. Resource labels associated with this namespace.
   * No more than 64 user labels can be associated with a given resource. Label
   * keys and values can be no longer than 63 characters.
   *
   * @generated from field: map<string, string> labels = 2;
   */
  labels: { [key: string]: string };

  /**
   * Output only. The timestamp when the namespace was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 4;
   */
  createTime?: Timestamp;

  /**
   * Output only. The timestamp when the namespace was last updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 5;
   */
  updateTime?: Timestamp;

  /**
   * Output only. A globally unique identifier (in UUID4 format) for this
   * namespace.
   *
   * @generated from field: string uid = 6;
   */
  uid: string;
};

/**
 * Describes the message google.cloud.servicedirectory.v1beta1.Namespace.
 * Use `create(NamespaceSchema)` to create a new message.
 */
export const NamespaceSchema: GenMessage<Namespace> = /*@__PURE__*/
  messageDesc(file_google_cloud_servicedirectory_v1beta1_namespace, 0);
