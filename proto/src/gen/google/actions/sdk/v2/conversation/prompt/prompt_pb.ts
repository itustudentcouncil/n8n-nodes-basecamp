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
// @generated from file google/actions/sdk/v2/conversation/prompt/prompt.proto (package google.actions.sdk.v2.conversation, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Canvas } from "./content/canvas_pb";
import { file_google_actions_sdk_v2_conversation_prompt_content_canvas } from "./content/canvas_pb";
import type { Content } from "./content/content_pb";
import { file_google_actions_sdk_v2_conversation_prompt_content_content } from "./content/content_pb";
import type { Link } from "./content/link_pb";
import { file_google_actions_sdk_v2_conversation_prompt_content_link } from "./content/link_pb";
import type { Simple } from "./simple_pb";
import { file_google_actions_sdk_v2_conversation_prompt_simple } from "./simple_pb";
import type { Suggestion } from "./suggestion_pb";
import { file_google_actions_sdk_v2_conversation_prompt_suggestion } from "./suggestion_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/actions/sdk/v2/conversation/prompt/prompt.proto.
 */
export const file_google_actions_sdk_v2_conversation_prompt_prompt: GenFile = /*@__PURE__*/
  fileDesc("CjZnb29nbGUvYWN0aW9ucy9zZGsvdjIvY29udmVyc2F0aW9uL3Byb21wdC9wcm9tcHQucHJvdG8SImdvb2dsZS5hY3Rpb25zLnNkay52Mi5jb252ZXJzYXRpb24iqAMKBlByb21wdBISCgZhcHBlbmQYASABKAhCAhgBEhAKCG92ZXJyaWRlGAggASgIEkAKDGZpcnN0X3NpbXBsZRgCIAEoCzIqLmdvb2dsZS5hY3Rpb25zLnNkay52Mi5jb252ZXJzYXRpb24uU2ltcGxlEjwKB2NvbnRlbnQYAyABKAsyKy5nb29nbGUuYWN0aW9ucy5zZGsudjIuY29udmVyc2F0aW9uLkNvbnRlbnQSPwoLbGFzdF9zaW1wbGUYBCABKAsyKi5nb29nbGUuYWN0aW9ucy5zZGsudjIuY29udmVyc2F0aW9uLlNpbXBsZRJDCgtzdWdnZXN0aW9ucxgFIAMoCzIuLmdvb2dsZS5hY3Rpb25zLnNkay52Mi5jb252ZXJzYXRpb24uU3VnZ2VzdGlvbhI2CgRsaW5rGAYgASgLMiguZ29vZ2xlLmFjdGlvbnMuc2RrLnYyLmNvbnZlcnNhdGlvbi5MaW5rEjoKBmNhbnZhcxgJIAEoCzIqLmdvb2dsZS5hY3Rpb25zLnNkay52Mi5jb252ZXJzYXRpb24uQ2FudmFzQocBCiZjb20uZ29vZ2xlLmFjdGlvbnMuc2RrLnYyLmNvbnZlcnNhdGlvbkILUHJvbXB0UHJvdG9QAVpOZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hY3Rpb25zL3Nkay92Mi9jb252ZXJzYXRpb247Y29udmVyc2F0aW9uYgZwcm90bzM", [file_google_actions_sdk_v2_conversation_prompt_content_canvas, file_google_actions_sdk_v2_conversation_prompt_content_content, file_google_actions_sdk_v2_conversation_prompt_content_link, file_google_actions_sdk_v2_conversation_prompt_simple, file_google_actions_sdk_v2_conversation_prompt_suggestion]);

/**
 * Represent a response to a user.
 *
 * @generated from message google.actions.sdk.v2.conversation.Prompt
 */
export type Prompt = Message<"google.actions.sdk.v2.conversation.Prompt"> & {
  /**
   * Optional. Mode for how this messages should be merged with previously
   * defined messages.
   * "false" will clear all previously defined messages (first and last
   * simple, content, suggestions link and canvas) and add messages defined in
   * this prompt.
   * "true" will add messages defined in this prompt to messages defined in
   * previous responses. Setting this field to "true" will also enable appending
   * to some fields inside Simple prompts, the Suggestion prompt and the Canvas
   * prompt (part of the Content prompt). The Content and Link messages will
   * always be overwritten if defined in the prompt.
   * Default value is "false".
   *
   * @generated from field: bool append = 1 [deprecated = true];
   * @deprecated
   */
  append: boolean;

  /**
   * Optional. Mode for how this messages should be merged with previously
   * defined messages.
   * "true" clears all previously defined messages (first and last
   * simple, content, suggestions link and canvas) and adds messages defined in
   * this prompt.
   * "false" adds messages defined in this prompt to messages defined in
   * previous responses. Leaving this field to "false" also enables
   * appending to some fields inside Simple prompts, the Suggestions prompt,
   * and the Canvas prompt (part of the Content prompt). The Content and Link
   * messages are always overwritten if defined in the prompt. Default
   * value is "false".
   *
   * @generated from field: bool override = 8;
   */
  override: boolean;

  /**
   * Optional. The first voice and text-only response.
   *
   * @generated from field: google.actions.sdk.v2.conversation.Simple first_simple = 2;
   */
  firstSimple?: Simple;

  /**
   * Optional. A content like a card, list or media to display to the user.
   *
   * @generated from field: google.actions.sdk.v2.conversation.Content content = 3;
   */
  content?: Content;

  /**
   * Optional. The last voice and text-only response.
   *
   * @generated from field: google.actions.sdk.v2.conversation.Simple last_simple = 4;
   */
  lastSimple?: Simple;

  /**
   * Optional. Suggestions to be displayed to the user which will always appear
   * at the end of the response.
   * If the "override" field in the containing prompt is "false", the titles
   * defined in this field will be added to titles defined in any previously
   * defined suggestions prompts and duplicate values will be removed.
   *
   * @generated from field: repeated google.actions.sdk.v2.conversation.Suggestion suggestions = 5;
   */
  suggestions: Suggestion[];

  /**
   * Optional. An additional suggestion chip that can link out to the associated app
   * or site.
   * The chip will be rendered with the title "Open <name>". Max 20 chars.
   *
   * @generated from field: google.actions.sdk.v2.conversation.Link link = 6;
   */
  link?: Link;

  /**
   * Optional. Represents a Interactive Canvas response to be sent to the user.
   *
   * @generated from field: google.actions.sdk.v2.conversation.Canvas canvas = 9;
   */
  canvas?: Canvas;
};

/**
 * Describes the message google.actions.sdk.v2.conversation.Prompt.
 * Use `create(PromptSchema)` to create a new message.
 */
export const PromptSchema: GenMessage<Prompt> = /*@__PURE__*/
  messageDesc(file_google_actions_sdk_v2_conversation_prompt_prompt, 0);
