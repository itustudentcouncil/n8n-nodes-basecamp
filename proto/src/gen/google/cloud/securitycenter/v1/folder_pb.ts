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
// @generated from file google/cloud/securitycenter/v1/folder.proto (package google.cloud.securitycenter.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/securitycenter/v1/folder.proto.
 */
export const file_google_cloud_securitycenter_v1_folder: GenFile = /*@__PURE__*/
  fileDesc("Citnb29nbGUvY2xvdWQvc2VjdXJpdHljZW50ZXIvdjEvZm9sZGVyLnByb3RvEh5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjEiRwoGRm9sZGVyEhcKD3Jlc291cmNlX2ZvbGRlchgBIAEoCRIkChxyZXNvdXJjZV9mb2xkZXJfZGlzcGxheV9uYW1lGAIgASgJQuUBCiJjb20uZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYxQgtGb2xkZXJQcm90b1ABWkpjbG91ZC5nb29nbGUuY29tL2dvL3NlY3VyaXR5Y2VudGVyL2FwaXYxL3NlY3VyaXR5Y2VudGVycGI7c2VjdXJpdHljZW50ZXJwYqoCHkdvb2dsZS5DbG91ZC5TZWN1cml0eUNlbnRlci5WMcoCHkdvb2dsZVxDbG91ZFxTZWN1cml0eUNlbnRlclxWMeoCIUdvb2dsZTo6Q2xvdWQ6OlNlY3VyaXR5Q2VudGVyOjpWMWIGcHJvdG8z");

/**
 * Message that contains the resource name and display name of a folder
 * resource.
 *
 * @generated from message google.cloud.securitycenter.v1.Folder
 */
export type Folder = Message<"google.cloud.securitycenter.v1.Folder"> & {
  /**
   * Full resource name of this folder. See:
   * https://cloud.google.com/apis/design/resource_names#full_resource_name
   *
   * @generated from field: string resource_folder = 1;
   */
  resourceFolder: string;

  /**
   * The user defined display name for this folder.
   *
   * @generated from field: string resource_folder_display_name = 2;
   */
  resourceFolderDisplayName: string;
};

/**
 * Describes the message google.cloud.securitycenter.v1.Folder.
 * Use `create(FolderSchema)` to create a new message.
 */
export const FolderSchema: GenMessage<Folder> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1_folder, 0);
