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
// @generated from file google/cloud/notebooks/v2/service.proto (package google.cloud.notebooks.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { DiagnosticConfig } from "./diagnostic_config_pb";
import { file_google_cloud_notebooks_v2_diagnostic_config } from "./diagnostic_config_pb";
import type { Instance, InstanceSchema } from "./instance_pb";
import { file_google_cloud_notebooks_v2_instance } from "./instance_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import type { FieldMask, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/notebooks/v2/service.proto.
 */
export const file_google_cloud_notebooks_v2_service: GenFile = /*@__PURE__*/
  fileDesc("Cidnb29nbGUvY2xvdWQvbm90ZWJvb2tzL3YyL3NlcnZpY2UucHJvdG8SGWdvb2dsZS5jbG91ZC5ub3RlYm9va3MudjIi7wEKEU9wZXJhdGlvbk1ldGFkYXRhEi8KC2NyZWF0ZV90aW1lGAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIsCghlbmRfdGltZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASDgoGdGFyZ2V0GAMgASgJEgwKBHZlcmIYBCABKAkSFgoOc3RhdHVzX21lc3NhZ2UYBSABKAkSHgoWcmVxdWVzdGVkX2NhbmNlbGxhdGlvbhgGIAEoCBITCgthcGlfdmVyc2lvbhgHIAEoCRIQCghlbmRwb2ludBgIIAEoCSKuAQoUTGlzdEluc3RhbmNlc1JlcXVlc3QSOQoGcGFyZW50GAEgASgJQingQQL6QSMSIW5vdGVib29rcy5nb29nbGVhcGlzLmNvbS9JbnN0YW5jZRIWCglwYWdlX3NpemUYAiABKAVCA+BBARIXCgpwYWdlX3Rva2VuGAMgASgJQgPgQQESFQoIb3JkZXJfYnkYBCABKAlCA+BBARITCgZmaWx0ZXIYBSABKAlCA+BBASJ9ChVMaXN0SW5zdGFuY2VzUmVzcG9uc2USNgoJaW5zdGFuY2VzGAEgAygLMiMuZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52Mi5JbnN0YW5jZRIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkSEwoLdW5yZWFjaGFibGUYAyADKAkiTQoSR2V0SW5zdGFuY2VSZXF1ZXN0EjcKBG5hbWUYASABKAlCKeBBAvpBIwohbm90ZWJvb2tzLmdvb2dsZWFwaXMuY29tL0luc3RhbmNlIsEBChVDcmVhdGVJbnN0YW5jZVJlcXVlc3QSOQoGcGFyZW50GAEgASgJQingQQL6QSMSIW5vdGVib29rcy5nb29nbGVhcGlzLmNvbS9JbnN0YW5jZRIYCgtpbnN0YW5jZV9pZBgCIAEoCUID4EECEjoKCGluc3RhbmNlGAMgASgLMiMuZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52Mi5JbnN0YW5jZUID4EECEhcKCnJlcXVlc3RfaWQYBCABKAlCA+BBASKiAQoVVXBkYXRlSW5zdGFuY2VSZXF1ZXN0EjoKCGluc3RhbmNlGAEgASgLMiMuZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52Mi5JbnN0YW5jZUID4EECEjQKC3VwZGF0ZV9tYXNrGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFza0ID4EECEhcKCnJlcXVlc3RfaWQYAyABKAlCA+BBASJpChVEZWxldGVJbnN0YW5jZVJlcXVlc3QSNwoEbmFtZRgBIAEoCUIp4EEC+kEjCiFub3RlYm9va3MuZ29vZ2xlYXBpcy5jb20vSW5zdGFuY2USFwoKcmVxdWVzdF9pZBgCIAEoCUID4EEBIikKFFN0YXJ0SW5zdGFuY2VSZXF1ZXN0EhEKBG5hbWUYASABKAlCA+BBAiIoChNTdG9wSW5zdGFuY2VSZXF1ZXN0EhEKBG5hbWUYASABKAlCA+BBAiIpChRSZXNldEluc3RhbmNlUmVxdWVzdBIRCgRuYW1lGAEgASgJQgPgQQIiQwohQ2hlY2tJbnN0YW5jZVVwZ3JhZGFiaWxpdHlSZXF1ZXN0Eh4KEW5vdGVib29rX2luc3RhbmNlGAEgASgJQgPgQQIifwoiQ2hlY2tJbnN0YW5jZVVwZ3JhZGFiaWxpdHlSZXNwb25zZRITCgt1cGdyYWRlYWJsZRgBIAEoCBIXCg91cGdyYWRlX3ZlcnNpb24YAiABKAkSFAoMdXBncmFkZV9pbmZvGAMgASgJEhUKDXVwZ3JhZGVfaW1hZ2UYBCABKAkiKwoWVXBncmFkZUluc3RhbmNlUmVxdWVzdBIRCgRuYW1lGAEgASgJQgPgQQIijQEKF1JvbGxiYWNrSW5zdGFuY2VSZXF1ZXN0EjcKBG5hbWUYASABKAlCKeBBAvpBIwohbm90ZWJvb2tzLmdvb2dsZWFwaXMuY29tL0luc3RhbmNlEhwKD3RhcmdldF9zbmFwc2hvdBgCIAEoCUID4EECEhsKC3JldmlzaW9uX2lkGAMgASgJQgbgQQPgQQIivQEKF0RpYWdub3NlSW5zdGFuY2VSZXF1ZXN0EjcKBG5hbWUYASABKAlCKeBBAvpBIwohbm90ZWJvb2tzLmdvb2dsZWFwaXMuY29tL0luc3RhbmNlEksKEWRpYWdub3N0aWNfY29uZmlnGAIgASgLMisuZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52Mi5EaWFnbm9zdGljQ29uZmlnQgPgQQISHAoPdGltZW91dF9taW51dGVzGAMgASgFQgPgQQEy+hMKD05vdGVib29rU2VydmljZRKyAQoNTGlzdEluc3RhbmNlcxIvLmdvb2dsZS5jbG91ZC5ub3RlYm9va3MudjIuTGlzdEluc3RhbmNlc1JlcXVlc3QaMC5nb29nbGUuY2xvdWQubm90ZWJvb2tzLnYyLkxpc3RJbnN0YW5jZXNSZXNwb25zZSI+2kEGcGFyZW50gtPkkwIvEi0vdjIve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qfS9pbnN0YW5jZXMSnwEKC0dldEluc3RhbmNlEi0uZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52Mi5HZXRJbnN0YW5jZVJlcXVlc3QaIy5nb29nbGUuY2xvdWQubm90ZWJvb2tzLnYyLkluc3RhbmNlIjzaQQRuYW1lgtPkkwIvEi0vdjIve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9pbnN0YW5jZXMvKn0S4AEKDkNyZWF0ZUluc3RhbmNlEjAuZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52Mi5DcmVhdGVJbnN0YW5jZVJlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uIn3KQR0KCEluc3RhbmNlEhFPcGVyYXRpb25NZXRhZGF0YdpBG3BhcmVudCxpbnN0YW5jZSxpbnN0YW5jZV9pZILT5JMCOToIaW5zdGFuY2UiLS92Mi97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyp9L2luc3RhbmNlcxLiAQoOVXBkYXRlSW5zdGFuY2USMC5nb29nbGUuY2xvdWQubm90ZWJvb2tzLnYyLlVwZGF0ZUluc3RhbmNlUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24if8pBHQoISW5zdGFuY2USEU9wZXJhdGlvbk1ldGFkYXRh2kEUaW5zdGFuY2UsdXBkYXRlX21hc2uC0+STAkI6CGluc3RhbmNlMjYvdjIve2luc3RhbmNlLm5hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9pbnN0YW5jZXMvKn0SzAEKDkRlbGV0ZUluc3RhbmNlEjAuZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52Mi5EZWxldGVJbnN0YW5jZVJlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uImnKQSoKFWdvb2dsZS5wcm90b2J1Zi5FbXB0eRIRT3BlcmF0aW9uTWV0YWRhdGHaQQRuYW1lgtPkkwIvKi0vdjIve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9pbnN0YW5jZXMvKn0SvwEKDVN0YXJ0SW5zdGFuY2USLy5nb29nbGUuY2xvdWQubm90ZWJvb2tzLnYyLlN0YXJ0SW5zdGFuY2VSZXF1ZXN0Gh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbiJeykEdCghJbnN0YW5jZRIRT3BlcmF0aW9uTWV0YWRhdGGC0+STAjg6ASoiMy92Mi97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2luc3RhbmNlcy8qfTpzdGFydBK8AQoMU3RvcEluc3RhbmNlEi4uZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52Mi5TdG9wSW5zdGFuY2VSZXF1ZXN0Gh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbiJdykEdCghJbnN0YW5jZRIRT3BlcmF0aW9uTWV0YWRhdGGC0+STAjc6ASoiMi92Mi97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2luc3RhbmNlcy8qfTpzdG9wEr8BCg1SZXNldEluc3RhbmNlEi8uZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52Mi5SZXNldEluc3RhbmNlUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24iXspBHQoISW5zdGFuY2USEU9wZXJhdGlvbk1ldGFkYXRhgtPkkwI4OgEqIjMvdjIve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9pbnN0YW5jZXMvKn06cmVzZXQS8AEKGkNoZWNrSW5zdGFuY2VVcGdyYWRhYmlsaXR5EjwuZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52Mi5DaGVja0luc3RhbmNlVXBncmFkYWJpbGl0eVJlcXVlc3QaPS5nb29nbGUuY2xvdWQubm90ZWJvb2tzLnYyLkNoZWNrSW5zdGFuY2VVcGdyYWRhYmlsaXR5UmVzcG9uc2UiVYLT5JMCTxJNL3YyL3tub3RlYm9va19pbnN0YW5jZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2luc3RhbmNlcy8qfTpjaGVja1VwZ3JhZGFiaWxpdHkSxQEKD1VwZ3JhZGVJbnN0YW5jZRIxLmdvb2dsZS5jbG91ZC5ub3RlYm9va3MudjIuVXBncmFkZUluc3RhbmNlUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24iYMpBHQoISW5zdGFuY2USEU9wZXJhdGlvbk1ldGFkYXRhgtPkkwI6OgEqIjUvdjIve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9pbnN0YW5jZXMvKn06dXBncmFkZRLIAQoQUm9sbGJhY2tJbnN0YW5jZRIyLmdvb2dsZS5jbG91ZC5ub3RlYm9va3MudjIuUm9sbGJhY2tJbnN0YW5jZVJlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uImHKQR0KCEluc3RhbmNlEhFPcGVyYXRpb25NZXRhZGF0YYLT5JMCOzoBKiI2L3YyL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovaW5zdGFuY2VzLyp9OnJvbGxiYWNrEuEBChBEaWFnbm9zZUluc3RhbmNlEjIuZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52Mi5EaWFnbm9zZUluc3RhbmNlUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24iespBHQoISW5zdGFuY2USEU9wZXJhdGlvbk1ldGFkYXRh2kEWbmFtZSxkaWFnbm9zdGljX2NvbmZpZ4LT5JMCOzoBKiI2L3YyL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovaW5zdGFuY2VzLyp9OmRpYWdub3NlGkzKQRhub3RlYm9va3MuZ29vZ2xlYXBpcy5jb23SQS5odHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Nsb3VkLXBsYXRmb3JtQsMBCh1jb20uZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52MkIMU2VydmljZVByb3RvUAFaO2Nsb3VkLmdvb2dsZS5jb20vZ28vbm90ZWJvb2tzL2FwaXYyL25vdGVib29rc3BiO25vdGVib29rc3BiqgIZR29vZ2xlLkNsb3VkLk5vdGVib29rcy5WMsoCGUdvb2dsZVxDbG91ZFxOb3RlYm9va3NcVjLqAhxHb29nbGU6OkNsb3VkOjpOb3RlYm9va3M6OlYyYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_notebooks_v2_diagnostic_config, file_google_cloud_notebooks_v2_instance, file_google_longrunning_operations, file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_timestamp]);

/**
 * Represents the metadata of the long-running operation.
 *
 * @generated from message google.cloud.notebooks.v2.OperationMetadata
 */
export type OperationMetadata = Message<"google.cloud.notebooks.v2.OperationMetadata"> & {
  /**
   * The time the operation was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 1;
   */
  createTime?: Timestamp;

  /**
   * The time the operation finished running.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 2;
   */
  endTime?: Timestamp;

  /**
   * Server-defined resource path for the target of the operation.
   *
   * @generated from field: string target = 3;
   */
  target: string;

  /**
   * Name of the verb executed by the operation.
   *
   * @generated from field: string verb = 4;
   */
  verb: string;

  /**
   * Human-readable status of the operation, if any.
   *
   * @generated from field: string status_message = 5;
   */
  statusMessage: string;

  /**
   * Identifies whether the user has requested cancellation
   * of the operation. Operations that have successfully been cancelled
   * have [Operation.error][] value with a
   * [google.rpc.Status.code][google.rpc.Status.code] of 1, corresponding to
   * `Code.CANCELLED`.
   *
   * @generated from field: bool requested_cancellation = 6;
   */
  requestedCancellation: boolean;

  /**
   * API version used to start the operation.
   *
   * @generated from field: string api_version = 7;
   */
  apiVersion: string;

  /**
   * API endpoint name of this operation.
   *
   * @generated from field: string endpoint = 8;
   */
  endpoint: string;
};

/**
 * Describes the message google.cloud.notebooks.v2.OperationMetadata.
 * Use `create(OperationMetadataSchema)` to create a new message.
 */
export const OperationMetadataSchema: GenMessage<OperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 0);

/**
 * Request for listing notebook instances.
 *
 * @generated from message google.cloud.notebooks.v2.ListInstancesRequest
 */
export type ListInstancesRequest = Message<"google.cloud.notebooks.v2.ListInstancesRequest"> & {
  /**
   * Required. Format:
   * `parent=projects/{project_id}/locations/{location}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. Maximum return size of the list call.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. A previous returned page token that can be used to continue
   * listing from the last result.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * Optional. Sort results. Supported values are "name", "name desc" or ""
   * (unsorted).
   *
   * @generated from field: string order_by = 4;
   */
  orderBy: string;

  /**
   * Optional. List filter.
   *
   * @generated from field: string filter = 5;
   */
  filter: string;
};

/**
 * Describes the message google.cloud.notebooks.v2.ListInstancesRequest.
 * Use `create(ListInstancesRequestSchema)` to create a new message.
 */
export const ListInstancesRequestSchema: GenMessage<ListInstancesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 1);

/**
 * Response for listing notebook instances.
 *
 * @generated from message google.cloud.notebooks.v2.ListInstancesResponse
 */
export type ListInstancesResponse = Message<"google.cloud.notebooks.v2.ListInstancesResponse"> & {
  /**
   * A list of returned instances.
   *
   * @generated from field: repeated google.cloud.notebooks.v2.Instance instances = 1;
   */
  instances: Instance[];

  /**
   * Page token that can be used to continue listing from the last result in the
   * next list call.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * Locations that could not be reached. For example,
   * ['us-west1-a', 'us-central1-b'].
   * A ListInstancesResponse will only contain either instances or unreachables,
   *
   * @generated from field: repeated string unreachable = 3;
   */
  unreachable: string[];
};

/**
 * Describes the message google.cloud.notebooks.v2.ListInstancesResponse.
 * Use `create(ListInstancesResponseSchema)` to create a new message.
 */
export const ListInstancesResponseSchema: GenMessage<ListInstancesResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 2);

/**
 * Request for getting a notebook instance.
 *
 * @generated from message google.cloud.notebooks.v2.GetInstanceRequest
 */
export type GetInstanceRequest = Message<"google.cloud.notebooks.v2.GetInstanceRequest"> & {
  /**
   * Required. Format:
   * `projects/{project_id}/locations/{location}/instances/{instance_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.notebooks.v2.GetInstanceRequest.
 * Use `create(GetInstanceRequestSchema)` to create a new message.
 */
export const GetInstanceRequestSchema: GenMessage<GetInstanceRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 3);

/**
 * Request for creating a notebook instance.
 *
 * @generated from message google.cloud.notebooks.v2.CreateInstanceRequest
 */
export type CreateInstanceRequest = Message<"google.cloud.notebooks.v2.CreateInstanceRequest"> & {
  /**
   * Required. Format:
   * `parent=projects/{project_id}/locations/{location}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. User-defined unique ID of this instance.
   *
   * @generated from field: string instance_id = 2;
   */
  instanceId: string;

  /**
   * Required. The instance to be created.
   *
   * @generated from field: google.cloud.notebooks.v2.Instance instance = 3;
   */
  instance?: Instance;

  /**
   * Optional. Idempotent request UUID.
   *
   * @generated from field: string request_id = 4;
   */
  requestId: string;
};

/**
 * Describes the message google.cloud.notebooks.v2.CreateInstanceRequest.
 * Use `create(CreateInstanceRequestSchema)` to create a new message.
 */
export const CreateInstanceRequestSchema: GenMessage<CreateInstanceRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 4);

/**
 * Request for updating a notebook instance.
 *
 * @generated from message google.cloud.notebooks.v2.UpdateInstanceRequest
 */
export type UpdateInstanceRequest = Message<"google.cloud.notebooks.v2.UpdateInstanceRequest"> & {
  /**
   * Required. A representation of an instance.
   *
   * @generated from field: google.cloud.notebooks.v2.Instance instance = 1;
   */
  instance?: Instance;

  /**
   * Required. Mask used to update an instance
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  /**
   * Optional. Idempotent request UUID.
   *
   * @generated from field: string request_id = 3;
   */
  requestId: string;
};

/**
 * Describes the message google.cloud.notebooks.v2.UpdateInstanceRequest.
 * Use `create(UpdateInstanceRequestSchema)` to create a new message.
 */
export const UpdateInstanceRequestSchema: GenMessage<UpdateInstanceRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 5);

/**
 * Request for deleting a notebook instance.
 *
 * @generated from message google.cloud.notebooks.v2.DeleteInstanceRequest
 */
export type DeleteInstanceRequest = Message<"google.cloud.notebooks.v2.DeleteInstanceRequest"> & {
  /**
   * Required. Format:
   * `projects/{project_id}/locations/{location}/instances/{instance_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. Idempotent request UUID.
   *
   * @generated from field: string request_id = 2;
   */
  requestId: string;
};

/**
 * Describes the message google.cloud.notebooks.v2.DeleteInstanceRequest.
 * Use `create(DeleteInstanceRequestSchema)` to create a new message.
 */
export const DeleteInstanceRequestSchema: GenMessage<DeleteInstanceRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 6);

/**
 * Request for starting a notebook instance
 *
 * @generated from message google.cloud.notebooks.v2.StartInstanceRequest
 */
export type StartInstanceRequest = Message<"google.cloud.notebooks.v2.StartInstanceRequest"> & {
  /**
   * Required. Format:
   * `projects/{project_id}/locations/{location}/instances/{instance_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.notebooks.v2.StartInstanceRequest.
 * Use `create(StartInstanceRequestSchema)` to create a new message.
 */
export const StartInstanceRequestSchema: GenMessage<StartInstanceRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 7);

/**
 * Request for stopping a notebook instance
 *
 * @generated from message google.cloud.notebooks.v2.StopInstanceRequest
 */
export type StopInstanceRequest = Message<"google.cloud.notebooks.v2.StopInstanceRequest"> & {
  /**
   * Required. Format:
   * `projects/{project_id}/locations/{location}/instances/{instance_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.notebooks.v2.StopInstanceRequest.
 * Use `create(StopInstanceRequestSchema)` to create a new message.
 */
export const StopInstanceRequestSchema: GenMessage<StopInstanceRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 8);

/**
 * Request for resetting a notebook instance
 *
 * @generated from message google.cloud.notebooks.v2.ResetInstanceRequest
 */
export type ResetInstanceRequest = Message<"google.cloud.notebooks.v2.ResetInstanceRequest"> & {
  /**
   * Required. Format:
   * `projects/{project_id}/locations/{location}/instances/{instance_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.notebooks.v2.ResetInstanceRequest.
 * Use `create(ResetInstanceRequestSchema)` to create a new message.
 */
export const ResetInstanceRequestSchema: GenMessage<ResetInstanceRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 9);

/**
 * Request for checking if a notebook instance is upgradeable.
 *
 * @generated from message google.cloud.notebooks.v2.CheckInstanceUpgradabilityRequest
 */
export type CheckInstanceUpgradabilityRequest = Message<"google.cloud.notebooks.v2.CheckInstanceUpgradabilityRequest"> & {
  /**
   * Required. Format:
   * `projects/{project_id}/locations/{location}/instances/{instance_id}`
   *
   * @generated from field: string notebook_instance = 1;
   */
  notebookInstance: string;
};

/**
 * Describes the message google.cloud.notebooks.v2.CheckInstanceUpgradabilityRequest.
 * Use `create(CheckInstanceUpgradabilityRequestSchema)` to create a new message.
 */
export const CheckInstanceUpgradabilityRequestSchema: GenMessage<CheckInstanceUpgradabilityRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 10);

/**
 * Response for checking if a notebook instance is upgradeable.
 *
 * @generated from message google.cloud.notebooks.v2.CheckInstanceUpgradabilityResponse
 */
export type CheckInstanceUpgradabilityResponse = Message<"google.cloud.notebooks.v2.CheckInstanceUpgradabilityResponse"> & {
  /**
   * If an instance is upgradeable.
   *
   * @generated from field: bool upgradeable = 1;
   */
  upgradeable: boolean;

  /**
   * The version this instance will be upgraded to if calling the upgrade
   * endpoint. This field will only be populated if field upgradeable is true.
   *
   * @generated from field: string upgrade_version = 2;
   */
  upgradeVersion: string;

  /**
   * Additional information about upgrade.
   *
   * @generated from field: string upgrade_info = 3;
   */
  upgradeInfo: string;

  /**
   * The new image self link this instance will be upgraded to if calling the
   * upgrade endpoint. This field will only be populated if field upgradeable
   * is true.
   *
   * @generated from field: string upgrade_image = 4;
   */
  upgradeImage: string;
};

/**
 * Describes the message google.cloud.notebooks.v2.CheckInstanceUpgradabilityResponse.
 * Use `create(CheckInstanceUpgradabilityResponseSchema)` to create a new message.
 */
export const CheckInstanceUpgradabilityResponseSchema: GenMessage<CheckInstanceUpgradabilityResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 11);

/**
 * Request for upgrading a notebook instance
 *
 * @generated from message google.cloud.notebooks.v2.UpgradeInstanceRequest
 */
export type UpgradeInstanceRequest = Message<"google.cloud.notebooks.v2.UpgradeInstanceRequest"> & {
  /**
   * Required. Format:
   * `projects/{project_id}/locations/{location}/instances/{instance_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.notebooks.v2.UpgradeInstanceRequest.
 * Use `create(UpgradeInstanceRequestSchema)` to create a new message.
 */
export const UpgradeInstanceRequestSchema: GenMessage<UpgradeInstanceRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 12);

/**
 * Request for rollbacking a notebook instance
 *
 * @generated from message google.cloud.notebooks.v2.RollbackInstanceRequest
 */
export type RollbackInstanceRequest = Message<"google.cloud.notebooks.v2.RollbackInstanceRequest"> & {
  /**
   * Required. Format:
   * `projects/{project_id}/locations/{location}/instances/{instance_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The snapshot for rollback.
   * Example: "projects/test-project/global/snapshots/krwlzipynril".
   *
   * @generated from field: string target_snapshot = 2;
   */
  targetSnapshot: string;

  /**
   * Required. Output only. Revision Id
   *
   * @generated from field: string revision_id = 3;
   */
  revisionId: string;
};

/**
 * Describes the message google.cloud.notebooks.v2.RollbackInstanceRequest.
 * Use `create(RollbackInstanceRequestSchema)` to create a new message.
 */
export const RollbackInstanceRequestSchema: GenMessage<RollbackInstanceRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 13);

/**
 * Request for creating a notebook instance diagnostic file.
 *
 * @generated from message google.cloud.notebooks.v2.DiagnoseInstanceRequest
 */
export type DiagnoseInstanceRequest = Message<"google.cloud.notebooks.v2.DiagnoseInstanceRequest"> & {
  /**
   * Required. Format:
   * `projects/{project_id}/locations/{location}/instances/{instance_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. Defines flags that are used to run the diagnostic tool
   *
   * @generated from field: google.cloud.notebooks.v2.DiagnosticConfig diagnostic_config = 2;
   */
  diagnosticConfig?: DiagnosticConfig;

  /**
   * Optional. Maxmium amount of time in minutes before the operation times out.
   *
   * @generated from field: int32 timeout_minutes = 3;
   */
  timeoutMinutes: number;
};

/**
 * Describes the message google.cloud.notebooks.v2.DiagnoseInstanceRequest.
 * Use `create(DiagnoseInstanceRequestSchema)` to create a new message.
 */
export const DiagnoseInstanceRequestSchema: GenMessage<DiagnoseInstanceRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_service, 14);

/**
 * API v2 service for Workbench Notebooks Instances.
 *
 * @generated from service google.cloud.notebooks.v2.NotebookService
 */
export const NotebookService: GenService<{
  /**
   * Lists instances in a given project and location.
   *
   * @generated from rpc google.cloud.notebooks.v2.NotebookService.ListInstances
   */
  listInstances: {
    methodKind: "unary";
    input: typeof ListInstancesRequestSchema;
    output: typeof ListInstancesResponseSchema;
  },
  /**
   * Gets details of a single Instance.
   *
   * @generated from rpc google.cloud.notebooks.v2.NotebookService.GetInstance
   */
  getInstance: {
    methodKind: "unary";
    input: typeof GetInstanceRequestSchema;
    output: typeof InstanceSchema;
  },
  /**
   * Creates a new Instance in a given project and location.
   *
   * @generated from rpc google.cloud.notebooks.v2.NotebookService.CreateInstance
   */
  createInstance: {
    methodKind: "unary";
    input: typeof CreateInstanceRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * UpdateInstance updates an Instance.
   *
   * @generated from rpc google.cloud.notebooks.v2.NotebookService.UpdateInstance
   */
  updateInstance: {
    methodKind: "unary";
    input: typeof UpdateInstanceRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Deletes a single Instance.
   *
   * @generated from rpc google.cloud.notebooks.v2.NotebookService.DeleteInstance
   */
  deleteInstance: {
    methodKind: "unary";
    input: typeof DeleteInstanceRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Starts a notebook instance.
   *
   * @generated from rpc google.cloud.notebooks.v2.NotebookService.StartInstance
   */
  startInstance: {
    methodKind: "unary";
    input: typeof StartInstanceRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Stops a notebook instance.
   *
   * @generated from rpc google.cloud.notebooks.v2.NotebookService.StopInstance
   */
  stopInstance: {
    methodKind: "unary";
    input: typeof StopInstanceRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Resets a notebook instance.
   *
   * @generated from rpc google.cloud.notebooks.v2.NotebookService.ResetInstance
   */
  resetInstance: {
    methodKind: "unary";
    input: typeof ResetInstanceRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Checks whether a notebook instance is upgradable.
   *
   * @generated from rpc google.cloud.notebooks.v2.NotebookService.CheckInstanceUpgradability
   */
  checkInstanceUpgradability: {
    methodKind: "unary";
    input: typeof CheckInstanceUpgradabilityRequestSchema;
    output: typeof CheckInstanceUpgradabilityResponseSchema;
  },
  /**
   * Upgrades a notebook instance to the latest version.
   *
   * @generated from rpc google.cloud.notebooks.v2.NotebookService.UpgradeInstance
   */
  upgradeInstance: {
    methodKind: "unary";
    input: typeof UpgradeInstanceRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Rollbacks a notebook instance to the previous version.
   *
   * @generated from rpc google.cloud.notebooks.v2.NotebookService.RollbackInstance
   */
  rollbackInstance: {
    methodKind: "unary";
    input: typeof RollbackInstanceRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Creates a Diagnostic File and runs Diagnostic Tool given an Instance.
   *
   * @generated from rpc google.cloud.notebooks.v2.NotebookService.DiagnoseInstance
   */
  diagnoseInstance: {
    methodKind: "unary";
    input: typeof DiagnoseInstanceRequestSchema;
    output: typeof OperationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_notebooks_v2_service, 0);
