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
// @generated from file google/ads/googleads/v17/services/ad_group_bid_modifier_service.proto (package google.ads.googleads.v17.services, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { ResponseContentTypeEnum_ResponseContentType } from "../enums/response_content_type_pb";
import { file_google_ads_googleads_v17_enums_response_content_type } from "../enums/response_content_type_pb";
import type { AdGroupBidModifier } from "../resources/ad_group_bid_modifier_pb";
import { file_google_ads_googleads_v17_resources_ad_group_bid_modifier } from "../resources/ad_group_bid_modifier_pb";
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
 * Describes the file google/ads/googleads/v17/services/ad_group_bid_modifier_service.proto.
 */
export const file_google_ads_googleads_v17_services_ad_group_bid_modifier_service: GenFile = /*@__PURE__*/
  fileDesc("CkVnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvc2VydmljZXMvYWRfZ3JvdXBfYmlkX21vZGlmaWVyX3NlcnZpY2UucHJvdG8SIWdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcyKxAgogTXV0YXRlQWRHcm91cEJpZE1vZGlmaWVyc1JlcXVlc3QSGAoLY3VzdG9tZXJfaWQYASABKAlCA+BBAhJXCgpvcGVyYXRpb25zGAIgAygLMj4uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnNlcnZpY2VzLkFkR3JvdXBCaWRNb2RpZmllck9wZXJhdGlvbkID4EECEhcKD3BhcnRpYWxfZmFpbHVyZRgDIAEoCBIVCg12YWxpZGF0ZV9vbmx5GAQgASgIEmoKFXJlc3BvbnNlX2NvbnRlbnRfdHlwZRgFIAEoDjJLLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lbnVtcy5SZXNwb25zZUNvbnRlbnRUeXBlRW51bS5SZXNwb25zZUNvbnRlbnRUeXBlIrMCChtBZEdyb3VwQmlkTW9kaWZpZXJPcGVyYXRpb24SLwoLdXBkYXRlX21hc2sYBCABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrEkgKBmNyZWF0ZRgBIAEoCzI2Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5yZXNvdXJjZXMuQWRHcm91cEJpZE1vZGlmaWVySAASSAoGdXBkYXRlGAIgASgLMjYuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlcy5BZEdyb3VwQmlkTW9kaWZpZXJIABJCCgZyZW1vdmUYAyABKAlCMPpBLQorZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0FkR3JvdXBCaWRNb2RpZmllckgAQgsKCW9wZXJhdGlvbiKqAQohTXV0YXRlQWRHcm91cEJpZE1vZGlmaWVyc1Jlc3BvbnNlEjEKFXBhcnRpYWxfZmFpbHVyZV9lcnJvchgDIAEoCzISLmdvb2dsZS5ycGMuU3RhdHVzElIKB3Jlc3VsdHMYAiADKAsyQS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuc2VydmljZXMuTXV0YXRlQWRHcm91cEJpZE1vZGlmaWVyUmVzdWx0IsABCh5NdXRhdGVBZEdyb3VwQmlkTW9kaWZpZXJSZXN1bHQSRwoNcmVzb3VyY2VfbmFtZRgBIAEoCUIw+kEtCitnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vQWRHcm91cEJpZE1vZGlmaWVyElUKFWFkX2dyb3VwX2JpZF9tb2RpZmllchgCIAEoCzI2Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5yZXNvdXJjZXMuQWRHcm91cEJpZE1vZGlmaWVyMuoCChlBZEdyb3VwQmlkTW9kaWZpZXJTZXJ2aWNlEoUCChlNdXRhdGVBZEdyb3VwQmlkTW9kaWZpZXJzEkMuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnNlcnZpY2VzLk11dGF0ZUFkR3JvdXBCaWRNb2RpZmllcnNSZXF1ZXN0GkQuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnNlcnZpY2VzLk11dGF0ZUFkR3JvdXBCaWRNb2RpZmllcnNSZXNwb25zZSJd2kEWY3VzdG9tZXJfaWQsb3BlcmF0aW9uc4LT5JMCPjoBKiI5L3YxNy9jdXN0b21lcnMve2N1c3RvbWVyX2lkPSp9L2FkR3JvdXBCaWRNb2RpZmllcnM6bXV0YXRlGkXKQRhnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb23SQSdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Fkd29yZHNCigIKJWNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuc2VydmljZXNCHkFkR3JvdXBCaWRNb2RpZmllclNlcnZpY2VQcm90b1ABWklnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE3L3NlcnZpY2VzO3NlcnZpY2VzogIDR0FBqgIhR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE3LlNlcnZpY2VzygIhR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE3XFNlcnZpY2Vz6gIlR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE3OjpTZXJ2aWNlc2IGcHJvdG8z", [file_google_ads_googleads_v17_enums_response_content_type, file_google_ads_googleads_v17_resources_ad_group_bid_modifier, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_field_mask, file_google_rpc_status]);

/**
 * Request message for
 * [AdGroupBidModifierService.MutateAdGroupBidModifiers][google.ads.googleads.v17.services.AdGroupBidModifierService.MutateAdGroupBidModifiers].
 *
 * @generated from message google.ads.googleads.v17.services.MutateAdGroupBidModifiersRequest
 */
export type MutateAdGroupBidModifiersRequest = Message<"google.ads.googleads.v17.services.MutateAdGroupBidModifiersRequest"> & {
  /**
   * Required. ID of the customer whose ad group bid modifiers are being
   * modified.
   *
   * @generated from field: string customer_id = 1;
   */
  customerId: string;

  /**
   * Required. The list of operations to perform on individual ad group bid
   * modifiers.
   *
   * @generated from field: repeated google.ads.googleads.v17.services.AdGroupBidModifierOperation operations = 2;
   */
  operations: AdGroupBidModifierOperation[];

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
 * Describes the message google.ads.googleads.v17.services.MutateAdGroupBidModifiersRequest.
 * Use `create(MutateAdGroupBidModifiersRequestSchema)` to create a new message.
 */
export const MutateAdGroupBidModifiersRequestSchema: GenMessage<MutateAdGroupBidModifiersRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_ad_group_bid_modifier_service, 0);

/**
 * A single operation (create, remove, update) on an ad group bid modifier.
 *
 * @generated from message google.ads.googleads.v17.services.AdGroupBidModifierOperation
 */
export type AdGroupBidModifierOperation = Message<"google.ads.googleads.v17.services.AdGroupBidModifierOperation"> & {
  /**
   * FieldMask that determines which resource fields are modified in an update.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 4;
   */
  updateMask?: FieldMask;

  /**
   * The mutate operation.
   *
   * @generated from oneof google.ads.googleads.v17.services.AdGroupBidModifierOperation.operation
   */
  operation: {
    /**
     * Create operation: No resource name is expected for the new ad group bid
     * modifier.
     *
     * @generated from field: google.ads.googleads.v17.resources.AdGroupBidModifier create = 1;
     */
    value: AdGroupBidModifier;
    case: "create";
  } | {
    /**
     * Update operation: The ad group bid modifier is expected to have a valid
     * resource name.
     *
     * @generated from field: google.ads.googleads.v17.resources.AdGroupBidModifier update = 2;
     */
    value: AdGroupBidModifier;
    case: "update";
  } | {
    /**
     * Remove operation: A resource name for the removed ad group bid modifier
     * is expected, in this format:
     *
     * `customers/{customer_id}/adGroupBidModifiers/{ad_group_id}~{criterion_id}`
     *
     * @generated from field: string remove = 3;
     */
    value: string;
    case: "remove";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.ads.googleads.v17.services.AdGroupBidModifierOperation.
 * Use `create(AdGroupBidModifierOperationSchema)` to create a new message.
 */
export const AdGroupBidModifierOperationSchema: GenMessage<AdGroupBidModifierOperation> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_ad_group_bid_modifier_service, 1);

/**
 * Response message for ad group bid modifiers mutate.
 *
 * @generated from message google.ads.googleads.v17.services.MutateAdGroupBidModifiersResponse
 */
export type MutateAdGroupBidModifiersResponse = Message<"google.ads.googleads.v17.services.MutateAdGroupBidModifiersResponse"> & {
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
   * @generated from field: repeated google.ads.googleads.v17.services.MutateAdGroupBidModifierResult results = 2;
   */
  results: MutateAdGroupBidModifierResult[];
};

/**
 * Describes the message google.ads.googleads.v17.services.MutateAdGroupBidModifiersResponse.
 * Use `create(MutateAdGroupBidModifiersResponseSchema)` to create a new message.
 */
export const MutateAdGroupBidModifiersResponseSchema: GenMessage<MutateAdGroupBidModifiersResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_ad_group_bid_modifier_service, 2);

/**
 * The result for the criterion mutate.
 *
 * @generated from message google.ads.googleads.v17.services.MutateAdGroupBidModifierResult
 */
export type MutateAdGroupBidModifierResult = Message<"google.ads.googleads.v17.services.MutateAdGroupBidModifierResult"> & {
  /**
   * Returned for successful operations.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * The mutated ad group bid modifier with only mutable fields after mutate.
   * The field will only be returned when response_content_type is set to
   * "MUTABLE_RESOURCE".
   *
   * @generated from field: google.ads.googleads.v17.resources.AdGroupBidModifier ad_group_bid_modifier = 2;
   */
  adGroupBidModifier?: AdGroupBidModifier;
};

/**
 * Describes the message google.ads.googleads.v17.services.MutateAdGroupBidModifierResult.
 * Use `create(MutateAdGroupBidModifierResultSchema)` to create a new message.
 */
export const MutateAdGroupBidModifierResultSchema: GenMessage<MutateAdGroupBidModifierResult> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_ad_group_bid_modifier_service, 3);

/**
 * Service to manage ad group bid modifiers.
 *
 * @generated from service google.ads.googleads.v17.services.AdGroupBidModifierService
 */
export const AdGroupBidModifierService: GenService<{
  /**
   * Creates, updates, or removes ad group bid modifiers.
   * Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AdGroupBidModifierError]()
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [ContextError]()
   *   [CriterionError]()
   *   [DatabaseError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotEmptyError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [ResourceCountLimitExceededError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *
   * @generated from rpc google.ads.googleads.v17.services.AdGroupBidModifierService.MutateAdGroupBidModifiers
   */
  mutateAdGroupBidModifiers: {
    methodKind: "unary";
    input: typeof MutateAdGroupBidModifiersRequestSchema;
    output: typeof MutateAdGroupBidModifiersResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ads_googleads_v17_services_ad_group_bid_modifier_service, 0);
