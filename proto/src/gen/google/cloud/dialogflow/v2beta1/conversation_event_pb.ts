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
// @generated from file google/cloud/dialogflow/v2beta1/conversation_event.proto (package google.cloud.dialogflow.v2beta1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message as Message$1 } from "./participant_pb";
import { file_google_cloud_dialogflow_v2beta1_participant } from "./participant_pb";
import type { Status } from "../../../rpc/status_pb";
import { file_google_rpc_status } from "../../../rpc/status_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/dialogflow/v2beta1/conversation_event.proto.
 */
export const file_google_cloud_dialogflow_v2beta1_conversation_event: GenFile = /*@__PURE__*/
  fileDesc("Cjhnb29nbGUvY2xvdWQvZGlhbG9nZmxvdy92MmJldGExL2NvbnZlcnNhdGlvbl9ldmVudC5wcm90bxIfZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjJiZXRhMSKLAwoRQ29udmVyc2F0aW9uRXZlbnQSFAoMY29udmVyc2F0aW9uGAEgASgJEkUKBHR5cGUYAiABKA4yNy5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52MmJldGExLkNvbnZlcnNhdGlvbkV2ZW50LlR5cGUSKAoMZXJyb3Jfc3RhdHVzGAMgASgLMhIuZ29vZ2xlLnJwYy5TdGF0dXMSRwoTbmV3X21lc3NhZ2VfcGF5bG9hZBgEIAEoCzIoLmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LnYyYmV0YTEuTWVzc2FnZUgAIpoBCgRUeXBlEhQKEFRZUEVfVU5TUEVDSUZJRUQQABIYChRDT05WRVJTQVRJT05fU1RBUlRFRBABEhkKFUNPTlZFUlNBVElPTl9GSU5JU0hFRBACEh0KGUhVTUFOX0lOVEVSVkVOVElPTl9ORUVERUQQAxIPCgtORVdfTUVTU0FHRRAFEhcKE1VOUkVDT1ZFUkFCTEVfRVJST1IQBEIJCgdwYXlsb2FkQq4BCiNjb20uZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjJiZXRhMUIWQ29udmVyc2F0aW9uRXZlbnRQcm90b1ABWkNjbG91ZC5nb29nbGUuY29tL2dvL2RpYWxvZ2Zsb3cvYXBpdjJiZXRhMS9kaWFsb2dmbG93cGI7ZGlhbG9nZmxvd3Bi+AEBogICREaqAh9Hb29nbGUuQ2xvdWQuRGlhbG9nZmxvdy5WMkJldGExYgZwcm90bzM", [file_google_cloud_dialogflow_v2beta1_participant, file_google_rpc_status]);

/**
 * Represents a notification sent to Pub/Sub subscribers for conversation
 * lifecycle events.
 *
 * @generated from message google.cloud.dialogflow.v2beta1.ConversationEvent
 */
export type ConversationEvent = Message<"google.cloud.dialogflow.v2beta1.ConversationEvent"> & {
  /**
   * Required. The unique identifier of the conversation this notification
   * refers to.
   * Format: `projects/<Project ID>/conversations/<Conversation ID>`.
   *
   * @generated from field: string conversation = 1;
   */
  conversation: string;

  /**
   * Required. The type of the event that this notification refers to.
   *
   * @generated from field: google.cloud.dialogflow.v2beta1.ConversationEvent.Type type = 2;
   */
  type: ConversationEvent_Type;

  /**
   * Optional. More detailed information about an error. Only set for type
   * UNRECOVERABLE_ERROR_IN_PHONE_CALL.
   *
   * @generated from field: google.rpc.Status error_status = 3;
   */
  errorStatus?: Status;

  /**
   * Payload of conversation event.
   *
   * @generated from oneof google.cloud.dialogflow.v2beta1.ConversationEvent.payload
   */
  payload: {
    /**
     * Payload of NEW_MESSAGE event.
     *
     * @generated from field: google.cloud.dialogflow.v2beta1.Message new_message_payload = 4;
     */
    value: Message$1;
    case: "newMessagePayload";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.dialogflow.v2beta1.ConversationEvent.
 * Use `create(ConversationEventSchema)` to create a new message.
 */
export const ConversationEventSchema: GenMessage<ConversationEvent> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2beta1_conversation_event, 0);

/**
 * Enumeration of the types of events available.
 *
 * @generated from enum google.cloud.dialogflow.v2beta1.ConversationEvent.Type
 */
export enum ConversationEvent_Type {
  /**
   * Type not set.
   *
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  TYPE_UNSPECIFIED = 0,

  /**
   * A new conversation has been opened. This is fired when a telephone call
   * is answered, or a conversation is created via the API.
   *
   * @generated from enum value: CONVERSATION_STARTED = 1;
   */
  CONVERSATION_STARTED = 1,

  /**
   * An existing conversation has closed. This is fired when a telephone call
   * is terminated, or a conversation is closed via the API.
   *
   * @generated from enum value: CONVERSATION_FINISHED = 2;
   */
  CONVERSATION_FINISHED = 2,

  /**
   * An existing conversation has received notification from Dialogflow that
   * human intervention is required.
   *
   * @generated from enum value: HUMAN_INTERVENTION_NEEDED = 3;
   */
  HUMAN_INTERVENTION_NEEDED = 3,

  /**
   * An existing conversation has received a new message, either from API or
   * telephony. It is configured in
   * [ConversationProfile.new_message_event_notification_config][google.cloud.dialogflow.v2beta1.ConversationProfile.new_message_event_notification_config]
   *
   * @generated from enum value: NEW_MESSAGE = 5;
   */
  NEW_MESSAGE = 5,

  /**
   * Unrecoverable error during a telephone call.
   *
   * In general non-recoverable errors only occur if something was
   * misconfigured in the ConversationProfile corresponding to the call. After
   * a non-recoverable error, Dialogflow may stop responding.
   *
   * We don't fire this event:
   *
   * * in an API call because we can directly return the error, or,
   * * when we can recover from an error.
   *
   * @generated from enum value: UNRECOVERABLE_ERROR = 4;
   */
  UNRECOVERABLE_ERROR = 4,
}

/**
 * Describes the enum google.cloud.dialogflow.v2beta1.ConversationEvent.Type.
 */
export const ConversationEvent_TypeSchema: GenEnum<ConversationEvent_Type> = /*@__PURE__*/
  enumDesc(file_google_cloud_dialogflow_v2beta1_conversation_event, 0, 0);
