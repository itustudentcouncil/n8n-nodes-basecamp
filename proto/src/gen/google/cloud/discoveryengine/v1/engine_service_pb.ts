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
// @generated from file google/cloud/discoveryengine/v1/engine_service.proto (package google.cloud.discoveryengine.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Engine, EngineSchema } from "./engine_pb";
import { file_google_cloud_discoveryengine_v1_engine } from "./engine_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import type { FieldMask, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/discoveryengine/v1/engine_service.proto.
 */
export const file_google_cloud_discoveryengine_v1_engine_service: GenFile = /*@__PURE__*/
  fileDesc("CjRnb29nbGUvY2xvdWQvZGlzY292ZXJ5ZW5naW5lL3YxL2VuZ2luZV9zZXJ2aWNlLnByb3RvEh9nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxIq4BChNDcmVhdGVFbmdpbmVSZXF1ZXN0EkEKBnBhcmVudBgBIAEoCUIx4EEC+kErCilkaXNjb3ZlcnllbmdpbmUuZ29vZ2xlYXBpcy5jb20vQ29sbGVjdGlvbhI8CgZlbmdpbmUYAiABKAsyJy5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxLkVuZ2luZUID4EECEhYKCWVuZ2luZV9pZBgDIAEoCUID4EECIngKFENyZWF0ZUVuZ2luZU1ldGFkYXRhEi8KC2NyZWF0ZV90aW1lGAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIvCgt1cGRhdGVfdGltZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAiUgoTRGVsZXRlRW5naW5lUmVxdWVzdBI7CgRuYW1lGAEgASgJQi3gQQL6QScKJWRpc2NvdmVyeWVuZ2luZS5nb29nbGVhcGlzLmNvbS9FbmdpbmUieAoURGVsZXRlRW5naW5lTWV0YWRhdGESLwoLY3JlYXRlX3RpbWUYASABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi8KC3VwZGF0ZV90aW1lGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCJPChBHZXRFbmdpbmVSZXF1ZXN0EjsKBG5hbWUYASABKAlCLeBBAvpBJwolZGlzY292ZXJ5ZW5naW5lLmdvb2dsZWFwaXMuY29tL0VuZ2luZSKdAQoSTGlzdEVuZ2luZXNSZXF1ZXN0EkEKBnBhcmVudBgBIAEoCUIx4EEC+kErCilkaXNjb3ZlcnllbmdpbmUuZ29vZ2xlYXBpcy5jb20vQ29sbGVjdGlvbhIWCglwYWdlX3NpemUYAiABKAVCA+BBARIXCgpwYWdlX3Rva2VuGAMgASgJQgPgQQESEwoGZmlsdGVyGAQgASgJQgPgQQEiaAoTTGlzdEVuZ2luZXNSZXNwb25zZRI4CgdlbmdpbmVzGAEgAygLMicuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MS5FbmdpbmUSFwoPbmV4dF9wYWdlX3Rva2VuGAIgASgJIoQBChNVcGRhdGVFbmdpbmVSZXF1ZXN0EjwKBmVuZ2luZRgBIAEoCzInLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjEuRW5naW5lQgPgQQISLwoLdXBkYXRlX21hc2sYAiABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrMuMJCg1FbmdpbmVTZXJ2aWNlEqoCCgxDcmVhdGVFbmdpbmUSNC5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxLkNyZWF0ZUVuZ2luZVJlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uIsQBykFeCiZnb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxLkVuZ2luZRI0Z29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MS5DcmVhdGVFbmdpbmVNZXRhZGF0YdpBF3BhcmVudCxlbmdpbmUsZW5naW5lX2lkgtPkkwJDOgZlbmdpbmUiOS92MS97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyovY29sbGVjdGlvbnMvKn0vZW5naW5lcxL+AQoMRGVsZXRlRW5naW5lEjQuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MS5EZWxldGVFbmdpbmVSZXF1ZXN0Gh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbiKYAcpBTQoVZ29vZ2xlLnByb3RvYnVmLkVtcHR5EjRnb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxLkRlbGV0ZUVuZ2luZU1ldGFkYXRh2kEEbmFtZYLT5JMCOyo5L3YxL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovY29sbGVjdGlvbnMvKi9lbmdpbmVzLyp9EtQBCgxVcGRhdGVFbmdpbmUSNC5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxLlVwZGF0ZUVuZ2luZVJlcXVlc3QaJy5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxLkVuZ2luZSJl2kESZW5naW5lLHVwZGF0ZV9tYXNrgtPkkwJKOgZlbmdpbmUyQC92MS97ZW5naW5lLm5hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9jb2xsZWN0aW9ucy8qL2VuZ2luZXMvKn0SsQEKCUdldEVuZ2luZRIxLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjEuR2V0RW5naW5lUmVxdWVzdBonLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjEuRW5naW5lIkjaQQRuYW1lgtPkkwI7EjkvdjEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9jb2xsZWN0aW9ucy8qL2VuZ2luZXMvKn0SxAEKC0xpc3RFbmdpbmVzEjMuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MS5MaXN0RW5naW5lc1JlcXVlc3QaNC5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxLkxpc3RFbmdpbmVzUmVzcG9uc2UiStpBBnBhcmVudILT5JMCOxI5L3YxL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9jb2xsZWN0aW9ucy8qfS9lbmdpbmVzGlLKQR5kaXNjb3ZlcnllbmdpbmUuZ29vZ2xlYXBpcy5jb23SQS5odHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Nsb3VkLXBsYXRmb3JtQoUCCiNjb20uZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MUISRW5naW5lU2VydmljZVByb3RvUAFaTWNsb3VkLmdvb2dsZS5jb20vZ28vZGlzY292ZXJ5ZW5naW5lL2FwaXYxL2Rpc2NvdmVyeWVuZ2luZXBiO2Rpc2NvdmVyeWVuZ2luZXBiogIPRElTQ09WRVJZRU5HSU5FqgIfR29vZ2xlLkNsb3VkLkRpc2NvdmVyeUVuZ2luZS5WMcoCH0dvb2dsZVxDbG91ZFxEaXNjb3ZlcnlFbmdpbmVcVjHqAiJHb29nbGU6OkNsb3VkOjpEaXNjb3ZlcnlFbmdpbmU6OlYxYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_discoveryengine_v1_engine, file_google_longrunning_operations, file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_timestamp]);

/**
 * Request for
 * [EngineService.CreateEngine][google.cloud.discoveryengine.v1.EngineService.CreateEngine]
 * method.
 *
 * @generated from message google.cloud.discoveryengine.v1.CreateEngineRequest
 */
export type CreateEngineRequest = Message<"google.cloud.discoveryengine.v1.CreateEngineRequest"> & {
  /**
   * Required. The parent resource name, such as
   * `projects/{project}/locations/{location}/collections/{collection}`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The [Engine][google.cloud.discoveryengine.v1.Engine] to create.
   *
   * @generated from field: google.cloud.discoveryengine.v1.Engine engine = 2;
   */
  engine?: Engine;

  /**
   * Required. The ID to use for the
   * [Engine][google.cloud.discoveryengine.v1.Engine], which will become the
   * final component of the [Engine][google.cloud.discoveryengine.v1.Engine]'s
   * resource name.
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
 * Describes the message google.cloud.discoveryengine.v1.CreateEngineRequest.
 * Use `create(CreateEngineRequestSchema)` to create a new message.
 */
export const CreateEngineRequestSchema: GenMessage<CreateEngineRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1_engine_service, 0);

/**
 * Metadata related to the progress of the
 * [EngineService.CreateEngine][google.cloud.discoveryengine.v1.EngineService.CreateEngine]
 * operation. This will be returned by the google.longrunning.Operation.metadata
 * field.
 *
 * @generated from message google.cloud.discoveryengine.v1.CreateEngineMetadata
 */
export type CreateEngineMetadata = Message<"google.cloud.discoveryengine.v1.CreateEngineMetadata"> & {
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
 * Describes the message google.cloud.discoveryengine.v1.CreateEngineMetadata.
 * Use `create(CreateEngineMetadataSchema)` to create a new message.
 */
export const CreateEngineMetadataSchema: GenMessage<CreateEngineMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1_engine_service, 1);

/**
 * Request message for
 * [EngineService.DeleteEngine][google.cloud.discoveryengine.v1.EngineService.DeleteEngine]
 * method.
 *
 * @generated from message google.cloud.discoveryengine.v1.DeleteEngineRequest
 */
export type DeleteEngineRequest = Message<"google.cloud.discoveryengine.v1.DeleteEngineRequest"> & {
  /**
   * Required. Full resource name of
   * [Engine][google.cloud.discoveryengine.v1.Engine], such as
   * `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
   *
   * If the caller does not have permission to delete the
   * [Engine][google.cloud.discoveryengine.v1.Engine], regardless of whether or
   * not it exists, a PERMISSION_DENIED error is returned.
   *
   * If the [Engine][google.cloud.discoveryengine.v1.Engine] to delete does not
   * exist, a NOT_FOUND error is returned.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1.DeleteEngineRequest.
 * Use `create(DeleteEngineRequestSchema)` to create a new message.
 */
export const DeleteEngineRequestSchema: GenMessage<DeleteEngineRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1_engine_service, 2);

/**
 * Metadata related to the progress of the
 * [EngineService.DeleteEngine][google.cloud.discoveryengine.v1.EngineService.DeleteEngine]
 * operation. This will be returned by the google.longrunning.Operation.metadata
 * field.
 *
 * @generated from message google.cloud.discoveryengine.v1.DeleteEngineMetadata
 */
export type DeleteEngineMetadata = Message<"google.cloud.discoveryengine.v1.DeleteEngineMetadata"> & {
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
 * Describes the message google.cloud.discoveryengine.v1.DeleteEngineMetadata.
 * Use `create(DeleteEngineMetadataSchema)` to create a new message.
 */
export const DeleteEngineMetadataSchema: GenMessage<DeleteEngineMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1_engine_service, 3);

/**
 * Request message for
 * [EngineService.GetEngine][google.cloud.discoveryengine.v1.EngineService.GetEngine]
 * method.
 *
 * @generated from message google.cloud.discoveryengine.v1.GetEngineRequest
 */
export type GetEngineRequest = Message<"google.cloud.discoveryengine.v1.GetEngineRequest"> & {
  /**
   * Required. Full resource name of
   * [Engine][google.cloud.discoveryengine.v1.Engine], such as
   * `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1.GetEngineRequest.
 * Use `create(GetEngineRequestSchema)` to create a new message.
 */
export const GetEngineRequestSchema: GenMessage<GetEngineRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1_engine_service, 4);

/**
 * Request message for
 * [EngineService.ListEngines][google.cloud.discoveryengine.v1.EngineService.ListEngines]
 * method.
 *
 * @generated from message google.cloud.discoveryengine.v1.ListEnginesRequest
 */
export type ListEnginesRequest = Message<"google.cloud.discoveryengine.v1.ListEnginesRequest"> & {
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
 * Describes the message google.cloud.discoveryengine.v1.ListEnginesRequest.
 * Use `create(ListEnginesRequestSchema)` to create a new message.
 */
export const ListEnginesRequestSchema: GenMessage<ListEnginesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1_engine_service, 5);

/**
 * Response message for
 * [EngineService.ListEngines][google.cloud.discoveryengine.v1.EngineService.ListEngines]
 * method.
 *
 * @generated from message google.cloud.discoveryengine.v1.ListEnginesResponse
 */
export type ListEnginesResponse = Message<"google.cloud.discoveryengine.v1.ListEnginesResponse"> & {
  /**
   * All the customer's [Engine][google.cloud.discoveryengine.v1.Engine]s.
   *
   * @generated from field: repeated google.cloud.discoveryengine.v1.Engine engines = 1;
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
 * Describes the message google.cloud.discoveryengine.v1.ListEnginesResponse.
 * Use `create(ListEnginesResponseSchema)` to create a new message.
 */
export const ListEnginesResponseSchema: GenMessage<ListEnginesResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1_engine_service, 6);

/**
 * Request message for
 * [EngineService.UpdateEngine][google.cloud.discoveryengine.v1.EngineService.UpdateEngine]
 * method.
 *
 * @generated from message google.cloud.discoveryengine.v1.UpdateEngineRequest
 */
export type UpdateEngineRequest = Message<"google.cloud.discoveryengine.v1.UpdateEngineRequest"> & {
  /**
   * Required. The [Engine][google.cloud.discoveryengine.v1.Engine] to update.
   *
   * If the caller does not have permission to update the
   * [Engine][google.cloud.discoveryengine.v1.Engine], regardless of whether or
   * not it exists, a PERMISSION_DENIED error is returned.
   *
   * If the [Engine][google.cloud.discoveryengine.v1.Engine] to update does not
   * exist, a NOT_FOUND error is returned.
   *
   * @generated from field: google.cloud.discoveryengine.v1.Engine engine = 1;
   */
  engine?: Engine;

  /**
   * Indicates which fields in the provided
   * [Engine][google.cloud.discoveryengine.v1.Engine] to update.
   *
   * If an unsupported or unknown field is provided, an INVALID_ARGUMENT error
   * is returned.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.cloud.discoveryengine.v1.UpdateEngineRequest.
 * Use `create(UpdateEngineRequestSchema)` to create a new message.
 */
export const UpdateEngineRequestSchema: GenMessage<UpdateEngineRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1_engine_service, 7);

/**
 * Service for managing [Engine][google.cloud.discoveryengine.v1.Engine]
 * configuration.
 *
 * @generated from service google.cloud.discoveryengine.v1.EngineService
 */
export const EngineService: GenService<{
  /**
   * Creates a [Engine][google.cloud.discoveryengine.v1.Engine].
   *
   * @generated from rpc google.cloud.discoveryengine.v1.EngineService.CreateEngine
   */
  createEngine: {
    methodKind: "unary";
    input: typeof CreateEngineRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Deletes a [Engine][google.cloud.discoveryengine.v1.Engine].
   *
   * @generated from rpc google.cloud.discoveryengine.v1.EngineService.DeleteEngine
   */
  deleteEngine: {
    methodKind: "unary";
    input: typeof DeleteEngineRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Updates an [Engine][google.cloud.discoveryengine.v1.Engine]
   *
   * @generated from rpc google.cloud.discoveryengine.v1.EngineService.UpdateEngine
   */
  updateEngine: {
    methodKind: "unary";
    input: typeof UpdateEngineRequestSchema;
    output: typeof EngineSchema;
  },
  /**
   * Gets a [Engine][google.cloud.discoveryengine.v1.Engine].
   *
   * @generated from rpc google.cloud.discoveryengine.v1.EngineService.GetEngine
   */
  getEngine: {
    methodKind: "unary";
    input: typeof GetEngineRequestSchema;
    output: typeof EngineSchema;
  },
  /**
   * Lists all the [Engine][google.cloud.discoveryengine.v1.Engine]s associated
   * with the project.
   *
   * @generated from rpc google.cloud.discoveryengine.v1.EngineService.ListEngines
   */
  listEngines: {
    methodKind: "unary";
    input: typeof ListEnginesRequestSchema;
    output: typeof ListEnginesResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_discoveryengine_v1_engine_service, 0);
