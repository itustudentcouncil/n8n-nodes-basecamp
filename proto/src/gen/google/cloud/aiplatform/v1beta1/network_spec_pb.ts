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
// @generated from file google/cloud/aiplatform/v1beta1/network_spec.proto (package google.cloud.aiplatform.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/network_spec.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_network_spec: GenFile = /*@__PURE__*/
  fileDesc("CjJnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL25ldHdvcmtfc3BlYy5wcm90bxIfZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMSKfAQoLTmV0d29ya1NwZWMSHgoWZW5hYmxlX2ludGVybmV0X2FjY2VzcxgBIAEoCBI0CgduZXR3b3JrGAIgASgJQiP6QSAKHmNvbXB1dGUuZ29vZ2xlYXBpcy5jb20vTmV0d29yaxI6CgpzdWJuZXR3b3JrGAMgASgJQib6QSMKIWNvbXB1dGUuZ29vZ2xlYXBpcy5jb20vU3VibmV0d29ya0LLAgojY29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTFCEE5ldHdvcmtTcGVjUHJvdG9QAVpDY2xvdWQuZ29vZ2xlLmNvbS9nby9haXBsYXRmb3JtL2FwaXYxYmV0YTEvYWlwbGF0Zm9ybXBiO2FpcGxhdGZvcm1wYqoCH0dvb2dsZS5DbG91ZC5BSVBsYXRmb3JtLlYxQmV0YTHKAh9Hb29nbGVcQ2xvdWRcQUlQbGF0Zm9ybVxWMWJldGEx6gIiR29vZ2xlOjpDbG91ZDo6QUlQbGF0Zm9ybTo6VjFiZXRhMepBYQohY29tcHV0ZS5nb29nbGVhcGlzLmNvbS9TdWJuZXR3b3JrEjxwcm9qZWN0cy97cHJvamVjdH0vcmVnaW9ucy97cmVnaW9ufS9zdWJuZXR3b3Jrcy97c3VibmV0d29ya31iBnByb3RvMw", [file_google_api_resource]);

/**
 * Network spec.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.NetworkSpec
 */
export type NetworkSpec = Message<"google.cloud.aiplatform.v1beta1.NetworkSpec"> & {
  /**
   * Whether to enable public internet access. Default false.
   *
   * @generated from field: bool enable_internet_access = 1;
   */
  enableInternetAccess: boolean;

  /**
   * The full name of the Google Compute Engine
   * [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks)
   *
   * @generated from field: string network = 2;
   */
  network: string;

  /**
   * The name of the subnet that this instance is in.
   * Format:
   * `projects/{project_id_or_number}/regions/{region}/subnetworks/{subnetwork_id}`
   *
   * @generated from field: string subnetwork = 3;
   */
  subnetwork: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.NetworkSpec.
 * Use `create(NetworkSpecSchema)` to create a new message.
 */
export const NetworkSpecSchema: GenMessage<NetworkSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_network_spec, 0);
