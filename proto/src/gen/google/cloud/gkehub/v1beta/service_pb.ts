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
// @generated from file google/cloud/gkehub/v1beta/service.proto (package google.cloud.gkehub.v1beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { Feature, FeatureSchema } from "./feature_pb";
import { file_google_cloud_gkehub_v1beta_feature } from "./feature_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import type { FieldMask, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_field_mask, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/gkehub/v1beta/service.proto.
 */
export const file_google_cloud_gkehub_v1beta_service: GenFile = /*@__PURE__*/
  fileDesc("Cihnb29nbGUvY2xvdWQvZ2tlaHViL3YxYmV0YS9zZXJ2aWNlLnByb3RvEhpnb29nbGUuY2xvdWQuZ2tlaHViLnYxYmV0YSJuChNMaXN0RmVhdHVyZXNSZXF1ZXN0Eg4KBnBhcmVudBgBIAEoCRIRCglwYWdlX3NpemUYAiABKAUSEgoKcGFnZV90b2tlbhgDIAEoCRIOCgZmaWx0ZXIYBCABKAkSEAoIb3JkZXJfYnkYBSABKAkiZwoUTGlzdEZlYXR1cmVzUmVzcG9uc2USNgoJcmVzb3VyY2VzGAEgAygLMiMuZ29vZ2xlLmNsb3VkLmdrZWh1Yi52MWJldGEuRmVhdHVyZRIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkiIQoRR2V0RmVhdHVyZVJlcXVlc3QSDAoEbmFtZRgBIAEoCSKKAQoUQ3JlYXRlRmVhdHVyZVJlcXVlc3QSDgoGcGFyZW50GAEgASgJEhIKCmZlYXR1cmVfaWQYAiABKAkSNQoIcmVzb3VyY2UYAyABKAsyIy5nb29nbGUuY2xvdWQuZ2tlaHViLnYxYmV0YS5GZWF0dXJlEhcKCnJlcXVlc3RfaWQYBCABKAlCA+BBASJMChREZWxldGVGZWF0dXJlUmVxdWVzdBIMCgRuYW1lGAEgASgJEg0KBWZvcmNlGAIgASgIEhcKCnJlcXVlc3RfaWQYAyABKAlCA+BBASKlAQoUVXBkYXRlRmVhdHVyZVJlcXVlc3QSDAoEbmFtZRgBIAEoCRIvCgt1cGRhdGVfbWFzaxgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2sSNQoIcmVzb3VyY2UYAyABKAsyIy5nb29nbGUuY2xvdWQuZ2tlaHViLnYxYmV0YS5GZWF0dXJlEhcKCnJlcXVlc3RfaWQYBCABKAlCA+BBASL5AQoRT3BlcmF0aW9uTWV0YWRhdGESNAoLY3JlYXRlX3RpbWUYASABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSMQoIZW5kX3RpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSEwoGdGFyZ2V0GAMgASgJQgPgQQMSEQoEdmVyYhgEIAEoCUID4EEDEhoKDXN0YXR1c19kZXRhaWwYBSABKAlCA+BBAxIdChBjYW5jZWxfcmVxdWVzdGVkGAYgASgIQgPgQQMSGAoLYXBpX3ZlcnNpb24YByABKAlCA+BBAzLECAoGR2tlSHViErQBCgxMaXN0RmVhdHVyZXMSLy5nb29nbGUuY2xvdWQuZ2tlaHViLnYxYmV0YS5MaXN0RmVhdHVyZXNSZXF1ZXN0GjAuZ29vZ2xlLmNsb3VkLmdrZWh1Yi52MWJldGEuTGlzdEZlYXR1cmVzUmVzcG9uc2UiQdpBBnBhcmVudILT5JMCMhIwL3YxYmV0YS97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyp9L2ZlYXR1cmVzEqEBCgpHZXRGZWF0dXJlEi0uZ29vZ2xlLmNsb3VkLmdrZWh1Yi52MWJldGEuR2V0RmVhdHVyZVJlcXVlc3QaIy5nb29nbGUuY2xvdWQuZ2tlaHViLnYxYmV0YS5GZWF0dXJlIj/aQQRuYW1lgtPkkwIyEjAvdjFiZXRhL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovZmVhdHVyZXMvKn0S4AEKDUNyZWF0ZUZlYXR1cmUSMC5nb29nbGUuY2xvdWQuZ2tlaHViLnYxYmV0YS5DcmVhdGVGZWF0dXJlUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24ifspBHAoHRmVhdHVyZRIRT3BlcmF0aW9uTWV0YWRhdGHaQRpwYXJlbnQscmVzb3VyY2UsZmVhdHVyZV9pZILT5JMCPDoIcmVzb3VyY2UiMC92MWJldGEve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qfS9mZWF0dXJlcxLOAQoNRGVsZXRlRmVhdHVyZRIwLmdvb2dsZS5jbG91ZC5na2VodWIudjFiZXRhLkRlbGV0ZUZlYXR1cmVSZXF1ZXN0Gh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbiJsykEqChVnb29nbGUucHJvdG9idWYuRW1wdHkSEU9wZXJhdGlvbk1ldGFkYXRh2kEEbmFtZYLT5JMCMiowL3YxYmV0YS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2ZlYXR1cmVzLyp9Et8BCg1VcGRhdGVGZWF0dXJlEjAuZ29vZ2xlLmNsb3VkLmdrZWh1Yi52MWJldGEuVXBkYXRlRmVhdHVyZVJlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uIn3KQRwKB0ZlYXR1cmUSEU9wZXJhdGlvbk1ldGFkYXRh2kEZbmFtZSxyZXNvdXJjZSx1cGRhdGVfbWFza4LT5JMCPDoIcmVzb3VyY2UyMC92MWJldGEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9mZWF0dXJlcy8qfRpJykEVZ2tlaHViLmdvb2dsZWFwaXMuY29t0kEuaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jbG91ZC1wbGF0Zm9ybULCAQoeY29tLmdvb2dsZS5jbG91ZC5na2VodWIudjFiZXRhQgxTZXJ2aWNlUHJvdG9QAVo2Y2xvdWQuZ29vZ2xlLmNvbS9nby9na2VodWIvYXBpdjFiZXRhL2drZWh1YnBiO2drZWh1YnBiqgIaR29vZ2xlLkNsb3VkLkdrZUh1Yi5WMUJldGHKAhpHb29nbGVcQ2xvdWRcR2tlSHViXFYxYmV0YeoCHUdvb2dsZTo6Q2xvdWQ6OkdrZUh1Yjo6VjFiZXRhYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_cloud_gkehub_v1beta_feature, file_google_longrunning_operations, file_google_protobuf_field_mask, file_google_protobuf_timestamp]);

/**
 * Request message for `GkeHub.ListFeatures` method.
 *
 * @generated from message google.cloud.gkehub.v1beta.ListFeaturesRequest
 */
export type ListFeaturesRequest = Message<"google.cloud.gkehub.v1beta.ListFeaturesRequest"> & {
  /**
   * The parent (project and location) where the Features will be listed.
   * Specified in the format `projects/*\/locations/*`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * When requesting a 'page' of resources, `page_size` specifies number of
   * resources to return. If unspecified or set to 0, all resources will
   * be returned.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Token returned by previous call to `ListFeatures` which
   * specifies the position in the list from where to continue listing the
   * resources.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * Lists Features that match the filter expression, following the syntax
   * outlined in https://google.aip.dev/160.
   *
   * Examples:
   *
   *   - Feature with the name "servicemesh" in project "foo-proj":
   *
   *       name = "projects/foo-proj/locations/global/features/servicemesh"
   *
   *   - Features that have a label called `foo`:
   *
   *       labels.foo:*
   *
   *   - Features that have a label called `foo` whose value is `bar`:
   *
   *       labels.foo = bar
   *
   * @generated from field: string filter = 4;
   */
  filter: string;

  /**
   * One or more fields to compare and use to sort the output.
   * See https://google.aip.dev/132#ordering.
   *
   * @generated from field: string order_by = 5;
   */
  orderBy: string;
};

/**
 * Describes the message google.cloud.gkehub.v1beta.ListFeaturesRequest.
 * Use `create(ListFeaturesRequestSchema)` to create a new message.
 */
export const ListFeaturesRequestSchema: GenMessage<ListFeaturesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_gkehub_v1beta_service, 0);

/**
 * Response message for the `GkeHub.ListFeatures` method.
 *
 * @generated from message google.cloud.gkehub.v1beta.ListFeaturesResponse
 */
export type ListFeaturesResponse = Message<"google.cloud.gkehub.v1beta.ListFeaturesResponse"> & {
  /**
   * The list of matching Features
   *
   * @generated from field: repeated google.cloud.gkehub.v1beta.Feature resources = 1;
   */
  resources: Feature[];

  /**
   * A token to request the next page of resources from the
   * `ListFeatures` method. The value of an empty string means
   * that there are no more resources to return.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.gkehub.v1beta.ListFeaturesResponse.
 * Use `create(ListFeaturesResponseSchema)` to create a new message.
 */
export const ListFeaturesResponseSchema: GenMessage<ListFeaturesResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_gkehub_v1beta_service, 1);

/**
 * Request message for `GkeHub.GetFeature` method.
 *
 * @generated from message google.cloud.gkehub.v1beta.GetFeatureRequest
 */
export type GetFeatureRequest = Message<"google.cloud.gkehub.v1beta.GetFeatureRequest"> & {
  /**
   * The Feature resource name in the format
   * `projects/*\/locations/*\/features/*`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.gkehub.v1beta.GetFeatureRequest.
 * Use `create(GetFeatureRequestSchema)` to create a new message.
 */
export const GetFeatureRequestSchema: GenMessage<GetFeatureRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_gkehub_v1beta_service, 2);

/**
 * Request message for the `GkeHub.CreateFeature` method.
 *
 * @generated from message google.cloud.gkehub.v1beta.CreateFeatureRequest
 */
export type CreateFeatureRequest = Message<"google.cloud.gkehub.v1beta.CreateFeatureRequest"> & {
  /**
   * The parent (project and location) where the Feature will be created.
   * Specified in the format `projects/*\/locations/*`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The ID of the feature to create.
   *
   * @generated from field: string feature_id = 2;
   */
  featureId: string;

  /**
   * The Feature resource to create.
   *
   * @generated from field: google.cloud.gkehub.v1beta.Feature resource = 3;
   */
  resource?: Feature;

  /**
   * Optional. A request ID to identify requests. Specify a unique request ID
   * so that if you must retry your request, the server will know to ignore
   * the request if it has already been completed. The server will guarantee
   * that for at least 60 minutes after the first request.
   *
   * For example, consider a situation where you make an initial request and
   * the request times out. If you make the request again with the same request
   * ID, the server can check if original operation with the same request ID
   * was received, and if so, will ignore the second request. This prevents
   * clients from accidentally creating duplicate commitments.
   *
   * The request ID must be a valid UUID with the exception that zero UUID is
   * not supported (00000000-0000-0000-0000-000000000000).
   *
   * @generated from field: string request_id = 4;
   */
  requestId: string;
};

/**
 * Describes the message google.cloud.gkehub.v1beta.CreateFeatureRequest.
 * Use `create(CreateFeatureRequestSchema)` to create a new message.
 */
export const CreateFeatureRequestSchema: GenMessage<CreateFeatureRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_gkehub_v1beta_service, 3);

/**
 * Request message for `GkeHub.DeleteFeature` method.
 *
 * @generated from message google.cloud.gkehub.v1beta.DeleteFeatureRequest
 */
export type DeleteFeatureRequest = Message<"google.cloud.gkehub.v1beta.DeleteFeatureRequest"> & {
  /**
   * The Feature resource name in the format
   * `projects/*\/locations/*\/features/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * If set to true, the delete will ignore any outstanding resources for
   * this Feature (that is, `FeatureState.has_resources` is set to true). These
   * resources will NOT be cleaned up or modified in any way.
   *
   * @generated from field: bool force = 2;
   */
  force: boolean;

  /**
   * Optional. A request ID to identify requests. Specify a unique request ID
   * so that if you must retry your request, the server will know to ignore
   * the request if it has already been completed. The server will guarantee
   * that for at least 60 minutes after the first request.
   *
   * For example, consider a situation where you make an initial request and
   * the request times out. If you make the request again with the same request
   * ID, the server can check if original operation with the same request ID
   * was received, and if so, will ignore the second request. This prevents
   * clients from accidentally creating duplicate commitments.
   *
   * The request ID must be a valid UUID with the exception that zero UUID is
   * not supported (00000000-0000-0000-0000-000000000000).
   *
   * @generated from field: string request_id = 3;
   */
  requestId: string;
};

/**
 * Describes the message google.cloud.gkehub.v1beta.DeleteFeatureRequest.
 * Use `create(DeleteFeatureRequestSchema)` to create a new message.
 */
export const DeleteFeatureRequestSchema: GenMessage<DeleteFeatureRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_gkehub_v1beta_service, 4);

/**
 * Request message for `GkeHub.UpdateFeature` method.
 *
 * @generated from message google.cloud.gkehub.v1beta.UpdateFeatureRequest
 */
export type UpdateFeatureRequest = Message<"google.cloud.gkehub.v1beta.UpdateFeatureRequest"> & {
  /**
   * The Feature resource name in the format
   * `projects/*\/locations/*\/features/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Mask of fields to update.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  /**
   * Only fields specified in update_mask are updated.
   * If you specify a field in the update_mask but don't specify its value here
   * that field will be deleted.
   * If you are updating a map field, set the value of a key to null or empty
   * string to delete the key from the map. It's not possible to update a key's
   * value to the empty string.
   * If you specify the update_mask to be a special path "*", fully replaces all
   * user-modifiable fields to match `resource`.
   *
   * @generated from field: google.cloud.gkehub.v1beta.Feature resource = 3;
   */
  resource?: Feature;

  /**
   * Optional. A request ID to identify requests. Specify a unique request ID
   * so that if you must retry your request, the server will know to ignore
   * the request if it has already been completed. The server will guarantee
   * that for at least 60 minutes after the first request.
   *
   * For example, consider a situation where you make an initial request and
   * the request times out. If you make the request again with the same request
   * ID, the server can check if original operation with the same request ID
   * was received, and if so, will ignore the second request. This prevents
   * clients from accidentally creating duplicate commitments.
   *
   * The request ID must be a valid UUID with the exception that zero UUID is
   * not supported (00000000-0000-0000-0000-000000000000).
   *
   * @generated from field: string request_id = 4;
   */
  requestId: string;
};

/**
 * Describes the message google.cloud.gkehub.v1beta.UpdateFeatureRequest.
 * Use `create(UpdateFeatureRequestSchema)` to create a new message.
 */
export const UpdateFeatureRequestSchema: GenMessage<UpdateFeatureRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_gkehub_v1beta_service, 5);

/**
 * Represents the metadata of the long-running operation.
 *
 * @generated from message google.cloud.gkehub.v1beta.OperationMetadata
 */
export type OperationMetadata = Message<"google.cloud.gkehub.v1beta.OperationMetadata"> & {
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
   * @generated from field: string status_detail = 5;
   */
  statusDetail: string;

  /**
   * Output only. Identifies whether the user has requested cancellation
   * of the operation. Operations that have successfully been cancelled
   * have [Operation.error][] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1,
   * corresponding to `Code.CANCELLED`.
   *
   * @generated from field: bool cancel_requested = 6;
   */
  cancelRequested: boolean;

  /**
   * Output only. API version used to start the operation.
   *
   * @generated from field: string api_version = 7;
   */
  apiVersion: string;
};

/**
 * Describes the message google.cloud.gkehub.v1beta.OperationMetadata.
 * Use `create(OperationMetadataSchema)` to create a new message.
 */
export const OperationMetadataSchema: GenMessage<OperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_gkehub_v1beta_service, 6);

/**
 * The GKE Hub service handles the registration of many Kubernetes clusters to
 * Google Cloud, and the management of multi-cluster features over those
 * clusters.
 *
 * The GKE Hub service operates on the following resources:
 *
 * * [Membership][google.cloud.gkehub.v1beta.Membership]
 * * [Feature][google.cloud.gkehub.v1beta.Feature]
 *
 * GKE Hub is currently only available in the global region.
 *
 * **Membership management may be non-trivial:** it is recommended to use one
 * of the Google-provided client libraries or tools where possible when working
 * with Membership resources.
 *
 * @generated from service google.cloud.gkehub.v1beta.GkeHub
 */
export const GkeHub: GenService<{
  /**
   * Lists Features in a given project and location.
   *
   * @generated from rpc google.cloud.gkehub.v1beta.GkeHub.ListFeatures
   */
  listFeatures: {
    methodKind: "unary";
    input: typeof ListFeaturesRequestSchema;
    output: typeof ListFeaturesResponseSchema;
  },
  /**
   * Gets details of a single Feature.
   *
   * @generated from rpc google.cloud.gkehub.v1beta.GkeHub.GetFeature
   */
  getFeature: {
    methodKind: "unary";
    input: typeof GetFeatureRequestSchema;
    output: typeof FeatureSchema;
  },
  /**
   * Adds a new Feature.
   *
   * @generated from rpc google.cloud.gkehub.v1beta.GkeHub.CreateFeature
   */
  createFeature: {
    methodKind: "unary";
    input: typeof CreateFeatureRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Removes a Feature.
   *
   * @generated from rpc google.cloud.gkehub.v1beta.GkeHub.DeleteFeature
   */
  deleteFeature: {
    methodKind: "unary";
    input: typeof DeleteFeatureRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Updates an existing Feature.
   *
   * @generated from rpc google.cloud.gkehub.v1beta.GkeHub.UpdateFeature
   */
  updateFeature: {
    methodKind: "unary";
    input: typeof UpdateFeatureRequestSchema;
    output: typeof OperationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_gkehub_v1beta_service, 0);
