// Copyright 2023 Google LLC
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
// @generated from file google/ads/googleads/v16/services/ad_group_service.proto (package google.ads.googleads.v16.services, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { ResponseContentTypeEnum_ResponseContentType } from "../enums/response_content_type_pb";
import { file_google_ads_googleads_v16_enums_response_content_type } from "../enums/response_content_type_pb";
import type { AdGroup } from "../resources/ad_group_pb";
import { file_google_ads_googleads_v16_resources_ad_group } from "../resources/ad_group_pb";
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
 * Describes the file google/ads/googleads/v16/services/ad_group_service.proto.
 */
export const file_google_ads_googleads_v16_services_ad_group_service: GenFile = /*@__PURE__*/
  fileDesc("Cjhnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvc2VydmljZXMvYWRfZ3JvdXBfc2VydmljZS5wcm90bxIhZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnNlcnZpY2VzIpsCChVNdXRhdGVBZEdyb3Vwc1JlcXVlc3QSGAoLY3VzdG9tZXJfaWQYASABKAlCA+BBAhJMCgpvcGVyYXRpb25zGAIgAygLMjMuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnNlcnZpY2VzLkFkR3JvdXBPcGVyYXRpb25CA+BBAhIXCg9wYXJ0aWFsX2ZhaWx1cmUYAyABKAgSFQoNdmFsaWRhdGVfb25seRgEIAEoCBJqChVyZXNwb25zZV9jb250ZW50X3R5cGUYBSABKA4ySy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuUmVzcG9uc2VDb250ZW50VHlwZUVudW0uUmVzcG9uc2VDb250ZW50VHlwZSKHAgoQQWRHcm91cE9wZXJhdGlvbhIvCgt1cGRhdGVfbWFzaxgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2sSPQoGY3JlYXRlGAEgASgLMisuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnJlc291cmNlcy5BZEdyb3VwSAASPQoGdXBkYXRlGAIgASgLMisuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnJlc291cmNlcy5BZEdyb3VwSAASNwoGcmVtb3ZlGAMgASgJQiX6QSIKIGdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9BZEdyb3VwSABCCwoJb3BlcmF0aW9uIpQBChZNdXRhdGVBZEdyb3Vwc1Jlc3BvbnNlEjEKFXBhcnRpYWxfZmFpbHVyZV9lcnJvchgDIAEoCzISLmdvb2dsZS5ycGMuU3RhdHVzEkcKB3Jlc3VsdHMYAiADKAsyNi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuc2VydmljZXMuTXV0YXRlQWRHcm91cFJlc3VsdCKSAQoTTXV0YXRlQWRHcm91cFJlc3VsdBI8Cg1yZXNvdXJjZV9uYW1lGAEgASgJQiX6QSIKIGdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9BZEdyb3VwEj0KCGFkX2dyb3VwGAIgASgLMisuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnJlc291cmNlcy5BZEdyb3VwMrMCCg5BZEdyb3VwU2VydmljZRLZAQoOTXV0YXRlQWRHcm91cHMSOC5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuc2VydmljZXMuTXV0YXRlQWRHcm91cHNSZXF1ZXN0GjkuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnNlcnZpY2VzLk11dGF0ZUFkR3JvdXBzUmVzcG9uc2UiUtpBFmN1c3RvbWVyX2lkLG9wZXJhdGlvbnOC0+STAjM6ASoiLi92MTYvY3VzdG9tZXJzL3tjdXN0b21lcl9pZD0qfS9hZEdyb3VwczptdXRhdGUaRcpBGGdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbdJBJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYWR3b3Jkc0L/AQolY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5zZXJ2aWNlc0ITQWRHcm91cFNlcnZpY2VQcm90b1ABWklnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L3NlcnZpY2VzO3NlcnZpY2VzogIDR0FBqgIhR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LlNlcnZpY2VzygIhR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XFNlcnZpY2Vz6gIlR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE2OjpTZXJ2aWNlc2IGcHJvdG8z", [file_google_ads_googleads_v16_enums_response_content_type, file_google_ads_googleads_v16_resources_ad_group, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_field_mask, file_google_rpc_status]);

/**
 * Request message for
 * [AdGroupService.MutateAdGroups][google.ads.googleads.v16.services.AdGroupService.MutateAdGroups].
 *
 * @generated from message google.ads.googleads.v16.services.MutateAdGroupsRequest
 */
export type MutateAdGroupsRequest = Message<"google.ads.googleads.v16.services.MutateAdGroupsRequest"> & {
  /**
   * Required. The ID of the customer whose ad groups are being modified.
   *
   * @generated from field: string customer_id = 1;
   */
  customerId: string;

  /**
   * Required. The list of operations to perform on individual ad groups.
   *
   * @generated from field: repeated google.ads.googleads.v16.services.AdGroupOperation operations = 2;
   */
  operations: AdGroupOperation[];

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
   * @generated from field: google.ads.googleads.v16.enums.ResponseContentTypeEnum.ResponseContentType response_content_type = 5;
   */
  responseContentType: ResponseContentTypeEnum_ResponseContentType;
};

/**
 * Describes the message google.ads.googleads.v16.services.MutateAdGroupsRequest.
 * Use `create(MutateAdGroupsRequestSchema)` to create a new message.
 */
export const MutateAdGroupsRequestSchema: GenMessage<MutateAdGroupsRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_ad_group_service, 0);

/**
 * A single operation (create, update, remove) on an ad group.
 *
 * @generated from message google.ads.googleads.v16.services.AdGroupOperation
 */
export type AdGroupOperation = Message<"google.ads.googleads.v16.services.AdGroupOperation"> & {
  /**
   * FieldMask that determines which resource fields are modified in an update.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 4;
   */
  updateMask?: FieldMask;

  /**
   * The mutate operation.
   *
   * @generated from oneof google.ads.googleads.v16.services.AdGroupOperation.operation
   */
  operation: {
    /**
     * Create operation: No resource name is expected for the new ad group.
     *
     * @generated from field: google.ads.googleads.v16.resources.AdGroup create = 1;
     */
    value: AdGroup;
    case: "create";
  } | {
    /**
     * Update operation: The ad group is expected to have a valid resource name.
     *
     * @generated from field: google.ads.googleads.v16.resources.AdGroup update = 2;
     */
    value: AdGroup;
    case: "update";
  } | {
    /**
     * Remove operation: A resource name for the removed ad group is expected,
     * in this format:
     *
     * `customers/{customer_id}/adGroups/{ad_group_id}`
     *
     * @generated from field: string remove = 3;
     */
    value: string;
    case: "remove";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.ads.googleads.v16.services.AdGroupOperation.
 * Use `create(AdGroupOperationSchema)` to create a new message.
 */
export const AdGroupOperationSchema: GenMessage<AdGroupOperation> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_ad_group_service, 1);

/**
 * Response message for an ad group mutate.
 *
 * @generated from message google.ads.googleads.v16.services.MutateAdGroupsResponse
 */
export type MutateAdGroupsResponse = Message<"google.ads.googleads.v16.services.MutateAdGroupsResponse"> & {
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
   * @generated from field: repeated google.ads.googleads.v16.services.MutateAdGroupResult results = 2;
   */
  results: MutateAdGroupResult[];
};

/**
 * Describes the message google.ads.googleads.v16.services.MutateAdGroupsResponse.
 * Use `create(MutateAdGroupsResponseSchema)` to create a new message.
 */
export const MutateAdGroupsResponseSchema: GenMessage<MutateAdGroupsResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_ad_group_service, 2);

/**
 * The result for the ad group mutate.
 *
 * @generated from message google.ads.googleads.v16.services.MutateAdGroupResult
 */
export type MutateAdGroupResult = Message<"google.ads.googleads.v16.services.MutateAdGroupResult"> & {
  /**
   * Returned for successful operations.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * The mutated ad group with only mutable fields after mutate. The field will
   * only be returned when response_content_type is set to "MUTABLE_RESOURCE".
   *
   * @generated from field: google.ads.googleads.v16.resources.AdGroup ad_group = 2;
   */
  adGroup?: AdGroup;
};

/**
 * Describes the message google.ads.googleads.v16.services.MutateAdGroupResult.
 * Use `create(MutateAdGroupResultSchema)` to create a new message.
 */
export const MutateAdGroupResultSchema: GenMessage<MutateAdGroupResult> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_ad_group_service, 3);

/**
 * Service to manage ad groups.
 *
 * @generated from service google.ads.googleads.v16.services.AdGroupService
 */
export const AdGroupService: GenService<{
  /**
   * Creates, updates, or removes ad groups. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AdGroupError]()
   *   [AdxError]()
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [BiddingError]()
   *   [BiddingStrategyError]()
   *   [DatabaseError]()
   *   [DateError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [ListOperationError]()
   *   [MultiplierError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotEmptyError]()
   *   [NullError]()
   *   [OperationAccessDeniedError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [ResourceCountLimitExceededError]()
   *   [SettingError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *   [UrlFieldError]()
   *
   * @generated from rpc google.ads.googleads.v16.services.AdGroupService.MutateAdGroups
   */
  mutateAdGroups: {
    methodKind: "unary";
    input: typeof MutateAdGroupsRequestSchema;
    output: typeof MutateAdGroupsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ads_googleads_v16_services_ad_group_service, 0);
