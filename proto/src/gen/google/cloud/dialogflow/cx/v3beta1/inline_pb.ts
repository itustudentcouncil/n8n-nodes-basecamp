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
// @generated from file google/cloud/dialogflow/cx/v3beta1/inline.proto (package google.cloud.dialogflow.cx.v3beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/dialogflow/cx/v3beta1/inline.proto.
 */
export const file_google_cloud_dialogflow_cx_v3beta1_inline: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvY2xvdWQvZGlhbG9nZmxvdy9jeC92M2JldGExL2lubGluZS5wcm90bxIiZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMSIpChFJbmxpbmVEZXN0aW5hdGlvbhIUCgdjb250ZW50GAEgASgMQgPgQQMiHwoMSW5saW5lU291cmNlEg8KB2NvbnRlbnQYASABKAxCxQEKJmNvbS5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy5jeC52M2JldGExQgtJbmxpbmVQcm90b1ABWjZjbG91ZC5nb29nbGUuY29tL2dvL2RpYWxvZ2Zsb3cvY3gvYXBpdjNiZXRhMS9jeHBiO2N4cGL4AQGiAgJERqoCIkdvb2dsZS5DbG91ZC5EaWFsb2dmbG93LkN4LlYzQmV0YTHqAiZHb29nbGU6OkNsb3VkOjpEaWFsb2dmbG93OjpDWDo6VjNiZXRhMWIGcHJvdG8z", [file_google_api_field_behavior]);

/**
 * Inline destination for a Dialogflow operation that writes or exports objects
 * (e.g. [intents][google.cloud.dialogflow.cx.v3beta1.Intent]) outside of
 * Dialogflow.
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.InlineDestination
 */
export type InlineDestination = Message<"google.cloud.dialogflow.cx.v3beta1.InlineDestination"> & {
  /**
   * Output only. The uncompressed byte content for the objects.
   * Only populated in responses.
   *
   * @generated from field: bytes content = 1;
   */
  content: Uint8Array;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.InlineDestination.
 * Use `create(InlineDestinationSchema)` to create a new message.
 */
export const InlineDestinationSchema: GenMessage<InlineDestination> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_inline, 0);

/**
 * Inline source for a Dialogflow operation that reads or imports objects
 * (e.g. [intents][google.cloud.dialogflow.cx.v3beta1.Intent]) into Dialogflow.
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.InlineSource
 */
export type InlineSource = Message<"google.cloud.dialogflow.cx.v3beta1.InlineSource"> & {
  /**
   * The uncompressed byte content for the objects.
   *
   * @generated from field: bytes content = 1;
   */
  content: Uint8Array;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.InlineSource.
 * Use `create(InlineSourceSchema)` to create a new message.
 */
export const InlineSourceSchema: GenMessage<InlineSource> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_inline, 1);
