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
// @generated from file google/actions/sdk/v2/conversation/intent.proto (package google.actions.sdk.v2.conversation, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Value } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/actions/sdk/v2/conversation/intent.proto.
 */
export const file_google_actions_sdk_v2_conversation_intent: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvYWN0aW9ucy9zZGsvdjIvY29udmVyc2F0aW9uL2ludGVudC5wcm90bxIiZ29vZ2xlLmFjdGlvbnMuc2RrLnYyLmNvbnZlcnNhdGlvbiLWAQoGSW50ZW50EgwKBG5hbWUYASABKAkSRgoGcGFyYW1zGAIgAygLMjYuZ29vZ2xlLmFjdGlvbnMuc2RrLnYyLmNvbnZlcnNhdGlvbi5JbnRlbnQuUGFyYW1zRW50cnkSDQoFcXVlcnkYAyABKAkaZwoLUGFyYW1zRW50cnkSCwoDa2V5GAEgASgJEkcKBXZhbHVlGAIgASgLMjguZ29vZ2xlLmFjdGlvbnMuc2RrLnYyLmNvbnZlcnNhdGlvbi5JbnRlbnRQYXJhbWV0ZXJWYWx1ZToCOAEiUgoUSW50ZW50UGFyYW1ldGVyVmFsdWUSEAoIb3JpZ2luYWwYASABKAkSKAoIcmVzb2x2ZWQYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWVChwEKJmNvbS5nb29nbGUuYWN0aW9ucy5zZGsudjIuY29udmVyc2F0aW9uQgtJbnRlbnRQcm90b1ABWk5nb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2FjdGlvbnMvc2RrL3YyL2NvbnZlcnNhdGlvbjtjb252ZXJzYXRpb25iBnByb3RvMw", [file_google_protobuf_struct]);

/**
 * Represents an intent.
 *
 * @generated from message google.actions.sdk.v2.conversation.Intent
 */
export type Intent = Message<"google.actions.sdk.v2.conversation.Intent"> & {
  /**
   * Required. The name of the last matched intent.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. Represents parameters identified as part of intent matching.
   * This is a map of the name of the identified parameter to the value of the
   * parameter identified from user input. All parameters defined in
   * the matched intent that are identified will be surfaced here.
   *
   * @generated from field: map<string, google.actions.sdk.v2.conversation.IntentParameterValue> params = 2;
   */
  params: { [key: string]: IntentParameterValue };

  /**
   * Optional. Typed or spoken input from the end user that matched this intent.
   * This will be populated when an intent is matched, based on the user input.
   *
   * @generated from field: string query = 3;
   */
  query: string;
};

/**
 * Describes the message google.actions.sdk.v2.conversation.Intent.
 * Use `create(IntentSchema)` to create a new message.
 */
export const IntentSchema: GenMessage<Intent> = /*@__PURE__*/
  messageDesc(file_google_actions_sdk_v2_conversation_intent, 0);

/**
 * Represents a value for intent parameter.
 *
 * @generated from message google.actions.sdk.v2.conversation.IntentParameterValue
 */
export type IntentParameterValue = Message<"google.actions.sdk.v2.conversation.IntentParameterValue"> & {
  /**
   * Required. Original text value extracted from user utterance.
   *
   * @generated from field: string original = 1;
   */
  original: string;

  /**
   * Required. Structured value for parameter extracted from user input.
   * This will only be populated if the parameter is defined in the matched
   * intent and the value of the parameter could be identified during intent
   * matching.
   *
   * @generated from field: google.protobuf.Value resolved = 2;
   */
  resolved?: Value;
};

/**
 * Describes the message google.actions.sdk.v2.conversation.IntentParameterValue.
 * Use `create(IntentParameterValueSchema)` to create a new message.
 */
export const IntentParameterValueSchema: GenMessage<IntentParameterValue> = /*@__PURE__*/
  messageDesc(file_google_actions_sdk_v2_conversation_intent, 1);
