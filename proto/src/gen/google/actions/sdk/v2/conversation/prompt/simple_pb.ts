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
// @generated from file google/actions/sdk/v2/conversation/prompt/simple.proto (package google.actions.sdk.v2.conversation, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/actions/sdk/v2/conversation/prompt/simple.proto.
 */
export const file_google_actions_sdk_v2_conversation_prompt_simple: GenFile = /*@__PURE__*/
  fileDesc("CjZnb29nbGUvYWN0aW9ucy9zZGsvdjIvY29udmVyc2F0aW9uL3Byb21wdC9zaW1wbGUucHJvdG8SImdvb2dsZS5hY3Rpb25zLnNkay52Mi5jb252ZXJzYXRpb24iJgoGU2ltcGxlEg4KBnNwZWVjaBgBIAEoCRIMCgR0ZXh0GAIgASgJQocBCiZjb20uZ29vZ2xlLmFjdGlvbnMuc2RrLnYyLmNvbnZlcnNhdGlvbkILU2ltcGxlUHJvdG9QAVpOZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hY3Rpb25zL3Nkay92Mi9jb252ZXJzYXRpb247Y29udmVyc2F0aW9uYgZwcm90bzM");

/**
 * Represents a simple prompt to be send to a user.
 *
 * @generated from message google.actions.sdk.v2.conversation.Simple
 */
export type Simple = Message<"google.actions.sdk.v2.conversation.Simple"> & {
  /**
   * Optional. Represents the speech to be spoken to the user. Can be SSML or
   * text to speech.
   * If the "override" field in the containing prompt is "true", the speech
   * defined in this field replaces the previous Simple prompt's speech.
   *
   * @generated from field: string speech = 1;
   */
  speech: string;

  /**
   * Optional text to display in the chat bubble. If not given, a display
   * rendering of the speech field above will be used. Limited to 640
   * chars.
   * If the "override" field in the containing prompt is "true", the text
   * defined in this field replaces to the previous Simple prompt's text.
   *
   * @generated from field: string text = 2;
   */
  text: string;
};

/**
 * Describes the message google.actions.sdk.v2.conversation.Simple.
 * Use `create(SimpleSchema)` to create a new message.
 */
export const SimpleSchema: GenMessage<Simple> = /*@__PURE__*/
  messageDesc(file_google_actions_sdk_v2_conversation_prompt_simple, 0);
