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
// @generated from file google/actions/sdk/v2/interactionmodel/prompt/static_simple_prompt.proto (package google.actions.sdk.v2.interactionmodel.prompt, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../../api/field_behavior_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/actions/sdk/v2/interactionmodel/prompt/static_simple_prompt.proto.
 */
export const file_google_actions_sdk_v2_interactionmodel_prompt_static_simple_prompt: GenFile = /*@__PURE__*/
  fileDesc("Ckhnb29nbGUvYWN0aW9ucy9zZGsvdjIvaW50ZXJhY3Rpb25tb2RlbC9wcm9tcHQvc3RhdGljX3NpbXBsZV9wcm9tcHQucHJvdG8SLWdvb2dsZS5hY3Rpb25zLnNkay52Mi5pbnRlcmFjdGlvbm1vZGVsLnByb21wdCKkAQoSU3RhdGljU2ltcGxlUHJvbXB0ElsKCHZhcmlhbnRzGAEgAygLMkkuZ29vZ2xlLmFjdGlvbnMuc2RrLnYyLmludGVyYWN0aW9ubW9kZWwucHJvbXB0LlN0YXRpY1NpbXBsZVByb21wdC5WYXJpYW50GjEKB1ZhcmlhbnQSEwoGc3BlZWNoGAEgASgJQgPgQQESEQoEdGV4dBgCIAEoCUID4EEBQqMBCjFjb20uZ29vZ2xlLmFjdGlvbnMuc2RrLnYyLmludGVyYWN0aW9ubW9kZWwucHJvbXB0QhdTdGF0aWNTaW1wbGVQcm9tcHRQcm90b1ABWlNnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2FjdGlvbnMvc2RrL3YyL2ludGVyYWN0aW9ubW9kZWwvcHJvbXB0O3Byb21wdGIGcHJvdG8z", [file_google_api_field_behavior]);

/**
 * Represents a simple prompt to be send to a user.
 *
 * @generated from message google.actions.sdk.v2.interactionmodel.prompt.StaticSimplePrompt
 */
export type StaticSimplePrompt = Message<"google.actions.sdk.v2.interactionmodel.prompt.StaticSimplePrompt"> & {
  /**
   * List of possible variants.
   *
   * @generated from field: repeated google.actions.sdk.v2.interactionmodel.prompt.StaticSimplePrompt.Variant variants = 1;
   */
  variants: StaticSimplePrompt_Variant[];
};

/**
 * Describes the message google.actions.sdk.v2.interactionmodel.prompt.StaticSimplePrompt.
 * Use `create(StaticSimplePromptSchema)` to create a new message.
 */
export const StaticSimplePromptSchema: GenMessage<StaticSimplePrompt> = /*@__PURE__*/
  messageDesc(file_google_actions_sdk_v2_interactionmodel_prompt_static_simple_prompt, 0);

/**
 * Represents a variant which is part of the simple prompt.
 *
 * @generated from message google.actions.sdk.v2.interactionmodel.prompt.StaticSimplePrompt.Variant
 */
export type StaticSimplePrompt_Variant = Message<"google.actions.sdk.v2.interactionmodel.prompt.StaticSimplePrompt.Variant"> & {
  /**
   * Optional. Represents the speech to be spoken to the user.  Can be SSML or text to
   * speech.
   * By default, speech will be appended to previous Simple prompt's
   * speech. If the `override` field in the containing prompt is `true` the
   * speech defined in this field will override previous Simple prompt's
   * speech.
   *
   * @generated from field: string speech = 1;
   */
  speech: string;

  /**
   * Optional. Text to display in the chat bubble. If not given, a display rendering of
   * the speech field above will be used. Limited to 640 chars.
   * By default, text will be appended to previous Simple prompt's text.
   * If the `override` field in the containing prompt is `true` the text
   * defined in this field will override previous Simple prompt's text.
   *
   * @generated from field: string text = 2;
   */
  text: string;
};

/**
 * Describes the message google.actions.sdk.v2.interactionmodel.prompt.StaticSimplePrompt.Variant.
 * Use `create(StaticSimplePrompt_VariantSchema)` to create a new message.
 */
export const StaticSimplePrompt_VariantSchema: GenMessage<StaticSimplePrompt_Variant> = /*@__PURE__*/
  messageDesc(file_google_actions_sdk_v2_interactionmodel_prompt_static_simple_prompt, 0, 0);
