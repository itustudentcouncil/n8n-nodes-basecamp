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
// @generated from file google/cloud/networkconnectivity/v1/common.proto (package google.cloud.networkconnectivity.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/networkconnectivity/v1/common.proto.
 */
export const file_google_cloud_networkconnectivity_v1_common: GenFile = /*@__PURE__*/
  fileDesc("CjBnb29nbGUvY2xvdWQvbmV0d29ya2Nvbm5lY3Rpdml0eS92MS9jb21tb24ucHJvdG8SI2dvb2dsZS5jbG91ZC5uZXR3b3JrY29ubmVjdGl2aXR5LnYxIoACChFPcGVyYXRpb25NZXRhZGF0YRI0CgtjcmVhdGVfdGltZRgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxIxCghlbmRfdGltZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxITCgZ0YXJnZXQYAyABKAlCA+BBAxIRCgR2ZXJiGAQgASgJQgPgQQMSGwoOc3RhdHVzX21lc3NhZ2UYBSABKAlCA+BBAxIjChZyZXF1ZXN0ZWRfY2FuY2VsbGF0aW9uGAYgASgIQgPgQQMSGAoLYXBpX3ZlcnNpb24YByABKAlCA+BBA0LaAwonY29tLmdvb2dsZS5jbG91ZC5uZXR3b3JrY29ubmVjdGl2aXR5LnYxQgtDb21tb25Qcm90b1ABWlljbG91ZC5nb29nbGUuY29tL2dvL25ldHdvcmtjb25uZWN0aXZpdHkvYXBpdjEvbmV0d29ya2Nvbm5lY3Rpdml0eXBiO25ldHdvcmtjb25uZWN0aXZpdHlwYqoCI0dvb2dsZS5DbG91ZC5OZXR3b3JrQ29ubmVjdGl2aXR5LlYxygIjR29vZ2xlXENsb3VkXE5ldHdvcmtDb25uZWN0aXZpdHlcVjHqAiZHb29nbGU6OkNsb3VkOjpOZXR3b3JrQ29ubmVjdGl2aXR5OjpWMepBegotY29tcHV0ZS5nb29nbGVhcGlzLmNvbS9JbnRlcmNvbm5lY3RBdHRhY2htZW50Eklwcm9qZWN0cy97cHJvamVjdH0vcmVnaW9ucy97cmVnaW9ufS9pbnRlcmNvbm5lY3RBdHRhY2htZW50cy97cmVzb3VyY2VfaWR96kFSCh5jb21wdXRlLmdvb2dsZWFwaXMuY29tL05ldHdvcmsSMHByb2plY3RzL3twcm9qZWN0fS9nbG9iYWwvbmV0d29ya3Mve3Jlc291cmNlX2lkfWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp]);

/**
 * Represents the metadata of the long-running operation.
 *
 * @generated from message google.cloud.networkconnectivity.v1.OperationMetadata
 */
export type OperationMetadata = Message<"google.cloud.networkconnectivity.v1.OperationMetadata"> & {
  /**
   * Output only. The time the operation was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 1;
   */
  createTime?: Timestamp;

  /**
   * Output only. The time the operation finished running.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 2;
   */
  endTime?: Timestamp;

  /**
   * Output only. Server-defined resource path for the target of the operation.
   *
   * @generated from field: string target = 3;
   */
  target: string;

  /**
   * Output only. Name of the verb executed by the operation.
   *
   * @generated from field: string verb = 4;
   */
  verb: string;

  /**
   * Output only. Human-readable status of the operation, if any.
   *
   * @generated from field: string status_message = 5;
   */
  statusMessage: string;

  /**
   * Output only. Identifies whether the user has requested cancellation
   * of the operation. Operations that have been cancelled successfully
   * have [Operation.error][] value with a
   * [google.rpc.Status.code][google.rpc.Status.code] of 1, corresponding to
   * `Code.CANCELLED`.
   *
   * @generated from field: bool requested_cancellation = 6;
   */
  requestedCancellation: boolean;

  /**
   * Output only. API version used to start the operation.
   *
   * @generated from field: string api_version = 7;
   */
  apiVersion: string;
};

/**
 * Describes the message google.cloud.networkconnectivity.v1.OperationMetadata.
 * Use `create(OperationMetadataSchema)` to create a new message.
 */
export const OperationMetadataSchema: GenMessage<OperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_networkconnectivity_v1_common, 0);
