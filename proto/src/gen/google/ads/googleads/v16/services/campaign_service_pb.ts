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
// @generated from file google/ads/googleads/v16/services/campaign_service.proto (package google.ads.googleads.v16.services, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { ResponseContentTypeEnum_ResponseContentType } from "../enums/response_content_type_pb";
import { file_google_ads_googleads_v16_enums_response_content_type } from "../enums/response_content_type_pb";
import type { Campaign } from "../resources/campaign_pb";
import { file_google_ads_googleads_v16_resources_campaign } from "../resources/campaign_pb";
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
 * Describes the file google/ads/googleads/v16/services/campaign_service.proto.
 */
export const file_google_ads_googleads_v16_services_campaign_service: GenFile = /*@__PURE__*/
  fileDesc("Cjhnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvc2VydmljZXMvY2FtcGFpZ25fc2VydmljZS5wcm90bxIhZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnNlcnZpY2VzIp0CChZNdXRhdGVDYW1wYWlnbnNSZXF1ZXN0EhgKC2N1c3RvbWVyX2lkGAEgASgJQgPgQQISTQoKb3BlcmF0aW9ucxgCIAMoCzI0Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5zZXJ2aWNlcy5DYW1wYWlnbk9wZXJhdGlvbkID4EECEhcKD3BhcnRpYWxfZmFpbHVyZRgDIAEoCBIVCg12YWxpZGF0ZV9vbmx5GAQgASgIEmoKFXJlc3BvbnNlX2NvbnRlbnRfdHlwZRgFIAEoDjJLLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtcy5SZXNwb25zZUNvbnRlbnRUeXBlRW51bS5SZXNwb25zZUNvbnRlbnRUeXBlIosCChFDYW1wYWlnbk9wZXJhdGlvbhIvCgt1cGRhdGVfbWFzaxgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2sSPgoGY3JlYXRlGAEgASgLMiwuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnJlc291cmNlcy5DYW1wYWlnbkgAEj4KBnVwZGF0ZRgCIAEoCzIsLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXMuQ2FtcGFpZ25IABI4CgZyZW1vdmUYAyABKAlCJvpBIwohZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0NhbXBhaWduSABCCwoJb3BlcmF0aW9uIpYBChdNdXRhdGVDYW1wYWlnbnNSZXNwb25zZRIxChVwYXJ0aWFsX2ZhaWx1cmVfZXJyb3IYAyABKAsyEi5nb29nbGUucnBjLlN0YXR1cxJICgdyZXN1bHRzGAIgAygLMjcuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnNlcnZpY2VzLk11dGF0ZUNhbXBhaWduUmVzdWx0IpUBChRNdXRhdGVDYW1wYWlnblJlc3VsdBI9Cg1yZXNvdXJjZV9uYW1lGAEgASgJQib6QSMKIWdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9DYW1wYWlnbhI+CghjYW1wYWlnbhgCIAEoCzIsLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXMuQ2FtcGFpZ24yuAIKD0NhbXBhaWduU2VydmljZRLdAQoPTXV0YXRlQ2FtcGFpZ25zEjkuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnNlcnZpY2VzLk11dGF0ZUNhbXBhaWduc1JlcXVlc3QaOi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuc2VydmljZXMuTXV0YXRlQ2FtcGFpZ25zUmVzcG9uc2UiU9pBFmN1c3RvbWVyX2lkLG9wZXJhdGlvbnOC0+STAjQ6ASoiLy92MTYvY3VzdG9tZXJzL3tjdXN0b21lcl9pZD0qfS9jYW1wYWlnbnM6bXV0YXRlGkXKQRhnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb23SQSdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Fkd29yZHNCgAIKJWNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuc2VydmljZXNCFENhbXBhaWduU2VydmljZVByb3RvUAFaSWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTYvc2VydmljZXM7c2VydmljZXOiAgNHQUGqAiFHb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuU2VydmljZXPKAiFHb29nbGVcQWRzXEdvb2dsZUFkc1xWMTZcU2VydmljZXPqAiVHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTY6OlNlcnZpY2VzYgZwcm90bzM", [file_google_ads_googleads_v16_enums_response_content_type, file_google_ads_googleads_v16_resources_campaign, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_field_mask, file_google_rpc_status]);

/**
 * Request message for
 * [CampaignService.MutateCampaigns][google.ads.googleads.v16.services.CampaignService.MutateCampaigns].
 *
 * @generated from message google.ads.googleads.v16.services.MutateCampaignsRequest
 */
export type MutateCampaignsRequest = Message<"google.ads.googleads.v16.services.MutateCampaignsRequest"> & {
  /**
   * Required. The ID of the customer whose campaigns are being modified.
   *
   * @generated from field: string customer_id = 1;
   */
  customerId: string;

  /**
   * Required. The list of operations to perform on individual campaigns.
   *
   * @generated from field: repeated google.ads.googleads.v16.services.CampaignOperation operations = 2;
   */
  operations: CampaignOperation[];

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
 * Describes the message google.ads.googleads.v16.services.MutateCampaignsRequest.
 * Use `create(MutateCampaignsRequestSchema)` to create a new message.
 */
export const MutateCampaignsRequestSchema: GenMessage<MutateCampaignsRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_campaign_service, 0);

/**
 * A single operation (create, update, remove) on a campaign.
 *
 * @generated from message google.ads.googleads.v16.services.CampaignOperation
 */
export type CampaignOperation = Message<"google.ads.googleads.v16.services.CampaignOperation"> & {
  /**
   * FieldMask that determines which resource fields are modified in an update.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 4;
   */
  updateMask?: FieldMask;

  /**
   * The mutate operation.
   *
   * @generated from oneof google.ads.googleads.v16.services.CampaignOperation.operation
   */
  operation: {
    /**
     * Create operation: No resource name is expected for the new campaign.
     *
     * @generated from field: google.ads.googleads.v16.resources.Campaign create = 1;
     */
    value: Campaign;
    case: "create";
  } | {
    /**
     * Update operation: The campaign is expected to have a valid
     * resource name.
     *
     * @generated from field: google.ads.googleads.v16.resources.Campaign update = 2;
     */
    value: Campaign;
    case: "update";
  } | {
    /**
     * Remove operation: A resource name for the removed campaign is
     * expected, in this format:
     *
     * `customers/{customer_id}/campaigns/{campaign_id}`
     *
     * @generated from field: string remove = 3;
     */
    value: string;
    case: "remove";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.ads.googleads.v16.services.CampaignOperation.
 * Use `create(CampaignOperationSchema)` to create a new message.
 */
export const CampaignOperationSchema: GenMessage<CampaignOperation> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_campaign_service, 1);

/**
 * Response message for campaign mutate.
 *
 * @generated from message google.ads.googleads.v16.services.MutateCampaignsResponse
 */
export type MutateCampaignsResponse = Message<"google.ads.googleads.v16.services.MutateCampaignsResponse"> & {
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
   * @generated from field: repeated google.ads.googleads.v16.services.MutateCampaignResult results = 2;
   */
  results: MutateCampaignResult[];
};

/**
 * Describes the message google.ads.googleads.v16.services.MutateCampaignsResponse.
 * Use `create(MutateCampaignsResponseSchema)` to create a new message.
 */
export const MutateCampaignsResponseSchema: GenMessage<MutateCampaignsResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_campaign_service, 2);

/**
 * The result for the campaign mutate.
 *
 * @generated from message google.ads.googleads.v16.services.MutateCampaignResult
 */
export type MutateCampaignResult = Message<"google.ads.googleads.v16.services.MutateCampaignResult"> & {
  /**
   * Returned for successful operations.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * The mutated campaign with only mutable fields after mutate. The field will
   * only be returned when response_content_type is set to "MUTABLE_RESOURCE".
   *
   * @generated from field: google.ads.googleads.v16.resources.Campaign campaign = 2;
   */
  campaign?: Campaign;
};

/**
 * Describes the message google.ads.googleads.v16.services.MutateCampaignResult.
 * Use `create(MutateCampaignResultSchema)` to create a new message.
 */
export const MutateCampaignResultSchema: GenMessage<MutateCampaignResult> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_campaign_service, 3);

/**
 * Service to manage campaigns.
 *
 * @generated from service google.ads.googleads.v16.services.CampaignService
 */
export const CampaignService: GenService<{
  /**
   * Creates, updates, or removes campaigns. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AdxError]()
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [BiddingError]()
   *   [BiddingStrategyError]()
   *   [CampaignBudgetError]()
   *   [CampaignError]()
   *   [ContextError]()
   *   [DatabaseError]()
   *   [DateError]()
   *   [DateRangeError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [ListOperationError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotAllowlistedError]()
   *   [NotEmptyError]()
   *   [NullError]()
   *   [OperationAccessDeniedError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RegionCodeError]()
   *   [RequestError]()
   *   [ResourceCountLimitExceededError]()
   *   [SettingError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *   [UrlFieldError]()
   *
   * @generated from rpc google.ads.googleads.v16.services.CampaignService.MutateCampaigns
   */
  mutateCampaigns: {
    methodKind: "unary";
    input: typeof MutateCampaignsRequestSchema;
    output: typeof MutateCampaignsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ads_googleads_v16_services_campaign_service, 0);
