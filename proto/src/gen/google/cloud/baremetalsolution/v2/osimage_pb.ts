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
// @generated from file google/cloud/baremetalsolution/v2/osimage.proto (package google.cloud.baremetalsolution.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/baremetalsolution/v2/osimage.proto.
 */
export const file_google_cloud_baremetalsolution_v2_osimage: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvY2xvdWQvYmFyZW1ldGFsc29sdXRpb24vdjIvb3NpbWFnZS5wcm90bxIhZ29vZ2xlLmNsb3VkLmJhcmVtZXRhbHNvbHV0aW9uLnYyIoYCCgdPU0ltYWdlEhEKBG5hbWUYASABKAlCA+BBAxIMCgRjb2RlGAIgASgJEhMKC2Rlc2NyaXB0aW9uGAMgASgJEiEKGWFwcGxpY2FibGVfaW5zdGFuY2VfdHlwZXMYBCADKAkSIwobc3VwcG9ydGVkX25ldHdvcmtfdGVtcGxhdGVzGAUgAygJOn3qQXoKKGJhcmVtZXRhbHNvbHV0aW9uLmdvb2dsZWFwaXMuY29tL09zSW1hZ2USO3Byb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9vc0ltYWdlcy97b3NfaW1hZ2V9Kghvc0ltYWdlczIHb3NJbWFnZSJ3ChNMaXN0T1NJbWFnZXNSZXF1ZXN0EjkKBnBhcmVudBgBIAEoCUIp4EEC+kEjCiFsb2NhdGlvbnMuZ29vZ2xlYXBpcy5jb20vTG9jYXRpb24SEQoJcGFnZV9zaXplGAIgASgFEhIKCnBhZ2VfdG9rZW4YAyABKAkibgoUTGlzdE9TSW1hZ2VzUmVzcG9uc2USPQoJb3NfaW1hZ2VzGAEgAygLMiouZ29vZ2xlLmNsb3VkLmJhcmVtZXRhbHNvbHV0aW9uLnYyLk9TSW1hZ2USFwoPbmV4dF9wYWdlX3Rva2VuGAIgASgJQvsBCiVjb20uZ29vZ2xlLmNsb3VkLmJhcmVtZXRhbHNvbHV0aW9uLnYyQgxPc0ltYWdlUHJvdG9QAVpTY2xvdWQuZ29vZ2xlLmNvbS9nby9iYXJlbWV0YWxzb2x1dGlvbi9hcGl2Mi9iYXJlbWV0YWxzb2x1dGlvbnBiO2JhcmVtZXRhbHNvbHV0aW9ucGKqAiFHb29nbGUuQ2xvdWQuQmFyZU1ldGFsU29sdXRpb24uVjLKAiFHb29nbGVcQ2xvdWRcQmFyZU1ldGFsU29sdXRpb25cVjLqAiRHb29nbGU6OkNsb3VkOjpCYXJlTWV0YWxTb2x1dGlvbjo6VjJiBnByb3RvMw", [file_google_api_field_behavior, file_google_api_resource]);

/**
 * Operation System image.
 *
 * @generated from message google.cloud.baremetalsolution.v2.OSImage
 */
export type OSImage = Message<"google.cloud.baremetalsolution.v2.OSImage"> & {
  /**
   * Output only. OS Image's unique name.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * OS Image code.
   *
   * @generated from field: string code = 2;
   */
  code: string;

  /**
   * OS Image description.
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * Instance types this image is applicable to.
   * [Available
   * types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)
   *
   * @generated from field: repeated string applicable_instance_types = 4;
   */
  applicableInstanceTypes: string[];

  /**
   * Network templates that can be used with this OS Image.
   *
   * @generated from field: repeated string supported_network_templates = 5;
   */
  supportedNetworkTemplates: string[];
};

/**
 * Describes the message google.cloud.baremetalsolution.v2.OSImage.
 * Use `create(OSImageSchema)` to create a new message.
 */
export const OSImageSchema: GenMessage<OSImage> = /*@__PURE__*/
  messageDesc(file_google_cloud_baremetalsolution_v2_osimage, 0);

/**
 * Request for getting all available OS images.
 *
 * @generated from message google.cloud.baremetalsolution.v2.ListOSImagesRequest
 */
export type ListOSImagesRequest = Message<"google.cloud.baremetalsolution.v2.ListOSImagesRequest"> & {
  /**
   * Required. Parent value for ListProvisioningQuotasRequest.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Requested page size. The server might return fewer items than requested.
   * If unspecified, server will pick an appropriate default.
   * Notice that page_size field is not supported and won't be respected in
   * the API request for now, will be updated when pagination is supported.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * A token identifying a page of results from the server.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.baremetalsolution.v2.ListOSImagesRequest.
 * Use `create(ListOSImagesRequestSchema)` to create a new message.
 */
export const ListOSImagesRequestSchema: GenMessage<ListOSImagesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_baremetalsolution_v2_osimage, 1);

/**
 * Request for getting all available OS images.
 *
 * @generated from message google.cloud.baremetalsolution.v2.ListOSImagesResponse
 */
export type ListOSImagesResponse = Message<"google.cloud.baremetalsolution.v2.ListOSImagesResponse"> & {
  /**
   * The OS images available.
   *
   * @generated from field: repeated google.cloud.baremetalsolution.v2.OSImage os_images = 1;
   */
  osImages: OSImage[];

  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.baremetalsolution.v2.ListOSImagesResponse.
 * Use `create(ListOSImagesResponseSchema)` to create a new message.
 */
export const ListOSImagesResponseSchema: GenMessage<ListOSImagesResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_baremetalsolution_v2_osimage, 2);
