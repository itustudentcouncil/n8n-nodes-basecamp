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
// @generated from file google/cloud/securitycenter/v1beta1/source.proto (package google.cloud.securitycenter.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/securitycenter/v1beta1/source.proto.
 */
export const file_google_cloud_securitycenter_v1beta1_source: GenFile = /*@__PURE__*/
  fileDesc("CjBnb29nbGUvY2xvdWQvc2VjdXJpdHljZW50ZXIvdjFiZXRhMS9zb3VyY2UucHJvdG8SI2dvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52MWJldGExIpsBCgZTb3VyY2USDAoEbmFtZRgBIAEoCRIUCgxkaXNwbGF5X25hbWUYAiABKAkSEwoLZGVzY3JpcHRpb24YAyABKAk6WOpBVQokc2VjdXJpdHljZW50ZXIuZ29vZ2xlYXBpcy5jb20vU291cmNlEi1vcmdhbml6YXRpb25zL3tvcmdhbml6YXRpb259L3NvdXJjZXMve3NvdXJjZX1CfAonY29tLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52MWJldGExUAFaT2Nsb3VkLmdvb2dsZS5jb20vZ28vc2VjdXJpdHljZW50ZXIvYXBpdjFiZXRhMS9zZWN1cml0eWNlbnRlcnBiO3NlY3VyaXR5Y2VudGVycGJiBnByb3RvMw", [file_google_api_resource]);

/**
 * Security Command Center finding source. A finding source
 * is an entity or a mechanism that can produce a finding. A source is like a
 * container of findings that come from the same scanner, logger, monitor, etc.
 *
 * @generated from message google.cloud.securitycenter.v1beta1.Source
 */
export type Source = Message<"google.cloud.securitycenter.v1beta1.Source"> & {
  /**
   * The relative resource name of this source. See:
   * https://cloud.google.com/apis/design/resource_names#relative_resource_name
   * Example:
   * "organizations/{organization_id}/sources/{source_id}"
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The source's display name.
   * A source's display name must be unique amongst its siblings, for example,
   * two sources with the same parent can't share the same display name.
   * The display name must have a length between 1 and 64 characters
   * (inclusive).
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * The description of the source (max of 1024 characters).
   * Example:
   * "Web Security Scanner is a web security scanner for common
   * vulnerabilities in App Engine applications. It can automatically
   * scan and detect four common vulnerabilities, including cross-site-scripting
   * (XSS), Flash injection, mixed content (HTTP in HTTPS), and
   * outdated/insecure libraries."
   *
   * @generated from field: string description = 3;
   */
  description: string;
};

/**
 * Describes the message google.cloud.securitycenter.v1beta1.Source.
 * Use `create(SourceSchema)` to create a new message.
 */
export const SourceSchema: GenMessage<Source> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1beta1_source, 0);
