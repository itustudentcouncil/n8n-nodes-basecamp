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
// @generated from file google/ads/googleads/v16/services/custom_conversion_goal_service.proto (package google.ads.googleads.v16.services, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { ResponseContentTypeEnum_ResponseContentType } from "../enums/response_content_type_pb";
import { file_google_ads_googleads_v16_enums_response_content_type } from "../enums/response_content_type_pb";
import type { CustomConversionGoal } from "../resources/custom_conversion_goal_pb";
import { file_google_ads_googleads_v16_resources_custom_conversion_goal } from "../resources/custom_conversion_goal_pb";
import { file_google_api_annotations } from "../../../../api/annotations_pb";
import { file_google_api_client } from "../../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/services/custom_conversion_goal_service.proto.
 */
export const file_google_ads_googleads_v16_services_custom_conversion_goal_service: GenFile = /*@__PURE__*/
  fileDesc("CkZnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvc2VydmljZXMvY3VzdG9tX2NvbnZlcnNpb25fZ29hbF9zZXJ2aWNlLnByb3RvEiFnb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuc2VydmljZXMinAIKIk11dGF0ZUN1c3RvbUNvbnZlcnNpb25Hb2Fsc1JlcXVlc3QSGAoLY3VzdG9tZXJfaWQYASABKAlCA+BBAhJZCgpvcGVyYXRpb25zGAIgAygLMkAuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnNlcnZpY2VzLkN1c3RvbUNvbnZlcnNpb25Hb2FsT3BlcmF0aW9uQgPgQQISFQoNdmFsaWRhdGVfb25seRgDIAEoCBJqChVyZXNwb25zZV9jb250ZW50X3R5cGUYBCABKA4ySy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuUmVzcG9uc2VDb250ZW50VHlwZUVudW0uUmVzcG9uc2VDb250ZW50VHlwZSK7AgodQ3VzdG9tQ29udmVyc2lvbkdvYWxPcGVyYXRpb24SLwoLdXBkYXRlX21hc2sYBCABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrEkoKBmNyZWF0ZRgBIAEoCzI4Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXMuQ3VzdG9tQ29udmVyc2lvbkdvYWxIABJKCgZ1cGRhdGUYAiABKAsyOC5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYucmVzb3VyY2VzLkN1c3RvbUNvbnZlcnNpb25Hb2FsSAASRAoGcmVtb3ZlGAMgASgJQjL6QS8KLWdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9DdXN0b21Db252ZXJzaW9uR29hbEgAQgsKCW9wZXJhdGlvbiJ7CiNNdXRhdGVDdXN0b21Db252ZXJzaW9uR29hbHNSZXNwb25zZRJUCgdyZXN1bHRzGAEgAygLMkMuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnNlcnZpY2VzLk11dGF0ZUN1c3RvbUNvbnZlcnNpb25Hb2FsUmVzdWx0IscBCiBNdXRhdGVDdXN0b21Db252ZXJzaW9uR29hbFJlc3VsdBJJCg1yZXNvdXJjZV9uYW1lGAEgASgJQjL6QS8KLWdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9DdXN0b21Db252ZXJzaW9uR29hbBJYChZjdXN0b21fY29udmVyc2lvbl9nb2FsGAIgASgLMjguZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnJlc291cmNlcy5DdXN0b21Db252ZXJzaW9uR29hbDL0AgobQ3VzdG9tQ29udmVyc2lvbkdvYWxTZXJ2aWNlEo0CChtNdXRhdGVDdXN0b21Db252ZXJzaW9uR29hbHMSRS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuc2VydmljZXMuTXV0YXRlQ3VzdG9tQ29udmVyc2lvbkdvYWxzUmVxdWVzdBpGLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5zZXJ2aWNlcy5NdXRhdGVDdXN0b21Db252ZXJzaW9uR29hbHNSZXNwb25zZSJf2kEWY3VzdG9tZXJfaWQsb3BlcmF0aW9uc4LT5JMCQDoBKiI7L3YxNi9jdXN0b21lcnMve2N1c3RvbWVyX2lkPSp9L2N1c3RvbUNvbnZlcnNpb25Hb2FsczptdXRhdGUaRcpBGGdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbdJBJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYWR3b3Jkc0KMAgolY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5zZXJ2aWNlc0IgQ3VzdG9tQ29udmVyc2lvbkdvYWxTZXJ2aWNlUHJvdG9QAVpJZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNi9zZXJ2aWNlcztzZXJ2aWNlc6ICA0dBQaoCIUdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNi5TZXJ2aWNlc8oCIUdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxNlxTZXJ2aWNlc+oCJUdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6U2VydmljZXNiBnByb3RvMw", [file_google_ads_googleads_v16_enums_response_content_type, file_google_ads_googleads_v16_resources_custom_conversion_goal, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_field_mask]);

/**
 * Request message for
 * [CustomConversionGoalService.MutateCustomConversionGoals][google.ads.googleads.v16.services.CustomConversionGoalService.MutateCustomConversionGoals].
 *
 * @generated from message google.ads.googleads.v16.services.MutateCustomConversionGoalsRequest
 */
export type MutateCustomConversionGoalsRequest = Message<"google.ads.googleads.v16.services.MutateCustomConversionGoalsRequest"> & {
  /**
   * Required. The ID of the customer whose custom conversion goals are being
   * modified.
   *
   * @generated from field: string customer_id = 1;
   */
  customerId: string;

  /**
   * Required. The list of operations to perform on individual custom conversion
   * goal.
   *
   * @generated from field: repeated google.ads.googleads.v16.services.CustomConversionGoalOperation operations = 2;
   */
  operations: CustomConversionGoalOperation[];

  /**
   * If true, the request is validated but not executed. Only errors are
   * returned, not results.
   *
   * @generated from field: bool validate_only = 3;
   */
  validateOnly: boolean;

  /**
   * The response content type setting. Determines whether the mutable resource
   * or just the resource name should be returned post mutation.
   *
   * @generated from field: google.ads.googleads.v16.enums.ResponseContentTypeEnum.ResponseContentType response_content_type = 4;
   */
  responseContentType: ResponseContentTypeEnum_ResponseContentType;
};

/**
 * Describes the message google.ads.googleads.v16.services.MutateCustomConversionGoalsRequest.
 * Use `create(MutateCustomConversionGoalsRequestSchema)` to create a new message.
 */
export const MutateCustomConversionGoalsRequestSchema: GenMessage<MutateCustomConversionGoalsRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_custom_conversion_goal_service, 0);

/**
 * A single operation (create, remove) on a custom conversion goal.
 *
 * @generated from message google.ads.googleads.v16.services.CustomConversionGoalOperation
 */
export type CustomConversionGoalOperation = Message<"google.ads.googleads.v16.services.CustomConversionGoalOperation"> & {
  /**
   * FieldMask that determines which resource fields are modified in an update.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 4;
   */
  updateMask?: FieldMask;

  /**
   * The mutate operation.
   *
   * @generated from oneof google.ads.googleads.v16.services.CustomConversionGoalOperation.operation
   */
  operation: {
    /**
     * Create operation: No resource name is expected for the new custom
     * conversion goal
     *
     * @generated from field: google.ads.googleads.v16.resources.CustomConversionGoal create = 1;
     */
    value: CustomConversionGoal;
    case: "create";
  } | {
    /**
     * Update operation: The custom conversion goal is expected to have a
     * valid resource name.
     *
     * @generated from field: google.ads.googleads.v16.resources.CustomConversionGoal update = 2;
     */
    value: CustomConversionGoal;
    case: "update";
  } | {
    /**
     * Remove operation: A resource name for the removed custom conversion goal
     * is expected, in this format:
     *
     * 'customers/{customer_id}/conversionActions/{ConversionGoal.custom_goal_config.conversion_type_ids}'
     *
     * @generated from field: string remove = 3;
     */
    value: string;
    case: "remove";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.ads.googleads.v16.services.CustomConversionGoalOperation.
 * Use `create(CustomConversionGoalOperationSchema)` to create a new message.
 */
export const CustomConversionGoalOperationSchema: GenMessage<CustomConversionGoalOperation> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_custom_conversion_goal_service, 1);

/**
 * Response message for a custom conversion goal mutate.
 *
 * @generated from message google.ads.googleads.v16.services.MutateCustomConversionGoalsResponse
 */
export type MutateCustomConversionGoalsResponse = Message<"google.ads.googleads.v16.services.MutateCustomConversionGoalsResponse"> & {
  /**
   * All results for the mutate.
   *
   * @generated from field: repeated google.ads.googleads.v16.services.MutateCustomConversionGoalResult results = 1;
   */
  results: MutateCustomConversionGoalResult[];
};

/**
 * Describes the message google.ads.googleads.v16.services.MutateCustomConversionGoalsResponse.
 * Use `create(MutateCustomConversionGoalsResponseSchema)` to create a new message.
 */
export const MutateCustomConversionGoalsResponseSchema: GenMessage<MutateCustomConversionGoalsResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_custom_conversion_goal_service, 2);

/**
 * The result for the custom conversion goal mutate.
 *
 * @generated from message google.ads.googleads.v16.services.MutateCustomConversionGoalResult
 */
export type MutateCustomConversionGoalResult = Message<"google.ads.googleads.v16.services.MutateCustomConversionGoalResult"> & {
  /**
   * Returned for successful operations.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * The mutated CustomConversionGoal with only mutable fields after mutate.
   * The field will only be returned when response_content_type is set to
   * "MUTABLE_RESOURCE".
   *
   * @generated from field: google.ads.googleads.v16.resources.CustomConversionGoal custom_conversion_goal = 2;
   */
  customConversionGoal?: CustomConversionGoal;
};

/**
 * Describes the message google.ads.googleads.v16.services.MutateCustomConversionGoalResult.
 * Use `create(MutateCustomConversionGoalResultSchema)` to create a new message.
 */
export const MutateCustomConversionGoalResultSchema: GenMessage<MutateCustomConversionGoalResult> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_services_custom_conversion_goal_service, 3);

/**
 * Service to manage custom conversion goal.
 *
 * @generated from service google.ads.googleads.v16.services.CustomConversionGoalService
 */
export const CustomConversionGoalService: GenService<{
  /**
   * Creates, updates or removes custom conversion goals. Operation statuses
   * are returned.
   *
   * @generated from rpc google.ads.googleads.v16.services.CustomConversionGoalService.MutateCustomConversionGoals
   */
  mutateCustomConversionGoals: {
    methodKind: "unary";
    input: typeof MutateCustomConversionGoalsRequestSchema;
    output: typeof MutateCustomConversionGoalsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ads_googleads_v16_services_custom_conversion_goal_service, 0);
