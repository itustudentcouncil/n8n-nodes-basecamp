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
// @generated from file google/ads/googleads/v17/services/asset_set_service.proto (package google.ads.googleads.v17.services, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { ResponseContentTypeEnum_ResponseContentType } from "../enums/response_content_type_pb";
import { file_google_ads_googleads_v17_enums_response_content_type } from "../enums/response_content_type_pb";
import type { AssetSet } from "../resources/asset_set_pb";
import { file_google_ads_googleads_v17_resources_asset_set } from "../resources/asset_set_pb";
import { file_google_api_annotations } from "../../../../api/annotations_pb";
import { file_google_api_client } from "../../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { Status } from "../../../../rpc/status_pb";
import { file_google_rpc_status } from "../../../../rpc/status_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/services/asset_set_service.proto.
 */
export const file_google_ads_googleads_v17_services_asset_set_service: GenFile = /*@__PURE__*/
  fileDesc("Cjlnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvc2VydmljZXMvYXNzZXRfc2V0X3NlcnZpY2UucHJvdG8SIWdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcyKdAgoWTXV0YXRlQXNzZXRTZXRzUmVxdWVzdBIYCgtjdXN0b21lcl9pZBgBIAEoCUID4EECEk0KCm9wZXJhdGlvbnMYAiADKAsyNC5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuc2VydmljZXMuQXNzZXRTZXRPcGVyYXRpb25CA+BBAhIXCg9wYXJ0aWFsX2ZhaWx1cmUYAyABKAgSFQoNdmFsaWRhdGVfb25seRgEIAEoCBJqChVyZXNwb25zZV9jb250ZW50X3R5cGUYBSABKA4ySy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXMuUmVzcG9uc2VDb250ZW50VHlwZUVudW0uUmVzcG9uc2VDb250ZW50VHlwZSKLAgoRQXNzZXRTZXRPcGVyYXRpb24SLwoLdXBkYXRlX21hc2sYBCABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrEj4KBmNyZWF0ZRgBIAEoCzIsLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5yZXNvdXJjZXMuQXNzZXRTZXRIABI+CgZ1cGRhdGUYAiABKAsyLC5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcucmVzb3VyY2VzLkFzc2V0U2V0SAASOAoGcmVtb3ZlGAMgASgJQib6QSMKIWdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9Bc3NldFNldEgAQgsKCW9wZXJhdGlvbiKWAQoXTXV0YXRlQXNzZXRTZXRzUmVzcG9uc2USSAoHcmVzdWx0cxgBIAMoCzI3Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcy5NdXRhdGVBc3NldFNldFJlc3VsdBIxChVwYXJ0aWFsX2ZhaWx1cmVfZXJyb3IYAiABKAsyEi5nb29nbGUucnBjLlN0YXR1cyKWAQoUTXV0YXRlQXNzZXRTZXRSZXN1bHQSPQoNcmVzb3VyY2VfbmFtZRgBIAEoCUIm+kEjCiFnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vQXNzZXRTZXQSPwoJYXNzZXRfc2V0GAIgASgLMiwuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlcy5Bc3NldFNldDK4AgoPQXNzZXRTZXRTZXJ2aWNlEt0BCg9NdXRhdGVBc3NldFNldHMSOS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuc2VydmljZXMuTXV0YXRlQXNzZXRTZXRzUmVxdWVzdBo6Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcy5NdXRhdGVBc3NldFNldHNSZXNwb25zZSJT2kEWY3VzdG9tZXJfaWQsb3BlcmF0aW9uc4LT5JMCNDoBKiIvL3YxNy9jdXN0b21lcnMve2N1c3RvbWVyX2lkPSp9L2Fzc2V0U2V0czptdXRhdGUaRcpBGGdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbdJBJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYWR3b3Jkc0KAAgolY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlc0IUQXNzZXRTZXRTZXJ2aWNlUHJvdG9QAVpJZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNy9zZXJ2aWNlcztzZXJ2aWNlc6ICA0dBQaoCIUdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5TZXJ2aWNlc8oCIUdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxN1xTZXJ2aWNlc+oCJUdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6U2VydmljZXNiBnByb3RvMw", [file_google_ads_googleads_v17_enums_response_content_type, file_google_ads_googleads_v17_resources_asset_set, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_field_mask, file_google_rpc_status]);

/**
 * Request message for
 * [AssetSetService.MutateAssetSets][google.ads.googleads.v17.services.AssetSetService.MutateAssetSets].
 *
 * @generated from message google.ads.googleads.v17.services.MutateAssetSetsRequest
 */
export type MutateAssetSetsRequest = Message<"google.ads.googleads.v17.services.MutateAssetSetsRequest"> & {
  /**
   * Required. The ID of the customer whose asset sets are being modified.
   *
   * @generated from field: string customer_id = 1;
   */
  customerId: string;

  /**
   * Required. The list of operations to perform on individual asset sets.
   *
   * @generated from field: repeated google.ads.googleads.v17.services.AssetSetOperation operations = 2;
   */
  operations: AssetSetOperation[];

  /**
   * If true, successful operations will be carried out and invalid
   * operations will return errors. If false, all operations will be carried
   * out in one transaction if and only if they are all valid.
   * Default is false.
   *
   * @generated from field: bool partial_failure = 3;
   */
  partialFailure: boolean;

  /**
   * If true, the request is validated but not executed. Only errors are
   * returned, not results.
   *
   * @generated from field: bool validate_only = 4;
   */
  validateOnly: boolean;

  /**
   * The response content type setting. Determines whether the mutable resource
   * or just the resource name should be returned post mutation.
   *
   * @generated from field: google.ads.googleads.v17.enums.ResponseContentTypeEnum.ResponseContentType response_content_type = 5;
   */
  responseContentType: ResponseContentTypeEnum_ResponseContentType;
};

/**
 * Describes the message google.ads.googleads.v17.services.MutateAssetSetsRequest.
 * Use `create(MutateAssetSetsRequestSchema)` to create a new message.
 */
export const MutateAssetSetsRequestSchema: GenMessage<MutateAssetSetsRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_asset_set_service, 0);

/**
 * A single operation (create, remove) on an asset set.
 *
 * @generated from message google.ads.googleads.v17.services.AssetSetOperation
 */
export type AssetSetOperation = Message<"google.ads.googleads.v17.services.AssetSetOperation"> & {
  /**
   * FieldMask that determines which resource fields are modified in an update.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 4;
   */
  updateMask?: FieldMask;

  /**
   * The mutate operation.
   *
   * @generated from oneof google.ads.googleads.v17.services.AssetSetOperation.operation
   */
  operation: {
    /**
     * Create operation: No resource name is expected for the new asset set
     *
     * @generated from field: google.ads.googleads.v17.resources.AssetSet create = 1;
     */
    value: AssetSet;
    case: "create";
  } | {
    /**
     * Update operation: The asset set is expected to have a valid resource
     * name.
     *
     * @generated from field: google.ads.googleads.v17.resources.AssetSet update = 2;
     */
    value: AssetSet;
    case: "update";
  } | {
    /**
     * Remove operation: A resource name for the removed asset set is
     * expected, in this format:
     * `customers/{customer_id}/assetSets/{asset_set_id}`
     *
     * @generated from field: string remove = 3;
     */
    value: string;
    case: "remove";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.ads.googleads.v17.services.AssetSetOperation.
 * Use `create(AssetSetOperationSchema)` to create a new message.
 */
export const AssetSetOperationSchema: GenMessage<AssetSetOperation> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_asset_set_service, 1);

/**
 * Response message for an asset set mutate.
 *
 * @generated from message google.ads.googleads.v17.services.MutateAssetSetsResponse
 */
export type MutateAssetSetsResponse = Message<"google.ads.googleads.v17.services.MutateAssetSetsResponse"> & {
  /**
   * All results for the mutate.
   *
   * @generated from field: repeated google.ads.googleads.v17.services.MutateAssetSetResult results = 1;
   */
  results: MutateAssetSetResult[];

  /**
   * Errors that pertain to operation failures in the partial failure mode.
   * Returned only when partial_failure = true and all errors occur inside the
   * operations. If any errors occur outside the operations (for example, auth
   * errors), we return an RPC level error.
   *
   * @generated from field: google.rpc.Status partial_failure_error = 2;
   */
  partialFailureError?: Status;
};

/**
 * Describes the message google.ads.googleads.v17.services.MutateAssetSetsResponse.
 * Use `create(MutateAssetSetsResponseSchema)` to create a new message.
 */
export const MutateAssetSetsResponseSchema: GenMessage<MutateAssetSetsResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_asset_set_service, 2);

/**
 * The result for the asset set mutate.
 *
 * @generated from message google.ads.googleads.v17.services.MutateAssetSetResult
 */
export type MutateAssetSetResult = Message<"google.ads.googleads.v17.services.MutateAssetSetResult"> & {
  /**
   * Returned for successful operations.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * The mutated asset set with only mutable fields after mutate. The field will
   * only be returned when response_content_type is set to "MUTABLE_RESOURCE".
   *
   * @generated from field: google.ads.googleads.v17.resources.AssetSet asset_set = 2;
   */
  assetSet?: AssetSet;
};

/**
 * Describes the message google.ads.googleads.v17.services.MutateAssetSetResult.
 * Use `create(MutateAssetSetResultSchema)` to create a new message.
 */
export const MutateAssetSetResultSchema: GenMessage<MutateAssetSetResult> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_asset_set_service, 3);

/**
 * Service to manage asset set
 *
 * @generated from service google.ads.googleads.v17.services.AssetSetService
 */
export const AssetSetService: GenService<{
  /**
   * Creates, updates or removes asset sets. Operation statuses are
   * returned.
   *
   * @generated from rpc google.ads.googleads.v17.services.AssetSetService.MutateAssetSets
   */
  mutateAssetSets: {
    methodKind: "unary";
    input: typeof MutateAssetSetsRequestSchema;
    output: typeof MutateAssetSetsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ads_googleads_v17_services_asset_set_service, 0);
