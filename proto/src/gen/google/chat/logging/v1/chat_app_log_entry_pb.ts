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
// @generated from file google/chat/logging/v1/chat_app_log_entry.proto (package google.chat.logging.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Status } from "../../../rpc/status_pb";
import { file_google_rpc_status } from "../../../rpc/status_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/chat/logging/v1/chat_app_log_entry.proto.
 */
export const file_google_chat_logging_v1_chat_app_log_entry: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvY2hhdC9sb2dnaW5nL3YxL2NoYXRfYXBwX2xvZ19lbnRyeS5wcm90bxIWZ29vZ2xlLmNoYXQubG9nZ2luZy52MSJlCg9DaGF0QXBwTG9nRW50cnkSEgoKZGVwbG95bWVudBgBIAEoCRIhCgVlcnJvchgCIAEoCzISLmdvb2dsZS5ycGMuU3RhdHVzEhsKE2RlcGxveW1lbnRfZnVuY3Rpb24YAyABKAlCcAoaY29tLmdvb2dsZS5jaGF0LmxvZ2dpbmcudjFCFENoYXRBcHBMb2dFbnRyeVByb3RvUAFaOmNsb3VkLmdvb2dsZS5jb20vZ28vY2hhdC9sb2dnaW5nL2FwaXYxL2xvZ2dpbmdwYjtsb2dnaW5ncGJiBnByb3RvMw", [file_google_rpc_status]);

/**
 * JSON payload of error messages. If the Cloud Logging API is enabled, these
 * error messages are logged to
 * [Google Cloud Logging](https://cloud.google.com/logging/docs).
 *
 * @generated from message google.chat.logging.v1.ChatAppLogEntry
 */
export type ChatAppLogEntry = Message<"google.chat.logging.v1.ChatAppLogEntry"> & {
  /**
   * The deployment that caused the error. For Chat bots built in Apps Script,
   * this is the deployment ID defined by Apps Script.
   *
   * @generated from field: string deployment = 1;
   */
  deployment: string;

  /**
   * The error code and message.
   *
   * @generated from field: google.rpc.Status error = 2;
   */
  error?: Status;

  /**
   * The unencrypted `callback_method` name that was running when the error was
   * encountered.
   *
   * @generated from field: string deployment_function = 3;
   */
  deploymentFunction: string;
};

/**
 * Describes the message google.chat.logging.v1.ChatAppLogEntry.
 * Use `create(ChatAppLogEntrySchema)` to create a new message.
 */
export const ChatAppLogEntrySchema: GenMessage<ChatAppLogEntry> = /*@__PURE__*/
  messageDesc(file_google_chat_logging_v1_chat_app_log_entry, 0);
