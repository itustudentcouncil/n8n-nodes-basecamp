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
// @generated from file google/cloud/discoveryengine/v1alpha/engine_service.proto (package google.cloud.discoveryengine.v1alpha, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Engine, EngineSchema } from "./engine_pb";
import { file_google_cloud_discoveryengine_v1alpha_engine } from "./engine_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import type { FieldMask, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/discoveryengine/v1alpha/engine_service.proto.
 */
export const file_google_cloud_discoveryengine_v1alpha_engine_service: GenFile = /*@__PURE__*/
  fileDesc("Cjlnb29nbGUvY2xvdWQvZGlzY292ZXJ5ZW5naW5lL3YxYWxwaGEvZW5naW5lX3NlcnZpY2UucHJvdG8SJGdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYSKzAQoTQ3JlYXRlRW5naW5lUmVxdWVzdBJBCgZwYXJlbnQYASABKAlCMeBBAvpBKwopZGlzY292ZXJ5ZW5naW5lLmdvb2dsZWFwaXMuY29tL0NvbGxlY3Rpb24SQQoGZW5naW5lGAIgASgLMiwuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLkVuZ2luZUID4EECEhYKCWVuZ2luZV9pZBgDIAEoCUID4EECIngKFENyZWF0ZUVuZ2luZU1ldGFkYXRhEi8KC2NyZWF0ZV90aW1lGAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIvCgt1cGRhdGVfdGltZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAiUgoTRGVsZXRlRW5naW5lUmVxdWVzdBI7CgRuYW1lGAEgASgJQi3gQQL6QScKJWRpc2NvdmVyeWVuZ2luZS5nb29nbGVhcGlzLmNvbS9FbmdpbmUieAoURGVsZXRlRW5naW5lTWV0YWRhdGESLwoLY3JlYXRlX3RpbWUYASABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi8KC3VwZGF0ZV90aW1lGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCJPChBHZXRFbmdpbmVSZXF1ZXN0EjsKBG5hbWUYASABKAlCLeBBAvpBJwolZGlzY292ZXJ5ZW5naW5lLmdvb2dsZWFwaXMuY29tL0VuZ2luZSKdAQoSTGlzdEVuZ2luZXNSZXF1ZXN0EkEKBnBhcmVudBgBIAEoCUIx4EEC+kErCilkaXNjb3ZlcnllbmdpbmUuZ29vZ2xlYXBpcy5jb20vQ29sbGVjdGlvbhIWCglwYWdlX3NpemUYAiABKAVCA+BBARIXCgpwYWdlX3Rva2VuGAMgASgJQgPgQQESEwoGZmlsdGVyGAQgASgJQgPgQQEibQoTTGlzdEVuZ2luZXNSZXNwb25zZRI9CgdlbmdpbmVzGAEgAygLMiwuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLkVuZ2luZRIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkiiQEKE1VwZGF0ZUVuZ2luZVJlcXVlc3QSQQoGZW5naW5lGAEgASgLMiwuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLkVuZ2luZUID4EECEi8KC3VwZGF0ZV9tYXNrGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFzayJRChJQYXVzZUVuZ2luZVJlcXVlc3QSOwoEbmFtZRgBIAEoCUIt4EEC+kEnCiVkaXNjb3ZlcnllbmdpbmUuZ29vZ2xlYXBpcy5jb20vRW5naW5lIlIKE1Jlc3VtZUVuZ2luZVJlcXVlc3QSOwoEbmFtZRgBIAEoCUIt4EEC+kEnCiVkaXNjb3ZlcnllbmdpbmUuZ29vZ2xlYXBpcy5jb20vRW5naW5lIlAKEVR1bmVFbmdpbmVSZXF1ZXN0EjsKBG5hbWUYASABKAlCLeBBAvpBJwolZGlzY292ZXJ5ZW5naW5lLmdvb2dsZWFwaXMuY29tL0VuZ2luZSJTChJUdW5lRW5naW5lTWV0YWRhdGESPQoGZW5naW5lGAEgASgJQi3gQQL6QScKJWRpc2NvdmVyeWVuZ2luZS5nb29nbGVhcGlzLmNvbS9FbmdpbmUiFAoSVHVuZUVuZ2luZVJlc3BvbnNlMsAPCg1FbmdpbmVTZXJ2aWNlEr4CCgxDcmVhdGVFbmdpbmUSOS5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYWxwaGEuQ3JlYXRlRW5naW5lUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24i0wHKQWgKK2dvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYS5FbmdpbmUSOWdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYS5DcmVhdGVFbmdpbmVNZXRhZGF0YdpBF3BhcmVudCxlbmdpbmUsZW5naW5lX2lkgtPkkwJIOgZlbmdpbmUiPi92MWFscGhhL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9jb2xsZWN0aW9ucy8qfS9lbmdpbmVzEo0CCgxEZWxldGVFbmdpbmUSOS5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYWxwaGEuRGVsZXRlRW5naW5lUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24iogHKQVIKFWdvb2dsZS5wcm90b2J1Zi5FbXB0eRI5Z29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLkRlbGV0ZUVuZ2luZU1ldGFkYXRh2kEEbmFtZYLT5JMCQCo+L3YxYWxwaGEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9jb2xsZWN0aW9ucy8qL2VuZ2luZXMvKn0S4wEKDFVwZGF0ZUVuZ2luZRI5Lmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYS5VcGRhdGVFbmdpbmVSZXF1ZXN0GiwuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLkVuZ2luZSJq2kESZW5naW5lLHVwZGF0ZV9tYXNrgtPkkwJPOgZlbmdpbmUyRS92MWFscGhhL3tlbmdpbmUubmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2NvbGxlY3Rpb25zLyovZW5naW5lcy8qfRLAAQoJR2V0RW5naW5lEjYuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLkdldEVuZ2luZVJlcXVlc3QaLC5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYWxwaGEuRW5naW5lIk3aQQRuYW1lgtPkkwJAEj4vdjFhbHBoYS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2NvbGxlY3Rpb25zLyovZW5naW5lcy8qfRLTAQoLTGlzdEVuZ2luZXMSOC5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYWxwaGEuTGlzdEVuZ2luZXNSZXF1ZXN0GjkuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLkxpc3RFbmdpbmVzUmVzcG9uc2UiT9pBBnBhcmVudILT5JMCQBI+L3YxYWxwaGEve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2NvbGxlY3Rpb25zLyp9L2VuZ2luZXMSzQEKC1BhdXNlRW5naW5lEjguZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLlBhdXNlRW5naW5lUmVxdWVzdBosLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYS5FbmdpbmUiVtpBBG5hbWWC0+STAkk6ASoiRC92MWFscGhhL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovY29sbGVjdGlvbnMvKi9lbmdpbmVzLyp9OnBhdXNlEtABCgxSZXN1bWVFbmdpbmUSOS5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYWxwaGEuUmVzdW1lRW5naW5lUmVxdWVzdBosLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYS5FbmdpbmUiV9pBBG5hbWWC0+STAko6ASoiRS92MWFscGhhL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovY29sbGVjdGlvbnMvKi9lbmdpbmVzLyp9OnJlc3VtZRLnAQoKVHVuZUVuZ2luZRI3Lmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYS5UdW5lRW5naW5lUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24igAHKQSgKElR1bmVFbmdpbmVSZXNwb25zZRISVHVuZUVuZ2luZU1ldGFkYXRh2kEEbmFtZYLT5JMCSDoBKiJDL3YxYWxwaGEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9jb2xsZWN0aW9ucy8qL2VuZ2luZXMvKn06dHVuZRpSykEeZGlzY292ZXJ5ZW5naW5lLmdvb2dsZWFwaXMuY29t0kEuaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jbG91ZC1wbGF0Zm9ybUKeAgooY29tLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYUISRW5naW5lU2VydmljZVByb3RvUAFaUmNsb3VkLmdvb2dsZS5jb20vZ28vZGlzY292ZXJ5ZW5naW5lL2FwaXYxYWxwaGEvZGlzY292ZXJ5ZW5naW5lcGI7ZGlzY292ZXJ5ZW5naW5lcGKiAg9ESVNDT1ZFUllFTkdJTkWqAiRHb29nbGUuQ2xvdWQuRGlzY292ZXJ5RW5naW5lLlYxQWxwaGHKAiRHb29nbGVcQ2xvdWRcRGlzY292ZXJ5RW5naW5lXFYxYWxwaGHqAidHb29nbGU6OkNsb3VkOjpEaXNjb3ZlcnlFbmdpbmU6OlYxYWxwaGFiBnByb3RvMw", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_discoveryengine_v1alpha_engine, file_google_longrunning_operations, file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_timestamp]);

/**
 * Request for
 * [EngineService.CreateEngine][google.cloud.discoveryengine.v1alpha.EngineService.CreateEngine]
 * method.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.CreateEngineRequest
 */
export type CreateEngineRequest = Message<"google.cloud.discoveryengine.v1alpha.CreateEngineRequest"> & {
  /**
   * Required. The parent resource name, such as
   * `projects/{project}/locations/{location}/collections/{collection}`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The [Engine][google.cloud.discoveryengine.v1alpha.Engine] to
   * create.
   *
   * @generated from field: google.cloud.discoveryengine.v1alpha.Engine engine = 2;
   */
  engine?: Engine;

  /**
   * Required. The ID to use for the
   * [Engine][google.cloud.discoveryengine.v1alpha.Engine], which will become
   * the final component of the
   * [Engine][google.cloud.discoveryengine.v1alpha.Engine]'s resource name.
   *
   * This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
   * standard with a length limit of 63 characters. Otherwise, an
   * INVALID_ARGUMENT error is returned.
   *
   * @generated from field: string engine_id = 3;
   */
  engineId: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.CreateEngineRequest.
 * Use `create(CreateEngineRequestSchema)` to create a new message.
 */
export const CreateEngineRequestSchema: GenMessage<CreateEngineRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_engine_service, 0);

/**
 * Metadata related to the progress of the
 * [EngineService.CreateEngine][google.cloud.discoveryengine.v1alpha.EngineService.CreateEngine]
 * operation. This will be returned by the google.longrunning.Operation.metadata
 * field.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.CreateEngineMetadata
 */
export type CreateEngineMetadata = Message<"google.cloud.discoveryengine.v1alpha.CreateEngineMetadata"> & {
  /**
   * Operation create time.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 1;
   */
  createTime?: Timestamp;

  /**
   * Operation last update time. If the operation is done, this is also the
   * finish time.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 2;
   */
  updateTime?: Timestamp;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.CreateEngineMetadata.
 * Use `create(CreateEngineMetadataSchema)` to create a new message.
 */
export const CreateEngineMetadataSchema: GenMessage<CreateEngineMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_engine_service, 1);

/**
 * Request message for
 * [EngineService.DeleteEngine][google.cloud.discoveryengine.v1alpha.EngineService.DeleteEngine]
 * method.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.DeleteEngineRequest
 */
export type DeleteEngineRequest = Message<"google.cloud.discoveryengine.v1alpha.DeleteEngineRequest"> & {
  /**
   * Required. Full resource name of
   * [Engine][google.cloud.discoveryengine.v1alpha.Engine], such as
   * `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
   *
   * If the caller does not have permission to delete the
   * [Engine][google.cloud.discoveryengine.v1alpha.Engine], regardless of
   * whether or not it exists, a PERMISSION_DENIED error is returned.
   *
   * If the [Engine][google.cloud.discoveryengine.v1alpha.Engine] to delete does
   * not exist, a NOT_FOUND error is returned.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.DeleteEngineRequest.
 * Use `create(DeleteEngineRequestSchema)` to create a new message.
 */
export const DeleteEngineRequestSchema: GenMessage<DeleteEngineRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_engine_service, 2);

/**
 * Metadata related to the progress of the
 * [EngineService.DeleteEngine][google.cloud.discoveryengine.v1alpha.EngineService.DeleteEngine]
 * operation. This will be returned by the google.longrunning.Operation.metadata
 * field.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.DeleteEngineMetadata
 */
export type DeleteEngineMetadata = Message<"google.cloud.discoveryengine.v1alpha.DeleteEngineMetadata"> & {
  /**
   * Operation create time.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 1;
   */
  createTime?: Timestamp;

  /**
   * Operation last update time. If the operation is done, this is also the
   * finish time.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 2;
   */
  updateTime?: Timestamp;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.DeleteEngineMetadata.
 * Use `create(DeleteEngineMetadataSchema)` to create a new message.
 */
export const DeleteEngineMetadataSchema: GenMessage<DeleteEngineMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_engine_service, 3);

/**
 * Request message for
 * [EngineService.GetEngine][google.cloud.discoveryengine.v1alpha.EngineService.GetEngine]
 * method.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.GetEngineRequest
 */
export type GetEngineRequest = Message<"google.cloud.discoveryengine.v1alpha.GetEngineRequest"> & {
  /**
   * Required. Full resource name of
   * [Engine][google.cloud.discoveryengine.v1alpha.Engine], such as
   * `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.GetEngineRequest.
 * Use `create(GetEngineRequestSchema)` to create a new message.
 */
export const GetEngineRequestSchema: GenMessage<GetEngineRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_engine_service, 4);

/**
 * Request message for
 * [EngineService.ListEngines][google.cloud.discoveryengine.v1alpha.EngineService.ListEngines]
 * method.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.ListEnginesRequest
 */
export type ListEnginesRequest = Message<"google.cloud.discoveryengine.v1alpha.ListEnginesRequest"> & {
  /**
   * Required. The parent resource name, such as
   * `projects/{project}/locations/{location}/collections/{collection_id}`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. Not supported.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. Not supported.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * Optional. Filter by solution type. For example:
   * solution_type=SOLUTION_TYPE_SEARCH
   *
   * @generated from field: string filter = 4;
   */
  filter: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.ListEnginesRequest.
 * Use `create(ListEnginesRequestSchema)` to create a new message.
 */
export const ListEnginesRequestSchema: GenMessage<ListEnginesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_engine_service, 5);

/**
 * Response message for
 * [EngineService.ListEngines][google.cloud.discoveryengine.v1alpha.EngineService.ListEngines]
 * method.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.ListEnginesResponse
 */
export type ListEnginesResponse = Message<"google.cloud.discoveryengine.v1alpha.ListEnginesResponse"> & {
  /**
   * All the customer's [Engine][google.cloud.discoveryengine.v1alpha.Engine]s.
   *
   * @generated from field: repeated google.cloud.discoveryengine.v1alpha.Engine engines = 1;
   */
  engines: Engine[];

  /**
   * Not supported.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.ListEnginesResponse.
 * Use `create(ListEnginesResponseSchema)` to create a new message.
 */
export const ListEnginesResponseSchema: GenMessage<ListEnginesResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_engine_service, 6);

/**
 * Request message for
 * [EngineService.UpdateEngine][google.cloud.discoveryengine.v1alpha.EngineService.UpdateEngine]
 * method.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.UpdateEngineRequest
 */
export type UpdateEngineRequest = Message<"google.cloud.discoveryengine.v1alpha.UpdateEngineRequest"> & {
  /**
   * Required. The [Engine][google.cloud.discoveryengine.v1alpha.Engine] to
   * update.
   *
   * If the caller does not have permission to update the
   * [Engine][google.cloud.discoveryengine.v1alpha.Engine], regardless of
   * whether or not it exists, a PERMISSION_DENIED error is returned.
   *
   * If the [Engine][google.cloud.discoveryengine.v1alpha.Engine] to update does
   * not exist, a NOT_FOUND error is returned.
   *
   * @generated from field: google.cloud.discoveryengine.v1alpha.Engine engine = 1;
   */
  engine?: Engine;

  /**
   * Indicates which fields in the provided
   * [Engine][google.cloud.discoveryengine.v1alpha.Engine] to update.
   *
   * If an unsupported or unknown field is provided, an INVALID_ARGUMENT error
   * is returned.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.UpdateEngineRequest.
 * Use `create(UpdateEngineRequestSchema)` to create a new message.
 */
export const UpdateEngineRequestSchema: GenMessage<UpdateEngineRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_engine_service, 7);

/**
 * Request for pausing training of an engine.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.PauseEngineRequest
 */
export type PauseEngineRequest = Message<"google.cloud.discoveryengine.v1alpha.PauseEngineRequest"> & {
  /**
   * Required. The name of the engine to pause.
   * Format:
   * `projects/{project_number}/locations/{location_id}/collections/{collection_id}/engines/{engine_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.PauseEngineRequest.
 * Use `create(PauseEngineRequestSchema)` to create a new message.
 */
export const PauseEngineRequestSchema: GenMessage<PauseEngineRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_engine_service, 8);

/**
 * Request for resuming training of an engine.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.ResumeEngineRequest
 */
export type ResumeEngineRequest = Message<"google.cloud.discoveryengine.v1alpha.ResumeEngineRequest"> & {
  /**
   * Required. The name of the engine to resume.
   * Format:
   * `projects/{project_number}/locations/{location_id}/collections/{collection_id}/engines/{engine_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.ResumeEngineRequest.
 * Use `create(ResumeEngineRequestSchema)` to create a new message.
 */
export const ResumeEngineRequestSchema: GenMessage<ResumeEngineRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_engine_service, 9);

/**
 * Request to manually start a tuning process now (instead of waiting for
 * the periodically scheduled tuning to happen).
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.TuneEngineRequest
 */
export type TuneEngineRequest = Message<"google.cloud.discoveryengine.v1alpha.TuneEngineRequest"> & {
  /**
   * Required. The resource name of the engine to tune.
   * Format:
   * `projects/{project_number}/locations/{location_id}/collections/{collection_id}/engines/{engine_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.TuneEngineRequest.
 * Use `create(TuneEngineRequestSchema)` to create a new message.
 */
export const TuneEngineRequestSchema: GenMessage<TuneEngineRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_engine_service, 10);

/**
 * Metadata associated with a tune operation.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.TuneEngineMetadata
 */
export type TuneEngineMetadata = Message<"google.cloud.discoveryengine.v1alpha.TuneEngineMetadata"> & {
  /**
   * Required. The resource name of the engine that this tune applies to.
   * Format:
   * `projects/{project_number}/locations/{location_id}/collections/{collection_id}/engines/{engine_id}`
   *
   * @generated from field: string engine = 1;
   */
  engine: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.TuneEngineMetadata.
 * Use `create(TuneEngineMetadataSchema)` to create a new message.
 */
export const TuneEngineMetadataSchema: GenMessage<TuneEngineMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_engine_service, 11);

/**
 * Response associated with a tune operation.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.TuneEngineResponse
 */
export type TuneEngineResponse = Message<"google.cloud.discoveryengine.v1alpha.TuneEngineResponse"> & {
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.TuneEngineResponse.
 * Use `create(TuneEngineResponseSchema)` to create a new message.
 */
export const TuneEngineResponseSchema: GenMessage<TuneEngineResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_engine_service, 12);

/**
 * Service for managing [Engine][google.cloud.discoveryengine.v1alpha.Engine]
 * configuration.
 *
 * @generated from service google.cloud.discoveryengine.v1alpha.EngineService
 */
export const EngineService: GenService<{
  /**
   * Creates a [Engine][google.cloud.discoveryengine.v1alpha.Engine].
   *
   * @generated from rpc google.cloud.discoveryengine.v1alpha.EngineService.CreateEngine
   */
  createEngine: {
    methodKind: "unary";
    input: typeof CreateEngineRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Deletes a [Engine][google.cloud.discoveryengine.v1alpha.Engine].
   *
   * @generated from rpc google.cloud.discoveryengine.v1alpha.EngineService.DeleteEngine
   */
  deleteEngine: {
    methodKind: "unary";
    input: typeof DeleteEngineRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Updates an [Engine][google.cloud.discoveryengine.v1alpha.Engine]
   *
   * @generated from rpc google.cloud.discoveryengine.v1alpha.EngineService.UpdateEngine
   */
  updateEngine: {
    methodKind: "unary";
    input: typeof UpdateEngineRequestSchema;
    output: typeof EngineSchema;
  },
  /**
   * Gets a [Engine][google.cloud.discoveryengine.v1alpha.Engine].
   *
   * @generated from rpc google.cloud.discoveryengine.v1alpha.EngineService.GetEngine
   */
  getEngine: {
    methodKind: "unary";
    input: typeof GetEngineRequestSchema;
    output: typeof EngineSchema;
  },
  /**
   * Lists all the [Engine][google.cloud.discoveryengine.v1alpha.Engine]s
   * associated with the project.
   *
   * @generated from rpc google.cloud.discoveryengine.v1alpha.EngineService.ListEngines
   */
  listEngines: {
    methodKind: "unary";
    input: typeof ListEnginesRequestSchema;
    output: typeof ListEnginesResponseSchema;
  },
  /**
   * Pauses the training of an existing engine. Only applicable if
   * [SolutionType][google.cloud.discoveryengine.v1alpha.SolutionType] is
   * [SOLUTION_TYPE_RECOMMENDATION][google.cloud.discoveryengine.v1alpha.SolutionType.SOLUTION_TYPE_RECOMMENDATION].
   *
   * @generated from rpc google.cloud.discoveryengine.v1alpha.EngineService.PauseEngine
   */
  pauseEngine: {
    methodKind: "unary";
    input: typeof PauseEngineRequestSchema;
    output: typeof EngineSchema;
  },
  /**
   * Resumes the training of an existing engine. Only applicable if
   * [SolutionType][google.cloud.discoveryengine.v1alpha.SolutionType] is
   * [SOLUTION_TYPE_RECOMMENDATION][google.cloud.discoveryengine.v1alpha.SolutionType.SOLUTION_TYPE_RECOMMENDATION].
   *
   * @generated from rpc google.cloud.discoveryengine.v1alpha.EngineService.ResumeEngine
   */
  resumeEngine: {
    methodKind: "unary";
    input: typeof ResumeEngineRequestSchema;
    output: typeof EngineSchema;
  },
  /**
   * Tunes an existing engine. Only applicable if
   * [SolutionType][google.cloud.discoveryengine.v1alpha.SolutionType] is
   * [SOLUTION_TYPE_RECOMMENDATION][google.cloud.discoveryengine.v1alpha.SolutionType.SOLUTION_TYPE_RECOMMENDATION].
   *
   * @generated from rpc google.cloud.discoveryengine.v1alpha.EngineService.TuneEngine
   */
  tuneEngine: {
    methodKind: "unary";
    input: typeof TuneEngineRequestSchema;
    output: typeof OperationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_discoveryengine_v1alpha_engine_service, 0);
