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
// @generated from file google/cloud/aiplatform/v1/llm_utility_service.proto (package google.cloud.aiplatform.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Content } from "./content_pb";
import { file_google_cloud_aiplatform_v1_content } from "./content_pb";
import type { CountTokensRequestSchema, CountTokensResponseSchema } from "./prediction_service_pb";
import { file_google_cloud_aiplatform_v1_prediction_service } from "./prediction_service_pb";
import type { Value } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1/llm_utility_service.proto.
 */
export const file_google_cloud_aiplatform_v1_llm_utility_service: GenFile = /*@__PURE__*/
  fileDesc("CjRnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MS9sbG1fdXRpbGl0eV9zZXJ2aWNlLnByb3RvEhpnb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MSLUAQoUQ29tcHV0ZVRva2Vuc1JlcXVlc3QSPAoIZW5kcG9pbnQYASABKAlCKuBBAvpBJAoiYWlwbGF0Zm9ybS5nb29nbGVhcGlzLmNvbS9FbmRwb2ludBIuCglpbnN0YW5jZXMYAiADKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWVCA+BBARISCgVtb2RlbBgDIAEoCUID4EEBEjoKCGNvbnRlbnRzGAQgAygLMiMuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuQ29udGVudEID4EEBIkIKClRva2Vuc0luZm8SDgoGdG9rZW5zGAEgAygMEhEKCXRva2VuX2lkcxgCIAMoAxIRCgRyb2xlGAMgASgJQgPgQQEiVAoVQ29tcHV0ZVRva2Vuc1Jlc3BvbnNlEjsKC3Rva2Vuc19pbmZvGAEgAygLMiYuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuVG9rZW5zSW5mbzL4BgoRTGxtVXRpbGl0eVNlcnZpY2USgQMKC0NvdW50VG9rZW5zEi4uZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuQ291bnRUb2tlbnNSZXF1ZXN0Gi8uZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuQ291bnRUb2tlbnNSZXNwb25zZSKQAtpBEmVuZHBvaW50LGluc3RhbmNlc4LT5JMC9AE6ASpaTDoBKiJHL3YxL3tlbmRwb2ludD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL3B1Ymxpc2hlcnMvKi9tb2RlbHMvKn06Y291bnRUb2tlbnNaKzoBKiImL3YxL3tlbmRwb2ludD1lbmRwb2ludHMvKn06Y291bnRUb2tlbnNaNToBKiIwL3YxL3tlbmRwb2ludD1wdWJsaXNoZXJzLyovbW9kZWxzLyp9OmNvdW50VG9rZW5zIj0vdjEve2VuZHBvaW50PXByb2plY3RzLyovbG9jYXRpb25zLyovZW5kcG9pbnRzLyp9OmNvdW50VG9rZW5zEo8DCg1Db21wdXRlVG9rZW5zEjAuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuQ29tcHV0ZVRva2Vuc1JlcXVlc3QaMS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5Db21wdXRlVG9rZW5zUmVzcG9uc2UimALaQRJlbmRwb2ludCxpbnN0YW5jZXOC0+STAvwBOgEqWk46ASoiSS92MS97ZW5kcG9pbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9wdWJsaXNoZXJzLyovbW9kZWxzLyp9OmNvbXB1dGVUb2tlbnNaLToBKiIoL3YxL3tlbmRwb2ludD1lbmRwb2ludHMvKn06Y29tcHV0ZVRva2Vuc1o3OgEqIjIvdjEve2VuZHBvaW50PXB1Ymxpc2hlcnMvKi9tb2RlbHMvKn06Y29tcHV0ZVRva2VucyI/L3YxL3tlbmRwb2ludD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2VuZHBvaW50cy8qfTpjb21wdXRlVG9rZW5zGk3KQRlhaXBsYXRmb3JtLmdvb2dsZWFwaXMuY29t0kEuaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jbG91ZC1wbGF0Zm9ybULUAQoeY29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxQhZMbG1VdGlsaXR5U2VydmljZVByb3RvUAFaPmNsb3VkLmdvb2dsZS5jb20vZ28vYWlwbGF0Zm9ybS9hcGl2MS9haXBsYXRmb3JtcGI7YWlwbGF0Zm9ybXBiqgIaR29vZ2xlLkNsb3VkLkFJUGxhdGZvcm0uVjHKAhpHb29nbGVcQ2xvdWRcQUlQbGF0Zm9ybVxWMeoCHUdvb2dsZTo6Q2xvdWQ6OkFJUGxhdGZvcm06OlYxYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_aiplatform_v1_content, file_google_cloud_aiplatform_v1_prediction_service, file_google_protobuf_struct]);

/**
 * Request message for ComputeTokens RPC call.
 *
 * @generated from message google.cloud.aiplatform.v1.ComputeTokensRequest
 */
export type ComputeTokensRequest = Message<"google.cloud.aiplatform.v1.ComputeTokensRequest"> & {
  /**
   * Required. The name of the Endpoint requested to get lists of tokens and
   * token ids.
   *
   * @generated from field: string endpoint = 1;
   */
  endpoint: string;

  /**
   * Optional. The instances that are the input to token computing API call.
   * Schema is identical to the prediction schema of the text model, even for
   * the non-text models, like chat models, or Codey models.
   *
   * @generated from field: repeated google.protobuf.Value instances = 2;
   */
  instances: Value[];

  /**
   * Optional. The name of the publisher model requested to serve the
   * prediction. Format:
   * projects/{project}/locations/{location}/publishers/*\/models/*
   *
   * @generated from field: string model = 3;
   */
  model: string;

  /**
   * Optional. Input content.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1.Content contents = 4;
   */
  contents: Content[];
};

/**
 * Describes the message google.cloud.aiplatform.v1.ComputeTokensRequest.
 * Use `create(ComputeTokensRequestSchema)` to create a new message.
 */
export const ComputeTokensRequestSchema: GenMessage<ComputeTokensRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_llm_utility_service, 0);

/**
 * Tokens info with a list of tokens and the corresponding list of token ids.
 *
 * @generated from message google.cloud.aiplatform.v1.TokensInfo
 */
export type TokensInfo = Message<"google.cloud.aiplatform.v1.TokensInfo"> & {
  /**
   * A list of tokens from the input.
   *
   * @generated from field: repeated bytes tokens = 1;
   */
  tokens: Uint8Array[];

  /**
   * A list of token ids from the input.
   *
   * @generated from field: repeated int64 token_ids = 2;
   */
  tokenIds: bigint[];

  /**
   * Optional. Optional fields for the role from the corresponding Content.
   *
   * @generated from field: string role = 3;
   */
  role: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1.TokensInfo.
 * Use `create(TokensInfoSchema)` to create a new message.
 */
export const TokensInfoSchema: GenMessage<TokensInfo> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_llm_utility_service, 1);

/**
 * Response message for ComputeTokens RPC call.
 *
 * @generated from message google.cloud.aiplatform.v1.ComputeTokensResponse
 */
export type ComputeTokensResponse = Message<"google.cloud.aiplatform.v1.ComputeTokensResponse"> & {
  /**
   * Lists of tokens info from the input. A ComputeTokensRequest could have
   * multiple instances with a prompt in each instance. We also need to return
   * lists of tokens info for the request with multiple instances.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1.TokensInfo tokens_info = 1;
   */
  tokensInfo: TokensInfo[];
};

/**
 * Describes the message google.cloud.aiplatform.v1.ComputeTokensResponse.
 * Use `create(ComputeTokensResponseSchema)` to create a new message.
 */
export const ComputeTokensResponseSchema: GenMessage<ComputeTokensResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_llm_utility_service, 2);

/**
 * Service for LLM related utility functions.
 *
 * @generated from service google.cloud.aiplatform.v1.LlmUtilityService
 */
export const LlmUtilityService: GenService<{
  /**
   * Perform a token counting.
   *
   * @generated from rpc google.cloud.aiplatform.v1.LlmUtilityService.CountTokens
   */
  countTokens: {
    methodKind: "unary";
    input: typeof CountTokensRequestSchema;
    output: typeof CountTokensResponseSchema;
  },
  /**
   * Return a list of tokens based on the input text.
   *
   * @generated from rpc google.cloud.aiplatform.v1.LlmUtilityService.ComputeTokens
   */
  computeTokens: {
    methodKind: "unary";
    input: typeof ComputeTokensRequestSchema;
    output: typeof ComputeTokensResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_aiplatform_v1_llm_utility_service, 0);
