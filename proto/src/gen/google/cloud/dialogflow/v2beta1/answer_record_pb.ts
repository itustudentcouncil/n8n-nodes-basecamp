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
// @generated from file google/cloud/dialogflow/v2beta1/answer_record.proto (package google.cloud.dialogflow.v2beta1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { ArticleAnswer, DialogflowAssistAnswer, FaqAnswer } from "./participant_pb";
import { file_google_cloud_dialogflow_v2beta1_participant } from "./participant_pb";
import type { FieldMask, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_field_mask, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/dialogflow/v2beta1/answer_record.proto.
 */
export const file_google_cloud_dialogflow_v2beta1_answer_record: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvY2xvdWQvZGlhbG9nZmxvdy92MmJldGExL2Fuc3dlcl9yZWNvcmQucHJvdG8SH2dvb2dsZS5jbG91ZC5kaWFsb2dmbG93LnYyYmV0YTEi8QIKDEFuc3dlclJlY29yZBIMCgRuYW1lGAEgASgJEkgKD2Fuc3dlcl9mZWVkYmFjaxgDIAEoCzIvLmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LnYyYmV0YTEuQW5zd2VyRmVlZGJhY2sSVwoWYWdlbnRfYXNzaXN0YW50X3JlY29yZBgEIAEoCzI1Lmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LnYyYmV0YTEuQWdlbnRBc3Npc3RhbnRSZWNvcmRIADqlAepBoQEKJmRpYWxvZ2Zsb3cuZ29vZ2xlYXBpcy5jb20vQW5zd2VyUmVjb3JkEjBwcm9qZWN0cy97cHJvamVjdH0vYW5zd2VyUmVjb3Jkcy97YW5zd2VyX3JlY29yZH0SRXByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9hbnN3ZXJSZWNvcmRzL3thbnN3ZXJfcmVjb3JkfUIICgZyZWNvcmQiowIKFEFnZW50QXNzaXN0YW50UmVjb3JkElgKGWFydGljbGVfc3VnZ2VzdGlvbl9hbnN3ZXIYBSABKAsyLi5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52MmJldGExLkFydGljbGVBbnN3ZXJCA+BBA0gAEkUKCmZhcV9hbnN3ZXIYBiABKAsyKi5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52MmJldGExLkZhcUFuc3dlckID4EEDSAASYAoYZGlhbG9nZmxvd19hc3Npc3RfYW5zd2VyGAcgASgLMjcuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjJiZXRhMS5EaWFsb2dmbG93QXNzaXN0QW5zd2VyQgPgQQNIAEIICgZhbnN3ZXIi3AMKDkFuc3dlckZlZWRiYWNrElsKEWNvcnJlY3RuZXNzX2xldmVsGAEgASgOMkAuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjJiZXRhMS5BbnN3ZXJGZWVkYmFjay5Db3JyZWN0bmVzc0xldmVsEmIKH2FnZW50X2Fzc2lzdGFudF9kZXRhaWxfZmVlZGJhY2sYAiABKAsyNy5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52MmJldGExLkFnZW50QXNzaXN0YW50RmVlZGJhY2tIABIPCgdjbGlja2VkGAMgASgIEi4KCmNsaWNrX3RpbWUYBSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhEKCWRpc3BsYXllZBgEIAEoCBIwCgxkaXNwbGF5X3RpbWUYBiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wInAKEENvcnJlY3RuZXNzTGV2ZWwSIQodQ09SUkVDVE5FU1NfTEVWRUxfVU5TUEVDSUZJRUQQABIPCgtOT1RfQ09SUkVDVBABEhUKEVBBUlRJQUxMWV9DT1JSRUNUEAISEQoNRlVMTFlfQ09SUkVDVBADQhEKD2RldGFpbF9mZWVkYmFjayKUCwoWQWdlbnRBc3Npc3RhbnRGZWVkYmFjaxJhChBhbnN3ZXJfcmVsZXZhbmNlGAEgASgOMkcuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjJiZXRhMS5BZ2VudEFzc2lzdGFudEZlZWRiYWNrLkFuc3dlclJlbGV2YW5jZRJpChRkb2N1bWVudF9jb3JyZWN0bmVzcxgCIAEoDjJLLmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LnYyYmV0YTEuQWdlbnRBc3Npc3RhbnRGZWVkYmFjay5Eb2N1bWVudENvcnJlY3RuZXNzEmcKE2RvY3VtZW50X2VmZmljaWVuY3kYAyABKA4ySi5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52MmJldGExLkFnZW50QXNzaXN0YW50RmVlZGJhY2suRG9jdW1lbnRFZmZpY2llbmN5Em0KFnN1bW1hcml6YXRpb25fZmVlZGJhY2sYBCABKAsyTS5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52MmJldGExLkFnZW50QXNzaXN0YW50RmVlZGJhY2suU3VtbWFyaXphdGlvbkZlZWRiYWNrEncKGWtub3dsZWRnZV9zZWFyY2hfZmVlZGJhY2sYBSABKAsyTy5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52MmJldGExLkFnZW50QXNzaXN0YW50RmVlZGJhY2suS25vd2xlZGdlU2VhcmNoRmVlZGJhY2tCA+BBARJ3Chlrbm93bGVkZ2VfYXNzaXN0X2ZlZWRiYWNrGAYgASgLMk8uZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjJiZXRhMS5BZ2VudEFzc2lzdGFudEZlZWRiYWNrLktub3dsZWRnZUFzc2lzdEZlZWRiYWNrQgPgQQEaygIKFVN1bW1hcml6YXRpb25GZWVkYmFjaxIzCg9zdGFydF90aW1lc3RhbXAYASABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEjQKEHN1Ym1pdF90aW1lc3RhbXAYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhQKDHN1bW1hcnlfdGV4dBgDIAEoCRJ7Cg10ZXh0X3NlY3Rpb25zGAQgAygLMl8uZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjJiZXRhMS5BZ2VudEFzc2lzdGFudEZlZWRiYWNrLlN1bW1hcml6YXRpb25GZWVkYmFjay5UZXh0U2VjdGlvbnNFbnRyeUID4EEBGjMKEVRleHRTZWN0aW9uc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEaRgoXS25vd2xlZGdlU2VhcmNoRmVlZGJhY2sSFQoNYW5zd2VyX2NvcGllZBgBIAEoCBIUCgxjbGlja2VkX3VyaXMYAiADKAkaRgoXS25vd2xlZGdlQXNzaXN0RmVlZGJhY2sSFQoNYW5zd2VyX2NvcGllZBgBIAEoCBIUCgxjbGlja2VkX3VyaXMYAiADKAkiUQoPQW5zd2VyUmVsZXZhbmNlEiAKHEFOU1dFUl9SRUxFVkFOQ0VfVU5TUEVDSUZJRUQQABIOCgpJUlJFTEVWQU5UEAESDAoIUkVMRVZBTlQQAiJXChNEb2N1bWVudENvcnJlY3RuZXNzEiQKIERPQ1VNRU5UX0NPUlJFQ1RORVNTX1VOU1BFQ0lGSUVEEAASDQoJSU5DT1JSRUNUEAESCwoHQ09SUkVDVBACIlkKEkRvY3VtZW50RWZmaWNpZW5jeRIjCh9ET0NVTUVOVF9FRkZJQ0lFTkNZX1VOU1BFQ0lGSUVEEAASDwoLSU5FRkZJQ0lFTlQQARINCglFRkZJQ0lFTlQQAiImChZHZXRBbnN3ZXJSZWNvcmRSZXF1ZXN0EgwKBG5hbWUYASABKAkilQEKGExpc3RBbnN3ZXJSZWNvcmRzUmVxdWVzdBI7CgZwYXJlbnQYASABKAlCK/pBKBImZGlhbG9nZmxvdy5nb29nbGVhcGlzLmNvbS9BbnN3ZXJSZWNvcmQSFQoGZmlsdGVyGAIgASgJQgUYAeBBARIRCglwYWdlX3NpemUYAyABKAUSEgoKcGFnZV90b2tlbhgEIAEoCSJ7ChlMaXN0QW5zd2VyUmVjb3Jkc1Jlc3BvbnNlEkUKDmFuc3dlcl9yZWNvcmRzGAEgAygLMi0uZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjJiZXRhMS5BbnN3ZXJSZWNvcmQSFwoPbmV4dF9wYWdlX3Rva2VuGAIgASgJIpcBChlVcGRhdGVBbnN3ZXJSZWNvcmRSZXF1ZXN0EkkKDWFuc3dlcl9yZWNvcmQYASABKAsyLS5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52MmJldGExLkFuc3dlclJlY29yZEID4EECEi8KC3VwZGF0ZV9tYXNrGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFzazLCBwoNQW5zd2VyUmVjb3JkcxLqAQoPR2V0QW5zd2VyUmVjb3JkEjcuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjJiZXRhMS5HZXRBbnN3ZXJSZWNvcmRSZXF1ZXN0Gi0uZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjJiZXRhMS5BbnN3ZXJSZWNvcmQib4gCAYLT5JMCZlo4EjYvdjJiZXRhMS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2Fuc3dlclJlY29yZHMvKn0SKi92MmJldGExL3tuYW1lPXByb2plY3RzLyovYW5zd2VyUmVjb3Jkcy8qfRKBAgoRTGlzdEFuc3dlclJlY29yZHMSOS5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52MmJldGExLkxpc3RBbnN3ZXJSZWNvcmRzUmVxdWVzdBo6Lmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LnYyYmV0YTEuTGlzdEFuc3dlclJlY29yZHNSZXNwb25zZSJ12kEGcGFyZW50gtPkkwJmWjgSNi92MmJldGExL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKn0vYW5zd2VyUmVjb3JkcxIqL3YyYmV0YTEve3BhcmVudD1wcm9qZWN0cy8qfS9hbnN3ZXJSZWNvcmRzEsUCChJVcGRhdGVBbnN3ZXJSZWNvcmQSOi5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52MmJldGExLlVwZGF0ZUFuc3dlclJlY29yZFJlcXVlc3QaLS5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52MmJldGExLkFuc3dlclJlY29yZCLDAdpBGWFuc3dlcl9yZWNvcmQsdXBkYXRlX21hc2uC0+STAqABOg1hbnN3ZXJfcmVjb3JkWlU6DWFuc3dlcl9yZWNvcmQyRC92MmJldGExL3thbnN3ZXJfcmVjb3JkLm5hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9hbnN3ZXJSZWNvcmRzLyp9MjgvdjJiZXRhMS97YW5zd2VyX3JlY29yZC5uYW1lPXByb2plY3RzLyovYW5zd2VyUmVjb3Jkcy8qfRp4ykEZZGlhbG9nZmxvdy5nb29nbGVhcGlzLmNvbdJBWWh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xvdWQtcGxhdGZvcm0saHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kaWFsb2dmbG93QqoBCiNjb20uZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjJiZXRhMUISQW5zd2VyUmVjb3Jkc1Byb3RvUAFaQ2Nsb3VkLmdvb2dsZS5jb20vZ28vZGlhbG9nZmxvdy9hcGl2MmJldGExL2RpYWxvZ2Zsb3dwYjtkaWFsb2dmbG93cGL4AQGiAgJERqoCH0dvb2dsZS5DbG91ZC5EaWFsb2dmbG93LlYyQmV0YTFiBnByb3RvMw", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_dialogflow_v2beta1_participant, file_google_protobuf_field_mask, file_google_protobuf_timestamp]);

/**
 * Answer records are records to manage answer history and feedbacks for
 * Dialogflow.
 *
 * Currently, answer record includes:
 *
 * - human agent assistant article suggestion
 * - human agent assistant faq article
 *
 * It doesn't include:
 *
 * - `DetectIntent` intent matching
 * - `DetectIntent` knowledge
 *
 * Answer records are not related to the conversation history in the
 * Dialogflow Console. A Record is generated even when the end-user disables
 * conversation history in the console. Records are created when there's a human
 * agent assistant suggestion generated.
 *
 * A typical workflow for customers provide feedback to an answer is:
 *
 * 1. For human agent assistant, customers get suggestion via ListSuggestions
 *    API. Together with the answers,
 *    [AnswerRecord.name][google.cloud.dialogflow.v2beta1.AnswerRecord.name] are
 *    returned to the customers.
 * 2. The customer uses the
 * [AnswerRecord.name][google.cloud.dialogflow.v2beta1.AnswerRecord.name] to
 * call the
 *    [UpdateAnswerRecord][] method to send feedback about a specific answer
 *    that they believe is wrong.
 *
 * @generated from message google.cloud.dialogflow.v2beta1.AnswerRecord
 */
export type AnswerRecord = Message<"google.cloud.dialogflow.v2beta1.AnswerRecord"> & {
  /**
   * The unique identifier of this answer record.
   * Required for
   * [AnswerRecords.UpdateAnswerRecord][google.cloud.dialogflow.v2beta1.AnswerRecords.UpdateAnswerRecord]
   * method. Format: `projects/<Project ID>/locations/<Location
   * ID>/answerRecords/<Answer Record ID>`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. The AnswerFeedback for this record. You can set this with
   * [AnswerRecords.UpdateAnswerRecord][google.cloud.dialogflow.v2beta1.AnswerRecords.UpdateAnswerRecord]
   * in order to give us feedback about this answer.
   *
   * @generated from field: google.cloud.dialogflow.v2beta1.AnswerFeedback answer_feedback = 3;
   */
  answerFeedback?: AnswerFeedback;

  /**
   * Output only. The record for this answer.
   *
   * @generated from oneof google.cloud.dialogflow.v2beta1.AnswerRecord.record
   */
  record: {
    /**
     * Output only. The record for human agent assistant.
     *
     * @generated from field: google.cloud.dialogflow.v2beta1.AgentAssistantRecord agent_assistant_record = 4;
     */
    value: AgentAssistantRecord;
    case: "agentAssistantRecord";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.dialogflow.v2beta1.AnswerRecord.
 * Use `create(AnswerRecordSchema)` to create a new message.
 */
export const AnswerRecordSchema: GenMessage<AnswerRecord> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 0);

/**
 * Represents a record of a human agent assistant answer.
 *
 * @generated from message google.cloud.dialogflow.v2beta1.AgentAssistantRecord
 */
export type AgentAssistantRecord = Message<"google.cloud.dialogflow.v2beta1.AgentAssistantRecord"> & {
  /**
   * Output only. The agent assistant answer.
   *
   * @generated from oneof google.cloud.dialogflow.v2beta1.AgentAssistantRecord.answer
   */
  answer: {
    /**
     * Output only. The article suggestion answer.
     *
     * @generated from field: google.cloud.dialogflow.v2beta1.ArticleAnswer article_suggestion_answer = 5;
     */
    value: ArticleAnswer;
    case: "articleSuggestionAnswer";
  } | {
    /**
     * Output only. The FAQ answer.
     *
     * @generated from field: google.cloud.dialogflow.v2beta1.FaqAnswer faq_answer = 6;
     */
    value: FaqAnswer;
    case: "faqAnswer";
  } | {
    /**
     * Output only. The Dialogflow assist answer.
     *
     * @generated from field: google.cloud.dialogflow.v2beta1.DialogflowAssistAnswer dialogflow_assist_answer = 7;
     */
    value: DialogflowAssistAnswer;
    case: "dialogflowAssistAnswer";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.dialogflow.v2beta1.AgentAssistantRecord.
 * Use `create(AgentAssistantRecordSchema)` to create a new message.
 */
export const AgentAssistantRecordSchema: GenMessage<AgentAssistantRecord> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 1);

/**
 * Represents feedback the customer has about the quality & correctness of a
 * certain answer in a conversation.
 *
 * @generated from message google.cloud.dialogflow.v2beta1.AnswerFeedback
 */
export type AnswerFeedback = Message<"google.cloud.dialogflow.v2beta1.AnswerFeedback"> & {
  /**
   * The correctness level of the specific answer.
   *
   * @generated from field: google.cloud.dialogflow.v2beta1.AnswerFeedback.CorrectnessLevel correctness_level = 1;
   */
  correctnessLevel: AnswerFeedback_CorrectnessLevel;

  /**
   * Normally, detail feedback is provided when answer is not fully correct.
   *
   * @generated from oneof google.cloud.dialogflow.v2beta1.AnswerFeedback.detail_feedback
   */
  detailFeedback: {
    /**
     * Optional. Detail feedback of agent assistant suggestions.
     *
     * @generated from field: google.cloud.dialogflow.v2beta1.AgentAssistantFeedback agent_assistant_detail_feedback = 2;
     */
    value: AgentAssistantFeedback;
    case: "agentAssistantDetailFeedback";
  } | { case: undefined; value?: undefined };

  /**
   * Indicates whether the answer/item was clicked by the human agent
   * or not. Default to false.
   * For knowledge search, the answer record is considered to be clicked if the
   * answer was copied or any URI was clicked.
   *
   * @generated from field: bool clicked = 3;
   */
  clicked: boolean;

  /**
   * Time when the answer/item was clicked.
   *
   * @generated from field: google.protobuf.Timestamp click_time = 5;
   */
  clickTime?: Timestamp;

  /**
   * Indicates whether the answer/item was displayed to the human
   * agent in the agent desktop UI. Default to false.
   *
   * @generated from field: bool displayed = 4;
   */
  displayed: boolean;

  /**
   * Time when the answer/item was displayed.
   *
   * @generated from field: google.protobuf.Timestamp display_time = 6;
   */
  displayTime?: Timestamp;
};

/**
 * Describes the message google.cloud.dialogflow.v2beta1.AnswerFeedback.
 * Use `create(AnswerFeedbackSchema)` to create a new message.
 */
export const AnswerFeedbackSchema: GenMessage<AnswerFeedback> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 2);

/**
 * The correctness level of an answer.
 *
 * @generated from enum google.cloud.dialogflow.v2beta1.AnswerFeedback.CorrectnessLevel
 */
export enum AnswerFeedback_CorrectnessLevel {
  /**
   * Correctness level unspecified.
   *
   * @generated from enum value: CORRECTNESS_LEVEL_UNSPECIFIED = 0;
   */
  CORRECTNESS_LEVEL_UNSPECIFIED = 0,

  /**
   * Answer is totally wrong.
   *
   * @generated from enum value: NOT_CORRECT = 1;
   */
  NOT_CORRECT = 1,

  /**
   * Answer is partially correct.
   *
   * @generated from enum value: PARTIALLY_CORRECT = 2;
   */
  PARTIALLY_CORRECT = 2,

  /**
   * Answer is fully correct.
   *
   * @generated from enum value: FULLY_CORRECT = 3;
   */
  FULLY_CORRECT = 3,
}

/**
 * Describes the enum google.cloud.dialogflow.v2beta1.AnswerFeedback.CorrectnessLevel.
 */
export const AnswerFeedback_CorrectnessLevelSchema: GenEnum<AnswerFeedback_CorrectnessLevel> = /*@__PURE__*/
  enumDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 2, 0);

/**
 * Detail feedback of Agent Assistant result.
 *
 * @generated from message google.cloud.dialogflow.v2beta1.AgentAssistantFeedback
 */
export type AgentAssistantFeedback = Message<"google.cloud.dialogflow.v2beta1.AgentAssistantFeedback"> & {
  /**
   * Optional. Whether or not the suggested answer is relevant.
   *
   * For example:
   *
   * * Query: "Can I change my mailing address?"
   * * Suggested document says: "Items must be returned/exchanged within 60
   *   days of the purchase date."
   * * [answer_relevance][google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.answer_relevance]: [AnswerRelevance.IRRELEVANT][google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.AnswerRelevance.IRRELEVANT]
   *
   * @generated from field: google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.AnswerRelevance answer_relevance = 1;
   */
  answerRelevance: AgentAssistantFeedback_AnswerRelevance;

  /**
   * Optional. Whether or not the information in the document is correct.
   *
   * For example:
   *
   * * Query: "Can I return the package in 2 days once received?"
   * * Suggested document says: "Items must be returned/exchanged within 60
   *   days of the purchase date."
   * * Ground truth: "No return or exchange is allowed."
   * * [document_correctness]: INCORRECT
   *
   * @generated from field: google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.DocumentCorrectness document_correctness = 2;
   */
  documentCorrectness: AgentAssistantFeedback_DocumentCorrectness;

  /**
   * Optional. Whether or not the suggested document is efficient. For example,
   * if the document is poorly written, hard to understand, hard to use or
   * too long to find useful information,
   * [document_efficiency][google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.document_efficiency]
   * is
   * [DocumentEfficiency.INEFFICIENT][google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.DocumentEfficiency.INEFFICIENT].
   *
   * @generated from field: google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.DocumentEfficiency document_efficiency = 3;
   */
  documentEfficiency: AgentAssistantFeedback_DocumentEfficiency;

  /**
   * Feedback for conversation summarization.
   *
   * @generated from field: google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.SummarizationFeedback summarization_feedback = 4;
   */
  summarizationFeedback?: AgentAssistantFeedback_SummarizationFeedback;

  /**
   * Optional. Feedback for knowledge search.
   *
   * @generated from field: google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.KnowledgeSearchFeedback knowledge_search_feedback = 5;
   */
  knowledgeSearchFeedback?: AgentAssistantFeedback_KnowledgeSearchFeedback;

  /**
   * Optional. Feedback for knowledge assist.
   *
   * @generated from field: google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.KnowledgeAssistFeedback knowledge_assist_feedback = 6;
   */
  knowledgeAssistFeedback?: AgentAssistantFeedback_KnowledgeAssistFeedback;
};

/**
 * Describes the message google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.
 * Use `create(AgentAssistantFeedbackSchema)` to create a new message.
 */
export const AgentAssistantFeedbackSchema: GenMessage<AgentAssistantFeedback> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 3);

/**
 * Feedback for conversation summarization.
 *
 * @generated from message google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.SummarizationFeedback
 */
export type AgentAssistantFeedback_SummarizationFeedback = Message<"google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.SummarizationFeedback"> & {
  /**
   * Timestamp when composing of the summary starts.
   *
   * @generated from field: google.protobuf.Timestamp start_timestamp = 1;
   */
  startTimestamp?: Timestamp;

  /**
   * Timestamp when the summary was submitted.
   *
   * @generated from field: google.protobuf.Timestamp submit_timestamp = 2;
   */
  submitTimestamp?: Timestamp;

  /**
   * Text of actual submitted summary.
   *
   * @generated from field: string summary_text = 3;
   */
  summaryText: string;

  /**
   * Optional. Actual text sections of submitted summary.
   *
   * @generated from field: map<string, string> text_sections = 4;
   */
  textSections: { [key: string]: string };
};

/**
 * Describes the message google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.SummarizationFeedback.
 * Use `create(AgentAssistantFeedback_SummarizationFeedbackSchema)` to create a new message.
 */
export const AgentAssistantFeedback_SummarizationFeedbackSchema: GenMessage<AgentAssistantFeedback_SummarizationFeedback> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 3, 0);

/**
 * Feedback for knowledge search.
 *
 * @generated from message google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.KnowledgeSearchFeedback
 */
export type AgentAssistantFeedback_KnowledgeSearchFeedback = Message<"google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.KnowledgeSearchFeedback"> & {
  /**
   * Whether the answer was copied by the human agent or not.
   * If the value is set to be true,
   * [AnswerFeedback.clicked][google.cloud.dialogflow.v2beta1.AnswerFeedback.clicked]
   * will be updated to be true.
   *
   * @generated from field: bool answer_copied = 1;
   */
  answerCopied: boolean;

  /**
   * The URIs clicked by the human agent. The value is appended for each
   * UpdateAnswerRecordRequest.
   * If the value is not empty,
   * [AnswerFeedback.clicked][google.cloud.dialogflow.v2beta1.AnswerFeedback.clicked]
   * will be updated to be true.
   *
   * @generated from field: repeated string clicked_uris = 2;
   */
  clickedUris: string[];
};

/**
 * Describes the message google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.KnowledgeSearchFeedback.
 * Use `create(AgentAssistantFeedback_KnowledgeSearchFeedbackSchema)` to create a new message.
 */
export const AgentAssistantFeedback_KnowledgeSearchFeedbackSchema: GenMessage<AgentAssistantFeedback_KnowledgeSearchFeedback> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 3, 1);

/**
 * Feedback for knowledge assist.
 *
 * @generated from message google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.KnowledgeAssistFeedback
 */
export type AgentAssistantFeedback_KnowledgeAssistFeedback = Message<"google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.KnowledgeAssistFeedback"> & {
  /**
   * Whether the suggested answer was copied by the human agent.
   * If the value is set to be true,
   * [AnswerFeedback.clicked][google.cloud.dialogflow.v2beta1.AnswerFeedback.clicked]
   * will be updated to be true.
   *
   * @generated from field: bool answer_copied = 1;
   */
  answerCopied: boolean;

  /**
   * The URIs clicked by the human agent. The value is appended for each
   * [UpdateAnswerRecordRequest][google.cloud.dialogflow.v2beta1.UpdateAnswerRecordRequest].
   * If the value is not empty,
   * [AnswerFeedback.clicked][google.cloud.dialogflow.v2beta1.AnswerFeedback.clicked]
   * will be updated to be true.
   *
   * @generated from field: repeated string clicked_uris = 2;
   */
  clickedUris: string[];
};

/**
 * Describes the message google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.KnowledgeAssistFeedback.
 * Use `create(AgentAssistantFeedback_KnowledgeAssistFeedbackSchema)` to create a new message.
 */
export const AgentAssistantFeedback_KnowledgeAssistFeedbackSchema: GenMessage<AgentAssistantFeedback_KnowledgeAssistFeedback> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 3, 2);

/**
 * Relevance of an answer.
 *
 * @generated from enum google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.AnswerRelevance
 */
export enum AgentAssistantFeedback_AnswerRelevance {
  /**
   * Answer relevance unspecified.
   *
   * @generated from enum value: ANSWER_RELEVANCE_UNSPECIFIED = 0;
   */
  ANSWER_RELEVANCE_UNSPECIFIED = 0,

  /**
   * Answer is irrelevant to query.
   *
   * @generated from enum value: IRRELEVANT = 1;
   */
  IRRELEVANT = 1,

  /**
   * Answer is relevant to query.
   *
   * @generated from enum value: RELEVANT = 2;
   */
  RELEVANT = 2,
}

/**
 * Describes the enum google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.AnswerRelevance.
 */
export const AgentAssistantFeedback_AnswerRelevanceSchema: GenEnum<AgentAssistantFeedback_AnswerRelevance> = /*@__PURE__*/
  enumDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 3, 0);

/**
 * Correctness of document.
 *
 * @generated from enum google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.DocumentCorrectness
 */
export enum AgentAssistantFeedback_DocumentCorrectness {
  /**
   * Document correctness unspecified.
   *
   * @generated from enum value: DOCUMENT_CORRECTNESS_UNSPECIFIED = 0;
   */
  DOCUMENT_CORRECTNESS_UNSPECIFIED = 0,

  /**
   * Information in document is incorrect.
   *
   * @generated from enum value: INCORRECT = 1;
   */
  INCORRECT = 1,

  /**
   * Information in document is correct.
   *
   * @generated from enum value: CORRECT = 2;
   */
  CORRECT = 2,
}

/**
 * Describes the enum google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.DocumentCorrectness.
 */
export const AgentAssistantFeedback_DocumentCorrectnessSchema: GenEnum<AgentAssistantFeedback_DocumentCorrectness> = /*@__PURE__*/
  enumDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 3, 1);

/**
 * Efficiency of document.
 *
 * @generated from enum google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.DocumentEfficiency
 */
export enum AgentAssistantFeedback_DocumentEfficiency {
  /**
   * Document efficiency unspecified.
   *
   * @generated from enum value: DOCUMENT_EFFICIENCY_UNSPECIFIED = 0;
   */
  DOCUMENT_EFFICIENCY_UNSPECIFIED = 0,

  /**
   * Document is inefficient.
   *
   * @generated from enum value: INEFFICIENT = 1;
   */
  INEFFICIENT = 1,

  /**
   * Document is efficient.
   *
   * @generated from enum value: EFFICIENT = 2;
   */
  EFFICIENT = 2,
}

/**
 * Describes the enum google.cloud.dialogflow.v2beta1.AgentAssistantFeedback.DocumentEfficiency.
 */
export const AgentAssistantFeedback_DocumentEfficiencySchema: GenEnum<AgentAssistantFeedback_DocumentEfficiency> = /*@__PURE__*/
  enumDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 3, 2);

/**
 * Request message for
 * [AnswerRecords.GetAnswerRecord][google.cloud.dialogflow.v2beta1.AnswerRecords.GetAnswerRecord].
 *
 * @generated from message google.cloud.dialogflow.v2beta1.GetAnswerRecordRequest
 */
export type GetAnswerRecordRequest = Message<"google.cloud.dialogflow.v2beta1.GetAnswerRecordRequest"> & {
  /**
   * Required. The name of the answer record to retrieve.
   * Format: `projects/<Project ID>/locations/<Location
   * ID>/answerRecords/<Answer Record Id>`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.dialogflow.v2beta1.GetAnswerRecordRequest.
 * Use `create(GetAnswerRecordRequestSchema)` to create a new message.
 */
export const GetAnswerRecordRequestSchema: GenMessage<GetAnswerRecordRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 4);

/**
 * Request message for
 * [AnswerRecords.ListAnswerRecords][google.cloud.dialogflow.v2beta1.AnswerRecords.ListAnswerRecords].
 *
 * @generated from message google.cloud.dialogflow.v2beta1.ListAnswerRecordsRequest
 */
export type ListAnswerRecordsRequest = Message<"google.cloud.dialogflow.v2beta1.ListAnswerRecordsRequest"> & {
  /**
   * Required. The project to list all answer records for in reverse
   * chronological order. Format: `projects/<Project ID>/locations/<Location
   * ID>`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. Filters to restrict results to specific answer records.
   *
   * For more information about filtering, see
   * [API Filtering](https://aip.dev/160).
   *
   * @generated from field: string filter = 2 [deprecated = true];
   * @deprecated
   */
  filter: string;

  /**
   * Optional. The maximum number of records to return in a single page.
   * The server may return fewer records than this. If unspecified, we use 10.
   * The maximum is 100.
   *
   * @generated from field: int32 page_size = 3;
   */
  pageSize: number;

  /**
   * Optional. The
   * [ListAnswerRecordsResponse.next_page_token][google.cloud.dialogflow.v2beta1.ListAnswerRecordsResponse.next_page_token]
   * value returned from a previous list request used to continue listing on
   * the next page.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.dialogflow.v2beta1.ListAnswerRecordsRequest.
 * Use `create(ListAnswerRecordsRequestSchema)` to create a new message.
 */
export const ListAnswerRecordsRequestSchema: GenMessage<ListAnswerRecordsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 5);

/**
 * Response message for
 * [AnswerRecords.ListAnswerRecords][google.cloud.dialogflow.v2beta1.AnswerRecords.ListAnswerRecords].
 *
 * @generated from message google.cloud.dialogflow.v2beta1.ListAnswerRecordsResponse
 */
export type ListAnswerRecordsResponse = Message<"google.cloud.dialogflow.v2beta1.ListAnswerRecordsResponse"> & {
  /**
   * The list of answer records.
   *
   * @generated from field: repeated google.cloud.dialogflow.v2beta1.AnswerRecord answer_records = 1;
   */
  answerRecords: AnswerRecord[];

  /**
   * A token to retrieve next page of results. Or empty if there are no more
   * results.
   * Pass this value in the
   * [ListAnswerRecordsRequest.page_token][google.cloud.dialogflow.v2beta1.ListAnswerRecordsRequest.page_token]
   * field in the subsequent call to `ListAnswerRecords` method to retrieve the
   * next page of results.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.dialogflow.v2beta1.ListAnswerRecordsResponse.
 * Use `create(ListAnswerRecordsResponseSchema)` to create a new message.
 */
export const ListAnswerRecordsResponseSchema: GenMessage<ListAnswerRecordsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 6);

/**
 * Request message for
 * [AnswerRecords.UpdateAnswerRecord][google.cloud.dialogflow.v2beta1.AnswerRecords.UpdateAnswerRecord].
 *
 * @generated from message google.cloud.dialogflow.v2beta1.UpdateAnswerRecordRequest
 */
export type UpdateAnswerRecordRequest = Message<"google.cloud.dialogflow.v2beta1.UpdateAnswerRecordRequest"> & {
  /**
   * Required. Answer record to update.
   *
   * @generated from field: google.cloud.dialogflow.v2beta1.AnswerRecord answer_record = 1;
   */
  answerRecord?: AnswerRecord;

  /**
   * Required. The mask to control which fields get updated.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.cloud.dialogflow.v2beta1.UpdateAnswerRecordRequest.
 * Use `create(UpdateAnswerRecordRequestSchema)` to create a new message.
 */
export const UpdateAnswerRecordRequestSchema: GenMessage<UpdateAnswerRecordRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 7);

/**
 * Service for managing
 * [AnswerRecords][google.cloud.dialogflow.v2beta1.AnswerRecord].
 *
 * @generated from service google.cloud.dialogflow.v2beta1.AnswerRecords
 */
export const AnswerRecords: GenService<{
  /**
   * Deprecated.
   * Retrieves a specific answer record.
   *
   * @generated from rpc google.cloud.dialogflow.v2beta1.AnswerRecords.GetAnswerRecord
   * @deprecated
   */
  getAnswerRecord: {
    methodKind: "unary";
    input: typeof GetAnswerRecordRequestSchema;
    output: typeof AnswerRecordSchema;
  },
  /**
   * Returns the list of all answer records in the specified project in reverse
   * chronological order.
   *
   * @generated from rpc google.cloud.dialogflow.v2beta1.AnswerRecords.ListAnswerRecords
   */
  listAnswerRecords: {
    methodKind: "unary";
    input: typeof ListAnswerRecordsRequestSchema;
    output: typeof ListAnswerRecordsResponseSchema;
  },
  /**
   * Updates the specified answer record.
   *
   * @generated from rpc google.cloud.dialogflow.v2beta1.AnswerRecords.UpdateAnswerRecord
   */
  updateAnswerRecord: {
    methodKind: "unary";
    input: typeof UpdateAnswerRecordRequestSchema;
    output: typeof AnswerRecordSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_dialogflow_v2beta1_answer_record, 0);
