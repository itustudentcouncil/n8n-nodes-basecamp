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
// @generated from file google/ads/googleads/v17/services/local_services_lead_service.proto (package google.ads.googleads.v17.services, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../../api/annotations_pb";
import { file_google_api_client } from "../../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Status } from "../../../../rpc/status_pb";
import { file_google_rpc_status } from "../../../../rpc/status_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/services/local_services_lead_service.proto.
 */
export const file_google_ads_googleads_v17_services_local_services_lead_service: GenFile = /*@__PURE__*/
  fileDesc("CkNnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvc2VydmljZXMvbG9jYWxfc2VydmljZXNfbGVhZF9zZXJ2aWNlLnByb3RvEiFnb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuc2VydmljZXMihgEKHUFwcGVuZExlYWRDb252ZXJzYXRpb25SZXF1ZXN0EhgKC2N1c3RvbWVyX2lkGAEgASgJQgPgQQISSwoNY29udmVyc2F0aW9ucxgCIAMoCzIvLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcy5Db252ZXJzYXRpb25CA+BBAiJwCh5BcHBlbmRMZWFkQ29udmVyc2F0aW9uUmVzcG9uc2USTgoJcmVzcG9uc2VzGAEgAygLMjYuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnNlcnZpY2VzLkNvbnZlcnNhdGlvbk9yRXJyb3JCA+BBAiJyCgxDb252ZXJzYXRpb24STwoTbG9jYWxfc2VydmljZXNfbGVhZBgBIAEoCUIy4EEC+kEsCipnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vTG9jYWxTZXJ2aWNlc0xlYWQSEQoEdGV4dBgCIAEoCUID4EECIpsBChNDb252ZXJzYXRpb25PckVycm9yEioKIGxvY2FsX3NlcnZpY2VzX2xlYWRfY29udmVyc2F0aW9uGAEgASgJSAASMwoVcGFydGlhbF9mYWlsdXJlX2Vycm9yGAIgASgLMhIuZ29vZ2xlLnJwYy5TdGF0dXNIAEIjCiFhcHBlbmRfbGVhZF9jb252ZXJzYXRpb25fcmVzcG9uc2Uy7QIKGExvY2FsU2VydmljZXNMZWFkU2VydmljZRKJAgoWQXBwZW5kTGVhZENvbnZlcnNhdGlvbhJALmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcy5BcHBlbmRMZWFkQ29udmVyc2F0aW9uUmVxdWVzdBpBLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlcy5BcHBlbmRMZWFkQ29udmVyc2F0aW9uUmVzcG9uc2UiatpBGWN1c3RvbWVyX2lkLGNvbnZlcnNhdGlvbnOC0+STAkg6ASoiQy92MTcvY3VzdG9tZXJzL3tjdXN0b21lcl9pZD0qfS9sb2NhbFNlcnZpY2VzOmFwcGVuZExlYWRDb252ZXJzYXRpb24aRcpBGGdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbdJBJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYWR3b3Jkc0KJAgolY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5zZXJ2aWNlc0IdTG9jYWxTZXJ2aWNlc0xlYWRTZXJ2aWNlUHJvdG9QAVpJZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNy9zZXJ2aWNlcztzZXJ2aWNlc6ICA0dBQaoCIUdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5TZXJ2aWNlc8oCIUdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxN1xTZXJ2aWNlc+oCJUdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6U2VydmljZXNiBnByb3RvMw", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_rpc_status]);

/**
 * Request message for
 * [LocalServicesLeadService.AppendLeadConversation][google.ads.googleads.v17.services.LocalServicesLeadService.AppendLeadConversation].
 *
 * @generated from message google.ads.googleads.v17.services.AppendLeadConversationRequest
 */
export type AppendLeadConversationRequest = Message<"google.ads.googleads.v17.services.AppendLeadConversationRequest"> & {
  /**
   * Required. The Id of the customer which owns the leads onto which the
   * conversations will be appended.
   *
   * @generated from field: string customer_id = 1;
   */
  customerId: string;

  /**
   * Required. Conversations that are being appended.
   *
   * @generated from field: repeated google.ads.googleads.v17.services.Conversation conversations = 2;
   */
  conversations: Conversation[];
};

/**
 * Describes the message google.ads.googleads.v17.services.AppendLeadConversationRequest.
 * Use `create(AppendLeadConversationRequestSchema)` to create a new message.
 */
export const AppendLeadConversationRequestSchema: GenMessage<AppendLeadConversationRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_local_services_lead_service, 0);

/**
 * Response message for
 * [LocalServicesLeadService.AppendLeadConversation][google.ads.googleads.v17.services.LocalServicesLeadService.AppendLeadConversation].
 *
 * @generated from message google.ads.googleads.v17.services.AppendLeadConversationResponse
 */
export type AppendLeadConversationResponse = Message<"google.ads.googleads.v17.services.AppendLeadConversationResponse"> & {
  /**
   * Required. List of append conversation operation results.
   *
   * @generated from field: repeated google.ads.googleads.v17.services.ConversationOrError responses = 1;
   */
  responses: ConversationOrError[];
};

/**
 * Describes the message google.ads.googleads.v17.services.AppendLeadConversationResponse.
 * Use `create(AppendLeadConversationResponseSchema)` to create a new message.
 */
export const AppendLeadConversationResponseSchema: GenMessage<AppendLeadConversationResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_local_services_lead_service, 1);

/**
 * Details of the conversation that needs to be appended.
 *
 * @generated from message google.ads.googleads.v17.services.Conversation
 */
export type Conversation = Message<"google.ads.googleads.v17.services.Conversation"> & {
  /**
   * Required. The resource name of the local services lead that the
   * conversation should be applied to.
   *
   * @generated from field: string local_services_lead = 1;
   */
  localServicesLead: string;

  /**
   * Required. Text message that user wanted to append to lead.
   *
   * @generated from field: string text = 2;
   */
  text: string;
};

/**
 * Describes the message google.ads.googleads.v17.services.Conversation.
 * Use `create(ConversationSchema)` to create a new message.
 */
export const ConversationSchema: GenMessage<Conversation> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_local_services_lead_service, 2);

/**
 * Result of the append conversation operation.
 *
 * @generated from message google.ads.googleads.v17.services.ConversationOrError
 */
export type ConversationOrError = Message<"google.ads.googleads.v17.services.ConversationOrError"> & {
  /**
   * Append operation response
   *
   * @generated from oneof google.ads.googleads.v17.services.ConversationOrError.append_lead_conversation_response
   */
  appendLeadConversationResponse: {
    /**
     * The resource name of the appended local services lead conversation.
     *
     * @generated from field: string local_services_lead_conversation = 1;
     */
    value: string;
    case: "localServicesLeadConversation";
  } | {
    /**
     * Failure status when the request could not be processed.
     *
     * @generated from field: google.rpc.Status partial_failure_error = 2;
     */
    value: Status;
    case: "partialFailureError";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.ads.googleads.v17.services.ConversationOrError.
 * Use `create(ConversationOrErrorSchema)` to create a new message.
 */
export const ConversationOrErrorSchema: GenMessage<ConversationOrError> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_services_local_services_lead_service, 3);

/**
 * This service allows management of LocalServicesLead resources.
 *
 * @generated from service google.ads.googleads.v17.services.LocalServicesLeadService
 */
export const LocalServicesLeadService: GenService<{
  /**
   * RPC to append Local Services Lead Conversation resources to Local Services
   * Lead resources.
   *
   * @generated from rpc google.ads.googleads.v17.services.LocalServicesLeadService.AppendLeadConversation
   */
  appendLeadConversation: {
    methodKind: "unary";
    input: typeof AppendLeadConversationRequestSchema;
    output: typeof AppendLeadConversationResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ads_googleads_v17_services_local_services_lead_service, 0);
