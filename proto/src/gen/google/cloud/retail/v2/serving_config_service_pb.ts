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
// @generated from file google/cloud/retail/v2/serving_config_service.proto (package google.cloud.retail.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { ServingConfig, ServingConfigSchema } from "./serving_config_pb";
import { file_google_cloud_retail_v2_serving_config } from "./serving_config_pb";
import type { EmptySchema, FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/retail/v2/serving_config_service.proto.
 */
export const file_google_cloud_retail_v2_serving_config_service: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvY2xvdWQvcmV0YWlsL3YyL3NlcnZpbmdfY29uZmlnX3NlcnZpY2UucHJvdG8SFmdvb2dsZS5jbG91ZC5yZXRhaWwudjIitwEKGkNyZWF0ZVNlcnZpbmdDb25maWdSZXF1ZXN0EjUKBnBhcmVudBgBIAEoCUIl4EEC+kEfCh1yZXRhaWwuZ29vZ2xlYXBpcy5jb20vQ2F0YWxvZxJCCg5zZXJ2aW5nX2NvbmZpZxgCIAEoCzIlLmdvb2dsZS5jbG91ZC5yZXRhaWwudjIuU2VydmluZ0NvbmZpZ0ID4EECEh4KEXNlcnZpbmdfY29uZmlnX2lkGAMgASgJQgPgQQIikQEKGlVwZGF0ZVNlcnZpbmdDb25maWdSZXF1ZXN0EkIKDnNlcnZpbmdfY29uZmlnGAEgASgLMiUuZ29vZ2xlLmNsb3VkLnJldGFpbC52Mi5TZXJ2aW5nQ29uZmlnQgPgQQISLwoLdXBkYXRlX21hc2sYAiABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrIlcKGkRlbGV0ZVNlcnZpbmdDb25maWdSZXF1ZXN0EjkKBG5hbWUYASABKAlCK+BBAvpBJQojcmV0YWlsLmdvb2dsZWFwaXMuY29tL1NlcnZpbmdDb25maWciVAoXR2V0U2VydmluZ0NvbmZpZ1JlcXVlc3QSOQoEbmFtZRgBIAEoCUIr4EEC+kElCiNyZXRhaWwuZ29vZ2xlYXBpcy5jb20vU2VydmluZ0NvbmZpZyKDAQoZTGlzdFNlcnZpbmdDb25maWdzUmVxdWVzdBI1CgZwYXJlbnQYASABKAlCJeBBAvpBHwodcmV0YWlsLmdvb2dsZWFwaXMuY29tL0NhdGFsb2cSFgoJcGFnZV9zaXplGAIgASgFQgPgQQESFwoKcGFnZV90b2tlbhgDIAEoCUID4EEBInUKGkxpc3RTZXJ2aW5nQ29uZmlnc1Jlc3BvbnNlEj4KD3NlcnZpbmdfY29uZmlncxgBIAMoCzIlLmdvb2dsZS5jbG91ZC5yZXRhaWwudjIuU2VydmluZ0NvbmZpZxIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkicQoRQWRkQ29udHJvbFJlcXVlc3QSQwoOc2VydmluZ19jb25maWcYASABKAlCK+BBAvpBJQojcmV0YWlsLmdvb2dsZWFwaXMuY29tL1NlcnZpbmdDb25maWcSFwoKY29udHJvbF9pZBgCIAEoCUID4EECInQKFFJlbW92ZUNvbnRyb2xSZXF1ZXN0EkMKDnNlcnZpbmdfY29uZmlnGAEgASgJQivgQQL6QSUKI3JldGFpbC5nb29nbGVhcGlzLmNvbS9TZXJ2aW5nQ29uZmlnEhcKCmNvbnRyb2xfaWQYAiABKAlCA+BBAjKyDAoUU2VydmluZ0NvbmZpZ1NlcnZpY2US8QEKE0NyZWF0ZVNlcnZpbmdDb25maWcSMi5nb29nbGUuY2xvdWQucmV0YWlsLnYyLkNyZWF0ZVNlcnZpbmdDb25maWdSZXF1ZXN0GiUuZ29vZ2xlLmNsb3VkLnJldGFpbC52Mi5TZXJ2aW5nQ29uZmlnIn/aQSdwYXJlbnQsc2VydmluZ19jb25maWcsc2VydmluZ19jb25maWdfaWSC0+STAk86DnNlcnZpbmdfY29uZmlnIj0vdjIve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2NhdGFsb2dzLyp9L3NlcnZpbmdDb25maWdzEq8BChNEZWxldGVTZXJ2aW5nQ29uZmlnEjIuZ29vZ2xlLmNsb3VkLnJldGFpbC52Mi5EZWxldGVTZXJ2aW5nQ29uZmlnUmVxdWVzdBoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSJM2kEEbmFtZYLT5JMCPyo9L3YyL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovY2F0YWxvZ3MvKi9zZXJ2aW5nQ29uZmlncy8qfRL0AQoTVXBkYXRlU2VydmluZ0NvbmZpZxIyLmdvb2dsZS5jbG91ZC5yZXRhaWwudjIuVXBkYXRlU2VydmluZ0NvbmZpZ1JlcXVlc3QaJS5nb29nbGUuY2xvdWQucmV0YWlsLnYyLlNlcnZpbmdDb25maWcigQHaQRpzZXJ2aW5nX2NvbmZpZyx1cGRhdGVfbWFza4LT5JMCXjoOc2VydmluZ19jb25maWcyTC92Mi97c2VydmluZ19jb25maWcubmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2NhdGFsb2dzLyovc2VydmluZ0NvbmZpZ3MvKn0SuAEKEEdldFNlcnZpbmdDb25maWcSLy5nb29nbGUuY2xvdWQucmV0YWlsLnYyLkdldFNlcnZpbmdDb25maWdSZXF1ZXN0GiUuZ29vZ2xlLmNsb3VkLnJldGFpbC52Mi5TZXJ2aW5nQ29uZmlnIkzaQQRuYW1lgtPkkwI/Ej0vdjIve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9jYXRhbG9ncy8qL3NlcnZpbmdDb25maWdzLyp9EssBChJMaXN0U2VydmluZ0NvbmZpZ3MSMS5nb29nbGUuY2xvdWQucmV0YWlsLnYyLkxpc3RTZXJ2aW5nQ29uZmlnc1JlcXVlc3QaMi5nb29nbGUuY2xvdWQucmV0YWlsLnYyLkxpc3RTZXJ2aW5nQ29uZmlnc1Jlc3BvbnNlIk7aQQZwYXJlbnSC0+STAj8SPS92Mi97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyovY2F0YWxvZ3MvKn0vc2VydmluZ0NvbmZpZ3MSzgEKCkFkZENvbnRyb2wSKS5nb29nbGUuY2xvdWQucmV0YWlsLnYyLkFkZENvbnRyb2xSZXF1ZXN0GiUuZ29vZ2xlLmNsb3VkLnJldGFpbC52Mi5TZXJ2aW5nQ29uZmlnIm7aQQ5zZXJ2aW5nX2NvbmZpZ4LT5JMCVzoBKiJSL3YyL3tzZXJ2aW5nX2NvbmZpZz1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2NhdGFsb2dzLyovc2VydmluZ0NvbmZpZ3MvKn06YWRkQ29udHJvbBLXAQoNUmVtb3ZlQ29udHJvbBIsLmdvb2dsZS5jbG91ZC5yZXRhaWwudjIuUmVtb3ZlQ29udHJvbFJlcXVlc3QaJS5nb29nbGUuY2xvdWQucmV0YWlsLnYyLlNlcnZpbmdDb25maWcicdpBDnNlcnZpbmdfY29uZmlngtPkkwJaOgEqIlUvdjIve3NlcnZpbmdfY29uZmlnPXByb2plY3RzLyovbG9jYXRpb25zLyovY2F0YWxvZ3MvKi9zZXJ2aW5nQ29uZmlncy8qfTpyZW1vdmVDb250cm9sGknKQRVyZXRhaWwuZ29vZ2xlYXBpcy5jb23SQS5odHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Nsb3VkLXBsYXRmb3JtQsQBChpjb20uZ29vZ2xlLmNsb3VkLnJldGFpbC52MkIZU2VydmluZ0NvbmZpZ1NlcnZpY2VQcm90b1ABWjJjbG91ZC5nb29nbGUuY29tL2dvL3JldGFpbC9hcGl2Mi9yZXRhaWxwYjtyZXRhaWxwYqICBlJFVEFJTKoCFkdvb2dsZS5DbG91ZC5SZXRhaWwuVjLKAhZHb29nbGVcQ2xvdWRcUmV0YWlsXFYy6gIZR29vZ2xlOjpDbG91ZDo6UmV0YWlsOjpWMmIGcHJvdG8z", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_retail_v2_serving_config, file_google_protobuf_empty, file_google_protobuf_field_mask]);

/**
 * Request for CreateServingConfig method.
 *
 * @generated from message google.cloud.retail.v2.CreateServingConfigRequest
 */
export type CreateServingConfigRequest = Message<"google.cloud.retail.v2.CreateServingConfigRequest"> & {
  /**
   * Required. Full resource name of parent. Format:
   * `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The ServingConfig to create.
   *
   * @generated from field: google.cloud.retail.v2.ServingConfig serving_config = 2;
   */
  servingConfig?: ServingConfig;

  /**
   * Required. The ID to use for the ServingConfig, which will become the final
   * component of the ServingConfig's resource name.
   *
   * This value should be 4-63 characters, and valid characters
   * are /[a-z][0-9]-_/.
   *
   * @generated from field: string serving_config_id = 3;
   */
  servingConfigId: string;
};

/**
 * Describes the message google.cloud.retail.v2.CreateServingConfigRequest.
 * Use `create(CreateServingConfigRequestSchema)` to create a new message.
 */
export const CreateServingConfigRequestSchema: GenMessage<CreateServingConfigRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2_serving_config_service, 0);

/**
 * Request for UpdateServingConfig method.
 *
 * @generated from message google.cloud.retail.v2.UpdateServingConfigRequest
 */
export type UpdateServingConfigRequest = Message<"google.cloud.retail.v2.UpdateServingConfigRequest"> & {
  /**
   * Required. The ServingConfig to update.
   *
   * @generated from field: google.cloud.retail.v2.ServingConfig serving_config = 1;
   */
  servingConfig?: ServingConfig;

  /**
   * Indicates which fields in the provided
   * [ServingConfig][google.cloud.retail.v2.ServingConfig] to update. The
   * following are NOT supported:
   *
   * * [ServingConfig.name][google.cloud.retail.v2.ServingConfig.name]
   *
   * If not set, all supported fields are updated.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.cloud.retail.v2.UpdateServingConfigRequest.
 * Use `create(UpdateServingConfigRequestSchema)` to create a new message.
 */
export const UpdateServingConfigRequestSchema: GenMessage<UpdateServingConfigRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2_serving_config_service, 1);

/**
 * Request for DeleteServingConfig method.
 *
 * @generated from message google.cloud.retail.v2.DeleteServingConfigRequest
 */
export type DeleteServingConfigRequest = Message<"google.cloud.retail.v2.DeleteServingConfigRequest"> & {
  /**
   * Required. The resource name of the ServingConfig to delete. Format:
   * `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.retail.v2.DeleteServingConfigRequest.
 * Use `create(DeleteServingConfigRequestSchema)` to create a new message.
 */
export const DeleteServingConfigRequestSchema: GenMessage<DeleteServingConfigRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2_serving_config_service, 2);

/**
 * Request for GetServingConfig method.
 *
 * @generated from message google.cloud.retail.v2.GetServingConfigRequest
 */
export type GetServingConfigRequest = Message<"google.cloud.retail.v2.GetServingConfigRequest"> & {
  /**
   * Required. The resource name of the ServingConfig to get. Format:
   * `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.retail.v2.GetServingConfigRequest.
 * Use `create(GetServingConfigRequestSchema)` to create a new message.
 */
export const GetServingConfigRequestSchema: GenMessage<GetServingConfigRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2_serving_config_service, 3);

/**
 * Request for ListServingConfigs method.
 *
 * @generated from message google.cloud.retail.v2.ListServingConfigsRequest
 */
export type ListServingConfigsRequest = Message<"google.cloud.retail.v2.ListServingConfigsRequest"> & {
  /**
   * Required. The catalog resource name. Format:
   * `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. Maximum number of results to return. If unspecified, defaults
   * to 100. If a value greater than 100 is provided, at most 100 results are
   * returned.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. A page token, received from a previous `ListServingConfigs` call.
   * Provide this to retrieve the subsequent page.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.retail.v2.ListServingConfigsRequest.
 * Use `create(ListServingConfigsRequestSchema)` to create a new message.
 */
export const ListServingConfigsRequestSchema: GenMessage<ListServingConfigsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2_serving_config_service, 4);

/**
 * Response for ListServingConfigs method.
 *
 * @generated from message google.cloud.retail.v2.ListServingConfigsResponse
 */
export type ListServingConfigsResponse = Message<"google.cloud.retail.v2.ListServingConfigsResponse"> & {
  /**
   * All the ServingConfigs for a given catalog.
   *
   * @generated from field: repeated google.cloud.retail.v2.ServingConfig serving_configs = 1;
   */
  servingConfigs: ServingConfig[];

  /**
   * Pagination token, if not returned indicates the last page.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.retail.v2.ListServingConfigsResponse.
 * Use `create(ListServingConfigsResponseSchema)` to create a new message.
 */
export const ListServingConfigsResponseSchema: GenMessage<ListServingConfigsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2_serving_config_service, 5);

/**
 * Request for AddControl method.
 *
 * @generated from message google.cloud.retail.v2.AddControlRequest
 */
export type AddControlRequest = Message<"google.cloud.retail.v2.AddControlRequest"> & {
  /**
   * Required. The source ServingConfig resource name . Format:
   * `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`
   *
   * @generated from field: string serving_config = 1;
   */
  servingConfig: string;

  /**
   * Required. The id of the control to apply. Assumed to be in the same catalog
   * as the serving config - if id is not found a NOT_FOUND error is returned.
   *
   * @generated from field: string control_id = 2;
   */
  controlId: string;
};

/**
 * Describes the message google.cloud.retail.v2.AddControlRequest.
 * Use `create(AddControlRequestSchema)` to create a new message.
 */
export const AddControlRequestSchema: GenMessage<AddControlRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2_serving_config_service, 6);

/**
 * Request for RemoveControl method.
 *
 * @generated from message google.cloud.retail.v2.RemoveControlRequest
 */
export type RemoveControlRequest = Message<"google.cloud.retail.v2.RemoveControlRequest"> & {
  /**
   * Required. The source ServingConfig resource name . Format:
   * `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`
   *
   * @generated from field: string serving_config = 1;
   */
  servingConfig: string;

  /**
   * Required. The id of the control to apply. Assumed to be in the same catalog
   * as the serving config.
   *
   * @generated from field: string control_id = 2;
   */
  controlId: string;
};

/**
 * Describes the message google.cloud.retail.v2.RemoveControlRequest.
 * Use `create(RemoveControlRequestSchema)` to create a new message.
 */
export const RemoveControlRequestSchema: GenMessage<RemoveControlRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2_serving_config_service, 7);

/**
 * Service for modifying ServingConfig.
 *
 * @generated from service google.cloud.retail.v2.ServingConfigService
 */
export const ServingConfigService: GenService<{
  /**
   * Creates a ServingConfig.
   *
   * A maximum of 100 [ServingConfig][google.cloud.retail.v2.ServingConfig]s are
   * allowed in a [Catalog][google.cloud.retail.v2.Catalog], otherwise a
   * FAILED_PRECONDITION error is returned.
   *
   * @generated from rpc google.cloud.retail.v2.ServingConfigService.CreateServingConfig
   */
  createServingConfig: {
    methodKind: "unary";
    input: typeof CreateServingConfigRequestSchema;
    output: typeof ServingConfigSchema;
  },
  /**
   * Deletes a ServingConfig.
   *
   * Returns a NotFound error if the ServingConfig does not exist.
   *
   * @generated from rpc google.cloud.retail.v2.ServingConfigService.DeleteServingConfig
   */
  deleteServingConfig: {
    methodKind: "unary";
    input: typeof DeleteServingConfigRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Updates a ServingConfig.
   *
   * @generated from rpc google.cloud.retail.v2.ServingConfigService.UpdateServingConfig
   */
  updateServingConfig: {
    methodKind: "unary";
    input: typeof UpdateServingConfigRequestSchema;
    output: typeof ServingConfigSchema;
  },
  /**
   * Gets a ServingConfig.
   *
   * Returns a NotFound error if the ServingConfig does not exist.
   *
   * @generated from rpc google.cloud.retail.v2.ServingConfigService.GetServingConfig
   */
  getServingConfig: {
    methodKind: "unary";
    input: typeof GetServingConfigRequestSchema;
    output: typeof ServingConfigSchema;
  },
  /**
   * Lists all ServingConfigs linked to this catalog.
   *
   * @generated from rpc google.cloud.retail.v2.ServingConfigService.ListServingConfigs
   */
  listServingConfigs: {
    methodKind: "unary";
    input: typeof ListServingConfigsRequestSchema;
    output: typeof ListServingConfigsResponseSchema;
  },
  /**
   * Enables a Control on the specified ServingConfig.
   * The control is added in the last position of the list of controls
   * it belongs to (e.g. if it's a facet spec control it will be applied
   * in the last position of servingConfig.facetSpecIds)
   * Returns a ALREADY_EXISTS error if the control has already been applied.
   * Returns a FAILED_PRECONDITION error if the addition could exceed maximum
   * number of control allowed for that type of control.
   *
   * @generated from rpc google.cloud.retail.v2.ServingConfigService.AddControl
   */
  addControl: {
    methodKind: "unary";
    input: typeof AddControlRequestSchema;
    output: typeof ServingConfigSchema;
  },
  /**
   * Disables a Control on the specified ServingConfig.
   * The control is removed from the ServingConfig.
   * Returns a NOT_FOUND error if the Control is not enabled for the
   * ServingConfig.
   *
   * @generated from rpc google.cloud.retail.v2.ServingConfigService.RemoveControl
   */
  removeControl: {
    methodKind: "unary";
    input: typeof RemoveControlRequestSchema;
    output: typeof ServingConfigSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_retail_v2_serving_config_service, 0);
