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
// @generated from file google/chat/v1/chat_service.proto (package google.chat.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../api/annotations_pb";
import { file_google_api_client } from "../../api/client_pb";
import type { AttachmentSchema, GetAttachmentRequestSchema, UploadAttachmentRequestSchema, UploadAttachmentResponseSchema } from "./attachment_pb";
import { file_google_chat_v1_attachment } from "./attachment_pb";
import type { CreateMembershipRequestSchema, DeleteMembershipRequestSchema, GetMembershipRequestSchema, ListMembershipsRequestSchema, ListMembershipsResponseSchema, MembershipSchema, UpdateMembershipRequestSchema } from "./membership_pb";
import { file_google_chat_v1_membership } from "./membership_pb";
import type { CreateMessageRequestSchema, DeleteMessageRequestSchema, GetMessageRequestSchema, ListMessagesRequestSchema, ListMessagesResponseSchema, MessageSchema, UpdateMessageRequestSchema } from "./message_pb";
import { file_google_chat_v1_message } from "./message_pb";
import type { CreateReactionRequestSchema, DeleteReactionRequestSchema, ListReactionsRequestSchema, ListReactionsResponseSchema, ReactionSchema } from "./reaction_pb";
import { file_google_chat_v1_reaction } from "./reaction_pb";
import type { CompleteImportSpaceRequestSchema, CompleteImportSpaceResponseSchema, CreateSpaceRequestSchema, DeleteSpaceRequestSchema, FindDirectMessageRequestSchema, GetSpaceRequestSchema, ListSpacesRequestSchema, ListSpacesResponseSchema, SearchSpacesRequestSchema, SearchSpacesResponseSchema, SpaceSchema, UpdateSpaceRequestSchema } from "./space_pb";
import { file_google_chat_v1_space } from "./space_pb";
import type { GetSpaceEventRequestSchema, ListSpaceEventsRequestSchema, ListSpaceEventsResponseSchema, SpaceEventSchema } from "./space_event_pb";
import { file_google_chat_v1_space_event } from "./space_event_pb";
import type { GetSpaceReadStateRequestSchema, SpaceReadStateSchema, UpdateSpaceReadStateRequestSchema } from "./space_read_state_pb";
import { file_google_chat_v1_space_read_state } from "./space_read_state_pb";
import type { SetUpSpaceRequestSchema } from "./space_setup_pb";
import { file_google_chat_v1_space_setup } from "./space_setup_pb";
import type { GetThreadReadStateRequestSchema, ThreadReadStateSchema } from "./thread_read_state_pb";
import { file_google_chat_v1_thread_read_state } from "./thread_read_state_pb";
import type { EmptySchema } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file google/chat/v1/chat_service.proto.
 */
export const file_google_chat_v1_chat_service: GenFile = /*@__PURE__*/
  fileDesc("CiFnb29nbGUvY2hhdC92MS9jaGF0X3NlcnZpY2UucHJvdG8SDmdvb2dsZS5jaGF0LnYxMpMqCgtDaGF0U2VydmljZRKbAQoNQ3JlYXRlTWVzc2FnZRIkLmdvb2dsZS5jaGF0LnYxLkNyZWF0ZU1lc3NhZ2VSZXF1ZXN0GhcuZ29vZ2xlLmNoYXQudjEuTWVzc2FnZSJL2kEZcGFyZW50LG1lc3NhZ2UsbWVzc2FnZV9pZILT5JMCKToHbWVzc2FnZSIeL3YxL3twYXJlbnQ9c3BhY2VzLyp9L21lc3NhZ2VzEooBCgxMaXN0TWVzc2FnZXMSIy5nb29nbGUuY2hhdC52MS5MaXN0TWVzc2FnZXNSZXF1ZXN0GiQuZ29vZ2xlLmNoYXQudjEuTGlzdE1lc3NhZ2VzUmVzcG9uc2UiL9pBBnBhcmVudILT5JMCIBIeL3YxL3twYXJlbnQ9c3BhY2VzLyp9L21lc3NhZ2VzEpIBCg9MaXN0TWVtYmVyc2hpcHMSJi5nb29nbGUuY2hhdC52MS5MaXN0TWVtYmVyc2hpcHNSZXF1ZXN0GicuZ29vZ2xlLmNoYXQudjEuTGlzdE1lbWJlcnNoaXBzUmVzcG9uc2UiLtpBBnBhcmVudILT5JMCHxIdL3YxL3twYXJlbnQ9c3BhY2VzLyp9L21lbWJlcnMSfwoNR2V0TWVtYmVyc2hpcBIkLmdvb2dsZS5jaGF0LnYxLkdldE1lbWJlcnNoaXBSZXF1ZXN0GhouZ29vZ2xlLmNoYXQudjEuTWVtYmVyc2hpcCIs2kEEbmFtZYLT5JMCHxIdL3YxL3tuYW1lPXNwYWNlcy8qL21lbWJlcnMvKn0SdwoKR2V0TWVzc2FnZRIhLmdvb2dsZS5jaGF0LnYxLkdldE1lc3NhZ2VSZXF1ZXN0GhcuZ29vZ2xlLmNoYXQudjEuTWVzc2FnZSIt2kEEbmFtZYLT5JMCIBIeL3YxL3tuYW1lPXNwYWNlcy8qL21lc3NhZ2VzLyp9EtEBCg1VcGRhdGVNZXNzYWdlEiQuZ29vZ2xlLmNoYXQudjEuVXBkYXRlTWVzc2FnZVJlcXVlc3QaFy5nb29nbGUuY2hhdC52MS5NZXNzYWdlIoAB2kETbWVzc2FnZSx1cGRhdGVfbWFza4LT5JMCZDoHbWVzc2FnZVoxOgdtZXNzYWdlMiYvdjEve21lc3NhZ2UubmFtZT1zcGFjZXMvKi9tZXNzYWdlcy8qfRomL3YxL3ttZXNzYWdlLm5hbWU9c3BhY2VzLyovbWVzc2FnZXMvKn0SfAoNRGVsZXRlTWVzc2FnZRIkLmdvb2dsZS5jaGF0LnYxLkRlbGV0ZU1lc3NhZ2VSZXF1ZXN0GhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5Ii3aQQRuYW1lgtPkkwIgKh4vdjEve25hbWU9c3BhY2VzLyovbWVzc2FnZXMvKn0SjgEKDUdldEF0dGFjaG1lbnQSJC5nb29nbGUuY2hhdC52MS5HZXRBdHRhY2htZW50UmVxdWVzdBoaLmdvb2dsZS5jaGF0LnYxLkF0dGFjaG1lbnQiO9pBBG5hbWWC0+STAi4SLC92MS97bmFtZT1zcGFjZXMvKi9tZXNzYWdlcy8qL2F0dGFjaG1lbnRzLyp9EpoBChBVcGxvYWRBdHRhY2htZW50EicuZ29vZ2xlLmNoYXQudjEuVXBsb2FkQXR0YWNobWVudFJlcXVlc3QaKC5nb29nbGUuY2hhdC52MS5VcGxvYWRBdHRhY2htZW50UmVzcG9uc2UiM4LT5JMCLToBKiIoL3YxL3twYXJlbnQ9c3BhY2VzLyp9L2F0dGFjaG1lbnRzOnVwbG9hZBJqCgpMaXN0U3BhY2VzEiEuZ29vZ2xlLmNoYXQudjEuTGlzdFNwYWNlc1JlcXVlc3QaIi5nb29nbGUuY2hhdC52MS5MaXN0U3BhY2VzUmVzcG9uc2UiFdpBAILT5JMCDBIKL3YxL3NwYWNlcxJ3CgxTZWFyY2hTcGFjZXMSIy5nb29nbGUuY2hhdC52MS5TZWFyY2hTcGFjZXNSZXF1ZXN0GiQuZ29vZ2xlLmNoYXQudjEuU2VhcmNoU3BhY2VzUmVzcG9uc2UiHNpBAILT5JMCExIRL3YxL3NwYWNlczpzZWFyY2gSZgoIR2V0U3BhY2USHy5nb29nbGUuY2hhdC52MS5HZXRTcGFjZVJlcXVlc3QaFS5nb29nbGUuY2hhdC52MS5TcGFjZSIi2kEEbmFtZYLT5JMCFRITL3YxL3tuYW1lPXNwYWNlcy8qfRJrCgtDcmVhdGVTcGFjZRIiLmdvb2dsZS5jaGF0LnYxLkNyZWF0ZVNwYWNlUmVxdWVzdBoVLmdvb2dsZS5jaGF0LnYxLlNwYWNlIiHaQQVzcGFjZYLT5JMCEzoFc3BhY2UiCi92MS9zcGFjZXMSYwoKU2V0VXBTcGFjZRIhLmdvb2dsZS5jaGF0LnYxLlNldFVwU3BhY2VSZXF1ZXN0GhUuZ29vZ2xlLmNoYXQudjEuU3BhY2UiG4LT5JMCFToBKiIQL3YxL3NwYWNlczpzZXR1cBKGAQoLVXBkYXRlU3BhY2USIi5nb29nbGUuY2hhdC52MS5VcGRhdGVTcGFjZVJlcXVlc3QaFS5nb29nbGUuY2hhdC52MS5TcGFjZSI82kERc3BhY2UsdXBkYXRlX21hc2uC0+STAiI6BXNwYWNlMhkvdjEve3NwYWNlLm5hbWU9c3BhY2VzLyp9Em0KC0RlbGV0ZVNwYWNlEiIuZ29vZ2xlLmNoYXQudjEuRGVsZXRlU3BhY2VSZXF1ZXN0GhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5IiLaQQRuYW1lgtPkkwIVKhMvdjEve25hbWU9c3BhY2VzLyp9Ep0BChNDb21wbGV0ZUltcG9ydFNwYWNlEiouZ29vZ2xlLmNoYXQudjEuQ29tcGxldGVJbXBvcnRTcGFjZVJlcXVlc3QaKy5nb29nbGUuY2hhdC52MS5Db21wbGV0ZUltcG9ydFNwYWNlUmVzcG9uc2UiLYLT5JMCJzoBKiIiL3YxL3tuYW1lPXNwYWNlcy8qfTpjb21wbGV0ZUltcG9ydBJ6ChFGaW5kRGlyZWN0TWVzc2FnZRIoLmdvb2dsZS5jaGF0LnYxLkZpbmREaXJlY3RNZXNzYWdlUmVxdWVzdBoVLmdvb2dsZS5jaGF0LnYxLlNwYWNlIiSC0+STAh4SHC92MS9zcGFjZXM6ZmluZERpcmVjdE1lc3NhZ2USngEKEENyZWF0ZU1lbWJlcnNoaXASJy5nb29nbGUuY2hhdC52MS5DcmVhdGVNZW1iZXJzaGlwUmVxdWVzdBoaLmdvb2dsZS5jaGF0LnYxLk1lbWJlcnNoaXAiRdpBEXBhcmVudCxtZW1iZXJzaGlwgtPkkwIrOgptZW1iZXJzaGlwIh0vdjEve3BhcmVudD1zcGFjZXMvKn0vbWVtYmVycxKuAQoQVXBkYXRlTWVtYmVyc2hpcBInLmdvb2dsZS5jaGF0LnYxLlVwZGF0ZU1lbWJlcnNoaXBSZXF1ZXN0GhouZ29vZ2xlLmNoYXQudjEuTWVtYmVyc2hpcCJV2kEWbWVtYmVyc2hpcCx1cGRhdGVfbWFza4LT5JMCNjoKbWVtYmVyc2hpcDIoL3YxL3ttZW1iZXJzaGlwLm5hbWU9c3BhY2VzLyovbWVtYmVycy8qfRKFAQoQRGVsZXRlTWVtYmVyc2hpcBInLmdvb2dsZS5jaGF0LnYxLkRlbGV0ZU1lbWJlcnNoaXBSZXF1ZXN0GhouZ29vZ2xlLmNoYXQudjEuTWVtYmVyc2hpcCIs2kEEbmFtZYLT5JMCHyodL3YxL3tuYW1lPXNwYWNlcy8qL21lbWJlcnMvKn0SoQEKDkNyZWF0ZVJlYWN0aW9uEiUuZ29vZ2xlLmNoYXQudjEuQ3JlYXRlUmVhY3Rpb25SZXF1ZXN0GhguZ29vZ2xlLmNoYXQudjEuUmVhY3Rpb24iTtpBD3BhcmVudCxyZWFjdGlvboLT5JMCNjoIcmVhY3Rpb24iKi92MS97cGFyZW50PXNwYWNlcy8qL21lc3NhZ2VzLyp9L3JlYWN0aW9ucxKZAQoNTGlzdFJlYWN0aW9ucxIkLmdvb2dsZS5jaGF0LnYxLkxpc3RSZWFjdGlvbnNSZXF1ZXN0GiUuZ29vZ2xlLmNoYXQudjEuTGlzdFJlYWN0aW9uc1Jlc3BvbnNlIjvaQQZwYXJlbnSC0+STAiwSKi92MS97cGFyZW50PXNwYWNlcy8qL21lc3NhZ2VzLyp9L3JlYWN0aW9ucxKKAQoORGVsZXRlUmVhY3Rpb24SJS5nb29nbGUuY2hhdC52MS5EZWxldGVSZWFjdGlvblJlcXVlc3QaFi5nb29nbGUucHJvdG9idWYuRW1wdHkiOdpBBG5hbWWC0+STAiwqKi92MS97bmFtZT1zcGFjZXMvKi9tZXNzYWdlcy8qL3JlYWN0aW9ucy8qfRKYAQoRR2V0U3BhY2VSZWFkU3RhdGUSKC5nb29nbGUuY2hhdC52MS5HZXRTcGFjZVJlYWRTdGF0ZVJlcXVlc3QaHi5nb29nbGUuY2hhdC52MS5TcGFjZVJlYWRTdGF0ZSI52kEEbmFtZYLT5JMCLBIqL3YxL3tuYW1lPXVzZXJzLyovc3BhY2VzLyovc3BhY2VSZWFkU3RhdGV9EtkBChRVcGRhdGVTcGFjZVJlYWRTdGF0ZRIrLmdvb2dsZS5jaGF0LnYxLlVwZGF0ZVNwYWNlUmVhZFN0YXRlUmVxdWVzdBoeLmdvb2dsZS5jaGF0LnYxLlNwYWNlUmVhZFN0YXRlInTaQRxzcGFjZV9yZWFkX3N0YXRlLHVwZGF0ZV9tYXNrgtPkkwJPOhBzcGFjZV9yZWFkX3N0YXRlMjsvdjEve3NwYWNlX3JlYWRfc3RhdGUubmFtZT11c2Vycy8qL3NwYWNlcy8qL3NwYWNlUmVhZFN0YXRlfRKmAQoSR2V0VGhyZWFkUmVhZFN0YXRlEikuZ29vZ2xlLmNoYXQudjEuR2V0VGhyZWFkUmVhZFN0YXRlUmVxdWVzdBofLmdvb2dsZS5jaGF0LnYxLlRocmVhZFJlYWRTdGF0ZSJE2kEEbmFtZYLT5JMCNxI1L3YxL3tuYW1lPXVzZXJzLyovc3BhY2VzLyovdGhyZWFkcy8qL3RocmVhZFJlYWRTdGF0ZX0SgwEKDUdldFNwYWNlRXZlbnQSJC5nb29nbGUuY2hhdC52MS5HZXRTcGFjZUV2ZW50UmVxdWVzdBoaLmdvb2dsZS5jaGF0LnYxLlNwYWNlRXZlbnQiMNpBBG5hbWWC0+STAiMSIS92MS97bmFtZT1zcGFjZXMvKi9zcGFjZUV2ZW50cy8qfRKdAQoPTGlzdFNwYWNlRXZlbnRzEiYuZ29vZ2xlLmNoYXQudjEuTGlzdFNwYWNlRXZlbnRzUmVxdWVzdBonLmdvb2dsZS5jaGF0LnYxLkxpc3RTcGFjZUV2ZW50c1Jlc3BvbnNlIjnaQQ1wYXJlbnQsZmlsdGVygtPkkwIjEiEvdjEve3BhcmVudD1zcGFjZXMvKn0vc3BhY2VFdmVudHMaqQnKQRNjaGF0Lmdvb2dsZWFwaXMuY29t0kGPCWh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2hhdC5hZG1pbi5kZWxldGUsaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jaGF0LmFkbWluLm1lbWJlcnNoaXBzLGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2hhdC5hZG1pbi5tZW1iZXJzaGlwcy5yZWFkb25seSxodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NoYXQuYWRtaW4uc3BhY2VzLGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2hhdC5hZG1pbi5zcGFjZXMucmVhZG9ubHksaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jaGF0LmJvdCxodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NoYXQuZGVsZXRlLGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2hhdC5pbXBvcnQsaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jaGF0Lm1lbWJlcnNoaXBzLGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2hhdC5tZW1iZXJzaGlwcy5hcHAsaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jaGF0Lm1lbWJlcnNoaXBzLnJlYWRvbmx5LGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2hhdC5tZXNzYWdlcyxodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NoYXQubWVzc2FnZXMuY3JlYXRlLGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2hhdC5tZXNzYWdlcy5yZWFjdGlvbnMsaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jaGF0Lm1lc3NhZ2VzLnJlYWN0aW9ucy5jcmVhdGUsaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jaGF0Lm1lc3NhZ2VzLnJlYWN0aW9ucy5yZWFkb25seSxodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NoYXQubWVzc2FnZXMucmVhZG9ubHksaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jaGF0LnNwYWNlcyxodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NoYXQuc3BhY2VzLmNyZWF0ZSxodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NoYXQuc3BhY2VzLnJlYWRvbmx5LGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2hhdC51c2Vycy5yZWFkc3RhdGUsaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jaGF0LnVzZXJzLnJlYWRzdGF0ZS5yZWFkb25seUKpAQoSY29tLmdvb2dsZS5jaGF0LnYxQhBDaGF0U2VydmljZVByb3RvUAFaLGNsb3VkLmdvb2dsZS5jb20vZ28vY2hhdC9hcGl2MS9jaGF0cGI7Y2hhdHBiogILRFlOQVBJUHJvdG+qAhNHb29nbGUuQXBwcy5DaGF0LlYxygITR29vZ2xlXEFwcHNcQ2hhdFxWMeoCFkdvb2dsZTo6QXBwczo6Q2hhdDo6VjFiBnByb3RvMw", [file_google_api_annotations, file_google_api_client, file_google_chat_v1_attachment, file_google_chat_v1_membership, file_google_chat_v1_message, file_google_chat_v1_reaction, file_google_chat_v1_space, file_google_chat_v1_space_event, file_google_chat_v1_space_read_state, file_google_chat_v1_space_setup, file_google_chat_v1_thread_read_state, file_google_protobuf_empty]);

/**
 * Enables developers to build Chat apps and
 * integrations on Google Chat Platform.
 *
 * @generated from service google.chat.v1.ChatService
 */
export const ChatService: GenService<{
  /**
   * Creates a message in a Google Chat space. The maximum message size,
   * including text and cards, is 32,000 bytes. For an example, see [Send a
   * message](https://developers.google.com/workspace/chat/create-messages).
   *
   * Calling this method requires
   * [authentication](https://developers.google.com/workspace/chat/authenticate-authorize)
   * and supports the following authentication types:
   *
   * - For text messages, user authentication or app authentication are
   * supported.
   * - For card messages, only app authentication is supported. (Only Chat apps
   * can create card messages.)
   *
   * @generated from rpc google.chat.v1.ChatService.CreateMessage
   */
  createMessage: {
    methodKind: "unary";
    input: typeof CreateMessageRequestSchema;
    output: typeof MessageSchema;
  },
  /**
   * Lists messages in a space that the caller is a member of, including
   * messages from blocked members and spaces. For an example, see
   * [List messages](/chat/api/guides/v1/messages/list).
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.ListMessages
   */
  listMessages: {
    methodKind: "unary";
    input: typeof ListMessagesRequestSchema;
    output: typeof ListMessagesResponseSchema;
  },
  /**
   * Lists memberships in a space. For an example, see [List users and Google
   * Chat apps in a
   * space](https://developers.google.com/workspace/chat/list-members). Listing
   * memberships with [app
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app)
   * lists memberships in spaces that the Chat app has
   * access to, but excludes Chat app memberships,
   * including its own. Listing memberships with
   * [User
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)
   * lists memberships in spaces that the authenticated user has access to.
   *
   * Requires
   * [authentication](https://developers.google.com/workspace/chat/authenticate-authorize).
   * Supports
   * [app
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app)
   * and [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.ListMemberships
   */
  listMemberships: {
    methodKind: "unary";
    input: typeof ListMembershipsRequestSchema;
    output: typeof ListMembershipsResponseSchema;
  },
  /**
   * Returns details about a membership. For an example, see
   * [Get details about a user's or Google Chat app's
   * membership](https://developers.google.com/workspace/chat/get-members).
   *
   * Requires
   * [authentication](https://developers.google.com/workspace/chat/authenticate-authorize).
   * Supports
   * [app
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app)
   * and [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.GetMembership
   */
  getMembership: {
    methodKind: "unary";
    input: typeof GetMembershipRequestSchema;
    output: typeof MembershipSchema;
  },
  /**
   * Returns details about a message.
   * For an example, see [Get details about a
   * message](https://developers.google.com/workspace/chat/get-messages).
   *
   * Requires
   * [authentication](https://developers.google.com/workspace/chat/authenticate-authorize).
   * Supports
   * [app
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app)
   * and [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * Note: Might return a message from a blocked member or space.
   *
   * @generated from rpc google.chat.v1.ChatService.GetMessage
   */
  getMessage: {
    methodKind: "unary";
    input: typeof GetMessageRequestSchema;
    output: typeof MessageSchema;
  },
  /**
   * Updates a message. There's a difference between the `patch` and `update`
   * methods. The `patch`
   * method uses a `patch` request while the `update` method uses a `put`
   * request. We recommend using the `patch` method. For an example, see
   * [Update a
   * message](https://developers.google.com/workspace/chat/update-messages).
   *
   * Requires
   * [authentication](https://developers.google.com/workspace/chat/authenticate-authorize).
   * Supports
   * [app
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app)
   * and [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   * When using app authentication, requests can only update messages
   * created by the calling Chat app.
   *
   * @generated from rpc google.chat.v1.ChatService.UpdateMessage
   */
  updateMessage: {
    methodKind: "unary";
    input: typeof UpdateMessageRequestSchema;
    output: typeof MessageSchema;
  },
  /**
   * Deletes a message.
   * For an example, see [Delete a
   * message](https://developers.google.com/workspace/chat/delete-messages).
   *
   * Requires
   * [authentication](https://developers.google.com/workspace/chat/authenticate-authorize).
   * Supports
   * [app
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app)
   * and [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   * When using app authentication, requests can only delete messages
   * created by the calling Chat app.
   *
   * @generated from rpc google.chat.v1.ChatService.DeleteMessage
   */
  deleteMessage: {
    methodKind: "unary";
    input: typeof DeleteMessageRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Gets the metadata of a message attachment. The attachment data is fetched
   * using the [media
   * API](https://developers.google.com/workspace/chat/api/reference/rest/v1/media/download).
   * For an example, see
   * [Get metadata about a message
   * attachment](https://developers.google.com/workspace/chat/get-media-attachments).
   * Requires [app
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
   *
   * @generated from rpc google.chat.v1.ChatService.GetAttachment
   */
  getAttachment: {
    methodKind: "unary";
    input: typeof GetAttachmentRequestSchema;
    output: typeof AttachmentSchema;
  },
  /**
   * Uploads an attachment. For an example, see
   * [Upload media as a file
   * attachment](https://developers.google.com/workspace/chat/upload-media-attachments).
   * Requires user
   * [authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * You can upload attachments up to 200 MB. Certain file types aren't
   * supported. For details, see [File types blocked by Google
   * Chat](https://support.google.com/chat/answer/7651457?&co=GENIE.Platform%3DDesktop#File%20types%20blocked%20in%20Google%20Chat).
   *
   * @generated from rpc google.chat.v1.ChatService.UploadAttachment
   */
  uploadAttachment: {
    methodKind: "unary";
    input: typeof UploadAttachmentRequestSchema;
    output: typeof UploadAttachmentResponseSchema;
  },
  /**
   * Lists spaces the caller is a member of. Group chats and DMs aren't listed
   * until the first message is sent. For an example, see
   * [List
   * spaces](https://developers.google.com/workspace/chat/list-spaces).
   *
   * Requires
   * [authentication](https://developers.google.com/workspace/chat/authenticate-authorize).
   * Supports
   * [app
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app)
   * and [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * Lists spaces visible to the caller or authenticated user. Group chats
   * and DMs aren't listed until the first message is sent.
   *
   * To list all named spaces by Google Workspace organization, use the
   * [`spaces.search()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search)
   * method using Workspace administrator privileges instead.
   *
   * @generated from rpc google.chat.v1.ChatService.ListSpaces
   */
  listSpaces: {
    methodKind: "unary";
    input: typeof ListSpacesRequestSchema;
    output: typeof ListSpacesResponseSchema;
  },
  /**
   * Returns a list of spaces in a Google Workspace organization based on an
   * administrator's search. Requires [user
   * authentication with administrator
   * privileges](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#admin-privileges).
   * In the request, set `use_admin_access` to `true`.
   *
   * @generated from rpc google.chat.v1.ChatService.SearchSpaces
   */
  searchSpaces: {
    methodKind: "unary";
    input: typeof SearchSpacesRequestSchema;
    output: typeof SearchSpacesResponseSchema;
  },
  /**
   * Returns details about a space. For an example, see
   * [Get details about a
   * space](https://developers.google.com/workspace/chat/get-spaces).
   *
   * Requires
   * [authentication](https://developers.google.com/workspace/chat/authenticate-authorize).
   * Supports
   * [app
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app)
   * and [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.GetSpace
   */
  getSpace: {
    methodKind: "unary";
    input: typeof GetSpaceRequestSchema;
    output: typeof SpaceSchema;
  },
  /**
   * Creates a named space. Spaces grouped by topics aren't supported. For an
   * example, see [Create a
   * space](https://developers.google.com/workspace/chat/create-spaces).
   *
   *  If you receive the error message `ALREADY_EXISTS` when creating
   *  a space, try a different `displayName`. An existing space within
   *  the Google Workspace organization might already use this display name.
   *
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.CreateSpace
   */
  createSpace: {
    methodKind: "unary";
    input: typeof CreateSpaceRequestSchema;
    output: typeof SpaceSchema;
  },
  /**
   * Creates a space and adds specified users to it. The calling user is
   * automatically added to the space, and shouldn't be specified as a
   * membership in the request. For an example, see
   * [Set up a space with initial
   * members](https://developers.google.com/workspace/chat/set-up-spaces).
   *
   * To specify the human members to add, add memberships with the appropriate
   * `membership.member.name`. To add a human user, use `users/{user}`, where
   * `{user}` can be the email address for the user. For users in the same
   * Workspace organization `{user}` can also be the `id` for the person from
   * the People API, or the `id` for the user in the Directory API. For example,
   * if the People API Person profile ID for `user@example.com` is `123456789`,
   * you can add the user to the space by setting the `membership.member.name`
   * to `users/user@example.com` or `users/123456789`.
   *
   * To specify the Google groups to add, add memberships with the
   * appropriate `membership.group_member.name`. To add or invite a Google
   * group, use `groups/{group}`, where `{group}` is the `id` for the group from
   * the Cloud Identity Groups API. For example, you can use [Cloud Identity
   * Groups lookup
   * API](https://cloud.google.com/identity/docs/reference/rest/v1/groups/lookup)
   * to retrieve the ID `123456789` for group email `group@example.com`, then
   * you can add the group to the space by setting the
   * `membership.group_member.name` to `groups/123456789`. Group email is not
   * supported, and Google groups can only be added as members in named spaces.
   *
   * For a named space or group chat, if the caller blocks, or is blocked
   * by some members, or doesn't have permission to add some members, then
   * those members aren't added to the created space.
   *
   * To create a direct message (DM) between the calling user and another human
   * user, specify exactly one membership to represent the human user. If
   * one user blocks the other, the request fails and the DM isn't created.
   *
   * To create a DM between the calling user and the calling app, set
   * `Space.singleUserBotDm` to `true` and don't specify any memberships. You
   * can only use this method to set up a DM with the calling app. To add the
   * calling app as a member of a space or an existing DM between two human
   * users, see
   * [Invite or add a user or app to a
   * space](https://developers.google.com/workspace/chat/create-members).
   *
   * If a DM already exists between two users, even when one user blocks the
   * other at the time a request is made, then the existing DM is returned.
   *
   * Spaces with threaded replies aren't supported. If you receive the error
   * message `ALREADY_EXISTS` when setting up a space, try a different
   * `displayName`. An existing space within the Google Workspace organization
   * might already use this display name.
   *
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.SetUpSpace
   */
  setUpSpace: {
    methodKind: "unary";
    input: typeof SetUpSpaceRequestSchema;
    output: typeof SpaceSchema;
  },
  /**
   * Updates a space. For an example, see
   * [Update a
   * space](https://developers.google.com/workspace/chat/update-spaces).
   *
   * If you're updating the `displayName` field and receive the error message
   * `ALREADY_EXISTS`, try a different display name.. An existing space within
   * the Google Workspace organization might already use this display name.
   *
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.UpdateSpace
   */
  updateSpace: {
    methodKind: "unary";
    input: typeof UpdateSpaceRequestSchema;
    output: typeof SpaceSchema;
  },
  /**
   * Deletes a named space. Always performs a cascading delete, which means
   * that the space's child resources—like messages posted in the space and
   * memberships in the space—are also deleted. For an example, see
   * [Delete a
   * space](https://developers.google.com/workspace/chat/delete-spaces).
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)
   * from a user who has permission to delete the space.
   *
   * @generated from rpc google.chat.v1.ChatService.DeleteSpace
   */
  deleteSpace: {
    methodKind: "unary";
    input: typeof DeleteSpaceRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Completes the
   * [import process](https://developers.google.com/workspace/chat/import-data)
   * for the specified space and makes it visible to users.
   * Requires app authentication and domain-wide delegation. For more
   * information, see [Authorize Google Chat apps to import
   * data](https://developers.google.com/workspace/chat/authorize-import).
   *
   * @generated from rpc google.chat.v1.ChatService.CompleteImportSpace
   */
  completeImportSpace: {
    methodKind: "unary";
    input: typeof CompleteImportSpaceRequestSchema;
    output: typeof CompleteImportSpaceResponseSchema;
  },
  /**
   * Returns the existing direct message with the specified user. If no direct
   * message space is found, returns a `404 NOT_FOUND` error. For an example,
   * see
   * [Find a direct message](/chat/api/guides/v1/spaces/find-direct-message).
   *
   * With [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user),
   * returns the direct message space between the specified user and the
   * authenticated user.
   *
   * With [app
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app),
   * returns the direct message space between the specified user and the calling
   * Chat app.
   *
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)
   * or [app
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
   *
   * @generated from rpc google.chat.v1.ChatService.FindDirectMessage
   */
  findDirectMessage: {
    methodKind: "unary";
    input: typeof FindDirectMessageRequestSchema;
    output: typeof SpaceSchema;
  },
  /**
   * Creates a human membership or app membership for the calling app. Creating
   * memberships for other apps isn't supported. For an example, see
   * [Invite or add a user or a Google Chat app to a
   * space](https://developers.google.com/workspace/chat/create-members).
   * When creating a membership, if the specified member has their auto-accept
   * policy turned off, then they're invited, and must accept the space
   * invitation before joining. Otherwise, creating a membership adds the member
   * directly to the specified space. Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * To specify the member to add, set the `membership.member.name` for the
   * human or app member, or set the `membership.group_member.name` for the
   * group member.
   *
   * - To add the calling app to a space or a direct message between two human
   *   users, use `users/app`. Unable to add other
   *   apps to the space.
   *
   * - To add a human user, use `users/{user}`, where `{user}` can be the email
   * address for the user. For users in the same Workspace organization `{user}`
   * can also be the `id` for the person from the People API, or the `id` for
   * the user in the Directory API. For example, if the People API Person
   * profile ID for `user@example.com` is `123456789`, you can add the user to
   * the space by setting the `membership.member.name` to
   * `users/user@example.com` or `users/123456789`.
   *
   * - To add or invite a Google group in a named space, use
   * `groups/{group}`, where `{group}` is the `id` for the group from the Cloud
   * Identity Groups API. For example, you can use [Cloud Identity Groups lookup
   * API](https://cloud.google.com/identity/docs/reference/rest/v1/groups/lookup)
   * to retrieve the ID `123456789` for group email `group@example.com`, then
   * you can add or invite the group to a named space by setting the
   * `membership.group_member.name` to `groups/123456789`. Group email is not
   * supported, and Google groups can only be added as members in named spaces.
   *
   * @generated from rpc google.chat.v1.ChatService.CreateMembership
   */
  createMembership: {
    methodKind: "unary";
    input: typeof CreateMembershipRequestSchema;
    output: typeof MembershipSchema;
  },
  /**
   * Updates a membership. For an example, see [Update a user's membership in
   * a space](https://developers.google.com/workspace/chat/update-members).
   *
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.UpdateMembership
   */
  updateMembership: {
    methodKind: "unary";
    input: typeof UpdateMembershipRequestSchema;
    output: typeof MembershipSchema;
  },
  /**
   * Deletes a membership. For an example, see
   * [Remove a user or a Google Chat app from a
   * space](https://developers.google.com/workspace/chat/delete-members).
   *
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.DeleteMembership
   */
  deleteMembership: {
    methodKind: "unary";
    input: typeof DeleteMembershipRequestSchema;
    output: typeof MembershipSchema;
  },
  /**
   * Creates a reaction and adds it to a message. Only unicode emojis are
   * supported. For an example, see
   * [Add a reaction to a
   * message](https://developers.google.com/workspace/chat/create-reactions).
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.CreateReaction
   */
  createReaction: {
    methodKind: "unary";
    input: typeof CreateReactionRequestSchema;
    output: typeof ReactionSchema;
  },
  /**
   * Lists reactions to a message. For an example, see
   * [List reactions for a
   * message](https://developers.google.com/workspace/chat/list-reactions).
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.ListReactions
   */
  listReactions: {
    methodKind: "unary";
    input: typeof ListReactionsRequestSchema;
    output: typeof ListReactionsResponseSchema;
  },
  /**
   * Deletes a reaction to a message. Only unicode emojis are supported.
   * For an example, see
   * [Delete a
   * reaction](https://developers.google.com/workspace/chat/delete-reactions).
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.DeleteReaction
   */
  deleteReaction: {
    methodKind: "unary";
    input: typeof DeleteReactionRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Returns details about a user's read state within a space, used to identify
   * read and unread messages. For an example, see [Get details about a user's
   * space read
   * state](https://developers.google.com/workspace/chat/get-space-read-state).
   *
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.GetSpaceReadState
   */
  getSpaceReadState: {
    methodKind: "unary";
    input: typeof GetSpaceReadStateRequestSchema;
    output: typeof SpaceReadStateSchema;
  },
  /**
   * Updates a user's read state within a space, used to identify read and
   * unread messages. For an example, see [Update a user's space read
   * state](https://developers.google.com/workspace/chat/update-space-read-state).
   *
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.UpdateSpaceReadState
   */
  updateSpaceReadState: {
    methodKind: "unary";
    input: typeof UpdateSpaceReadStateRequestSchema;
    output: typeof SpaceReadStateSchema;
  },
  /**
   * Returns details about a user's read state within a thread, used to identify
   * read and unread messages. For an example, see [Get details about a user's
   * thread read
   * state](https://developers.google.com/workspace/chat/get-thread-read-state).
   *
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   *
   * @generated from rpc google.chat.v1.ChatService.GetThreadReadState
   */
  getThreadReadState: {
    methodKind: "unary";
    input: typeof GetThreadReadStateRequestSchema;
    output: typeof ThreadReadStateSchema;
  },
  /**
   * Returns an event from a Google Chat space. The [event
   * payload](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.oneof_payload)
   * contains the most recent version of the resource that changed. For example,
   * if you request an event about a new message but the message was later
   * updated, the server returns the updated `Message` resource in the event
   * payload.
   *
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   * To get an event, the authenticated user must be a member of the space.
   *
   * For an example, see [Get details about an
   * event from a Google Chat
   * space](https://developers.google.com/workspace/chat/get-space-event).
   *
   * @generated from rpc google.chat.v1.ChatService.GetSpaceEvent
   */
  getSpaceEvent: {
    methodKind: "unary";
    input: typeof GetSpaceEventRequestSchema;
    output: typeof SpaceEventSchema;
  },
  /**
   * Lists events from a Google Chat space. For each event, the
   * [payload](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.oneof_payload)
   * contains the most recent version of the Chat resource. For example, if you
   * list events about new space members, the server returns `Membership`
   * resources that contain the latest membership details. If new members were
   * removed during the requested period, the event payload contains an empty
   * `Membership` resource.
   *
   * Requires [user
   * authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
   * To list events, the authenticated user must be a member of the space.
   *
   * For an example, see [List events from a Google Chat
   * space](https://developers.google.com/workspace/chat/list-space-events).
   *
   * @generated from rpc google.chat.v1.ChatService.ListSpaceEvents
   */
  listSpaceEvents: {
    methodKind: "unary";
    input: typeof ListSpaceEventsRequestSchema;
    output: typeof ListSpaceEventsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_chat_v1_chat_service, 0);
