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
// @generated from file google/ads/googleads/v17/services/campaign_bid_modifier_service.proto (package google.ads.googleads.v17.services, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { ResponseContentTypeEnum_ResponseContentType } from "../enums/response_content_type_pb";
import { file_google_ads_googleads_v17_enums_response_content_type } from "../enums/response_content_type_pb";
import type { CampaignBidModifier } from "../resources/campaign_bid_modifier_pb";
import { file_google_ads_googleads_v17_resources_campaign_bid_modifier } from "../resources/campaign_bid_modifier_pb";
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
 * Describes the file google/ads/googleads/v17/services/campaign_bid_modifier_service.proto.
 */
export const file_google_ads_googleads_v17_services_campaign_bid_modifier_service: GenFile = /*@__PURE__*/
  fileDesc("CkVnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvc2VydmljZXMvY2FtcGFpZ25fYmlkX21vZGlmaWVyX3NlcnZpY2UucHJvdG8SIWdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcyKzAgohTXV0YXRlQ2FtcGFpZ25CaWRNb2RpZmllcnNSZXF1ZXN0EhgKC2N1c3RvbWVyX2lkGAEgASgJQgPgQQISWAoKb3BlcmF0aW9ucxgCIAMoCzI/Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcy5DYW1wYWlnbkJpZE1vZGlmaWVyT3BlcmF0aW9uQgPgQQISFwoPcGFydGlhbF9mYWlsdXJlGAMgASgIEhUKDXZhbGlkYXRlX29ubHkYBCABKAgSagoVcmVzcG9uc2VfY29udGVudF90eXBlGAUgASgOMksuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LmVudW1zLlJlc3BvbnNlQ29udGVudFR5cGVFbnVtLlJlc3BvbnNlQ29udGVudFR5cGUitwIKHENhbXBhaWduQmlkTW9kaWZpZXJPcGVyYXRpb24SLwoLdXBkYXRlX21hc2sYBCABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrEkkKBmNyZWF0ZRgBIAEoCzI3Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5yZXNvdXJjZXMuQ2FtcGFpZ25CaWRNb2RpZmllckgAEkkKBnVwZGF0ZRgCIAEoCzI3Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5yZXNvdXJjZXMuQ2FtcGFpZ25CaWRNb2RpZmllckgAEkMKBnJlbW92ZRgDIAEoCUIx+kEuCixnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vQ2FtcGFpZ25CaWRNb2RpZmllckgAQgsKCW9wZXJhdGlvbiKsAQoiTXV0YXRlQ2FtcGFpZ25CaWRNb2RpZmllcnNSZXNwb25zZRIxChVwYXJ0aWFsX2ZhaWx1cmVfZXJyb3IYAyABKAsyEi5nb29nbGUucnBjLlN0YXR1cxJTCgdyZXN1bHRzGAIgAygLMkIuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnNlcnZpY2VzLk11dGF0ZUNhbXBhaWduQmlkTW9kaWZpZXJSZXN1bHQiwwEKH011dGF0ZUNhbXBhaWduQmlkTW9kaWZpZXJSZXN1bHQSSAoNcmVzb3VyY2VfbmFtZRgBIAEoCUIx+kEuCixnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vQ2FtcGFpZ25CaWRNb2RpZmllchJWChVjYW1wYWlnbl9iaWRfbW9kaWZpZXIYAiABKAsyNy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcucmVzb3VyY2VzLkNhbXBhaWduQmlkTW9kaWZpZXIy7wIKGkNhbXBhaWduQmlkTW9kaWZpZXJTZXJ2aWNlEokCChpNdXRhdGVDYW1wYWlnbkJpZE1vZGlmaWVycxJELmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcy5NdXRhdGVDYW1wYWlnbkJpZE1vZGlmaWVyc1JlcXVlc3QaRS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuc2VydmljZXMuTXV0YXRlQ2FtcGFpZ25CaWRNb2RpZmllcnNSZXNwb25zZSJe2kEWY3VzdG9tZXJfaWQsb3BlcmF0aW9uc4LT5JMCPzoBKiI6L3YxNy9jdXN0b21lcnMve2N1c3RvbWVyX2lkPSp9L2NhbXBhaWduQmlkTW9kaWZpZXJzOm11dGF0ZRpFykEYZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29t0kEnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9hZHdvcmRzQosCCiVjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnNlcnZpY2VzQh9DYW1wYWlnbkJpZE1vZGlmaWVyU2VydmljZVByb3RvUAFaSWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTcvc2VydmljZXM7c2VydmljZXOiAgNHQUGqAiFHb29nbGUuQWRzLkdvb2dsZUFkcy5WMTcuU2VydmljZXPKAiFHb29nbGVcQWRzXEdvb2dsZUFkc1xWMTdcU2VydmljZXPqAiVHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTc6OlNlcnZpY2VzYgZwcm90bzM", [file_google_ads_googleads_v17_enums_response_content_type, file_google_ads_googleads_v17_resources_campaign_bid_modifier, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_field_mask, file_google_rpc_status]);

/**
 * Request message for
 * [CampaignBidModifierService.MutateCampaignBidModifiers][google.ads.googleads.v17.services.CampaignBidModifierService.MutateCampaignBidModifiers].
 *
 * @generated from message google.ads.googleads.v17.services.MutateCampaignBidModifiersRequest
 */
export type MutateCampaignBidModifiersRequest = Message<"google.ads.googleads.v17.services.MutateCampaignBidModifiersRequest"> & {
  /**
   * Required. ID of the customer whose campaign bid modifiers are being
   * modified.
   *
   * @generated from field: string customer_id = 1;
   */
  customerId: string;

  /**
   * Required. The list of operations to perform on individual campaign bid
   * modifiers.
   *
   * @generated from field: repeated google.ads.googleads.v17.services.CampaignBidModifierOperation operations = 2;
   */
  operations: CampaignBidModifierOperation[];

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
 * Describes the message google.ads.googleads.v17.services.MutateCampaignBidModifiersRequest.
 * Use `create(MutateCampaignBidModifiersRequestSchema)` to create a new message.
 */
export const MutateCampaignBidModifiersRequestSchema: GenMessage<MutateCampaignBidModifiersRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_campaign_bid_modifier_service, 0);

/**
 * A single operation (create, remove, update) on a campaign bid modifier.
 *
 * @generated from message google.ads.googleads.v17.services.CampaignBidModifierOperation
 */
export type CampaignBidModifierOperation = Message<"google.ads.googleads.v17.services.CampaignBidModifierOperation"> & {
  /**
   * FieldMask that determines which resource fields are modified in an update.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 4;
   */
  updateMask?: FieldMask;

  /**
   * The mutate operation.
   *
   * @generated from oneof google.ads.googleads.v17.services.CampaignBidModifierOperation.operation
   */
  operation: {
    /**
     * Create operation: No resource name is expected for the new campaign bid
     * modifier.
     *
     * @generated from field: google.ads.googleads.v17.resources.CampaignBidModifier create = 1;
     */
    value: CampaignBidModifier;
    case: "create";
  } | {
    /**
     * Update operation: The campaign bid modifier is expected to have a valid
     * resource name.
     *
     * @generated from field: google.ads.googleads.v17.resources.CampaignBidModifier update = 2;
     */
    value: CampaignBidModifier;
    case: "update";
  } | {
    /**
     * Remove operation: A resource name for the removed campaign bid modifier
     * is expected, in this format:
     *
     * `customers/{customer_id}/CampaignBidModifiers/{campaign_id}~{criterion_id}`
     *
     * @generated from field: string remove = 3;
     */
    value: string;
    case: "remove";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.ads.googleads.v17.services.CampaignBidModifierOperation.
 * Use `create(CampaignBidModifierOperationSchema)` to create a new message.
 */
export const CampaignBidModifierOperationSchema: GenMessage<CampaignBidModifierOperation> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_campaign_bid_modifier_service, 1);

/**
 * Response message for campaign bid modifiers mutate.
 *
 * @generated from message google.ads.googleads.v17.services.MutateCampaignBidModifiersResponse
 */
export type MutateCampaignBidModifiersResponse = Message<"google.ads.googleads.v17.services.MutateCampaignBidModifiersResponse"> & {
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
   * @generated from field: repeated google.ads.googleads.v17.services.MutateCampaignBidModifierResult results = 2;
   */
  results: MutateCampaignBidModifierResult[];
};

/**
 * Describes the message google.ads.googleads.v17.services.MutateCampaignBidModifiersResponse.
 * Use `create(MutateCampaignBidModifiersResponseSchema)` to create a new message.
 */
export const MutateCampaignBidModifiersResponseSchema: GenMessage<MutateCampaignBidModifiersResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_campaign_bid_modifier_service, 2);

/**
 * The result for the criterion mutate.
 *
 * @generated from message google.ads.googleads.v17.services.MutateCampaignBidModifierResult
 */
export type MutateCampaignBidModifierResult = Message<"google.ads.googleads.v17.services.MutateCampaignBidModifierResult"> & {
  /**
   * Returned for successful operations.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * The mutated campaign bid modifier with only mutable fields after mutate.
   * The field will only be returned when response_content_type is set to
   * "MUTABLE_RESOURCE".
   *
   * @generated from field: google.ads.googleads.v17.resources.CampaignBidModifier campaign_bid_modifier = 2;
   */
  campaignBidModifier?: CampaignBidModifier;
};

/**
 * Describes the message google.ads.googleads.v17.services.MutateCampaignBidModifierResult.
 * Use `create(MutateCampaignBidModifierResultSchema)` to create a new message.
 */
export const MutateCampaignBidModifierResultSchema: GenMessage<MutateCampaignBidModifierResult> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_campaign_bid_modifier_service, 3);

/**
 * Service to manage campaign bid modifiers.
 *
 * @generated from service google.ads.googleads.v17.services.CampaignBidModifierService
 */
export const CampaignBidModifierService: GenService<{
  /**
   * Creates, updates, or removes campaign bid modifiers.
   * Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [ContextError]()
   *   [CriterionError]()
   *   [DatabaseError]()
   *   [DateError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotEmptyError]()
   *   [NullError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *
   * @generated from rpc google.ads.googleads.v17.services.CampaignBidModifierService.MutateCampaignBidModifiers
   */
  mutateCampaignBidModifiers: {
    methodKind: "unary";
    input: typeof MutateCampaignBidModifiersRequestSchema;
    output: typeof MutateCampaignBidModifiersResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ads_googleads_v17_services_campaign_bid_modifier_service, 0);
