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
// @generated from file google/ads/googleads/v17/services/asset_service.proto (package google.ads.googleads.v17.services, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { ResponseContentTypeEnum_ResponseContentType } from "../enums/response_content_type_pb";
import { file_google_ads_googleads_v17_enums_response_content_type } from "../enums/response_content_type_pb";
import type { Asset } from "../resources/asset_pb";
import { file_google_ads_googleads_v17_resources_asset } from "../resources/asset_pb";
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
 * Describes the file google/ads/googleads/v17/services/asset_service.proto.
 */
export const file_google_ads_googleads_v17_services_asset_service: GenFile = /*@__PURE__*/
  fileDesc("CjVnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvc2VydmljZXMvYXNzZXRfc2VydmljZS5wcm90bxIhZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnNlcnZpY2VzIpcCChNNdXRhdGVBc3NldHNSZXF1ZXN0EhgKC2N1c3RvbWVyX2lkGAEgASgJQgPgQQISSgoKb3BlcmF0aW9ucxgCIAMoCzIxLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcy5Bc3NldE9wZXJhdGlvbkID4EECEhcKD3BhcnRpYWxfZmFpbHVyZRgFIAEoCBJqChVyZXNwb25zZV9jb250ZW50X3R5cGUYAyABKA4ySy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXMuUmVzcG9uc2VDb250ZW50VHlwZUVudW0uUmVzcG9uc2VDb250ZW50VHlwZRIVCg12YWxpZGF0ZV9vbmx5GAQgASgIIsgBCg5Bc3NldE9wZXJhdGlvbhIvCgt1cGRhdGVfbWFzaxgDIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2sSOwoGY3JlYXRlGAEgASgLMikuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlcy5Bc3NldEgAEjsKBnVwZGF0ZRgCIAEoCzIpLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5yZXNvdXJjZXMuQXNzZXRIAEILCglvcGVyYXRpb24ikAEKFE11dGF0ZUFzc2V0c1Jlc3BvbnNlEjEKFXBhcnRpYWxfZmFpbHVyZV9lcnJvchgDIAEoCzISLmdvb2dsZS5ycGMuU3RhdHVzEkUKB3Jlc3VsdHMYAiADKAsyNC5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuc2VydmljZXMuTXV0YXRlQXNzZXRSZXN1bHQiiQEKEU11dGF0ZUFzc2V0UmVzdWx0EjoKDXJlc291cmNlX25hbWUYASABKAlCI/pBIAoeZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0Fzc2V0EjgKBWFzc2V0GAIgASgLMikuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlcy5Bc3NldDKpAgoMQXNzZXRTZXJ2aWNlEtEBCgxNdXRhdGVBc3NldHMSNi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuc2VydmljZXMuTXV0YXRlQXNzZXRzUmVxdWVzdBo3Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcy5NdXRhdGVBc3NldHNSZXNwb25zZSJQ2kEWY3VzdG9tZXJfaWQsb3BlcmF0aW9uc4LT5JMCMToBKiIsL3YxNy9jdXN0b21lcnMve2N1c3RvbWVyX2lkPSp9L2Fzc2V0czptdXRhdGUaRcpBGGdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbdJBJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYWR3b3Jkc0L9AQolY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlc0IRQXNzZXRTZXJ2aWNlUHJvdG9QAVpJZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNy9zZXJ2aWNlcztzZXJ2aWNlc6ICA0dBQaoCIUdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5TZXJ2aWNlc8oCIUdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxN1xTZXJ2aWNlc+oCJUdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6U2VydmljZXNiBnByb3RvMw", [file_google_ads_googleads_v17_enums_response_content_type, file_google_ads_googleads_v17_resources_asset, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_field_mask, file_google_rpc_status]);

/**
 * Request message for
 * [AssetService.MutateAssets][google.ads.googleads.v17.services.AssetService.MutateAssets]
 *
 * @generated from message google.ads.googleads.v17.services.MutateAssetsRequest
 */
export type MutateAssetsRequest = Message<"google.ads.googleads.v17.services.MutateAssetsRequest"> & {
  /**
   * Required. The ID of the customer whose assets are being modified.
   *
   * @generated from field: string customer_id = 1;
   */
  customerId: string;

  /**
   * Required. The list of operations to perform on individual assets.
   *
   * @generated from field: repeated google.ads.googleads.v17.services.AssetOperation operations = 2;
   */
  operations: AssetOperation[];

  /**
   * If true, successful operations will be carried out and invalid
   * operations will return errors. If false, all operations will be carried
   * out in one transaction if and only if they are all valid.
   * Default is false.
   *
   * @generated from field: bool partial_failure = 5;
   */
  partialFailure: boolean;

  /**
   * The response content type setting. Determines whether the mutable resource
   * or just the resource name should be returned post mutation.
   *
   * @generated from field: google.ads.googleads.v17.enums.ResponseContentTypeEnum.ResponseContentType response_content_type = 3;
   */
  responseContentType: ResponseContentTypeEnum_ResponseContentType;

  /**
   * If true, the request is validated but not executed. Only errors are
   * returned, not results.
   *
   * @generated from field: bool validate_only = 4;
   */
  validateOnly: boolean;
};

/**
 * Describes the message google.ads.googleads.v17.services.MutateAssetsRequest.
 * Use `create(MutateAssetsRequestSchema)` to create a new message.
 */
export const MutateAssetsRequestSchema: GenMessage<MutateAssetsRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_asset_service, 0);

/**
 * A single operation to create an asset. Supported asset types are
 * YoutubeVideoAsset, MediaBundleAsset, ImageAsset, LeadFormAsset,
 * LocationAsset, and ImageAsset. TextAsset can be created with an Ad inline,
 * but it can also be created apart from an Ad like other assets.
 *
 * @generated from message google.ads.googleads.v17.services.AssetOperation
 */
export type AssetOperation = Message<"google.ads.googleads.v17.services.AssetOperation"> & {
  /**
   * FieldMask that determines which resource fields are modified in an update.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 3;
   */
  updateMask?: FieldMask;

  /**
   * The mutate operation.
   *
   * @generated from oneof google.ads.googleads.v17.services.AssetOperation.operation
   */
  operation: {
    /**
     * Create operation: No resource name is expected for the new asset.
     *
     * @generated from field: google.ads.googleads.v17.resources.Asset create = 1;
     */
    value: Asset;
    case: "create";
  } | {
    /**
     * Update operation: The asset is expected to have a valid resource name in
     * this format:
     *
     * `customers/{customer_id}/assets/{asset_id}`
     *
     * @generated from field: google.ads.googleads.v17.resources.Asset update = 2;
     */
    value: Asset;
    case: "update";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.ads.googleads.v17.services.AssetOperation.
 * Use `create(AssetOperationSchema)` to create a new message.
 */
export const AssetOperationSchema: GenMessage<AssetOperation> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_asset_service, 1);

/**
 * Response message for an asset mutate.
 *
 * @generated from message google.ads.googleads.v17.services.MutateAssetsResponse
 */
export type MutateAssetsResponse = Message<"google.ads.googleads.v17.services.MutateAssetsResponse"> & {
  /**
   * Errors that pertain to operation failures in the partial failure mode.
   * Returned only when partial_failure = true and all errors occur inside the
   * operations. If any errors occur outside the operations (for example, auth
   * errors), we return an RPC level error.
   *
   * @generated from field: google.rpc.Status partial_failure_error = 3;
   */
  partialFailureError?: Status;

  /**
   * All results for the mutate.
   *
   * @generated from field: repeated google.ads.googleads.v17.services.MutateAssetResult results = 2;
   */
  results: MutateAssetResult[];
};

/**
 * Describes the message google.ads.googleads.v17.services.MutateAssetsResponse.
 * Use `create(MutateAssetsResponseSchema)` to create a new message.
 */
export const MutateAssetsResponseSchema: GenMessage<MutateAssetsResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_asset_service, 2);

/**
 * The result for the asset mutate.
 *
 * @generated from message google.ads.googleads.v17.services.MutateAssetResult
 */
export type MutateAssetResult = Message<"google.ads.googleads.v17.services.MutateAssetResult"> & {
  /**
   * The resource name returned for successful operations.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * The mutated asset with only mutable fields after mutate. The field will
   * only be returned when response_content_type is set to "MUTABLE_RESOURCE".
   *
   * @generated from field: google.ads.googleads.v17.resources.Asset asset = 2;
   */
  asset?: Asset;
};

/**
 * Describes the message google.ads.googleads.v17.services.MutateAssetResult.
 * Use `create(MutateAssetResultSchema)` to create a new message.
 */
export const MutateAssetResultSchema: GenMessage<MutateAssetResult> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_asset_service, 3);

/**
 * Service to manage assets. Asset types can be created with AssetService are
 * YoutubeVideoAsset, MediaBundleAsset and ImageAsset. TextAsset should be
 * created with Ad inline.
 *
 * @generated from service google.ads.googleads.v17.services.AssetService
 */
export const AssetService: GenService<{
  /**
   * Creates assets. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AssetError]()
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CollectionSizeError]()
   *   [CurrencyCodeError]()
   *   [DatabaseError]()
   *   [DateError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [ListOperationError]()
   *   [MediaUploadError]()
   *   [MutateError]()
   *   [NotAllowlistedError]()
   *   [NotEmptyError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *   [UrlFieldError]()
   *   [YoutubeVideoRegistrationError]()
   *
   * @generated from rpc google.ads.googleads.v17.services.AssetService.MutateAssets
   */
  mutateAssets: {
    methodKind: "unary";
    input: typeof MutateAssetsRequestSchema;
    output: typeof MutateAssetsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ads_googleads_v17_services_asset_service, 0);
