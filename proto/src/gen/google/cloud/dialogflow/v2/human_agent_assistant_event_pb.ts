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
// @generated from file google/cloud/dialogflow/v2/human_agent_assistant_event.proto (package google.cloud.dialogflow.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { SuggestionResult } from "./participant_pb";
import { file_google_cloud_dialogflow_v2_participant } from "./participant_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/dialogflow/v2/human_agent_assistant_event.proto.
 */
export const file_google_cloud_dialogflow_v2_human_agent_assistant_event: GenFile = /*@__PURE__*/
  fileDesc("Cjxnb29nbGUvY2xvdWQvZGlhbG9nZmxvdy92Mi9odW1hbl9hZ2VudF9hc3Npc3RhbnRfZXZlbnQucHJvdG8SGmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LnYyIo8BChhIdW1hbkFnZW50QXNzaXN0YW50RXZlbnQSFAoMY29udmVyc2F0aW9uGAEgASgJEhMKC3BhcnRpY2lwYW50GAMgASgJEkgKEnN1Z2dlc3Rpb25fcmVzdWx0cxgFIAMoCzIsLmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LnYyLlN1Z2dlc3Rpb25SZXN1bHRCpgEKHmNvbS5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52MkIdSHVtYW5BZ2VudEFzc2lzdGFudEV2ZW50UHJvdG9QAVo+Y2xvdWQuZ29vZ2xlLmNvbS9nby9kaWFsb2dmbG93L2FwaXYyL2RpYWxvZ2Zsb3dwYjtkaWFsb2dmbG93cGL4AQGiAgJERqoCGkdvb2dsZS5DbG91ZC5EaWFsb2dmbG93LlYyYgZwcm90bzM", [file_google_cloud_dialogflow_v2_participant]);

/**
 * Represents a notification sent to Cloud Pub/Sub subscribers for
 * human agent assistant events in a specific conversation.
 *
 * @generated from message google.cloud.dialogflow.v2.HumanAgentAssistantEvent
 */
export type HumanAgentAssistantEvent = Message<"google.cloud.dialogflow.v2.HumanAgentAssistantEvent"> & {
  /**
   * The conversation this notification refers to.
   * Format: `projects/<Project ID>/conversations/<Conversation ID>`.
   *
   * @generated from field: string conversation = 1;
   */
  conversation: string;

  /**
   * The participant that the suggestion is compiled for.
   * Format: `projects/<Project ID>/conversations/<Conversation
   * ID>/participants/<Participant ID>`. It will not be set in legacy workflow.
   *
   * @generated from field: string participant = 3;
   */
  participant: string;

  /**
   * The suggestion results payload that this notification refers to.
   *
   * @generated from field: repeated google.cloud.dialogflow.v2.SuggestionResult suggestion_results = 5;
   */
  suggestionResults: SuggestionResult[];
};

/**
 * Describes the message google.cloud.dialogflow.v2.HumanAgentAssistantEvent.
 * Use `create(HumanAgentAssistantEventSchema)` to create a new message.
 */
export const HumanAgentAssistantEventSchema: GenMessage<HumanAgentAssistantEvent> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2_human_agent_assistant_event, 0);
